import type { Lesson } from '../../../lib/types';

export const QuantizationPqLesson: Lesson = {
  slug: 'quantization-pq',
  tech: 'vector-databases',
  title: {
    en: 'Quantization PQ',
    bn: 'প্রোডাক্ট কোয়ান্টাইজেশন — ৩২ গুণ মেমরি সংকোচন',
  },
  summary: {
    en: 'Product Quantization (PQ) shrinks vectors 32×: 1,536 float32 dimensions (6,144 bytes) compress into 192 sub-vector codes (192 bytes) by assigning one byte per 8-dimension chunk, allowing a 1,000,000-vector corpus to drop from 6.1 GB down to 192 MB.',
    bn: 'প্রোডাক্ট কোয়ান্টাইজেশন (PQ) ভেক্টরকে ৩২ গুণ সংকুচিত করে: ৮ ডাইমেনশনের খণ্ডে ১ বাইট বরাদ্দ করে ১,৫৩৬ ফ্লোট৩২ ডাইমেনশন (৬,১৪৪ বাইট) মাত্র ১৯২ সাব-ভেক্টর কোডে (১৯২ বাইট) সংকুচিত হয়, যা ১,০০০,০০০ ভেক্টরের ডেটাসেটকে ৬.১ জিবি থেকে মাত্র ১৯২ এমবিতে নামিয়ে আনে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Vectors on a diet', bn: 'WHAT — ভেক্টরের মেমরি সংকোচন' },
    },
    {
      type: 'para',
      text: {
        en: 'When scaling to millions or billions of high-dimensional embeddings, Product Quantization (PQ) compresses dense vectors into compact byte codes. Rather than storing 1,536 float32 dimensions (which require 6,144 bytes per vector), PQ slices each vector into 192 sub-vectors of 8 dimensions each. For each sub-vector slot, a learned codebook maps the chunk to one of 256 cluster prototypes, storing the index in a single byte. As a result, each vector shrinks to exactly 192 bytes — a 32× memory reduction that lets a 1,000,000-vector corpus drop from 6.1 GB of raw floats down to 192 MB.',
        bn: 'যখন আপনি কোটি কোটি উচ্চ-মাত্রার এম্বেডিং স্কেল করেন, তখন প্রোডাক্ট কোয়ান্টাইজেশন (PQ) ভারী ভেক্টরগুলোকে অত্যন্ত সংক্ষিপ্ত বাইট কোডে সংকুচিত করে। ১,৫৩৬ ডাইমেনশনের ফ্লোট৩২ ভেক্টর (যা ভেক্টর প্রতি ৬,১৪৪ বাইট জায়গা নেয়) সংরক্ষণের বদলে, PQ প্রতিটি ভেক্টরকে ৮ ডাইমেনশনের ১৯২টি ছোট সাব-ভেক্টরে বিভক্ত করে। প্রতিটি সাব-ভেক্টরের জন্য একটি ট্রেনিং করা কোডবুক ২৫৬টি ক্লাস্টার প্রোটোটাইপের সাথে মান মিলিয়ে মাত্র ১ বাইটে সূচক বা ইনডেক্স সংরক্ষণ করে। ফলে প্রতিটি ভেক্টর সংকুচিত হয়ে ঠিক ১৯২ বাইটে রূপ নেয় — যা ৩২ গুণ মেমরি সাশ্রয় করে ১,০০০,০০০ নথির একটি বিশালাকার ডেটাসেটকে ৬.১ জিবি থেকে মাত্র ১৯২ এমবিতে নামিয়ে আনে।',
      },
    },
    {
      type: 'diagram',
      title: { en: '6,144 bytes compressed to 192 bytes', bn: '৬,১৪৪ বাইট সংকুচিত হয়ে ১৯২ বাইট' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Product quantization shrink">
<text x="140" y="35" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">RAW FLOATS</text>
<rect x="30" y="50" width="220" height="60" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="140" y="75" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">1536 × 4B</text>
<text x="140" y="97" text-anchor="middle" font-size="16" font-weight="800" fill="currentColor">6144 B</text>
<text x="320" y="85" text-anchor="middle" font-size="28" font-weight="800" fill="currentColor">→</text>
<text x="320" y="110" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">÷32</text>
<text x="490" y="35" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">PQ CODES</text>
<rect x="380" y="50" width="220" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="490" y="75" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">192 × 1B</text>
<text x="490" y="97" text-anchor="middle" font-size="16" font-weight="800" fill="currentColor">192 B</text>
<g font-size="11" font-weight="700" fill="currentColor">
<rect x="60" y="140" width="520" height="26" rx="6" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="157" text-anchor="middle">192 chunks × 256 prototypes = 1 byte each</text>
</g>
<text x="320" y="200" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">1M vectors: 6.1 GB → 192 MB ✓ fits RAM</text>
<text x="320" y="222" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">lookup tables replace float math</text>
</svg>`,
      caption: {
        en: 'Raw floats compress into compact byte codes; gigabytes shrink into megabytes. Precomputed lookup tables replace costly floating-point distance math.',
        bn: 'কাঁচা ফ্লোট সংকুচিত হয়ে কমপ্যাক্ট বাইট কোডে পরিণত হয়; গিগাবাইট মেমরি মেগাবাইটে নেমে আসে। প্রিকম্পিউটেড লুকআপ টেবিল ভারী ফ্লোটিং-পয়েন্ট দূরত্বের হিসাবকে দ্রুততর করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Product Quantization',
          def: {
            en: 'A lossy vector compression technique that decomposes high-dimensional vectors into Cartesian sub-spaces and quantizes each with codebooks.',
            bn: 'একটি কার্যকর ভেক্টর কম্প্রেশন পদ্ধতি যা উচ্চ মাত্রার ভেক্টরকে ছোট সাব-স্পেসে ভাগ করে কোডবুকের মাধ্যমে সংকুচিত কোডে রূপান্তর করে।',
          },
        },
        {
          term: 'Sub-vector chunk',
          def: {
            en: 'A low-dimensional slice of a full vector (typically 8 dimensions) assigned to an independent quantization codebook.',
            bn: 'একটি পূর্ণাঙ্গ ভেক্টরের ক্ষুদ্র অংশ (সাধারণত ৮ ডাইমেনশন) যা একটি স্বাধীন কোডবুকের মাধ্যমে মূল্যায়িত হয়।',
          },
        },
        {
          term: 'Quantization codebook',
          def: {
            en: 'A table of 256 learned centroid prototypes per chunk position, allowing an 8-bit byte to represent each sub-vector.',
            bn: 'প্রতিটি সাব-ভেক্টরের জন্য ২৫৬টি প্রোটোটাইপ সেন্ট্রয়েডের তালিকা, যার ফলে একটি ৮-বিট বাইট দিয়ে পুরো সাব-ভেক্টর প্রকাশ করা যায়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — RAM is the ceiling', bn: 'কেন — র‍্যাম মেমরিই প্রধান সীমাবদ্ধতা' },
    },
    {
      type: 'list',
      items: [
        { en: '1,000,000 vectors × 6,144 bytes = 6.1 GB raw memory: uncompressed vectors quickly saturate server RAM.', bn: '১,০০০,০০০ ভেক্টর × ৬,১৪৪ বাইট = ৬.১ GB কাঁচা মেমরি: অসংকুচিত ভেক্টর দ্রুত সার্ভারের র‍্যাম শেষ করে দেয়।' },
        { en: '1,000,000 vectors × 192 bytes = 192 MB compressed: thirty-two times more vector data fits on a single machine.', bn: '১,০০০,০০০ ভেক্টর × ১৯২ বাইট = ১৯২ MB সংকুচিত: একটি একক মেশিনে ৩২ গুণ বেশি ভেক্টর সংরক্ষণ করা সম্ভব হয়।' },
        { en: 'Precomputed distance lookup tables answer queries faster than repetitive floating-point multiply-accumulate operations.', bn: 'পূর্বে হিসাব করা ডিসট্যান্স লুকআপ টেবিল বারবার ফ্লোটিং-পয়েন্ট গুণ ও যোগ করার চেয়ে অনেক দ্রুত উত্তর দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Shrink in 4 steps', bn: 'HOW — ৪টি ধাপে ভেক্টর সংকোচন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Split dimensions', bn: '১. ডাইমেনশন বিভাজন' }, text: { en: 'Divide 1,536 dimensions into 192 sub-vectors of 8 dimensions each.', bn: '১,৫৩৬ ডাইমেনশনকে প্রতিটিতে ৮ ডাইমেনশন বিশিষ্ট ১৯২টি সাব-ভেক্টরে ভাগ করুন।' } },
        { title: { en: '2. Train codebooks', bn: '২. কোডবুক ট্রেনিং' }, text: { en: 'Learn 256 centroid prototype vectors per sub-vector slot via k-means.', bn: 'k-means ক্লাস্টারিংয়ের মাধ্যমে প্রতি স্লটে ২৫৬টি প্রোটোটাইপ কোড নির্ধারণ করুন।' } },
        { title: { en: '3. Assign byte codes', bn: '৩. বাইট কোড বরাদ্দ' }, text: { en: 'Store 192 chunks as 1-byte indices for a total of 192 bytes per vector.', bn: '১৯২টি খণ্ডকে ১ বাইটের সূচক হিসেবে সংরক্ষণ করে ভেক্টর প্রতি ১৯২ বাইট পান।' } },
        { title: { en: '4. Compute ratio', bn: '৪. কম্প্রেশন অনুপাত' }, text: { en: 'Verify 6,144 bytes / 192 bytes = 32× smaller memory footprint.', bn: '৬,১৪৪ বাইট / ১৯২ বাইট = ৩২ গুণ ছোট মেমরির পরিমাপ নিশ্চিত করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'product_quantization_sim.py',
      code: `def pq_memory_calculation(dims, bytes_per_float, chunk_dim, corpus_vectors):
    raw_bytes = dims * bytes_per_float
    num_chunks = dims // chunk_dim
    pq_bytes = num_chunks * 1  # 1 byte indexes 256 prototypes
    ratio = raw_bytes / pq_bytes
    raw_corpus_gb = (corpus_vectors * raw_bytes) / 1e9
    pq_corpus_mb = (corpus_vectors * pq_bytes) / 1e6
    return raw_bytes, num_chunks, pq_bytes, ratio, raw_corpus_gb, pq_corpus_mb

# Standard: 1,536 dims, float32 (4 bytes), 8-dim chunks, 1,000,000 vectors
raw_b, chunks, pq_b, ratio, raw_gb, pq_mb = pq_memory_calculation(1536, 4, 8, 1000000)
print("Standard PQ (chunk_dim=8):")
print(f"Raw vector: {raw_b} bytes ({1536} x 4B)")
print(f"PQ code: {chunks} chunks x 1B = {pq_b} bytes (compression: {ratio:.0f}x)")
print(f"1M vectors corpus: raw = {raw_gb:.1f} GB -> PQ = {pq_mb:.0f} MB")

# Wide chunks: 16-dim chunks
raw_b2, chunks2, pq_b2, ratio2, _, pq_mb2 = pq_memory_calculation(1536, 4, 16, 1000000)
print(f"\\nWide PQ (chunk_dim=16):")
print(f"PQ code: {chunks2} chunks x 1B = {pq_b2} bytes (compression: {ratio2:.0f}x)")
print(f"1M vectors corpus: PQ = {pq_mb2:.0f} MB")

# Output:
# Standard PQ (chunk_dim=8):
# Raw vector: 6144 bytes (1536 x 4B)
# PQ code: 192 chunks x 1B = 192 bytes (compression: 32x)
# 1M vectors corpus: raw = 6.1 GB -> PQ = 192 MB
#
# Wide PQ (chunk_dim=16):
# PQ code: 96 chunks x 1B = 96 bytes (compression: 64x)
# 1M vectors corpus: PQ = 96 MB`,
      caption: {
        en: 'The Python simulation validates PQ arithmetic: 8-dimension chunks reduce 6,144 bytes to 192 bytes (32× reduction, 1M vectors drop from 6.1 GB to 192 MB); 16-dimension chunks yield 96 bytes (64× reduction, 96 MB).',
        bn: 'পাইথন সিমুলেশন PQ হিসাবের প্রমাণ দেয়: ৮ ডাইমেনশনের খণ্ডে ৬,১৪৪ বাইট কমে ১৯২ বাইট হয় (৩২ গুণ হ্রাস, ১M ভেক্টর ৬.১ জিবি থেকে ১৯২ এমবি হয়); ১৬ ডাইমেনশনের খণ্ডে তা ৯৬ বাইটে নেমে আসে (৬৪ গুণ হ্রাস, ৯৬ এমবি)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The diet, live', bn: 'INSIDE — জীবন্ত মেমরি সংকোচন সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive tryit simulates PQ compression: 1,536 floats shrink to 192 bytes (32× smaller), reducing 1,000,000 vectors from 6.1 GB down to 192 MB. If you widen sub-vector chunks to 16 dimensions, each vector halves again to 96 bytes (64× compression). Extremely aggressive compression further reduces memory but incurs an accuracy toll on nearest neighbor retrieval.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি PQ সংকোচন প্রক্রিয়া প্রদর্শন করে: ১,৫৩৬টি ফ্লোট ১৯২ বাইটে সংকুচিত হয় (৩২ গুণ ছোট), যা ১,০০০,০০০ ভেক্টরকে ৬.১ জিবি থেকে ১৯২ এমবিতে নামিয়ে আনে। আপনি যদি খণ্ডের আকার বাড়িয়ে ১৬ ডাইমেনশন করেন, তবে প্রতিটি ভেক্টর আরও অর্ধেক হয়ে ৯৬ বাইটে (৬৪ গুণ সংকোচন) রূপ নেয়। অতিরিক্ত সংকোচন মেমরি আরও বাঁচালেও নিকটতম প্রতিবেশী পুনরুদ্ধারে নির্ভুলতার সামান্য ঘাটতি ঘটায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'PQ lab (widen to 16, press Run)', bn: 'PQ lab (১৬-চওড়া করে Run)' },
      html: '<h3>Shrink the vectors</h3>\n<pre id="out"></pre>\n<p>Console weighs the corpus.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fdf2f8; border: 1px solid #f9a8d4; border-radius: 8px; padding: 10px; }',
      js: 'const DIMS = 1536, CH = 8; // ← try CH = 16!\nconst raw = DIMS * 4;\nconst chunks = DIMS / CH;\nconst pq = chunks * 1;\nconsole.log("raw " + raw + "B · chunks " + chunks + " · pq " + pq + "B");\nconsole.log("ratio " + (raw/pq) + "× · 1M vecs " + (1000000*pq/1e6).toFixed(0) + "MB");\ndocument.getElementById("out").textContent = raw + "B → " + pq + "B · " + (raw/pq) + "× smaller 🗜️";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Diet instincts', bn: 'ফলাফল — প্রোডাক্ট কোয়ান্টাইজেশনের মূল প্রভাব' },
    },
    {
      type: 'list',
      items: [
        { en: '192 chunks of 1 byte each produce 192-byte vectors: a 32× compression factor.', bn: 'প্রতিটি ১ বাইটের ১৯২টি খণ্ডে ১৯২ বাইটের ভেক্টর তৈরি হয়: যা ৩২ গুণ কম্প্রেশন ফ্যাক্টর এনে দেয়।' },
        { en: 'A 1,000,000-vector corpus drops from 6.1 GB down to 192 MB, fitting effortlessly in server RAM.', bn: '১,০০০,০০০ ভেক্টরের একটি ডেটাসেট ৬.১ GB থেকে ১৯২ MB-তে নেমে আসে, যা অনায়াসে সার্ভার র‍্যামে জায়গা পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Diet traps', bn: 'ডিবাগ — কোয়ান্টাইজেশনের ফাঁদ ও সতর্কতা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Starvation codes (the 64× cliff)', bn: 'মাত্রাতিরিক্ত সংকোচনের ঝুঁকি বা কোড (The 64× cliff)' },
      text: {
        en: 'Over-compressing vectors starves distance resolution: 96-byte codes blur fine boundaries between nearby neighbors. Symptoms: sharp recall cliff when pushing beyond 32× compression. Cure: adopt 8-dimension chunks as the production default to balance high compression with healthy recall.',
        bn: 'ভেক্টরকে অতিরিক্ত সংকুচিত করলে সূক্ষ্ম দূরত্বের বিভাজন নষ্ট হয়: ৯৬-বাইটের কোড নিকটবর্তী প্রতিবেশীদের মধ্যে পার্থক্য অস্পষ্ট করে তোলে। লক্ষণ: ৩২ গুণের বেশি সংকোচনে রিকলে মারাত্মক ধস নামা। সমাধান: প্রোডাকশন ডেফল্ট হিসেবে ৮-ডাইমেনশনের খণ্ড ব্যবহার করুন যা মেমরি এবং রিকলের মধ্যে আদর্শ ভারসাম্য বজায় রাখে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Codebook training (the prototype gym)', bn: 'কোডবুক ট্রেনিংয়ের আদর্শ নিয়ম (The prototype gym)' },
      text: {
        en: 'Codebooks are trained on sample embeddings: non-representative samples skew centroid prototypes and distort query distances. Symptoms: skewed distance rankings and inactive prototypes. Cure: train codebooks on 100,000+ representative production vectors to ensure robust centroid coverage.',
        bn: 'কোডবুক মূলত নমুনা ভেক্টরের ওপর প্রশিক্ষণ নিয়ে তৈরি হয়: অনুপযুক্ত বা একপেশে নমুনা সেন্ট্রয়েড প্রোটোটাইপগুলোকে বিকৃত করে দেয়। লক্ষণ: দূরত্বের ভুল হিসাব এবং অকার্যকর প্রোটোটাইপ। সমাধান: শক্তিশালী সেন্ট্রয়েড কভারেজ নিশ্চিত করতে কমপক্ষে ১০০,০০০+ বাস্তব প্রোডাকশন ভেক্টরের ওপর কোডবুক ট্রেন করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — উৎপাদন সিস্টেমে প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'FAISS IndexIVFPQ: combines inverted list routing with product quantization to search billions of vectors on a single workstation.', bn: 'FAISS IndexIVFPQ: একটি মাত্র ওয়ার্কস্টেশনে কোটি কোটি ভেক্টর সার্চ করতে ইনভার্টেড লিস্ট এবং প্রোডাক্ট কোয়ান্টাইজেশনকে একত্রিত করে।' },
        { en: 'DiskANN disk-backed indexes: leverages PQ codes in RAM to navigate compressed vectors while fetching unquantized vectors from NVMe SSDs.', bn: 'DiskANN স্টোরেজ ইনডেক্স: মেমরিতে সংকুচিত PQ কোড ব্যবহার করে দ্রুত সার্চ করে এবং কেবল চূড়ান্ত ফলাফলটি NVMe SSD থেকে কাঁচা ভেক্টরে রি-স্কোর করে।' },
        { en: 'On-device mobile intelligence: 192-byte vectors allow rich semantic search caches to run entirely within smartphone memory limits.', bn: 'স্মার্টফোনে লোকাল এআই: ১৯২ বাইটের সংক্ষিপ্ত ভেক্টর স্মার্টফোনের সীমিত মেমরির মধ্যেই সম্পূর্ণ লোকাল সেমান্টিক সার্চ চালাতে সক্ষম।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Sharding Scale', bn: 'পরবর্তী পাঠ — শার্ডিং ও স্কেলিং' },
    },
    {
      type: 'para',
      text: {
        en: 'Now that single-node vectors are efficiently compressed, Lesson 6 scales horizontally across distributed hardware: partitioning 100,000,000 vectors across 10 shards with 10,000,000 vectors each.',
        bn: 'একক মেশিনের ভেক্টর মেমরি দক্ষতার সাথে সংকুচিত করার পর, পাঠ ৬ একাধিক মেশিনের ডিস্ট্রিবিউটেড ক্লাস্টারে স্কেলিং নিয়ে আলোচনা করবে: যেখানে ১০০,০০০,০০০ ভেক্টরকে ১০টি শার্ডে (প্রতিটিতে ১০,০০০,০০০ ভেক্টর) ভাগ করে সমান্তরালভাবে অনুসন্ধান চালানো হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'pqx-ex-1',
      kind: 'mcq',
      topic: 'raw-size',
      question: {
        en: 'For a vector with 1,536 float32 dimensions where each float occupies 4 bytes, what is the raw uncompressed memory size?',
        bn: '১,৫৩৬ ফ্লোট৩২ ডাইমেনশনের একটি ভেক্টরে প্রতিটি ফ্লোট ৪ বাইট নিলে এর মোট কাঁচা মেমরি আকার কত?',
      },
      options: [
        { en: '6,144 bytes (1,536 × 4 bytes)', bn: '৬,১৪৪ বাইট (১,৫৩৬ × ৪ বাইট)' },
        { en: '1,536 bytes', bn: '১,৫৩৬ বাইট' },
        { en: '192 bytes', bn: '১৯২ বাইট' },
        { en: '256 bytes', bn: '২৫৬ বাইট' },
      ],
      answer: 0,
      hint: { en: 'Multiply 1,536 dimensions by 4 bytes per floating-point number.', bn: '১,৫৩৬ ডাইমেনশনকে ফ্লোটিং-পয়েন্ট প্রতি ৪ বাইট দিয়ে গুণ করুন।' },
      explanation: {
        en: '1,536 dimensions × 4 bytes per float32 = 6,144 bytes per vector. Raw uncompressed embeddings are memory-intensive.',
        bn: '১,৫৩৬ ডাইমেনশন × ফ্লোট৩২ প্রতি ৪ বাইট = ভেক্টর প্রতি ৬,১৪৪ বাইট। অসংকুচিত এম্বেডিং প্রচুর মেমরি ব্যবহার করে।',
      },
    },
    {
      id: 'pqx-ex-2',
      kind: 'mcq',
      topic: 'pq-size',
      question: {
        en: 'When compressing 1,536 dimensions into 192 chunks of 1 byte each, what is the resulting vector size and compression ratio?',
        bn: '১,৫৩৬ ডাইমেনশনের ভেক্টরকে প্রতিটিতে ১ বাইট বিশিষ্ট ১৯২টি খণ্ডে সংকুচিত করলে এর চূড়ান্ত আকার এবং কম্প্রেশন অনুপাত কত হয়?',
      },
      options: [
        { en: '192 bytes — achieving a 32× compression factor', bn: '১৯২ বাইট — ৩২ গুণ কম্প্রেশন অনুপাত অর্জন' },
        { en: '192 bytes — achieving a 2× compression factor', bn: '১৯২ বাইট — ২ গুণ কম্প্রেশন অনুপাত অর্জন' },
        { en: '6,144 bytes — remaining unchanged', bn: '৬,১৪৪ বাইট — সম্পূর্ণ অপরিবর্তিত থাকে' },
        { en: '96 bytes — achieving a 64× compression factor', bn: '৯৬ বাইট — ৬৪ গুণ কম্প্রেশন অনুপাত অর্জন' },
      ],
      answer: 0,
      hint: { en: 'Divide the raw size (6,144 bytes) by the compressed size (192 bytes).', bn: 'কাঁচা আকার (৬,১৪৪ বাইট) কে সংকুচিত আকার (১৯২ বাইট) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '192 chunks × 1 byte = 192 bytes. 6,144 raw bytes / 192 compressed bytes = 32× compression ratio.',
        bn: '১৯২টি খণ্ড × ১ বাইট = ১৯২ বাইট। ৬,১৪৪ কাঁচা বাইট / ১৯২ সংকুচিত বাইট = ৩২ গুণ কম্প্রেশন অনুপাত।',
      },
    },
    {
      id: 'pqx-ex-3',
      kind: 'mcq',
      topic: 'wide-chunk',
      question: {
        en: 'If chunk width is widened from 8 to 16 dimensions across 1,536 dimensions, what are the resulting byte size and compression ratio?',
        bn: 'যদি ১,৫৩৬ ডাইমেনশন জুড়ে খণ্ডের আকার ৮ থেকে বাড়িয়ে ১৬ ডাইমেনশন করা হয়, তবে চূড়ান্ত বাইট আকার এবং কম্প্রেশন অনুপাত কত দাঁড়ায়?',
      },
      options: [
        { en: '96 bytes — achieving a 64× compression factor with higher recall loss', bn: '৯৬ বাইট — বেশি রিকল হারানোর বিনিময়ে ৬৪ গুণ কম্প্রেশন' },
        { en: '192 bytes — remaining unchanged', bn: '১৯২ বাইট — সম্পূর্ণ অপরিবর্তিত থাকে' },
        { en: '384 bytes — achieving a 16× compression factor', bn: '৩৮৪ বাইট — ১৬ গুণ কম্প্রেশন অর্জন' },
        { en: '6,144 bytes — raw uncompressed size', bn: '৬,১৪৪ বাইট — কাঁচা অসংকুচিত আকার' },
      ],
      answer: 0,
      hint: { en: 'Divide 1,536 dimensions by 16 dimensions per chunk.', bn: '১,৫৩৬ ডাইমেনশনকে খণ্ড প্রতি ১৬ ডাইমেনশন দিয়ে ভাগ করুন।' },
      explanation: {
        en: '1,536 / 16 = 96 chunks = 96 bytes. 6,144 / 96 = 64× compression. Aggressive compression saves more memory but degrades neighbor resolution.',
        bn: '১,৫৩৬ / ১৬ = ৯৬টি খণ্ড = ৯৬ বাইট। ৬,১৪৪ / ৯৬ = ৬৪ গুণ কম্প্রেশন। অতিরিক্ত সংকোচন বেশি মেমরি বাঁচালেও প্রতিবেশীদের মধ্যকার সূক্ষ্ম পার্থক্য নষ্ট করে।',
      },
    },
    {
      id: 'pqx-ex-4',
      kind: 'predict',
      topic: 'corpus-fit',
      question: {
        en: 'When scaling to 1,000,000 vectors, compare the total RAM required for raw float32 embeddings versus product-quantized embeddings.',
        bn: '১,০০০,০০০ ভেক্টরে স্কেল করার ক্ষেত্রে কাঁচা ফ্লোট৩২ বনাম প্রোডাক্ট-কোয়ান্টাইজড এম্বেডিংয়ের জন্য প্রয়োজনীয় র‍্যামের তুলনা করুন।',
      },
      answer: '6.1GB raw vs 192MB PQ: PQ fits RAM, raw needs servers.',
      accept: ['6.1', '192', 'GB', 'MB', 'RAM', 'fits', 'server'],
      hint: { en: 'Multiply 1,000,000 by 6,144 bytes and by 192 bytes.', bn: '১,০০০,০০০ কে ৬,১৪৪ বাইট এবং ১৯২ বাইট দিয়ে গুণ করুন।' },
      explanation: {
        en: '1,000,000 vectors require 6.1 GB as raw float32 vectors, but only 192 MB when product-quantized. PQ allows huge datasets to fit comfortably in single-machine RAM.',
        bn: '১,০০০,০০০ ভেক্টরে কাঁচা ফ্লোট৩২ এর জন্য ৬.১ GB র‍্যাম লাগে, কিন্তু প্রোডাক্ট কোয়ান্টাইজেশনে মাত্র ১৯২ MB লাগে। ফলে একটি মেশিনের র‍্যামেই কোটি ডেটা রাখা যায়।',
      },
    },
  ],
  quiz: {
    id: 'quantization-pq-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'pqxq1',
        kind: 'mcq',
        topic: 'pq-mean',
        question: {
          en: 'What fundamental mechanism enables Product Quantization (PQ) to achieve 32× vector compression?',
          bn: 'কোন মূল কৌশলের মাধ্যমে প্রোডাক্ট কোয়ান্টাইজেশন (PQ) ভেক্টরে ৩২ গুণ মেমরি সংকোচন অর্জন করে?',
        },
        options: [
          {
            en: 'Splitting high-dimensional vectors into Cartesian sub-vectors and encoding each chunk into a 1-byte prototype code',
            bn: 'উচ্চ মাত্রার ভেক্টরকে ছোট সাব-ভেক্টরে ভাগ করে প্রতিটি খণ্ডকে ১ বাইটের প্রোটোটাইপ কোডে রূপান্তর করার মাধ্যমে',
          },
          {
            en: 'Permanently discarding half of the vector dimensions across the entire database',
            bn: 'পুরো ডেটাবেজ জুড়ে ভেক্টরের অর্ধেক ডাইমেনশন স্থায়ীভাবে বাদ দিয়ে',
          },
          {
            en: 'Increasing floating-point representation from 32-bit floats to 64-bit doubles',
            bn: 'ফ্লোটিং-পয়েন্ট মানগুলোকে ৩২-বিট থেকে বাড়িয়ে ৬৪-বিট ডাবলে রূপান্তর করে',
          },
          {
            en: 'Sorting document identifiers alphabetically to eliminate duplicate vectors',
            bn: 'ডকুমেন্ট আইডিগুলোকে বর্ণানুক্রমে সাজিয়ে ডুপ্লিকেট ভেক্টর দূর করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: { en: 'Vector decomposition into independent quantized sub-spaces.', bn: 'ভেক্টরকে স্বাধীন কোয়ান্টাইজড সাব-স্পেসে বিভক্ত করা।' },
        explanation: {
          en: 'PQ divides vectors into 192 chunks and replaces each 8-dimension floating-point chunk with a single 1-byte cluster centroid index, reducing total size thirty-twofold.',
          bn: 'PQ ভেক্টরকে ১৯২টি খণ্ডে ভাগ করে এবং প্রতি ৮-ডাইমেনশন ফ্লোট খণ্ডকে ১ বাইটের সেন্ট্রয়েড ইনডেক্সে রূপান্তর করে ৩২ গুণ মেমরি সংকোচন নিশ্চিত করে।',
        },
      },
      {
        id: 'pqxq2',
        kind: 'mcq',
        topic: 'codebook-size',
        question: {
          en: 'Why does each sub-vector codebook typically maintain exactly 256 learned cluster prototypes?',
          bn: 'কেন প্রতিটি সাব-ভেক্টর কোডবুকে সাধারণত ঠিক ২৫৬টি প্রোটোটাইপ সেন্ট্রয়েড রাখা হয়?',
        },
        options: [
          {
            en: 'Because an 8-bit byte can address exactly 2^8 = 256 distinct prototype states without memory waste',
            bn: 'কারণ একটি ৮-বিট বাইট কোনো অপচয় ছাড়াই ঠিক ২^৮ = ২৫৬টি আলাদা প্রোটোটাইপ স্টেটকে নির্দেশ করতে পারে',
          },
          {
            en: 'Because high-dimensional embedding models only output 256 distinct values',
            bn: 'কারণ উচ্চ মাত্রার এম্বেডিং মডেলগুলো কেবল ২৫৬টি আলাদা মান তৈরি করতে পারে',
          },
          {
            en: 'Because modern CPUs can only perform 256 matrix multiplications simultaneously',
            bn: 'কারণ আধুনিক সিপিইউ একসাথে মাত্র ২৫৬টি ম্যাট্রিক্স গুণ সম্পন্ন করতে পারে',
          },
          {
            en: 'Because database primary keys require a minimum of 256 integer slots',
            bn: 'কারণ ডেটাবেজের প্রাইমারি কি-তে কমপক্ষে ২৫৬টি পূর্ণসংখ্যার স্লট থাকতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'One byte holds 8 bits: 2^8 = 256.', bn: 'এক বাইটে ৮ বিট থাকে: ২^৮ = ২৫৬।' },
        explanation: {
          en: '256 prototypes align perfectly with an 8-bit unsigned integer (uint8). This maximizes codebook resolution within a single byte of storage.',
          bn: '২৫৬টি প্রোটোটাইপ একটি ৮-বিট ইন্টিজারের (uint8) সাথে নিখুঁতভাবে মেলে। ফলে ১ বাইটের মধ্যে সর্বোচ্চ মানের কোডবুক রেজোলিউশন নিশ্চিত হয়।',
        },
      },
      {
        id: 'pqxq3',
        kind: 'mcq',
        topic: 'lookup-win',
        question: {
          en: 'Why do distance calculations between a query vector and product-quantized vectors execute so rapidly?',
          bn: 'একটি কুয়েরি ভেক্টর এবং প্রোডাক্ট-কোয়ান্টাইজড ভেক্টরের মধ্যকার দূরত্বের হিসাব কেন এত দ্রুত সম্পন্ন হয়?',
        },
        options: [
          {
            en: 'Precomputed distance lookup tables allow simple memory indexing to replace expensive floating-point arithmetic',
            bn: 'পূর্বে তৈরি ডিসট্যান্স লুকআপ টেবিলের মাধ্যমে সাধারণ মেমরি ইনডেক্সিং করে ভারী ফ্লোটিং-পয়েন্ট গণিত এড়ানো যায়',
          },
          {
            en: 'The database skips distance calculations completely and returns random candidates',
            bn: 'ডেটাবেজ দূরত্বের হিসাব পুরোপুরি বাদ দিয়ে যেকোনো প্রার্থী ভেক্টর ফেরত দেয়',
          },
          {
            en: 'Quantized vectors automatically execute their own distance calculations without CPU cycles',
            bn: 'কোয়ান্টাইজড ভেক্টরগুলো সিপিইউর ব্যবহার ছাড়াই নিজে থেকেই দূরত্ব হিসাব করে নেয়',
          },
          {
            en: 'Asymmetric distance lookups are fundamentally slower than full floating-point scans',
            bn: 'অ্যাসিমেট্রিক ডিসট্যান্স লুকআপ পূর্ণাঙ্গ ফ্লোটিং-পয়েন্ট স্ক্যানের চেয়েও ধীরগতির হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Precomputed tables turn multiplications into table lookups.', bn: 'প্রিকম্পিউটেড টেবিল গুণকে সাধারণ লুকআপে রূপান্তর করে।' },
        explanation: {
          en: 'Asymmetric Distance Computation (ADC) precomputes distances from the unquantized query to all 256 prototypes per chunk. Query evaluation becomes fast table lookups and additions.',
          bn: 'অ্যাসিমেট্রিক ডিসট্যান্স কম্প্যুটেশন (ADC) পদ্ধতিতে কুয়েরির সাথে ২৫৬টি প্রোটোটাইপের দূরত্ব আগেই হিসাব করে রাখা হয়, ফলে অনুসন্ধানে কেবল টেবিল থেকে মান যোগ করা হয়।',
        },
      },
      {
        id: 'pqxq4',
        kind: 'predict',
        topic: 'diet-recite',
        question: {
          en: 'What five core metrics summarize the standard Product Quantization pipeline described in this lesson?',
          bn: 'এই পাঠে বর্ণিত স্ট্যান্ডার্ড প্রোডাক্ট কোয়ান্টাইজেশন পাইপলাইনের মূল পাঁচটি সংখ্যা কী কী?',
        },
        answer: '1536 dims, 192 chunks, 192B, 32×, 1M = 192MB.',
        accept: ['1536', '192', '32', '1M', 'MB', 'chunks'],
        hint: { en: 'List dimensions, chunks, compressed bytes, compression factor, and 1M corpus size.', bn: 'ডাইমেনশন, খণ্ড সংখ্যা, সংকুচিত বাইট, কম্প্রেশন ফ্যাক্টর এবং ১M ডেটাসেটের আকার উল্লেখ করুন।' },
        explanation: {
          en: 'The five core metrics are 1,536 dimensions, 192 chunks of 8 dimensions, 192 bytes per vector, a 32× compression factor, and 1,000,000 vectors occupying 192 MB.',
          bn: 'মূল পাঁচটি পরিমাপ হলো: ১,৫৩৬ ডাইমেনশন, ১৯২টি খণ্ড, ভেক্টর প্রতি ১৯২ বাইট, ৩২ গুণ কম্প্রেশন ফ্যাক্টর এবং ১,০০০,০০০ ভেক্টরে মাত্র ১৯২ MB মেমরি।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'sharding-scale',
    title: { en: 'Sharding Scale', bn: 'Sharding Scale' },
  },
};
