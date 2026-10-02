import type { Lesson } from '../../../lib/types';

export const ServingDeployLesson: Lesson = {
  slug: 'serving-deploy',
  tech: 'llms',
  title: {
    en: 'Serving and Deploy',
    bn: 'ওজন থেকে wallet: KV cache, continuous batching, quantization গাণিতিক'
  },
  summary: {
    en: 'From weights to wallets: KV cache, continuous batching, quantization math (7B: 14.0 → 7.0 → 3.5 GB), and the latency/throughput frontier. You will map the serving stack, fit a model to a GPU live, and learn why inference is the real business.',
    bn: 'ওজন থেকে wallet: KV cache, continuous batching, quantization গাণিতিক (৭B: ১৪.০ → ৭.০ → ৩.৫ GB), latency/throughput frontier। Serving stack-ম্যাপ করবেন, GPU-মডেল live-খাপাবেন, inference-আসল ব্যবসা কেন শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The serving stack', bn: 'WHAT — সার্ভিং স্ট্যাক (Serving stack)' },
    },
    {
      type: 'para',
      text: {
        en: 'Deploying large language models for production inference requires balancing latency, throughput, and hardware constraints. During execution, the prefill phase processes the initial prompt in parallel, while the autoregressive decode phase generates output tokens sequentially. Continuous batching dynamically groups requests across users, dramatically multiplying server throughput without degrading responsiveness. Weight quantization reduces precision from 16-bit floating point down to 8-bit or 4-bit integers. As a result, a 7-billion parameter model drops in size from 14.0 GB down to 7.0 GB and 3.5 GB, cutting server hardware requirements in half.',
        bn: 'প্রোডাকশনে লার্জ ল্যাঙ্গুয়েজ মডেল ডিপ্লয় করার জন্য ল্যাটেন্সি, থ্রুপুট এবং হার্ডওয়্যার মেমোরির মধ্যে নিখুঁত ভারসাম্য প্রয়োজন। ইনফারেন্সের শুরুতে প্রিফিল (prefill) ধাপে পুরো প্রম্পটটি সমান্তরালভাবে প্রসেস করা হয়, আর ডিকোড (decode) ধাপে ক্রমানুসারে একটি একটি করে টোকেন তৈরি হয়। কন্টিনিউয়াস ব্যাচিং একাধিক ব্যবহারকারীর অনুরোধকে একসাথে প্যাক করে সার্ভারের থ্রুপুট বহুগুণ বৃদ্ধি করে। কোয়ান্টাইজেশন প্রক্রিয়ায় ১৬-বিট ফ্লোটিং পয়েন্টকে ৮-বিট বা ৪-বিট ইন্টিজারে রূপান্তর করে মেমোরি খরচ কমানো হয়। ফলে একটি ৭ বিলিয়ন প্যারামিটারের মডেলের আকার ১৪.০ জিবি থেকে কমে ৭.০ জিবি এবং ৩.৫ জিবিতে নেমে আসে, যা জিপিইউর খরচ অর্ধেকে নামিয়ে আনে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Shrink to fit — one model, three footprints', bn: 'খাপে-সঙ্কোচন — এক মডেল, তিন-পদচিহ্ন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Three VRAM bars for fp16 int8 int4 against a 16GB card">
<text x="320" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">7B weights vs a 16 GB card</text>
<g font-size="11" font-weight="700" fill="currentColor">
<text x="60" y="70">fp16</text>
<rect x="110" y="52" width="350" height="26" rx="4" fill="#ef4444" opacity="0.7"/>
<text x="470" y="70">14.0 GB ⚠️ tight</text>
<text x="60" y="110">int8</text>
<rect x="110" y="92" width="175" height="26" rx="4" fill="#f59e0b" opacity="0.7"/>
<text x="295" y="110">7.0 GB ✓</text>
<text x="60" y="150">int4</text>
<rect x="110" y="132" width="88" height="26" rx="4" fill="#16a34a" opacity="0.7"/>
<text x="208" y="150">3.5 GB ✓✓</text>
</g>
<path d="M510,40 L510,170" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<text x="530" y="105" font-size="11" font-weight="700" fill="currentColor">16 GB</text>
<text x="530" y="120" font-size="11" fill="currentColor">card wall</text>
<text x="320" y="200" text-anchor="middle" font-size="12" fill="currentColor">prefill: prompt at once ⚡ · decode: token-by-token 🐢 · batching packs decodes 📦</text>
<text x="320" y="222" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Quantization moves the wall: same card, bigger tenants.</text>
</svg>`,
      caption: {
        en: 'fp16 kisses the wall; int4 leaves room for cache and company. Bytes are rent.',
        bn: 'fp16 দেয়াল-চুমে; int4 cache-সঙ্গী জায়গা-রাখে। Byte-ভাড়া।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'vram_quantization_calc.py',
      code: `def calculate_vram(params_billions, bytes_per_param):
    # Weight memory in Gigabytes = (parameters * bytes) / 10^9
    return (params_billions * 1e9 * bytes_per_param) / 1e9

formats = [
    ("fp16", 2.0),
    ("int8", 1.0),
    ("int4", 0.5)
]

print("Model weight footprint for 7B model across precision levels:")
for name, b in formats:
    vram = calculate_vram(7, b)
    fits_16gb = "Fits 16GB GPU" if vram < 16 else "Exceeds 16GB"
    print(f"7B {name:>4}: {vram:>4.1f} GB ({fits_16gb})")

# Output:
# Model weight footprint for 7B model across precision levels:
# 7B fp16: 14.0 GB (Fits 16GB GPU)
# 7B int8:  7.0 GB (Fits 16GB GPU)
# 7B int4:  3.5 GB (Fits 16GB GPU)

vram_70b_fp16 = calculate_vram(70, 2.0)
print(f"70B fp16 requires: {vram_70b_fp16:.1f} GB")
# Output: 70B fp16 requires: 140.0 GB`,
      caption: {
        en: 'Model weight memory calculations across fp16 (14.0 GB), int8 (7.0 GB), and int4 (3.5 GB) for a 7B parameter model, with 70B fp16 reaching 140.0 GB.',
        bn: '৭ বিলিয়ন প্যারামিটার মডেলের মেমোরি হিসাব: fp16 (১৪.০ জিবি), int8 (৭.০ জিবি), এবং int4 (৩.৫ জিবি); যেখানে ৭০ বিলিয়ন fp16 মডেলে ১৪০.০ জিবি প্রয়োজন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Prefill / decode', def: { en: 'The compute-bound parallel processing of input prompts compared to the memory-bandwidth-bound sequential token generation phase.', bn: 'ইনপুট প্রম্পটের সমান্তরাল প্রসেসিং বনাম মেমোরি ব্যান্ডউইথের ওপর নির্ভরশীল পর্যায়ক্রমিক টোকেন তৈরির পর্যায়।' } },
        { term: 'Continuous batching', def: { en: 'An iteration-level scheduling algorithm that dynamically aggregates concurrent decode requests to maximize GPU throughput.', bn: 'একটি শিডিউলিং অ্যালগরিদম যা একাধিক অনুরোধের ডিকোডিংকে একসাথে প্রসেস করে জিপিইউ থ্রুপুট সর্বোচ্চ করে।' } },
        { term: 'Quantization', def: { en: 'A precision reduction technique converting high-precision floating point model weights into lower-bit representations like INT8 or INT4.', bn: 'উচ্চ নির্ভুলতার ফ্লোটিং পয়েন্ট ওজনকে কম বিটের ইন্টিজারে রূপান্তর করে মেমোরির পরিমাণ কমানোর পদ্ধতি।' } },
        { term: 'TTFT / TPS', def: { en: 'Core serving performance metrics measuring time-to-first-token latency and downstream tokens-per-second throughput.', bn: 'প্রধান পারফরম্যান্স মেট্রিক যা প্রথম টোকেন পেতে প্রয়োজনীয় সময় (ল্যাটেন্সি) এবং প্রতি সেকেন্ডে উৎপন্ন টোকেনের গতি (থ্রুপুট) পরিমাপ করে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Inference is the business', bn: 'WHY — Inference-ব্যবসা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Training spends once; inference bills forever — $/million tokens IS the P&L.', bn: 'Training-একবার খরচ; inference-চিরতরে বিল — $/million token-P&L।' },
        { en: 'Latency is UX: TTFT > 2s bleeds users; TPS < 20 feels broken.', bn: 'Latency-UX: TTFT > ২s user-ঝরায়; TPS < ২০ ভাঙা-লাগে।' },
        { en: 'Fit decides fate: models that fit cheap cards ship; others rent datacenters.', bn: 'খাপ-ভাগ্য ঠিক করে: সস্তা কার্ড বা cards-এ খাপা মডেল চালু হয়; বাকিরা ডেটাসেন্টার ভাড়া করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Serve in 4 steps', bn: 'HOW — Serve ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Quantize', bn: '১. কোয়ান্টাইজ করুন' }, text: { en: 'int8/int4 to fit the card + cache.', bn: 'কার্ড ও ক্যাশের ধারণক্ষমতা অনুযায়ী int8 বা int4 কোয়ান্টাইজেশন।' } },
        { title: { en: '2. Batch', bn: '২. ব্যাচিং প্রয়োগ' }, text: { en: 'Continuous batching for throughput.', bn: 'থ্রুপুট বাড়াতে কন্টিনিউয়াস ব্যাচিং ব্যবহার করা।' } },
        { title: { en: '3. Cache', bn: '৩. ক্যাশিং করুন' }, text: { en: 'KV cache + prefix caching for repeats.', bn: 'পুনরাবৃত্তির জন্য কেভি ক্যাশ এবং প্রিফিক্স ক্যাশিং।' } },
        { title: { en: '4. SLO-gate', bn: '৪. এসএলও গেট' }, text: { en: 'TTFT/TPS budgets per tier.', bn: 'প্রতিটি সার্ভিসের জন্য TTFT ও TPS এর নির্দিষ্ট বাজেট নির্ধারণ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Fit the card', bn: 'INSIDE — Card-খাপান' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit fits 7B weights to a 16 GB card: fp16 14.0 GB (fits, no room — cache starves), int8 7.0 GB (fits ✓), int4 3.5 GB (fits ✓✓ — room for batch + cache). Raise PARAMS to 70B and watch fp16 demand 140 GB: quantization stops being optional. Bytes are rent; math picks the tenant.',
        bn: 'এই tryit ৭B ওজন ১৬ GB card-খাপায়: fp16 ১৪.০ GB (খাপে, জায়গা নেই — cache-না খায়), int8 ৭.০ GB (খাপে ✓), int4 ৩.৫ GB (খাপে ✓✓ — batch + cache-জায়গা)। PARAMS ৭০B-তুলে fp16-১৪০ GB দাবি দেখুন: quantization ঐচ্ছিক-থাকে না। Byte-ভাড়া; গাণিতিক-ভাড়াটে বাছে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'VRAM fitter live (raise PARAMS, press Run)', bn: 'VRAM fitter live (PARAMS বাড়িয়ে Run)' },
      html: '<h3>Bytes are rent</h3>\n<pre id="out"></pre>\n<p>Console prices each format.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #818cf8; border-radius: 8px; padding: 10px; }',
      js: 'const PARAMS = 7e9, CARD = 16; // ← try 70e9!\nconst FORMATS = [["fp16", 2], ["int8", 1], ["int4", 0.5]];\nconst rows = FORMATS.map(([n, b]) => {\n  const gb = PARAMS * b / 1e9;\n  const fit = gb <= CARD ? (gb <= CARD / 2 ? "FITS ✓✓" : "FITS ✓ tight") : "NO FIT ✗";\n  console.log(n + ": " + gb.toFixed(1) + " GB → " + fit);\n  return n + " " + gb.toFixed(1) + " GB → " + fit;\n});\ndocument.getElementById("out").textContent = rows.join("\\n") + "\\ncard: " + CARD + " GB";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Serving instincts', bn: 'RESULT — Serving-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Fit first: weights + cache must clear the card with headroom.', bn: 'আগে-খাপান: ওজন + cache headroom-সহ card-পার হতেই হবে।' },
        { en: 'Batch always: idle decode slots are money left on the table.', bn: 'সবসময়-batch: অলস-decode slot টেবিলে-টাকা ফেলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Serving fires', bn: 'DEBUG — Serving-আগুন' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'OOM at midnight (cache ate the card)', bn: 'মাঝরাতে OOM (cache-card খেল)' },
      text: {
        en: 'Weights fit but KV cache grows per user per token: long chats + big batches = midnight OOM. Symptoms: crashes under load, never in tests. Cure: cap context × batch, evict idle, autoscale on VRAM — fit WITH cache, not without.',
        bn: 'ওজন ঠিকঠাক ধরলেও ব্যবহারকারীর সংখ্যা ও দীর্ঘ চ্যাটের সাথে কেভি ক্যাশ দ্রুত বৃদ্ধি পায়: যার ফলে মাঝরাতে সার্ভার মেমোরি ফুল হয়ে ক্র্যাশ করতে পারে। সমাধান: কনটেক্সট ও ব্যাচের সীমা বেঁধে দেওয়া, অলস ক্যাশ মুছে ফেলা এবং মেমোরির সাথে সমন্বয় রেখে রিলিজ দেওয়া।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Naive quantization (the lobotomy discount)', bn: 'Naive quantization (lobotomy-ছাড়)' },
      text: {
        en: 'Blunt int4 can crater reasoning while multiple-choice stays green: evals must cover YOUR tasks. Symptoms: great MMLU, broken agents. Cure: quantize → re-run goldens → compare margins before serving.',
        bn: 'অতিরিক্ত সংকুচিত int4 কোয়ান্টাইজেশন মডেলের যুক্তিশক্তি ধ্বংস করতে পারে। সমাধান: কোয়ান্টাইজেশনের পর গোল্ডেন টেস্ট সেট পুনরায় চালিয়ে ফলাফল যাচাই করে তবেই প্রোডাকশনে নেওয়া।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Tokens billed', bn: 'REAL WORLD — বিল-token' },
    },
    {
      type: 'list',
      items: [
        { en: 'API providers: vLLM fleets batching thousands of decodes.', bn: 'API provider: হাজার-decode batching vLLM বহর।' },
        { en: 'On-device: int4 3B models chatting offline on phones.', bn: 'On-device: ফোনে offline-chat int4 ৩B মডেল।' },
        { en: 'Enterprises: private 70B int8 on 2×80GB — data never leaves.', bn: 'Enterprise: ২×৮০GB private ৭০B int8 — ডেটা-যায় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — LLM Capstone', bn: 'পরবর্তী পাঠ — LLM Capstone' },
    },
    {
      type: 'para',
      text: {
        en: 'Serving priced. The CAPSTONE ships a mini support agent: route → retrieve → reason → answer → judge-gate — eight lessons, one launch.',
        bn: 'সার্ভিং কৌশল নিশ্চিত। ক্যাপস্টোন পাঠে একটি ক্ষুদ্র গ্রাহক সহায়তা এজেন্ট তৈরি হবে: রাউট → তথ্য উদ্ধার → যুক্তি → উত্তর → বিচারক মূল্যায়ন।',
      },
    },
  ],
  exercises: [
    {
      id: 'svd-ex-1',
      kind: 'mcq',
      topic: 'prefill-decode',
      question: { en: 'Prefill vs decode?', bn: 'প্রিফিল (prefill) বনাম ডিকোড (decode) এর মূল পার্থক্য কী?' },
      options: [
        { en: 'Prefill: prompt at once (compute); decode: token-by-token (memory)', bn: 'প্রিফিল: পুরো প্রম্পট একসাথে প্রসেস (কম্পিউট-বাউন্ড); ডিকোড: একটি করে টোকেন তৈরি (মেমোরি-বাউন্ড)' },
        { en: 'Same thing', bn: 'উভয়ই সম্পূর্ণ একই কাজ করে' },
        { en: 'Decode is faster', bn: 'ডিকোড প্রিফিলের চেয়ে দ্রুত' },
        { en: 'Prefill emits tokens', bn: 'প্রিফিল আউটপুট টোকেন তৈরি করে' },
      ],
      answer: 0,
      hint: { en: 'WHAT’s first line.', bn: 'প্রথম অনুচ্ছেদের বর্ণনা দেখুন।' },
      explanation: {
        en: 'Prefill parallelizes the known prompt; decode serializes the unknown future, streaming weights per token — different bottlenecks, different fixes.',
        bn: 'প্রিফিল ইনপুট প্রম্পটকে সমান্তরালভাবে প্রসেস করে, আর ডিকোড প্রতিটি পরবর্তী টোকেনের জন্য মেমোরি থেকে ওজন স্থানান্তর করে।'
      },
    },
    {
      id: 'svd-ex-2',
      kind: 'mcq',
      topic: 'quant-math',
      question: {
        en: 'Under 16-bit floating-point precision (fp16), how much total GPU VRAM is required strictly to hold the weights of a 70-billion parameter model?',
        bn: '১৬-বিট ফ্লোটিং পয়েন্ট (fp16) প্রিসিশনে একটি ৭০ বিলিয়ন প্যারামিটারের মডেলের ওজন সংরক্ষণের জন্য ঠিক কত গিগাবাইট জিপিইউ মেমোরি প্রয়োজন?'
      },
      options: [
        { en: '140 GB (70 × 2 bytes)', bn: '১৪০ GB (৭০ × ২ বাইট)' },
        { en: '70 GB', bn: '৭০ GB' },
        { en: '35 GB', bn: '৩৫ GB' },
        { en: '280 GB', bn: '২৮০ GB' },
      ],
      answer: 0,
      hint: { en: 'fp16 = 2 bytes/param.', bn: 'fp16 এ প্রতি প্যারামিটারে ২ বাইট প্রয়োজন।' },
      explanation: {
        en: '70e9 × 2 bytes = 140 GB: two 80GB cards before cache. int8 halves to 70, int4 to 35 — quantization picks the fleet.',
        bn: '৭০ বিলিয়ন × ২ বাইট = ১৪০ জিবি: ক্যাশ ছাড়াই দুটি ৮০ জিবি কার্ড প্রয়োজন। int8 এ ৭০ এবং int4 এ ৩৫ জিবিতে নেমে আসে।'
      },
    },
    {
      id: 'svd-ex-3',
      kind: 'mcq',
      topic: 'oom-cause',
      question: { en: 'Fits in tests, OOMs in prod. Prime suspect?', bn: 'লোকাল টেস্টে সফল কিন্তু প্রোডাকশনে গিয়ে মেমোরি ফুল (OOM) হওয়ার প্রধান কারণ কী?' },
      options: [
        { en: 'KV cache growth: context × batch under load', bn: 'কেভি ক্যাশের বৃদ্ধি: অতিরিক্ত ট্রাফিকে কনটেক্সট এবং ব্যাচের মেমোরি বৃদ্ধি' },
        { en: 'Weights grew', bn: 'মডেলের ওজন নিজে থেকেই বৃদ্ধি পাওয়া' },
        { en: 'GPUs shrank', bn: 'জিপিইউর আকার ছোট হয়ে যাওয়া' },
        { en: 'Cosmic rays', bn: 'মহাজাগতিক রশ্মির বিকিরণ' },
      ],
      answer: 0,
      hint: { en: 'DEBUG warn.', bn: 'সতর্কতা নোটটি দেখুন।' },
      explanation: {
        en: 'Tests run short solo prompts; prod stacks long chats × concurrent users — cache multiplies where weights stay flat. Fit WITH cache.',
        bn: 'টেস্টে ছোট ও একক প্রম্পট চালানো হয়, কিন্তু প্রোডাকশনে দীর্ঘ চ্যাট ও সমকালীন ব্যবহারকারীদের ট্রাফিকের ফলে ক্যাশ ফুলে ওঠে।'
      },
    },
    {
      id: 'svd-ex-4',
      kind: 'predict',
      topic: 'fleet-pick',
      question: { en: '2×80GB cards, 70B model, big batches. Format + why, one line.', bn: 'দুটি ৮০ জিবি কার্ডে ৭০ বিলিয়ন মডেল ও বড় ব্যাচ চালানোর জন্য কোন ফরম্যাট উপযুক্ত এবং কেন? এক লাইনে লিখুন।' },
      answer: 'int8 (70GB weights): leaves 90GB for KV cache + batches.',
      accept: ['int8', '70', 'cache', 'batch', 'headroom', '90'],
      hint: { en: '160 − weights = cache room.', bn: '১৬০ থেকে ওজনের আকার বিয়োগ করে অবশিষ্ট মেমোরি হিসাব করুন।' },
      explanation: {
        en: '140GB fp16 leaves 20GB (starvation); 70GB int8 leaves 90GB for cache+batches. Always budget the cache, not just weights.',
        bn: 'fp16 এ ১৪০ জিবি লাগলে ক্যাশের জন্য থাকে মাত্র ২০ জিবি; কিন্তু int8 এ ৭০ জিবি লাগায় ক্যাশ ও ব্যাচের জন্য পুরো ৯০ জিবি ফাঁকা থাকে।'
      },
    },
  ],
  quiz: {
    id: 'serving-deploy-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'svdq1',
        kind: 'mcq',
        topic: 'batching-win',
        question: { en: 'Continuous batching wins…', bn: 'কন্টিনিউয়াস ব্যাচিং ব্যবহারের প্রধান লাভ কী?' },
        options: [
          { en: 'Throughput: packed decodes, shared weight streams', bn: 'থ্রুপুট বৃদ্ধি: একাধিক অনুরোধ একসাথে ডিকোড করে মডেল ওজনের সর্বোচ্চ ব্যবহার' },
          { en: 'Accuracy', bn: 'মডেলের নির্ভুলতা বৃদ্ধি' },
          { en: 'Context length', bn: 'কনটেক্সট উইন্ডোর দৈর্ঘ্য বৃদ্ধি' },
          { en: 'Nothing', bn: 'কোনো সুবিধা নেই' },
        ],
        answer: 0,
        hint: { en: 'Decode slots.', bn: 'ডিকোড স্লট বিবেচনা করুন।' },
        explanation: {
          en: 'One weight-stream serves many users’ tokens at once: throughput multiplies on the same FLOPs — batching is free money.',
          bn: 'একই সময়ে মেমোরি থেকে ওজন স্থানান্তর করে বহু ব্যবহারকারীর অনুরোধ সম্পন্ন করা যায়, ফলে থ্রুপুট বহুগুণ বাড়ে।'
        },
      },
      {
        id: 'svdq2',
        kind: 'mcq',
        topic: 'slo-meaning',
        question: { en: 'TTFT 3s, TPS 8. Verdict?', bn: 'TTFT ৩ সেকেন্ড এবং TPS ৮ হলে পারফরম্যান্স সম্পর্কে আপনার মূল্যায়ন কী?' },
        options: [
          { en: 'Broken UX: slow start AND stuttering stream', bn: 'খারাপ ব্যবহারকারী অভিজ্ঞতা: অত্যন্ত ধীরগতিতে শুরু এবং হোঁচট খেয়ে টেক্সট আসা' },
          { en: 'Excellent', bn: 'অত্যন্ত চমৎকার ও দ্রুতগতির' },
          { en: 'Fine for chat', bn: 'চ্যাটবটের জন্য স্বাভাবিক' },
          { en: 'Only TTFT matters', bn: 'শুধু প্রথম টোকেনের সময়ই যথেষ্ট' },
        ],
        answer: 0,
        hint: { en: 'WHY #2’s bars.', bn: 'দ্বিতীয় কারণের মেট্রিকগুলো দেখুন।' },
        explanation: {
          en: 'TTFT > 2s bleeds, TPS < 20 stutters: users leave before answers land. SLOs are survival metrics.',
          bn: 'TTFT > ২ সেকেন্ড হলে এবং TPS < ২০ হলে ব্যবহারকারী উত্তর আসার আগেই পেজ ছেড়ে চলে যায়।'
        },
      },
      {
        id: 'svdq3',
        kind: 'mcq',
        topic: 'quant-eval',
        question: { en: 'After quantizing, first step?', bn: 'মডেল কোয়ান্টাইজ করার পর প্রথম করণীয় কী?' },
        options: [
          { en: 'Re-run YOUR goldens — compare margins', bn: 'নিজস্ব গোল্ডেন টেস্ট সেট পুনরায় চালিয়ে নির্ভুলতার মার্জিন তুলনা করা' },
          { en: 'Ship immediately', bn: 'সরাসরি প্রোডাকশনে পাঠিয়ে দেওয়া' },
          { en: 'Quantize more', bn: 'আরও বেশি সংকুচিত করা' },
          { en: 'Delete evals', bn: 'মূল্যায়ন পরীক্ষা মুছে ফেলা' },
        ],
        answer: 0,
        hint: { en: 'DEBUG tip’s cure.', bn: 'টিপসের প্রতিকার অংশটি দেখুন।' },
        explanation: {
          en: 'Compression can lobotomize reasoning invisibly: goldens catch task-decay MMLU misses — measure before serving.',
          bn: 'অতিরিক্ত সংকুচিত করার ফলে সাধারণ বেঞ্চমার্কে পাস করলেও নির্দিষ্ট কাজে মডেলের যুক্তিশক্তি ক্ষতিগ্রস্ত হতে পারে।'
        },
      },
      {
        id: 'svdq4',
        kind: 'predict',
        topic: 'slo-budget',
        question: { en: 'Premium tier: TTFT < 1s, TPS > 40. Name two serving levers in one line.', bn: 'প্রিমিয়াম গ্রাহকদের জন্য TTFT < ১ সেকেন্ড এবং TPS > ৪০ নিশ্চিত করতে দুটি সার্ভিং কৌশলের নাম এক লাইনে লিখুন।' },
        answer: 'Dedicated prefill capacity + capped batch for decode TPS; prefix-cache repeats.',
        accept: ['prefill', 'batch', 'prefix', 'cache', 'dedicated', 'cap'],
        hint: { en: 'HOW steps 2–3.', bn: 'HOW এর ২ ও ৩ নম্বর ধাপ দেখুন।' },
        explanation: {
          en: 'TTFT wants prefill priority; TPS wants decode headroom + cached prefixes. Tiers buy isolation from the shared pool.',
          bn: 'দ্রুত শুরুর জন্য প্রিফিল অগ্রাধিকার এবং দ্রুত গতির জন্য ডিকোড হেডরুম ও প্রিফিক্স ক্যাশিং প্রয়োজন।'
        },
      },
    ],
  },
  nextLesson: {
    slug: 'llm-capstone',
    title: { en: 'LLM Capstone', bn: 'LLM Capstone' },
  },
};