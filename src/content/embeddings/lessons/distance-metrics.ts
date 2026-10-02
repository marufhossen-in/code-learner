import type { Lesson } from '../../../lib/types';

export const DistanceMetricsLesson: Lesson = {
  slug: 'distance-metrics',
  tech: 'embeddings',
  title: {
    en: 'Distance Metrics: Euclidean (L2), Manhattan (L1) & Dot Product',
    bn: 'দূরত্ব পরিমাপ পদ্ধতি: ইউক্লিডিয়ান (L2), ম্যানহাটন (L1) এবং ডট গুণন'
  },
  summary: {
    en: 'Compare geometric metric spaces for vector search: evaluate straight-line Euclidean distance (L2 = 5), grid-based Manhattan distance (L1 = 7), and inner Dot Product (9) between coordinates [1, 1] and [4, 5], matching metrics to embedding types.',
    bn: 'ভেক্টর অনুসন্ধানের জ্যামিতিক পরিমাপকগুলোর তুলনা করুন: স্থানাঙ্ক [১, ১] এবং [৪, ৫] এর মধ্যে সরলরৈখিক ইউক্লিডিয়ান দূরত্ব (L2 = ৫), গ্রিডভিত্তিক ম্যানহাটন দূরত্ব (L1 = ৭) এবং ডট গুণনের (৯) তুলনামূলক বিশ্লেষণ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'three-geometric-rulers-heading',
      text: {
        en: 'The Three Geometric Rulers: Straight Lines, City Blocks, and Alignment',
        bn: '৩ টি জ্যামিতিক পরিমাপক: সরলরেখা, শহরের রাস্তা এবং দিকগত মিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Different machine learning domains require different geometric rulers. When evaluating the distance between vector point P [1, 1] and point Q [4, 5], 3 fundamental metrics yield 3 distinct answers. Euclidean distance (L2) measures straight-line physical displacement: sqrt((4 - 1)^2 + (5 - 1)^2) = sqrt(9 + 16) = sqrt(25) = 5. Manhattan distance (L1) measures grid-like taxicab navigation: |4 - 1| + |5 - 1| = 3 + 4 = 7. Finally, the raw Dot Product measures unnormalized projection: (1 * 4) + (1 * 5) = 4 + 5 = 9.',
        bn: 'মেশিন লার্নিংয়ের ভিন্ন ভিন্ন ক্ষেত্রে দূরত্বের ভিন্ন ভিন্ন পরিমাপক প্রয়োজন হয়। ভেক্টর বিন্দু P [১, ১] এবং বিন্দু Q [৪, ৫] এর মধ্যকার দূরত্ব পরিমাপে ৩ টি মৌলিক পদ্ধতি ৩ টি আলাদা উত্তর দেয়। ইউক্লিডিয়ান দূরত্ব (L2) সরাসরি সরলরৈখিক সরণ মাপে: sqrt((৪ - ১)^২ + (৫ - ১)^২) = sqrt(৯ + ১৬) = sqrt(২৫) = ৫। ম্যানহাটন দূরত্ব (L1) শহরের রাস্তার মতো খাড়া কোণে চলাচল পরিমাপ করে: |৪ - ১| + |৫ - ১| = ৩ + ৪ = ৭। পরিশেষে, সাধারণ ডট গুণন দিক ও মানের প্রক্ষেপণ হিসাব করে: (১ * ৪) + (১ * ৫) = ৪ + ৫ = ৯।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between Euclidean straight-line distance 5 and Manhattan grid distance 7 between [1, 1] and [4, 5].',
        bn: 'চিত্র ১: [১, ১] এবং [৪, ৫] এর মধ্যে ইউক্লিডিয়ান সরলরৈখিক দূরত্ব ৫ এবং ম্যানহাটন গ্রিড দূরত্ব ৭ এর তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">GEOMETRIC METRIC COMPARISON: [1, 1] TO [4, 5]</text>
  
  <!-- Left Side: Cartesian Coordinate Plane -->
  <g transform="translate(60, 60)">
    <!-- Grid -->
    <rect width="360" height="240" rx="6" fill="#1e293b" stroke="#334155" />
    <line x1="40" y1="200" x2="340" y2="200" stroke="#475569" stroke-width="2" />
    <line x1="40" y1="200" x2="40" y2="20" stroke="#475569" stroke-width="2" />
    
    <!-- Point P [1, 1] -->
    <circle cx="80" cy="160" r="7" fill="#38bdf8" />
    <text x="75" y="185" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">P [1, 1]</text>
    
    <!-- Point Q [4, 5] -->
    <circle cx="260" cy="40" r="7" fill="#ef4444" />
    <text x="260" y="25" fill="#f87171" font-size="12" font-family="monospace" font-weight="bold">Q [4, 5]</text>
    
    <!-- Euclidean Straight Line (Hypotenuse) -->
    <line x1="80" y1="160" x2="260" y2="40" stroke="#10b981" stroke-width="3" />
    <text x="140" y="90" fill="#4ade80" font-size="11" font-family="monospace" font-weight="bold">Euclidean = 5</text>
    
    <!-- Manhattan Path (Right Angle Grid) -->
    <polyline points="80,160 260,160 260,40" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" />
    <text x="170" y="178" fill="#fbbf24" font-size="10" font-family="monospace">dx = 3</text>
    <text x="270" y="105" fill="#fbbf24" font-size="10" font-family="monospace">dy = 4</text>
    <text x="170" y="150" fill="#facc15" font-size="10" font-family="monospace">Manhattan = 3 + 4 = 7</text>
  </g>

  <!-- Right Side: Comparison Scorecards -->
  <g transform="translate(460, 60)">
    <!-- Euclidean L2 Card -->
    <rect width="330" height="70" rx="6" fill="#1e293b" stroke="#10b981" />
    <text x="20" y="26" fill="#4ade80" font-size="12" font-family="sans-serif" font-weight="bold">1. Euclidean Distance (L2) = 5</text>
    <text x="20" y="45" fill="#cbd5e1" font-size="10" font-family="monospace">Formula: sqrt((4-1)^2 + (5-1)^2) = sqrt(25) = 5</text>
    <text x="20" y="60" fill="#94a3b8" font-size="9" font-family="sans-serif">Best for: Image recognition &amp; continuous physics</text>
    
    <!-- Manhattan L1 Card -->
    <rect y="85" width="330" height="70" rx="6" fill="#1e293b" stroke="#f59e0b" />
    <text x="20" y="111" fill="#fbbf24" font-size="12" font-family="sans-serif" font-weight="bold">2. Manhattan Distance (L1) = 7</text>
    <text x="20" y="130" fill="#cbd5e1" font-size="10" font-family="monospace">Formula: |4-1| + |5-1| = 3 + 4 = 7</text>
    <text x="20" y="145" fill="#94a3b8" font-size="9" font-family="sans-serif">Best for: Outlier-robust features &amp; urban grids</text>
    
    <!-- Dot Product Card -->
    <rect y="170" width="330" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <text x="20" y="196" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="bold">3. Dot Product = 9</text>
    <text x="20" y="215" fill="#cbd5e1" font-size="10" font-family="monospace">Formula: (1 * 4) + (1 * 5) = 4 + 5 = 9</text>
    <text x="20" y="230" fill="#94a3b8" font-size="9" font-family="sans-serif">Best for: Pre-normalized text embeddings</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'metric-selection-guidelines-heading',
      text: {
        en: 'Metric Selection Guidelines for Vector Search Databases',
        bn: 'ভেক্টর ডেটাবেসে সঠিক মেট্রিক বাছাইয়ের নীতিমালা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the wrong distance metric when initializing a vector index severely degrades retrieval quality. When working with normalized text embeddings (such as OpenAI text-embedding-3 or Cohere Embed), Dot Product or Cosine Similarity is mandatory. For computer vision convolutional feature vectors (e.g. ResNet facial recognition), Euclidean L2 distance represents spatial identity accurately. When building recommendation systems with sparse outlier-heavy tabular features, Manhattan L1 distance provides robust noise resistance.',
        bn: 'ভেক্টর ইনডেক্স তৈরির সময় ভুল মেট্রিক নির্বাচন করলে অনুসন্ধানের ফলাফল মারাত্মকভাবে ক্ষতিগ্রস্ত হয়। স্বাভাবিকীকৃত টেক্সট এমবেডিংয়ের ক্ষেত্রে (যেমন OpenAI text-embedding-3 বা Cohere Embed) ডট গুণন বা কোসাইন সাদৃশ্য ব্যবহার করা বাধ্যতামূলক। কম্পিউটার ভিশনের ইমেজ ফিচার ভেক্টরের ক্ষেত্রে (যেমন ResNet ফেসিয়াল রিকগনিশন) ইউক্লিডিয়ান L2 দূরত্ব সবচেয়ে নিখুঁত ফল দেয়। আর আউটলায়ার বা অতিরিক্ত বড় সংখ্যাযুক্ত স্পার্স টেবিল ডেটার ক্ষেত্রে ম্যানহাটন L1 দূরত্ব নয়েজ সামলাতে সবচেয়ে কার্যকর।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of Euclidean (L2), Manhattan (L1), and Dot Product metrics.',
        bn: 'ইউক্লিডিয়ান (L2), ম্যানহাটন (L1) এবং ডট গুণন পরিমাপের TypeScript কোড।'
      },
      code: `export function calculateEuclideanDistance(vecA: number[], vecB: number[]): number {
  let sumOfSquaredDifferences = 0;
  for (let i = 0; i < vecA.length; i++) {
    const diff = vecA[i] - vecB[i];
    sumOfSquaredDifferences += diff * diff;
  }
  return Math.sqrt(sumOfSquaredDifferences);
}

export function calculateManhattanDistance(vecA: number[], vecB: number[]): number {
  let sumOfAbsoluteDifferences = 0;
  for (let i = 0; i < vecA.length; i++) {
    sumOfAbsoluteDifferences += Math.abs(vecA[i] - vecB[i]);
  }
  return sumOfAbsoluteDifferences;
}

export function calculateRawDotProduct(vecA: number[], vecB: number[]): number {
  let sum = 0;
  for (let i = 0; i < vecA.length; i++) {
    sum += vecA[i] * vecB[i];
  }
  return sum;
}

// Coordinate evaluation between Point P [1, 1] and Point Q [4, 5]
const pointP = [1, 1];
const pointQ = [4, 5];

const l2Distance = calculateEuclideanDistance(pointP, pointQ);
const l1Distance = calculateManhattanDistance(pointP, pointQ);
const rawDot = calculateRawDotProduct(pointP, pointQ);

console.log('Euclidean L2 Distance:', l2Distance);   // 5
console.log('Manhattan L1 Distance:', l1Distance);   // 7
console.log('Raw Inner Dot Product:', rawDot);       // 9`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Euclidean Distance',
          def: {
            en: 'L2 metric measuring straight-line geometric distance between two coordinate points across Cartesian space.',
            bn: 'L2 পরিমাপক যা কার্টেসিয়ান স্থানে দুটি বিন্দুর মধ্যকার সরাসরি সরলরৈখিক দূরত্ব পরিমাপ করে।'
          }
        },
        {
          term: 'Manhattan Distance',
          def: {
            en: 'L1 metric summing the absolute differences across coordinates, analogous to travelling along grid city streets.',
            bn: 'L1 পরিমাপক যা স্থানাঙ্কগুলোর পরম পার্থক্যের সমষ্টি নিয়ে হিসাব করা হয়, যেমন শহরের গ্রিডভিত্তিক সড়কে চলাচল।'
          }
        },
        {
          term: 'Inner Dot Product',
          def: {
            en: 'Algebraic metric multiplying matching coordinate components; higher values indicate greater similarity rather than distance.',
            bn: 'বীজগাণিতিক পরিমাপক যা উপাদানগুলোর গুণফল যোগ করে; এর বড় মান দূরত্বের বদলে বেশি সাদৃশ্য প্রকাশ করে।'
          }
        },
        {
          term: 'Metric Space',
          def: {
            en: 'Mathematical set equipped with a valid distance function satisfying identity, symmetry, and triangle inequality.',
            bn: 'গাণিতিক সেট যেখানে একটি সুনির্দিষ্ট দূরত্বের ফাংশন থাকে যা অভিন্নতা, প্রতিসাম্য এবং ত্রিভুজ অসমতা মেনে চলে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'euclidean-vs-manhattan-triangle-ex1',
      kind: 'mcq',
      topic: 'l2-vs-l1-triangle-inequality',
      question: {
        en: 'Between point [1, 1] and point [4, 5], why is the Euclidean distance (5) strictly shorter than the Manhattan distance (7)?',
        bn: 'বিন্দু [১, ১] এবং বিন্দু [৪, ৫] এর মধ্যে ইউক্লিডিয়ান দূরত্ব (৫) কেন সর্বদা ম্যানহাটন দূরত্বের (৭) চেয়ে কম হয়?'
      },
      options: [
        {
          en: 'Euclidean distance travels as the crow flies along the straight hypotenuse, whereas Manhattan traverses the sum of the two perpendicular legs (3 + 4)',
          bn: 'ইউক্লিডিয়ান দূরত্ব সরাসরি সরল অতিভুজ বরাবর চলে, আর ম্যানহাটন দূরত্ব লম্ব দুটি বাহুর যোগফল (৩ + ৪) বরাবর ঘুরে চলে'
        },
        {
          en: 'Because Manhattan distance subtracts 2 from all numbers',
          bn: 'কারণ ম্যানহাটন দূরত্ব সব সংখ্যা থেকে ২ বিয়োগ করে দেয়'
        },
        {
          en: 'Euclidean distance is only measured on weekends',
          bn: 'ইউক্লিডিয়ান দূরত্ব কেবল ছুটির দিনেই মাপা যায়'
        },
        {
          en: 'There is zero difference; they always produce the exact same number',
          bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা সর্বদা একই মান দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember the triangle inequality: the hypotenuse of a right triangle is always shorter than the sum of its legs.',
        bn: 'পিথাগোরাসের নিয়ম মনে রাখুন: সমকোণী ত্রিভুজের অতিভুজ সর্বদা অপর দুই বাহুর সমষ্টির চেয়ে ছোট হয়।'
      },
      explanation: {
        en: 'In right-angled geometry, hypotenuse length (5) is always strictly less than the rectilinear path (3 + 4 = 7).',
        bn: 'সমকোণী ত্রিভুজে সরাসরি অতিভুজের দূরত্ব (৫) খাড়া দুটি পথের যোগফলের (৩ + ৪ = ৭) চেয়ে সবসময়ই কম হয়।'
      }
    },
    {
      id: 'metric-direction-inversion-ex2',
      kind: 'mcq',
      topic: 'similarity-vs-distance-direction',
      question: {
        en: 'What fundamental directional difference exists between Distance metrics (L1, L2) and Similarity metrics (Cosine, Dot Product)?',
        bn: 'দূরত্ব পরিমাপক (L1, L2) এবং সাদৃশ্য পরিমাপকের (Cosine, Dot Product) মধ্যে মূল দিকগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'Distance metrics decrease toward 0 as vectors become more similar, whereas similarity metrics increase toward maximum values for identical vectors',
          bn: 'ভেক্টরের মিল বাড়লে দূরত্বের মান কমে ০ এর দিকে যায়, আর সাদৃশ্যের ক্ষেত্রে মিল বাড়লে মান সর্বোচ্চ সংখ্যার দিকে বৃদ্ধি পায়'
        },
        {
          en: 'Distance metrics only accept negative numbers',
          bn: 'দূরত্ব পরিমাপক কেবল ঋণাত্মক সংখ্যা গ্রহণ করতে পারে'
        },
        {
          en: 'Similarity metrics can only be computed by quantum supercomputers',
          bn: 'সাদৃশ্য কেবল কোয়ান্টাম সুপারকম্পিউটারেই হিসাব করা সম্ভব'
        },
        {
          en: 'Distance metrics delete vectors after 10 milliseconds',
          bn: 'দূরত্ব পরিমাপক ১০ মিলিসেকেন্ড পর ভেক্টর মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nearness means small distance, but high similarity score.',
        bn: 'কাছাকাছি থাকা মানে দূরত্ব ছোট হওয়া, কিন্তু সাদৃশ্যের স্কোর বড় হওয়া।'
      },
      explanation: {
        en: 'Distance measures separation (smaller is closer); similarity measures alignment (larger is closer).',
        bn: 'দূরত্ব হলো পার্থক্যের মাপ (কম মান মানে কাছে); সাদৃশ্য হলো ঐক্যের মাপ (বেশি মান মানে কাছে)।'
      }
    },
    {
      id: 'computer-vision-metric-choice-ex3',
      kind: 'mcq',
      topic: 'computer-vision-distance-choice',
      question: {
        en: 'Which distance metric is traditionally preferred for continuous facial recognition feature embeddings?',
        bn: 'মুখমণ্ডল শনাক্তকরণের (Facial Recognition) ইমেজ ফিচারের জন্য সাধারণত কোন দূরত্ব পরিমাপকটি সবচেয়ে বেশি সমাদৃত?'
      },
      options: [
        {
          en: 'Euclidean L2 Distance, because face features reside in continuous metric feature space where geometric separation represents identity distance',
          bn: 'ইউক্লিডিয়ান L2 দূরত্ব, কারণ মুখের বৈশিষ্ট্যগুলো অবিচ্ছিন্ন স্থানে থাকে যেখানে জ্যামিতিক দূরত্ব সরাসরি মানুষের পরিচয় পার্থক্য প্রকাশ করে'
        },
        {
          en: 'Counting the number of characters in the user name',
          bn: 'ব্যবহারকারীর নামের অক্ষরের সংখ্যা গণনা করা'
        },
        {
          en: 'Manhattan distance divided by 1000',
          bn: 'ম্যানহাটন দূরত্বকে ১০০০ দিয়ে ভাগ করা'
        },
        {
          en: 'Random coin flipping',
          bn: 'মুদ্রা নিক্ষেপ করে টস করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Facial models like FaceNet are explicitly trained using Triplet Loss with Euclidean L2 margin constraints.',
        bn: 'FaceNet-এর মতো মডেলগুলো ইউক্লিডিয়ান L2 দূরত্বের ভিত্তিতে প্রশিক্ষিত হয়।'
      },
      explanation: {
        en: 'Face embeddings are trained on Euclidean margin losses; L2 distance preserves cluster boundaries between human identities.',
        bn: 'মুখের এমবেডিংগুলো ইউক্লিডিয়ান দূরত্বের ওপর প্রশিক্ষিত হওয়ায় L2 দূরত্বই মানুষের পরিচয়ের পার্থক্য সবচেয়ে সঠিকভাবে ধরে রাখে।'
      }
    },
    {
      id: 'manhattan-outlier-robustness-ex4',
      kind: 'mcq',
      topic: 'manhattan-outlier-resistance',
      question: {
        en: 'Why is Manhattan distance (L1) more robust to extreme outlier values than Euclidean distance (L2)?',
        bn: 'চরম অস্বাভাবিক মান বা আউটলায়ারের (Outlier) ক্ষেত্রে ম্যানহাটন দূরত্ব (L1) কেন ইউক্লিডিয়ান দূরত্বের (L2) চেয়ে বেশি স্থিতিশীল?'
      },
      options: [
        {
          en: 'Euclidean distance squares differences (diff^2), causing extreme outliers to dominate the metric exponentially compared to linear L1 sum (|diff|)',
          bn: 'ইউক্লিডিয়ান দূরত্বে পার্থক্যের বর্গ (diff^২) নেওয়া হয়, ফলে অস্বাভাবিক বড় সংখ্যা পুরো হিসাবকে অতিমাত্রায় প্রভাবিত করে, যা রৈখিক L1 এ (|diff|) হয় না'
        },
        {
          en: 'Because Manhattan distance automatically deletes all numbers greater than 10',
          bn: 'কারণ ম্যানহাটন দূরত্ব ১০ এর বেশি সব সংখ্যাকে স্বয়ংক্রিয়ভাবে বাদ দিয়ে দেয়'
        },
        {
          en: 'Because L1 distance was invented in New York City',
          bn: 'কারণ L1 দূরত্ব নিউ ইয়র্ক শহরে তৈরি হয়েছিল'
        },
        {
          en: 'L1 distance only works with positive prime numbers',
          bn: 'L1 দূরত্ব কেবল ধনাত্মক মৌলিক সংখ্যার ক্ষেত্রেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Squaring an error of 100 yields 10000; linear absolute error remains 100.',
        bn: '১০০ কে বর্গ করলে ১০০০০ হয়ে যায়; কিন্তু রৈখিক মানে তা ১০০ ই থাকে।'
      },
      explanation: {
        en: 'Squaring differences in L2 amplifies the penalty of large errors; L1 linear weighting resists distortion from single noisy dimensions.',
        bn: 'L2 তে বর্গ করার কারণে বড় ভুলগুলো মারাত্মক প্রভাব ফেলে; L1 রৈখিক হওয়ায় কোনো একটি ভুল পুরো হিসাবকে সহজে নষ্ট করতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-distance-metrics',
    title: {
      en: 'Distance Metrics and Metric Spaces Quiz',
      bn: 'দূরত্ব পরিমাপ পদ্ধতি এবং স্পেস কুইজ'
    },
    questions: [
      {
        id: 'quiz-triangle-inequality-axiom',
        kind: 'mcq',
        topic: 'metric-space-axioms',
        question: {
          en: 'Which mathematical condition must a valid distance function d(x, y) satisfy under the Triangle Inequality axiom?',
          bn: 'একটি যথার্থ দূরত্ব ফাংশন d(x, y) কে ত্রিভুজ অসমতার নিয়ম অনুযায়ী কোন শর্তটি পূরণ করতে হয়?'
        },
        options: [
          { en: 'd(x, z) <= d(x, y) + d(y, z) for all points x, y, z', bn: 'সমস্ত বিন্দু x, y, z এর জন্য d(x, z) <= d(x, y) + d(y, z)' },
          { en: 'd(x, z) = d(x, y) * d(y, z)', bn: 'd(x, z) = d(x, y) * d(y, z)' },
          { en: 'd(x, z) must always equal 0', bn: 'd(x, z) এর মান সর্বদা ০ হতে হবে' },
          { en: 'd(x, z) >= 1000000 at all times', bn: 'd(x, z) এর মান সর্বদা ১০০০০০০ এর বেশি হতে হবে' }
        ],
        answer: 0,
        hint: {
          en: 'Going directly from x to z can never be longer than stopping at y along the way.',
          bn: 'x থেকে z তে সরাসরি যাওয়ার পথ কখনোই মাঝপথে y ঘুরে যাওয়ার চেয়ে দীর্ঘ হতে পারে না।'
        },
        explanation: {
          en: 'The triangle inequality establishes that direct paths are shortest, enabling hierarchical index pruning algorithms like VP-trees.',
          bn: 'ত্রিভুজ অসমতা প্রমাণ করে যে সরাসরি পথই ক্ষুদ্রতম, যা ডেটাবেসে অনুসন্ধান গাছের গতি বাড়াতে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-cosine-to-euclidean-mapping',
        kind: 'mcq',
        topic: 'l2-distance-cosine-similarity-relation',
        question: {
          en: 'For unit-normalized vectors u and v, what is the exact algebraic relationship between Squared Euclidean Distance ||u - v||^2 and Cosine Similarity cos(θ)?',
          bn: 'একক ভেক্টরের ক্ষেত্রে বর্গকৃত ইউক্লিডিয়ান দূরত্ব ||u - v||^২ এবং কোসাইন সাদৃশ্য cos(θ) এর মধ্যকার বীজগণিতীয় সম্পর্ক কী?'
        },
        options: [
          { en: '||u - v||^2 = 2 - 2 * cos(θ)', bn: '||u - v||^২ = ২ - ২ * cos(θ)' },
          { en: '||u - v||^2 = cos(θ) / 2', bn: '||u - v||^২ = cos(θ) / ২' },
          { en: '||u - v||^2 = 100 * cos(θ)', bn: '||u - v||^২ = ১০০ * cos(θ)' },
          { en: 'There is zero mathematical relationship', bn: 'তাদের মধ্যে কোনো গাণিতিক সম্পর্ক নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Expand ||u - v||^2 = ||u||^2 + ||v||^2 - 2(u · v) where ||u|| = 1 and ||v|| = 1.',
          bn: '||u - v||^২ কে ভাঙলে পাওয়া যায় ||u||^২ + ||v||^২ - ২(u · v), যেখানে নর্ম ১ হয়।'
        },
        explanation: {
          en: 'Expanding squared difference on unit vectors yields 1 + 1 - 2(u · v) = 2 - 2 * cos(θ), proving ranking order is identical.',
          bn: 'একক ভেক্টরে সমীকরণটি বিস্তার করলে ১ + ১ - ২(u · v) = ২ - ২ * cos(θ) পাওয়া যায়, যা প্রমাণ করে উভয়ের র‍্যাংকিংয়ের ক্রম হুবহু একই থাকে।'
        }
      },
      {
        id: 'quiz-minkowski-distance-generalization',
        kind: 'mcq',
        topic: 'minkowski-distance-parameter',
        question: {
          en: 'How does the Minkowski distance metric generalize both Manhattan (L1) and Euclidean (L2) distances?',
          bn: 'মিনকোভস্কি দূরত্ব কীভাবে ম্যানহাটন (L1) এবং ইউক্লিডিয়ান (L2) দূরত্ব উভয়কেই একটি সাধারণ সূত্রে প্রকাশ করে?'
        },
        options: [
          {
            en: 'Formula (sum(|xi - yi|^p))^(1/p) yields Manhattan distance when p = 1 and Euclidean distance when p = 2',
            bn: 'সূত্র (sum(|xi - yi|^p))^(১/p) তে p = ১ বসালে ম্যানহাটন দূরত্ব এবং p = ২ বসালে ইউক্লিডিয়ান দূরত্ব পাওয়া যায়'
          },
          {
            en: 'By multiplying the coordinates by 50',
            bn: 'স্থানাঙ্কগুলোকে ৫০ দিয়ে গুণ করার মাধ্যমে'
          },
          {
            en: 'It divides all numbers by zero',
            bn: 'এটি সব সংখ্যাকে শূন্য দিয়ে ভাগ করে দেয়'
          },
          {
            en: 'Minkowski distance only applies to calendar dates',
            bn: 'মিনকোভস্কি দূরত্ব কেবল ক্যালেন্ডারের তারিখের ক্ষেত্রেই প্রযোজ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'p is the power parameter of the Minkowski norm.',
          bn: 'p হলো মিনকোভস্কি সূত্রের ঘাত বা পাওয়ার প্যারামিটার।'
        },
        explanation: {
          en: 'Minkowski distance is the overarching Lp norm family: p = 1 is L1 (Manhattan) and p = 2 is L2 (Euclidean).',
          bn: 'মিনকোভস্কি হলো সামগ্রিক Lp পরিবার: p = ১ হলে L1 (ম্যানহাটন) এবং p = ২ হলে L2 (ইউক্লিডিয়ান) দূরত্ব প্রকাশ পায়।'
        }
      },
      {
        id: 'quiz-hamming-distance-binary-vectors',
        kind: 'mcq',
        topic: 'hamming-distance-binary-embeddings',
        question: {
          en: 'When embeddings are quantized into 1-bit binary arrays for extreme memory compression, which distance metric is used to measure difference?',
          bn: 'যখন মেমোরি সাশ্রয়ের জন্য এমবেডিংকে ১-বিট বাইনারি অ্যারেতে রূপান্তর করা হয়, তখন কোন দূরত্ব পরিমাপক ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Hamming distance, which counts the number of bit positions where the two binary vectors disagree using hardware POPCNT',
            bn: 'হ্যামিং দূরত্ব, যা হার্ডওয়্যার POPCNT কমান্ডের সাহায্যে দুটি বাইনারি ভেক্টরের অমিল বিটের সংখ্যা গুণে বের করে'
          },
          {
            en: 'Measuring the temperature of the CPU in Celsius',
            bn: 'সিপিইউর তাপমাত্রা সেলসিয়াসে পরিমাপ করে'
          },
          {
            en: 'Counting the letters in the user email address',
            bn: 'ব্যবহারকারীর ইমেইল ঠিকানার অক্ষর গুণে'
          },
          {
            en: 'Binary vectors cannot be compared',
            bn: 'বাইনারি ভেক্টর কখনো তুলনা করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hamming distance measures bit-flip differences via XOR and population count.',
          bn: 'হ্যামিং দূরত্ব XOR এবং বিট গণনার মাধ্যমে পার্থক্য বের করে।'
        },
        explanation: {
          en: 'Binary quantized vectors compute Hamming distance with single-cycle XOR and POPCNT instructions for extreme throughput.',
          bn: '১-বিট বাইনারি ভেক্টরে হ্যামিং দূরত্ব মাত্র একটি চক্রে XOR ও POPCNT কমান্ড দিয়ে অতি দ্রুত বের করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'topk-retrieval',
    title: {
      en: 'Top-K Nearest Neighbor Retrieval & Threshold Filtering',
      bn: 'টপ-কে (Top-K) নিকটতম প্রতিবেশী অনুসন্ধান এবং থ্রেশহোল্ড ফিল্টারিং'
    }
  }
};
