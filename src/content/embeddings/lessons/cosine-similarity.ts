import type { Lesson } from '../../../lib/types';

export const CosineSimilarityLesson: Lesson = {
  slug: 'cosine-similarity',
  tech: 'embeddings',
  title: {
    en: 'Cosine Similarity: Direction, Norms & Angle Measurement',
    bn: 'কোসাইন সাদৃশ্য: দিক, নর্ম এবং কোণ পরিমাপ'
  },
  summary: {
    en: 'Master the mathematical foundation of semantic similarity: learn why raw dot products unfairly favor longer texts, calculate Euclidean L2 vector norms, divide out magnitude to isolate pure direction, and interpret similarity scores bounded between -1.0 and 1.0.',
    bn: 'শব্দার্থিক সাদৃশ্যের মূল গাণিতিক ভিত্তি আয়ত্ত করুন: কেন সাধারণ ডট গুণন দীর্ঘ লেখার পক্ষে অন্যায্য পক্ষপাত দেখায়, ইউক্লিডিয়ান L2 নর্ম গণনা, মান দূর করে খাঁটি দিক নির্ণয় এবং -১.০ থেকে ১.০ এর মধ্যে সাদৃশ্য পরিমাপ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'length-bias-trap-heading',
      text: {
        en: 'The Length Bias Trap: Why Dot Products Require Normalization',
        bn: 'দৈর্ঘ্যগত পক্ষপাতের ফাঁদ: ডট গুণনের স্বাভাবিকীকরণ কেন প্রয়োজন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A major vulnerability of unnormalized raw dot products in search systems is length bias. Consider a short query vector [1, 2, 3] and a concise answer [4, 5, 6]. If a long-winded document repeats identical concepts 10 times, its vector scales to [40, 50, 60]. The raw dot product with the long document is 10 times larger, artificially ranking verbosity over concise precision. Cosine similarity solves this by dividing the dot product by the product of both vector lengths, measuring purely the angular direction.',
        bn: 'অনুসন্ধান ব্যবস্থায় সাধারণ ডট গুণন ব্যবহারের প্রধান দুর্বলতা হলো দৈর্ঘ্যের প্রতি পক্ষপাত। ধরুন একটি ছোট প্রশ্ন ভেক্টর [১, ২, ৩] এবং একটি চমৎকার সংক্ষিপ্ত উত্তর [৪, ৫, ৬]। এখন কোনো দীর্ঘ রচনা যদি একই কথা বারবার ১০ বার পুনরাবৃত্তি করে, তবে তার ভেক্টর স্কেল হয়ে [৪০, ৫০, ৬০] হয়ে যায়। এই দীর্ঘ নথির সাথে সাধারণ ডট গুণন ১০ গুণ বেশি স্কোর তৈরি করে, যা সংক্ষিপ্ত নির্ভুল উত্তরের চেয়ে অপ্রয়োজনীয় দীর্ঘ লেখাকে অগ্রাধিকার দেয়। কোসাইন সাদৃশ্য ডট গুণনকে উভয় ভেক্টরের দৈর্ঘ্যের গুণফল দিয়ে ভাগ করে এই সমস্যার সমাধান করে এবং কেবল তাদের মধ্যকার কৌণিক দিক পরিমাপ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The Cosine Similarity spectrum bounded between -1.0 and 1.0 across varying geometric angles.',
        bn: 'চিত্র ১: বিভিন্ন জ্যামিতিক কোণে -১.০ থেকে ১.০ এর মধ্যে সীমাবদ্ধ কোসাইন সাদৃশ্যের বর্ণালী।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">COSINE SIMILARITY SPECTRUM: cos(θ) = (A · B) / (||A|| * ||B||)</text>
  
  <!-- Number Line Axis -->
  <line x1="80" y1="140" x2="760" y2="140" stroke="#475569" stroke-width="3" />
  
  <!-- Marker: -1.0 -->
  <line x1="120" y1="120" x2="120" y2="160" stroke="#ef4444" stroke-width="3" />
  <circle cx="120" cy="140" r="8" fill="#ef4444" />
  <text x="120" y="105" fill="#f87171" font-size="14" font-family="monospace" font-weight="bold" text-anchor="middle">-1.0</text>
  <text x="120" y="190" fill="#fca5a5" font-size="11" font-family="sans-serif" text-anchor="middle">Opposite Direction</text>
  <text x="120" y="210" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">θ = 180°</text>

  <!-- Marker: 0.0 -->
  <line x1="420" y1="120" x2="420" y2="160" stroke="#f59e0b" stroke-width="3" />
  <circle cx="420" cy="140" r="8" fill="#f59e0b" />
  <text x="420" y="105" fill="#fbbf24" font-size="14" font-family="monospace" font-weight="bold" text-anchor="middle">0.0</text>
  <text x="420" y="190" fill="#fde68a" font-size="11" font-family="sans-serif" text-anchor="middle">Orthogonal / Unrelated</text>
  <text x="420" y="210" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">θ = 90°</text>

  <!-- Marker: 0.9746 -->
  <line x1="700" y1="125" x2="700" y2="155" stroke="#38bdf8" stroke-width="2" />
  <circle cx="700" cy="140" r="7" fill="#38bdf8" />
  <text x="700" y="80" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">0.9746 ★</text>
  <text x="700" y="95" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">[1,2,3] vs [4,5,6]</text>

  <!-- Marker: 1.0 -->
  <line x1="720" y1="120" x2="720" y2="160" stroke="#10b981" stroke-width="3" />
  <circle cx="720" cy="140" r="8" fill="#10b981" />
  <text x="720" y="105" fill="#4ade80" font-size="14" font-family="monospace" font-weight="bold" text-anchor="middle">1.0</text>
  <text x="720" y="190" fill="#86efac" font-size="11" font-family="sans-serif" text-anchor="middle">Identical Twins</text>
  <text x="720" y="210" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">θ = 0°</text>

  <!-- Formula Callout Box -->
  <rect x="180" y="245" width="480" height="60" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="420" y="270" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">Dot Product = 32 | Norm A = 3.7417 | Norm B = 8.7750</text>
  <text x="420" y="292" fill="#4ade80" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">Cosine Score: 32 / (3.7417 * 8.7750) = 0.9746</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'step-by-step-norm-math-heading',
      text: {
        en: 'Step-by-Step Mathematical Derivation of Cosine Similarity',
        bn: 'কোসাইন সাদৃশ্যের ধাপে ধাপে গাণিতিক সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Calculating cosine similarity involves 3 deterministic steps. First, compute the inner dot product: (1 * 4) + (2 * 5) + (3 * 6) = 4 + 10 + 18 = 32. Second, calculate the Euclidean L2 norm of both vectors: the norm of A is sqrt(1 + 4 + 9) = sqrt(14) ≈ 3.7417, and the norm of B is sqrt(16 + 25 + 36) = sqrt(77) ≈ 8.7750. Third, divide the dot product by the product of norms: 32 / (3.7417 * 8.7750) = 0.9746. Because the score is nearly 1.0, both vectors point in almost the exact same direction.',
        bn: 'কোসাইন সাদৃশ্য গণনায় ৩ টি সুনির্দিষ্ট ধাপ রয়েছে। প্রথমত, ডট গুণন হিসাব করা: (১ * ৪) + (২ * ৫) + (৩ * ৬) = ৪ + ১০ + ১৮ = ৩২। দ্বিতীয়ত, উভয় ভেক্টরের ইউক্লিডিয়ান L2 নর্ম বের করা: ভেক্টর A এর নর্ম হলো sqrt(১ + ৪ + ৯) = sqrt(১৪) ≈ ৩.৭৪১৭ এবং ভেক্টর B এর নর্ম হলো sqrt(১৬ + ২৫ + ৩৬) = sqrt(৭৭) ≈ ৮.৭৭৫০। তৃতীয়ত, ডট গুণনকে নর্মের গুণফল দিয়ে ভাগ করা: ৩২ / (৩.৭৪১৭ * ৮.৭৭৫০) = ০.৯৭৪৬। ফলাফল ১.০ এর অত্যন্ত কাছাকাছি হওয়ায় প্রমাণিত হয় উভয় ভেক্টর প্রায় একই দিকে মুখ করে আছে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript function calculating vector Euclidean norms and cosine similarity.',
        bn: 'ভেক্টর ইউক্লিডিয়ান নর্ম এবং কোসাইন সাদৃশ্য নির্ণয়ের TypeScript কোড।'
      },
      code: `export function calculateEuclideanNorm(vec: number[]): number {
  let sumOfSquares = 0;
  for (const val of vec) {
    sumOfSquares += val * val;
  }
  return Math.sqrt(sumOfSquares);
}

export function calculateCosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vector dimensions must match for cosine calculation');
  }

  let dotProduct = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
  }

  const normA = calculateEuclideanNorm(vecA);
  const normB = calculateEuclideanNorm(vecB);

  if (normA === 0 || normB === 0) {
    return 0; // Prevent division by zero
  }

  return dotProduct / (normA * normB);
}

// Concrete vectors: [1, 2, 3] and [4, 5, 6]
const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];

const similarity = calculateCosineSimilarity(vectorA, vectorB);
const normA = calculateEuclideanNorm(vectorA);
const normB = calculateEuclideanNorm(vectorB);

console.log('Norm of Vector A:', Number(normA.toFixed(4)));       // 3.7417
console.log('Norm of Vector B:', Number(normB.toFixed(4)));       // 8.7750
console.log('Cosine Similarity Score:', Number(similarity.toFixed(4))); // 0.9746`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cosine Similarity',
          def: {
            en: 'Metric measuring the cosine of the angle between two multidimensional vectors, normalized between -1.0 and 1.0.',
            bn: 'পরিমাপক যা দুটি বহুমাত্রিক ভেক্টরের মধ্যকার কোণের কোসাইন পরিমাপ করে এবং ফলাফল -১.০ থেকে ১.০ এর মধ্যে সীমাবদ্ধ থাকে।'
          }
        },
        {
          term: 'Euclidean L2 Norm',
          def: {
            en: 'The geometric length or magnitude of a vector from origin, calculated as the square root of the sum of squared elements.',
            bn: 'মূলবিন্দু থেকে ভেক্টরের জ্যামিতিক দৈর্ঘ্য বা মান, যা উপাদানগুলোর বর্গের সমষ্টির বর্গমূল নিয়ে বের করা হয়।'
          }
        },
        {
          term: 'Scale Invariance',
          def: {
            en: 'Property where multiplying a vector by any positive scalar leaves its cosine similarity score completely unchanged.',
            bn: 'ভেক্টরের বিশেষ বৈশিষ্ট্য যার কারণে কোনো ধনাত্মক সংখ্যা দিয়ে গুণ করলেও কোসাইন সাদৃশ্যের মান অপরিবর্তিত থাকে।'
          }
        },
        {
          term: 'Orthogonal Vectors',
          def: {
            en: 'Two vectors situated at a 90-degree angle to one another whose inner dot product and cosine similarity equal exactly 0.0.',
            bn: '২ টি ভেক্টর যা ১ টি অপরটির সাথে ৯০ ডিগ্রি কোণে অবস্থান করে এবং যাদের ডট গুণন ও কোসাইন সাদৃশ্য ঠিক ০.০ হয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'scale-invariance-property-ex1',
      kind: 'mcq',
      topic: 'scale-invariance-cosine',
      question: {
        en: 'If vector A = [1, 2, 3] and vector B = [10, 20, 30] (where B is exactly 10 times A), what is their Cosine Similarity?',
        bn: 'যদি ভেক্টর A = [১, ২, ৩] এবং ভেক্টর B = [১০, ২০, ৩০] হয় (যেখানে B হলো A এর ঠিক ১০ গুণ), তবে তাদের কোসাইন সাদৃশ্য কত?'
      },
      options: [
        {
          en: 'Exactly 1.0, because cosine similarity measures purely directional angle and is completely scale-invariant',
          bn: 'ঠিক ১.০, কারণ কোসাইন সাদৃশ্য কেবল দিকের কোণ পরিমাপ করে এবং আকারের ওপর মোটেও নির্ভর করে না'
        },
        {
          en: '10.0, because the vector was scaled by 10',
          bn: '১০.০, কারণ ভেক্টরকে ১০ দিয়ে গুণ করা হয়েছিল'
        },
        {
          en: '0.0, because the numbers are different',
          bn: '০.০, কারণ সংখ্যাগুলো ভিন্ন'
        },
        {
          en: '-1.0, because scaling inverts vector direction',
          bn: '-১.০, কারণ আকার বাড়ালে দিক উল্টে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Both vectors point along the exact same ray in coordinate space; the angle between them is 0 degrees.',
        bn: 'উভয় ভেক্টর মহাকাশে ঠিক একই সরলরেখা বরাবর মুখ করে আছে; তাদের মধ্যকার কোণ ০ ডিগ্রি।'
      },
      explanation: {
        en: 'Multiplying by a positive scalar extends length without rotating direction; cos(0°) equals 1.0.',
        bn: 'ধনাত্মক সংখ্যা দিয়ে গুণ করলে দৈর্ঘ্য বাড়ে কিন্তু দিক বদলায় না; ফলে কোসাইন কোণ ০ ডিগ্রিতে ১.০ পাওয়া যায়।'
      }
    },
    {
      id: 'orthogonal-vectors-meaning-ex2',
      kind: 'mcq',
      topic: 'orthogonal-vector-interpretation',
      question: {
        en: 'What does a Cosine Similarity score of 0.0 indicate about two documents in an embedding space?',
        bn: 'এমবেডিং স্পেসে দুটি নথির কোসাইন সাদৃশ্য ০.০ হওয়ার অর্থ কী?'
      },
      options: [
        {
          en: 'The vectors are orthogonal at a 90-degree angle, signifying zero shared semantic relationship',
          bn: 'ভেক্টর দুটি একে অপরের সাথে ৯০ ডিগ্রি লম্ব কোণে রয়েছে, যা তাদের মধ্যে কোনো অর্থগত সম্পর্ক না থাকা নির্দেশ করে'
        },
        {
          en: 'The documents are exact duplicate copies of each other',
          bn: 'নথি দুটি একে অপরের হুবহু অবিকল নকল'
        },
        {
          en: 'The database server has run out of disk storage',
          bn: 'ডেটাবেস সার্ভারের হার্ডডিস্ক পূর্ণ হয়ে গেছে'
        },
        {
          en: 'The embedding was computed on a leap year',
          bn: 'এমবেডিংটি একটি অধিবর্ষে হিসাব করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'In trigonometry, cos(90°) = 0.',
        bn: 'ত্রিকোণমিতিতে ৯০ ডিগ্রি কোণের কোসাইন মান ০ হয়।'
      },
      explanation: {
        en: 'A score of 0.0 represents geometric perpendicularity, meaning the concepts share no correlation.',
        bn: '০.০ স্কোর নির্দেশ করে যে ভেক্টর দুটি পরস্পরের লম্ব এবং তাদের মধ্যে কোনো পারস্পরিক মিল নেই।'
      }
    },
    {
      id: 'euclidean-norm-formula-ex3',
      kind: 'mcq',
      topic: 'euclidean-norm-computation',
      question: {
        en: 'How is the Euclidean L2 norm of the vector [3, 4] calculated?',
        bn: 'ভেক্টর [৩, ৪] এর ইউক্লিডিয়ান L2 নর্ম কীভাবে হিসাব করা হয়?'
      },
      options: [
        { en: 'sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5', bn: 'sqrt(৩^২ + ৪^২) = sqrt(৯ + ১৬) = sqrt(২৫) = ৫' },
        { en: '3 + 4 = 7', bn: '৩ + ৪ = ৭' },
        { en: '3 * 4 = 12', bn: '৩ * ৪ = ১২' },
        { en: 'sqrt(3 * 4) = sqrt(12)', bn: 'sqrt(৩ * ৪) = sqrt(১২)' }
      ],
      answer: 0,
      hint: {
        en: 'Apply the Pythagorean theorem: square each term, sum them, and take the square root.',
        bn: 'পিথাগোরাসের উপপাদ্য প্রয়োগ করুন: প্রতিটি উপাদান বর্গ করে যোগ করুন এবং বর্গমূল নিন।'
      },
      explanation: {
        en: 'The L2 norm is the square root of sum of squares: sqrt(9 + 16) = sqrt(25) = 5.',
        bn: 'L2 নর্ম হলো বর্গের সমষ্টির বর্গমূল: sqrt(৯ + ১৬) = sqrt(২৫) = ৫।'
      }
    },
    {
      id: 'cosine-range-bounds-ex4',
      kind: 'mcq',
      topic: 'cosine-metric-mathematical-bounds',
      question: {
        en: 'What are the theoretical lower and upper bounds of the Cosine Similarity metric across unrestricted real vector spaces?',
        bn: 'বাস্তব ভেক্টর স্পেসে কোসাইন সাদৃশ্য মেট্রিকের তাত্ত্বিক সর্বনিম্ন এবং সর্বোচ্চ সীমা কত?'
      },
      options: [
        { en: 'Between -1.0 (opposite) and 1.0 (identical)', bn: '-১.০ (বিপরীত) থেকে ১.০ (অভিন্ন) এর মধ্যে' },
        { en: 'Between 0.0 and 100.0', bn: '০.০ থেকে ১০০.০ এর মধ্যে' },
        { en: 'Between -Infinity and +Infinity', bn: '-ইনফিনিটি থেকে +ইনফিনিটি এর মধ্যে' },
        { en: 'Between 1.0 and 10.0', bn: '১.০ থেকে ১০.০ এর মধ্যে' }
      ],
      answer: 0,
      hint: {
        en: 'The trigonometric cosine function is strictly bounded by -1 and +1.',
        bn: 'ত্রিকোণমিতিক কোসাইন ফাংশন সর্বদা -১ এবং +১ এর মধ্যে সীমাবদ্ধ থাকে।'
      },
      explanation: {
        en: 'Because cosine represents cos(θ), its mathematical range is strictly [-1.0, 1.0].',
        bn: 'যেহেতু কোসাইন সাদৃশ্য মূলত কোণের মান প্রকাশ করে, তাই এর গাণিতিক সীমা [-১.০, ১.০] এর বাইরে যাওয়া অসম্ভব।'
      }
    }
  ],
  quiz: {
    id: 'quiz-cosine-similarity',
    title: {
      en: 'Cosine Similarity & Dot Product Mathematics Quiz',
      bn: 'কোসাইন সাদৃশ্য এবং ডট গুণনের গণিত কুইজ'
    },
    questions: [
      {
        id: 'quiz-pre-normalization-optimization',
        kind: 'mcq',
        topic: 'pre-normalized-cosine-simplification',
        question: {
          en: 'Why do production vector search engines pre-normalize all stored embeddings to unit length (norm = 1.0)?',
          bn: 'প্রোডাকশন ভেক্টর সার্চ ইঞ্জিনগুলো কেন ডেটাবেসে রাখার আগেই সমস্ত এমবেডিংকে একক দৈর্ঘ্যে (নর্ম = ১.০) রূপান্তর করে নেয়?'
        },
        options: [
          {
            en: 'When norms equal 1.0, the cosine denominator (||u|| * ||v||) becomes 1.0, reducing cosine similarity to a blistering-fast dot product without square roots',
            bn: 'নর্মের মান ১.০ হলে কোসাইনের হর (||u|| * ||v||) ১.০ হয়ে যায়, ফলে কোনো বর্গমূল ছাড়া কোসাইন সাদৃশ্য একটি অতি দ্রুত ডট গুণনে পরিণত হয়'
          },
          {
            en: 'To reduce the font size of numbers on mobile displays',
            bn: 'মোবাইলে প্রদর্শিত সংখ্যার ফন্ট সাইজ ছোট করার জন্য'
          },
          {
            en: 'Because computer hardware cannot store numbers with decimals',
            bn: 'কারণ কম্পিউটার দশমিকযুক্ত সংখ্যা সংরক্ষণ করতে পারে না'
          },
          {
            en: 'It is required by United States federal banking laws',
            bn: 'মার্কিন ফেডারেল ব্যাংকিং আইন অনুযায়ী এটি বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'A dot product between unit vectors equals cosine similarity directly.',
          bn: 'একক ভেক্টরের মধ্যকার ডট গুণন সরাসরি কোসাইন সাদৃশ্যের সমান হয়।'
        },
        explanation: {
          en: 'Pre-normalizing eliminates costly sqrt and division operations during query time, boosting search throughput by orders of magnitude.',
          bn: 'পূর্বে স্বাভাবিক করে নিলে অনুসন্ধানের সময় অতিরিক্ত ভাগ বা বর্গমূল করতে হয় না, ফলে সার্চের গতি বহুগুণ বেড়ে যায়।'
        }
      },
      {
        id: 'quiz-opposite-meaning-vectors',
        kind: 'mcq',
        topic: 'negative-cosine-interpretation',
        question: {
          en: 'In natural language embedding spaces, do antonyms (such as "hot" and "cold") typically produce a negative Cosine Similarity of -1.0?',
          bn: 'প্রাকৃতিক ভাষার এমবেডিংয়ে বিপরীত শব্দগুলো (যেমন "গরম" এবং "ঠান্ডা") কি সাধারণত -১.০ এর মতো ঋণাত্মক কোসাইন সাদৃশ্য দেয়?'
        },
        options: [
          {
            en: 'No, they often have positive similarity (~0.6 to 0.8) because they share identical grammatical contexts (both are temperature adjectives)',
            bn: 'না, তারা প্রায়ই ধনাত্মক সাদৃশ্য (~০.৬ থেকে ০.৮) দেখায় কারণ তারা একই ধরনের ব্যাকরণগত প্রসঙ্গে বসে (উভয়ই তাপমাত্রা নির্দেশক বিশেষণ)'
          },
          {
            en: 'Yes, antonyms always produce exactly -1.0',
            bn: 'হ্যাঁ, বিপরীত শব্দ সর্বদা ঠিক -১.০ মান দেয়'
          },
          {
            en: 'They crash the server with an arithmetic overflow',
            bn: 'তারা অতিরিক্ত গণনার কারণে সার্ভার ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'Antonyms cannot be embedded into numbers',
            bn: 'বিপরীত শব্দকে কখনোই সংখ্যায় রূপান্তর করা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Words that appear in identical sentence patterns cluster together.',
          bn: 'একই ধরনের বাক্যের গঠনে ব্যবহৃত শব্দগুলো এমবেডিং স্পেসে কাছাকাছি অবস্থান করে।'
        },
        explanation: {
          en: 'Language models cluster words by contextual usage; "hot" and "cold" appear in similar contexts and yield positive similarity.',
          bn: 'মডেলগুলো ব্যবহারের প্রেক্ষাপট অনুযায়ী দল গঠন করে; ফলে গরম ও ঠান্ডা উভয়ই তাপমাত্রার সাথে সম্পর্কিত হওয়ায় তাদের সাদৃশ্য ধনাত্মক থাকে।'
        }
      },
      {
        id: 'quiz-threshold-filtering-purpose',
        kind: 'mcq',
        topic: 'cosine-similarity-threshold-filtering',
        question: {
          en: 'Why should retrieval systems enforce a minimum Cosine Similarity threshold (e.g. score >= 0.75) before returning results to an LLM?',
          bn: 'এলএলএম-এর কাছে পাঠানোর পূর্বে কেন অনুসন্ধান সিস্টেমে অন্তত ০.৭৫ এর মতো একটি ন্যূনতম কোসাইন সাদৃশ্য সীমা প্রয়োগ করা উচিত?'
        },
        options: [
          {
            en: 'To discard irrelevant and low-confidence chunks, preventing the language model from hallucinating over noisy context',
            bn: 'অপ্রাসঙ্গিক ও দুর্বল তথ্যের খণ্ডগুলো বাদ দিতে, যাতে অপ্রয়োজনীয় লেখার কারণে ল্যাঙ্গুয়েজ মডেল ভুল বা মনগড়া উত্তর না তৈরি করে'
          },
          {
            en: 'Because databases can only store 75 files',
            bn: 'কারণ ডেটাবেসে কেবল ৭৫টি ফাইল জমা রাখা যায়'
          },
          {
            en: 'To make the response load 75 seconds slower',
            bn: 'উত্তরের গতি ৭৫ সেকেন্ড ধীর করার উদ্দেশ্যে'
          },
          {
            en: 'It is an arbitrary requirement with zero practical benefit',
            bn: 'এটি একটি অপ্রয়োজনীয় নিয়ম যার কোনো বাস্তবিক সুবিধা নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'A high threshold ensures only high-confidence matches are fed into the prompt.',
          bn: 'একটি নির্ভরযোগ্য সীমা প্রম্পটে কেবল খাঁটি ও প্রাসঙ্গিক তথ্য পাঠানো নিশ্চিত করে।'
        },
        explanation: {
          en: 'Filtering by score prevents irrelevant retrieved documents from degrading LLM generation quality.',
          bn: 'স্কোর দেখে ছেঁকে নিলে ভুল তথ্য এলএলএম-এ প্রবেশ করতে পারে না এবং উত্তরের মান উন্নত থাকে।'
        }
      },
      {
        id: 'quiz-cosine-distance-relationship',
        kind: 'mcq',
        topic: 'cosine-distance-formula',
        question: {
          en: 'What is the relationship between Cosine Similarity and Cosine Distance?',
          bn: 'কোসাইন সাদৃশ্য (Similarity) এবং কোসাইন দূরত্বের (Distance) মধ্যে সম্পর্ক কী?'
        },
        options: [
          {
            en: 'Cosine Distance = 1.0 - Cosine Similarity; identical vectors have distance 0.0 while opposites have distance 2.0',
            bn: 'কোসাইন দূরত্ব = ১.০ - কোসাইন সাদৃশ্য; অভিন্ন ভেক্টরের দূরত্ব ০.০ হয় এবং বিপরীত ভেক্টরের দূরত্ব ২.০ হয়'
          },
          {
            en: 'They are completely identical metrics with identical values',
            bn: 'তারা দুটি সম্পূর্ণ একই পরিমাপক যাদের মান সর্বদা এক থাকে'
          },
          {
            en: 'Cosine Distance is measured in centimeters with a physical ruler',
            bn: 'কোসাইন দূরত্ব একটি সাধারণ স্কেল দিয়ে সেন্টিমিটারে মাপা হয়'
          },
          {
            en: 'Cosine Distance equals Cosine Similarity multiplied by 100',
            bn: 'কোসাইন দূরত্ব হলো কোসাইন সাদৃশ্যকে ১০০ দিয়ে গুণের সমান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Distance is the inverse of similarity: higher similarity means smaller distance.',
          bn: 'দূরত্ব হলো সাদৃশ্যের বিপরীত: যত বেশি মিল, দূরত্ব তত কম।'
        },
        explanation: {
          en: 'Cosine distance converts similarity into a metric where 0 represents identical alignment and 2 represents complete opposition.',
          bn: 'কোসাইন দূরত্ব সাদৃশ্যকে এমন একটি মাপে রূপান্তর করে যেখানে ০ মানে পূর্ণ মিল এবং ২ মানে চরম বিপরীত অবস্থান।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'chunking-text',
    title: {
      en: 'Text Chunking Strategies: Fixed-Size, Sentence-Splitting & Semantic Boundaries',
      bn: 'টেক্সট চাংকিং কৌশল: ফিক্সড-সাইজ, বাক্য বিভাজন এবং শব্দার্থিক সীমানা'
    }
  }
};
