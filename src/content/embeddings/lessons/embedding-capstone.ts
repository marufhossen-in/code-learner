import type { Lesson } from '../../../lib/types';

export const EmbeddingCapstoneLesson: Lesson = {
  slug: 'embedding-capstone',
  tech: 'embeddings',
  title: {
    en: 'Production Vector Pipeline, Latency Optimization & End-to-End Retrieval',
    bn: 'প্রোডাকশন ভেক্টর পাইপলাইন, লেটেন্সি অপ্টিমাইজেশন এবং এন্ড-টু-এন্ড অনুসন্ধান'
  },
  summary: {
    en: 'Synthesize all embedding disciplines into a unified production vector retrieval pipeline: orchestrate document chunking across 1000 characters into 7 windows, normalize embeddings to unit length, compute sub-10ms cosine similarities, and prune candidates via a 0.75 quality floor.',
    bn: 'সমস্ত ভেক্টর এমবেডিং কৌশলকে একটি সমন্বিত প্রোডাকশন পাইপলাইনে রূপান্তর করুন: ১০০০ অক্ষরের লেখাকে ৭ টি স্লাইডিং উইন্ডোতে চাংকিং, ইউনিট দৈর্ঘ্যে স্বাভাবিকীকরণ, ১০ মিলিসেকেন্ডের নিচে কোসাইন গণনা এবং ০.৭৫ মানের ন্যূনতম ফ্লোর দিয়ে ফলাফল বাছাই।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'unified-pipeline-heading',
      text: {
        en: 'The Complete Retrieval Journey: Connecting All Six Processing Stages',
        bn: 'সম্পূর্ণ অনুসন্ধান যাত্রা: ৬ টি প্রক্রিয়াকরণ ধাপের একীভূত সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A production retrieval system unites every mathematical discipline mastered throughout this track. Raw documents spanning 1000 characters are first sliced into 7 overlapping windows to protect sentence boundaries. Each segment is projected into high-dimensional space and normalized to unit length. When a user submits a query, the gateway computes cosine similarities across all 5 candidate passages, drops entries below the 0.75 quality bar, and injects the Top-2 highest-scoring chunks into the prompt.',
        bn: 'একটি পূর্ণাঙ্গ প্রোডাকশন অনুসন্ধান ব্যবস্থা এই ট্র্যাকে অর্জিত সমস্ত গাণিতিক কৌশলকে একীভূত করে। ১০০০ অক্ষরের অপরীক্ষিত নথিকে প্রথমে বাক্যের ধারাবাহিকতা রক্ষার্থে ৭ টি ওভারল্যাপিং স্লাইডিং উইন্ডোতে ভাগ করা হয়। প্রতিটি অংশকে বহুমাত্রিক স্থানে প্রক্ষেপণ করে একক দৈর্ঘ্যে স্বাভাবিক করা হয়। ব্যবহারকারী কোনো প্রশ্ন পাঠালে গেটওয়ে ৫ টি সম্ভাব্য নথির কোসাইন সাদৃশ্য দ্রুত গণনা করে, ০.৭৫ মানের নিচের দুর্বল তথ্যগুলো ছেঁকে ফেলে এবং সেরা টপ-২ (Top-2) খণ্ডকে প্রম্পটের মূল প্রেক্ষাপটে যুক্ত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 6 processing stages of the end-to-end vector embedding and retrieval pipeline.',
        bn: 'চিত্র ১: সম্পূর্ণ ভেক্টর এমবেডিং এবং অনুসন্ধান পাইপলাইনের ৬ টি প্রক্রিয়াকরণ ধাপ।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">END-TO-END PRODUCTION RETRIEVAL PIPELINE</text>
  
  <!-- 6 Stages Grid -->
  <!-- Stage 1 -->
  <g transform="translate(30, 65)">
    <rect width="110" height="240" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <rect width="110" height="26" rx="6" fill="#0284c7" />
    <text x="55" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Chunking</text>
    <text x="10" y="55" fill="#38bdf8" font-size="9" font-family="monospace">1000 chars</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Size: 200</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Overlap: 50</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">Step: 150</text>
    <text x="10" y="125" fill="#4ade80" font-size="9" font-family="monospace">7 Chunks</text>
  </g>

  <!-- Stage 2 -->
  <g transform="translate(160, 65)">
    <rect width="110" height="240" rx="6" fill="#1e293b" stroke="#10b981" />
    <rect width="110" height="26" rx="6" fill="#059669" />
    <text x="55" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Embedding</text>
    <text x="10" y="55" fill="#4ade80" font-size="9" font-family="monospace">Transformer</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">1536 Floats</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Dense Vector</text>
    <text x="10" y="110" fill="#94a3b8" font-size="8" font-family="sans-serif">Captures full</text>
    <text x="10" y="125" fill="#94a3b8" font-size="8" font-family="sans-serif">semantics</text>
  </g>

  <!-- Stage 3 -->
  <g transform="translate(290, 65)">
    <rect width="110" height="240" rx="6" fill="#1e293b" stroke="#f59e0b" />
    <rect width="110" height="26" rx="6" fill="#d97706" />
    <text x="55" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Normalizing</text>
    <text x="10" y="55" fill="#fbbf24" font-size="9" font-family="monospace">L2 Scale</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">Length = 1.0</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">Hypersphere</text>
    <text x="10" y="110" fill="#94a3b8" font-size="8" font-family="sans-serif">Turns cosine</text>
    <text x="10" y="125" fill="#94a3b8" font-size="8" font-family="sans-serif">into dot prod</text>
  </g>

  <!-- Stage 4 -->
  <g transform="translate(420, 65)">
    <rect width="110" height="240" rx="6" fill="#1e293b" stroke="#6366f1" />
    <rect width="110" height="26" rx="6" fill="#4338ca" />
    <text x="55" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Scoring</text>
    <text x="10" y="55" fill="#818cf8" font-size="9" font-family="monospace">SIMD MAC</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">5 candidates</text>
    <text x="10" y="90" fill="#cbd5e1" font-size="8" font-family="sans-serif">D1: 0.91</text>
    <text x="10" y="105" fill="#cbd5e1" font-size="8" font-family="sans-serif">D3: 0.83</text>
    <text x="10" y="120" fill="#cbd5e1" font-size="8" font-family="sans-serif">D5: 0.77</text>
  </g>

  <!-- Stage 5 -->
  <g transform="translate(550, 65)">
    <rect width="120" height="240" rx="6" fill="#1e293b" stroke="#ec4899" />
    <rect width="120" height="26" rx="6" fill="#be185d" />
    <text x="60" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Quality Gate</text>
    <text x="10" y="55" fill="#f472b6" font-size="9" font-family="monospace">Bar: 0.75</text>
    <text x="10" y="75" fill="#cbd5e1" font-size="8" font-family="sans-serif">D1, D3, D5 pass</text>
    <text x="10" y="95" fill="#ef4444" font-size="8" font-family="sans-serif">Drops D2 (0.62)</text>
    <text x="10" y="110" fill="#ef4444" font-size="8" font-family="sans-serif">Drops D4 (0.44)</text>
    <text x="10" y="130" fill="#94a3b8" font-size="8" font-family="sans-serif">Zero noise</text>
  </g>

  <!-- Stage 6 -->
  <g transform="translate(690, 65)">
    <rect width="120" height="240" rx="6" fill="#1e293b" stroke="#a855f7" />
    <rect width="120" height="26" rx="6" fill="#7e22ce" />
    <text x="60" y="18" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">6. Top-2 Egress</text>
    <text x="10" y="55" fill="#c084fc" font-size="9" font-family="monospace">Final Slice</text>
    <text x="10" y="75" fill="#4ade80" font-size="9" font-family="monospace">1. D1 (0.91)</text>
    <text x="10" y="95" fill="#4ade80" font-size="9" font-family="monospace">2. D3 (0.83)</text>
    <text x="10" y="120" fill="#cbd5e1" font-size="8" font-family="sans-serif">Injected into</text>
    <text x="10" y="135" fill="#cbd5e1" font-size="8" font-family="sans-serif">LLM prompt</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'end-to-end-latency-heading',
      text: {
        en: 'Latency Budgets and Production Retrieval Best Practices',
        bn: 'লেটেন্সি বাজেট এবং প্রোডাকশন অনুসন্ধানের সেরা নীতিমালা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A high-throughput enterprise retrieval system must return context within strict latency budgets. In a well-architected pipeline, document chunking and embedding normalization occur asynchronously during ingestion. At query serving time, query vector inference takes roughly 15ms via cloud APIs (or under 5ms via local ONNX runtimes), HNSW vector index search executes in 2ms, and threshold filtering completes in under 1ms. Total retrieval overhead remains under 20ms, leaving ample headroom for LLM completion streaming.',
        bn: 'উচ্চ-সক্ষমতার প্রাতিষ্ঠানিক অনুসন্ধান সিস্টেমে খুব অল্প সময়ের মধ্যে তথ্য উদ্ধার সম্পন্ন হতে হয়। একটি আদর্শ পাইপলাইনে টেক্সট চাংকিং এবং ভেক্টর স্বাভাবিকীকরণ আগে থেকেই অফলাইনে করে রাখা হয়। ব্যবহারকারীর অনুসন্ধানের সময় ক্লাউড মডেলে ভেক্টর তৈরিতে প্রায় ১৫ মিলিসেকেন্ড (অথবা লোকাল ONNX ইঞ্জিনে ৫ মিলিসেকেন্ডের নিচে) সময় লাগে, HNSW ইনডেক্স সার্চে ২ মিলিসেকেন্ড এবং থ্রেশহোল্ড ফিল্টারে ১ মিলিসেকেন্ডের কম সময় ব্যয় হয়। ফলে মোট অনুসন্ধানের সময় ২০ মিলিসেকেন্ডের নিচেই থাকে, যা মূল উত্তরের দ্রুত স্ট্রিমিং নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Complete TypeScript production vector retrieval pipeline with threshold gating and Top-2 selection.',
        bn: 'থ্রেশহোল্ড গেটিং এবং টপ-২ নির্বাচন সহ পূর্ণাঙ্গ প্রোডাকশন ভেক্টর পাইপলাইনের TypeScript কোড।'
      },
      code: `interface DocumentVector {
  id: string;
  text: string;
  embedding: number[]; // Pre-normalized unit vector
}

export class ProductionVectorPipeline {
  private threshold: number;
  private topK: number;

  constructor(threshold: number = 0.75, topK: number = 2) {
    this.threshold = threshold;
    this.topK = topK;
  }

  public search(queryVector: number[], corpus: DocumentVector[]) {
    const scored = corpus.map(doc => {
      // Dot product on pre-normalized vectors equals Cosine Similarity
      let dot = 0;
      for (let i = 0; i < queryVector.length; i++) {
        dot += queryVector[i] * doc.embedding[i];
      }
      return { id: doc.id, text: doc.text, score: Number(dot.toFixed(4)) };
    });

    // 1. Filter candidates below quality floor
    const qualified = scored.filter(doc => doc.score >= this.threshold);

    // 2. Sort descending by similarity
    qualified.sort((a, b) => b.score - a.score);

    // 3. Return Top-K slice
    return qualified.slice(0, this.topK);
  }
}

// 5 pre-scored mock document representations
const mockCorpus: DocumentVector[] = [
  { id: 'D1', text: 'Server-Sent Events streaming protocols', embedding: [0.91, 0.0] },
  { id: 'D2', text: 'Unrelated database indexing mechanics', embedding: [0.62, 0.0] },
  { id: 'D3', text: 'Real-time HTTP chunk delta streaming', embedding: [0.83, 0.0] },
  { id: 'D4', text: 'CSS grid and flexbox layout rules', embedding: [0.44, 0.0] },
  { id: 'D5', text: 'Low-latency push messaging networks', embedding: [0.77, 0.0] }
];

const pipeline = new ProductionVectorPipeline(0.75, 2);
const queryVec = [1.0, 0.0]; // Normalized unit probe vector
const results = pipeline.search(queryVec, mockCorpus);

console.log('Total Results Retrieved:', results.length); // 2
console.log('Top Match ID:', results[0].id, 'with score:', results[0].score); // D1 with score 0.91
console.log('Second Match ID:', results[1].id, 'with score:', results[1].score); // D3 with score 0.83
console.log('All Results Exceed 0.75 Bar:', results.every(r => r.score >= 0.75)); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vector Pipeline',
          def: {
            en: 'Coordinated multi-stage architecture transforming raw text into chunks, embeddings, normalized vectors, and ranked query context.',
            bn: 'সমন্বিত বহু-ধাপ বিশিষ্ট আর্কিটেকচার যা কাঁচা টেক্সটকে চাঙ্ক, এমবেডিং, স্বাভাবিকীকৃত ভেক্টর এবং সাজানো তথ্যে রূপান্তর করে।'
          }
        },
        {
          term: 'End-to-End Retrieval',
          def: {
            en: 'The complete unbroken execution path from user query submission to contextual injection into the language model prompt.',
            bn: 'ব্যবহারকারীর প্রশ্ন জমা দেওয়ার মুহূর্ত থেকে মডেলের প্রম্পটে প্রেক্ষাপট সরবরাহ পর্যন্ত সম্পূর্ণ অবিচ্ছিন্ন প্রক্রিয়া।'
          }
        },
        {
          term: 'Quality Floor Gating',
          def: {
            en: 'Strict score threshold filtering rejecting low-similarity search noise to protect generative models from hallucinations.',
            bn: 'কঠোর সাদৃশ্য ফিল্টারিং ব্যবস্থা যা দুর্বল মানের তথ্য বাদ দিয়ে জেনারেটিভ মডেলকে ভুল উত্তর তৈরি থেকে রক্ষা করে।'
          }
        },
        {
          term: 'Context Injection',
          def: {
            en: 'Formatting and embedding retrieved text passages directly into the LLM system or user prompt to ground answers in truth.',
            bn: 'উদ্ধারকৃত প্রাসঙ্গিক তথ্যকে মডেলের প্রম্পটে যুক্ত করে নির্ভুল ও তথ্যভিত্তিক উত্তর তৈরি নিশ্চিত করার পদ্ধতি।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pipeline-chunking-role-ex1',
      kind: 'mcq',
      topic: 'pipeline-chunking-importance',
      question: {
        en: 'Why is the document chunking stage placed at the very beginning of our 6-stage production vector pipeline?',
        bn: 'আমাদের ৬ টি ধাপের প্রোডাকশন ভেক্টর পাইপলাইনের একেবারে শুরুতে কেন টেক্সট চাংকিং ধাপটি রাখা হয়েছে?'
      },
      options: [
        {
          en: 'Embedding models cannot ingest unbounded text, and focused chunking ensures each vector represents a distinct, coherent semantic concept',
          bn: 'এমবেডিং মডেল সীমাহীন টেক্সট গ্রহণ করতে পারে না এবং সুনির্দিষ্ট চাংকিং নিশ্চিত করে প্রতিটি ভেক্টর যেন একক অর্থপূর্ণ ধারণাকে প্রকাশ করে'
        },
        {
          en: 'Because computers can only read documents that have exactly 7 words',
          bn: 'কারণ কম্পিউটার কেবল ঠিক ৭ শব্দের নথি পড়তে পারে'
        },
        {
          en: 'To delete all punctuation from the client computer memory',
          bn: 'ক্লায়েন্টের মেমোরি থেকে সব বিরামচিহ্ন মুছে ফেলার উদ্দেশ্যে'
        },
        {
          en: 'Chunking is only required for documents printed on physical paper',
          bn: 'চাংকিং কেবল কাগজে প্রিন্ট করা ফাইলের ক্ষেত্রেই প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unbounded documents exceed context windows and dilute vector specificity.',
        bn: 'সীমাহীন নথি মডেলের ইনপুট সীমা ছাড়িয়ে যায় এবং ভেক্টরের স্পষ্টতা নষ্ট করে ফেলে।'
      },
      explanation: {
        en: 'Slicing large texts into bite-sized chunks prevents token overflow and maintains high retrieval precision.',
        bn: 'বড় নথিপত্রকে ছোট অংশে ভাগ করলে মডেলের সীমাবদ্ধতা এড়ানো যায় এবং অনুসন্ধানের যথার্থতা সর্বোচ্চ থাকে।'
      }
    },
    {
      id: 'pre-normalized-dot-advantage-ex2',
      kind: 'mcq',
      topic: 'pre-normalized-dot-speedup',
      question: {
        en: 'In Stage 3 and 4 of our pipeline, why do we normalize vectors during ingestion before computing similarities at query time?',
        bn: 'পাইপলাইনের ৩ ও ৪ ধাপে কেন আমরা অনুসন্ধানের আগেই ডেটাবেসে ভেক্টরগুলোকে একক নর্মে স্বাভাবিক করে রাখি?'
      },
      options: [
        {
          en: 'Pre-normalizing makes the cosine denominator 1.0, enabling query scoring to run via blistering-fast SIMD dot products with zero divisions',
          bn: 'আগে স্বাভাবিক করে রাখলে কোসাইনের হর ১.০ হয়ে যায়, ফলে কোনো ভাগ ছাড়াই অতি দ্রুতগতির SIMD ডট গুণন দিয়ে সার্চ চালানো সম্ভব হয়'
        },
        {
          en: 'To make the vector numbers visible in dark mode',
          bn: 'ডার্ক মোডে যাতে ভেক্টরের সংখ্যাগুলো দেখা যায়'
        },
        {
          en: 'Because division operations speed up CPU processing by 100 times',
          bn: 'কারণ ভাগ করার কাজ প্রসেসরের গতি ১০০ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'It is required by HTML web browser standards',
          bn: 'এটি ব্রাউজারের এইচটিএমএল স্ট্যান্ডার্ডের একটি সাধারণ নিয়ম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dot products on unit vectors require zero square roots or divisions.',
        bn: 'একক ভেক্টরের ডট গুণনে কোনো বর্গমূল বা ভাগের দরকার হয় না।'
      },
      explanation: {
        en: 'Normalizing offline during ingestion offloads expensive math, keeping live query latency within milliseconds.',
        bn: 'ইনজেস্টের সময় স্বাভাবিক করে রাখলে অনুসন্ধানের সময় জটিল হিসাব বাদ দিয়ে চোখের পলকে উত্তর পাওয়া যায়।'
      }
    },
    {
      id: 'gate-pruning-ex3',
      kind: 'mcq',
      topic: 'quality-gate-pruning-safety',
      question: {
        en: 'In Stage 5, why were candidates D2 (score 0.62) and D4 (score 0.44) dropped by the quality gate before Top-2 selection?',
        bn: '৫ ম ধাপে টপ-২ নির্বাচনের আগেই D২ (স্কোর ০.৬২) এবং D৪ (স্কোর ০.৪৪) কে কেন কোয়ালিটি গেট বাদ দিয়ে দিল?'
      },
      options: [
        {
          en: 'Both fell below the 0.75 quality threshold bar, filtering out irrelevant noise that would otherwise pollute LLM context',
          bn: 'উভয়ই ০.৭৫ মানের ন্যূনতম থ্রেশহোল্ডের নিচে পড়েছিল, ফলে মডেলের প্রেক্ষাপট দূষিত করতে পারে এমন অপ্রাসঙ্গিক তথ্য বাদ পড়ে গেল'
        },
        {
          en: 'Because their document IDs were even numbers',
          bn: 'কারণ তাদের নথির আইডি জোড় সংখ্যা ছিল'
        },
        {
          en: 'The server ran out of memory while reading D2',
          bn: 'D২ পড়ার সময় সার্ভারের র‍্যাম শেষ হয়ে গিয়েছিল'
        },
        {
          en: 'They were deleted by the user internet service provider',
          bn: 'ইন্টারনেট প্রোভাইডার সেগুলো মুছে ফেলেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Scores below 0.75 represent weak conceptual relevance.',
        bn: '০.৭৫ এর নিচের স্কোর দুর্বল অর্থগত সম্পর্ক প্রকাশ করে।'
      },
      explanation: {
        en: 'Pruning low-similarity candidates guarantees only high-confidence evidence enters the generative reasoning prompt.',
        bn: 'দুর্বল নথিগুলো ছেঁকে ফেললে মডেল কেবল নির্ভরযোগ্য তথ্যের ওপর ভিত্তি করে সঠিক উত্তর দিতে পারে।'
      }
    },
    {
      id: 'pipeline-latency-budget-ex4',
      kind: 'mcq',
      topic: 'end-to-end-latency-budget',
      question: {
        en: 'What is the target end-to-end vector retrieval latency budget for interactive conversational AI systems?',
        bn: 'ব্যবহারকারীর সাথে স্বাভাবিক চ্যাটিংয়ের উপযোগী সিস্টেমে সম্পূর্ণ ভেক্টর অনুসন্ধানের আদর্শ লেটেন্সি বাজেট কত হওয়া উচিত?'
      },
      options: [
        {
          en: 'Sub-20 milliseconds, leaving ample headroom for autoregressive token streaming to achieve instant Time to First Token',
          bn: '২০ মিলিসেকেন্ডের নিচে, যাতে মডেলের লেখা তাৎক্ষণিকভাবে স্ক্রিনে ভেসে ওঠার পর্যাপ্ত সময় হাতে থাকে'
        },
        {
          en: 'Exactly 45 minutes per query',
          bn: 'প্রতিটি অনুসন্ধানের জন্য ঠিক ৪৫ মিনিট'
        },
        {
          en: 'Over 2 hours under normal conditions',
          bn: 'স্বাভাবিক অবস্থায় ২ ঘণ্টার বেশি সময়'
        },
        {
          en: 'Zero milliseconds because time stops during search',
          bn: 'ঠিক ০ মিলিসেকেন্ড কারণ খোঁজার সময় ঘড়ি থেমে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Retrieval must complete in a tiny fraction of the total response generation time.',
        bn: 'উত্তর তৈরি শুরু হওয়ার আগেই চোখের পলকে তথ্য উদ্ধারের কাজ শেষ হতে হবে।'
      },
      explanation: {
        en: 'Keeping vector retrieval under 20ms ensures high-speed, interactive user experiences in production applications.',
        bn: 'অনুসন্ধানের সময় ২০ মিলিসেকেন্ডের নিচে রাখলে ব্যবহারকারী কোনো বিরতি ছাড়াই তাৎক্ষণিক উত্তর দেখতে পান।'
      }
    }
  ],
  quiz: {
    id: 'quiz-embedding-capstone',
    title: {
      en: 'Production Vector Pipeline Capstone Quiz',
      bn: 'প্রোডাকশন ভেক্টর পাইপলাইন ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'quiz-hnsw-ann-scaling',
        kind: 'mcq',
        topic: 'hnsw-hierarchical-graph-scaling',
        question: {
          en: 'How does the Hierarchical Navigable Small World (HNSW) graph algorithm achieve logarithmic O(log N) search across millions of vectors?',
          bn: 'Hierarchical Navigable Small World (HNSW) গ্রাফ অ্যালগরিদম কীভাবে লাখ লাখ ভেক্টরের মাঝে লগারিদমিক O(log N) গতিতে অনুসন্ধান সম্পন্ন করে?'
        },
        options: [
          {
            en: 'By building multi-layer geometric skip-lists where upper layers make huge spatial leaps and lower layers refine local nearest neighbors',
            bn: 'বহু-স্তরীয় জ্যামিতিক স্কিপ-লিস্ট তৈরি করে যার উপরের স্তরগুলো দীর্ঘ পথ একলাফে পার হয় এবং নিচের স্তরগুলো নিখুঁত প্রতিবেশী খুঁজে বের করে'
          },
          {
            en: 'By deleting 90 percent of the database on every search',
            bn: 'প্রতিটি অনুসন্ধানের সময় ডেটাবেসের ৯০ শতাংশ তথ্য মুছে ফেলে'
          },
          {
            en: 'By converting all numbers into text files',
            bn: 'সমস্ত সংখ্যাকে সাধারণ টেক্সট ফাইলে রূপান্তর করার মাধ্যমে'
          },
          {
            en: 'HNSW is an encrypted USB thumb drive protocol',
            bn: 'HNSW হলো একটি এনক্রিপ্ট করা ইউএসবি ড্রাইভ প্রোটোকল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Upper highway layers enable fast coarse navigation down to fine local clusters.',
          bn: 'উপরের দ্রুতগতির স্তরগুলো শুরুতেই সঠিক অঞ্চলের কাছে পৌঁছে দেয়।'
        },
        explanation: {
          en: 'HNSW provides logarithmic scalability by traversing hierarchical small-world graph layers efficiently.',
          bn: 'HNSW বহু-স্তরীয় গ্রাফের মাধ্যমে কোটি কোটি নথির ভেতর থেকেও অবিশ্বাস্য দ্রুততায় সঠিক তথ্য উদ্ধার করে।'
        }
      },
      {
        id: 'quiz-scalar-quantization-sq8',
        kind: 'mcq',
        topic: 'scalar-quantization-memory-savings',
        question: {
          en: 'How does Scalar Quantization (SQ8) reduce vector index RAM consumption by 75% in enterprise production deployments?',
          bn: 'Scalar Quantization (SQ8) প্রযুক্তি কীভাবে প্রোডাকশনে ভেক্টর ইনডেক্সের র‍্যাম (RAM) খরচ ৭৫% কমিয়ে দেয়?'
        },
        options: [
          {
            en: 'It compresses 32-bit floating-point coordinates (4 bytes) into 8-bit unsigned integers (1 byte) with minimal loss in retrieval accuracy',
            bn: 'এটি ৩২-বিট ফ্লোট সংখ্যাকে (৪ বাইট) ৮-বিট পূর্ণসংখ্যায় (১ বাইট) সংকুচিত করে, যেখানে অনুসন্ধানের যথার্থতা প্রায় অক্ষুণ্ণ থাকে'
          },
          {
            en: 'It turns off 75 percent of the server computer fans',
            bn: 'এটি সার্ভারের ৭৫ শতাংশ ফ্যান বন্ধ করে দেয়'
          },
          {
            en: 'It rounds all numbers to zero',
            bn: 'এটি সমস্ত সংখ্যাকে শূন্য বানিয়ে দেয়'
          },
          {
            en: 'Quantization deletes all vowels from user documents',
            bn: 'কোয়ান্টাইজেশন নথি থেকে সমস্ত স্বরবর্ণ মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Going from 4 bytes (Float32) to 1 byte (Int8) reduces memory footprint to one-fourth (a 75% savings).',
          bn: '৪ বাইট থেকে ১ বাইটে রূপান্তর করলে মেমোরি খরচ সরাসরি চার ভাগের এক ভাগে নেমে আসে (৭৫% সাশ্রয়)।'
        },
        explanation: {
          en: 'SQ8 transforms 4-byte floats into 1-byte integers, slashing memory requirements while preserving high semantic recall.',
          bn: 'SQ8 মেমোরি খরচ ৭৫% বাঁচিয়ে কম খরচে বিশাল পরিমাণ তথ্য সার্ভারে ধরে রাখার সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-context-stuffing-penalty',
        kind: 'mcq',
        topic: 'lost-in-the-middle-phenomenon',
        question: {
          en: 'What cognitive degradation phenomenon affects language models when an engineering pipeline injects too many retrieved chunks into a prompt?',
          bn: 'প্রম্পটের ভেতর অতিরিক্ত সংখ্যক উদ্ধারকৃত খণ্ড যুক্ত করলে ল্যাঙ্গুয়েজ মডেলগুলোতে কোন বিশেষ সমস্যা দেখা দেয়?'
        },
        options: [
          {
            en: '"Lost in the Middle" phenomenon, where models pay high attention to facts at the beginning and end of prompts while ignoring evidence in the middle',
            bn: '"লস্ট ইন দ্য মিডল" সমস্যা, যেখানে মডেল প্রম্পটের শুরু ও শেষের তথ্যে মনোযোগ দিলেও মাঝখানের গুরুত্বপূর্ণ প্রমাণগুলো ভুলে যায়'
          },
          {
            en: 'The computer keyboard catches fire',
            bn: 'কম্পিউটারের কীবোর্ডে আগুন ধরে যায়'
          },
          {
            en: 'The language model begins speaking exclusively in Morse code',
            bn: 'মডেলটি কেবল মোর্স কোডে কথা বলা শুরু করে'
          },
          {
            en: 'The user internet connection drops to zero bytes',
            bn: 'ব্যবহারকারীর ইন্টারনেট গতি শূন্যে নেমে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Attention mechanisms prioritize the prompt primacy and recency positions.',
          bn: 'মডেলের মনোযোগ ব্যবস্থা সাধারণত প্রম্পটের শুরুর ও শেষের তথ্যের প্রতি বেশি আকৃষ্ট থাকে।'
        },
        explanation: {
          en: 'Excessive context dilutes attention; models recall information placed near edges far more reliably than facts buried in the middle.',
          bn: 'অতিরিক্ত তথ্যের কারণে মডেলের মনোযোগ বিক্ষিপ্ত হয়, ফলে মাঝখানে থাকা জরুরি তথ্য হারিয়ে যাওয়ার আশঙ্কা থাকে।'
        }
      },
      {
        id: 'quiz-real-time-reranking-latency',
        kind: 'mcq',
        topic: 'reranker-latency-budgeting',
        question: {
          en: 'Why should cross-encoder rerankers be restricted to scoring only the Top-20 to Top-50 vector candidates rather than the entire 10000-document corpus?',
          bn: 'সম্পূর্ণ নথির ওপর না চালিয়ে ক্রস-এনকোডার রি-র‍্যাংকারকে কেন কেবল সেরা ২০ থেকে ৫০টি প্রার্থীর ওপর চালানো উচিত?'
        },
        options: [
          {
            en: 'Cross-encoders compute full pairwise transformer attention, which is computationally expensive and would add multiple seconds of latency if run on thousands of items',
            bn: 'ক্রস-এনকোডারে পূর্ণাঙ্গ ট্রান্সফরমার মনোযোগের হিসাব করতে হয় যা অত্যন্ত ধীরগতির এবং হাজার হাজার নথিতে চালালে কয়েক সেকেন্ড সময় নষ্ট হবে'
          },
          {
            en: 'Because cross-encoders cannot count past 50',
            bn: 'কারণ ক্রস-এনকোডার ৫০ এর বেশি গুনতে পারে না'
          },
          {
            en: 'To make the output text display in green font',
            bn: 'উত্তরের ফন্ট সবুজ রঙের দেখানোর জন্য'
          },
          {
            en: 'It is strictly forbidden by database manufacturers',
            bn: 'ডেটাবেস নির্মাতারা এটি কঠোরভাবে নিষিদ্ধ করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bi-encoders handle the wide fast filter; cross-encoders perform the deep slow scoring.',
          bn: 'দ্রুত বাছাইয়ের জন্য ভেক্টর সার্চ আর সূক্ষ্ম মূল্যায়নের জন্য অল্প নথিতে রি-র‍্যাংকার চালানো বুদ্ধিমানের কাজ।'
        },
        explanation: {
          en: 'Two-stage retrieval restricts compute-heavy cross-encoders to small candidate sets, achieving elite precision without latency spikes.',
          bn: 'দ্বি-স্তরীয় ব্যবস্থা অল্প কিছু সেরা প্রার্থীর ওপর রি-র‍্যাংকার চালিয়ে গতি এবং সর্বোচ্চ নির্ভুলতার সমন্বয় ঘটায়।'
        }
      }
    ]
  }
};
