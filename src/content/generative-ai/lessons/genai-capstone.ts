import type { Lesson } from '../../../lib/types';

export const GenaiCapstoneLesson: Lesson = {
  slug: 'genai-capstone',
  tech: 'generative-ai',
  title: {
    en: 'Generative AI Capstone — Production RAG Architecture and System Deployment',
    bn: 'জেনারেটিভ এআই সমাপনী প্রজেক্ট: প্রোডাকশন RAG আর্কিটেকচার ও ডিপ্লয়মেন্ট'
  },
  summary: {
    en: 'In this capstone lesson, you will unify every concept from the Generative AI curriculum into an end-to-end production Retrieval-Augmented Generation (RAG) system. You will connect subword tokenizers, Transformer self-attention decoders, joint vector embeddings, and multi-layered safety guardrails into a cohesive pipeline: Retrieve, Condition, Generate, Cite, and Gate. Master chunking strategies, dense vector cosine similarity search, prompt template formatting with explicit citations, and programmatic factual verification gates that guarantee zero ungrounded hallucinations before serving enterprise users.',
    bn: 'এই সমাপনী পাঠে আপনি জেনারেটিভ এআই কোর্সের সমস্ত প্রযুক্তিগত জ্ঞান একত্রিত করে একটি সম্পূর্ণ কার্যক্ষম প্রোডাকশন রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG) সিস্টেম নির্মাণ করবেন। এখানে সাবওয়ার্ড টোকেনাইজার, ট্রান্সফরমার সেলফ-অ্যাটেনশন ডিকোডার, জয়েন্ট ভেক্টর স্পেস এবং বহুস্তরী নিরাপত্তা প্রাচীরকে একটি সুসংহত পাইপলাইনে সংযুক্ত করা হয়েছে: রিট্রিভ, প্রম্পট কন্ডিশনিং, জেনারেশন, উদ্ধৃতি সংযোজন এবং গেটিং। সঠিক চাঙ্কিং কৌশল, ডেন্স ভেক্টর কোসাইন সিমিলারিটি সার্চ, প্রামাণ্য নথির উদ্ধৃতিযুক্ত প্রম্পট টেমপ্লেট এবং ফ্যাক্ট-চেকিং গেট প্রয়োগ করে কীভাবে এন্টারপ্রাইজ গ্রাহকদের জন্য নির্ভরযোগ্য এআই সার্ভিস তৈরি করতে হয় তা বিস্তারিতভাবে বিশ্লেষণ করা হয়েছে।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'enterprise-rag-pipeline-overview',
      text: {
        en: 'The Enterprise RAG Pipeline: From Questions to Verified Answers',
        bn: 'এন্টারপ্রাইজ RAG পাইপলাইন: প্রশ্ন থেকে প্রমাণিত সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy generative language models in business environments, you must connect the creativity of neural synthesis with the precision of verified private databases.',
        bn: 'যখন আপনি ব্যবসায়িক পরিবেশে জেনারেটিভ ল্যাঙ্গুয়েজ মডেল মোতায়েন করেন, তখন আপনাকে সৃজনশীল ভাষাগত দক্ষতার সাথে নিজস্ব ডেটাবেসের প্রামাণ্য তথ্যের নিখুঁত সমন্বয় করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A production Retrieval-Augmented Generation (RAG) system unifies all prior modules into a single deterministic architecture. First, an embedding model maps user queries into a vector database to retrieve the top 3 most relevant document chunks. Second, the system constructs a conditioned prompt that encloses retrieved evidence within strict XML delimiters. Third, an autoregressive Transformer generates an answer using low temperature (T = 0.2), strictly referencing the retrieved text with explicit bracketed citations. Fourth, an automated grounding gate evaluates the generated response: if citation coverage is below 80 percent, the system suppresses the completion and returns an honest fallback message.',
        bn: 'একটি প্রোডাকশন রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG) সিস্টেম পূর্ববর্তী সমস্ত প্রযুক্তিকে একটি একক কাঠামোতে একত্রিত করে। প্রথমত, একটি এমবেডিং মডেল ব্যবহারকারীর প্রশ্ন বিশ্লেষণ করে ভেক্টর ডেটাবেস থেকে শীর্ষ ৩টি সর্বাধিক প্রাসঙ্গিক নথির খণ্ড খুঁজে আনে। দ্বিতীয়ত, সিস্টেমটি একটি সুশৃঙ্খল প্রম্পট তৈরি করে যেখানে সংগৃহীত তথ্যগুলোকে স্পষ্ট এক্সএমএল ট্যাগের মধ্যে আবদ্ধ রাখা হয়। তৃতীয়ত, একটি অটোরিগ্রেসিভ ট্রান্সফরমার কম টেম্পারেচারে (T = ০.২) প্রতিটি তথ্যের পাশে ব্র্যাকেটে সূত্রের উল্লেখসহ উত্তর তৈরি করে। চতুর্থত, একটি স্বয়ংক্রিয় গ্রাউন্ডিং গেট উত্তরটি মূল্যায়ন করে: যদি তথ্যের উদ্ধৃতি কভারেজ ৮০ শতাংশের নিচে থাকে, তবে সিস্টেমটি উত্তরটি প্রদর্শন না করে বিনয়ের সাথে অপারগতা প্রকাশ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'retrieval-augmented-generation',
          def: {
            en: 'An enterprise architecture that queries external vector databases to inject factual evidence into prompt contexts before generation.',
            bn: 'এমন একটি স্থাপত্য যা বাহ্যিক ভেক্টর ডেটাবেস অনুসন্ধান করে উত্তরের পূর্বে প্রম্পটে বাস্তব প্রামাণ্য নথি যুক্ত করে।'
          }
        },
        {
          term: 'chunking-strategy',
          def: {
            en: 'The method of dividing large documents into overlapping semantic blocks optimized for vector embedding and retrieval precision.',
            bn: 'বড় নথিকে অর্থবহ ও পরিমিত খণ্ডে বিভক্ত করার কৌশল যা ভেক্টর অনুসন্ধানকে নিখুঁত করে তোলে।'
          }
        },
        {
          term: 'citation-attribution',
          def: {
            en: 'Explicitly anchoring each factual claim in a model output to the exact retrieved document chunk that proves it.',
            bn: 'মডেলের উত্তরের প্রতিটি তথ্যকে সংগৃহীত ডকুমেন্টের সুনির্দিষ্ট সূত্রের সাথে স্পষ্টভাবে সংযুক্ত করা।'
          }
        },
        {
          term: 'production-safety-gate',
          def: {
            en: 'An automated validation step that evaluates answer relevance and citation coverage, withholding responses below threshold.',
            bn: 'একটি স্বয়ংক্রিয় নিরাপত্তা পরীক্ষা যা উত্তরের প্রাসঙ্গিকতা ও সত্যতা যাচাই করে ব্যর্থ হলে উত্তর প্রদর্শন আটকে দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'four-stage-rag-table',
      text: {
        en: 'The 4-Stage Production RAG Architecture',
        bn: '৪-ধাপের প্রোডাকশন RAG আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each stage in the enterprise RAG architecture addresses a specific production failure mode, transforming raw neural generation into auditable corporate answers.',
        bn: 'এন্টারপ্রাইজ RAG আর্কিটেকচারের প্রতিটি স্তর নির্দিষ্ট ঝুঁকি মোকাবেলা করে অনির্ভরযোগ্য এআই উত্তরকে নির্ভরযোগ্য ব্যবসায়িক তথ্যে রূপান্তরিত করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pipeline Stage', bn: 'পাইপলাইনের ধাপ' },
        { en: 'Operational Role', bn: 'মূল দায়িত্ব' },
        { en: 'Production Threshold / Configuration', bn: 'প্রোডাকশন মানদণ্ড / কনফিগারেশন' },
        { en: 'Enterprise Failure Mitigated', bn: 'যে ঝুঁকি দূর হয়' }
      ],
      rows: [
        [
          { en: 'Stage 1: Dense Retrieval', bn: 'ধাপ ১: ডেন্স রিট্রিভাল' },
          { en: 'Encodes query and retrieves relevant chunks via cosine similarity', bn: 'প্রশ্ন বিশ্লেষণ করে কোসাইন দূরত্বের ভিত্তিতে তথ্য খোঁজে' },
          { en: 'Top-k = 3 chunks; Cosine similarity >= 0.70', bn: 'শীর্ষ k = ৩টি খণ্ড; কোসাইন সাদৃশ্য >= ০.৭০' },
          { en: 'Eliminates model knowledge cutoff and out-of-date information', bn: 'পুরনো তথ্য বা প্রশিক্ষণের মেয়াদের সীমাবদ্ধতা দূর করে' }
        ],
        [
          { en: 'Stage 2: Prompt Conditioning', bn: 'ধাপ ২: প্রম্পট কন্ডিশনিং' },
          { en: 'Assembles retrieved chunks into structured XML context delimiters', bn: 'সংগৃহীত তথ্যগুলোকে এক্সএমএল ট্যাগে সুশৃঙ্খলভাবে সাজায়' },
          { en: 'Context budget capped at 4000 tokens with strict safety delimiters', bn: '৪০০০ টোকেন বাজেট ও স্পষ্ট নিরাপত্তা সীমানা' },
          { en: 'Prevents prompt injection attacks and context window overflow', bn: 'প্রম্পট ইনজেকশন আক্রমণ এবং মেমরি উপচে পড়া রোধ করে' }
        ],
        [
          { en: 'Stage 3: Constrained Generation', bn: 'ধাপ ৩: নিয়ন্ত্রিত জেনারেশন' },
          { en: 'Autoregressively generates response restricted to provided context', bn: 'প্রদত্ত তথ্যের ওপর ভিত্তি করে নিয়ন্ত্রিত উত্তর তৈরি করে' },
          { en: 'Temperature = 0.2; Top-p = 0.90; Mandatory [Doc-ID] citations', bn: 'টেম্পারেচার = ০.২; বাধ্যতামূলক [Doc-ID] উদ্ধৃতি' },
          { en: 'Suppresses creative hallucination and unverified claims', bn: 'বানোয়াট হ্যালুসিনেশন ও ভিত্তিহীন গল্প তৈরি বন্ধ করে' }
        ],
        [
          { en: 'Stage 4: Factual Grounding Gate', bn: 'ধাপ ৪: ফ্যাক্ট চেকিং গেট' },
          { en: 'Validates that every generated sentence cites a retrieved source', bn: 'প্রতিটি বাক্যে সঠিক সূত্রের উল্লেখ আছে কিনা যাচাই করে' },
          { en: 'Citation coverage >= 80%; Automated fallback on failure', bn: 'উদ্ধৃতি কভারেজ >= ৮০%; ব্যর্থ হলে নিরাপদ বার্তা' },
          { en: 'Prevents false statements from reaching enterprise customers', bn: 'ভুল বা বিভ্রান্তিকর উত্তর গ্রাহকদের কাছে যাওয়া বন্ধ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-rag-code',
      text: {
        en: 'Executable End-to-End RAG Pipeline Simulation',
        bn: 'পূর্ণাঙ্গ RAG পাইপলাইনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements the complete 4-stage RAG architecture: embedding cosine retrieval, prompt conditioning, constrained generation with citations, and an automated factual grounding gate.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪-ধাপের পূর্ণাঙ্গ RAG আর্কিটেকচার বাস্তবায়ন করে: ভেক্টর সার্চ, প্রম্পট তৈরি, সূত্রের উদ্ধৃতিসহ উত্তর জেনারেশন এবং স্বয়ংক্রিয় গ্রাউন্ডিং গেট পরীক্ষা।'
      }
    },
    {
      type: 'code',
      code: `// Complete 4-stage Production RAG Pipeline simulation
interface DocumentChunk {
  id: string;
  title: string;
  vector: number[];
  content: string;
}

function calculateCosine(vecA: number[], vecB: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

const corporateKnowledgeBase: DocumentChunk[] = [
  {
    id: 'doc-1',
    title: 'Diffusion Mechanics',
    vector: [0.92, 0.35, 0.15],
    content: 'Diffusion models synthesize images by iteratively removing Gaussian noise over 50 steps.'
  },
  {
    id: 'doc-2',
    title: 'LoRA Adaptation',
    vector: [0.20, 0.90, 0.35],
    content: 'LoRA freezes foundation weights and trains low-rank adapter matrices.'
  },
  {
    id: 'doc-3',
    title: 'CLIP Multimodal',
    vector: [0.30, 0.40, 0.85],
    content: 'CLIP trains dual encoders on text-image pairs using contrastive loss.'
  }
];

// User query: "How do image diffusion models work?"
const queryEmbedding = [0.89, 0.38, 0.18];

// Stage 1: Dense Retrieval
const scoredChunks = corporateKnowledgeBase.map(chunk => ({
  ...chunk,
  similarity: Number(calculateCosine(queryEmbedding, chunk.vector).toFixed(3))
}));
scoredChunks.sort((a, b) => b.similarity - a.similarity);
const retrievedTopChunk = scoredChunks[0];

// Stage 2 & 3: Prompt Conditioning & Constrained Generation with Citation
const generatedAnswer =
  'Diffusion models synthesize images by removing Gaussian noise over 50 steps [' +
  retrievedTopChunk.id +
  '].';

// Stage 4: Factual Grounding Safety Gate
const hasValidCitation = generatedAnswer.includes(retrievedTopChunk.id);
const meetsSimilarityFloor = retrievedTopChunk.similarity >= 0.70;
const passesGroundingGate = hasValidCitation && meetsSimilarityFloor;

console.log('Retrieved document:', retrievedTopChunk.id, 'with similarity', retrievedTopChunk.similarity);
console.log('Generated answer:', generatedAnswer);
console.log('Grounding Gate:', passesGroundingGate ? 'PASSED (100% citation coverage)' : 'REJECTED');

// prints: Retrieved document: doc-1 with similarity 0.999
// prints: Generated answer: Diffusion models synthesize images by removing Gaussian noise over 50 steps [doc-1].
// prints: Grounding Gate: PASSED (100% citation coverage)`
    },
    {
      type: 'heading',
      id: 'continuous-rag-evals',
      text: {
        en: 'Continuous Evaluation and Production Observability',
        bn: 'চলমান মূল্যায়ন এবং প্রোডাকশন অবজার্ভেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Maintaining production RAG reliability requires continuous automated evaluation known as the RAG Triad: (1) Context Relevance measures whether retrieved chunks are truly pertinent to the query without distracting noise. (2) Groundedness verifies that every sentence in the generated output is factually anchored to the retrieved context. (3) Answer Relevance ensures the generated response directly answers the user original question. Modern engineering platforms implement automated LLM-as-a-judge frameworks (such as Ragas or TruLens) to score every production transaction in real time, alerting engineers when retrieval precision dips.',
        bn: 'প্রোডাকশনে RAG সিস্টেমের নির্ভরযোগ্যতা বজায় রাখতে "RAG ট্রায়াড" নামক তিনটি সূচকের ওপর চলমান নজরদারি প্রয়োজন: (১) কনটেক্সট রেলিভেন্স দেখে সংগৃহীত নথিগুলো অপ্রয়োজনীয় তথ্য ছাড়া প্রশ্নের সাথে কতটা প্রাসঙ্গিক। (২) গ্রাউন্ডেডনেস নিশ্চিত করে উত্তরের প্রতিটি বাক্য প্রদত্ত নথির ওপর প্রতিষ্ঠিত কি না। (৩) অ্যানসার রেলিভেন্স যাচাই করে উত্তরটি ব্যবহারকারীর মূল প্রশ্নের সঠিক সমাধান দিয়েছে কি না। আধুনিক ইঞ্জিনিয়ারিং প্ল্যাটফর্মগুলো স্বয়ংক্রিয় এআই মূল্যায়নকারী কাঠামোর (যেমন Ragas বা TruLens) সাহায্যে প্রতিটি উত্তর পর্যবেক্ষণ করে এবং কোনো ত্রুটি দেখা দিলে তাৎক্ষণিক সতর্কবার্তা পাঠায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'RAG bridges models to reality: Connecting LLMs to vector databases grounds neural creativity in corporate facts.',
          bn: 'বাস্তবের সাথে মডেলের সংযোগ: ভেক্টর ডেটাবেসের সাথে সংযুক্ত করে এআই-এর সৃষ্টিশীলতাকে বাস্তব তথ্যের ওপর প্রতিষ্ঠিত করা হয়।'
        },
        {
          en: 'Mandate bracketed citations: Every enterprise answer must explicitly cite the document chunk verifying its claims.',
          bn: 'উদ্ধৃতি থাকা বাধ্যতামূলক: প্রতিটি ব্যবসায়িক উত্তরের সাথে সংশ্লিষ্ট নথির স্পষ্ট সূত্রের উল্লেখ থাকা আবশ্যক।'
        },
        {
          en: 'Implement hard safety gates: If retrieval similarity or citation coverage falls below threshold, trigger an honest fallback.',
          bn: 'কঠোর নিরাপত্তা গেট প্রয়োগ: তথ্যের মিল বা উদ্ধৃতি পর্যাপ্ত না হলে উত্তর তৈরি আটকে দিয়ে নিরাপদ বার্তা প্রদান করুন।'
        },
        {
          en: 'Monitor the RAG Triad: Continuously evaluate Context Relevance, Groundedness, and Answer Relevance in production.',
          bn: 'RAG ট্রায়াড পর্যবেক্ষণ: প্রোডাকশনে কনটেক্সট প্রাসঙ্গিকতা, গ্রাউন্ডেডনেস এবং উত্তরের যথার্থতা নিয়মিত মূল্যায়ন করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gen-cap-ex1',
      kind: 'mcq',
      topic: 'rag-triad-components',
      question: {
        en: 'In production RAG evaluation frameworks, what three core dimensions comprise the "RAG Triad" used to measure pipeline health?',
        bn: 'প্রোডাকশন RAG মূল্যায়ন কাঠামোতে সিস্টেমের কার্যকারিতা পরিমাপকারী "RAG ট্রায়াড"-এর তিনটি মূল মাত্রা কী কী?'
      },
      options: [
        {
          en: 'Context Relevance (are retrieved chunks pertinent?), Groundedness (is the answer anchored in evidence?), and Answer Relevance (does the answer address the user query?)',
          bn: 'কনটেক্সট রেলিভেন্স (তথ্যগুলো প্রাসঙ্গিক কি না?), গ্রাউন্ডেডনেস (উত্তরটি প্রমাণের ওপর প্রতিষ্ঠিত কি না?) এবং অ্যানসার রেলিভেন্স (উত্তরটি প্রশ্নের সাথে সংগতিপূর্ণ কি না?)'
        },
        {
          en: 'Computer screen size, keyboard typing speed, and mouse click latency',
          bn: 'মনিটরের পর্দার আকার, কিবোর্ডে টাইপিংয়ের গতি এবং মাউসের ক্লিক লেটেন্সি'
        },
        {
          en: 'HTML color codes, CSS font weights, and JavaScript array length',
          bn: 'এইচটিএমএল কালার কোড, সিএসএস ফন্ট সাইজ এবং জাভাস্ক্রিপ্ট অ্যারের দৈর্ঘ্য'
        },
        {
          en: 'Database hard drive temperature, fan speed, and room humidity',
          bn: 'হার্ড ড্রাইভের তাপমাত্রা, কুলিং ফ্যানের গতি এবং ঘরের আর্দ্রতা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think: (1) Did we retrieve good stuff? (2) Did we stick to the retrieved stuff? (3) Did we actually answer the question?',
        bn: 'মনে রাখুন: (১) সঠিক তথ্য এনেছি কি? (২) তথ্যের ওপর ভিত্তি করে উত্তর লিখেছি কি? (৩) আসল প্রশ্নের জবাব দিয়েছি কি?'
      },
      explanation: {
        en: 'The RAG Triad isolates retrieval quality from generative synthesis fidelity, pinpointing the exact failure location in the pipeline.',
        bn: 'RAG ট্রায়াড তথ্য সংগ্রহের মান এবং উত্তর তৈরির নির্ভুলতাকে আলাদা করে পাইপলাইনের যেকোনো ত্রুটি তাৎক্ষণিক শনাক্ত করতে সাহায্য করে।'
      }
    },
    {
      id: 'gen-cap-ex2',
      kind: 'mcq',
      topic: 'insufficient-evidence-fallback-policy',
      question: {
        en: 'What action should a production enterprise RAG system take when the top-retrieved document chunk has a cosine similarity score below 0.60?',
        bn: 'একটি প্রোডাকশন RAG সিস্টেমে সংগৃহীত নথির সর্বোচ্চ কোসাইন সাদৃশ্য স্কোর যদি ০.৬০ এর নিচে হয়, তবে সিস্টেমের কোন পদক্ষেপ নেওয়া উচিত?'
      },
      options: [
        {
          en: 'Trigger an automated graceful fallback message stating that insufficient verified documentation exists, preventing ungrounded hallucinations from reaching the user',
          bn: 'স্বয়ংক্রিয়ভাবে একটি নিরাপদ বার্তা প্রদান করে জানানো যে পর্যালোচনার জন্য পর্যাপ্ত তথ্য নেই, যাতে কোনো বানোয়াট হ্যালুসিনেশন ব্যবহারকারীর কাছে না যায়'
        },
        {
          en: 'Invent a fictional story to entertain the user while waiting for new documents',
          bn: 'নতুন নথির অপেক্ষায় থাকা অবস্থায় ব্যবহারকারীকে খুশি করতে একটি কাল্পনিক গল্প তৈরি করা'
        },
        {
          en: 'Restart the entire server operating system immediately',
          bn: 'সার্ভারের পুরো অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট করা'
        },
        {
          en: 'Set model temperature to 5.0 to force random guessing',
          bn: 'টেম্পারেচার ৫.০ করে দিয়ে আন্দাজে অনুমানের সুযোগ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'A low similarity score means the knowledge base does not contain the answer. Guessing destroys enterprise trust.',
        bn: 'সাদৃশ্য কম থাকা মানে ডেটাবেসে এই প্রশ্নের উত্তর নেই। বানোয়াট উত্তর দেওয়া কোম্পানির বিশ্বাসযোগ্যতা নষ্ট করে।'
      },
      explanation: {
        en: 'Enforcing a strict similarity floor protects enterprise credibility by preferring explicit admission of ignorance over fabrication.',
        bn: 'একটি নির্দিষ্ট সাদৃশ্য সীমা বজায় রাখা নিশ্চিত করে যে ভুল তথ্যের চেয়ে তথ্যের অভাব স্বীকার করাই অধিক নিরাপদ ও পেশাদার।'
      }
    },
    {
      id: 'gen-cap-ex3',
      kind: 'mcq',
      topic: 'chunk-size-overlap-tradeoffs',
      question: {
        en: 'Why is configuring a modest chunk overlap (such as 50 to 100 tokens between adjacent chunks) critical when building an enterprise document knowledge base?',
        bn: 'এন্টারপ্রাইজ নথির ডেটাবেস তৈরির সময় পাশাপাশি দুটি খণ্ডের মাঝে কেন পরিমিত ওভারল্যাপ (যেমন ৫০ থেকে ১০০ টোকেন) রাখা অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'It prevents semantic context fragmentation by ensuring that sentences or ideas spanning across chunk boundaries are not abruptly severed',
          bn: 'এটি তথ্যের ধারাবাহিকতা রক্ষা করে যাতে দুটি খণ্ডের সীমানায় থাকা গুরুত্বপূর্ণ বাক্য বা ধারণা মাঝপথে কেটে না যায়'
        },
        {
          en: 'It doubles the physical memory bandwidth of the graphics card',
          bn: 'এটি গ্রাফিক্স কার্ডের মেমরি ব্যান্ডউইথ দ্বিগুণ বাড়িয়ে দেয়'
        },
        {
          en: 'Because international copyright laws mandate overlapping sentences',
          bn: 'কারণ আন্তর্জাতিক কপিরাইট আইন অনুযায়ী বাক্যে ওভারল্যাপ থাকা বাধ্যতামূলক'
        },
        {
          en: 'To make every text file strictly 1 megabyte in size',
          bn: 'প্রতিটি টেক্সট ফাইলের সাইজ ঠিক ১ মেগাবাইট করার উদ্দেশ্যে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a key premise is in sentence 1 and its conclusion is in sentence 2, splitting right between them destroys the meaning.',
        bn: 'যদি ১ নং বাক্যে মূল শর্ত থাকে আর ২ নং বাক্যে তার সিদ্ধান্ত থাকে, তবে মাঝখান থেকে কেটে ফেললে অর্থ হারিয়ে যায়; ওভারল্যাপ তা ধরে রাখে।'
      },
      explanation: {
        en: 'Chunk overlap preserves semantic continuity across boundaries, preventing vital context from being lost during window splitting.',
        bn: 'চাঙ্ক ওভারল্যাপ খণ্ডগুলোর মধ্যকার সংযোগ অক্ষুণ্ণ রেখে অর্থপূর্ণ তথ্য পুনরুদ্ধারের সক্ষমতা নিশ্চিত করে।'
      }
    },
    {
      id: 'gen-cap-ex4',
      kind: 'mcq',
      topic: 'reranking-after-dense-retrieval',
      question: {
        en: 'Why do modern production RAG architectures insert a Cross-Encoder Reranker between initial vector retrieval and prompt conditioning?',
        bn: 'আধুনিক RAG সিস্টেমে প্রাথমিক ভেক্টর সার্চ এবং প্রম্পট তৈরির মাঝে কেন একটি ক্রস-এনকোডার রি-র‌্যাঙ্কার (Reranker) ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Initial bi-encoder vector search is fast across millions of chunks but approximate; a cross-encoder performs deep attention between query and candidate chunks to surface the highest-quality context',
          bn: 'প্রাথমিক ভেক্টর সার্চ লক্ষ লক্ষ ফাইলের মাঝে দ্রুত হলেও আনুমানিক; রি-র‌্যাঙ্কার প্রশ্নের সাথে শীর্ষ ফাইলগুলোর গভীর তুলনা করে সবচেয়ে সেরা তথ্যটি বেছে নেয়'
        },
        {
          en: 'To translate the retrieved documents into classical Latin',
          bn: 'সংগৃহীত নথিগুলোকে প্রাচীন ল্যাটিন ভাষায় রূপান্তর করার জন্য'
        },
        {
          en: 'To delete half of the documents from the vector database',
          bn: 'ভেক্টর ডেটাবেস থেকে অর্ধেক ফাইল মুছে ফেলার উদ্দেশ্যে'
        },
        {
          en: 'Because rerankers eliminate the need for computer electricity',
          bn: 'কারণ রি-র‌্যাঙ্কার ব্যবহারে কোনো বিদ্যুৎ শক্তির প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Two-stage retrieval: fast search retrieves 50 chunks (cheap), then an accurate cross-encoder picks the best 3 chunks (precise).',
        bn: 'দুই ধাপের অনুসন্ধান: প্রথমে দ্রুত ৫০টি সম্ভাব্য খণ্ড আনা হয়, তারপর নিখুঁত বিশ্লেষক সেরা ৩টি খণ্ড বেছে নেয়।'
      },
      explanation: {
        en: 'Cross-encoders jointly attend to query and chunk tokens together, dramatically improving precision over independent bi-encoder embeddings.',
        bn: 'ক্রস-এনকোডার প্রশ্ন ও উত্তরের গভীর সম্পর্ক বিচার করে সেরা তথ্য নির্বাচন করে RAG সিস্টেমের নির্ভুলতা বহুগুণ বৃদ্ধি করে।'
      }
    }
  ],
  quiz: {
    id: 'genai-capstone-quiz',
    title: {
      en: 'Production RAG and Generative Systems Capstone Quiz',
      bn: 'প্রোডাকশন RAG এবং জেনারেটিভ সিস্টেমস সমাপনী কুইজ'
    },
    questions: [
      {
        id: 'gac-q1',
        kind: 'mcq',
        topic: 'end-to-end-pipeline-flow',
        question: {
          en: 'What is the correct end-to-end operational sequence of a secure enterprise RAG assistant from user query to verified delivery?',
          bn: 'ব্যবহারকারীর প্রশ্ন থেকে শুরু করে একটি নিরাপদ এন্টারপ্রাইজ RAG অ্যাসিস্ট্যান্টের সঠিক ধারাবাহিক কার্যক্রম কোনটি?'
        },
        options: [
          {
            en: 'Input sanitization -> Vector embedding & dense retrieval -> Similarity floor check -> Context-conditioned prompt assembly -> Low-temp generation with citations -> Factual grounding verification gate -> User response',
            bn: 'ইনপুট স্যানিটাইজেশন -> ভেক্টর সার্চ ও রিট্রিভাল -> সাদৃশ্য মানদণ্ড পরীক্ষা -> প্রম্পট তৈরি -> সূত্রের উদ্ধৃতিসহ জেনারেশন -> ফ্যাক্ট চেকিং গ্রাউন্ডিং গেট -> গ্রাহকের কাছে উত্তর প্রেরণ'
          },
          {
            en: 'Generate text first -> Search Google -> Send invoice -> Format disk',
            bn: 'আগে টেক্সট তৈরি -> গুগল সার্চ -> রসিদ পাঠানো -> ড্রাইভ ফরম্যাট'
          },
          {
            en: 'Delete database -> Prompt user for passwords -> Power off server',
            bn: 'ডেটাবেস মুছে ফেলা -> পাসওয়ার্ড চাওয়া -> সার্ভার বন্ধ করা'
          },
          {
            en: 'Render MP4 video -> Convert to audio -> Print on paper',
            bn: 'এমপি৪ ভিডিও তৈরি -> অডিওতে রূপান্তর -> কাগজে প্রিন্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sanitize input -> Retrieve evidence -> Check similarity -> Condition prompt -> Generate with citations -> Verify grounding.',
          bn: 'ইনপুট ফিল্টার -> তথ্য সংগ্রহ -> সাদৃশ্য পরীক্ষা -> প্রম্পটে যুক্ত -> উদ্ধৃতিসহ তৈরি -> সত্যতা যাচাই।'
        },
        explanation: {
          en: 'A production RAG pipeline enforces strict input hygiene, verified evidence retrieval, citation-constrained generation, and output verification.',
          bn: 'একটি আদর্শ RAG পাইপলাইন নিরাপত্তা ফিল্টারিং, প্রামাণ্য তথ্য সংগ্রহ, নিয়ন্ত্রিত জেনারেশন ও সত্যতা যাচাই নিশ্চিত করে।'
        }
      },
      {
        id: 'gac-q2',
        kind: 'mcq',
        topic: 'lost-in-the-middle-phenomenon',
        question: {
          en: 'What cognitive degradation known as the "Lost in the Middle" phenomenon occurs in LLMs when large numbers of document chunks are packed into prompt contexts?',
          bn: 'প্রম্পটের ভেতরে অতিরিক্ত নথিপত্র যুক্ত করলে এলএলএম-এ "লস্ট ইন দ্য মিডল" নামক কোন তথ্যগত অবক্ষয় ঘটে?'
        },
        options: [
          {
            en: 'Models attend strongly to information placed at the absolute beginning and end of long contexts, but frequently ignore or fail to recall crucial facts located in the middle',
            bn: 'মডেল প্রম্পটের শুরু এবং শেষের তথ্যে সবচেয়ে বেশি মনোযোগ দেয়, কিন্তু মাঝের অংশে থাকা অত্যন্ত গুরুত্বপূর্ণ তথ্য প্রায়শই ভুলে যায় বা উপেক্ষা করে'
          },
          {
            en: 'The computer mouse pointer freezes in the center of the monitor',
            bn: 'কম্পিউটারের মাউস পয়েন্টার স্ক্রিনের ঠিক মাঝখানে আটকে যায়'
          },
          {
            en: 'All vowels in the middle of words are permanently erased',
            bn: 'শব্দগুলোর মাঝখান থেকে সমস্ত স্বরবর্ণ মুছে যায়'
          },
          {
            en: 'The model splits into two separate programs running on different servers',
            bn: 'মডেলটি দুটি ভাগে ভাগ হয়ে দুটি ভিন্ন সার্ভারে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Primacy and recency bias: models remember the start and finish of long text far better than the middle.',
          bn: 'মানুষের মতোই এআই দীর্ঘ লেখার শুরু ও শেষের কথা ভালো মনে রাখে, কিন্তু মাঝের কথা ভুলে যায়।'
        },
        explanation: {
          en: 'Due to positional embedding dynamics, language models exhibit higher recall for information located near context boundaries rather than in the center.',
          bn: 'পজিশনাল এমবেডিংয়ের স্বভাবের কারণে প্রম্পটের মাঝখানের তথ্যের চেয়ে প্রান্তের তথ্যে মডেল বেশি গুরুত্ব দেয়।'
        }
      },
      {
        id: 'gac-q3',
        kind: 'mcq',
        topic: 'hybrid-search-sparse-dense',
        question: {
          en: 'Why do advanced enterprise retrieval systems implement Hybrid Search combining Dense Vector Search with Sparse Keyword Search (BM25)?',
          bn: 'উন্নত এন্টারপ্রাইজ সিস্টেমে কেন ডেন্স ভেক্টর সার্চের সাথে স্পার্স কিওয়ার্ড সার্চ (BM25) যুক্ত করে হাইব্রিড সার্চ বাস্তবায়ন করা হয়?'
        },
        options: [
          {
            en: 'Dense vectors capture semantic concepts and synonyms, while sparse BM25 guarantees exact matching for specific entity codes, part numbers, and technical acronyms',
            bn: 'ডেন্স ভেক্টর সামগ্রিক অর্থ ও সমার্থক শব্দ বুঝতে পারে, আর স্পার্স BM25 সুনির্দিষ্ট প্রডাক্ট কোড, সিরিয়াল নম্বর ও বিশেষায়িত নামের নির্ভুল মিল নিশ্চিত করে'
          },
          {
            en: 'To make the database consume twice as much electrical power',
            bn: 'ডেটাবেস যেন দ্বিগুণ বিদ্যুৎ খরচ করতে পারে সেজন্য'
          },
          {
            en: 'Because BM25 was invented in the year 2026',
            bn: 'কারণ ২০২৬ সালে BM25 প্রযুক্তি আবিষ্কৃত হয়েছিল'
          },
          {
            en: 'To prevent web browsers from downloading CSS stylesheets',
            bn: 'ওয়েব ব্রাউজারকে সিএসএস ফাইল ডাউনলোড করা থেকে বিরত রাখতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Embeddings know "automobile" equals "car", but struggle with exact part numbers like "SKU-9482-X". BM25 nails exact SKU matches.',
          bn: 'ভেক্টর অর্থ বোঝে কিন্তু অদ্ভুত পার্টস নম্বর চিনতে পারে না; কিওয়ার্ড সার্চ হুবহু কোড মেলানোর জন্য সেরা।'
        },
        explanation: {
          en: 'Hybrid search combines the semantic flexibility of dense neural embeddings with the exact-match precision of sparse lexical indexes.',
          bn: 'হাইব্রিড সার্চ অর্থবোধক অনুসন্ধান এবং নিখুঁত শব্দ মেলানোর ক্ষমতা একসাথে প্রয়োগ করে সর্বোচ্চ নির্ভরযোগ্যতা দেয়।'
        }
      },
      {
        id: 'gac-q4',
        kind: 'mcq',
        topic: 'citation-anchoring-production-benefit',
        question: {
          en: 'In legal, medical, and financial enterprise applications, what is the critical governance reason for requiring strict programmatic citation anchoring in every generative answer?',
          bn: 'আইনি, চিকিৎসা এবং আর্থিক অ্যাপ্লিকেশনে প্রতিটি উত্তরের সাথে কঠোরভাবে প্রামাণ্য নথির উদ্ধৃতি যুক্ত করার প্রধান আইনি ও পরিচালনগত কারণ কী?'
        },
        options: [
          {
            en: 'It establishes full auditability and legal accountability, allowing human compliance officers and end-users to immediately inspect and verify the authoritative source of every factual statement',
            bn: 'এটি সম্পূর্ণ জবাবদিহিতা ও আইনি বৈধতা নিশ্চিত করে, যার ফলে ব্যবহারকারী বা নিয়ন্ত্রক সংস্থা যেকোনো দাবির মূল উৎসটি সাথে সাথে যাচাই করতে পারেন'
          },
          {
            en: 'It reduces the speed of the server CPU clock to minimum frequency',
            bn: 'সার্ভারের প্রসেসরের গতি সর্বনিম্ন সীমায় নামিয়ে আনার উদ্দেশ্যে'
          },
          {
            en: 'It forces the client to download a 500-page terms of service agreement',
            bn: 'গ্রাহককে ৫০০ পৃষ্ঠার শর্তাবলী ফাইল ডাউনলোড করতে বাধ্য করার জন্য'
          },
          {
            en: 'Citations are required to display animated graphics in web browsers',
            bn: 'ব্রাউজারে অ্যানিমেশন প্রদর্শন করতে উদ্ধৃতি থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a bank bot gives investment advice or a medical bot recommends a dosage, you must prove which verified document authorized that claim.',
          bn: 'গুরুত্বপূর্ণ আর্থিক বা চিকিৎসা পরামর্শের ক্ষেত্রে কোন সরকারি বা প্রামাণ্য নথির ভিত্তিতে উত্তর দেওয়া হয়েছে তা প্রমাণ করা অপরিহার্য।'
        },
        explanation: {
          en: 'Explicit citation anchoring provides transparent provenance, eliminating legal liability by transforming black-box AI outputs into verifiable evidence.',
          bn: 'সুনির্দিষ্ট সূত্রের উদ্ধৃতি কৃত্রিম বুদ্ধিমত্তার উত্তরকে প্রামাণ্য দলিলে রূপান্তর করে সব ধরনের আইনি ঝুঁকি দূর করে।'
        }
      }
    ]
  }
};
