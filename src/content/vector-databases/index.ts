import type { Hub } from '../../lib/types';
import { MeetVectorDbsLesson } from './lessons/meet-vector-dbs';
import { AnnSearchLesson } from './lessons/ann-search';
import { IvfIndexLesson } from './lessons/ivf-index';
import { HnswGraphsLesson } from './lessons/hnsw-graphs';
import { QuantizationPqLesson } from './lessons/quantization-pq';
import { ShardingScaleLesson } from './lessons/sharding-scale';
import { RerankFilterLesson } from './lessons/rerank-filter';
import { VdbCapstoneLesson } from './lessons/vdb-capstone';

export const vectorDatabasesHub: Hub = {
  slug: 'vector-databases',
  name: 'Vector Databases',
  icon: '📐',
  tagline: {
    en: 'Search by similarity at billions-scale: crisis, trades, buckets, graphs, diets, fleets, funnels — one serving path, end to end.',
    bn: 'Billion-scale সাদৃশ্য-খোঁজা: সঙ্কট, বাণিজ্য, বালতি, graph, ডায়েট, বহর, ফানেল — এক পরিবেশন-path, শুরু-শেষ।',
  },
  intro: {
    en: 'LESSON 1 counts the crisis: 1000×128 = 128K ops, 1M docs = 128M. LESSON 2 trades exactness: 100 visits, 0.98 recall, 10× speed. LESSON 3 buckets with IVF: 10 buckets, probe 2, scan 200, skip 800. LESSON 4 walks HNSW: 3 layers, 4 hops, 6 visited. LESSON 5 diets with PQ: 6144B → 192B, 32× smaller. LESSON 6 floats fleets: 100M over 10 shards, 30 nodes. LESSON 7 pours funnels: 1000 → 50 (5%) → top-5. LESSON 8 ships the database — 5/5 clear → SHIP. Graduate with 8 owned skills and keys to hub #118+.',
    bn: 'পাঠ ১ সঙ্কট-গোনে: ১০০০×১২৮ = ১২৮K op, ১M নথি = ১২৮M। পাঠ ২ নির্ভুলতা-বাণিজ্য: ১০০-ঘোরা, ০.৯৮ recall, ১০× গতি। পাঠ ৩ IVF-বালতি: ১০ বালতি, probe ২, ২০০-scan, ৮০০-এড়ান। পাঠ ৪ HNSW-হাঁটে: ৩ স্তর, ৪-hop, ৬-ঘোরা। পাঠ ৫ PQ-ডায়েট: ৬১৪৪B → ১৯২B, ৩২× ছোট। পাঠ ৬ বহর-ভাসায়: ১০-shard ১০০M, ৩০-node। পাঠ ৭ ফানেল-ঢালে: ১০০০ → ৫০ (৫%) → top-৫। পাঠ ৮ database-চালায় — ৫/৫ পার → চালান। ৮ অর্জিত দক্ষতা আর hub #১১৮+ চাবি নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Crisis and trades (L1–L2)', bn: 'ধাপ ১ — সঙ্কট আর বাণিজ্য (পাঠ ১–২)' },
      items: [
        { en: 'Meet Vector DBs: 128K brute, 25.6K indexed', bn: 'Meet Vector DB: ১২৮K brute, ২৫.৬K সূচি' },
        { en: 'ANN: 0.98 recall at 10× speed', bn: 'ANN: ১০× গতি-০.৯৮ recall' },
        { en: 'Exit ticket: count any crisis, dial any trade', bn: 'বিদায়-টিকিট: যেকোনো-সঙ্কট গুনুন, যেকোনো-বাণিজ্য dial' },
      ],
    },
    {
      title: { en: 'Stage 2 — Buckets and graphs (L3–L4)', bn: 'ধাপ ২ — বালতি আর graph (পাঠ ৩–৪)' },
      items: [
        { en: 'IVF: probe 2, scan 200, skip 800', bn: 'IVF: probe ২, ২০০-scan, ৮০০-এড়ান' },
        { en: 'HNSW: 3 layers, 4 hops, 6 visited', bn: 'HNSW: ৩ স্তর, ৪-hop, ৬-ঘোরা' },
        { en: 'Exit ticket: bucket any corpus, walk any graph', bn: 'বিদায়-টিকিট: যেকোনো-corpus বালতি, যেকোনো-graph হাঁটুন' },
      ],
    },
    {
      title: { en: 'Stage 3 — Diets and fleets (L5–L6)', bn: 'ধাপ ৩ — ডায়েট আর বহর (পাঠ ৫–৬)' },
      items: [
        { en: 'PQ: 6144B → 192B, 32× smaller', bn: 'PQ: ৬১৪৪B → ১৯২B, ৩২× ছোট' },
        { en: 'Sharding: 10M per shard, 30 nodes', bn: 'Sharding: shard-প্রতি ১০M, ৩০-node' },
        { en: 'Exit ticket: shrink any vector, float any fleet', bn: 'বিদায়-টিকিট: যেকোনো-vector সঙ্কুচিত, যেকোনো-বহর ভাসান' },
      ],
    },
    {
      title: { en: 'Stage 4 — Funnels and shipping (L7–L8)', bn: 'ধাপ ৪ — ফানেল আর চালান (পাঠ ৭–৮)' },
      items: [
        { en: 'Rerank: 1000 → 50 → top-5', bn: 'Rerank: ১০০০ → ৫০ → top-৫' },
        { en: 'Capstone: 6-stage path, 5/5, SHIP verdict', bn: 'Capstone: ৬-ধাপ path, ৫/৫, চালান-রায়' },
        { en: 'Exit ticket: walk the whole path per query, forever', bn: 'বিদায়-টিকিট: query-প্রতি পুরো-path হাঁটুন, চিরতরে' },
      ],
    },
  ],
  lessons: [
    MeetVectorDbsLesson,
    AnnSearchLesson,
    IvfIndexLesson,
    HnswGraphsLesson,
    QuantizationPqLesson,
    ShardingScaleLesson,
    RerankFilterLesson,
    VdbCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The recall laboratory', bn: 'প্রজেক্ট ১ — Recall গবেষণাগার' },
      brief: {
        en: 'Index 10K vectors three ways (IVF probe 2/5, HNSW): measure recall@10 vs latency on 50 golden queries and plot the trade curve. Deliverable: the running bench page + a one-page report naming which index wins your data and at which dial.',
        bn: '১০K vector-তিনভাবে সূচি করুন (IVF probe ২/৫, HNSW): ৫০-golden query recall@10 বনাম latency মাপুন, বাণিজ্য-curve plot। ডেলিভারেবল: চলন্ত-bench পেজ + কোন-সূচি জেতে কোন-dial — এক পেজ।',
      },
    },
    {
      title: { en: 'Project 2 — The billion-diet fleet', bn: 'প্রজেক্ট ২ — Billion-ডায়েট বহর' },
      brief: {
        en: 'Design a 1B-vector store: PQ bytes, shard count, replicas, and the per-query op budget — prove it fits 10 machines and answers under 100ms. Deliverable: the capacity page + a short report with every number derived, not guessed.',
        bn: '১B-vector ভাণ্ডার-নকশা করুন: PQ byte, shard-গণনা, replica, query-প্রতি op বাজেট — ১০-মেশিন ধরে ১০০ms-নিচে উত্তর প্রমাণ করুন। ডেলিভারেবল: capacity পেজ + প্রতি-সংখ্যা উদ্ভূত-ছোট report, অনুমান নয়।',
      },
    },
  ],
  bestPractices: [
    { en: 'Count docs × dims before choosing brute or index.', bn: 'Brute-সূচি আগে-নথি × dim গুনুন।' },
    { en: 'Budget recall 0.95–0.98; golden every deploy.', bn: 'Recall ০.৯৫–০.৯৮ বাজেট; প্রতি deploy-golden।' },
    { en: 'Probe 2–5; nlist ≈ √(N).', bn: 'Probe ২–৫; nlist ≈ √(N)।' },
    { en: 'PQ 8-dim chunks; hash-shard the fleet.', bn: 'PQ ৮-dim খণ্ড; বহর-hash-shard।' },
    { en: 'Funnel always: filter 5%, rerank top-5.', bn: 'সবসময়-ফানেল: ৫% filter, top-৫ rerank।' },
  ],
  interview: [
    {
      q: { en: 'p99 tripled after doubling the corpus. Diagnose in order.', bn: 'Corpus-দ্বিগুণ p৯৯ তিনগুণ। ক্রমে রোগ বলুন।' },
      a: { en: 'Order: probe width (nprobe fixed scans doubled buckets), then hot shards (range skew surfaced), then rerank funnel (filter loosened) — widen dials, hash placement, narrow funnels.', bn: 'ক্রম: probe-প্রস্থ (nprobe-স্থির দ্বিগুণ-বালতি scan), তারপর গরম-shard (range skew-প্রকাশ), তারপর rerank ফানেল (filter-ঢিলা) — dial-চওড়া, hash-বসানো, ফানেল-সরু।' },
    },
    {
      q: { en: 'Recall fell from 0.98 to 0.91 overnight. Where first?', bn: 'Recall-০.৯৮ ০.৯১ রাতারাতি পড়লো। আগে কোথায়?' },
      a: { en: 'Visit dial starved: check nprobe/ef_search for a config push, then codebook drift (PQ retrain skipped), then boundary skew (new cluster) — dials first, diets second, data third.', bn: 'ঘোরা-dial অনাহার: config-push nprobe/ef_search দেখুন, তারপর codebook drift (PQ retrain-এড়ানো), তারপর সীমানা-skew (নতুন-গুচ্ছ) — আগে-dial, পরে-ডায়েট, তারপর-data।' },
    },
    {
      q: { en: 'Index exceeds RAM but vectors fit. Why?', bn: 'সূচি-RAM ছাড়ায় কিন্তু vector-ধরে। কেন?' },
      a: { en: 'Link bill: HNSW M×layers overhead or unquantized centroids — measure links per vector, then PQ the store, then shard the rest. Graphs charge rent.', bn: 'Link-বিল: HNSW M×স্তর খরচ বা অ-quantize centroid — vector-প্রতি link মাপুন, তারপর ভাণ্ডার-PQ, তারপর বাকি-shard। Graph-ভাড়া নেয়।' },
    },
    {
      q: {
        en: 'When should an engineering team choose HNSW over IVF-PQ for production similarity search?',
        bn: 'প্রোডাকশন সাদৃশ্য সার্চের জন্য কখন একটি ইঞ্জিনিয়ারিং টিমের IVF-PQ এর বদলে HNSW বেছে নেওয়া উচিত?',
      },
      a: {
        en: 'Choose HNSW when query latency must stay below 10ms with high recall (≥0.98) and your memory budget can afford graph link overhead. Choose IVF-PQ when RAM is constrained and you must scale to tens of millions of vectors per node by trading slight recall for an 8× to 32× memory reduction.',
        bn: 'যখন কুয়েরি ল্যাটেন্সি ১০ মিলিমিটারের নিচে এবং উচ্চ রিকল (≥০.৯৮) নিশ্চিত করতে হয় এবং মেমরিতে গ্রাফের অতিরিক্ত খরচ বহনের সামর্থ্য থাকে, তখন HNSW বেছে নিন। আর যখন র‍্যাম সীমিত এবং মেমরি ৮ থেকে ৩২ গুণ কমিয়ে কোটি কোটি ভেক্টর রাখতে হয়, তখন IVF-PQ বেছে নেওয়া উচিত।',
      },
    },
  ],
  realWorld: [
    { en: 'Hosted VDBs: billions served in milliseconds.', bn: 'Hosted VDB: মিলিসেকেন্ড-billion পরিবেশন।' },
    { en: 'RAG stacks: funnels feed every prompt.', bn: 'RAG stack: ফানেল-প্রতি prompt খাওয়ায়।' },
    { en: 'Marketplaces: IVF + rerank rank millions.', bn: 'Marketplace: IVF + rerank-লক্ষ rank।' },
  ],
};