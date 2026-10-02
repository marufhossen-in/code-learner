import type { Lesson } from '../../../lib/types';

export const VdbCapstoneLesson: Lesson = {
  slug: 'vdb-capstone',
  tech: 'vector-databases',
  title: {
    en: 'VDB Capstone',
    bn: 'ভেক্টর ডেটাবেজ ক্যাপস্টোন — পূর্ণাঙ্গ প্রোডাকশন পাইপলাইন',
  },
  summary: {
    en: 'Deploy an end-to-end vector database pipeline. Index 1,000 vectors across 10 buckets, probe 2 buckets to scan 200 candidates, filter to 50 items with metadata, rerank top-5 results, and verify that 5/5 clear the 0.75 threshold.',
    bn: 'একটি পূর্ণাঙ্গ ভেক্টর ডেটাবেজ পাইপলাইন তৈরি করুন। ১,০০০ ভেক্টর ১০টি ক্লাস্টারে ভাগ করে ২টি ক্লাস্টার স্ক্যান করে ২০০ প্রার্থী বাছা হয়, মেটাডেটা ফিল্টারে ৫০টি টিকে থাকে, সেরা ৫টি রি-র‍্যাংক করা হয় এবং ৫/৫টি ফলাফল ০.৭৫ থ্রেশহোল্ড অতিক্রম করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The unified serving path', bn: 'WHAT — সমন্বিত কুয়েরি এক্সিকিউশন পাইপলাইন' },
    },
    {
      type: 'para',
      text: {
        en: 'A production vector database integrates every optimization into a unified execution path. An incoming query first hits an inverted file index to probe 2 of 10 buckets, narrowing 1,000 vectors to 200 candidates. Vector similarity scoring evaluates these 200 candidates, and structured metadata filters prune them to 50 survivors. Finally, a cross-encoder reranker inspects the survivors to extract the top-5 results. If all 5 results clear the 0.75 relevance gate, the pipeline deploys them to the end user.',
        bn: 'একটি প্রোডাকশন ভেক্টর ডেটাবেজ প্রতিটি অপ্টিমাইজেশনকে একটি সমন্বিত এক্সিকিউশন পাইপলাইনে একত্রিত করে। একটি ইনকামিং কুয়েরি প্রথমে ইনভার্টেড ফাইল ইনডেক্সে ১০টির মধ্যে ২টি ক্লাস্টার স্ক্যান করে ১,০০০ ভেক্টর থেকে ২০০টি প্রার্থী বেছে নেয়। এরপর ভেক্টর সাদৃশ্য হিসেব করে মেটাডেটা ফিল্টারের মাধ্যমে সংখ্যা কমিয়ে ৫০টিতে নামিয়ে আনা হয়। সবশেষে একটি ক্রস-এনকোডার সেরা ৫টি ফলাফল নির্ধারণ করে। যদি ৫টি ফলাফলই ০.৭৫ থ্রেশহোল্ড অতিক্রম করে, তবে পাইপলাইন তা ব্যবহারকারীর কাছে সফলভাবে পরিবেশন করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Six stages, one verdict', bn: 'ছয় ধাপের সুবিন্যস্ত ভেক্টর পাইপলাইন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Six stage vector database path">
<g font-size="9" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="8" y="80" width="92" height="58" rx="8" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="54" y="102">INDEX 🪣</text>
<text x="54" y="118">10 bkt</text>
<text x="106" y="112" font-size="12">→</text>
<rect x="118" y="80" width="92" height="58" rx="8" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="164" y="102">PROBE ⚡</text>
<text x="164" y="118">200</text>
<text x="216" y="112" font-size="12">→</text>
<rect x="228" y="80" width="92" height="58" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
<text x="274" y="102">COSINE 📐</text>
<text x="274" y="118">200</text>
<text x="326" y="112" font-size="12">→</text>
<rect x="338" y="80" width="92" height="58" rx="8" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
<text x="384" y="102">FILTER 🏷️</text>
<text x="384" y="118">50</text>
<text x="436" y="112" font-size="12">→</text>
<rect x="448" y="80" width="82" height="58" rx="8" fill="#64748b" opacity="0.15" stroke="#64748b" stroke-width="2"/>
<text x="489" y="102">RERANK ⚖️</text>
<text x="489" y="118">top-5</text>
<text x="536" y="112" font-size="12">→</text>
<rect x="548" y="80" width="84" height="58" rx="8" fill="#16a34a" opacity="0.2" stroke="#16a34a" stroke-width="2"/>
<text x="590" y="102">GATE ✅</text>
<text x="590" y="118">SHIP</text>
</g>
<text x="320" y="50" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">one query walks the whole database — bucketed, probed, judged</text>
<rect x="190" y="165" width="260" height="32" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="186" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">5/5 clear 0.75 → SHIP ✓</text>
<text x="320" y="218" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">L1 crisis · L2 ANN · L3 IVF · L4 graphs · L5 PQ · L6 shards · L7 funnel</text>
</svg>`,
      caption: {
        en: 'A production vector database connects every subsystem into an orderly, audited pipeline where each stage enforces its latency and accuracy budget.',
        bn: 'একটি প্রোডাকশন ভেক্টর ডেটাবেজ প্রতিটি সাব-সিস্টেমকে একটি সুশৃঙ্খল পাইপলাইনে যুক্ত করে যেখানে প্রতিটি স্তর তার ল্যাটেন্সি এবং নির্ভুলতার বাজেট রক্ষা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Production serving path',
          def: {
            en: 'The complete sequence of query operations that transforms raw user input into verified top-ranked results: index routing, candidate probing, similarity scoring, metadata pruning, cross-encoder reranking, and confidence gating.',
            bn: 'কুয়েরি পরিচালনার পূর্ণাঙ্গ ধারাবাহিক পাইপলাইন যা ব্যবহারকারীর ইনপুটকে ইনডেক্স রাউটিং, ক্যান্ডিডেট অনুসন্ধান, সাদৃশ্য নির্ণয়, মেটাডেটা ফিল্টার, ক্রস-এনকোডার রি-র‍্যাংকিং এবং কনফিডেন্স গেটিংয়ের মাধ্যমে চূড়ান্ত ফলাফলে রূপান্তর করে।',
          },
        },
        {
          term: 'Stage budget verification',
          def: {
            en: 'The architectural practice of monitoring latency, candidate counts, and memory thresholds at every stage to prevent query timeouts.',
            bn: 'কুয়েরির সময়সীমা অতিক্রম রোধ করতে প্রতিটি ধাপে ল্যাটেন্সি, প্রার্থীর সংখ্যা এবং মেমরি সীমা নিবিড়ভাবে পর্যবেক্ষণ করার স্থাপত্য কৌশল।',
          },
        },
        {
          term: 'Deployment gate',
          def: {
            en: 'A strict quality threshold (such as minimum cosine similarity of 0.75 across top-5 items) that candidates must satisfy before being returned to the application context.',
            bn: 'একটি নির্দিষ্ট গুণমান থ্রেশহোল্ড (যেমন শীর্ষ ৫টি নথির প্রতিটিতে ন্যূনতম ০.৭৫ কোসাইন সাদৃশ্য) যা ব্যবহারকারীর কাছে ফলাফল প্রেরণের আগে নিশ্চিত করতে হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Systems triumph over components', bn: 'কেন — বিচ্ছিন্ন কম্পোনেন্টের চেয়ে সমন্বিত সিস্টেম গুরুত্বপূর্ণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Knowing algorithms in isolation is insufficient: wiring indexing, quantization, filtering, and reranking creates the actual production product.', bn: 'অ্যালগরিদম আলাদাভাবে জানা যথেষ্ট নয়: ইনডেক্সিং, কোয়ান্টাইজেশন, ফিল্টারিং এবং রি-র‍্যাংকিং একত্রিত করলেই কার্যকর প্রোডাকশন পণ্য তৈরি হয়।' },
        { en: 'Production outages stem from skipped architectural controls: omitting probe caps floods memory, while skipping rerankers ships poor quality.', bn: 'অধিকাংশ সিস্টেম বিভ্রাট ঘটে প্রতিরক্ষামূলক নিয়ন্ত্রণ এড়িয়ে যাওয়ার কারণে: প্রব সীমা না থাকলে মেমরি ক্র্যাশ করে, আবার রি-র‍্যাংক না করলে মানহীন তথ্য পৌঁছায়।' },
        { en: 'The multi-stage path powers modern AI infrastructure: vector retrieval engines monetize end-to-end query execution reliability.', bn: 'বহু-স্তরের এই পাইপলাইন আধুনিক এআই অবকাঠামোর মূল চালিকাশক্তি: ভেক্টর ইঞ্জিনগুলো মূলত স্থিতিশীল কুয়েরি এক্সিকিউশনের নির্ভরযোগ্যতার ওপর টিকে থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Walk the path in 6 steps', bn: 'HOW — ৬টি ধাপে পূর্ণাঙ্গ পাইপলাইন এক্সিকিউশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Index clustering', bn: '১. ক্লাস্টার ইনডেক্স' }, text: { en: 'Partition 1,000 vector records across 10 Voronoi centroids.', bn: '১,০০০ ভেক্টর রেকর্ডকে ১০টি ভরোনয় ক্লাস্টারে বিন্যস্ত করুন।' } },
        { title: { en: '2. Centroid probing', bn: '২. সেন্ট্রয়েড নির্বাচন' }, text: { en: 'Inspect the 2 closest centroids to expose 200 candidate vectors.', bn: 'নিকটতম ২টি ক্লাস্টার নির্বাচন করে ২০০টি প্রার্থী ভেক্টর চিহ্নিত করুন।' } },
        { title: { en: '3. Vector similarity', bn: '৩. ভেক্টর সাদৃশ্য নির্ণয়' }, text: { en: 'Calculate cosine similarity across the 200 probed vectors.', bn: '২০০টি চিহ্নিত ভেক্টরের ওপর কোসাইন সাদৃশ্য গণনা সম্পন্ন করুন।' } },
        { title: { en: '4. Metadata filtering', bn: '৪. মেটাডেটা ফিল্টারিং' }, text: { en: 'Apply relational tags to narrow 200 vectors down to 50 survivors.', bn: 'রিলেশনাল ট্যাগ প্রয়োগ করে ২০০টি ভেক্টর কমিয়ে ৫০টিতে আনুন।' } },
        { title: { en: '5. Deep reranking', bn: '৫. গভীর রি-র‍্যাংকিং' }, text: { en: 'Cross-encoder scores 50 survivors to isolate the top-5 items.', bn: 'ক্রস-এনকোডারের মাধ্যমে ৫০টি প্রার্থী থেকে সেরা ৫টি নথি বের করুন।' } },
        { title: { en: '6. Quality gating', bn: '৬. গুণমান গেটিং' }, text: { en: 'Confirm all top-5 items clear 0.75 similarity before shipping.', bn: 'ফলাফল প্রেরণের আগে নিশ্চিত করুন সেরা ৫টির প্রতিটি ০.৭৫ সীমা পার হয়েছে।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'vdb_capstone_pipeline.py',
      code: `def run_vdb_pipeline(total_docs, n_buckets, n_probe, filter_target, top_k, threshold):
    # Stage 1: Indexing & Probing
    docs_per_bucket = total_docs // n_buckets
    scanned_candidates = n_probe * docs_per_bucket
    
    # Stage 2: Scored & Filtered
    survivors = filter_target
    
    # Stage 3: Top-K Reranking & Quality Gating
    reranked_scores = [0.91, 0.87, 0.83, 0.79, 0.76]
    passed_gate = [s for s in reranked_scores if s >= threshold]
    ship_verdict = len(passed_gate) == top_k
    
    return scanned_candidates, survivors, reranked_scores, passed_gate, ship_verdict

# Standard query evaluation (bar = 0.75)
scanned, filtered, scores, passed, ship = run_vdb_pipeline(
    total_docs=1000, n_buckets=10, n_probe=2, filter_target=50, top_k=5, threshold=0.75
)

print("Stage 1 (IVF): 10 buckets, probe 2 -> scan 200 candidates")
print(f"Stage 2 (Cosine + Filter): Scored {scanned} -> filter to {filtered} survivors")
print(f"Stage 3 (Rerank): Top-5 scores = {scores}")
print(f"Stage 4 (Gate 0.75): {len(passed)}/5 clear threshold -> {'SHIP' if ship else 'HOLD'}")

# Strict evaluation (bar = 0.85)
_, _, _, passed_strict, ship_strict = run_vdb_pipeline(
    total_docs=1000, n_buckets=10, n_probe=2, filter_target=50, top_k=5, threshold=0.85
)
print(f"Strict Gate (0.85): {len(passed_strict)}/5 clear threshold -> {'SHIP' if ship_strict else 'HOLD'}")

# Output:
# Stage 1 (IVF): 10 buckets, probe 2 -> scan 200 candidates
# Stage 2 (Cosine + Filter): Scored 200 -> filter to 50 survivors
# Stage 3 (Rerank): Top-5 scores = [0.91, 0.87, 0.83, 0.79, 0.76]
# Stage 4 (Gate 0.75): 5/5 clear threshold -> SHIP
# Strict Gate (0.85): 2/5 clear threshold -> HOLD`,
      caption: {
        en: 'The Python pipeline models the complete path. 1,000 vectors partition into 10 buckets, probing 2 buckets scans 200 candidates, metadata filtering keeps 50, and top-5 scores (0.91…0.76) clear the 0.75 gate (5/5 SHIP).',
        bn: 'পাইথন পাইপলাইন সম্পূর্ণ পথটি সিমুলেট করে। ১,০০০ ভেক্টর ১০টি ক্লাস্টারে ভাগ হয়, ২টি ক্লাস্টার প্রব করলে ২০০ প্রার্থী স্ক্যান হয়, মেটাডেটা ফিল্টারিং ৫০টি রাখে এবং সেরা ৫টি স্কোর (০.৯১…০.৭৬) ০.৭৫ গেট পার করে (৫/৫ SHIP)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive pipeline simulator', bn: 'INSIDE — জীবন্ত এন্ড-টু-এন্ড পাইপলাইন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator executes the complete serving chain. It indexes 1,000 documents into 10 buckets, probes 2 centroids (scan 200), computes cosine similarity, filters by metadata to 50 items, reranks top-5 candidates (0.91, 0.87, 0.83, 0.79, 0.76), and tests against the 0.75 threshold. Raising the bar to 0.85 causes 3 of the 5 candidates to fail, triggering a safety HOLD.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি সম্পূর্ণ পাইপলাইন পরিচালনা করে। এটি ১,০০০ ডকুমেন্ট ১০টি ক্লাস্টারে ভাগ করে ২টি সেন্ট্রয়েড অনুসন্ধান (২০০ স্ক্যান) করে, কোসাইন সাদৃশ্য নির্ণয় শেষে মেটাডেটা দিয়ে ৫০টিতে ফিল্টার করে, সেরা ৫টি রি-র‍্যাংক (০.৯১, ০.৮৭, ০.৮৩, ০.৭৯, ০.৭৬) করে এবং ০.৭৫ থ্রেশহোল্ডে যাচাই করে। থ্রেশহোল্ড ০.৮৫ এ তুললে ৫টির মধ্যে ৩টি বাদ পড়ে এবং সেফটি HOLD সক্রিয় হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Serving path live (raise BAR, press Run)', bn: 'Serving path live (BAR তুলে Run)' },
      html: '<h3>Six stages, one verdict</h3>\n<pre id="out"></pre>\n<p>Console walks the path.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdfa; border: 1px solid #5eead4; border-radius: 8px; padding: 10px; }',
      js: 'const BAR = 0.75; // ← try 0.85!\nconst N = 1000, NLIST = 10, NPROBE = 2;\nconst scan = NPROBE * (N / NLIST);\nconsole.log("index: " + NLIST + " buckets · probe " + NPROBE + " → scan " + scan + " ✓");\nconst kept = 50;\nconsole.log("cosine: " + scan + " scored · filter → " + kept + " ✓");\nconst tops = [0.91, 0.87, 0.83, 0.79, 0.76];\nconst pass = tops.filter((v) => v >= BAR).length;\nconsole.log("rerank: top-5 [" + tops.join(",") + "] · " + pass + "/5 clear " + BAR);\nconst ship = pass === 5;\ndocument.getElementById("out").textContent = "scan " + scan + " · filter " + kept + " · top-5 " + pass + "/5 · " + (ship ? "SHIP ✓" : "HOLD ✗");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Architectural principles', bn: 'ফলাফল — প্রোডাকশন ভেক্টর আর্কিটেকচার নীতি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Pipeline discipline: execute indexing, probing, cosine scoring, metadata filtering, cross-encoder reranking, and quality gating on every query.', bn: 'পাইপলাইন শৃঙ্খলা: প্রতিটি কুয়েরিতে ইনডেক্সিং, প্রবিং, কোসাইন স্কোরিং, মেটাডেটা ফিল্টারিং, ক্রস-এনকোডার রি-র‍্যাংকিং এবং কোয়ালিটি গেটিং যথাযথভাবে পরিচালনা করুন।' },
        { en: 'Fail-safe design: underperforming stages must trigger explicit HOLD states rather than leaking low-quality responses to clients.', bn: 'নিরাপদ ব্যর্থতার নীতি: গুণমান বজায় না থাকলে সিস্টেমের ত্রুটিহীন প্রতিক্রিয়া পাঠানো উচিত নয়, বরং স্পষ্ট HOLD অবস্থায় চলে যাওয়া শ্রেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Pipeline vulnerabilities', bn: 'ডিবাগ — প্রোডাকশন পাইপলাইনের দুর্বলতা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Unprobed floods (the open dam)', bn: 'অনিয়ন্ত্রিত ক্লাস্টার স্ক্যানিং (Unprobed floods)' },
      text: {
        en: 'Failing to cap centroid probes causes the system to search every bucket: probing 10 of 10 clusters degrades IVF back into brute-force linear scanning. Symptoms: query latency increases linearly with total collection size. Cure: cap nprobe at 2 to 5 centroids regardless of query volume.',
        bn: 'সেন্ট্রয়েড অনুসন্ধানে সীমা না দিলে সিস্টেম প্রতিটি ক্লাস্টার স্ক্যান করতে শুরু করে: ১০টির মধ্যে ১০টি ক্লাস্টার স্ক্যান করলে IVF পুনরায় ধীরগতির ব্রুট-ফোর্সে রূপ নেয়। লক্ষণ: ডেটাসেটের বৃদ্ধির সাথে সাথে কুয়েরি ল্যাটেন্সি সমানুপাতিক হারে বেড়ে যাওয়া। প্রতিকার: কুয়েরির পরিমাণের ওপর নির্ভর না করে nprobe কঠোরভাবে ২ থেকে ৫ এর মধ্যে সীমাবদ্ধ রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Unjudged tops (the unvetted stars)', bn: 'অযাচাইকৃত শীর্ষ ফলাফলের ফাঁদ (Unjudged tops)' },
      text: {
        en: 'Bypassing cross-encoder reranking delivers raw bi-encoder matches that fail subtle contextual nuances. Symptoms: queries return mathematically close vectors that contain factually irrelevant text. Cure: always pass metadata-filtered survivors through a neural reranker before returning results.',
        bn: 'ক্রস-এনকোডার রি-র‍্যাংকিং এড়িয়ে সরাসরি কাঁচা ভেক্টর সাদৃশ্যের ওপর নির্ভর করলে সূক্ষ্ম অর্থগত ত্রুটি ঘটে। লক্ষণ: কুয়েরিতে এমন নথি উঠে আসে যা ভেক্টর স্পেসে কাছাকাছি কিন্তু টেক্সটের দিক থেকে অপ্রাসঙ্গিক। প্রতিকার: মেটাডেটা ফিল্টারের পর শীর্ষ প্রার্থীদের সবসময় নিউরাল রি-র‍্যাংকারের মাধ্যমে যাচাই করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production deployments', bn: 'বাস্তব ক্ষেত্র — বাণিজ্যিক ভেক্টর ডেটাবেজ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Managed vector cloud services (Pinecone, Qdrant, Milvus): implement this multi-stage pipeline across distributed worker nodes.', bn: 'ম্যানেজড ক্লাউড ভেক্টর ডেটাবেজ (Pinecone, Qdrant, Milvus): এই বহু-স্তরের পাইপলাইনটি ডিস্ট্রিবিউটেড ক্লাস্টারের মধ্যে পরিচালনা করে।' },
        { en: 'Enterprise RAG architectures: use similarity thresholds and quality gates to determine whether to cite retrieved documents or request clarification.', bn: 'এন্টারপ্রাইজ RAG সিস্টেম: পুনরুদ্ধারকৃত নথির স্কোর যাচাই করে সিদ্ধান্ত নেয় যে তথ্য ব্যবহার করা হবে নাকি ব্যবহারকারীর কাছে আরও স্পষ্ট ব্যাখ্যা চাওয়া হবে।' },
        { en: 'Real-time e-commerce recommendation engines: balance millisecond IVF probing with fine-tuned metadata filtering across millions of catalog items.', bn: 'রিয়েল-টাইম ই-কমার্স রিকমেন্ডেশন সিস্টেম: লক্ষ লক্ষ পণ্যের ক্যাটালগে দ্রুত IVF সার্চ এবং মেটাডেটা ফিল্টারিং একসাথে সমন্বয় করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Advancing into Generative Systems', bn: 'পরবর্তী ধাপ — জেনারেটিভ সিস্টেমের পথে' },
    },
    {
      type: 'para',
      text: {
        en: 'With vector database mechanics thoroughly mastered, our engineering journey advances to Retrieval-Augmented Generation (RAG). You now possess the foundational knowledge needed to build scalable vector retrieval systems that anchor large language models in factual truth.',
        bn: 'ভেক্টর ডেটাবেজের অভ্যন্তরীণ কলাকৌশল পুঙ্খানুপুঙ্খভাবে আয়ত্ত করার পর, পরবর্তী ধাপ হলো রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG)। বৃহৎ ল্যাঙ্গুয়েজ মডেলগুলোকে সঠিক তথ্যে সমৃদ্ধ করার জন্য প্রয়োজনীয় স্কেলেবল ভেক্টর সিস্টেম তৈরি করার পূর্ণাঙ্গ ভিত এখন আপনার আয়ত্তে।',
      },
    },
  ],
  exercises: [
    {
      id: 'vcap-ex-1',
      kind: 'mcq',
      topic: 'path-order',
      question: {
        en: 'What is the correct sequential order of stages in a production vector database pipeline?',
        bn: 'একটি প্রোডাকশন ভেক্টর ডেটাবেজ পাইপলাইনের ধাপগুলোর সঠিক ক্রম কোনটি?',
      },
      options: [
        {
          en: 'Index clustering → Centroid probing → Cosine scoring → Metadata filtering → Cross-encoder rerank → Quality gate',
          bn: 'ক্লাস্টার ইনডেক্স → সেন্ট্রয়েড প্রবিং → কোসাইন স্কোরিং → মেটাডেটা ফিল্টারিং → ক্রস-এনকোডার রি-র‍্যাংক → কোয়ালিটি গেট',
        },
        {
          en: 'Quality gate → Rerank → Metadata filter → Centroid probe',
          bn: 'কোয়ালিটি গেট → রি-র‍্যাংক → মেটাডেটা ফিল্টার → সেন্ট্রয়েড প্রব',
        },
        {
          en: 'Rerank → Index clustering → Deployment ship',
          bn: 'রি-র‍্যাংক → ক্লাস্টার ইনডেক্স → ডেপ্লয়মেন্ট',
        },
        {
          en: 'Centroid probe → Centroid probe → Centroid probe',
          bn: 'সেন্ট্রয়েড প্রব → সেন্ট্রয়েড প্রব → সেন্ট্রয়েড প্রব',
        },
      ],
      answer: 0,
      hint: { en: 'Clustering and broad narrowing precede neural judging and quality gates.', bn: 'ক্লাস্টারিং এবং দ্রুত প্রাথমিক সংকোচন নিউরাল বিচার ও কোয়ালিটি গেটের পূর্বে ঘটে।' },
      explanation: {
        en: 'Queries route through clustered centroids, score probed vectors, prune by relational metadata, rerank candidates with cross-attention, and verify quality thresholds before shipping.',
        bn: 'কুয়েরি প্রথমে ক্লাস্টার সেন্ট্রয়েডে যায়, প্রবকৃত ভেক্টর স্কোর করে, মেটাডেটা ফিল্টারে ছাঁটাই হয়, ক্রস-অ্যাটেনশনে পুনর্মূল্যায়িত হয় এবং থ্রেশহোল্ড যাচাই শেষে পরিবেশন করা হয়।',
      },
    },
    {
      id: 'vcap-ex-2',
      kind: 'mcq',
      topic: 'ship-check',
      question: {
        en: 'When the top-5 candidates yield scores of 0.91, 0.87, 0.83, 0.79, and 0.76 at a quality bar of 0.75, what is the deployment verdict?',
        bn: 'যখন শীর্ষ ৫টি প্রার্থীর স্কোর ০.৭৫ থ্রেশহোল্ডে যথাক্রমে ০.৯১, ০.৮৭, ০.৮৩, ০.৭৯ এবং ০.৭৬ হয়, তখন ডেপ্লয়মেন্টের চূড়ান্ত রায় কী?',
      },
      options: [
        {
          en: 'SHIP — all 5/5 candidates clear the 0.75 threshold (lowest score is 0.76)',
          bn: 'SHIP — ৫/৫টি প্রার্থীই ০.৭৫ থ্রেশহোল্ড অতিক্রম করেছে (সর্বনিম্ন স্কোর ০.৭৬)',
        },
        {
          en: 'HOLD — the lowest score of 0.76 is deemed unacceptable',
          bn: 'HOLD — ০.৭৬ স্কোরটিকে অগ্রহণযোগ্য বিবেচনা করা হয়',
        },
        {
          en: 'HOLD — exactly 10 candidates are required before shipping',
          bn: 'HOLD — ডেপ্লয় করার জন্য ঠিক ১০টি প্রার্থী প্রয়োজন',
        },
        {
          en: 'SHIP — quality threshold bars are purely optional',
          bn: 'SHIP — কোয়ালিটি থ্রেশহোল্ড সম্পূর্ণ ঐচ্ছিক',
        },
      ],
      answer: 0,
      hint: { en: 'Compare the minimum score (0.76) against the quality bar (0.75).', bn: 'সর্বনিম্ন স্কোর (০.৭৬) এর সাথে কোয়ালিটি বার (০.৭৫) তুলনা করুন।' },
      explanation: {
        en: 'Because the lowest score of 0.76 is greater than or equal to the 0.75 bar, all 5 candidates clear the gate (5/5), granting a green SHIP verdict.',
        bn: 'যেহেতু সর্বনিম্ন স্কোর ০.৭৬ নির্ধারিত ০.৭৫ থ্রেশহোল্ডের চেয়ে বড় বা সমান, তাই ৫টি প্রার্থীই গেট পার হয় (৫/৫) এবং SHIP রায় অনুমোদিত হয়।',
      },
    },
    {
      id: 'vcap-ex-3',
      kind: 'mcq',
      topic: 'bar-085',
      question: {
        en: 'If the deployment quality bar is raised from 0.75 to 0.85, how many candidates survive and what is the new verdict?',
        bn: 'যদি ডেপ্লয়মেন্টের গুণমান থ্রেশহোল্ড ০.৭৫ থেকে বাড়িয়ে ০.৮৫ করা হয়, তবে কয়টি প্রার্থী টিকে থাকে এবং নতুন রায় কী হবে?',
      },
      options: [
        {
          en: '2/5 candidates survive (0.91 and 0.87) → HOLD verdict',
          bn: '২/৫টি প্রার্থী টিকে থাকে (০.৯১ এবং ০.৮৭) → HOLD রায়',
        },
        {
          en: '5/5 candidates survive → SHIP verdict',
          bn: '৫/৫টি প্রার্থী টিকে থাকে → SHIP রায়',
        },
        {
          en: '0/5 candidates survive → total database crash',
          bn: '০/৫টি প্রার্থী টিকে থাকে → সম্পূর্ণ ডেটাবেজ ক্র্যাশ',
        },
        {
          en: 'SHIP verdict regardless of candidate survival count',
          bn: 'কতটি প্রার্থী টিকে রইলো তা বিবেচনা না করেই SHIP রায়',
        },
      ],
      answer: 0,
      hint: { en: 'Scores 0.83, 0.79, and 0.76 fall below the 0.85 threshold.', bn: '০.৮৩, ০.৭৯ এবং ০.৭৬ স্কোরগুলো ০.৮৫ থ্রেশহোল্ডের নিচে পড়ে।' },
      explanation: {
        en: 'Under an 0.85 bar, only 0.91 and 0.87 satisfy the requirement. Since 3 of the 5 candidates fail, the pipeline halts with a safety HOLD.',
        bn: '০.৮৫ থ্রেশহোল্ডে কেবল ০.৯১ এবং ০.৮৭ শর্ত পূরণ করে। ৫টির মধ্যে ৩টি অকৃতকার্য হওয়ায় পাইপলাইন সুরক্ষার স্বার্থে HOLD সক্রিয় করে।',
      },
    },
    {
      id: 'vcap-ex-4',
      kind: 'predict',
      topic: 'skip-diagnose',
      question: {
        en: 'When an inverted file index query exhibits latency equal to brute-force linear scanning, what design control was omitted and how is it corrected?',
        bn: 'যখন একটি ইনভার্টেড ফাইল ইনডেক্স কুয়েরির ল্যাটেন্সি ব্রুট-ফোর্স লিনিয়ার স্ক্যানের সমান হয়ে যায়, তখন কোন নিয়ন্ত্রণ ব্যবস্থা বাদ পড়েছিল এবং তা কীভাবে সংশোধন করা যায়?',
      },
      answer: 'Uncapped probes scan all: cap nprobe 2–5.',
      accept: ['nprobe', 'probe', 'cap', '2', '5', 'brute', 'flood', 'buckets'],
      hint: { en: 'State uncapped probing and capping nprobe at 2 to 5.', bn: 'সীমাহীন প্রবিং এবং nprobe ২ থেকে ৫ এ সীমাবদ্ধ করার কথা বলুন।' },
      explanation: {
        en: 'Probing every cluster centroid eliminates indexing benefits, devolving into brute-force search. Enforcing a strict cap of 2 to 5 centroids restores high throughput.',
        bn: 'প্রতিটি ক্লাস্টার সেন্ট্রয়েড প্রব করলে ইনডেক্সের সুবিধা নষ্ট হয়ে ব্রুট-ফোর্স সার্চে রূপ নেয়। কঠোরভাবে ২ থেকে ৫টি সেন্ট্রয়েড নির্ধারণ করলে কাঙ্ক্ষিত গতি ফিরে আসে।',
      },
    },
  ],
  quiz: {
    id: 'vdb-capstone-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'vcapq1',
        kind: 'mcq',
        topic: 'funnel-recall',
        question: {
          en: 'Which sequence of candidate counts accurately represents the multi-stage pipeline flow in this capstone?',
          bn: 'কোন প্রার্থীর সংখ্যা ক্রমটি এই ক্যাপস্টোনে আলোচিত বহু-স্তরের পাইপলাইনের প্রবাহকে সঠিকভাবে উপস্থাপন করে?',
        },
        options: [
          {
            en: '1,000 total vectors → scan 200 candidates → filter to 50 survivors → rerank to top-5',
            bn: '১,০০০ মোট ভেক্টর → ২০০ প্রার্থী স্ক্যান → ৫০ প্রার্থীরা ফিল্টার → সেরা ৫টি রি-র‍্যাংক',
          },
          {
            en: '1,000 vectors → 1,000 vectors → 1,000 vectors',
            bn: '১,০০০ ভেক্টর → ১,০০০ ভেক্টর → ১,০০০ ভেক্টর',
          },
          {
            en: '5 candidates → 50 candidates → 1,000 candidates',
            bn: '৫ প্রার্থী → ৫০ প্রার্থী → ১,০০০ প্রার্থী',
          },
          {
            en: '200 scanned → 200 filtered → 200 reranked',
            bn: '২০০ স্ক্যান → ২০০ ফিল্টার → ২০০ রি-র‍্যাংক',
          },
        ],
        answer: 0,
        hint: { en: '10 buckets, probe 2 gives 200 candidates; filters reduce to 50; reranker extracts top-5.', bn: '১০ ক্লাস্টারে ২টি প্রব করলে ২০০ প্রার্থী হয়; ফিল্টারে ৫০ হয়; রি-র‍্যাংকারে সেরা ৫টি পাওয়া যায়।' },
        explanation: {
          en: 'The pipeline systematically narrows scope: 1,000 vectors partition into 10 buckets; 2 buckets scan 200 candidates; metadata filters keep 50; cross-encoders rank the top-5.',
          bn: 'পাইপলাইন ধাপে ধাপে পরিধি ছোট করে: ১,০০০ ভেক্টর ১০টি ক্লাস্টারে ভাগ হয়; ২টি ক্লাস্টারে ২০০ স্ক্যান হয়; ফিল্টারে ৫০টি থাকে; ক্রস-এনকোডার সেরা ৫টি বাছাই করে।',
        },
      },
      {
        id: 'vcapq2',
        kind: 'mcq',
        topic: 'tops-range',
        question: {
          en: 'What is the exact score range of the top-5 evaluated candidates before passing the quality gate?',
          bn: 'কোয়ালিটি গেট অতিক্রম করার পূর্বে পরীক্ষিত শীর্ষ ৫টি প্রার্থীর সঠিক স্কোরের পরিসর কত ছিল?',
        },
        options: [
          {
            en: 'Scores span from 0.91 down to 0.76 (0.91, 0.87, 0.83, 0.79, 0.76)',
            bn: 'স্কোরের পরিসর ০.৯১ থেকে ০.৭৬ পর্যন্ত (০.৯১, ০.৮৭, ০.৮৩, ০.৭৯, ০.৭৬)',
          },
          {
            en: 'Scores range from 1.00 down to 0.00',
            bn: 'স্কোরের পরিসর ১.০০ থেকে ০.০০ পর্যন্ত',
          },
          {
            en: 'Scores are uniform at 0.50 flat',
            bn: 'স্কোরগুলো ০.৫০ এ পুরোপুরি অপরিবর্তিত',
          },
          {
            en: 'Scores are unpredictable random values',
            bn: 'স্কোরগুলো পুরোপুরি অনির্ধারিত র‍্যান্ডম মান',
          },
        ],
        answer: 0,
        hint: { en: 'The highest score is 0.91 and the lowest is 0.76.', bn: 'সর্বোচ্চ স্কোর ০.৯১ এবং সর্বনিম্ন ০.৭৬।' },
        explanation: {
          en: 'The reranked top-5 scores are 0.91, 0.87, 0.83, 0.79, and 0.76. All five fall within a strong similarity band exceeding the 0.75 gate.',
          bn: 'রি-র‍্যাংক করা সেরা ৫টি স্কোর হলো ০.৯১, ০.৮৭, ০.৮৩, ০.৭৯ এবং ০.৭৬। এই পাঁচটিই ০.৭৫ গেটের চেয়ে বেশি শক্তিশালী সাদৃশ্য প্রদর্শন করে।',
        },
      },
      {
        id: 'vcapq3',
        kind: 'mcq',
        topic: 'rerank-rule',
        question: {
          en: 'Why must high-scoring vector similarity candidates still be evaluated by a secondary reranker before shipping?',
          bn: 'উচ্চ ভেক্টর সাদৃশ্য স্কোর থাকা সত্ত্বেও ডেপ্লয় করার আগে প্রার্থীদের কেন দ্বিতীয় ধাপে রি-র‍্যাংক করা অপরিহার্য?',
        },
        options: [
          {
            en: 'Bi-encoder dot products miss subtle cross-attention nuances; cross-encoders confirm semantic relevance and veto false positives',
            bn: 'বাই-এনকোডার ডট প্রোডাক্ট সূক্ষ্ম ক্রস-অ্যাটেনশন মিস করে; ক্রস-এনকোডার প্রকৃত সেমান্টিক অর্থ নিশ্চিত করে এবং ভুল ফলাফল বাতিল করে',
          },
          {
            en: 'Reranking requires zero compute and executes instantaneously',
            bn: 'রি-র‍্যাংকিংয়ে কোনো কম্পিউটেশন লাগে না এবং সাথে সাথে সম্পন্ন হয়',
          },
          {
            en: 'Cosine similarity formulas are mathematically flawed',
            bn: 'কোসাইন সাদৃশ্যের গাণিতিক সূত্রগুলো ত্রুটিপূর্ণ',
          },
          {
            en: 'Reranking is an arbitrary industry tradition with no measurable impact',
            bn: 'রি-র‍্যাংকিং কেবল একটি অভ্যাস যার কোনো দৃশ্যমান প্রভাব নেই',
          },
        ],
        answer: 0,
        hint: { en: 'Independent vector embeddings cannot capture token-to-token cross-attention interactions.', bn: 'স্বতন্ত্র ভেক্টর এমবেডিং টোকেন-টু-টোকেন ক্রস-অ্যাটেনশন সম্পর্ক পুরোপুরি ধরতে পারে না।' },
        explanation: {
          en: 'Bi-encoders map queries and documents independently, occasionally ranking misleading candidates highly. Cross-encoders perform joint attention to verify semantic accuracy.',
          bn: 'বাই-এনকোডার কুয়েরি এবং ডকুমেন্টকে আলাদাভাবে ম্যাপ করে, যার ফলে বিভ্রান্তিকর নথিও উপরে চলে আসতে পারে। ক্রস-এনকোডার যৌথভাবে বিশ্লেষণ করে প্রকৃত নির্ভুলতা নিশ্চিত করে।',
        },
      },
      {
        id: 'vcapq4',
        kind: 'predict',
        topic: 'path-recite',
        question: {
          en: 'What sequence of six metrics summarizes the capstone vector database query path?',
          bn: 'ক্যাপস্টোন ভেক্টর ডেটাবেজের সম্পূর্ণ কুয়েরি পাথকে প্রকাশ করে এমন ছয়টি মূল পরিমাপ কী কী?',
        },
        answer: '10 buckets · probe 2 · 200 scored · 50 kept · top-5 · 5/5 SHIP.',
        accept: ['10', '2', '200', '50', 'top-5', '5/5', 'ship'],
        hint: { en: 'Buckets, probed count, scored count, filtered count, reranked count, gate verdict.', bn: 'ক্লাস্টার সংখ্যা, প্রব সংখ্যা, স্ক্যান সংখ্যা, ফিল্টার সংখ্যা, রি-র‍্যাংক সংখ্যা এবং গেট রায়।' },
        explanation: {
          en: 'The unified pipeline: 10 buckets indexed, 2 probed, 200 candidates scored, 50 survivors kept, top-5 reranked, and 5/5 clear the threshold to SHIP.',
          bn: 'সমন্বিত পাইপলাইন: ১০টি ক্লাস্টার সূচি, ২টি প্রব, ২০০টি স্কোর, ৫০টি ফিল্টারিং, সেরা ৫টি রি-র‍্যাংক এবং ৫/৫টি থ্রেশহোল্ড পার হয়ে SHIP অনুমোদিত।',
        },
      },
    ],
  },
};
