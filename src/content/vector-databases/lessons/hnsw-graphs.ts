import type { Lesson } from '../../../lib/types';

export const HnswGraphsLesson: Lesson = {
  slug: 'hnsw-graphs',
  tech: 'vector-databases',
  title: {
    en: 'HNSW Graphs',
    bn: 'এইচএনএসডব্লিউ গ্রাফ — বহুস্তরী স্মল-ওয়ার্ল্ড নেভিগেশন',
  },
  summary: {
    en: 'Hierarchical Navigable Small World (HNSW) layers vector connections like multi-lane highways over local streets: entering at layer 2 and greedily descending (1 + 1 + 2 hops) visits only 6 vectors out of 1,000 while skipping 994.',
    bn: 'হায়ারার্কিক্যাল নেভিগেবল স্মল ওয়ার্ল্ড (HNSW) গ্রাফ ভেক্টরগুলোকে আবাসিক রাস্তার ওপর মহাসড়কের মতো বহুস্তরে সাজায়: স্তর ২-এ প্রবেশ করে ধাপে ধাপে নিচে নামলে (১ + ১ + ২ হপ) ১,০০০ ভেক্টরের মধ্যে মাত্র ৬টি পরীক্ষা করা হয় এবং ৯৯৪টি বাদ দেওয়া যায়।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Highways over streets', bn: 'WHAT — স্থানীয় রাস্তার ওপর দূরপাল্লার মহাসড়ক' },
    },
    {
      type: 'para',
      text: {
        en: 'When you navigate millions of vectors at sub-millisecond latencies, Hierarchical Navigable Small World (HNSW) graphs organize embeddings like highways over residential streets. Sparse layers at the top provide long-distance jumps across the dataset, while dense layers at the bottom enable fine local clustering. During a query, traversal begins at the top entry point and greedily hops to the closest neighbor before stepping down layers. In a 3-layer index of 1,000 vectors, traversing 1 hop on Layer 2, 1 hop on Layer 1, and 2 hops on Layer 0 evaluates just 6 vectors while skipping 994.',
        bn: 'যখন আপনি মিলিসেকেন্ডের কম সময়ে লাখ লাখ ভেক্টরে অনুসন্ধান করতে চান, তখন হায়ারার্কিক্যাল নেভিগেবল স্মল ওয়ার্ল্ড (HNSW) গ্রাফ ভেক্টরগুলোকে আবাসিক রাস্তার ওপর মহাসড়কের মতো বহুস্তরে সাজায়। উপরের বিরল স্তরগুলো ডেটাসেটজুড়ে দূরপাল্লার বড় লাফ দেয়, আর নিচের ঘন স্তরগুলো সূক্ষ্ম স্থানীয় প্রতিবেশী খুঁজে বের করে। অনুসন্ধানের সময় শীর্ষ এন্ট্রি পয়েন্ট থেকে শুরু করে প্রতি স্তরে সবচেয়ে কাছের প্রতিবেশীতে গ্রিডি হপ দিয়ে নিচে নামা হয়। ১,০০০ ভেক্টরের একটি ৩-স্তরের ইনডেক্সে স্তর ২-এ ১টি হপ, স্তর ১-এ ১টি হপ এবং স্তর ০-এ ২টি হপ সম্পন্ন করে মাত্র ৬টি ভেক্টর পরীক্ষা করা হয় এবং বাকি ৯৯৪টি সরাসরি বাদ পড়ে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Four hops down three layers', bn: 'তিন স্তরে চার হপ অবতরণ' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="HNSW layered descent">
<g font-size="11" font-weight="700" fill="currentColor">
<text x="30" y="60">L2 highway</text>
<circle cx="120" cy="56" r="10" fill="#4f46e5"/><text x="120" y="60" fill="#fff" text-anchor="middle">E</text>
<circle cx="320" cy="56" r="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<circle cx="520" cy="56" r="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<line x1="120" y1="56" x2="320" y2="56" stroke="#4f46e5" stroke-width="3"/>
<line x1="320" y1="56" x2="520" y2="56" stroke="currentColor" stroke-width="1"/>
<text x="30" y="125">L1 avenues</text>
<circle cx="120" cy="121" r="8" fill="#4f46e5"/>
<circle cx="220" cy="121" r="8" fill="#16a34a"/><text x="220" y="125" fill="#fff" text-anchor="middle" font-size="9">1</text>
<circle cx="320" cy="121" r="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<circle cx="420" cy="121" r="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<line x1="120" y1="56" x2="120" y2="121" stroke="#4f46e5" stroke-width="3"/>
<line x1="120" y1="121" x2="220" y2="121" stroke="#16a34a" stroke-width="3"/>
<text x="30" y="190">L0 streets</text>
<circle cx="120" cy="186" r="7" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<circle cx="220" cy="186" r="7" fill="#16a34a"/>
<circle cx="300" cy="186" r="7" fill="#16a34a"/><text x="300" y="189" fill="#fff" text-anchor="middle" font-size="9">2</text>
<circle cx="380" cy="186" r="7" fill="#dc2626"/><text x="380" y="189" fill="#fff" text-anchor="middle" font-size="9">★</text>
<circle cx="460" cy="186" r="7" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
<line x1="220" y1="121" x2="220" y2="186" stroke="#16a34a" stroke-width="3"/>
<line x1="220" y1="186" x2="300" y2="186" stroke="#16a34a" stroke-width="3"/>
<line x1="300" y1="186" x2="380" y2="186" stroke="#dc2626" stroke-width="3"/>
</g>
<rect x="170" y="208" width="300" height="30" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="228" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">1 + 1 + 2 hops · 6 visited · 994 skipped</text>
</svg>`,
      caption: {
        en: 'Enter at the top entry node, hop greedily along highways, and settle down local streets. Long jumps prune distance; short links pinpoint targets.',
        bn: 'শীর্ষ এন্ট্রি নোডে প্রবেশ করুন, মহাসড়কের মতো দ্রুত হপ দিন এবং স্থানীয় রাস্তায় নিখুঁত লক্ষ্য নির্ধারণ করুন। দীর্ঘ লাফ দূরত্ব কমায়, আর স্থানীয় লিঙ্ক সঠিক অবস্থান নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'HNSW graph',
          def: {
            en: 'A multi-layer graph data structure that enables logarithmic-time approximate nearest neighbor search via small-world link traversal.',
            bn: 'একটি বহুস্তরবিশিষ্ট গ্রাফ ডেটা স্ট্রাকচার যা স্মল-ওয়ার্ল্ড লিঙ্কের মাধ্যমে লগারিদমিক সময়ে নিকটতম প্রতিবেশী অনুসন্ধান সম্পন্ন করে।',
          },
        },
        {
          term: 'Greedy hop',
          def: {
            en: 'The graph routing step of moving from the current node to the adjacent neighbor with the smallest distance to the query.',
            bn: 'গ্রাফ অনুসন্ধানের একটি ধাপ যেখানে বর্তমান নোড থেকে কুয়েরির সবচেয়ে কাছাকাছি থাকা প্রতিবেশী নোডে স্থানান্তর করা হয়।',
          },
        },
        {
          term: 'Entry point',
          def: {
            en: 'The predetermined top-layer starting node where every incoming vector query begins its hierarchical top-down graph traversal.',
            bn: 'শীর্ষ স্তরের নির্ধারিত প্রারম্ভিক নোড যেখান থেকে প্রতিটি আগত ভেক্টর কুয়েরি তার বহুস্তরবিশিষ্ট গ্রাফ অনুসন্ধান শুরু করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Log beats linear', bn: 'কেন — লগারিদমিক অনুসন্ধান রৈখিক স্ক্যানকে হারায়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hop counts grow logarithmically with dataset size: searching 1,000,000 vectors requires approximately 20 hops rather than 1,000,000 dot products.', bn: 'ডেটাসেটের আকারের সাথে হপ সংখ্যা লগারিদমিক হারে বাড়ে: ১,০০০,০০০ ভেক্টরে অনুসন্ধানের জন্য ১,০০০,০০০ ডট প্রোডাক্টের বদলে মাত্র ২০টি হপ যথেষ্ট।' },
        { en: 'Dynamic inserts without retraining: new vectors link immediately into the graph, whereas IVF requires periodic cluster retraining.', bn: 'পুনঃট্রেনিং ছাড়া তাৎক্ষণিক ইনসার্ট: নতুন ভেক্টর সরাসরি গ্রাফে যুক্ত হতে পারে, যেখানে IVF-এ নিয়মিত ক্লাস্টার পুনরায় তৈরি করতে হয়।' },
        { en: 'High recall resilience: multi-scale small-world connectivity prevents greedy traversal from stalling in false local minima.', bn: 'উচ্চ রিকলের নিশ্চয়তা: বহু-মাত্রিক স্মল-ওয়ার্ল্ড সংযোগ ব্যবস্থার কারণে গ্রিডি সার্চ ভুল লোকাল মিনিমাতে সহজে আটকে যায় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Descend in 4 steps', bn: 'HOW — ৪টি ধাপে গ্রাফের স্তর অতিক্রম' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Enter top layer', bn: '১. শীর্ষ স্তরে প্রবেশ' }, text: { en: 'Begin query traversal at the designated Layer 2 entry point node E.', bn: 'নির্ধারিত স্তর ২-এর এন্ট্রি পয়েন্ট নোড E থেকে কুয়েরি অনুসন্ধান শুরু করুন।' } },
        { title: { en: '2. Layer 2 hop', bn: '২. স্তর ২-এর দীর্ঘ হপ' }, text: { en: 'Perform 1 long-distance hop along highway links to the nearest node.', bn: 'মহাসড়ক লিঙ্কের মাধ্যমে সবচেয়ে কাছের নোডে ১টি দূরপাল্লার হপ সম্পন্ন করুন।' } },
        { title: { en: '3. Layer 1 hop', bn: '৩. স্তর ১-এর মধ্যম হপ' }, text: { en: 'Descend to Layer 1 and execute 1 intermediate hop closer to the target.', bn: 'স্তর ১-এ নেমে লক্ষ্যবস্তুর আরও কাছাকাছি ১টি মধ্যম দূরত্বের হপ দিন।' } },
        { title: { en: '4. Layer 0 settle', bn: '৪. স্তর ০-এর নিখুঁত নিষ্পত্তি' }, text: { en: 'Descend to base Layer 0 and make 2 fine hops to arrive at the true nearest neighbor ★.', bn: 'মূল স্তর ০-এ নেমে ২টি সূক্ষ্ম হপ দিয়ে প্রকৃত নিকটতম প্রতিবেশী ★ চিহ্নিত করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'hnsw_traversal_sim.py',
      code: `def hnsw_traversal(layer_hops, total_vectors):
    total_hops = sum(layer_hops)
    # Visiting entry point + each hopped node + final check
    visited_nodes = total_hops + 2
    skipped_nodes = total_vectors - visited_nodes
    speedup = total_vectors / visited_nodes
    return total_hops, visited_nodes, skipped_nodes, speedup

# 3 layers: L2 (1 hop), L1 (1 hop), L0 (2 hops)
hops, visited, skipped, speedup = hnsw_traversal([1, 1, 2], 1000)
print("HNSW 3-layer descent:")
print(f"Hops per layer: L2=1, L1=1, L0=2 -> Total hops = {hops}")
print(f"Nodes visited: {visited}/1,000 ({visited/10:.1f}%)")
print(f"Nodes skipped: {skipped}/1,000 ({skipped/10:.1f}%)")
print(f"Speedup vs brute scan: {speedup:.1f}x")

# Detour test on L0 (e.g. beam exploration or detour to 4 hops)
hops_detour, visited_detour, skipped_detour, _ = hnsw_traversal([1, 1, 4], 1000)
print(f"\\nL0 detour test (L0=4 hops):")
print(f"Total hops: {hops_detour}, Visited: {visited_detour}, Skipped: {skipped_detour}")

# Output:
# HNSW 3-layer descent:
# Hops per layer: L2=1, L1=1, L0=2 -> Total hops = 4
# Nodes visited: 6/1,000 (0.6%)
# Nodes skipped: 994/1,000 (99.4%)
# Speedup vs brute scan: 166.7x
#
# L0 detour test (L0=4 hops):
# Total hops: 6, Visited: 8, Skipped: 992`,
      caption: {
        en: 'The Python simulation tracks HNSW traversal: 4 hops across 3 layers visit only 6 nodes (166.7× speedup vs scanning 1,000 vectors); exploring a 4-hop detour on Layer 0 visits 8 nodes.',
        bn: 'পাইথন সিমুলেশন HNSW অনুসন্ধানের গতিবিধি ট্র্যাক করে: ৩টি স্তরে ৪টি হপ মাত্র ৬টি নোড পরীক্ষা করে (১,০০০ ভেক্টর স্ক্যান করার তুলনায় ১৬৬.৭ গুণ গতি বৃদ্ধি); স্তর ০-এ ৪টি হপের পথ নিলে ৮টি নোড পরীক্ষা হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Descent, live', bn: 'INSIDE — জীবন্ত গ্রাফ ট্রাভার্সাল সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulation steps through a three-tier graph traversal: 1 hop on the top tier (L2), 1 hop on the intermediate level (L1), and 2 hops across base links (L0). In total, 4 hops evaluate only 6 vectors, skipping 994 items. If an exploratory detour occurs at the base (setting hops to 4), total visits increase to 8 to reach the same neighbor. Greedy paths remain short and efficient, while unnecessary detours increase computation.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি তিন স্তরের গ্রাফ ট্রাভার্সালের ধাপগুলো প্রদর্শন করে: শীর্ষ স্তরে (L2) ১টি হপ, মধ্যবর্তী পর্যায়ে (L1) ১টি হপ এবং মূল সংযোগে (L0) ২টি হপ। সর্বমোট ৪টি হপে মাত্র ৬টি ভেক্টর পরীক্ষা হয় এবং ৯৯৪টি বাদ পড়ে। যদি মূল সংযোগে অতিরিক্ত অনুসন্ধানী পথ নেওয়া হয় (হপ সংখ্যা ৪ করা হয়), তবে একই প্রতিবেশীতে পৌঁছাতে মোট পরিদর্শন বেড়ে ৮টিতে দাঁড়ায়। গ্রিডি পথ সর্বদা সংক্ষিপ্ত ও কার্যকর থাকে, যেখানে অপ্রয়োজনীয় পথ কম্পিউটেশন বৃদ্ধি করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'HNSW walk (detour L0, press Run)', bn: 'HNSW হাঁটা (L0 ঘোরান, Run)' },
      html: '<h3>Walk the layers</h3>\n<pre id="out"></pre>\n<p>Console logs every hop.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const HOPS = [1, 1, 2]; // ← try [1, 1, 4] (L0 detour)\nconst names = ["L2", "L1", "L0"];\nlet hops = 0, visited = 0;\nHOPS.forEach((h, i) => {\n  hops += h; visited += h + (i === 0 ? 0 : 0);\n  console.log(names[i] + ": " + h + " hop(s)");\n});\nvisited = hops + 2; // entry + final check\nconsole.log("total " + hops + " hops · " + visited + " visited · " + (1000 - visited) + " skipped");\ndocument.getElementById("out").textContent = hops + " hops · " + visited + " visited · " + (1000 - visited) + " skipped 🕸️";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Graph instincts', bn: 'ফলাফল — গ্রাফ আর্কিটেকচারের মূল সুবিধা' },
    },
    {
      type: 'list',
      items: [
        { en: '4 hops cross 3 hierarchical layers (1 on Layer 2, 1 on Layer 1, 2 on Layer 0) to converge on nearest neighbors.', bn: 'নিকটতম প্রতিবেশীতে পৌঁছাতে ৪টি হপ ৩টি অনুক্রমিক স্তর পার হয় (স্তর ২-এ ১টি, স্তর ১-এ ১টি এবং স্তর ০-এ ২টি)।' },
        { en: 'Visiting only 6 of 1,000 vectors demonstrates why graph traversal outpaces linear scanning by orders of magnitude.', bn: '১,০০০ ভেক্টরের মধ্যে মাত্র ৬টি পরীক্ষা করা প্রমাণ করে কেন গ্রাফ ট্রাভার্সাল রৈখিক স্ক্যানের চেয়ে বহু গুণ এগিয়ে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Graph traps', bn: 'ডিবাগ — গ্রাফ ট্রাভার্সালের ফাঁদ ও প্রতিকার' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Greedy holes (the stuck walker)', bn: 'লোকাল মিনিমাতে আটকে যাওয়া (Greedy holes)' },
      text: {
        en: 'Strict greedy descent can become trapped in local minima where all immediate neighbors are further from the query than the current node, even though a closer node lies behind them. Symptoms: occasional recall dips on tight vector clusters. Cure: expand the search beam using the ef_search parameter, tracking 2 to 3 candidate paths simultaneously.',
        bn: 'কঠোর গ্রিডি অনুসন্ধানের ক্ষেত্রে কখনো কখনো এমন অবস্থা তৈরি হতে পারে যেখানে সব নিকটবর্তী নোড কুয়েরি থেকে দূরে মনে হয় অথচ তাদের পেছনে আসল নিকটতম নোডটি থাকে। লক্ষণ: ঘন ভেক্টর ক্লাস্টারে মাঝে মাঝে রিকল কমে যাওয়া। প্রতিকার: ef_search প্যারামিটার বাড়িয়ে অনুসন্ধানের পরিধি বৃদ্ধি করা যাতে একই সাথে ২ থেকে ৩টি বিকল্প পথ পরীক্ষা করা যায়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Memory hunger (the link bill)', bn: 'গ্রাফ লিঙ্কের অতিরিক্ত মেমরি খরচ (The link bill)' },
      text: {
        en: 'Storing graph edges consumes significant RAM: maintaining M=16 bidirectional connections per vector across layers substantially increases index footprint. Symptoms: the index consumes more RAM than the raw vectors themselves. Cure: budget M between 8 and 16, balancing recall against memory overhead.',
        bn: 'গ্রাফের সংযোগ বা এজগুলো সংরক্ষণে প্রচুর র‍্যাম প্রয়োজন হয়: প্রতিটি ভেক্টরে প্রতি স্তরে M=১৬টি দ্বি-মুখী সংযোগ রাখলে ইনডেক্সের আকার বহুগুণ বেড়ে যায়। লক্ষণ: ইনডেক্সের আকার মূল ভেক্টরের চেয়েও বড় হয়ে যাওয়া। সমাধান: মেমরি এবং রিকলের মধ্যে ভারসাম্য রাখতে M এর মান ৮ থেকে ১৬ এর মধ্যে নির্ধারণ করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production implementations', bn: 'বাস্তব ক্ষেত্র — আধুনিক গ্রাফ ইঞ্জিন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vector database engines: Qdrant, Weaviate, and Milvus deploy HNSW as their primary indexing algorithm for low-latency queries.', bn: 'ভেক্টর ডেটাবেজ ইঞ্জিন: Qdrant, Weaviate এবং Milvus দ্রুততম ল্যাটেন্সির জন্য প্রধান ইনডেক্সিং অ্যালগরিদম হিসেবে HNSW ব্যবহার করে।' },
        { en: 'Search engine integrations: Apache Lucene incorporates HNSW graphs to support dense vector search alongside inverted text indexes.', bn: 'সার্চ ইঞ্জিন সংযোগ: অ্যাপাচি লুসিন টেক্সট ইনডেক্সের পাশাপাশি ভেক্টর সার্চ সমর্থন করতে HNSW গ্রাফ ব্যবহার করে।' },
        { en: 'Real-time catalog search: e-commerce platforms leverage HNSW because new product embeddings can be inserted without costly offline retraining.', bn: 'রিয়েল-টাইম ক্যাটালগ সার্চ: ই-কমার্স প্ল্যাটফর্মগুলো HNSW ব্যবহার করে কারণ অফলাইনে পুনরায় ট্রেনিং ছাড়াই তাৎক্ষণিকভাবে নতুন পণ্য যুক্ত করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Quantization PQ', bn: 'পরবর্তী পাঠ — প্রোডাক্ট কোয়ান্টাইজেশন (PQ)' },
    },
    {
      type: 'para',
      text: {
        en: 'Now that multi-layer graph routing is mastered, Lesson 5 addresses RAM consumption through Product Quantization: compressing 6,144 bytes down to 192 bytes for a 32× memory reduction.',
        bn: 'বহুস্তর গ্রাফ রাউটিং আয়ত্ত করার পর, পাঠ ৫ প্রোডাক্ট কোয়ান্টাইজেশনের (PQ) মাধ্যমে মেমরি খরচ কমানো শেখাবে: যেখানে ৬,১৪৪ বাইটের ভেক্টরকে মাত্র ১৯২ বাইটে সংকুচিত করে ৩২ গুণ মেমরি সাশ্রয় করা হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'hnw-ex-1',
      kind: 'mcq',
      topic: 'hop-count',
      question: {
        en: 'Across the 3 HNSW layers with 1 hop on Layer 2, 1 hop on Layer 1, and 2 hops on Layer 0, what is the total hop count?',
        bn: 'স্তর ২-এ ১টি হপ, স্তর ১-এ ১টি হপ এবং স্তর ০-এ ২টি হপ সম্পন্ন হলে ৩-স্তরের HNSW গ্রাফে সর্বমোট কতটি হপ সম্পন্ন হয়?',
      },
      options: [
        { en: '4 hops total (1 + 1 + 2)', bn: 'সর্বমোট ৪টি হপ (১ + ১ + ২)' },
        { en: '3 hops total', bn: 'সর্বমোট ৩টি হপ' },
        { en: '6 hops total', bn: 'সর্বমোট ৬টি হপ' },
        { en: '1,000 hops total', bn: 'সর্বমোট ১,০০০টি হপ' },
      ],
      answer: 0,
      hint: { en: 'Add the hops taken across each of the three layers: 1 + 1 + 2.', bn: 'তিনটি স্তরে সম্পন্ন হওয়া হপগুলো যোগ করুন: ১ + ১ + ২।' },
      explanation: {
        en: '1 hop on Layer 2 + 1 hop on Layer 1 + 2 hops on Layer 0 = 4 hops total. Top layers make broad transitions while bottom layers finalize exact placement.',
        bn: 'স্তর ২-এ ১টি + স্তর ১-এ ১টি + স্তর ০-এ ২টি = সর্বমোট ৪টি হপ। উপরের স্তরগুলো দ্রুত দূরত্ব কমায় এবং নিচের স্তরগুলো নিখুঁত অবস্থান নিশ্চিত করে।',
      },
    },
    {
      id: 'hnw-ex-2',
      kind: 'mcq',
      topic: 'visit-count',
      question: {
        en: 'In our 1,000-vector benchmark, how many vectors are visited during this 4-hop descent versus skipped?',
        bn: 'আমাদের ১,০০০ ভেক্টরের বেঞ্চমার্কে ৪-হপ অবতরণের সময় কতটি ভেক্টর পরীক্ষা করা হয় এবং কতটি বাদ পড়ে?',
      },
      options: [
        { en: '6 visited, 994 skipped', bn: '৬টি পরীক্ষা করা হয়, ৯৯৪টি বাদ পড়ে' },
        { en: '1,000 visited, none skipped', bn: '১,০০০টি পরীক্ষা করা হয়, কোনোটি বাদ পড়ে না' },
        { en: '4 visited, 996 skipped', bn: '৪টি পরীক্ষা করা হয়, ৯৯৬টি বাদ পড়ে' },
        { en: '100 visited, 900 skipped', bn: '১০০টি পরীক্ষা করা হয়, ৯০০টি বাদ পড়ে' },
      ],
      answer: 0,
      hint: { en: 'Count the entry node, the 4 hopped nodes, and the final boundary check.', bn: 'এন্ট্রি নোড, ৪টি হপ নোড এবং চূড়ান্ত যাচাই নোড হিসাব করুন।' },
      explanation: {
        en: 'The entry node + 4 intermediate hops + final neighbor evaluation = 6 vectors visited. 994 vectors are completely bypassed, delivering massive acceleration.',
        bn: 'এন্ট্রি নোড + ৪টি মধ্যবর্তী হপ + চূড়ান্ত মূল্যায়ন = সর্বমোট ৬টি ভেক্টর পরীক্ষা হয়। বাকি ৯৯৪টি ভেক্টর সম্পূর্ণ এড়িয়ে যাওয়া হয়।',
      },
    },
    {
      id: 'hnw-ex-3',
      kind: 'mcq',
      topic: 'detour-cost',
      question: {
        en: 'If an exploratory detour on Layer 0 increases its hops from 2 to 4, what is the updated number of visited vectors?',
        bn: 'যদি স্তর ০-এ একটি অনুসন্ধানী ঘোরা পথে হপ সংখ্যা ২ থেকে বাড়িয়ে ৪ করা হয়, তবে মোট পরীক্ষিত ভেক্টরের সংখ্যা কত হয়?',
      },
      options: [
        { en: '8 visited (6 hops + 2 checks) — reaching the same neighbor with +2 cost', bn: '৮টি পরীক্ষা হয় (৬টি হপ + ২টি চেক) — একই প্রতিবেশীতে পৌঁছাতে অতিরিক্ত ২টি হিসাবের খরচ' },
        { en: '6 visited — remaining unchanged', bn: '৬টি পরীক্ষা হয় — অপরিবর্তিত থাকে' },
        { en: '4 visited total', bn: 'সর্বমোট ৪টি পরীক্ষা হয়' },
        { en: '1,000 visited total', bn: 'সর্বমোট ১,০০০টি পরীক্ষা হয়' },
      ],
      answer: 0,
      hint: { en: 'Compute 1 + 1 + 4 hops = 6 hops, plus 2 boundary evaluations.', bn: '১ + ১ + ৪ হপ = ৬টি হপ, সাথে ২টি অতিরিক্ত যাচাই হিসাব করুন।' },
      explanation: {
        en: '1 hop on L2 + 1 hop on L1 + 4 hops on L0 = 6 hops. Adding entry and neighbor evaluations yields 8 visited vectors. Direct greedy traversal minimizes unnecessary evaluations.',
        bn: 'L২-এ ১টি + L১-এ ১টি + L০-এ ৪টি = ৬টি হপ। এন্ট্রি ও প্রতিবেশী নোড মিলিয়ে মোট ৮টি ভেক্টর পরীক্ষা হয়। সরাসরি পথ অপ্রয়োজনীয় খরচ কমায়।',
      },
    },
    {
      id: 'hnw-ex-4',
      kind: 'predict',
      topic: 'stuck-fix',
      question: {
        en: 'When greedy graph descent becomes trapped in local minima, what parameter is adjusted and why?',
        bn: 'যখন গ্রিডি গ্রাফ ট্রাভার্সাল লোকাল মিনিমাতে আটকে যায়, তখন কোন প্যারামিটার পরিবর্তন করা হয় এবং কেন?',
      },
      answer: 'ef_search beam 2–3: candidates hedge local traps.',
      accept: ['ef_search', 'beam', 'candidate', 'local', 'minima', 'hedge', '2', '3'],
      hint: { en: 'Name the search beam parameter and the candidate width.', bn: 'সার্চ বিম প্যারামিটার এবং প্রার্থী সংখ্যার সীমা উল্লেখ করুন।' },
      explanation: {
        en: 'Setting ef_search to track a beam of 2–3 candidates allows the search to evaluate alternative routes, bypassing local minima that would trap a single greedy walker.',
        bn: 'ef_search প্যারামিটারের মাধ্যমে ২-৩টি বিকল্প পথ একসাথে পরীক্ষা করলে একটি একক গ্রিডি পথ যেখানে আটকে যেত তা সহজেই বাইপাস করা সম্ভব হয়।',
      },
    },
  ],
  quiz: {
    id: 'hnsw-graphs-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'hnwq1',
        kind: 'mcq',
        topic: 'hnsw-mean',
        question: {
          en: 'How do hierarchical multi-scale layers in an HNSW graph accelerate vector search?',
          bn: 'HNSW গ্রাফে বহুস্তরবিশিষ্ট অনুক্রমিক স্তরগুলো কীভাবে ভেক্টর অনুসন্ধানকে দ্রুততর করে?',
        },
        options: [
          {
            en: 'Sparse top layers make long-distance highway hops while dense bottom layers navigate local street neighbors',
            bn: 'উপরের স্তরগুলো মহাসড়কের মতো দূরপাল্লার দীর্ঘ লাফ দেয় আর নিচের ঘন স্তরগুলো স্থানীয় প্রতিবেশীদের মধ্যে নিখুঁত নেভিগেশন সম্পন্ন করে',
          },
          {
            en: 'All layers maintain identical edge densities and uniform link lengths throughout the index',
            bn: 'ইনডেক্সের সমস্ত স্তর জুড়ে সংযোগের ঘনত্ব এবং দৈর্ঘ্য সম্পূর্ণ অভিন্ন থাকে',
          },
          {
            en: 'Graph layers eliminate vector distances completely in favor of randomized walk algorithms',
            bn: 'গ্রাফের স্তরগুলো দূরত্বের হিসাব পুরোপুরি বাদ দিয়ে এলোমেলো অনুসন্ধানের ওপর নির্ভর করে',
          },
          {
            en: 'Vectors only connect horizontally to items created at the exact same millisecond',
            bn: 'ভেক্টরগুলো কেবল একই মিলিসেকেন্ডে তৈরি হওয়া সমান্তরাল ডেটার সাথে যুক্ত থাকে',
          },
        ],
        answer: 0,
        hint: { en: 'Think about highways for long journeys and local roads for final arrival.', bn: 'দূরপাল্লার জন্য মহাসড়ক এবং গন্তব্যে পৌঁছানোর জন্য স্থানীয় রাস্তার কথা ভাবুন।' },
        explanation: {
          en: 'HNSW mimics skip-lists in graph space: top layers rapidly bridge wide topological distances, allowing bottom layers to converge locally in logarithmic time.',
          bn: 'HNSW গ্রাফ স্পেসে স্কিপ-লিস্টের মতো কাজ করে: উপরের স্তরগুলো দ্রুত দূরত্ব কমায় এবং নিচের স্তরগুলো লগারিদমিক সময়ে সঠিক প্রতিবেশীতে পৌঁছায়।',
        },
      },
      {
        id: 'hnwq2',
        kind: 'mcq',
        topic: 'scale-law',
        question: {
          en: 'Approximately how many graph traversal hops are required to locate nearest neighbors in a 1,000,000-vector corpus?',
          bn: '১,০০০,০০০ নথির ডেটাসেটে নিকটতম প্রতিবেশী চিহ্নিত করতে আনুমানিক কতটি গ্রাফ হপের প্রয়োজন হয়?',
        },
        options: [
          {
            en: '~20 hops — logarithmic growth scales sublinearly',
            bn: '~২০টি হপ — লগারিদমিক বৃদ্ধির কারণে সাব-লিনিয়ার স্কেলিং বজায় থাকে',
          },
          {
            en: '1,000,000 hops — linear growth requires examining all documents',
            bn: '১,০০০,০০০ হপ — রৈখিক বৃদ্ধির কারণে সব নথি পরীক্ষা করতে হয়',
          },
          {
            en: '4 hops — hop counts never change regardless of corpus size',
            bn: '৪টি হপ — ডেটাসেটের আকার যাই হোক হপ সংখ্যা অপরিবর্তিত থাকে',
          },
          {
            en: 'Zero hops — graphs require no traversal steps',
            bn: 'শূন্য হপ — গ্রাফে কোনো ট্রাভার্সাল ধাপের প্রয়োজন নেই',
          },
        ],
        answer: 0,
        hint: { en: 'Graph traversal complexity scales logarithmically: O(log N).', bn: 'গ্রাফ ট্রাভার্সালের জটিলতা লগারিদমিকভাবে বাড়ে: O(log N)।' },
        explanation: {
          en: 'Because HNSW exhibits small-world logarithmic properties, searching 1,000,000 vectors requires only approximately 20 hops (log2(1,000,000) ≈ 20).',
          bn: 'HNSW-এর স্মল-ওয়ার্ল্ড লগারিদমিক বৈশিষ্ট্যের কারণে ১,০০০,০০০ ভেক্টরে অনুসন্ধানের জন্য মাত্র প্রায় ২০টি হপ প্রয়োজন হয় (log2(১,০০০,০০০) ≈ ২০)।',
        },
      },
      {
        id: 'hnwq3',
        kind: 'mcq',
        topic: 'ivf-vs-hnsw',
        question: {
          en: 'What architectural advantage does HNSW hold over IVF when processing continuous real-time vector inserts?',
          bn: 'রিয়েল-টাইমে ক্রমাগত নতুন ভেক্টর যুক্ত করার ক্ষেত্রে IVF এর তুলনায় HNSW কোন স্থাপত্যগত সুবিধা প্রদান করে?',
        },
        options: [
          {
            en: 'New vectors link dynamically into the existing graph without requiring offline cluster retraining',
            bn: 'অফলাইনে পুনরায় ক্লাস্টার ট্রেনিং ছাড়াই নতুন ভেক্টর সরাসরি বিদ্যমান গ্রাফে যুক্ত হতে পারে',
          },
          {
            en: 'HNSW consumes less memory than flat unindexed raw vector arrays',
            bn: 'HNSW ফ্ল্যাট আনইনডেক্সড কাঁচা ভেক্টরের চেয়েও কম মেমরি খরচ করে',
          },
          {
            en: 'HNSW completely eliminates floating-point Euclidean distance math',
            bn: 'HNSW ফ্লোটিং-পয়েন্ট ইউক্লিডীয় দূরত্বের হিসাব পুরোপুরি বাদ দেয়',
          },
          {
            en: 'HNSW graphs do not require storing document metadata in memory',
            bn: 'HNSW গ্রাফের ক্ষেত্রে মেমরিতে নথির মেটাডেটা রাখার প্রয়োজন হয় না',
          },
        ],
        answer: 0,
        hint: { en: 'Think about incremental graph insertion versus global k-means clustering.', bn: 'ধাপে ধাপে গ্রাফে নতুন সংযোগ বনাম সামগ্রিক ক্লাস্টারিংয়ের কথা ভাবুন।' },
        explanation: {
          en: 'HNSW supports incremental insertions by connecting newcomers to local neighbors on the fly. IVF centroids drift over time, eventually requiring full k-means retraining.',
          bn: 'HNSW নতুন ভেক্টরকে সাথে সাথে আশেপাশের প্রতিবেশীদের সাথে যুক্ত করতে পারে। কিন্তু IVF-এর সেন্ট্রয়েডগুলো সময়ের সাথে কার্যকারিতা হারায় এবং পুনরায় ট্রেনিং প্রয়োজন হয়।',
        },
      },
      {
        id: 'hnwq4',
        kind: 'predict',
        topic: 'walk-recite',
        question: {
          en: 'What four benchmark metrics summarize the 3-layer HNSW graph traversal in this lesson?',
          bn: 'এই পাঠে ৩-স্তরের HNSW গ্রাফ ট্রাভার্সাল প্রকাশ করে এমন চারটি মূল সংখ্যা কী কী?',
        },
        answer: '3 layers, 1+1+2 = 4 hops, 6 visited, 994 skipped.',
        accept: ['3', '1+1+2', '4', '6', '994', 'layer'],
        hint: { en: 'List layer count, hops per layer formula, total nodes visited, and total nodes skipped.', bn: 'স্তর সংখ্যা, প্রতি স্তরের হপ সূত্র, মোট পরিদর্শিত নোড এবং বাদ পড়া নোডের সংখ্যা উল্লেখ করুন।' },
        explanation: {
          en: 'The four traversal metrics are 3 layers, 1+1+2 = 4 hops, 6 vectors visited, and 994 vectors skipped.',
          bn: 'চারটি মূল পরিমাপ হলো: ৩টি স্তর, ১+১+২ = ৪টি হপ, ৬টি ভেক্টর পরিদর্শন এবং ৯৯৪টি ভেক্টর বাদ দেওয়া।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'quantization-pq',
    title: { en: 'Quantization PQ', bn: 'Quantization PQ' },
  },
};
