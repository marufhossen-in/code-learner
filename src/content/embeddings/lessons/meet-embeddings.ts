import type { Lesson } from '../../../lib/types';

export const MeetEmbeddingsLesson: Lesson = {
  slug: 'meet-embeddings',
  tech: 'embeddings',
  title: {
    en: 'Introduction to Vector Embeddings: What They Are & How They Work',
    bn: 'ভেক্টর এমবেডিংসের পরিচিতি: এগুলো কী এবং কীভাবে কাজ করে'
  },
  summary: {
    en: 'Beginner guide to vector embeddings: understand how neural networks map unstructured words and sentences into dense geometric vectors across high-dimensional space, measure dot products, and quantify semantic proximity.',
    bn: 'ভেক্টর এমবেডিংসের প্রাথমিক গাইড: নিউরাল নেটওয়ার্ক কীভাবে ভাষা ও বাক্যকে বহুমাত্রিক স্থানের ঘন জ্যামিতিক ভেক্টরে রূপান্তর করে, ডট গুণন পরিমাপ এবং অর্থগত নৈকট্য বিশ্লেষণ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'why-dense-vectors-heading',
      text: {
        en: 'From Words to Numbers: Overcoming the Symbolic Limitations of One-Hot Encoding',
        bn: 'শব্দ থেকে সংখ্যা: ওয়ান-হট এনকোডিংয়ের সীমাবদ্ধতা অতিক্রম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computers cannot naturally comprehend human prose; they operate purely on numbers. Early natural language processing relied on sparse one-hot encoding (where exactly 1 index holds a value of 1), assigning each unique dictionary word an isolated position in a massive array. Under one-hot representations, "cat" and "dog" are completely orthogonal vectors with an inner dot product of 0, concealing the obvious biological relationship between them. Vector embeddings solve this by projecting language into dense floating-point arrays where semantic similarity translates directly into spatial closeness.',
        bn: 'কম্পিউটার মানুষের কথ্য ভাষা সরাসরি বুঝতে পারে না; এটি কেবল সংখ্যা প্রক্রিয়া করতে পারে। প্রাথমিক যুগে ওয়ান-হট এনকোডিং (যেখানে ঠিক ১ টি অবস্থানে ১ মান থাকে) ব্যবহার করা হতো, যেখানে প্রতিটি শব্দের জন্য একটি বিশাল অ্যারেতে একটি আলাদা অবস্থান বরাদ্দ থাকত। এই ব্যবস্থায় "বিড়াল" এবং "কুকুর" সম্পূর্ণ স্বাধীন ভেক্টর হিসেবে থাকত যাদের ডট গুণন ছিল ০, ফলে তাদের মধ্যকার প্রাণীগত সাদৃশ্য বোঝা যেত না। ভেক্টর এমবেডিংস ভাষাকে ঘন ফ্লোটিং-পয়েন্ট ভেক্টরে রূপান্তর করে এই সমস্যার সমাধান করে, যেখানে শব্দের অর্থগত মিল সরাসরি জ্যামিতিক নৈকট্যে প্রকাশ পায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Two-dimensional (2D) vector space demonstrating semantic clustering of pets versus vehicles.',
        bn: 'চিত্র ১: ২ মাত্রিক (2D) ভেক্টর স্পেস যেখানে পোষা প্রাণী এবং যানবাহনের অর্থগত পার্থক্য প্রদর্শিত হয়েছে।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">2D SEMANTIC VECTOR SPACE DEMONSTRATION</text>
  
  <!-- Grid Lines and Axes -->
  <g transform="translate(60, 60)">
    <!-- Axes -->
    <line x1="40" y1="220" x2="420" y2="220" stroke="#475569" stroke-width="2" />
    <line x1="40" y1="220" x2="40" y2="20" stroke="#475569" stroke-width="2" />
    <text x="420" y="240" fill="#94a3b8" font-size="11" font-family="sans-serif">Living Pet-ness (X-axis) →</text>
    <text x="15" y="15" fill="#94a3b8" font-size="11" font-family="sans-serif">Mechanical Transport (Y-axis) ↑</text>
    
    <!-- Vector: cat [4, 1] -->
    <line x1="40" y1="220" x2="360" y2="180" stroke="#38bdf8" stroke-width="3" />
    <circle cx="360" cy="180" r="7" fill="#38bdf8" />
    <text x="375" y="185" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">cat [4, 1]</text>
    
    <!-- Vector: dog [3, 2] -->
    <line x1="40" y1="220" x2="280" y2="140" stroke="#4ade80" stroke-width="3" />
    <circle cx="280" cy="140" r="7" fill="#4ade80" />
    <text x="295" y="145" fill="#4ade80" font-size="12" font-family="monospace" font-weight="bold">dog [3, 2]</text>
    
    <!-- Vector: car [0, 5] -->
    <line x1="40" y1="220" x2="40" y2="40" stroke="#f87171" stroke-width="3" />
    <circle cx="40" cy="40" r="7" fill="#f87171" />
    <text x="55" y="45" fill="#f87171" font-size="12" font-family="monospace" font-weight="bold">car [0, 5]</text>
  </g>

  <!-- Math Cards on Right -->
  <g transform="translate(540, 70)">
    <rect width="260" height="230" rx="8" fill="#1e293b" stroke="#334155" />
    <rect width="260" height="32" rx="8" fill="#334155" />
    <text x="130" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dot Product Math</text>
    
    <!-- cat . dog -->
    <rect x="15" y="45" width="230" height="75" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="68" fill="#4ade80" font-size="11" font-family="monospace" font-weight="bold">cat · dog = 14</text>
    <text x="25" y="88" fill="#cbd5e1" font-size="10" font-family="monospace">(4 * 3) + (1 * 2) = 12 + 2</text>
    <text x="25" y="106" fill="#86efac" font-size="10" font-family="sans-serif">High semantic proximity ✓</text>
    
    <!-- cat . car -->
    <rect x="15" y="135" width="230" height="75" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="158" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold">cat · car = 5</text>
    <text x="25" y="178" fill="#cbd5e1" font-size="10" font-family="monospace">(4 * 0) + (1 * 5) = 0 + 5</text>
    <text x="25" y="196" fill="#fca5a5" font-size="10" font-family="sans-serif">Distant unrelated concepts ✗</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'high-dimensional-reality-heading',
      text: {
        en: 'Scaling from 2 Dimensions to High-Dimensional Embeddings',
        bn: '২ মাত্রা থেকে আধুনিক বহুমাত্রিক এমবেডিংয়ে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While human beings easily visualize vectors in 2 or 3 spatial directions, production embedding models operate across hundreds or thousands of orthogonal axes. Standard industry models such as OpenAI text-embedding-3-small project text into 1536 dimensions, whereas text-embedding-3-large utilizes 3072 features. Each individual coordinate captures subtle linguistic nuances — including grammatical voice, emotional sentiment, subject domain, and topical context.',
        bn: 'মানুষ ২ বা ৩ টি স্থানিক দিকে সহজে ভেক্টর কল্পনা করতে পারলেও আধুনিক এমবেডিং মডেলগুলো শত শত বা হাজার হাজার অক্ষে কাজ করে। বহুল ব্যবহৃত টেক্সট-এমবেডিং মডেলগুলো লেখাকে ১৫৩৬ মাত্রায় প্রক্ষেপণ করে এবং বৃহৎ মডেলগুলো ৩০৭২ টি বৈশিষ্ট্য ব্যবহার করে। প্রতিটি স্থানাঙ্ক ভাষার সূক্ষ্ম অর্থ — যেমন ব্যাকরণগত ধরন, আবেগ, কাজের ক্ষেত্র এবং প্রাসঙ্গিক বিষয়বস্তুকে আলাদাভাবে ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation calculating the dot product between 2-dimensional semantic vectors.',
        bn: 'দ্বিমাত্রিক ভেক্টরের মধ্যে ডট গুণন বের করার জন্য সহজ TypeScript কোড।'
      },
      code: `export function calculateDotProduct(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vector dimensions must match for inner dot product calculation');
  }

  let sum = 0;
  for (let i = 0; i < vecA.length; i++) {
    sum += vecA[i] * vecB[i];
  }
  return sum;
}

// 2D toy vectors representing semantic concepts
const catVector = [4, 1]; // [petness, mechanical]
const dogVector = [3, 2]; // [petness, mechanical]
const carVector = [0, 5]; // [petness, mechanical]

const catDogDot = calculateDotProduct(catVector, dogVector);
const catCarDot = calculateDotProduct(catVector, carVector);

console.log('cat . dog Dot Product:', catDogDot); // 14
console.log('cat . car Dot Product:', catCarDot); // 5
console.log('Semantic Proximity Gap:', catDogDot - catCarDot); // 9`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vector Embedding',
          def: {
            en: 'Dense numerical array of continuous floating-point numbers encoding the semantic meaning of a word, sentence, or document.',
            bn: 'ধারাবাহিক ফ্লোটিং-পয়েন্ট সংখ্যার একটি ঘন অ্যারে যা কোনো শব্দ, বাক্য বা নথির অর্থগত ভাব প্রকাশ করে।'
          }
        },
        {
          term: 'Dense Representation',
          def: {
            en: 'Vector representation where almost all dimensions contain non-zero continuous values, contrasting with sparse one-hot arrays.',
            bn: 'ভেক্টর উপস্থাপনা যেখানে প্রায় সব মাত্রাতেই অশূন্য মান থাকে, যা ফাঁকা ওয়ান-হট অ্যারের বিপরীত।'
          }
        },
        {
          term: 'Dot Product',
          def: {
            en: 'Algebraic operation multiplying corresponding elements of two vectors and summing the results to quantify directional alignment.',
            bn: 'বীজগাণিতিক প্রক্রিয়া যাতে দুটি ভেক্টরের সংশ্লিষ্ট উপাদানের গুণফল যোগ করে তাদের দিকগত মিল বের করা হয়।'
          }
        },
        {
          term: 'Semantic Proximity',
          def: {
            en: 'Spatial closeness between vectors in embedding space indicating conceptual likeness, shared context, or topical relevance.',
            bn: 'এমবেডিং স্পেসে দুটি ভেক্টরের মধ্যকার জ্যামিতিক নৈকট্য যা তাদের অর্থগত মিল বা প্রাসঙ্গিকতা নির্দেশ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'one-hot-failure-reason-ex1',
      kind: 'mcq',
      topic: 'one-hot-vs-dense-embeddings',
      question: {
        en: 'Why does traditional one-hot encoding fail to represent semantic relationships between words?',
        bn: 'চিরাচরিত ওয়ান-হট এনকোডিং কেন শব্দের মধ্যকার অর্থগত সম্পর্ক প্রকাশ করতে পারে না?'
      },
      options: [
        {
          en: 'Every word vector is completely orthogonal to every other word vector with a dot product of 0, concealing all synonymy',
          bn: 'প্রতিটি শব্দের ভেক্টর একে অপরের সাথে ৯০ ডিগ্রি কোণে থাকে এবং ডট গুণন ০ হয়, ফলে কোনো অর্থগত মিল বোঝা যায় না'
        },
        {
          en: 'Because computers can only store positive integers under 10',
          bn: 'কারণ কম্পিউটার কেবল ১০ এর নিচের ধনাত্মক সংখ্যা সংরক্ষণ করতে পারে'
        },
        {
          en: 'One-hot encoding requires separate satellite transmission',
          bn: 'ওয়ান-হট এনকোডিংয়ের জন্য আলাদা স্যাটেলাইট সংযোগের প্রয়োজন হয়'
        },
        {
          en: 'It deletes vowels from all dictionary words',
          bn: 'এটি অভিধানের সমস্ত শব্দ থেকে স্বরবর্ণ মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Orthogonal vectors share zero projection on each other.',
        bn: 'লম্ব ভেক্টরগুলোর একটির ওপর আরেকটির কোনো প্রভাব বা প্রক্ষেপণ থাকে না।'
      },
      explanation: {
        en: 'One-hot encoding places each word on its own independent axis; all pairs are equally far apart with zero dot product.',
        bn: 'ওয়ান-হট এনকোডিং প্রতিটি শব্দকে আলাদা অক্ষে রাখে; ফলে সব শব্দই সমান দূরে অবস্থান করে এবং কোনো ভাবার্থ প্রকাশ পায় না।'
      }
    },
    {
      id: 'dot-product-calculation-ex2',
      kind: 'mcq',
      topic: 'dot-product-arithmetic',
      question: {
        en: 'Given vector A = [4, 1] and vector B = [3, 2], what is the result of the inner dot product (A · B)?',
        bn: 'ভেক্টর A = [৪, ১] এবং ভেক্টর B = [৩, ২] হলে তাদের ডট গুণনের (A · B) ফলাফল কত?'
      },
      options: [
        { en: '14, calculated as (4 * 3) + (1 * 2) = 12 + 2', bn: '১৪, যা (৪ * ৩) + (১ * ২) = ১২ + ২ হিসেবে হিসাব করা হয়' },
        { en: '5, calculated as (4 * 0) + (1 * 5)', bn: '৫, যা (৪ * ০) + (১ * ৫) হিসেবে হিসাব করা হয়' },
        { en: '24, calculated as 4 * 3 * 2', bn: '২৪, যা ৪ * ৩ * ২ হিসেবে হিসাব করা হয়' },
        { en: '0, because all vectors cancel out', bn: '০, কারণ সমস্ত ভেক্টর একে অপরকে কাটাকাটি করে' }
      ],
      answer: 0,
      hint: {
        en: 'Multiply the first components together, multiply the second components together, and add the two products.',
        bn: 'প্রথম উপাদান দুটি গুণ করুন, দ্বিতীয় উপাদান দুটি গুণ করুন এবং ফলাফল দুটি যোগ করুন।'
      },
      explanation: {
        en: 'The dot product is the sum of element-wise multiplications: (4 * 3) + (1 * 2) = 12 + 2 = 14.',
        bn: 'ডট গুণন হলো উপাদানভিত্তিক গুণের সমষ্টি: (৪ * ৩) + (১ * ২) = ১২ + ২ = ১৪।'
      }
    },
    {
      id: 'embedding-dimensions-real-world-ex3',
      kind: 'mcq',
      topic: 'modern-embedding-dimensionality',
      question: {
        en: 'How many dimensions do standard modern text embedding models (such as text-embedding-3-small) typically produce?',
        bn: 'আধুনিক জনপ্রিয় টেক্সট এমবেডিং মডেলগুলো (যেমন text-embedding-3-small) সাধারণত কত মাত্রার ভেক্টর তৈরি করে?'
      },
      options: [
        { en: '1536 dense floating-point dimensions', bn: '১৫৩৬ ঘন ফ্লোটিং-পয়েন্ট মাত্রা' },
        { en: 'Only 2 dimensions', bn: 'কেবল ২ টি মাত্রা' },
        { en: 'Exactly 1 dimension', bn: 'ঠিক ১ টি মাত্রা' },
        { en: 'Over 1000000000 dimensions', bn: '১০০০০০০০০০ এর বেশি মাত্রা' }
      ],
      answer: 0,
      hint: {
        en: 'Modern models project text into 1536 or 3072 dimensions to capture rich semantic depth.',
        bn: 'আধুনিক মডেলগুলো ভাষার গভীর অর্থ ধারণ করতে ১৫৩৬ বা ৩০৭২ মাত্রার ভেক্টর ব্যবহার করে।'
      },
      explanation: {
        en: '1536 dimensions provide sufficient expressiveness to capture fine semantic and conceptual relationships.',
        bn: '১৫৩৬ মাত্রা ভাষার সূক্ষ্ম অর্থ ও বিভিন্ন বিষয়ের সম্পর্ক নিখুঁতভাবে প্রকাশ করার জন্য যথেষ্ট।'
      }
    },
    {
      id: 'semantic-search-application-ex4',
      kind: 'mcq',
      topic: 'vector-similarity-search-application',
      question: {
        en: 'Why does semantic search using vector embeddings find relevant documents even when zero identical keywords match?',
        bn: 'কোনো অবিকল কিওয়ার্ডের মিল না থাকলেও ভেক্টর এমবেডিংস ব্যবহার করা সার্চ ইঞ্জিন কেন প্রাসঙ্গিক নথি খুঁজে বের করতে পারে?'
      },
      options: [
        {
          en: 'Because conceptually related phrases (e.g. "puppy care" and "canine health") map to nearby geometric coordinates in vector space',
          bn: 'কারণ সমার্থক বা সম্পর্কিত ধারণাগুলো (যেমন "কুকুরছানার যত্ন" এবং "ক্যানাইন স্বাস্থ্য") ভেক্টর স্পেসে কাছাকাছি জ্যামিতিক অবস্থানে থাকে'
        },
        {
          en: 'Because vector search looks through the user computer webcam',
          bn: 'কারণ ভেক্টর সার্চ ব্যবহারকারীর ওয়েবক্যামের মাধ্যমে দেখে নেয়'
        },
        {
          en: 'It prints all documents on physical paper first',
          bn: 'এটি প্রথমে সমস্ত নথি কাগজে প্রিন্ট করে নেয়'
        },
        {
          en: 'Vector embeddings delete all foreign words from the database',
          bn: 'ভেক্টর এমবেডিংস ডেটাবেস থেকে সব বিদেশি শব্দ মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Closeness in vector space reflects closeness in underlying meaning.',
        bn: 'ভেক্টর স্পেসের নৈকট্য মূল ভাবার্থের নৈকট্যকে ফুটিয়ে তোলে।'
      },
      explanation: {
        en: 'Embeddings encode semantic meaning rather than exact character tokens, enabling fuzzy conceptual retrieval.',
        bn: 'এমবেডিংস কেবল অক্ষরের মিল না খুঁজে মূল অর্থকে সংখ্যার মাধ্যমে প্রকাশ করে, ফলে প্রতিশব্দ থাকলেও সঠিক উত্তর খুঁজে পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-meet-embeddings',
    title: {
      en: 'Introduction to Vector Embeddings Quiz',
      bn: 'ভেক্টর এমবেডিংস পরিচিতি কুইজ'
    },
    questions: [
      {
        id: 'quiz-embedding-definition',
        kind: 'mcq',
        topic: 'vector-embedding-fundamental-nature',
        question: {
          en: 'What mathematically constitutes a vector embedding of a text sentence?',
          bn: 'একটি বাক্যের ভেক্টর এমবেডিং গাণিতিকভাবে আসলে কী নিয়ে গঠিত হয়?'
        },
        options: [
          {
            en: 'A fixed-length array of floating-point numbers learned by a neural network to represent semantic meaning',
            bn: 'একটি নির্দিষ্ট দৈর্ঘ্যের ফ্লোটিং-পয়েন্ট সংখ্যার অ্যারে যা নিউরাল নেটওয়ার্ক দ্বারা বাক্যের ভাবার্থ ধারণ করতে শেখে'
          },
          {
            en: 'An encrypted password hash that cannot be decoded',
            bn: 'একটি এনক্রিপ্ট করা পাসওয়ার্ড হ্যাশ যা কোনোভাবেই পড়া যায় না'
          },
          {
            en: 'A bitmap image of the letters rendered on screen',
            bn: 'স্ক্রিনে প্রদর্শিত অক্ষরগুলোর একটি সাধারণ বিটম্যাপ ছবি'
          },
          {
            en: 'A sorted list of all vowels in the English language',
            bn: 'ইংরেজি ভাষার সমস্ত স্বরবর্ণের একটি সাজানো তালিকা'
          }
        ],
        answer: 0,
        hint: {
          en: 'It is a dense array of continuous floats representing semantic coordinates.',
          bn: 'এটি অর্থগত অবস্থান নির্দেশকারী ফ্লোটিং-পয়েন্ট সংখ্যার একটি ঘন তালিকা।'
        },
        explanation: {
          en: 'Embeddings map text tokens into continuous multidimensional vector spaces where geometry captures meaning.',
          bn: 'এমবেডিংস লেখাকে বহুমাত্রিক স্থানে রূপান্তর করে যেখানে জ্যামিতিক অবস্থান দ্বারা অর্থ প্রকাশ পায়।'
        }
      },
      {
        id: 'quiz-dot-product-magnitude-sensitivity',
        kind: 'mcq',
        topic: 'dot-product-magnitude-limitation',
        question: {
          en: 'What is a significant limitation of using unnormalized raw Dot Products to measure semantic similarity?',
          bn: 'অর্থগত সাদৃশ্য মাপার জন্য সাধারণ ডট গুণন ব্যবহারের প্রধান সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'Longer documents or larger vector magnitudes produce artificially higher dot products regardless of actual conceptual alignment',
            bn: 'দীর্ঘ লেখা বা বড় মানের ভেক্টরে অর্থগত মিল না থাকলেও ডট গুণনের মান কৃত্রিমভাবে অনেক বড় হয়ে যেতে পারে'
          },
          {
            en: 'Dot products can never produce numbers greater than 0',
            bn: 'ডট গুণনের মান কখনোই ০ এর চেয়ে বড় হতে পারে না'
          },
          {
            en: 'It only works with words that start with the letter Z',
            bn: 'এটি কেবল Z দিয়ে শুরু হওয়া শব্দের ক্ষেত্রেই কাজ করে'
          },
          {
            en: 'Dot products permanently corrupt computer memory chips',
            bn: 'ডট গুণন কম্পিউটারের মেমোরি চিপ স্থায়ীভাবে নষ্ট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Magnitude scales the score; normalizing lengths resolves this problem.',
          bn: 'ভেক্টরের দৈর্ঘ্য বা মান স্কোরকে বাড়িয়ে দেয়; ভেক্টরকে স্বাভাবিক বা নরমালাইজ করলে এই সমস্যা দূর হয়।'
        },
        explanation: {
          en: 'Raw dot products depend on vector lengths as well as angles; Cosine Similarity normalizes for length.',
          bn: 'সাধারণ ডট গুণন ভেক্টরের আকারের ওপর নির্ভরশীল; তাই কোসাইন সাদৃশ্য ব্যবহারের মাধ্যমে দৈর্ঘ্যকে স্বাভাবিক করে নেওয়া হয়।'
        }
      },
      {
        id: 'quiz-dimensionality-tradeoff',
        kind: 'mcq',
        topic: 'embedding-dimension-tradeoffs',
        question: {
          en: 'What is the operational trade-off when selecting between 1536-dimensional and 3072-dimensional embeddings?',
          bn: '১৫৩৬ মাত্রার এবং ৩০৭২ মাত্রার এমবেডিংয়ের মধ্যে বাছাই করার ক্ষেত্রে কী ধরনের সুবিধা ও অসুবিধা বিবেচনা করতে হয়?'
        },
        options: [
          {
            en: 'Higher dimensions capture richer semantic subtleties but double storage footprint, RAM usage, and vector index search latency',
            bn: 'উচ্চ মাত্রায় ভাষার সূক্ষ্ম অর্থ বেশি নিখুঁতভাবে ধরা পড়ে তবে তা ডেটাবেস স্টোরেজ, র‍্যাম খরচ এবং খোঁজার সময় দ্বিগুণ করে দেয়'
          },
          {
            en: '3072 dimensions only works during nighttime hours',
            bn: '৩০৭২ মাত্রা কেবল রাতের বেলাতেই কাজ করতে পারে'
          },
          {
            en: '1536 dimensions can only understand numbers from 1 to 10',
            bn: '১৫৩৬ মাত্রা কেবল ১ থেকে ১০ পর্যন্ত সংখ্যা বুঝতে পারে'
          },
          {
            en: 'There is no difference in memory or computational cost',
            bn: 'মেমোরি বা কম্পিউটেশন খরচে কোনো ধরনের পার্থক্য থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every additional dimension requires 4 bytes of floating-point storage.',
          bn: 'প্রতিটি অতিরিক্ত মাত্রার জন্য ৪ বাইট ফ্লোটিং-পয়েন্ট মেমোরি প্রয়োজন হয়।'
        },
        explanation: {
          en: 'Dimensionality represents an engineering trade-off between representational capacity and database infrastructure cost.',
          bn: 'মাত্রা বৃদ্ধির ফলে তথ্যের সমৃদ্ধি বাড়লেও অবকাঠামো ও মেমোরির খরচ সমানুপাতিক হারে বৃদ্ধি পায়।'
        }
      },
      {
        id: 'quiz-embedding-rag-retrieval',
        kind: 'mcq',
        topic: 'embeddings-in-rag-systems',
        question: {
          en: 'What is the primary role of vector embeddings inside a Retrieval-Augmented Generation (RAG) architecture?',
          bn: 'Retrieval-Augmented Generation (RAG) আর্কিটেকচারে ভেক্টর এমবেডিংসের মূল ভূমিকা কী?'
        },
        options: [
          {
            en: 'To retrieve the most conceptually relevant chunks of company documents from a vector database to provide as context to the LLM',
            bn: 'ভেক্টর ডেটাবেস থেকে সবচেয়ে প্রাসঙ্গিক নথিপত্রের অংশ খুঁজে এনে এলএলএম-এর প্রম্পটে নির্ভরযোগ্য প্রেক্ষাপট হিসেবে সরবরাহ করা'
          },
          {
            en: 'To replace the user keyboard with a microphone',
            bn: 'ব্যবহারকারীর কীবোর্ডকে একটি মাইক্রোফোন দিয়ে বদলে দেওয়া'
          },
          {
            en: 'To compile Python source code into machine binary instructions',
            bn: 'পাইথন সোর্স কোডকে মেশিন বাইনারিতে কম্পাইল করা'
          },
          {
            en: 'To power the cooling fans inside server power supplies',
            bn: 'সার্ভারের পাওয়ার সাপ্লাইয়ের কুলিং ফ্যান চালানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Embeddings act as the semantic search engine feeding context into the model.',
          bn: 'এমবেডিংস মূল মডেলকে সঠিক তথ্য জোগানোর সার্চ ইঞ্জিন হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'In RAG, query embeddings match chunk embeddings to extract grounded context for answer generation.',
          bn: 'RAG ব্যবস্থায় ব্যবহারকারীর প্রশ্নের সাথে নথিপত্রের মিল খুঁজে বের করতে এমবেডিংস ব্যবহার করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'cosine-similarity',
    title: {
      en: 'Cosine Similarity & Dot Product Mathematics',
      bn: 'কোসাইন সাদৃশ্য এবং ডট গুণনের গণিত'
    }
  }
};
