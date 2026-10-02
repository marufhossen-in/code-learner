import type { Lesson } from '../../../lib/types';

export const SemanticSearchLesson: Lesson = {
  slug: 'semantic-search',
  tech: 'embeddings',
  title: {
    en: 'Semantic Search vs Lexical Keyword Matching',
    bn: 'শব্দার্থিক অনুসন্ধান বনাম সাধারণ কিওয়ার্ড ম্যাচিং'
  },
  summary: {
    en: 'Bridge the gap between spelling and meaning: contrast sparse BM25 lexical keyword matching with dense vector retrieval, analyze the vocabulary mismatch problem across 3 sample documents, evaluate threshold barriers at 0.80 cosine, and build hybrid search pipelines.',
    bn: 'বানান এবং ভাবার্থের মধ্যকার ব্যবধান দূর করুন: সাধারণ BM25 কিওয়ার্ড ম্যাচিংয়ের সাথে ঘন ভেক্টর অনুসন্ধানের তুলনা, ৩ টি নথির মাধ্যমে সমার্থক শব্দের সমস্যা বিশ্লেষণ, ০.৮০ কোসাইন থ্রেশহোল্ড মূল্যায়ন এবং হাইব্রিড অনুসন্ধান পাইপলাইন তৈরি।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'vocabulary-mismatch-heading',
      text: {
        en: 'The Vocabulary Mismatch Problem: When Spelling Hides Meaning',
        bn: 'শব্দভাণ্ডারের অসামঞ্জস্যের সমস্যা: যখন বানান ভাবার্থকে লুকিয়ে ফেলে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional search engines index literal character tokens. When a user submits the query "cheap beds", lexical keyword matching inspects documents for the exact strings "cheap" or "beds". If an article is titled "affordable hotels" or "budget lodging deals", lexical algorithms record 0 matching words and fail to retrieve it. Dense vector semantic search converts words into conceptual coordinates, recognizing that "affordable" and "budget" share intense geometric affinity with "cheap".',
        bn: 'চিরাচরিত সার্চ ইঞ্জিনগুলো লেখার অবিকল অক্ষরের ওপর ভিত্তি করে সূচি তৈরি করে। যখন কোনো ব্যবহারকারী "cheap beds" লিখে অনুসন্ধান করেন, তখন সাধারণ কিওয়ার্ড ব্যবস্থা নথিতে "cheap" বা "beds" শব্দের অবিকল বানান খোঁজে। কোনো লেখার শিরোনাম যদি "affordable hotels" বা "budget lodging deals" হয়, তবে সাধারণ সার্চ সেখানে ০ টি সাধারণ শব্দের মিল পায় এবং তা খুঁজে দিতে সম্পূর্ণ ব্যর্থ হয়। পক্ষান্তরে ঘন ভেক্টর নির্ভর শব্দার্থিক অনুসন্ধান শব্দের অর্থকে জ্যামিতিক স্থানাঙ্কে রূপান্তর করে বুঝতে পারে যে "affordable" এবং "budget" শব্দের ভাবার্থ "cheap" শব্দের অত্যন্ত কাছাকাছি।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between keyword word counts and dense vector cosine similarity across 3 documents.',
        bn: 'চিত্র ১: ৩ টি নথিতে সাধারণ কিওয়ার্ডের শব্দের সংখ্যা বনাম ঘন ভেক্টর কোসাইন সাদৃশ্যের তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KEYWORD MATCHING VS VECTOR SEMANTIC RETRIEVAL</text>
  <text x="420" y="52" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">Query: "cheap beds" | Target Bar: 0.80 Cosine Similarity</text>
  
  <!-- Document 1 -->
  <g transform="translate(40, 80)">
    <rect width="760" height="60" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="20" y="35" fill="#f8fafc" font-size="13" font-family="sans-serif" font-weight="bold">Doc 1: "affordable hotels"</text>
    
    <!-- Lexical score -->
    <rect x="360" y="18" width="140" height="26" rx="4" fill="#450a0a" stroke="#ef4444" />
    <text x="430" y="35" fill="#fca5a5" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">0 Words (Miss ✗)</text>
    
    <!-- Semantic score -->
    <rect x="540" y="18" width="180" height="26" rx="4" fill="#064e3b" stroke="#10b981" />
    <text x="630" y="35" fill="#86efac" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Cosine: 0.92 (Hit ✓)</text>
  </g>

  <!-- Document 2 -->
  <g transform="translate(40, 155)">
    <rect width="760" height="60" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="20" y="35" fill="#f8fafc" font-size="13" font-family="sans-serif" font-weight="bold">Doc 2: "budget lodging deals"</text>
    
    <!-- Lexical score -->
    <rect x="360" y="18" width="140" height="26" rx="4" fill="#450a0a" stroke="#ef4444" />
    <text x="430" y="35" fill="#fca5a5" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">0 Words (Miss ✗)</text>
    
    <!-- Semantic score -->
    <rect x="540" y="18" width="180" height="26" rx="4" fill="#064e3b" stroke="#10b981" />
    <text x="630" y="35" fill="#86efac" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Cosine: 0.89 (Hit ✓)</text>
  </g>

  <!-- Document 3 -->
  <g transform="translate(40, 230)">
    <rect width="760" height="60" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="20" y="35" fill="#f8fafc" font-size="13" font-family="sans-serif" font-weight="bold">Doc 3: "cheap beds for sale"</text>
    
    <!-- Lexical score -->
    <rect x="360" y="18" width="140" height="26" rx="4" fill="#064e3b" stroke="#10b981" />
    <text x="430" y="35" fill="#86efac" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">2 Words (Hit ✓)</text>
    
    <!-- Semantic score -->
    <rect x="540" y="18" width="180" height="26" rx="4" fill="#064e3b" stroke="#10b981" />
    <text x="630" y="35" fill="#86efac" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Cosine: 0.95 (Hit ✓)</text>
  </g>

  <!-- Summary banner -->
  <text x="420" y="318" fill="#facc15" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Keywords Recall: 1 of 3 (33%) | Vector Recall: 3 of 3 (100%) above 0.80</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'hybrid-search-heading',
      text: {
        en: 'The Hybrid Solution: Combining BM25 Lexical with Dense Embeddings',
        bn: 'হাইব্রিড সমাধান: BM25 কিওয়ার্ডের সাথে ঘন এমবেডিংয়ের সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While dense vector embeddings excel at capturing conceptual paraphrases, they struggle with exact alphanumeric entity lookups, such as searching for serial code "SKU-4491" or specific software error messages. Modern production search architectures resolve this by implementing Hybrid Search. The system queries both a sparse BM25 inverted index and a dense vector index concurrently, merging the ranking lists using Reciprocal Rank Fusion (RRF) with a standard smoothing constant of 60.',
        bn: 'ঘন ভেক্টর এমবেডিংস সমার্থক ভাবার্থ বুঝতে পারদর্শী হলেও নির্দিষ্ট পণ্য কোড (যেমন "SKU-4491") বা বিশেষ সফটওয়্যার এরর মেসেজ খোঁজার ক্ষেত্রে দুর্বলতা দেখায়। আধুনিক প্রোডাকশন আর্কিটেকচারে এর সমাধানে হাইব্রিড সার্চ প্রয়োগ করা হয়। এই ব্যবস্থায় একটি সাধারণ BM25 ইনভার্টেড ইনডেক্স এবং একটি ঘন ভেক্টর ইনডেক্স উভয় স্থানে একসাথে অনুসন্ধান চালানো হয় এবং ৬০ এর মতো একটি আদর্শ স্মুথিং ধ্রুবক ব্যবহার করে রেসিপ্রোকাল র‍্যাংক ফিউশন (RRF) সূত্রের মাধ্যমে সেরা তালিকা প্রস্তুত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript comparison of lexical keyword counting versus cosine similarity across 3 documents.',
        bn: '৩ টি নথিতে সাধারণ কিওয়ার্ডের মিল বনাম কোসাইন সাদৃশ্য পরীক্ষার TypeScript কোড।'
      },
      code: `interface SearchDocument {
  id: string;
  text: string;
  cosineScore: number;
}

export function evaluateSearchRecall(query: string, documents: SearchDocument[], threshold: number = 0.80) {
  const queryTokens = query.toLowerCase().split(' ');

  let lexicalHits = 0;
  let semanticHits = 0;

  for (const doc of documents) {
    // 1. Lexical word overlap check
    const docWords = doc.text.toLowerCase().split(' ');
    const sharedWords = queryTokens.filter(word => docWords.includes(word)).length;
    if (sharedWords > 0) {
      lexicalHits++;
    }

    // 2. Dense vector cosine check against threshold
    if (doc.cosineScore >= threshold) {
      semanticHits++;
    }
  }

  const lexicalRecall = (lexicalHits / documents.length) * 100;
  const semanticRecall = (semanticHits / documents.length) * 100;

  return { lexicalHits, semanticHits, lexicalRecall, semanticRecall };
}

// 3 candidate documents responding to query: "cheap beds"
const candidateDocs: SearchDocument[] = [
  { id: 'doc-1', text: 'affordable hotels with breakfast', cosineScore: 0.92 },
  { id: 'doc-2', text: 'budget lodging deals in city', cosineScore: 0.89 },
  { id: 'doc-3', text: 'cheap beds for sale today', cosineScore: 0.95 }
];

const results = evaluateSearchRecall('cheap beds', candidateDocs, 0.80);

console.log('Lexical Keyword Hits:', results.lexicalHits, 'out of', candidateDocs.length); // 1 out of 3
console.log('Lexical Recall Percentage:', results.lexicalRecall.toFixed(1) + '%');            // 33.3%
console.log('Semantic Vector Hits:', results.semanticHits, 'out of', candidateDocs.length); // 3 out of 3
console.log('Semantic Recall Percentage:', results.semanticRecall.toFixed(1) + '%');          // 100.0%`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Semantic Search',
          def: {
            en: 'Information retrieval method matching queries to documents based on conceptual intent and geometric vector proximity.',
            bn: 'তথ্য উদ্ধারের আধুনিক পদ্ধতি যা অবিকল বানানের বদলে অর্থগত উদ্দেশ্য এবং ভেক্টরের জ্যামিতিক দূরত্বের ভিত্তিতে ফলাফল খুঁজে আনে।'
          }
        },
        {
          term: 'Vocabulary Mismatch',
          def: {
            en: 'Search limitation where user query words differ syntactically from document terms despite sharing identical meaning.',
            bn: 'অনুসন্ধানের সাধারণ সমস্যা যেখানে একই অর্থ প্রকাশ করা সত্ত্বেও ব্যবহারকারীর শব্দ এবং নথির শব্দের বানানে পার্থক্য থাকে।'
          }
        },
        {
          term: 'Lexical BM25',
          def: {
            en: 'Probabilistic term-frequency ranking algorithm matching literal character keywords across an inverted text index.',
            bn: 'শব্দভিত্তিক ইনভার্টেড ইনডেক্স অ্যালগরিদম যা নথিতে শব্দের উপস্থিতির হারের ওপর ভিত্তি করে ফলাফল সাজায়।'
          }
        },
        {
          term: 'Hybrid Search',
          def: {
            en: 'Search architecture executing both sparse lexical and dense vector queries, merging ranks with Reciprocal Rank Fusion.',
            bn: 'একীভূত অনুসন্ধান ব্যবস্থা যা কিওয়ার্ড সার্চ ও ভেক্টর সার্চ একসাথে চালিয়ে উভয়ের সম্মিলিত সেরা তালিকা প্রস্তুত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'lexical-miss-root-cause-ex1',
      kind: 'mcq',
      topic: 'vocabulary-mismatch-cause',
      question: {
        en: 'Why did the lexical keyword search fail to retrieve the document "affordable hotels" when querying for "cheap beds"?',
        bn: '"cheap beds" লিখে খোঁজার সময় সাধারণ কিওয়ার্ড সার্চ কেন "affordable hotels" লেখা নথিটি উদ্ধার করতে ব্যর্থ হয়েছিল?'
      },
      options: [
        {
          en: 'There were 0 shared character words between the query and the document, triggering a lexical miss despite identical conceptual meaning',
          bn: 'প্রশ্ন এবং নথির মধ্যে ০ টি সাধারণ শব্দের অবিকল মিল ছিল, যার কারণে অর্থ এক হওয়া সত্ত্বেও কিওয়ার্ড সিস্টেমে তা ধরা পড়েনি'
        },
        {
          en: 'Because hotel rooms are physically larger than beds',
          bn: 'কারণ হোটেলের ঘর বিছানার চেয়ে আকারে বড় হয়'
        },
        {
          en: 'The document was encrypted with a secret military algorithm',
          bn: 'নথিটি একটি গোপন সামরিক অ্যালগরিদম দিয়ে লক করা ছিল'
        },
        {
          en: 'The user search query contained too many punctuation marks',
          bn: 'ব্যবহারকারীর অনুসন্ধানে অতিরিক্ত বিরামচিহ্ন ছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lexical search requires exact character matches; synonyms share zero characters.',
        bn: 'কিওয়ার্ড সার্চে অক্ষরের অবিকল মিল থাকা বাধ্যতামূলক; সমার্থক শব্দের বানানে মিল থাকে না।'
      },
      explanation: {
        en: 'Lexical algorithms evaluate surface tokens; without literal token overlap, relevance is unrecognized.',
        bn: 'কিওয়ার্ড অ্যালগরিদম কেবল শব্দের বাহ্যিক রূপ দেখে; অক্ষরের মিল না থাকলে এটি ভাবার্থ বুঝতে পারে না।'
      }
    },
    {
      id: 'vector-recall-advantage-ex2',
      kind: 'mcq',
      topic: 'semantic-search-recall-superiority',
      question: {
        en: 'In our 3-document test, why did dense vector retrieval achieve a 100% recall (3 out of 3 hits) above the 0.80 threshold?',
        bn: 'আমাদের ৩ টি নথির পরীক্ষায় ০.৮০ থ্রেশহোল্ডের ওপরে ভেক্টর সার্চ কীভাবে ১০০% রিকল (৩ টির মধ্যে ৩ টিতেই সাফল্য) অর্জন করল?'
      },
      options: [
        {
          en: 'Neural embedding models project synonyms ("affordable", "budget", "cheap") into nearby spatial clusters, generating cosine scores above 0.80',
          bn: 'নিউরাল মডেলগুলো সমার্থক শব্দগুলোকে ("affordable", "budget", "cheap") ভেক্টর স্পেসে কাছাকাছি স্থানে রাখে, ফলে সবগুলোতেই ০.৮০ এর বেশি স্কোর আসে'
        },
        {
          en: 'Because vector search queries only 1 word at a time',
          bn: 'কারণ ভেক্টর সার্চ একসাথে কেবল ১ টি শব্দ খুঁজতে পারে'
        },
        {
          en: 'The database server was configured with 1000 gigabytes of video RAM',
          bn: 'সার্ভারে ১০০০ গিগাবাইট ভিডিও র‍্যাম লাগানো ছিল'
        },
        {
          en: 'Vector search randomly marks every document as relevant',
          bn: 'ভেক্টর সার্চ চোখ বন্ধ করে সব নথিকে প্রাসঙ্গিক ঘোষণা করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Geometric proximity captures shared semantic relationships regardless of vocabulary differences.',
        bn: 'শব্দের পার্থক্য থাকা সত্ত্বেও জ্যামিতিক নৈকট্য মূল অর্থগত মিলকে নিখুঁতভাবে প্রকাশ করে।'
      },
      explanation: {
        en: 'Dense vectors model contextual meaning, ensuring synonymous concepts cluster tightly in high-dimensional space.',
        bn: 'ঘন ভেক্টর অর্থের গভীরতা বিবেচনা করে, যার ফলে সমার্থক ভাবধারাগুলো বহুমাত্রিক স্থানে খুব কাছাকাছি অবস্থান করে।'
      }
    },
    {
      id: 'when-vectors-struggle-ex3',
      kind: 'mcq',
      topic: 'dense-retrieval-edge-cases',
      question: {
        en: 'For which of the following query types does pure dense vector semantic search frequently perform worse than lexical BM25?',
        bn: 'নিচের কোন ধরনের প্রশ্নের ক্ষেত্রে বিশুদ্ধ ভেক্টর সার্চের চেয়ে সাধারণ কিওয়ার্ড সার্চ (BM25) বেশি কার্যকর ফলাফল দেয়?'
      },
      options: [
        {
          en: 'Exact alphanumeric product serials (e.g. "SKU-4491"), software error codes ("ERR_502_BAD_GATEWAY"), or rare personal names',
          bn: 'সুনির্দিষ্ট সিরিয়াল নম্বর (যেমন "SKU-4491"), সফটওয়্যার এরর কোড ("ERR_502_BAD_GATEWAY") বা বিরল ব্যক্তির নাম'
        },
        {
          en: 'Broad thematic questions about philosophical concepts',
          bn: 'দার্শনিক ধারণা সম্পর্কিত বিস্তৃত তাত্ত্বিক প্রশ্ন'
        },
        {
          en: 'Paraphrased conversational customer support inquiries',
          bn: 'গ্রাহকের ঘুরিয়ে বলা স্বাভাবিক ভাষার সাহায্য প্রার্থনা'
        },
        {
          en: 'Summarizing the primary theme of a literary novel',
          bn: 'কোনো উপন্যাসের মূল ভাব সংক্ষেপে বর্ণনা করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Arbitrary serial numbers have no continuous semantic gradient or synonyms.',
        bn: 'পণ্যের কোড বা ক্রমিক নম্বরের কোনো ভাবার্থ বা সমার্থক শব্দ থাকে না।'
      },
      explanation: {
        en: 'Exact codes lack semantic distribution; sparse inverted indices match exact character tokens far more reliably.',
        bn: 'কোড বা সিরিয়াল নম্বরে কোনো অর্থগত বিস্তার থাকে না; তাই অবিকল অক্ষর মেলানোর জন্য কিওয়ার্ড সার্চই সেরা।'
      }
    },
    {
      id: 'rrf-fusion-formula-ex4',
      kind: 'mcq',
      topic: 'reciprocal-rank-fusion-mechanics',
      question: {
        en: 'What is the primary architectural purpose of the constant 60 inside the Reciprocal Rank Fusion (RRF) formula 1 / (60 + rank)?',
        bn: 'Reciprocal Rank Fusion (RRF) সূত্রের 1 / (60 + rank) অংশে ৬০ ধ্রুবকটি ব্যবহারের প্রধান উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It acts as a smoothing parameter that dampens the disproportionate dominance of a top-1 rank over lower-ranked high-consensus items',
          bn: 'এটি একটি স্মুথিং প্যারামিটার হিসেবে কাজ করে যা কেবল প্রথম অবস্থানের অহেতুক প্রভাব কমিয়ে উভয় তালিকার সম্মিলিত সম্মতিকে প্রাধান্য দেয়'
        },
        {
          en: 'It forces the search query to pause for exactly 60 seconds',
          bn: 'এটি অনুসন্ধানকে ঠিক ৬০ সেকেন্ড অপেক্ষা করতে বাধ্য করে'
        },
        {
          en: 'It deletes all search results beyond rank 60',
          bn: 'এটি ৬০ নম্বরের পরের সমস্ত অনুসন্ধান ফলাফল মুছে ফেলে'
        },
        {
          en: 'It represents the 60 minutes in an hour',
          bn: 'এটি ১ ঘণ্টার ৬০ মিনিটকে নির্দেশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The constant prevents rank 1 from completely overshadowing rank 2 and 3.',
        bn: 'এই সংখ্যাটি প্রথম পদের অতিরিক্ত আধিপত্য কমিয়ে দ্বিতীয় ও তৃতীয় পদের সাথে ভারসাম্য রাখে।'
      },
      explanation: {
        en: 'A smoothing constant of 60 prevents extreme outliers in one index from overpowering solid consensus across multiple retrieval engines.',
        bn: '৬০ ধ্রুবকটি ব্যবহারের ফলে কোনো এক তালিকার প্রথম স্থান এককভাবে জেতার বদলে উভয় তালিকায় থাকা নির্ভরযোগ্য ফলাফলগুলো শীর্ষে উঠে আসে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-semantic-search',
    title: {
      en: 'Semantic Search vs Lexical Keyword Matching Quiz',
      bn: 'শব্দার্থিক অনুসন্ধান বনাম কিওয়ার্ড ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-sparse-vs-dense-vectors',
        kind: 'mcq',
        topic: 'sparse-vs-dense-embeddings',
        question: {
          en: 'What is the structural difference between a sparse vector (e.g. BM25 or SPLADE) and a dense vector (e.g. OpenAI text-embedding-3)?',
          bn: 'একটি স্পার্স ভেক্টর (যেমন BM25 বা SPLADE) এবং একটি ডেনস ভেক্টরের (যেমন OpenAI text-embedding-3) মধ্যে মূল গঠনগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'Sparse vectors have thousands of dimensions where mostly zeros exist except for active vocabulary words, whereas dense vectors contain continuous non-zero values in all 1536 dimensions',
            bn: 'স্পার্স ভেক্টরে হাজার হাজার মাত্রার মধ্যে কেবল নির্দিষ্ট শব্দের ঘরে মান থাকে বাকি সব শূন্য হয়, আর ডেনস ভেক্টরে ১৫৩৬ টি মাত্রার প্রতিটিতেই বাস্তব মান থাকে'
          },
          {
            en: 'Sparse vectors can only be stored on floppy disks',
            bn: 'স্পার্স ভেক্টর কেবল ফ্লপি ডিস্কে জমা রাখা যায়'
          },
          {
            en: 'Dense vectors only contain the numbers 0 and 1',
            bn: 'ডেনস ভেক্টরে কেবল ০ এবং ১ সংখ্যা থাকে'
          },
          {
            en: 'There is zero difference; they are synonymous terms',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একই অর্থ বহন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sparse means mostly empty zeros; dense means packed with continuous values.',
          bn: 'স্পার্স মানে বেশিরভাগ ঘরই শূন্য; ডেনস মানে সব ঘরেই সংখ্যা ভরা থাকে।'
        },
        explanation: {
          en: 'Sparse vectors align with vocabulary indices; dense vectors pack latent semantic relationships into compact continuous coordinates.',
          bn: 'স্পার্স ভেক্টর অভিধানের শব্দের ওপর ভিত্তি করে তৈরি হয়, আর ডেনস ভেক্টর ভাষার গভীর ভাবার্থকে ঘন স্থানাঙ্কে রূপান্তর করে।'
        }
      },
      {
        id: 'quiz-reranking-pipeline-architecture',
        kind: 'mcq',
        topic: 'two-stage-retrieval-reranking',
        question: {
          en: 'Why do production retrieval architectures utilize a Cross-Encoder Reranker after initial vector retrieval?',
          bn: 'প্রাথমিক ভেক্টর অনুসন্ধানের পর প্রোডাকশন সিস্টেমে কেন একটি ক্রস-এনকোডার রি-র‍্যাংকার (Reranker) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Bi-encoder embeddings retrieve candidate Top-50 chunks quickly, and a cross-encoder scores full query-document cross-attention for razor-sharp precision on the final Top-5',
            bn: 'ভেক্টর সার্চ দ্রুত সেরা ৫০টি সম্ভাব্য খণ্ড উদ্ধার করে, আর ক্রস-এনকোডার প্রশ্ন ও নথির গভীর পারস্পরিক মনোযোগ বিশ্লেষণ করে চূড়ান্ত সেরা ৫টি নিখুঁতভাবে বাছাই করে'
          },
          {
            en: 'To translate all search results into Latin',
            bn: 'সমস্ত অনুসন্ধানের ফলাফলকে ল্যাটিন ভাষায় রূপান্তর করার জন্য'
          },
          {
            en: 'To make the vector database run out of memory',
            bn: 'ভেক্টর ডেটাবেসের সমস্ত মেমোরি খালি করে দেওয়ার উদ্দেশ্যে'
          },
          {
            en: 'Cross-encoders turn off the computer monitor after 5 seconds',
            bn: 'ক্রস-এনকোডার ৫ সেকেন্ড পর কম্পিউটারের মনিটর বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fast retrieval first (bi-encoder), deep precision second (cross-encoder).',
          bn: 'প্রথমে দ্রুত বাছাই (Bi-encoder), তারপর সূক্ষ্ম মূল্যায়ন (Cross-encoder)।'
        },
        explanation: {
          en: 'Two-stage retrieval pairs high-throughput bi-encoder vector search with compute-intensive cross-encoder attention for optimal ranking.',
          bn: 'দ্বি-স্তরীয় অনুসন্ধান ব্যবস্থা গতি এবং নির্ভুলতা উভয়ের সেরা সুবিধা নিশ্চিত করে চূড়ান্ত ফলাফলকে সবচেয়ে মানসম্পন্ন করে তোলে।'
        }
      },
      {
        id: 'quiz-query-expansion-technique',
        kind: 'mcq',
        topic: 'hypothetical-document-embeddings-hyde',
        question: {
          en: 'How does Hypothetical Document Embeddings (HyDE) improve semantic search retrieval accuracy?',
          bn: 'Hypothetical Document Embeddings (HyDE) কৌশলটি কীভাবে শব্দার্থিক অনুসন্ধানের মান উন্নত করে?'
        },
        options: [
          {
            en: 'An LLM generates a hypothetical answer to the query, and the embedding of that hypothetical answer is used to search the vector database, aligning doc-to-doc space',
            bn: 'একটি মডেল প্রশ্নের একটি কাল্পনিক উত্তর তৈরি করে, এবং সেই কাল্পনিক উত্তরের এমবেডিং দিয়ে ডেটাবেসে খোঁজ করা হয়, ফলে উত্তর-থেকে-উত্তরের নিখুঁত মিল ঘটে'
          },
          {
            en: 'It deletes all user queries from terminal history',
            bn: 'এটি টার্মিনাল হিস্ট্রি থেকে সমস্ত প্রশ্ন মুছে ফেলে'
          },
          {
            en: 'It converts queries into hexadecimal numbers',
            bn: 'এটি প্রশ্নকে হেক্সাডেসিমেল সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'HyDE is a physical keyboard key that must be pressed',
            bn: 'HyDE হলো কীবোর্ডের একটি বাটন যা চাপতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Matching document space to document space bridges query-document stylistic asymmetry.',
          bn: 'প্রশ্নের সাথে নথি না মিলিয়ে উত্তরের সাথে নথি মেলালে অনুসন্ধান অনেক বেশি কার্যকর হয়।'
        },
        explanation: {
          en: 'HyDE bridges the conceptual asymmetry between short queries and detailed answers by searching in document-document embedding space.',
          bn: 'HyDE ছোট প্রশ্ন ও বড় উত্তরের মধ্যকার ভাষাগত পার্থক্য দূর করে কাল্পনিক উত্তরের মাধ্যমে সঠিক নথি খুঁজে আনে।'
        }
      },
      {
        id: 'quiz-multilingual-embedding-search',
        kind: 'mcq',
        topic: 'cross-lingual-semantic-retrieval',
        question: {
          en: 'What occurs when querying an English document archive with a Bengali query using a multilingual embedding model?',
          bn: 'বহুভাষিক এমবেডিং মডেল ব্যবহার করে ইংরেজি নথিপত্রের আর্কাইভে বাংলায় প্রশ্ন করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The model maps the Bengali query and English documents to similar geometric coordinates based on shared concept meaning, achieving cross-lingual retrieval',
            bn: 'মডেলটি বাংলা প্রশ্ন এবং ইংরেজি নথির অভিন্ন ভাবার্থের ওপর ভিত্তি করে তাদের একই জ্যামিতিক অবস্থানে রাখে, ফলে সফল বহুভাষিক অনুসন্ধান সম্ভব হয়'
          },
          {
            en: 'The server crashes with a character encoding error',
            bn: 'সার্ভার ক্যারেক্টার এনকোডিং এরর দিয়ে বন্ধ হয়ে যায়'
          },
          {
            en: 'All English documents are permanently erased',
            bn: 'সমস্ত ইংরেজি নথি স্থায়ীভাবে মুছে যায়'
          },
          {
            en: 'The system forces the user to retake an English proficiency exam',
            bn: 'সিস্টেম ব্যবহারকারীকে নতুন করে ইংরেজি পরীক্ষা দিতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multilingual models project concepts across different languages into a shared vector space.',
          bn: 'বহুভাষিক মডেলগুলো বিভিন্ন ভাষার একই ধারণাকে একটি অভিন্ন ভেক্টর স্থানে ধারণ করে।'
        },
        explanation: {
          en: 'Joint multilingual embeddings map cross-lingual semantics into shared geometric clusters, enabling seamless translation-free search.',
          bn: 'বহুভাষিক এমবেডিং কোনো অনুবাদ ছাড়াই বিভিন্ন ভাষার মধ্যকার গভীর অর্থগত মিল সরাসরি খুঁজে বের করতে সক্ষম।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'norms-angles',
    title: {
      en: 'Vector Normalization, Unit Norms & High-Dimensional Angles',
      bn: 'ভেক্টর স্বাভাবিকীকরণ, একক নর্ম এবং বহুমাত্রিক কোণ'
    }
  }
};
