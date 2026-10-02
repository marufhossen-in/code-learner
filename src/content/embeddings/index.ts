import type { Hub } from '../../lib/types';
import { MeetEmbeddingsLesson } from './lessons/meet-embeddings';
import { CosineSimilarityLesson } from './lessons/cosine-similarity';
import { ChunkingTextLesson } from './lessons/chunking-text';
import { SemanticSearchLesson } from './lessons/semantic-search';
import { NormsAnglesLesson } from './lessons/norms-angles';
import { DistanceMetricsLesson } from './lessons/distance-metrics';
import { TopkRetrievalLesson } from './lessons/topk-retrieval';
import { EmbeddingCapstoneLesson } from './lessons/embedding-capstone';

export const embeddingsHub: Hub = {
  slug: 'embeddings',
  name: 'Vector Embeddings',
  icon: '🧮',
  tagline: {
    en: 'Transform human language into high-dimensional geometry: calculate cosine similarity, chunk unstructured text, and build sub-millisecond semantic search retrieval pipelines.',
    bn: 'মানুষের ভাষাকে বহুমাত্রিক জ্যামিতিতে রূপান্তর করুন: কোসাইন সাদৃশ্য গণনা, টেক্সট খণ্ডকরণ এবং মিলিসেকেন্ডের নিচে শব্দার্থিক অনুসন্ধান পাইপলাইন নির্মাণ।'
  },
  intro: {
    en: 'Vector embeddings form the mathematical bedrock of modern artificial intelligence and neural search. By translating unstructured text into dense floating-point arrays across 1536 or 3072 dimensions, semantic meaning is encoded as spatial direction. This comprehensive 8-lesson track guides you from dot products and cosine similarity to sliding-window text chunking, metric spaces (Euclidean L2, Manhattan L1, inner product), and production Top-K nearest-neighbor ranking systems.',
    bn: 'ভেক্টর এমবেডিংস আধুনিক কৃত্রিম বুদ্ধিমত্তা এবং নিউরাল অনুসন্ধানের গাণিতিক ভিত্তি। টেক্সটকে ১৫৩৬ বা ৩০৭২ মাত্রার ঘন ফ্লোটিং-পয়েন্ট ভেক্টরে রূপান্তর করার মাধ্যমে শব্দের অর্থকে জ্যামিতিক অবস্থানে কোড করা হয়। এই পূর্ণাঙ্গ ৮ পাঠের ট্র্যাকে ডট গুণন ও কোসাইন সাদৃশ্য থেকে শুরু করে স্লাইডিং উইন্ডো চাংকিং, দূরত্ব পরিমাপ পদ্ধতি (ইউক্লিডিয়ান L2, ম্যানহাটন L1, ইনার প্রোডাক্ট) এবং প্রোডাকশন টপ-কে (Top-K) অনুসন্ধান ব্যবস্থা ধাপে ধাপে শেখানো হয়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Vector Fundamentals & Similarity Measurement',
        bn: 'ধাপ ১: ভেক্টর মৌলিক ধারণা এবং সাদৃশ্য পরিমাপ'
      },
      items: [
        {
          en: 'Introduction & Core Fundamentals: What are Vector Embeddings? Dense float arrays and semantic distances',
          bn: 'ভূমিকা এবং মৌলিক ভিত্তি: ভেক্টর এমবেডিংস কী? ঘন ফ্লোট অ্যারে এবং অর্থগত দূরত্ব'
        },
        {
          en: 'Cosine Similarity & Dot Product: Directional alignment, angle theta, and score normalization between -1.0 and 1.0',
          bn: 'কোসাইন সাদৃশ্য এবং ডট গুণন: দিকগত সামঞ্জস্য, থিটা কোণ এবং -১.০ থেকে ১.০ এর মধ্যে স্কোর স্বাভাবিকীকরণ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Document Processing & Semantic Retrieval',
        bn: 'ধাপ ২: নথি প্রক্রিয়াকরণ এবং শব্দার্থিক অনুসন্ধান'
      },
      items: [
        {
          en: 'Text Chunking Strategies: Sliding windows, token boundary preservation, and 15% overlap rules',
          bn: 'টেক্সট চাংকিং কৌশল: স্লাইডিং উইন্ডো, টোকেন সীমানা সংরক্ষণ এবং ১৫% ওভারল্যাপের নিয়ম'
        },
        {
          en: 'Semantic Search vs Lexical Matching: Eliminating vocabulary mismatch and handling synonyms across 3 queries',
          bn: 'শব্দার্থিক অনুসন্ধান বনাম সাধারণ কিওয়ার্ড ম্যাচিং: ৩ টি কোয়েরিতে প্রতিশব্দ ও ভাবার্থের সঠিক মূল্যায়ন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: High-Dimensional Geometry & Metric Spaces',
        bn: 'ধাপ ৩: বহুমাত্রিক জ্যামিতি এবং দূরত্বের পরিমাপ'
      },
      items: [
        {
          en: 'Vector Normalization & Unit Norms: L2 magnitude scaling, unit hyperspheres, and computational simplifications',
          bn: 'ভেক্টর স্বাভাবিকীকরণ এবং একক নর্ম: L2 মান রূপান্তর, ইউনিট হাইপারস্ফিয়ার এবং গাণিতিক সরলীকরণ'
        },
        {
          en: 'Distance Metrics Compared: Euclidean L2, Manhattan L1, and Dot Product trade-offs for 1536-dimensional vectors',
          bn: 'দূরত্ব পরিমাপ পদ্ধতির তুলনা: ১৫৩৬ মাত্রার ভেক্টরে ইউক্লিডিয়ান L2, ম্যানহাটন L1 এবং ডট গুণনের তুলনা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: Production Ranking & Scalable Systems',
        bn: 'ধাপ ৪: প্রোডাকশন র‍্যাংকিং এবং স্কেলেবল সিস্টেম'
      },
      items: [
        {
          en: 'Top-K Nearest Neighbor Retrieval: Max-heap selection, similarity score filtering, and recall optimization',
          bn: 'টপ-কে (Top-K) নিকটতম প্রতিবেশী অনুসন্ধান: ম্যাক্স-হিপ নির্বাচন, সাদৃশ্য স্কোর ফিল্টারিং এবং রিকল অপ্টিমাইজেশন'
        },
        {
          en: 'Production Vector Pipeline Capstone: End-to-end ingestion, sub-10ms search latency, and benchmark evaluation',
          bn: 'প্রোডাকশন ভেক্টর পাইপলাইন ক্যাপস্টোন: শুরু থেকে শেষ পর্যন্ত প্রক্রিয়াকরণ, ১০ মিলিসেকেন্ডের নিচে লেটেন্সি এবং মূল্যায়ন'
        }
      ]
    }
  ],
  lessons: [
    MeetEmbeddingsLesson,
    CosineSimilarityLesson,
    ChunkingTextLesson,
    SemanticSearchLesson,
    NormsAnglesLesson,
    DistanceMetricsLesson,
    TopkRetrievalLesson,
    EmbeddingCapstoneLesson
  ],
  projects: [
    {
      title: {
        en: 'Project 1: Multilingual Semantic Customer Support Search',
        bn: 'প্রজেক্ট ১: বহুভাষিক শব্দার্থিক কাস্টমার সাপোর্ট অনুসন্ধান'
      },
      brief: {
        en: 'Build a production semantic search engine indexing 500 support articles across 1536 dimensions. Compare lexical keyword recall against cosine vector search, verifying that paraphrased queries achieve at least 90% retrieval accuracy without exact word matching.',
        bn: '১৫৩৬ মাত্রায় ৫০০টি সাপোর্ট আর্টিকেলের সূচি তৈরি করে একটি প্রোডাকশন সার্চ ইঞ্জিন তৈরি করুন। সাধারণ কিওয়ার্ড অনুসন্ধানের সাথে কোসাইন ভেক্টর সার্চের তুলনা করে প্রমাণ করুন যে অবিকল শব্দ না থাকলেও অন্তত ৯০% ক্ষেত্রে সঠিক উত্তর উদ্ধার করা সম্ভব।'
      }
    },
    {
      title: {
        en: 'Project 2: End-to-End RAG Chunking and Retrieval Gateway',
        bn: 'প্রজেক্ট ২: সম্পূর্ণ RAG চাংকিং এবং অনুসন্ধান গেটওয়ে'
      },
      brief: {
        en: 'Construct a resilient document processing pipeline that parses 100 enterprise policy PDFs, applies 400-token sliding window chunking with 50-token overlap, normalizes embeddings, and retrieves Top-5 nearest chunks in under 12 milliseconds.',
        bn: 'একটি নির্ভরযোগ্য ডকুমেন্ট প্রসেসিং পাইপলাইন তৈরি করুন যা ১০০টি প্রাতিষ্ঠানিক পিডিএফ পার্স করে, ৫০ টোকেন ওভারল্যাপ সহ ৪০০ টোকেনের স্লাইডিং উইন্ডো চাংকিং করে এবং ১২ মিলিসেকেন্ডের মধ্যে সেরা ৫টি খণ্ড উদ্ধার করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Pre-normalize all vector embeddings to unit length (L2 norm = 1.0) during ingestion so cosine similarity reduces to a fast dot product.',
      bn: 'ইনজেস্ট করার সময় সমস্ত ভেক্টরকে একক দৈর্ঘ্যে (L2 নর্ম = ১.০) স্বাভাবিক করে নিন, যাতে কোসাইন সাদৃশ্য হিসাব করা একটি সাধারণ ডট গুণনে পরিণত হয়।'
    },
    {
      en: 'Preserve 10% to 20% token overlap between consecutive chunks to prevent contextual fractures across sentence boundaries.',
      bn: 'বাক্যের ধারাবাহিকতা বজায় রাখতে পরপর দুটি চাঙ্কের মধ্যে ১০% থেকে ২০% টোকেন ওভারল্যাপ রাখুন।'
    },
    {
      en: 'Combine dense vector search with sparse BM25 lexical search into a hybrid pipeline to handle both conceptual meaning and exact alphanumeric codes.',
      bn: 'শব্দার্থিক ভাব এবং সুনির্দিষ্ট কোড বা ক্রমিক নম্বর খোঁজার জন্য ভেক্টর সার্চের সাথে BM25 কিওয়ার্ড সার্চ মিলিয়ে হাইব্রিড পাইপলাইন তৈরি করুন।'
    },
    {
      en: 'Filter candidate results with a minimum cosine similarity threshold (such as 0.75) before returning Top-K items to eliminate irrelevant hallucinations.',
      bn: 'অপ্রাসঙ্গিক তথ্য বাদ দিতে সেরা ফলাফল বাছাইয়ের পূর্বে অন্তত ০.৭৫ এর মতো একটি ন্যূনতম সাদৃশ্য ফিল্টার প্রয়োগ করুন।'
    },
    {
      en: 'Store raw document metadata and chunk offsets directly alongside vector IDs to avoid secondary database lookups during query serving.',
      bn: 'অনুসন্ধানের গতি বাড়াতে ভেক্টর আইডির সাথে সরাসরি টেক্সটের মেটাডেটা ও অফসেট সংরক্ষণ করুন, যাতে দ্বিতীয়বার অন্য ডেটাবেসে কল করতে না হয়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the mathematical relationship between the Dot Product and Cosine Similarity for normalized vectors?',
        bn: 'স্বাভাবিকীকৃত ভেক্টরের ক্ষেত্রে ডট গুণন এবং কোসাইন সাদৃশ্যের মধ্যে গাণিতিক সম্পর্ক কী?'
      },
      a: {
        en: 'Cosine similarity is defined as the dot product divided by the product of both Euclidean norms: dot(u, v) / (||u|| * ||v||). When both vectors are pre-normalized to unit length (||u|| = 1.0 and ||v|| = 1.0), the denominator becomes 1.0. Consequently, cosine similarity becomes mathematically identical to the inner dot product, enabling SIMD and GPU matrix multipliers to execute similarity searches with zero square root divisions.',
        bn: 'কোসাইন সাদৃশ্যের সূত্র হলো ডট গুণনকে উভয় ভেক্টরের ইউক্লিডিয়ান নর্মের গুণফল দিয়ে ভাগ করা: dot(u, v) / (||u|| * ||v||)। যখন উভয় ভেক্টর পূর্বে একক দৈর্ঘ্যে (||u|| = ১.০ এবং ||v|| = ১.০) রূপান্তর করা থাকে, তখন হর ১.০ হয়ে যায়। এর ফলে কোসাইন সাদৃশ্য সরাসরি ডট গুণনের সমান হয়, যা জিপিইউ বা প্রসেসরে কোনো বর্গমূল ছাড়াই অত্যন্ত দ্রুত গণনা করা সম্ভব করে।'
      }
    },
    {
      q: {
        en: 'Why do exact alphanumeric product codes (such as "SKU-9842") often fail when queried through pure dense vector embeddings?',
        bn: 'বিশুদ্ধ ভেক্টর অনুসন্ধানে সুনির্দিষ্ট পণ্য কোড (যেমন "SKU-9842") খোঁজার সময় প্রায়ই কেন আশানুরূপ ফল পাওয়া যায় না?'
      },
      a: {
        en: 'Dense embedding models are trained on continuous semantic relationships where synonyms and paraphrases share proximity. Arbitrary serial numbers, error codes, and alphanumeric IDs lack conceptual meaning; the model treats them as rare sub-word tokens with arbitrary embeddings. Production architectures solve this by implementing hybrid search, combining dense vector embeddings with sparse inverted index lexical retrieval (such as BM25 or Elasticsearch).',
        bn: 'ডেনস এমবেডিং মডেলগুলো শব্দের ভাবগত অর্থের ওপর প্রশিক্ষিত, যেখানে সমার্থক শব্দগুলো কাছাকাছি অবস্থান করে। কিন্তু ক্রমিক নম্বর বা পণ্যের কোডের কোনো ভাবার্থ থাকে না; মডেল এদের সাধারণ ভাঙা টোকেন হিসেবে দেখে। প্রোডাকশনে এর সমাধানে হাইব্রিড সার্চ ব্যবহার করা হয়, যেখানে ভেক্টর এমবেডিংয়ের পাশাপাশি BM25 বা ইলাস্টিকসার্চের মতো সঠিক কিওয়ার্ড সার্চ একত্রিত করা হয়।'
      }
    },
    {
      q: {
        en: 'How does chunk size affect retrieval precision and recall in enterprise Retrieval-Augmented Generation (RAG)?',
        bn: 'এন্টারপ্রাইজ RAG ব্যবস্থায় চাঙ্কের আকার কীভাবে অনুসন্ধানের যথার্থতা (Precision) এবং সামগ্রিকতা (Recall)-কে প্রভাবিত করে?'
      },
      a: {
        en: 'Small chunks (e.g. 100 to 200 tokens) yield high retrieval precision because the embedding captures a specific focused concept, but they risk losing broader contextual background. Conversely, excessively large chunks (e.g. 1000+ tokens) dilute semantic specificity into an averaged representation, increasing noise. Modern architectures balance this trade-off using 300 to 500 token chunks with 15% overlap, or employ parent-document retrieval where small chunks are searched to fetch the surrounding larger document context.',
        bn: 'ছোট আকারের চাঙ্ক (যেমন ১০০ থেকে ২০০ টোকেন) সুনির্দিষ্ট ধারণা ধরে রাখায় অনুসন্ধানের যথার্থতা বৃদ্ধি করে, তবে আশেপাশের প্রেক্ষাপট হারিয়ে যাওয়ার ঝুঁকি থাকে। পক্ষান্তরে ১০০০ টোকেনের বেশি বড় চাঙ্ক একাধিক বিষয়কে মিশিয়ে ভেক্টরের স্পষ্টতা নষ্ট করে ফেলে। আধুনিক ব্যবস্থায় ১৫% ওভারল্যাপ সহ ৩০০ থেকে ৫০০ টোকেনের ভারসাম্যপূর্ণ চাঙ্ক ব্যবহার করা হয় অথবা ছোট চাঙ্ক দিয়ে অনুসন্ধান চালিয়ে মূল বড় অনুচ্ছেদটি উদ্ধার করা হয়।'
      }
    },
    {
      q: {
        en: 'What is the "Curse of Dimensionality" and how does it impact distance metrics in high-dimensional embedding spaces?',
        bn: 'বহুমাত্রিক এমবেডিং স্পেসে "কার্স অব ডাইমেনশনালিটি" কী এবং এটি দূরত্বের পরিমাপকগুলোকে কীভাবে প্রভাবিত করে?'
      },
      a: {
        en: 'As dimensionality increases into hundreds or thousands of dimensions (e.g. 1536 dimensions), high-dimensional geometric space becomes exceedingly sparse. The ratio between the distance to the nearest neighbor and the distance to the farthest neighbor approaches 1.0 under standard Euclidean L2 metrics, making distance discriminability less distinct. In such spaces, directional orientation (Cosine Similarity) provides much sharper semantic separation than raw Cartesian distance.',
        bn: 'মাত্রা যখন শত শত বা হাজার হাজারে (যেমন ১৫৩৬ মাত্রায়) বৃদ্ধি পায়, তখন জ্যামিতিক স্থান অত্যন্ত শূন্য বা ফাঁকা হয়ে পড়ে। সাধারণ ইউক্লিডিয়ান L2 দূরত্বে নিকটতম ও দূরতম বিন্দুর দূরত্বের অনুপাত প্রায় ১.০ এর কাছাকাছি চলে আসে, ফলে বিন্দুর দূরত্ব আলাদা করা কঠিন হয়। এমন পরিস্থিতিতে সাধারণ রৈখিক দূরত্বের চেয়ে কৌণিক দিক বা কোসাইন সাদৃশ্য অনেক বেশি স্পষ্ট ও অর্থপূর্ণ পার্থক্য তৈরি করতে পারে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Enterprise Knowledge Bases: Semantic indexing across millions of technical documents enabling natural-language question answering.',
      bn: 'প্রাতিষ্ঠানিক জ্ঞানভাণ্ডার: লাখ লাখ কারিগরি নথির শব্দার্থিক সূচি তৈরি যা স্বাভাবিক ভাষার মাধ্যমে প্রশ্নোত্তর সুবিধা নিশ্চিত করে।'
    },
    {
      en: 'E-Commerce Recommendation Engines: Embedding user behavior history and catalog item descriptions to generate hyper-personalized suggestions.',
      bn: 'ই-কমার্স সুপারিশ ব্যবস্থা: ব্যবহারকারীর পছন্দ ও পণ্যের বিবরণ ভেক্টরে রূপান্তর করে ব্যক্তিগতকৃত কেনাকাটার প্রস্তাব তৈরি করা।'
    },
    {
      en: 'Near-Duplicate Detection & Deduplication: Comparing cosine similarity across petabyte-scale document archives to merge redundant data.',
      bn: 'নকল নথি শনাক্তকরণ: পেটাবাইট পরিমাপের নথিপত্রে কোসাইন সাদৃশ্য পরিমাপ করে অপ্রয়োজনীয় নকল ডেটা দূর করা।'
    },
    {
      en: 'Content Moderation & Safety Classifiers: Mapping user posts into policy embedding spaces to detect toxic intent and violations in real time.',
      bn: 'কনটেন্ট নিয়ন্ত্রণ ও সুরক্ষা: ব্যবহারকারীর পোস্টগুলোকে এমবেডিং স্পেসে তুলনা করে ক্ষতিকর বা অনাকাঙ্ক্ষিত মন্তব্য তাৎক্ষণিকভাবে শনাক্ত করা।'
    }
  ]
};
