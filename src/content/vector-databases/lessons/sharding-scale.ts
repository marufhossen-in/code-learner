import type { Lesson } from '../../../lib/types';

export const ShardingScaleLesson: Lesson = {
  slug: 'sharding-scale',
  tech: 'vector-databases',
  title: {
    en: 'Sharding Scale',
    bn: 'শার্ডিং ও স্কেলিং — ডিস্ট্রিবিউটেড ক্লাস্টারে ১০০ মিলিয়ন ভেক্টর',
  },
  summary: {
    en: 'Single-node capacity limits vector search: partitioning 100,000,000 vectors across 10 shards (10,000,000 vectors each) allows a coordinator to broadcast a 10-way fanout and merge local candidates, while 3 replicas per shard across 30 total nodes guarantee high availability.',
    bn: 'একক সার্ভারের সীমাবদ্ধতা কাটিয়ে উঠতে ১০০,০০০,০০০ ভেক্টরকে ১০টি শার্ডে (প্রতিটিতে ১০,০০০,০০০ ভেক্টর) ভাগ করা হয়, যেখানে কোঅর্ডিনেটর সমান্তরাল ফ্যানআউটের মাধ্যমে লোকাল প্রার্থী সংগ্রহ করে গ্লোবাল ফলাফল নির্ধারণ করে এবং ৩০টি নোডে ৩টি করে রেপ্লিকা উচ্চ প্রাপ্যতা নিশ্চিত করে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Divide and serve', bn: 'WHAT — ডেটা বিভাজন ও সমান্তরাল পরিবেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When a vector database expands beyond the memory and CPU capacity of a single physical server, horizontal sharding distributes embeddings across a cluster. Partitioning 100,000,000 vectors across 10 shards allocates 10,000,000 vectors per machine, each maintaining its own local vector index. When a user submits a query, the coordinator node executes a parallel fanout to all 10 shards, collects local top-K candidates from each, and merges them into a global top-K result. By maintaining 3 replicas per shard across 30 total nodes, the cluster tolerates up to 2 node failures per shard without experiencing downtime.',
        bn: 'যখন একটি ভেক্টর ডেটাবেজ একটি একক সার্ভারের মেমরি ও সিপিইউ ক্ষমতা অতিক্রম করে, তখন অনুভূমিক শার্ডিং ক্লাস্টারজুড়ে এম্বেডিংগুলোকে সমান্তরালভাবে বণ্টন করে দেয়। ১০০,০০০,০০০ ভেক্টরকে ১০টি শার্ডে ভাগ করলে প্রতি মেশিনে ১০,০০০,০০০ ভেক্টর থাকে, যেখানে প্রতি শার্ড নিজস্ব লোকাল ইনডেক্স বজায় রাখে। যখন কোনো ব্যবহারকারী একটি কুয়েরি পাঠান, তখন কোঅর্ডিনেটর নোড একই সাথে ১০টি শার্ডে প্যারালাল ফ্যানআউট পাঠায়, প্রতিটি থেকে লোকাল টপ-K ফলাফল সংগ্রহ করে এবং সেগুলো একত্রিত করে গ্লোবাল টপ-K নির্ধারণ করে। প্রতি শার্ডের জন্য ৩টি করে রেপ্লিকা রেখে মোট ৩০টি নোড ব্যবহারের মাধ্যমে প্রতিটি শার্ডের ২টি করে নোড একসাথে নষ্ট হলেও ডেটাবেজ সচল থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Ten shards, one answer', bn: '১০টি শার্ড, ১টি সমন্বিত উত্তর' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Query fanout across shards">
<rect x="240" y="15" width="160" height="34" rx="8" fill="#4f46e5" opacity="0.85"/>
<text x="320" y="37" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">QUERY → fanout 10</text>
<g font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="20" y="70" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="70" y="93">S0</text><text x="70" y="109">10M</text>
<rect x="130" y="70" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="180" y="93">S1</text><text x="180" y="109">10M</text>
<rect x="240" y="70" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="290" y="93">S2</text><text x="290" y="109">10M</text>
<rect x="350" y="70" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="400" y="93">S3</text><text x="400" y="109">10M</text>
<rect x="460" y="70" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="510" y="93">S4</text><text x="510" y="109">10M</text>
<rect x="75" y="140" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="125" y="163">S5</text><text x="125" y="179">10M</text>
<rect x="185" y="140" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="235" y="163">S6</text><text x="235" y="179">10M</text>
<rect x="295" y="140" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="345" y="163">S7</text><text x="345" y="179">10M</text>
<rect x="405" y="140" width="100" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="455" y="163">S8</text><text x="455" y="179">10M</text>
<rect x="515" y="140" width="40" height="60" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="535" y="163">S9</text><text x="535" y="179">10M</text>
</g>
<rect x="190" y="208" width="260" height="30" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="228" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">merge 10 × top-K → global top-K ✓</text>
</svg>`,
      caption: {
        en: 'Ten shards process queries simultaneously, and one coordinator merges candidate results into the global top-K ranking.',
        bn: '১০টি শার্ড সমান্তরালভাবে কুয়েরি প্রসেস করে, এবং ১টি কোঅর্ডিনেটর নোড সমস্ত প্রার্থী ফলাফল একত্রিত করে চূড়ান্ত গ্লোবাল টপ-K ফলাফল তৈরি করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Database shard',
          def: {
            en: 'An independent horizontal partition of a complete vector dataset hosted on dedicated cluster nodes.',
            bn: 'একটি সম্পূর্ণ ভেক্টর ডেটাবেজের একটি স্বাধীন অনুভূমিক অংশ যা ক্লাস্টারের নির্দিষ্ট সার্ভার নোডে সংরক্ষিত থাকে।',
          },
        },
        {
          term: 'Query fanout',
          def: {
            en: 'The architectural pattern of broadcasting a single incoming similarity query to all shards concurrently.',
            bn: 'একটি একক সাদৃশ্য অনুসন্ধানকে ক্লাস্টারের সমস্ত শার্ডে একসাথে সমান্তরালভাবে পাঠিয়ে দেওয়ার নেটওয়ার্ক কৌশল।',
          },
        },
        {
          term: 'Shard replica',
          def: {
            en: 'An identical synchronized clone of a primary shard that provides high availability and shares query load.',
            bn: 'একটি প্রাইমারি শার্ডের হুবহু সিঙ্ক্রোনাইজড অনুলিপি যা সার্ভার ডাউন হলেও ক্লাস্টার সচল রাখে এবং ট্রাফিকের চাপ ভাগ করে নেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Single boxes cap', bn: 'কেন — একক সার্ভারের মেমরি সীমাবদ্ধতা' },
    },
    {
      type: 'list',
      items: [
        { en: '100,000,000 vectors × 192 bytes = 19.2 GB PQ data: adding graph indexes and working buffers overwhelms a single machine.', bn: '১০০,০০০,০০০ ভেক্টর × ১৯২ বাইট = ১৯.২ GB সংকুচিত ডেটা: গ্রাফ ইনডেক্স এবং বাফার মেমরি যোগ করলে তা একটি একক সার্ভারের ক্ষমতার বাইরে চলে যায়।' },
        { en: 'Sharding delivers horizontal parallelism: 10 machines evaluate queries simultaneously, returning in the time of the single slowest shard.', bn: 'শার্ডিং সমান্তরাল প্রক্রিয়াকরণ নিশ্চিত করে: ১০টি মেশিন একসাথে হিসাব করে, ফলে পুরো অনুসন্ধান সবচেয়ে ধীরগতির শার্ডের সমান সময়ে শেষ হয়।' },
        { en: 'Replicas provide enterprise fault tolerance: maintaining 3 copies per shard absorbs up to 2 concurrent node failures per partition.', bn: 'রেপ্লিকা ক্লাস্টারের নির্ভরযোগ্যতা বাড়ায়: প্রতি শার্ডে ৩টি করে কপি রাখলে পার্টিশন প্রতি একসাথে ২টি নোড নষ্ট হলেও কোনো ডেটা হারায় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Shard in 4 steps', bn: 'HOW — ৪টি ধাপে ক্লাস্টার শার্ডিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Partition data', bn: '১. ডেটা শার্ডিং' }, text: { en: 'Divide 100,000,000 vectors across 10 shards to store 10,000,000 vectors per machine.', bn: '১০০,০০০,০০০ ভেক্টরকে ১০টি শার্ডে ভাগ করে মেশিন প্রতি ১০,০০০,০০০ ভেক্টর বরাদ্দ করুন।' } },
        { title: { en: '2. Build local index', bn: '২. লোকাল ইনডেক্সিং' }, text: { en: 'Each shard builds and manages its own independent local vector index.', bn: 'প্রতিটি শার্ড তার নিজস্ব স্থানীয় ইনডেক্স তৈরি ও পরিচালনা করে।' } },
        { title: { en: '3. Fanout query', bn: '৩. সমান্তরাল ফ্যানআউট' }, text: { en: 'Broadcast the query to all 10 shards in parallel, requesting top-K candidates from each.', bn: 'একযোগে ১০টি শার্ডে কুয়েরি পাঠিয়ে প্রতি শার্ড থেকে শীর্ষ K সংখ্যক প্রার্থী ফলাফল চান।' } },
        { title: { en: '4. Merge rankings', bn: '৪. ফলাফল একত্রীকরণ' }, text: { en: 'Sort the 10 × K returned candidates on the coordinator to produce global top-K.', bn: 'কোঅর্ডিনেটর নোডে ১০ × K প্রার্থীকে দূরত্বের ভিত্তিতে সাজিয়ে চূড়ান্ত গ্লোবাল টপ-K ফলাফল নির্ধারণ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'sharding_fanout_sim.py',
      code: `def sharding_cluster_simulation(total_vectors, num_shards, replicas_per_shard, k_neighbors, failed_nodes):
    vectors_per_shard = total_vectors // num_shards
    total_nodes = num_shards * replicas_per_shard
    alive_nodes = total_nodes - failed_nodes
    merge_candidates = num_shards * k_neighbors
    # Shards continue serving as long as at least 1 replica stands per shard
    shards_serving = num_shards if failed_nodes <= (replicas_per_shard - 1) else (num_shards - 1)
    return vectors_per_shard, total_nodes, alive_nodes, merge_candidates, shards_serving

# Baseline: 100,000,000 vectors, 10 shards, 3 replicas, k=5, 0 failed nodes
per, total_n, alive_n, merge_k, serving = sharding_cluster_simulation(100000000, 10, 3, 5, 0)
print("Sharded cluster baseline:")
print(f"Vectors per shard: {per:,} ({per/1e6:.0f}M)")
print(f"Cluster fleet: {total_n} nodes ({total_n // 3} shards x 3 replicas)")
print(f"Query fanout: broadcast to 10 shards -> merge {merge_k} candidates (10 x top-5) -> global top-5")

# Failover test: kill 2 replicas of a shard
_, _, alive_f, _, serving_f = sharding_cluster_simulation(100000000, 10, 3, 5, 2)
print("\\nFailover test (kill 2 replicas of shard 3):")
print(f"Nodes alive: {alive_f}/{total_n}")
print(f"Shards serving: {serving_f}/10 (all shards still active)")

# Output:
# Sharded cluster baseline:
# Vectors per shard: 10,000,000 (10M)
# Cluster fleet: 30 nodes (10 shards x 3 replicas)
# Query fanout: broadcast to 10 shards -> merge 50 candidates (10 x top-5) -> global top-5
#
# Failover test (kill 2 replicas of shard 3):
# Nodes alive: 28/30
# Shards serving: 10/10 (all shards still active)`,
      caption: {
        en: 'The Python simulation tracks cluster architecture: 100,000,000 vectors split across 10 shards (10M each) in a 30-node fleet with ×3 replicas; merging 50 candidates (10 × top-5) yields global top-5 even if 2 nodes fail.',
        bn: 'পাইথন সিমুলেশন ক্লাস্টার আর্কিটেকচার ট্র্যাক করে: ১০০,০০০,০০০ ভেক্টর ১০টি শার্ডে (প্রতিটিতে ১০M) ৩০টি নোড এবং ×৩ রেপ্লিকাসহ বিভক্ত থাকে; ২টি নোড নষ্ট হলেও ৫০টি প্রার্থী (১০ × টপ-৫) সমন্বয় করে গ্লোবাল টপ-৫ পাওয়া যায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The fleet, live', bn: 'INSIDE — জীবন্ত ক্লাস্টার ফ্লিট সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive tryit simulates a distributed cluster: 100,000,000 vectors distributed across 10 shards (10,000,000 vectors each), executing a 10-way fanout and merging 10 × top-5 candidates into a global top-5. In a 30-node cluster with 3 replicas per shard, simulating the failure of 2 replicas on shard 3 leaves 28/30 nodes operational while all 10 shards continue serving queries without disruption.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি একটি ডিস্ট্রিবিউটেড ক্লাস্টারের মডেল দেখায়: ১০০,০০০,০০০ ভেক্টর ১০টি শার্ডে (প্রতিটিতে ১০,০০০,০০০ ভেক্টর) সাজিয়ে ১০-মুখী ফ্যানআউট চালানো হয় এবং ১০ × টপ-৫ প্রার্থী থেকে গ্লোবাল টপ-৫ ফলাফল পাওয়া যায়। প্রতি শার্ডে ৩টি করে রেপ্লিকা বিশিষ্ট ৩০টি নোডের ক্লাস্টারে শার্ড ৩-এর ২টি রেপ্লিকা নোড নষ্ট হলেও ২৮/৩০টি নোড সচল থাকে এবং সমস্ত ১০টি শার্ডই কোনো বাধা ছাড়া সার্ভিস চালু রাখে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Fleet lab (kill 2 replicas, press Run)', bn: 'Fleet lab (২-replica মারুন, Run)' },
      html: '<h3>Divide and serve</h3>\n<pre id="out"></pre>\n<p>Console musters the fleet.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 8px; padding: 10px; }',
      js: 'const V = 100e6, S = 10, R = 3, KILL = 0; // ← try KILL = 2!\nconst per = V / S;\nconsole.log(S + " shards × " + (per/1e6) + "M vectors");\nconst alive = S * R - KILL;\nconst serving = KILL <= 2 ? S : S - 1;\nconsole.log("nodes " + alive + "/" + (S*R) + " · shards serving " + serving + "/" + S);\nconsole.log("fanout " + S + " → merge " + S + "×top-5 → global top-5");\ndocument.getElementById("out").textContent = (per/1e6) + "M/shard · " + alive + "/" + (S*R) + " nodes · " + serving + "/" + S + " serving 🚢";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Fleet instincts', bn: 'ফলাফল — ডিস্ট্রিবিউটেড ক্লাস্টারের মূল সুবিধা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Partitioning 100,000,000 vectors into 10,000,000 per shard parallelizes compute across independent memory buses.', bn: '১০০,০০০,০০০ ভেক্টরকে শার্ড প্রতি ১০,০০০,০০০ ভেক্টরে ভাগ করলে সম্পূর্ণ কম্পিউটেশন স্বাধীন মেমরি বাসের মধ্যে সমান্তরালভাবে ঘটে।' },
        { en: 'A 30-node fleet with 3 replicas per shard tolerates 2 simultaneous node crashes per partition without dropping traffic.', bn: 'শার্ড প্রতি ৩টি রেপ্লিকা সহ ৩০টি নোডের বহর ট্রাফিকের কোনো ক্ষতি ছাড়াই পার্টিশন প্রতি একসাথে ২টি নোডের পতন সহ্য করতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Fleet traps', bn: 'ডিবাগ — শার্ডিং ক্লাস্টারের সাধারণ সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Hot shards (the celebrity slice)', bn: 'অসম লোড ও হট শার্ডের সমস্যা (Hot shards)' },
      text: {
        en: 'Range-based sharding frequently routes disproportionate traffic to specific partitions: 9 shards sit idle while 1 overloaded shard causes server throttling. Symptoms: tail p99 latency bottlenecked by one machine. Cure: apply consistent hash sharding to scatter documents and query volume evenly across all machines.',
        bn: 'রেঞ্জ-ভিত্তিক শার্ডিংয়ের ক্ষেত্রে নির্দিষ্ট কিছু শার্ডে অতিরিক্ত ট্রাফিক চলে যেতে পারে: যার ফলে ৯টি শার্ড অলস থাকে এবং ১টি শার্ড অতিরিক্ত লোডে ডাউন হতে পারে। লক্ষণ: p৯৯ ল্যাটেন্সি কেবল একটি মেশিনের কারণে আটকে যাওয়া। সমাধান: কনসিস্টেন্ট হ্যাশ শার্ডিং প্রয়োগ করে ক্লাস্টারের সমস্ত মেশিনে ডকুমেন্ট এবং ট্রাফিকের চাপ সুষমভাবে বণ্টন করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Merge math (the K×S funnel)', bn: 'ফলাফল একত্রীকরণের পরিমাপ (The K×S funnel)' },
      text: {
        en: 'Each shard returns K candidate items, requiring the coordinator node to sort K × S items to identify the global top-K. Symptoms: merge latency bottlenecks as requested K grows large. Cure: keep candidate extraction sizes reasonable (K=5 to 20) so merge buffers remain lean.',
        bn: 'প্রতিটি শার্ড K সংখ্যক প্রার্থী ফেরত পাঠায়, ফলে কোঅর্ডিনেটরকে গ্লোবাল টপ-K নির্ধারণ করতে K × S সংখ্যক আইটেম সাজাতে হয়। লক্ষণ: কাঙ্ক্ষিত K এর মান অনেক বড় হলে একত্রীকরণ ধাপে ল্যাটেন্সি বেড়ে যাওয়া। সমাধান: প্রার্থীর সংখ্যা যৌক্তিক সীমার (K=৫ থেকে ২০) মধ্যে রাখুন যাতে একত্রীকরণ বাফার হালকা থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — ক্লাউড ভেক্টর প্ল্যাটফর্ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Pinecone multi-tenant pods: partitions vector indexes by project namespace across dedicated server clusters.', bn: 'Pinecone ক্লাস্টার: প্রজেক্ট নেমস্পেস অনুসারে ভেক্টর ইনডেক্সগুলোকে আলাদা সার্ভার পডে শার্ড করে পরিচালনা করে।' },
        { en: 'Milvus distributed architecture: partitions large vector collections into sealed segments distributed across query nodes.', bn: 'Milvus ডিস্ট্রিবিউটেড আর্কিটেকচার: বিশালাকার ভেক্টর সংগ্রহকে সিল করা সেগমেন্টে ভাগ করে বিভিন্ন কুয়েরি নোডে ছড়িয়ে দেয়।' },
        { en: 'OpenSearch and Elasticsearch vector clusters: distribute HNSW lucene segments across shards with primary and replica configurations.', bn: 'OpenSearch ও Elasticsearch: প্রাইমারি এবং রেপ্লিকা শার্ডের মাধ্যমে হাজার হাজার মেশিনে HNSW গ্রাফ সেগমেন্ট পরিচালনা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Rerank Filter', bn: 'পরবর্তী পাঠ — রি-র‍্যাংকিং ও মেটাডেটা ফিল্টারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With distributed sharding and fanout mastered, Lesson 7 introduces multi-stage retrieval funnels: pre-filtering 1,000 vectors down to 50 candidates by metadata, then reranking those 50 into the final top-5 using a cross-encoder model.',
        bn: 'ডিস্ট্রিবিউটেড শার্ডিং এবং ফ্যানআউট আয়ত্ত করার পর, পাঠ ৭ বহু-ধাপের রিট্রিভাল ফানেল নিয়ে আলোচনা করবে: মেটাডেটা দিয়ে ১,০০০ ভেক্টরকে ৫০টি প্রার্থীরা নামিয়ে আনা, এবং তারপর ক্রস-এনকোডারের মাধ্যমে সেই ৫০টি থেকে চূড়ান্ত সেরা ৫টি নির্বাচন করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'shy-ex-1',
      kind: 'mcq',
      topic: 'shard-size',
      question: {
        en: 'When partitioning a corpus of 100,000,000 vectors across 10 independent shards, how many vectors reside on each shard?',
        bn: '১০০,০০০,০০০ ভেক্টরের ডেটাসেটকে ১০টি স্বাধীন শার্ডে ভাগ করলে প্রতিটি শার্ডে কতটি ভেক্টর সংরক্ষিত থাকে?',
      },
      options: [
        { en: '10,000,000 vectors per shard (10M each)', bn: 'শার্ড প্রতি ১০,০০০,০০০ ভেক্টর (প্রতিটিতে ১০M)' },
        { en: '100,000,000 vectors per shard', bn: 'শার্ড প্রতি ১০০,০০০,০০০ ভেক্টর' },
        { en: '1,000,000 vectors per shard', bn: 'শার্ড প্রতি ১,০০০,০০০ ভেক্টর' },
        { en: '10 vectors per shard', bn: 'শার্ড প্রতি ১০টি ভেক্টর' },
      ],
      answer: 0,
      hint: { en: 'Divide the total vector count by the number of shards (100,000,000 / 10).', bn: 'মোট ভেক্টর সংখ্যাকে শার্ড সংখ্যা দিয়ে ভাগ করুন (১০০,০০০,০০০ / ১০)।' },
      explanation: {
        en: '100,000,000 vectors / 10 shards = 10,000,000 vectors per shard. Distributing vectors parallelizes memory and CPU load across the fleet.',
        bn: '১০০,০০০,০০০ ভেক্টর / ১০টি শার্ড = শার্ড প্রতি ১০,০০০,০০০ ভেক্টর। ভেক্টর বণ্টন ক্লাস্টারের বিভিন্ন মেশিনে মেমরি ও সিপিইউ লোড সমান্তরাল করে।',
      },
    },
    {
      id: 'shy-ex-2',
      kind: 'mcq',
      topic: 'node-count',
      question: {
        en: 'In a distributed cluster of 10 shards where each shard maintains 3 replicas for redundancy, how many total server nodes are required?',
        bn: '১০টি শার্ডের একটি ক্লাস্টারে প্রতিটি শার্ডের সুরক্ষার জন্য ৩টি করে রেপ্লিকা রাখলে সর্বমোট কতটি সার্ভার নোডের প্রয়োজন হয়?',
      },
      options: [
        { en: '30 server nodes total (10 shards × 3 replicas)', bn: 'সর্বমোট ৩০টি সার্ভার নোড (১০টি শার্ড × ৩টি রেপ্লিকা)' },
        { en: '10 server nodes total', bn: 'সর্বমোট ১০টি সার্ভার নোড' },
        { en: '13 server nodes total', bn: 'সর্বমোট ১৩টি সার্ভার নোড' },
        { en: '3 server nodes total', bn: 'সর্বমোট ৩টি সার্ভার নোড' },
      ],
      answer: 0,
      hint: { en: 'Multiply the number of shards (10) by the replica count per shard (3).', bn: 'শার্ড সংখ্যা (১০) কে শার্ড প্রতি রেপ্লিকা সংখ্যা (৩) দিয়ে গুণ করুন।' },
      explanation: {
        en: '10 shards × 3 replicas = 30 server nodes. Replicating shards ensures high availability and shares query read throughput.',
        bn: '১০টি শার্ড × ৩টি রেপ্লিকা = ৩০টি সার্ভার নোড। শার্ডের রেপ্লিকা রাখা উচ্চ প্রাপ্যতা নিশ্চিত করে এবং ট্রাফিকের চাপ ভাগ করে নেয়।',
      },
    },
    {
      id: 'shy-ex-3',
      kind: 'mcq',
      topic: 'kill-2',
      question: {
        en: 'If 2 replicas of a specific shard suffer hardware failure in a 3-replica cluster, what is the status of the cluster fleet?',
        bn: '৩-রেপ্লিকার একটি ক্লাস্টারে কোনো নির্দিষ্ট শার্ডের ২টি রেপ্লিকা নোড নষ্ট হয়ে গেলে ক্লাস্টারের বর্তমান অবস্থা কী হবে?',
      },
      options: [
        { en: '28/30 nodes alive, all 10/10 shards actively serving traffic', bn: '২৮/৩০টি নোড সচল এবং সমস্ত ১০/১০টি শার্ডই সক্রিয়ভাবে ট্রাফিকের উত্তর দিচ্ছে' },
        { en: '28/30 nodes alive, but only 9/10 shards serving traffic', bn: '২৮/৩০টি নোড সচল, কিন্তু মাত্র ৯/১০টি শার্ড ট্রাফিকের উত্তর দিচ্ছে' },
        { en: 'The entire cluster shuts down completely', bn: 'সম্পূর্ণ ক্লাস্টার পুরোপুরি বন্ধ হয়ে যায়' },
        { en: 'All 30 nodes automatically restore within one millisecond', bn: 'সমস্ত ৩০টি নোড এক মিলিসেকেন্ডের মধ্যে নিজে নিজেই ঠিক হয়ে যায়' },
      ],
      answer: 0,
      hint: { en: 'Because 3 replicas exist, 1 active replica continues serving traffic.', bn: 'যেহেতু ৩টি রেপ্লিকা রয়েছে, তাই ১টি সচল রেপ্লিকা ট্রাফিক সার্ভিস চালু রাখে।' },
      explanation: {
        en: 'Each shard maintains 3 replicas, meaning 2 replicas can fail simultaneously while the remaining standing replica continues serving traffic without data loss.',
        bn: 'প্রতিটি শার্ডে ৩টি করে রেপ্লিকা থাকায় ২টি নোড নষ্ট হলেও অবশিষ্ট তৃতীয় নোডটি ডেটা হারানো ছাড়াই ক্লাস্টারকে সচল রাখে।',
      },
    },
    {
      id: 'shy-ex-4',
      kind: 'predict',
      topic: 'hot-fix',
      question: {
        en: 'When 1 shard experiences severe query overload while 9 shards remain idle, what architecture failure occurred and how is it resolved?',
        bn: 'যখন ১টি শার্ড অতিরিক্ত কুয়েরির চাপে ডাউন হয়ে যায় আর বাকি ৯টি শার্ড অলস বসে থাকে, তখন কোন ব্যর্থতা ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Range hot shard: hash sharding scatters queries.',
      accept: ['hash', 'hot', 'range', 'scatter', 'even', 'celebrity', 'skew'],
      hint: { en: 'Identify the range partitioning failure and the hashing solution.', bn: 'রেঞ্জ পার্টিশনের সমস্যা এবং হ্যাশিং সমাধানের কথা উল্লেখ করুন।' },
      explanation: {
        en: 'Range partitioning concentrates traffic onto popular document partitions (hot shards). Consistent hash sharding uniformly distributes data and queries across all nodes.',
        bn: 'রেঞ্জ পার্টিশনিং জনপ্রিয় নথির ওপর ট্রাফিকের চাপ পুঞ্জীভূত করে। কনসিস্টেন্ট হ্যাশ শার্ডিং সমস্ত নোডে ডেটা এবং কুয়েরি সুষমভাবে বণ্টন করে এই সমস্যার সমাধান করে।',
      },
    },
  ],
  quiz: {
    id: 'sharding-scale-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'shyq1',
        kind: 'mcq',
        topic: 'fanout-mean',
        question: {
          en: 'What distributed query execution pattern defines a similarity search fanout in a sharded vector database?',
          bn: 'শার্ডেড ভেক্টর ডেটাবেজে কোন ডিস্ট্রিবিউটেড কুয়েরি কৌশলটি সাদৃশ্য সার্চ ফ্যানআউটকে সংজ্ঞায়িত করে?',
        },
        options: [
          {
            en: 'Broadcasting the query to all 10 shards simultaneously and merging their local top-K results on the coordinator',
            bn: 'একযোগে সমস্ত ১০টি শার্ডে কুয়েরি পাঠানো এবং কোঅর্ডিনেটরে তাদের লোকাল টপ-K ফলাফল একত্রিত করা',
          },
          {
            en: 'Randomly picking a single shard to answer queries without checking others',
            bn: 'অন্যান্য শার্ড না দেখেই এলোমেলোভাবে যেকোনো একটি শার্ড নির্বাচন করে উত্তর চাওয়া',
          },
          {
            en: 'Duplicating the complete vector database onto 10 separate hard drives',
            bn: 'পুরো ভেক্টর ডেটাবেজকে ১০টি আলাদা হার্ড ড্রাইভে হুবহু অনুলিপি করা',
          },
          {
            en: 'Deleting 9 shards sequentially to conserve networking bandwidth',
            bn: 'নেটওয়ার্ক ব্যান্ডউইথ বাঁচাতে ক্রমানুসারে ৯টি শার্ড মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: { en: 'Broadcast to all shards in parallel and merge candidate lists.', bn: 'একসাথে সমস্ত শার্ডে পাঠানো এবং প্রার্থী তালিকা একত্র করা।' },
        explanation: {
          en: 'A query fanout broadcasts the request concurrently across all shards. Each shard computes its own top-K nearest neighbors, and the coordinator merges them into a global top-K list.',
          bn: 'কুয়েরি ফ্যানআউট পদ্ধতিতে সমস্ত শার্ডে সমান্তরালভাবে অনুরোধ পাঠানো হয়। প্রতি শার্ড নিজস্ব টপ-K বের করে এবং কোঅর্ডিনেটর তা মিলিয়ে চূড়ান্ত তালিকা তৈরি করে।',
        },
      },
      {
        id: 'shyq2',
        kind: 'mcq',
        topic: 'merge-size',
        question: {
          en: 'When each of 10 shards returns top-5 local candidates, how many candidate results does the coordinator node sort to produce global top-5?',
          bn: 'যখন ১০টি শার্ডের প্রতিটি শীর্ষ ৫টি লোকাল প্রার্থী ফেরত দেয়, তখন গ্লোবাল টপ-৫ নির্ধারণ করতে কোঅর্ডিনেটর নোডকে কতটি ফলাফল সাজাতে হয়?',
        },
        options: [
          {
            en: '50 candidates (10 shards × top-5 candidates sorted to find global top-5)',
            bn: '৫০টি প্রার্থী (১০টি শার্ড × শীর্ষ ৫টি প্রার্থী সাজিয়ে গ্লোবাল টপ-৫ নির্ধারণ)',
          },
          {
            en: '100,000,000 candidates total',
            bn: 'সর্বমোট ১০০,০০০,০০০ প্রার্থী',
          },
          {
            en: '5 candidates total',
            bn: 'সর্বমোট ৫টি প্রার্থী',
          },
          {
            en: 'Zero candidates — sorting is unnecessary',
            bn: 'শূন্য প্রার্থী — সাজানোর কোনো প্রয়োজন নেই',
          },
        ],
        answer: 0,
        hint: { en: 'Multiply shard count (10) by local candidate count (5).', bn: 'শার্ড সংখ্যা (১০) কে লোকাল প্রার্থীর সংখ্যা (৫) দিয়ে গুণ করুন।' },
        explanation: {
          en: '10 shards × 5 candidates = 50 candidates sent across the network. The coordinator performs a lightweight sort on these 50 items to pick the global top-5.',
          bn: '১০টি শার্ড × ৫টি প্রার্থী = সর্বমোট ৫০টি প্রার্থী নেটওয়ার্কে পাঠানো হয়। কোঅর্ডিনেটর এই ৫০টি আইটেমের মধ্যে দ্রুত সর্টিং করে গ্লোবাল টপ-৫ নির্বাচন করে।',
        },
      },
      {
        id: 'shyq3',
        kind: 'mcq',
        topic: 'replica-math',
        question: {
          en: 'In a production vector cluster configured with 3 replicas per shard, how many simultaneous server failures can a shard endure without downtime?',
          bn: 'প্রতি শার্ডে ৩টি রেপ্লিকা বিশিষ্ট প্রোডাকশন ক্লাস্টারে কোনো শার্ডে একসাথে সর্বোচ্চ কয়টি সার্ভার নষ্ট হলেও কোনো ডাউনটাইম হবে না?',
        },
        options: [
          {
            en: '2 node failures per shard — as long as 1 replica remains standing, queries continue uninterrupted',
            bn: 'শার্ড প্রতি ২টি নোড — যতক্ষণ অন্তত ১টি রেপ্লিকা চালু থাকে, কুয়েরি নির্বিঘ্নে চলতে থাকে',
          },
          {
            en: '3 node failures per shard — all nodes can crash simultaneously without impact',
            bn: 'শার্ড প্রতি ৩টি নোড — সব নোড একসাথে নষ্ট হলেও কোনো প্রভাব পড়ে না',
          },
          {
            en: 'Zero failures — replicas are passive backups that cannot serve active traffic',
            bn: 'কোনো ব্যর্থতা সহ্য করতে পারে না — রেপ্লিকা কেবল প্যাসিভ ব্যাকআপ',
          },
          {
            en: '10 node failures per shard',
            bn: 'শার্ড প্রতি ১০টি নোড',
          },
        ],
        answer: 0,
        hint: { en: '3 replicas minus 1 required active replica leaves 2 allowable failures.', bn: '৩টি রেপ্লিকা থেকে ১টি সক্রিয় রেপ্লিকা বাদ দিলে ২টি গ্রহণযোগ্য ব্যর্থতা থাকে।' },
        explanation: {
          en: 'With 3 replicas, 2 nodes can crash concurrently and the third replica will continue serving all incoming similarity queries without service disruption.',
          bn: '৩টি রেপ্লিকা থাকলে একসাথে ২টি নোড নষ্ট হলেও তৃতীয় রেপ্লিকাটি কোনো সার্ভিস বিঘ্ন ছাড়াই আগত تمام সাদৃশ্য কুয়েরির উত্তর দিতে পারে।',
        },
      },
      {
        id: 'shyq4',
        kind: 'predict',
        topic: 'fleet-recite',
        question: {
          en: 'What five benchmark metrics summarize the distributed vector cluster configuration presented in this lesson?',
          bn: 'এই পাঠে উপস্থাপিত ডিস্ট্রিবিউটেড ভেক্টর ক্লাস্টার কনফিগারেশন প্রকাশ করে এমন পাঁচটি মূল সংখ্যা কী কী?',
        },
        answer: '100M, 10 shards, 10M each, fanout 10, 30 nodes.',
        accept: ['100M', '10', '10M', 'fanout', '30', 'shard'],
        hint: { en: 'List total vectors, shard count, vectors per shard, fanout width, and total server nodes.', bn: 'মোট ভেক্টর, শার্ড সংখ্যা, প্রতি শার্ডের ভেক্টর, ফ্যানআউট সংখ্যা এবং মোট সার্ভার নোড উল্লেখ করুন।' },
        explanation: {
          en: 'The five core fleet metrics are 100,000,000 total vectors, 10 shards, 10,000,000 vectors per shard, a 10-way fanout, and 30 total server nodes across 3 replicas.',
          bn: 'ক্লাস্টার বহরের মূল পাঁচটি পরিমাপ হলো: ১০০,০০০,০০০ মোট ভেক্টর, ১০টি শার্ড, শার্ড প্রতি ১০,০০০,০০০ ভেক্টর, ১০-মুখী ফ্যানআউট এবং ৩টি রেপ্লিকা মিলিয়ে মোট ৩০টি সার্ভার নোড।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'rerank-filter',
    title: { en: 'Rerank Filter', bn: 'Rerank Filter' },
  },
};
