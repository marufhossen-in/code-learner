import type { Lesson } from '../../../lib/types';

export const IvfIndexLesson: Lesson = {
  slug: 'ivf-index',
  tech: 'vector-databases',
  title: {
    en: 'IVF Index',
    bn: 'আইভিএফ ইনডেক্স — ক্লাস্টারিং ও ইনভার্টেড ফাইল অনুসন্ধান',
  },
  summary: {
    en: 'An Inverted File (IVF) index clusters vectors into partitions at build time and searches nearest partitions at query time. Partitioning 1,000 vectors into 10 buckets (100 vectors each) allows probing 2 centroids to scan 200 items while skipping 800.',
    bn: 'একটি ইনভার্টেড ফাইল (IVF) ইনডেক্স তৈরির সময় ভেক্টরগুলোকে ক্লাস্টারে ভাগ করে এবং অনুসন্ধানের সময় শুধু নিকটতম ক্লাস্টারগুলো স্ক্যান করে। ১,০০০ ভেক্টরকে ১০টি বালতিতে (প্রতিটিতে ১০০টি) ভাগ করে ২টি সেন্ট্রয়েড প্রোব করলে ২০০টি ভেক্টর স্ক্যান হয় এবং ৮০০টি বাদ পড়ে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Buckets before dots', bn: 'WHAT — গণনার আগে ক্লাস্টারিং বালতি' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build an Inverted File (IVF) index, training clusters high-dimensional vectors into distinct partitions (nlist). At query time, the search engine compares the query vector against partition centroids to identify the closest partitions (nprobe) and scans only those candidates. For instance, partitioning 1,000 vectors into 10 buckets yields 100 vectors per bucket. Probing the 2 nearest centroids inspects 200 vectors while completely skipping the other 800.',
        bn: 'যখন আপনি একটি ইনভার্টেড ফাইল (IVF) ইনডেক্স তৈরি করেন, তখন ট্রেনিং ধাপে উচ্চ মাত্রার ভেক্টরগুলোকে কয়েকটি ক্লাস্টার বা পার্টিশনে (nlist) ভাগ করা হয়। অনুসন্ধানের সময় সার্চ ইঞ্জিন কুয়েরি ভেক্টরটিকে প্রতিটি ক্লাস্টার সেন্ট্রয়েডের সাথে তুলনা করে নিকটতম পার্টিশনগুলো (nprobe) বাছাই করে এবং শুধুমাত্র সেগুলোর ভেতরের ভেক্টরগুলো স্ক্যান করে। যেমন, ১,০০০টি ভেক্টরকে ১০টি বালতিতে ভাগ করলে প্রতিটিতে ১০০টি ভেক্টর থাকে। সবচেয়ে কাছের ২টি সেন্ট্রয়েড প্রোব করলে মাত্র ২০০টি ভেক্টর পরীক্ষা হয় এবং বাকি ৮০০টি সম্পূর্ণ বাদ পড়ে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Ten buckets, two probed', bn: '১০টি বালতি, ২টি প্রোব' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="IVF buckets with two probed">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="30" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="56" y="100">B0</text><text x="56" y="118">100</text>
<rect x="90" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="116" y="100">B1</text><text x="116" y="118">100</text>
<rect x="150" y="60" width="52" height="90" rx="6" fill="#16a34a" opacity="0.85" stroke="#16a34a" stroke-width="2"/><text x="176" y="100" fill="#fff">B2★</text><text x="176" y="118" fill="#fff">100</text>
<rect x="210" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="236" y="100">B3</text><text x="236" y="118">100</text>
<rect x="270" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="296" y="100">B4</text><text x="296" y="118">100</text>
<rect x="330" y="60" width="52" height="90" rx="6" fill="#16a34a" opacity="0.85" stroke="#16a34a" stroke-width="2"/><text x="356" y="100" fill="#fff">B5★</text><text x="356" y="118" fill="#fff">100</text>
<rect x="390" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="416" y="100">B6</text><text x="416" y="118">100</text>
<rect x="450" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="476" y="100">B7</text><text x="476" y="118">100</text>
<rect x="510" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="536" y="100">B8</text><text x="536" y="118">100</text>
<rect x="570" y="60" width="52" height="90" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/><text x="596" y="100">B9</text><text x="596" y="118">100</text>
</g>
<rect x="170" y="170" width="300" height="34" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="192" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">probe 2 → scan 200 · skip 800 ✓</text>
<text x="320" y="226" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">nlist 10 · nprobe 2 — coarse, then fine</text>
</svg>`,
      caption: {
        en: 'Ten buckets partition the space, and the query opens two. Coarse routing selects buckets; fine evaluation checks vectors.',
        bn: 'দশটি বালতি পুরো ডেটাসেটকে ভাগ করে রাখে, আর কুয়েরি মাত্র দুটি খোলে। প্রাথমিক ধাপে বালতি নির্বাচন হয়, আর সূক্ষ্ম ধাপে ভেক্টর পরীক্ষা করা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cluster count (nlist)',
          def: {
            en: 'The total number of Voronoi partitions or centroid buckets created during index training.',
            bn: 'ইনডেক্স ট্রেনিংয়ের সময় তৈরি হওয়া মোট ভরোনয় ক্লাস্টার বা সেন্ট্রয়েড বালতির সংখ্যা।',
          },
        },
        {
          term: 'Probe width (nprobe)',
          def: {
            en: 'The number of closest centroid buckets opened and scanned during an individual vector query.',
            bn: 'কুয়েরি সম্পাদনের সময় খুলে অনুসন্ধান চালানো নিকটতম সেন্ট্রয়েড বালতির সংখ্যা।',
          },
        },
        {
          term: 'Cluster centroid',
          def: {
            en: 'The mathematical mean vector representing the geographic center of all vectors assigned to an index partition.',
            bn: 'একটি পার্টিশনের অন্তর্ভুক্ত সমস্ত ভেক্টরের ভৌগোলিক কেন্দ্রের প্রতিনিধিত্বকারী গড় ভেক্টর।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Coarse beats full', bn: 'কেন — আংশিক ক্লাস্টার অনুসন্ধান পূর্ণ স্ক্যানকে হারায়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vectors exhibit spatial locality: true nearest neighbors almost always cluster within the closest 1 or 2 buckets.', bn: 'ভেক্টরগুলোর মধ্যে স্থানিক নৈকট্য থাকে: প্রকৃত নিকটতম প্রতিবেশীরা সাধারণত সবচেয়ে কাছের ১ বা ২টি বালতিতেই অবস্থান করে।' },
        { en: 'Centroid checks are computationally cheap: 10 dot products quickly nominate which buckets deserve thorough scanning.', bn: 'সেন্ট্রয়েড পরীক্ষা অত্যন্ত সাশ্রয়ী: মাত্র ১০টি ডট প্রোডাক্ট হিসাব করে কোন বালতিগুলো পরীক্ষা করা প্রয়োজন তা নির্ধারণ করা যায়।' },
        { en: 'Probe width directly controls recall: increasing nprobe checks more boundary candidates and prevents misses.', bn: 'প্রোব সংখ্যা সরাসরি রিকল নিয়ন্ত্রণ করে: nprobe বৃদ্ধি করলে বেশি প্রার্থী পরীক্ষা হয় এবং মিসের ঝুঁকি কমে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Bucket in 4 steps', bn: 'HOW — ৪টি ধাপে ইনভার্টেড ফাইল ইনডেক্সিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Cluster corpus', bn: '১. ডেটাসেট ক্লাস্টারিং' }, text: { en: 'Group 1,000 vectors into 10 buckets containing 100 vectors each.', bn: '১,০০০টি ভেক্টরকে ১০টি বালতিতে ভাগ করুন যেখানে প্রতিটিতে ১০০টি ভেক্টর থাকবে।' } },
        { title: { en: '2. Check centroids', bn: '২. সেন্ট্রয়েড দূরত্ব যাচাই' }, text: { en: 'Compute distances between the query vector and all 10 cluster centroids.', bn: 'কুয়েরি ভেক্টরের সাথে ১০টি ক্লাস্টার সেন্ট্রয়েডের দূরত্ব হিসাব করুন।' } },
        { title: { en: '3. Probe nearest', bn: '৩. নিকটতম বালতি নির্ধারণ' }, text: { en: 'Identify and open the 2 closest centroid buckets (e.g., B2 and B5).', bn: 'সবচেয়ে কাছের ২টি সেন্ট্রয়েড বালতি (যেমন B2 এবং B5) নির্বাচন করুন।' } },
        { title: { en: '4. Scan candidates', bn: '৪. প্রার্থী ভেক্টর স্ক্যান' }, text: { en: 'Evaluate the 200 candidate vectors in those buckets while skipping the remaining 800.', bn: 'নির্বাচিত বালতির ২০০টি ভেক্টর স্ক্যান করুন এবং বাকি ৮০০টি ভেক্টর বাদ দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'ivf_index_sim.py',
      code: `def ivf_search_simulation(total_vectors, nlist, nprobe):
    vectors_per_bucket = total_vectors // nlist
    scanned_candidates = nprobe * vectors_per_bucket
    skipped_candidates = total_vectors - scanned_candidates
    scan_fraction = scanned_candidates / total_vectors
    centroid_ops = nlist  # comparing query against all centroids
    vector_ops = scanned_candidates  # exact distance to candidate vectors
    total_ops = centroid_ops + vector_ops
    return vectors_per_bucket, scanned_candidates, skipped_candidates, scan_fraction, total_ops

# Baseline: 1,000 vectors, 10 buckets (nlist=10), probe 2 (nprobe=2)
per, scan, skip, frac, ops = ivf_search_simulation(1000, 10, 2)
print("IVF baseline (nlist=10, nprobe=2):")
print(f"Vectors per bucket: {per}")
print(f"Scanned: {scan}/1,000 vectors ({frac*100:.0f}%), Skipped: {skip}/1,000 vectors")
print(f"Operations: 10 centroid + 200 vector = {ops} total ops (vs 1,000 brute)")

# Tuning: nprobe=5 for boundary recall safety
_, scan5, skip5, frac5, ops5 = ivf_search_simulation(1000, 10, 5)
print("\\nIVF widened (nprobe=5):")
print(f"Scanned: {scan5}/1,000 ({frac5*100:.0f}%), Skipped: {skip5}/1,000")
print(f"Operations: 10 centroid + 500 vector = {ops5} total ops")

# Output:
# IVF baseline (nlist=10, nprobe=2):
# Vectors per bucket: 100
# Scanned: 200/1,000 vectors (20%), Skipped: 800/1,000 vectors
# Operations: 10 centroid + 200 vector = 210 total ops (vs 1,000 brute)
#
# IVF widened (nprobe=5):
# Scanned: 500/1,000 (50%), Skipped: 500/1,000
# Operations: 10 centroid + 500 vector = 510 total ops`,
      caption: {
        en: 'The simulation verifies IVF operations: probing 2 buckets scans 200 candidates (210 ops total), while probing 5 scans 500 vectors (510 ops total) for higher boundary recall.',
        bn: 'সিমুলেশন আইভিএফ অপারেশনের সত্যতা প্রমাণ করে: ২টি বালতি প্রোব করলে ২০০ প্রার্থী স্ক্যান হয় (সর্বমোট ২১০ অপ্স), আর ৫টি প্রোব করলে সীমানা সুরক্ষায় ৫০০ ভেক্টর স্ক্যান হয় (৫১০ অপ্স)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Buckets, live', bn: 'INSIDE — জীবন্ত বাকেটিং সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive tryit simulates an IVF index: 1,000 vectors divided into nlist=10 buckets with nprobe=2 scans 200 vectors and skips 800. If you raise nprobe to 5, scanning increases to 500 vectors (50% of the corpus). Probing more buckets enhances recall near cluster boundaries at the expense of scanning throughput.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি আইভিএফ ইনডেক্সের কার্যকারিতা প্রদর্শন করে: ১,০০০ ভেক্টরকে nlist=১০ বালতিতে ভাগ করে nprobe=২ দিলে ২০০টি ভেক্টর স্ক্যান হয় এবং ৮০০টি বাদ পড়ে। আপনি যদি nprobe বাড়িয়ে ৫ করেন, তবে স্ক্যানিং বেড়ে ৫০০ ভেক্টরে (ডেটাসেটের ৫০%) পৌঁছাবে। বেশি বালতি প্রোব করলে ক্লাস্টার সীমানায় রিকল বৃদ্ধি পায় তবে থ্রুপুট কিছুটা কমে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'IVF lab (probe 5, press Run)', bn: 'IVF lab (probe ৫, Run)' },
      html: '<h3>Buckets before dots</h3>\n<pre id="out"></pre>\n<p>Console opens the buckets.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #facc15; border-radius: 8px; padding: 10px; }',
      js: 'const N = 1000, NLIST = 10, NPROBE = 2; // ← try NPROBE = 5!\nconst per = N / NLIST;\nconst scanned = NPROBE * per;\nconsole.log(NLIST + " buckets × " + per + " vectors");\nconsole.log("probe " + NPROBE + " → scan " + scanned + ", skip " + (N - scanned));\ndocument.getElementById("out").textContent = "scan " + scanned + " · skip " + (N - scanned) + " 🪣";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Bucket instincts', bn: 'ফলাফল — ক্লাস্টার পার্টিশনের মূল নীতি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Probing 2 of 10 buckets scans 200 candidates and skips 800 vectors, cutting compute by 80%.', bn: '১০টির মধ্যে ২টি বালতি প্রোব করলে ২০০ প্রার্থী স্ক্যান হয় এবং ৮০০ ভেক্টর বাদ পড়ে, যা ৮০% কম্পিউটেশন কমায়।' },
        { en: 'The nprobe parameter acts as an explicit recall lever: 5 probes inspect 500 vectors for high boundary recall.', bn: 'nprobe প্যারামিটারটি সরাসরি রিকল নিয়ন্ত্রণ করে: ৫টি প্রোব সীমানা নিরাপত্তার জন্য ৫০০টি ভেক্টর পরীক্ষা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Bucket traps', bn: 'ডিবাগ — ক্লাস্টার সীমানা ও সাইজিং ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Boundary neighbors (the split pair)', bn: 'পার্টিশন সীমানায় বিভক্ত প্রতিবেশী (Boundary neighbors)' },
      text: {
        en: 'True neighbors occasionally land on opposite sides of a Voronoi boundary: probing only 1 or 2 buckets risks missing the split pair. Symptoms: sudden recall drops on queries near cluster peripheries. Cure: expand nprobe to 3–5 near boundaries to capture overlapping neighbors.',
        bn: 'কখনো কখনো দুটি নিকটতম প্রতিবেশী ভরোনয় সীমানার দুই পাশে অবস্থান করে: মাত্র ১ বা ২টি বালতি প্রোব করলে একটি বাদ পড়ে যেতে পারে। লক্ষণ: ক্লাস্টারের সীমানার কাছের কুয়েরিতে রিকল হঠাৎ কমে যাওয়া। প্রতিকার: সীমানার কাছাকাছি কুয়েরির জন্য nprobe ৩ থেকে ৫ এ উন্নীত করা যাতে ওভারল্যাপিং ভেক্টর ধরা পড়ে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'nlist sizing (the bucket count)', bn: 'সুষম nlist নির্ধারণ কৌশল (The square-root rule)' },
      text: {
        en: 'Configuring too few buckets produces oversized partitions that take too long to scan; configuring too many buckets starves centroids and slows query routing. Symptoms: sluggish queries or hollow centroid clusters. Cure: follow the square-root heuristic, setting nlist ≈ √(N) (for 1,000,000 documents, use nlist ≈ 1,000).',
        bn: 'খুব কম বালতি নির্ধারণ করলে পার্টিশন অতিরিক্ত বড় হয়ে যায় যা স্ক্যান করতে বেশি সময় নেয়; আবার খুব বেশি বালতি দিলে সেন্ট্রয়েড ওভারহেড বেড়ে যায়। লক্ষণ: ধীরগতির রাউটিং বা খালি ক্লাস্টার। প্রতিকার: বর্গমূলের নীতি অনুসরণ করে nlist ≈ √(N) নির্ধারণ করুন (যেমন ১,০০০,০০০ নথির জন্য nlist ≈ ১,০০০)।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production implementations', bn: 'বাস্তব ক্ষেত্র — উৎপাদন বাস্তবায়ন' },
    },
    {
      type: 'list',
      items: [
        { en: 'FAISS IndexIVFFlat: the industry standard reference implementation for coarse quantization and inverted list scanning.', bn: 'FAISS IndexIVFFlat: কোর্স কোয়ান্টাইজেশন এবং ইনভার্টেড লিস্ট স্ক্যানিংয়ের জন্য বহুল ব্যবহৃত স্ট্যান্ডার্ড লাইব্রেরি।' },
        { en: 'Managed vector cloud clusters: distributed engines partition large vector collections across server shards by centroid.', bn: 'ক্লাউড ভেক্টর ক্লাস্টার: সেন্ট্রয়েডের ভিত্তিতে বিশালাকার ভেক্টর সংগ্রহকে বিভিন্ন সার্ভার শার্ডে ভাগ করে রাখে।' },
        { en: 'Hybrid indexing pipelines: combining IVF for fast coarse partitioning with local graph search for fine neighbor traversal.', bn: 'হাইব্রিড ইনডেক্সিং পাইপলাইন: দ্রুত প্রাথমিক ক্লাস্টার খোঁজার জন্য IVF এবং সূক্ষ্ম অনুসন্ধানের জন্য লোকাল গ্রাফ সার্চ একত্রিত করা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — HNSW Graphs', bn: 'পরবর্তী পাঠ — এইচএনএসডব্লিউ (HNSW) গ্রাফ' },
    },
    {
      type: 'para',
      text: {
        en: 'With bucketed inverted files mastered, Lesson 4 explores graph-based navigation: traversing 3 multi-scale layers across 4 greedy hops to find nearest neighbors at sub-millisecond latencies.',
        bn: 'ইনভার্টেড ফাইলের ক্লাস্টারিং পদ্ধতি আয়ত্ত করার পর, পাঠ ৪ গ্রাফ-ভিত্তিক নেভিগেশন নিয়ে আলোচনা করবে: যেখানে ৩টি বহু-মাত্রিক স্তরে মাত্র ৪টি গ্রিডি হপ দিয়ে মিলিসেকেন্ডের কম সময়ে নিকটতম প্রতিবেশী খুঁজে বের করা হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'ivf-ex-1',
      kind: 'mcq',
      topic: 'bucket-math',
      question: {
        en: 'When 1,000 vectors are evenly clustered into an IVF index with nlist=10, how many vectors reside in each bucket?',
        bn: 'যখন ১,০০০টি ভেক্টরকে nlist=১০ সহ একটি আইভিএফ ইনডেক্সে সুষমভাবে ক্লাস্টার করা হয়, তখন প্রতিটি বালতিতে কতটি ভেক্টর থাকে?',
      },
      options: [
        { en: '100 vectors per bucket', bn: 'প্রতি বালতিতে ১০০টি ভেক্টর' },
        { en: '10 vectors per bucket', bn: 'প্রতি বালতিতে ১০টি ভেক্টর' },
        { en: '1,000 vectors per bucket', bn: 'প্রতি বালতিতে ১,০০০টি ভেক্টর' },
        { en: '50 vectors per bucket', bn: 'প্রতি বালতিতে ৫০টি ভেক্টর' },
      ],
      answer: 0,
      hint: { en: 'Divide the total vector count by the bucket parameter nlist.', bn: 'মোট ভেক্টর সংখ্যাকে বালতি সংখ্যা nlist দিয়ে ভাগ করুন।' },
      explanation: {
        en: '1,000 vectors / 10 buckets = 100 vectors per bucket. Partitioning evenly divides the document corpus for localized scanning.',
        bn: '১,০০০ ভেক্টর / ১০ বালতি = প্রতি বালতিতে ১০০টি ভেক্টর। ক্লাস্টারিং ডেটাসেটকে সুষমভাবে ভাগ করে দ্রুত অনুসন্ধানের সুযোগ তৈরি করে।',
      },
    },
    {
      id: 'ivf-ex-2',
      kind: 'mcq',
      topic: 'probe-math',
      question: {
        en: 'If an IVF query sets nprobe=2 on 100-vector buckets, how many vectors are actively scanned versus skipped?',
        bn: 'যদি ১০০ ভেক্টরের বালতিতে একটি আইভিএফ কুয়েরি nprobe=২ নির্ধারণ করে, তবে কতটি ভেক্টর সক্রিয়ভাবে স্ক্যান হয় এবং কতটি বাদ পড়ে?',
      },
      options: [
        { en: '200 scanned, 800 skipped', bn: '২০০টি স্ক্যান হয়, ৮০০টি বাদ পড়ে' },
        { en: '1,000 scanned, none skipped', bn: '১,০০০টি স্ক্যান হয়, কোনোটি বাদ পড়ে না' },
        { en: '100 scanned, 900 skipped', bn: '১০০টি স্ক্যান হয়, ৯০০টি বাদ পড়ে' },
        { en: '20 scanned, 980 skipped', bn: '২০টি স্ক্যান হয়, ৯৮০টি বাদ পড়ে' },
      ],
      answer: 0,
      hint: { en: 'Multiply nprobe (2) by vectors per bucket (100).', bn: 'nprobe (২) কে প্রতি বালতির ভেক্টর সংখ্যা (১০০) দিয়ে গুণ করুন।' },
      explanation: {
        en: '2 probed buckets × 100 vectors = 200 candidates scanned. The remaining 800 vectors are skipped entirely, saving 80% of computation.',
        bn: '২টি প্রোবকৃত বালতি × ১০০ ভেক্টর = ২০০ প্রার্থী স্ক্যান হয়। বাকি ৮০০ ভেক্টর সম্পূর্ণ বাদ পড়ে, যা ৮০% কম্পিউটেশন সাশ্রয় করে।',
      },
    },
    {
      id: 'ivf-ex-3',
      kind: 'mcq',
      topic: 'probe-5',
      question: {
        en: 'When nprobe is widened from 2 to 5 across 100-vector buckets, how many vectors are evaluated?',
        bn: 'যখন ১০০ ভেক্টরের বালতিতে nprobe ২ থেকে বাড়িয়ে ৫ করা হয়, তখন কতটি ভেক্টর পরীক্ষা করা হয়?',
      },
      options: [
        { en: '500 vectors — higher boundary recall at reduced speedup', bn: '৫০০টি ভেক্টর — বেশি সীমানা রিকল কিন্তু কম স্পিডআপ' },
        { en: '200 vectors — remaining unchanged', bn: '২০০টি ভেক্টর — সম্পূর্ণ অপরিবর্তিত থাকে' },
        { en: '100 vectors total', bn: 'সর্বমোট ১০০টি ভেক্টর' },
        { en: '1,000 vectors — complete exhaustive scan', bn: '১,০০০টি ভেক্টর — সম্পূর্ণ পূর্ণাঙ্গ স্ক্যান' },
      ],
      answer: 0,
      hint: { en: 'Multiply 5 probed buckets by 100 vectors per bucket.', bn: '৫টি প্রোবকৃত বালতিকে ১০০ দিয়ে গুণ করুন।' },
      explanation: {
        en: '5 probed buckets × 100 vectors = 500 vectors scanned (half the corpus). Widening the probe parameter guarantees higher recall near cluster boundaries.',
        bn: '৫টি প্রোবকৃত বালতি × ১০০ ভেক্টর = ৫০০টি ভেক্টর স্ক্যান হয় (ডেটাসেটের অর্ধেক)। প্রোব বাড়ালে সীমানার কাছাকাছি ভেক্টরগুলোতে উচ্চ রিকল নিশ্চিত হয়।',
      },
    },
    {
      id: 'ivf-ex-4',
      kind: 'predict',
      topic: 'nlist-size',
      question: {
        en: 'For a corpus of 1,000,000 documents, what is the standard rule-of-thumb for setting nlist, and why?',
        bn: '১,০০০,০০০ নথির ডেটাসেটের জন্য nlist নির্ধারণের সাধারণ নিয়ম (rule-of-thumb) কী এবং কেন?',
      },
      answer: '~1000 (√1M): buckets balance scan width vs centroid cost.',
      accept: ['1000', 'sqrt', '√', 'square', 'balance', '100'],
      hint: { en: 'Calculate the square root of 1,000,000.', bn: '১,০০০,০০০ এর বর্গমূল হিসাব করুন।' },
      explanation: {
        en: 'The square-root heuristic sets nlist ≈ √(1,000,000) ≈ 1,000 buckets, balancing centroid comparison overhead against the vector count within each bucket.',
        bn: 'বর্গমূলের সূত্র অনুসারে nlist ≈ √(১,০০০,০০০) ≈ ১,০০০ বালতি নির্ধারণ করা হয়, যা সেন্ট্রয়েড খোঁজার খরচ এবং বালতির ভেতরের ভেক্টর সংখ্যার মধ্যে ভারসাম্য রক্ষা করে।',
      },
    },
  ],
  quiz: {
    id: 'ivf-index-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'ivfq1',
        kind: 'mcq',
        topic: 'ivf-mean',
        question: {
          en: 'What fundamental two-step strategy defines an Inverted File (IVF) index?',
          bn: 'কোন মৌলিক দুই ধাপের কৌশল ইনভার্টেড ফাইল (IVF) ইনডেক্সকে সংজ্ঞায়িত করে?',
        },
        options: [
          {
            en: 'Partitioning vectors into clusters, finding nearest centroids, and scanning only vectors in those buckets',
            bn: 'ভেক্টরগুলোকে ক্লাস্টারে ভাগ করা, নিকটতম সেন্ট্রয়েড চিহ্নিত করা এবং শুধুমাত্র সেই বালতির ভেক্টরগুলো স্ক্যান করা',
          },
          {
            en: 'Scanning all vectors sequentially in two consecutive passes',
            bn: 'পরপর দুই ধাপে সমস্ত ভেক্টর ক্রমানুসারে স্ক্যান করা',
          },
          {
            en: 'Alphabetically ordering vector labels to avoid floating-point math',
            bn: 'ফ্লোটিং পয়েন্ট গণিত এড়াতে ভেক্টর লেবেলগুলোকে বর্ণানুক্রমে সাজানো',
          },
          {
            en: 'Permanently deleting 80% of documents to speed up memory bandwidth',
            bn: 'মেমরি ব্যান্ডউইথ দ্রুত করতে ডেটাসেটের ৮০% নথি স্থায়ীভাবে মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: { en: 'Coarse centroid matching followed by fine candidate evaluation.', bn: 'প্রাথমিক সেন্ট্রয়েড মিলের পর সূক্ষ্ম প্রার্থী মূল্যায়ন।' },
        explanation: {
          en: 'IVF divides the space into coarse buckets during indexing and queries only the most promising buckets, eliminating 80% to 95% of distance calculations.',
          bn: 'IVF ইনডেক্সিংয়ের সময় ডেটাসেটকে ক্লাস্টারে ভাগ করে এবং অনুসন্ধানের সময় কেবল নির্বাচিত বালতিগুলো স্ক্যান করে ৮০% থেকে ৯৫% দূরত্ব হিসাব বাদ দেয়।',
        },
      },
      {
        id: 'ivfq2',
        kind: 'mcq',
        topic: 'centroid-role',
        question: {
          en: 'What primary architectural role do cluster centroids serve during an IVF search query?',
          bn: 'একটি আইভিএফ অনুসন্ধানের সময় ক্লাস্টার সেন্ট্রয়েডগুলো কোন মূল ভূমিকা পালন করে?',
        },
        options: [
          {
            en: 'A few cheap centroid distance checks guide the search engine to open only the relevant buckets',
            bn: 'কয়েকটি সাশ্রয়ী সেন্ট্রয়েড দূরত্ব যাচাই করে সার্চ ইঞ্জিনকে কেবল প্রাসঙ্গিক বালতিগুলো খোলার পথ দেখায়',
          },
          {
            en: 'Centroids physically compress document text into database records',
            bn: 'সেন্ট্রয়েডগুলো টেক্সট ডকুমেন্টকে ডেটাবেজ রেকর্ডে সংকুচিত করে সংরক্ষণ করে',
          },
          {
            en: 'Centroids replace individual vectors permanently to discard raw data',
            bn: 'মূল ডেটা মুছে ফেলে সেন্ট্রয়েডগুলো স্থায়ীভাবে ভেক্টরের বিকল্প হিসেবে কাজ করে',
          },
          {
            en: 'Centroids manage network socket routing across remote worker nodes',
            bn: 'সেন্ট্রয়েডগুলো রিমোট ওয়ার্কার নোডের মধ্যে নেটওয়ার্ক সকেট রাউটিং পরিচালনা করে',
          },
        ],
        answer: 0,
        hint: { en: 'Centroids act as regional index signposts.', bn: 'সেন্ট্রয়েডগুলো আঞ্চলিক সাইনবোর্ড হিসেবে কাজ করে।' },
        explanation: {
          en: 'Centroids represent the center of each vector cluster. Comparing the query against a small set of centroids quickly identifies which buckets hold relevant neighbors.',
          bn: 'সেন্ট্রয়েড প্রতিটি ক্লাস্টারের কেন্দ্রের প্রতিনিধিত্ব করে। অল্প কয়েকটি সেন্ট্রয়েড যাচাই করেই বোঝা যায় কোন বালতিগুলোতে প্রাসঙ্গিক প্রতিবেশী রয়েছে।',
        },
      },
      {
        id: 'ivfq3',
        kind: 'mcq',
        topic: 'boundary-fix',
        question: {
          en: 'When true nearest neighbors happen to be split across partition boundaries, what operational fix recovers recall?',
          bn: 'যখন আসল নিকটতম প্রতিবেশীগুলো পার্টিশন সীমানায় বিভক্ত হয়ে পড়ে, তখন রিকল পুনরুদ্ধারে কী পদক্ষেপ নিতে হয়?',
        },
        options: [
          {
            en: 'Increase probe width (nprobe=3 to 5) to inspect adjacent boundary buckets',
            bn: 'নিকটবর্তী সীমানা বালতিগুলো যাচাই করার জন্য প্রোব সংখ্যা (nprobe=৩ থেকে ৫) বৃদ্ধি করা',
          },
          {
            en: 'Restrict probing strictly to nprobe=1 to minimize latency',
            bn: 'ল্যাটেন্সি কমাতে কঠোরভাবে nprobe=১ এ অনুসন্ধান সীমাবদ্ধ রাখা',
          },
          {
            en: 'Delete all Voronoi boundaries and resort to flat scanning',
            bn: 'সমস্ত ক্লাস্টার সীমানা মুছে ফেলে সাধারণ ফ্ল্যাট স্ক্যানে ফিরে যাওয়া',
          },
          {
            en: 'Rebuild the entire vector database hourly from scratch',
            bn: 'প্রতি ঘণ্টায় নতুন করে পুরো ভেক্টর ডেটাবেজ পুনরায় তৈরি করা',
          },
        ],
        answer: 0,
        hint: { en: 'Probe adjacent clusters to bridge boundary splits.', bn: 'সীমানার বিভাজন মেটাতে পার্শ্ববর্তী ক্লাস্টারগুলোও প্রোব করুন।' },
        explanation: {
          en: 'Increasing nprobe opens adjacent centroid buckets, reuniting split neighbor pairs that reside near cluster edges and boosting recall.',
          bn: 'nprobe বৃদ্ধি করলে পার্শ্ববর্তী সেন্ট্রয়েড বালতিগুলোও খুলে যায়, ফলে ক্লাস্টারের প্রান্তে থাকা বিভক্ত প্রতিবেশীরা পুনরুদ্ধার হয় এবং রিকল বৃদ্ধি পায়।',
        },
      },
      {
        id: 'ivfq4',
        kind: 'predict',
        topic: 'ivf-recite',
        question: {
          en: 'What five benchmark numbers define the baseline IVF configuration and execution metrics in this lesson?',
          bn: 'এই পাঠে বেসলাইন আইভিএফ কনফিগারেশন এবং অপারেশনের পরিমাপ প্রকাশ করে এমন পাঁচটি মূল সংখ্যা কী কী?',
        },
        answer: 'nlist 10, 100 each, probe 2, scan 200, skip 800.',
        accept: ['10', '100', '2', '200', '800', 'nlist', 'nprobe'],
        hint: { en: 'List bucket count, items per bucket, probed count, scanned count, and skipped count.', bn: 'বালতি সংখ্যা, প্রতি বালতির ভেক্টর, প্রোব সংখ্যা, স্ক্যান সংখ্যা এবং বাদ পড়া সংখ্যা উল্লেখ করুন।' },
        explanation: {
          en: 'The five core metrics are nlist=10 buckets, 100 vectors each, nprobe=2 probed buckets, 200 candidates scanned, and 800 vectors skipped.',
          bn: 'মূল পাঁচটি পরিমাপ হলো: nlist=১০ বালতি, প্রতিটিতে ১০০টি ভেক্টর, nprobe=২টি প্রোব, ২০০টি ভেক্টর স্ক্যান এবং ৮০০টি ভেক্টর বাদ দেওয়া।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'hnsw-graphs',
    title: { en: 'HNSW Graphs', bn: 'HNSW Graph' },
  },
};
