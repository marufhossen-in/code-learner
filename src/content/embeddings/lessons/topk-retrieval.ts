import type { Lesson } from '../../../lib/types';

export const TopkRetrievalLesson: Lesson = {
  slug: 'topk-retrieval',
  tech: 'embeddings',
  title: {
    en: 'Top-K Nearest Neighbor Retrieval & Threshold Filtering',
    bn: 'টপ-কে (Top-K) নিকটতম প্রতিবেশী অনুসন্ধান এবং থ্রেশহোল্ড ফিল্টারিং'
  },
  summary: {
    en: 'Engineer production candidate selection: rank vector similarity scores, implement Min-Heap Top-K selection with complexity O(N log K), enforce a 0.75 similarity quality floor across 5 documents, and eliminate hallucinatory search noise.',
    bn: 'প্রোডাকশন অনুসন্ধান ফলাফল নির্বাচন কৌশল আয়ত্ত করুন: ভেক্টর স্কোরের ক্রমবিন্যাস, O(N log K) জটিলতার মিন-হিপ টপ-কে নির্বাচন, ৫ টি নথিতে ০.৭৫ মানের ন্যূনতম কোয়ালিটি বার প্রয়োগ এবং অপ্রাসঙ্গিক তথ্যের নয়েজ দূরীকরণ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'two-knives-retrieval-heading',
      text: {
        en: 'The Dual Knives of Retrieval: Count Ceilings vs Quality Floors',
        bn: 'ফলাফল নির্বাচনের ২ টি মাপকাঠি: পরিমাণের সীমা বনাম মানের সীমা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Ranking candidate vectors is only the first half of retrieval; the second half is deciding where to cut the list. Suppose an algorithm scores 5 candidate documents: D1 (0.91), D2 (0.62), D3 (0.83), D4 (0.44), and D5 (0.77). Sorting high-to-low produces the order: D1 (0.91), D3 (0.83), D5 (0.77), D2 (0.62), D4 (0.44). A rigid Top-2 cutoff keeps exactly 2 documents (D1 and D3). However, a quality threshold bar of 0.75 qualifies 3 documents (D1, D3, and D5). Combining both guarantees relevance.',
        bn: 'ভেক্টরগুলোর সাদৃশ্য স্কোর সাজানো অনুসন্ধানের কেবল প্রথম অংশ; দ্বিতীয় অংশ হলো তালিকার ঠিক কোন স্থানে কাটতে হবে তা নির্ধারণ করা। ধরুন একটি অ্যালগরিদম ৫ টি নথির সাদৃশ্য মূল্যায়ন করল: D১ (০.৯১), D২ (০.৬২), D৩ (০.৮৩), D৪ (০.৪৪) এবং D৫ (০.৭৭)। বড় থেকে ছোট সাজালে ক্রমটি দাঁড়ায়: D১ (০.৯১), D৩ (০.৮৩), D৫ (০.৭৭), D২ (০.৬২), D৪ (০.৪৪)। একটি কঠোর টপ-২ (Top-2) সীমা ঠিক ২ টি নথি (D১ এবং D৩) বাছাই করে। পক্ষান্তরে ০.৭৫ মানের একটি ন্যূনতম কোয়ালিটি বার ৩ টি নথিকে (D১, D৩ এবং D৫) যোগ্য হিসেবে গ্রহণ করে। এই ২ টি কৌশলের সমন্বয়ই সর্বোচ্চ প্রাসঙ্গিকতা নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ranked candidate documents demonstrating the contrast between a Top-2 count limit and a 0.75 threshold bar.',
        bn: 'চিত্র ১: ক্রমবিন্যাসকৃত নথি যেখানে টপ-২ পরিমাণের সীমা এবং ০.৭৫ মানের ন্যূনতম থ্রেশহোল্ড বারের তুলনা দেখানো হয়েছে।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RANKING SELECTION: TOP-K COUNT VS THRESHOLD QUALITY BAR</text>
  
  <!-- Left Side: Document Score Bars -->
  <g transform="translate(60, 60)">
    <!-- D1 -->
    <text x="0" y="32" fill="#f8fafc" font-size="12" font-family="monospace" font-weight="bold">D1</text>
    <rect x="35" y="16" width="364" height="24" rx="4" fill="#10b981" />
    <text x="410" y="33" fill="#4ade80" font-size="12" font-family="monospace" font-weight="bold">0.91 ★</text>

    <!-- D3 -->
    <text x="0" y="72" fill="#f8fafc" font-size="12" font-family="monospace" font-weight="bold">D3</text>
    <rect x="35" y="56" width="332" height="24" rx="4" fill="#10b981" />
    <text x="378" y="73" fill="#4ade80" font-size="12" font-family="monospace" font-weight="bold">0.83 ★</text>

    <!-- D5 -->
    <text x="0" y="112" fill="#f8fafc" font-size="12" font-family="monospace" font-weight="bold">D5</text>
    <rect x="35" y="96" width="308" height="24" rx="4" fill="#38bdf8" />
    <text x="354" y="113" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">0.77 ●</text>

    <!-- Threshold Cut Line at 0.75 (x = 300 + 35 = 335) -->
    <line x1="335" y1="5" x2="335" y2="215" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6 4" />
    <text x="335" y="235" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Quality Bar 0.75</text>

    <!-- D2 -->
    <text x="0" y="152" fill="#94a3b8" font-size="12" font-family="monospace">D2</text>
    <rect x="35" y="136" width="248" height="24" rx="4" fill="#475569" />
    <text x="295" y="153" fill="#94a3b8" font-size="12" font-family="monospace">0.62 ✗</text>

    <!-- D4 -->
    <text x="0" y="192" fill="#94a3b8" font-size="12" font-family="monospace">D4</text>
    <rect x="35" y="176" width="176" height="24" rx="4" fill="#475569" />
    <text x="220" y="193" fill="#94a3b8" font-size="12" font-family="monospace">0.44 ✗</text>
  </g>

  <!-- Right Side: Cut Comparison Cards -->
  <g transform="translate(560, 75)">
    <!-- Card 1: Top-2 -->
    <rect width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
    <text x="20" y="28" fill="#4ade80" font-size="13" font-family="sans-serif" font-weight="bold">Count Limit: Top-2 ★</text>
    <text x="20" y="50" fill="#cbd5e1" font-size="11" font-family="monospace">Retains: [D1, D3]</text>
    <text x="20" y="70" fill="#94a3b8" font-size="10" font-family="sans-serif">Fixed count; risks omitting D5 (0.77)</text>

    <!-- Card 2: Bar 0.75 -->
    <rect y="110" width="240" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
    <text x="20" y="138" fill="#38bdf8" font-size="13" font-family="sans-serif" font-weight="bold">Quality Floor: Bar 0.75 ●</text>
    <text x="20" y="160" fill="#cbd5e1" font-size="11" font-family="monospace">Retains: [D1, D3, D5]</text>
    <text x="20" y="180" fill="#94a3b8" font-size="10" font-family="sans-serif">Rejects noise; keeps all good items</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'heap-efficiency-heading',
      text: {
        en: 'Algorithmic Efficiency: Full Array Sorting vs Min-Heap Selection',
        bn: 'অ্যালগরিদমের দক্ষতা: সম্পূর্ণ অ্যারে সাজানো বনাম মিন-হিপ নির্বাচন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In databases storing 1000000 vectors, sorting the entire array by similarity score on every query is a catastrophic bottleneck running in O(N log N) time. Production search engines utilize a bounded Min-Heap of fixed size K. The heap inspects candidates in a single pass in O(N log K) time. When retrieving K = 5 items from 1000000 vectors, O(N log 5) executes over 8 times faster than sorting the entire corpus, reducing CPU load drastically.',
        bn: '১০০০০০০ ভেক্টর বিশিষ্ট একটি ডেটাবেসে প্রতিটি অনুসন্ধানের জন্য পুরো অ্যারেকে সাজানো একটি মারাত্মক অপচয় যা O(N log N) সময় নেয়। প্রোডাকশন সার্চ ইঞ্জিনগুলো K আকারের একটি নিয়ন্ত্রিত মিন-হিপ (Min-Heap) ডেটা স্ট্রাকচার ব্যবহার করে। এই হিপ এক টানে O(N log K) সময়ে সেরা ফলাফল নির্বাচন করে। যখন ১০০০০০০ নথি থেকে K = ৫ টি আইটেম বাছাই করতে হয়, তখন O(N log ৫) পদ্ধতি পুরো অ্যারে সাজানোর চেয়ে ৮ গুণেরও বেশি দ্রুত গতিতে কাজ সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of Top-K ranking with threshold quality filtering.',
        bn: 'থ্রেশহোল্ড কোয়ালিটি ফিল্টারিং সহ টপ-কে র‍্যাংকিংয়ের TypeScript কোড।'
      },
      code: `export interface ScoredDocument {
  id: string;
  score: number;
}

export function retrieveTopKWithThreshold(
  candidates: ScoredDocument[],
  k: number,
  threshold: number
): ScoredDocument[] {
  // 1. Filter out candidate noise falling below quality floor
  const qualified = candidates.filter(doc => doc.score >= threshold);

  // 2. Sort remaining candidates descending by score
  qualified.sort((a, b) => b.score - a.score);

  // 3. Keep Top-K slice
  return qualified.slice(0, k);
}

// 5 candidate documents scored against a query
const candidateDocs: ScoredDocument[] = [
  { id: 'D1', score: 0.91 },
  { id: 'D2', score: 0.62 },
  { id: 'D3', score: 0.83 },
  { id: 'D4', score: 0.44 },
  { id: 'D5', score: 0.77 }
];

// Test 1: Rigid Top-2 without threshold filter
const strictTop2 = [...candidateDocs].sort((a, b) => b.score - a.score).slice(0, 2);
console.log('Strict Top-2 IDs:', strictTop2.map(d => d.id)); // ["D1", "D3"]

// Test 2: Threshold floor at 0.75 with K = 3
const filteredResults = retrieveTopKWithThreshold(candidateDocs, 3, 0.75);
console.log('Threshold Qualified Count:', filteredResults.length); // 3
console.log('Filtered Qualified IDs:', filteredResults.map(d => d.id)); // ["D1", "D3", "D5"]`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Top-K Retrieval',
          def: {
            en: 'Retrieval strategy preserving exactly the K highest-scoring items from an evaluated candidate list.',
            bn: 'অনুসন্ধান কৌশল যা মূল্যায়িত তালিকা থেকে ঠিক K সংখ্যক সর্বোচ্চ স্কোর পাওয়া উপাদান সংগ্রহ করে।'
          }
        },
        {
          term: 'Similarity Threshold Floor',
          def: {
            en: 'Strict minimum similarity score required for a candidate document to qualify for inclusion in prompt context.',
            bn: 'ন্যূনতম সাদৃশ্য স্কোর যা কোনো নথিকে প্রম্পটের প্রেক্ষাপটে স্থান পাওয়ার জন্য অর্জন করা বাধ্যতামূলক।'
          }
        },
        {
          term: 'Min-Heap Selection',
          def: {
            en: 'Priority queue algorithm maintaining the K highest elements in O(N log K) time without full array sorting.',
            bn: 'প্রায়োরিটি কিউ অ্যালগরিদম যা সম্পূর্ণ অ্যারে সাজানো ছাড়াই O(N log K) সময়ে সেরা K উপাদান ধরে রাখে।'
          }
        },
        {
          term: 'Candidate Pruning',
          def: {
            en: 'Discarding low-confidence search results early in the pipeline to prevent hallucination in language models.',
            bn: 'মডেলের ভুল উত্তর তৈরি রোধ করতে পাইপলাইনের শুরুতেই দুর্বল অনুসন্ধান ফলাফলগুলোকে বাদ দেওয়ার প্রক্রিয়া।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rigid-top-k-vulnerability-ex1',
      kind: 'mcq',
      topic: 'rigid-top-k-failure-mode',
      question: {
        en: 'What dangerous failure mode occurs if a RAG pipeline relies solely on rigid Top-K without a quality threshold floor?',
        bn: 'কোয়ালিটি থ্রেশহোল্ড ছাড়া কোনো RAG পাইপলাইন যদি অন্ধভাবে কেবল টপ-কে (Top-K) এর ওপর নির্ভর করে, তবে কোন মারাত্মক ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'If a user enters an irrelevant query and all 5 candidates score terribly (e.g. 0.20), rigid Top-2 still feeds 2 irrelevant documents to the LLM, inducing hallucinations',
          bn: 'ব্যবহারকারী সম্পূর্ণ অপ্রাসঙ্গিক প্রশ্ন করলে এবং ৫ টি নথির সবগুলোর স্কোর খারাপ হলেও (যেমন ০.২০), সিস্টেম জোর করে ২ টি অপ্রাসঙ্গিক নথি মডেলে পাঠাবে যা ভুল উত্তর তৈরি করবে'
        },
        {
          en: 'The database server immediately deletes its operating system',
          bn: 'ডেটাবেস সার্ভার সাথে সাথে তার অপারেটিং সিস্টেম মুছে ফেলে'
        },
        {
          en: 'Top-K crashes if K is an even number',
          bn: 'K জোড় সংখ্যা হলে টপ-কে ক্র্যাশ করে'
        },
        {
          en: 'It forces the client browser to reload 1000 times',
          bn: 'এটি ব্রাউজারকে ১০০০ বার রিলোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Top-K always returns K items even if every item is unrelated garbage.',
        bn: 'সব নথি আজেবাজে হলেও টপ-কে অন্ধের মতো K সংখ্যক নথি ফিরিয়ে দেয়।'
      },
      explanation: {
        en: 'A similarity floor ensures that when no good match exists, 0 documents are returned rather than polluting the LLM prompt with noise.',
        bn: 'একটি থ্রেশহোল্ড নিশ্চিত করে যে ভালো মিল না থাকলে ০ টি নথি যাবে, যাতে মডেল অপ্রাসঙ্গিক তথ্য পেয়ে বিভ্রান্ত না হয়।'
      }
    },
    {
      id: 'min-heap-complexity-gain-ex2',
      kind: 'mcq',
      topic: 'heap-time-complexity-advantage',
      question: {
        en: 'Why is using a Min-Heap of size K = 5 vastly superior to running Array.prototype.sort() across 1000000 vectors?',
        bn: '১০০০০০০ ভেক্টরের ক্ষেত্রে Array.sort() চালানোর চেয়ে K = ৫ আকারের মিন-হিপ ব্যবহার করা কেন অনেক বেশি শ্রেয়?'
      },
      options: [
        {
          en: 'A min-heap processes items in O(N log K) time in a single pass without allocating massive sorted arrays, running over 8 times faster than O(N log N)',
          bn: 'মিন-হিপ অতিরিক্ত মেমোরি খরচ না করে এক টানে O(N log K) সময়ে কাজ সারে, যা O(N log N) এর চেয়ে ৮ গুণেরও বেশি দ্রুতগতিসম্পন্ন'
        },
        {
          en: 'Array.sort() can only sort 10 numbers at a time',
          bn: 'Array.sort() একসাথে কেবল ১০ টি সংখ্যা সাজাতে পারে'
        },
        {
          en: 'Min-heaps convert all numbers into binary strings',
          bn: 'মিন-হিপ সব সংখ্যাকে বাইনারি স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'Heaps run entirely inside client computer graphics cards',
          bn: 'হিপ সম্পূর্ণভাবে ক্লায়েন্টের গ্রাফিক্স কার্ডের ভেতর চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Log(5) is a tiny constant compared to Log(1000000).',
        bn: '১০০০০০০ এর লগের চেয়ে ৫ এর লগ বহুগুণ ছোট একটি সংখ্যা।'
      },
      explanation: {
        en: 'Maintaining a tiny heap of size K prunes unpromising candidates on the fly in single-pass O(N log K) time.',
        bn: 'ছোট আকারের হিপ ব্যবহারের মাধ্যমে অপ্রয়োজনীয় তথ্য সাথে সাথে বাদ দিয়ে এক টানে সেরা ফলাফল বাছাই করা যায়।'
      }
    },
    {
      id: 'threshold-cut-d5-inclusion-ex3',
      kind: 'mcq',
      topic: 'threshold-filtering-recall-protection',
      question: {
        en: 'In our 5-document scenario, why was document D5 (score 0.77) retained by the 0.75 threshold bar but dropped by the rigid Top-2 cutoff?',
        bn: 'আমাদের ৫ টি নথির ক্ষেত্রে D৫ (স্কোর ০.৭৭) কেন ০.৭৫ থ্রেশহোল্ডে রক্ষা পেল কিন্তু অনমনীয় টপ-২ কাটঅফে বাদ পড়ে গেল?'
      },
      options: [
        {
          en: 'D5 ranked 3rd (behind D1 and D3), so a limit of 2 discarded it despite possessing strong relevance well above the 0.75 quality bar',
          bn: 'D৫ ৩ য় অবস্থানে ছিল (D১ এবং D৩ এর পেছনে), ফলে ২ এর সীমার কারণে ০.৭৫ বারের বেশি ভালো মান থাকা সত্ত্বেও তা বাদ পড়ে গিয়েছিল'
        },
        {
          en: 'Because D5 was written in a foreign language',
          bn: 'কারণ D৫ একটি বিদেশি ভাষায় লেখা ছিল'
        },
        {
          en: 'D5 was an empty text file',
          bn: 'D৫ একটি খালি টেক্সট ফাইল ছিল'
        },
        {
          en: 'The database index crashed on D5',
          bn: 'D৫ এর সময় ডেটাবেস ইনডেক্স ক্র্যাশ করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'D5 had high similarity (0.77), but a strict count of 2 had no room for a third qualified candidate.',
        bn: 'D৫ এর মান ভালো (০.৭৭) ছিল, কিন্তু মাত্র ২ টি আসন থাকায় তৃতীয় যোগ্য প্রার্থী বাদ পড়েছিল।'
      },
      explanation: {
        en: 'Rigid counts artificially truncate relevant candidates; threshold floors protect recall for all qualifying matches.',
        bn: 'নির্দিষ্ট পরিমাণের সীমা ভালো প্রার্থীকে অযথা বাদ দিতে পারে; থ্রেশহোল্ড বার যোগ্য সব তথ্যকে রক্ষা করে।'
      }
    },
    {
      id: 'ann-approximate-nearest-neighbors-ex4',
      kind: 'mcq',
      topic: 'approximate-nearest-neighbors-ann',
      question: {
        en: 'When scaling to billions of vectors where exact brute-force search is impossible, what algorithmic paradigm do vector databases employ?',
        bn: 'কোটি কোটি ভেক্টরের বিশাল ডেটাবেসে যেখানে প্রতিটি ভেক্টর ধরে পরীক্ষা করা অসম্ভব, সেখানে কোন আধুনিক পদ্ধতি ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Approximate Nearest Neighbors (ANN) using graphs (such as HNSW) or inverted file clustering (IVF) to trade 1% recall for 100x speedups',
          bn: 'অ্যাপ্রক্সিমেট নিয়ারেস্ট নেইবার্স (ANN) যেমন HNSW গ্রাফ বা IVF ক্লাস্টারিং, যা মাত্র ১% নির্ভুলতা ছেড়ে দিয়ে ১০০ গুণ বেশি গতি এনে দেয়'
        },
        {
          en: 'Deleting 99 percent of the vectors from storage',
          bn: 'স্টোরেজ থেকে ৯৯ শতাংশ ভেক্টর মুছে ফেলা'
        },
        {
          en: 'Asking the user to guess the correct document ID',
          bn: 'ব্যবহারকারীকে সঠিক নথির আইডি অনুমান করতে বলা'
        },
        {
          en: 'Converting all text into Morse code',
          bn: 'সমস্ত টেক্সটকে মোর্স কোডে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'HNSW (Hierarchical Navigable Small World) navigates graph highways to find close neighbors in sub-linear time.',
        bn: 'HNSW গ্রাফ হাইওয়ের মাধ্যমে খুব অল্প পদক্ষেপে দ্রুততম সময়ে নিকটবর্তী ভেক্টর খুঁজে বের করে।'
      },
      explanation: {
        en: 'ANN indices traverse geometric graph structures (HNSW) to achieve sub-millisecond Top-K retrieval across massive corpora.',
        bn: 'ANN ইনডেক্স জ্যামিতিক গ্রাফ ব্যবহার করে কোটি কোটি নথির ভেতর থেকেও মিলিসেকেন্ডের মধ্যে সেরা ফলাফল উদ্ধার করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-topk-retrieval',
    title: {
      en: 'Top-K Nearest Neighbor Retrieval Quiz',
      bn: 'টপ-কে নিকটতম প্রতিবেশী অনুসন্ধান কুইজ'
    },
    questions: [
      {
        id: 'quiz-dynamic-k-selection',
        kind: 'mcq',
        topic: 'dynamic-k-adaptation',
        question: {
          en: 'Why do sophisticated RAG production systems implement dynamic K rather than a static constant K = 5?',
          bn: 'উন্নত RAG সিস্টেমে কেন একটি নির্দিষ্ট K = ৫ এর বদলে পরিবর্তনশীল ডাইনামিক K ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Simple factual queries need only 1 precise chunk, while complex multi-faceted research queries require 8 to 10 context chunks to answer fully',
            bn: 'সহজ প্রশ্নের জন্য কেবল ১ টি নিখুঁত খণ্ডই যথেষ্ট, আর জটিল গবেষণাধর্মী প্রশ্নের পূর্ণাঙ্গ উত্তরের জন্য ৮ থেকে ১০ টি খণ্ডের প্রেক্ষাপট প্রয়োজন'
          },
          {
            en: 'Because K can only change when the operating system reboots',
            bn: 'কারণ অপারেটিং সিস্টেম রিবুট না করা পর্যন্ত K এর মান বদলানো যায় না'
          },
          {
            en: 'Static K values cause computer screens to flicker',
            bn: 'নির্দিষ্ট K মান কম্পিউটারের স্ক্রিন কাঁপাতে শুরু করে'
          },
          {
            en: 'Dynamic K is required by the JavaScript language specification',
            bn: 'জাভাস্ক্রিপ্ট ভাষার নিয়ম অনুযায়ী ডাইনামিক K ব্যবহার করা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Match context window consumption to the informational complexity of the question.',
          bn: 'প্রশ্নের জটিলতা অনুযায়ী প্রেক্ষাপটের আকার বাড়ানো বা কমানো বুদ্ধিমানের কাজ।'
        },
        explanation: {
          en: 'Adapting K to query intent prevents context starvation on hard tasks while saving token budget on straightforward lookups.',
          bn: 'প্রশ্নের ধরন বুঝে K নির্ধারণ করলে সহজ কাজে টোকেন সাশ্রয় হয় এবং কঠিন কাজের জন্য পর্যাপ্ত তথ্য নিশ্চিত থাকে।'
        }
      },
      {
        id: 'quiz-score-distribution-calibration',
        kind: 'mcq',
        topic: 'similarity-score-calibration',
        question: {
          en: 'Why cannot a fixed 0.75 threshold floor be universally applied across different embedding models without recalibration?',
          bn: 'নতুন কোনো এমবেডিং মডেলে যাওয়ার সময় পুনরায় পরিমাপ না করে কেন সরাসরি ০.৭৫ থ্রেশহোল্ড প্রয়োগ করা যায় না?'
        },
        options: [
          {
            en: 'Different embedding models exhibit different score distribution densities; a 0.75 score in one model might correspond to 0.85 in another',
            bn: 'ভিন্ন ভিন্ন এমবেডিং মডেলের স্কোরের ঘনত্বের বিন্যাস ভিন্ন হয়; একটি মডেলে যা ০.৭৫ অন্য মডেলে তা ০.৮৫ এর সমান হতে পারে'
          },
          {
            en: 'Because some models only generate prime numbers',
            bn: 'কারণ কিছু মডেল কেবল মৌলিক সংখ্যা তৈরি করতে পারে'
          },
          {
            en: 'Models trained on Thursdays have inverted scores',
            bn: 'বৃহস্পতিবার প্রশিক্ষিত মডেলগুলোর স্কোর উল্টো হয়'
          },
          {
            en: 'Thresholds only work in the English language',
            bn: 'থ্রেশহোল্ড কেবল ইংরেজি ভাষার ক্ষেত্রেই কাজ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cosine score distributions vary based on loss function and embedding dimension.',
          bn: 'মডেলের প্রশিক্ষণ ও দূরত্বের সূত্রের ওপর ভিত্তি করে স্কোরের বিন্যাস পরিবর্তিত হয়।'
        },
        explanation: {
          en: 'Score thresholds must be empirically calibrated per model using domain validation benchmark sets.',
          bn: 'প্রতিটি নতুন মডেল ব্যবহারের পূর্বে টেস্ট ডেটাসেট দিয়ে তার জন্য উপযুক্ত থ্রেশহোল্ড মান নির্ধারণ করে নিতে হয়।'
        }
      },
      {
        id: 'quiz-maximal-marginal-relevance-mmr',
        kind: 'mcq',
        topic: 'maximal-marginal-relevance-mmr',
        question: {
          en: 'What specific problem does Maximal Marginal Relevance (MMR) solve during Top-K document selection?',
          bn: 'টপ-কে নথি বাছাইয়ের সময় Maximal Marginal Relevance (MMR) পদ্ধতিটি কোন নির্দিষ্ট সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It penalizes redundancy, selecting chunks that are highly relevant to the query while maximizing diversity among the selected results',
            bn: 'এটি তথ্যের পুনরাবৃত্তি কমিয়ে দেয়, অর্থাৎ প্রশ্নের সাথে প্রাসঙ্গিক কিন্তু নিজেদের মধ্যে ভিন্ন ভিন্ন তথ্যের বৈচিত্র্যপূর্ণ খণ্ড বাছাই করে'
          },
          {
            en: 'It accelerates internet broadband bandwidth by 50 percent',
            bn: 'এটি ইন্টারনেট ব্রডব্যান্ডের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'It automatically translates search results into binary code',
            bn: 'এটি সমস্ত অনুসন্ধান ফলাফলকে বাইনারি কোডে রূপান্তর করে'
          },
          {
            en: 'It deletes documents that have more than 100 characters',
            bn: 'এটি ১০০ অক্ষরের বেশি বড় নথিগুলোকে মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'MMR balances relevance to the query against diversity among chosen documents.',
          bn: 'MMR প্রশ্নের সাথে প্রাসঙ্গিকতা এবং নিজেদের মধ্যকার বৈচিত্র্যের মধ্যে সুন্দর ভারসাম্য রাখে।'
        },
        explanation: {
          en: 'MMR prevents returning 5 near-identical paraphrases, ensuring diverse perspective coverage in retrieved context.',
          bn: 'MMR একই কথার ৫টি নকল খণ্ড আসার বদলে একই বিষয়ের ৫টি ভিন্ন আঙ্গিকের তথ্য তুলে ধরে।'
        }
      },
      {
        id: 'quiz-metadata-prefiltering',
        kind: 'mcq',
        topic: 'metadata-filtering-vector-search',
        question: {
          en: 'In enterprise vector databases, what is the architectural advantage of combining metadata pre-filtering with Top-K vector retrieval?',
          bn: 'এন্টারপ্রাইজ ভেক্টর ডেটাবেসে মেটাডেটা প্রি-ফিল্টারিংয়ের সাথে টপ-কে ভেক্টর অনুসন্ধানের সমন্বয় করার সুবিধা কী?'
        },
        options: [
          {
            en: 'It restricts the vector search space strictly to authorized tenant records (e.g. tenantId: "org-100"), guaranteeing zero cross-tenant data leakage',
            bn: 'এটি ভেক্টর অনুসন্ধানকে কেবল অনুমোদিত প্রতিষ্ঠানের তথ্যের মধ্যে সীমাবদ্ধ রাখে (যেমন tenantId: "org-100"), ফলে তথ্য ফাঁসের ঝুঁকি শূন্যে নামে'
          },
          {
            en: 'It changes the color of server LED lights to green',
            bn: 'এটি সার্ভারের বাতির রঙ সবুজ করে দেয়'
          },
          {
            en: 'It doubles the font size of all database records',
            bn: 'এটি সমস্ত ডেটাবেস রেকর্ডের ফন্ট সাইজ দ্বিগুণ করে'
          },
          {
            en: 'Metadata filtering is only allowed on personal laptop computers',
            bn: 'মেটাডেটা ফিল্টারিং কেবল ব্যক্তিগত ল্যাপটপেই চালানোর অনুমতি আছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hard tenancy isolation ensures enterprise security and compliance.',
          bn: 'প্রতিষ্ঠানের নিরাপত্তা ও গোপনীয়তা বজায় রাখতে মেটাডেটা ফিল্টার অপরিহার্য।'
        },
        explanation: {
          en: 'Metadata pre-filtering guarantees multi-tenant security and slashes candidate space before performing approximate vector search.',
          bn: 'মেটাডেটা ফিল্টার অন্য প্রতিষ্ঠানের ডেটা সম্পূর্ণ আলাদা রেখে নিরাপত্তা নিশ্চিত করে এবং দ্রুততম সার্চ উপহার দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'embedding-capstone',
    title: {
      en: 'Production Vector Pipeline, Latency Optimization & End-to-End Retrieval',
      bn: 'প্রোডাকশন ভেক্টর পাইপলাইন, লেটেন্সি অপ্টিমাইজেশন এবং এন্ড-টু-এন্ড অনুসন্ধান'
    }
  }
};
