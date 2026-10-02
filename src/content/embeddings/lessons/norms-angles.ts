import type { Lesson } from '../../../lib/types';

export const NormsAnglesLesson: Lesson = {
  slug: 'norms-angles',
  tech: 'embeddings',
  title: {
    en: 'Vector Normalization, Unit Norms & High-Dimensional Angles',
    bn: 'ভেক্টর স্বাভাবিকীকরণ, একক নর্ম এবং বহুমাত্রিক কোণ'
  },
  summary: {
    en: 'Uncover the geometric machinery of normalized vectors: divide magnitude away to map vectors onto unit hyperspheres, transform expensive cosine similarity into single-cycle dot products, and correlate angular separations across 0°, 45°, 60°, and 90°.',
    bn: 'স্বাভাবিকীকৃত ভেক্টরের জ্যামিতিক কার্যপ্রণালী উন্মোচন করুন: ভেক্টরকে একক হাইপারস্ফিয়ারে রূপান্তর, ব্যয়বহুল কোসাইন গণনাকে দ্রুতগতির একক-চক্রের ডট গুণনে রূপান্তর এবং ০°, ৪৫°, ৬০° ও ৯০° কোণের মানের বিশ্লেষণ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'unit-hypersphere-concept-heading',
      text: {
        en: 'The Unit Hypersphere: Why We Strip Away Vector Magnitude',
        bn: 'ইউনিট হাইপারস্ফিয়ার: ভেক্টরের দৈর্ঘ্য বাদ দেওয়ার তাৎপর্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-dimensional embedding spaces, vector magnitude is often an artifact of document word count rather than semantic meaning. Normalization scales every vector so its Euclidean length equals exactly 1.0000, projecting every data point onto the surface of a unit hypersphere. For example, the 2-dimensional vector [3, 4] has an L2 norm of 5 because sqrt(9 + 16) = sqrt(25) = 5. Dividing each component by 5 produces the unit vector [0.6, 0.8], whose length is sqrt(0.36 + 0.64) = 1.0000.',
        bn: 'বহুমাত্রিক এমবেডিং স্পেসে ভেক্টরের সামগ্রিক মান প্রায়শই লেখার শব্দের পরিমাণের ওপর নির্ভর করে, যা প্রকৃত ভাবার্থের সাথে সম্পর্কিত নয়। স্বাভাবিকীকরণ বা নরমালাইজেশন প্রতিটি ভেক্টরের দৈর্ঘ্যকে ঠিক ১.০০০০ মানে স্কেল করে সব ডেটা পয়েন্টকে একটি একক গোলক বা ইউনিট হাইপারস্ফিয়ারের ওপর স্থাপন করে। উদাহরণস্বরূপ, ২ মাত্রার ভেক্টর [৩, ৪] এর L2 নর্ম হলো ৫ কারণ sqrt(৯ + ১৬) = sqrt(২৫) = ৫। প্রতিটি উপাদানকে ৫ দিয়ে ভাগ করলে একক ভেক্টর [০.৬, ০.৮] পাওয়া যায়, যার নতুন দৈর্ঘ্য sqrt(০.৩৬ + ০.৬৪) = ১.০০০০ হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Unit circle geometry showing angular separations and cosine scores across 0°, 45°, 60°, and 90°.',
        bn: 'চিত্র ১: একক বৃত্তের জ্যামিতি যা ০°, ৪৫°, ৬০° এবং ৯০° কোণে কোসাইন সাদৃশ্যের স্কোর প্রদর্শন করে।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">UNIT CIRCLE GEOMETRY &amp; ANGULAR COSINE LANDMARKS</text>
  
  <!-- Circle Area on Left -->
  <g transform="translate(180, 180)">
    <!-- Base Unit Circle (radius 110) -->
    <circle cx="0" cy="0" r="110" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="-130" y1="0" x2="130" y2="0" stroke="#334155" stroke-width="1.5" />
    <line x1="0" y1="-130" x2="0" y2="130" stroke="#334155" stroke-width="1.5" />
    
    <!-- 0 degrees (Along X axis) -->
    <line x1="0" y1="0" x2="110" y2="0" stroke="#10b981" stroke-width="3" />
    <circle cx="110" cy="0" r="5" fill="#10b981" />
    <text x="125" y="4" fill="#4ade80" font-size="11" font-family="monospace" font-weight="bold">0° = 1.0000</text>
    
    <!-- 45 degrees -->
    <line x1="0" y1="0" x2="77.8" y2="-77.8" stroke="#38bdf8" stroke-width="3" />
    <circle cx="77.8" cy="-77.8" r="5" fill="#38bdf8" />
    <text x="88" y="-84" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold">45° = 0.7071</text>
    
    <!-- 60 degrees -->
    <line x1="0" y1="0" x2="55" y2="-95.3" stroke="#facc15" stroke-width="3" />
    <circle cx="55" cy="-95.3" r="5" fill="#facc15" />
    <text x="40" y="-108" fill="#facc15" font-size="11" font-family="monospace" font-weight="bold">60° = 0.5000</text>
    
    <!-- 90 degrees (Along Y axis) -->
    <line x1="0" y1="0" x2="0" y2="-110" stroke="#ef4444" stroke-width="3" />
    <circle cx="0" cy="-110" r="5" fill="#ef4444" />
    <text x="-65" y="-115" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold">90° = 0.0000</text>
  </g>

  <!-- Right Side Calculation Cards -->
  <g transform="translate(460, 70)">
    <rect width="340" height="230" rx="8" fill="#1e293b" stroke="#334155" />
    <rect width="340" height="32" rx="8" fill="#334155" />
    <text x="170" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Vector Normalization Proof</text>
    
    <!-- Card 1 -->
    <rect x="15" y="45" width="310" height="50" rx="5" fill="#0f172a" stroke="#475569" />
    <text x="25" y="68" fill="#cbd5e1" font-size="11" font-family="monospace">Raw Vector: [3, 4]</text>
    <text x="25" y="85" fill="#94a3b8" font-size="10" font-family="monospace">L2 Norm: sqrt(3^2 + 4^2) = 5</text>
    
    <!-- Card 2 -->
    <rect x="15" y="105" width="310" height="50" rx="5" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="128" fill="#4ade80" font-size="11" font-family="monospace" font-weight="bold">Unit Vector: [3/5, 4/5] = [0.6, 0.8]</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="10" font-family="monospace">Length: sqrt(0.36 + 0.64) = 1.0000 ✓</text>
    
    <!-- Card 3 -->
    <rect x="15" y="165" width="310" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="188" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">Hardware Performance Superpower:</text>
    <text x="25" y="205" fill="#cbd5e1" font-size="10" font-family="monospace">Cosine(u, v) = u · v (Zero square roots!)</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'computational-simplification-heading',
      text: {
        en: 'The Computational Superpower: Turning Cosines into Pure Dot Products',
        bn: 'গাণিতিক গতি বৃদ্ধির কৌশল: কোসাইন সাদৃশ্যকে সাধারণ ডট গুণনে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computing square roots and floating-point divisions is computationally expensive, consuming dozens of clock cycles per dimension on CPU and GPU pipelines. When both vectors are pre-normalized to unit norm 1.0, the denominator of the cosine formula (||u|| * ||v||) simplifies to 1 * 1 = 1. Consequently, cosine similarity becomes mathematically identical to the inner dot product. Vector databases leverage hardware SIMD Multiply-Accumulate (MAC) instructions, speeding up search latency by 4 to 8 times.',
        bn: 'বর্গমূল এবং ফ্লোটিং-পয়েন্ট ভাগ করা কম্পিউটারের প্রসেসর ও জিপিইউর জন্য অত্যন্ত ব্যয়বহুল কাজ যা বহু ক্লক সাইকেল নষ্ট করে। উভয় ভেক্টরকে পূর্বে একক নর্ম ১.০ তে স্বাভাবিক করে নিলে কোসাইন সূত্রের হর (||u|| * ||v||) সরাসরি ১ * ১ = ১ হয়ে যায়। ফলে কোসাইন সাদৃশ্য সরাসরি ডট গুণনের সমান হয়। ভেক্টর ডেটাবেসগুলো হার্ডওয়্যারের মাল্টিপ্লাই-অ্যাকুমুলেট (MAC) নির্দেশনা কাজে লাগিয়ে অনুসন্ধানের গতি ৪ থেকে ৮ গুণ বাড়িয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation of vector normalization and unit dot product calculation.',
        bn: 'ভেক্টর স্বাভাবিকীকরণ এবং ইউনিট ডট গুণন নির্ণয়ের TypeScript কোড।'
      },
      code: `export function normalizeVector(vec: number[]): number[] {
  let sumOfSquares = 0;
  for (const val of vec) {
    sumOfSquares += val * val;
  }
  const norm = Math.sqrt(sumOfSquares);

  if (norm === 0) return vec.map(() => 0);
  return vec.map(val => val / norm);
}

export function calculateUnitDotProduct(vecA: number[], vecB: number[]): number {
  let dot = 0;
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
  }
  return dot;
}

// 1. Normalize [3, 4]
const rawVector = [3, 4];
const unitVector = normalizeVector(rawVector);

let unitLengthSq = 0;
for (const val of unitVector) unitLengthSq += val * val;
const unitLength = Math.sqrt(unitLengthSq);

console.log('Normalized Unit Vector:', unitVector); // [0.6, 0.8]
console.log('Verified Unit Length:', Number(unitLength.toFixed(4))); // 1.0000

// 2. Unit dot product for 45-degree angle vectors: [1, 0] and [1, 1]
const uA = normalizeVector([1, 0]);
const uB = normalizeVector([1, 1]);
const angleDot = calculateUnitDotProduct(uA, uB);

console.log('45-Degree Cosine via Unit Dot:', Number(angleDot.toFixed(4))); // 0.7071`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Unit Vector',
          def: {
            en: 'Vector possessing an exact Euclidean length of 1.0, positioned directly on the boundary of a unit hypersphere.',
            bn: 'ভেক্টর যার ইউক্লিডিয়ান দৈর্ঘ্য ঠিক ১.০ হয় এবং যা একটি ইউনিট হাইপারস্ফিয়ারের পৃষ্ঠে অবস্থান করে।'
          }
        },
        {
          term: 'L2 Normalization',
          def: {
            en: 'Scaling transformation dividing each vector component by the L2 norm so the sum of squared elements equals 1.0.',
            bn: 'স্কেলিং রূপান্তর যেখানে প্রতিটি উপাদানকে L2 নর্ম দিয়ে ভাগ করা হয় যাতে বর্গের সমষ্টি ১.০ হয়।'
          }
        },
        {
          term: 'Unit Hypersphere',
          def: {
            en: 'The high-dimensional geometric generalization of a sphere whose radius is fixed at exactly 1.0 from the origin.',
            bn: 'গোলোকের বহুমাত্রিক জ্যামিতিক রূপ যার ব্যাসার্ধ মূলবিন্দু থেকে ঠিক ১.০ একক দূরত্বে নির্ধারিত থাকে।'
          }
        },
        {
          term: 'Multiply-Accumulate',
          def: {
            en: 'Hardware CPU/GPU instruction computing the product of two numbers and adding it to an accumulator in a single clock cycle.',
            bn: 'হার্ডওয়্যারের বিশেষ নির্দেশনা যা একটি একক ক্লক সাইকেলে দুটি সংখ্যার গুণফল বের করে তা যোগ করতে পারে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'normalization-formula-ex1',
      kind: 'mcq',
      topic: 'vector-normalization-procedure',
      question: {
        en: 'How is the vector [3, 4] normalized to unit length?',
        bn: 'ভেক্টর [৩, ৪] কে কীভাবে একক দৈর্ঘ্যে স্বাভাবিক বা নরমালাইজ করা হয়?'
      },
      options: [
        {
          en: 'Calculate norm = sqrt(3^2 + 4^2) = 5, then divide each coordinate by 5 to obtain [0.6, 0.8]',
          bn: 'নর্ম = sqrt(৩^২ + ৪^২) = ৫ বের করে প্রতিটি উপাদানকে ৫ দিয়ে ভাগ করে [০.৬, ০.৮] পাওয়া যায়'
        },
        {
          en: 'Subtract 1 from both coordinates to get [2, 3]',
          bn: 'উভয় স্থানাঙ্ক থেকে ১ বিয়োগ করে [২, ৩] পাওয়া যায়'
        },
        {
          en: 'Multiply both coordinates by 10 to get [30, 40]',
          bn: 'উভয় স্থানাঙ্ককে ১০ দিয়ে গুণ করে [৩০, ৪০] পাওয়া যায়'
        },
        {
          en: 'Replace both coordinates with random numbers',
          bn: 'উভয় স্থানাঙ্ককে এলোমেলো সংখ্যা দিয়ে বদলে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide by the Euclidean magnitude of the vector.',
        bn: 'ভেক্টরের ইউক্লিডিয়ান মান বা দৈর্ঘ্য দিয়ে প্রতিটি উপাদানকে ভাগ করুন।'
      },
      explanation: {
        en: 'Dividing each component by the vector length (5) scales its length to exactly 1.0000.',
        bn: 'ভেক্টরের দৈর্ঘ্য (৫) দিয়ে প্রতিটি উপাদানকে ভাগ করলে তার নতুন মান ঠিক ১.০০০০ হয়।'
      }
    },
    {
      id: 'angle-score-correlation-ex2',
      kind: 'mcq',
      topic: 'geometric-angle-cosine-landmarks',
      question: {
        en: 'What is the Cosine Similarity score between two unit vectors separated by an angle of exactly 60°?',
        bn: 'ঠিক ৬০° কোণে অবস্থিত ২ টি একক ভেক্টরের মধ্যকার কোসাইন সাদৃশ্য কত?'
      },
      options: [
        { en: '0.5000, because cos(60°) = 0.5', bn: '০.৫০০০, কারণ cos(৬০°) = ০.৫' },
        { en: '1.0000, because all unit vectors have score 1', bn: '১.০০০০, কারণ সব একক ভেক্টরের স্কোর ১ হয়' },
        { en: '0.0000, because 60 is divisible by 10', bn: '০.০০০০, কারণ ৬০ সংখ্যাটি ১০ দিয়ে বিভাজ্য' },
        { en: '-1.0000, because the angle is acute', bn: '-১.০০০০, কারণ কোণটি সূক্ষ্মকোণ' }
      ],
      answer: 0,
      hint: {
        en: 'In basic trigonometry, the cosine of 60 degrees equals 1/2.',
        bn: 'প্রাথমিক ত্রিকোণমিতিতে ৬০ ডিগ্রি কোণের কোসাইন মান হলো ১/২ বা ০.৫।'
      },
      explanation: {
        en: 'Cosine similarity is literally cos(θ); for θ = 60°, the score is exactly 0.5000.',
        bn: 'কোসাইন সাদৃশ্য মূলত কোণের কোসাইন মান; ৬০ ডিগ্রির ক্ষেত্রে এর মান ঠিক ০.৫০০০ হয়।'
      }
    },
    {
      id: 'pre-normalization-throughput-gain-ex3',
      kind: 'mcq',
      topic: 'pre-normalized-hardware-acceleration',
      question: {
        en: 'Why does pre-normalizing vectors in a database speed up nearest-neighbor queries by 4 to 8 times?',
        bn: 'ডেটাবেসে ভেক্টরগুলোকে আগে থেকেই নরমালাইজ করে রাখলে অনুসন্ধানের গতি কেন ৪ থেকে ৮ গুণ বৃদ্ধি পায়?'
      },
      options: [
        {
          en: 'It eliminates square root and division operations during search, enabling pure SIMD Multiply-Accumulate (MAC) dot products',
          bn: 'এটি অনুসন্ধানের সময় ব্যয়বহুল বর্গমূল ও ভাগ করা বাদ দিয়ে দ্রুতগতির SIMD মাল্টিপ্লাই-অ্যাকুমুলেট ডট গুণনের সুযোগ দেয়'
        },
        {
          en: 'It decreases the physical temperature of the server room by 20 degrees',
          bn: 'এটি সার্ভার রুমের তাপমাত্রা ২০ ডিগ্রি কমিয়ে দেয়'
        },
        {
          en: 'It compresses 1536 dimensions down to 0 dimensions',
          bn: 'এটি ১৫৩৬ মাত্রাকে কমিয়ে ০ মাত্রায় নিয়ে আসে'
        },
        {
          en: 'It deletes all punctuation marks from document titles',
          bn: 'এটি নথির শিরোনাম থেকে সব বিরামচিহ্ন মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dot products on unit vectors require only multiplication and addition, with zero divisions.',
        bn: 'একক ভেক্টরে ডট গুণন করতে কেবল গুণ ও যোগ প্রয়োজন হয়, কোনো ভাগের দরকার হয় না।'
      },
      explanation: {
        en: 'Hardware MAC instructions run in a single clock cycle, making pre-normalized dot products vastly faster than full cosine formulas.',
        bn: 'হার্ডওয়্যারের MAC কমান্ড মাত্র একটি ক্লক সাইকেলে সম্পন্ন হয়, ফলে স্বাভাবিকীকৃত ডট গুণন অনেক দ্রুত কাজ করে।'
      }
    },
    {
      id: 'perpendicular-vector-angle-ex4',
      kind: 'mcq',
      topic: 'perpendicular-vectors-angle-value',
      question: {
        en: 'What angular separation corresponds to a Cosine Similarity score of 0.0000 between two vectors?',
        bn: 'দুটি ভেক্টরের কোসাইন সাদৃশ্য ০.০০০০ হলে তাদের মধ্যকার কোণের মান কত ডিগ্রি?'
      },
      options: [
        { en: '90° (perpendicular / orthogonal)', bn: '৯০° (লম্ব বা অর্থোগোনাল)' },
        { en: '0° (identical ray)', bn: '০° (একই সরলরেখা)' },
        { en: '180° (diametrically opposite)', bn: '১৮০° (সরাসরি বিপরীত দিক)' },
        { en: '45° (diagonal alignment)', bn: '৪৫° (কর্ণ বরাবর অবস্থান)' }
      ],
      answer: 0,
      hint: {
        en: 'Perpendicular vectors have zero projection on one another.',
        bn: 'পরস্পর লম্ব ভেক্টরগুলোর একটির ওপর অপরটির প্রক্ষেপণ শূন্য হয়।'
      },
      explanation: {
        en: 'cos(90°) = 0; perpendicular vectors are completely orthogonal and share zero directional alignment.',
        bn: 'cos(৯০°) = ০; লম্ব ভেক্টরগুলো একে অপরের সাথে কোনো দিকগত মিল ভাগ করে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-norms-angles',
    title: {
      en: 'Vector Normalization and Angles Quiz',
      bn: 'ভেক্টর স্বাভাবিকীকরণ এবং কোণ কুইজ'
    },
    questions: [
      {
        id: 'quiz-unit-vector-length-invariance',
        kind: 'mcq',
        topic: 'unit-vector-definition',
        question: {
          en: 'What is always the Euclidean length of any properly normalized unit vector?',
          bn: 'যেকোনো সঠিকভাবে স্বাভাবিকীকৃত একক ভেক্টরের ইউক্লিডিয়ান দৈর্ঘ্য সর্বদা কত হয়?'
        },
        options: [
          { en: 'Exactly 1.0000', bn: 'ঠিক ১.০০০০' },
          { en: 'Always 0.0000', bn: 'সর্বদা ০.০০০০' },
          { en: 'Equal to the number of dimensions (e.g. 1536)', bn: 'মাত্রার সংখ্যার সমান (যেমন ১৫৩৬)' },
          { en: 'It varies randomly between -1 and +1', bn: 'এটি -১ এবং +১ এর মধ্যে এলোমেলোভাবে পরিবর্তিত হয়' }
        ],
        answer: 0,
        hint: {
          en: 'By definition, a unit vector has length one.',
          bn: 'সংজ্ঞা অনুসারেই একটি একক ভেক্টরের দৈর্ঘ্য এক হয়।'
        },
        explanation: {
          en: 'A unit vector is explicitly constrained to have magnitude 1.0, placing it on the unit hypersphere surface.',
          bn: 'একক ভেক্টরের মান সর্বদা ১.০ নির্ধারণ করা থাকে, যা এটিকে ইউনিট গোলকের উপরিভাগে ধরে রাখে।'
        }
      },
      {
        id: 'quiz-floating-point-drift-tolerance',
        kind: 'mcq',
        topic: 'floating-point-rounding-tolerance',
        question: {
          en: 'In floating-point software, why might the computed dot product of two identical unit vectors return 1.0000001 or 0.9999999 instead of exactly 1.0?',
          bn: 'সফটওয়্যারে দুটি অভিন্ন একক ভেক্টরের ডট গুণন করলে কেন হুবহু ১.০ না এসে ১.০০০০০০১ বা ০.৯৯৯৯৯৯৯ আসতে পারে?'
        },
        options: [
          {
            en: 'Standard IEEE 754 floating-point rounding errors accumulate across 1536 dimensional additions, requiring clamp to [-1.0, 1.0]',
            bn: '১৫৩৬ মাত্রার যোগফল করার সময় IEEE 754 ফ্লোটিং-পয়েন্ট রাউন্ডিং ত্রুটি জমে যায়, যার জন্য মানকে [-১.০, ১.০] সীমার মধ্যে ক্ল্যাম্প করতে হয়'
          },
          {
            en: 'Because computer hardware loses electricity during addition',
            bn: 'কারণ যোগ করার সময় হার্ডওয়্যারে বিদ্যুৎ কমে যায়'
          },
          {
            en: 'The operating system deletes the decimal point',
            bn: 'অপারেটিং সিস্টেম দশমিক বিন্দু মুছে ফেলে'
          },
          {
            en: 'Float numbers cannot represent the number 1',
            bn: 'ফ্লোট সংখ্যা কখনোই ১ সংখ্যাটি প্রকাশ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Floating-point math has finite precision; defensive clamping prevents Math.acos(1.0000001) from returning NaN.',
          bn: 'ফ্লোটিং-পয়েন্টের সীমিত নির্ভুলতার কারণে সীমার বাইরে যাওয়া রোধ করতে ক্ল্যাম্পিং জরুরি।'
        },
        explanation: {
          en: 'Clamping calculated cosine scores between -1.0 and 1.0 prevents NaN exceptions in downstream inverse trigonometric functions.',
          bn: 'স্কোরকে -১.০ এবং ১.০ এর মধ্যে ক্ল্যাম্প করে রাখলে গাণিতিক ত্রুটি এড়ানো সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-inner-product-vs-cosine',
        kind: 'mcq',
        topic: 'inner-product-vs-cosine-equivalence',
        question: {
          en: 'When configuring a vector index in databases like Pinecone, Milvus, or Qdrant, when should you select "Dot Product" (Inner Product) instead of "Cosine"?',
          bn: 'Pinecone, Milvus বা Qdrant-এর মতো ডেটাবেসে ইনডেক্স তৈরির সময় কখন "Cosine"-এর বদলে "Dot Product" নির্বাচন করা উচিত?'
        },
        options: [
          {
            en: 'When your ingestion pipeline guarantees that all stored embeddings and query vectors are pre-normalized to unit length',
            bn: 'যখন আপনার পাইপলাইন নিশ্চিত করে যে সংরক্ষিত এবং অনুসন্ধানের সমস্ত ভেক্টর আগে থেকেই একক দৈর্ঘ্যে স্বাভাবিক করা আছে'
          },
          {
            en: 'Only when querying documents written in ancient Egyptian hieroglyphics',
            bn: 'কেবল যখন প্রাচীন হায়ারোগ্লিফিক লিপিতে লেখা নথি খোঁজা হয়'
          },
          {
            en: 'When you want search queries to run 100 times slower',
            bn: 'যখন আপনি চান অনুসন্ধান ১০০ গুণ বেশি ধীরগতিতে চলুক'
          },
          {
            en: 'Dot product should never be selected in modern databases',
            bn: 'আধুনিক ডেটাবেসে কখনোই ডট গুণন নির্বাচন করা উচিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If vectors are pre-normalized, Dot Product gives the exact same result as Cosine but with faster execution.',
          bn: 'ভেক্টর যদি আগে থেকেই নরমালাইজ করা থাকে, তবে ডট গুণন কোসাইনের সমান ফল দেয় কিন্তু গতি অনেক দ্রুত হয়।'
        },
        explanation: {
          en: 'Selecting Dot Product for pre-normalized vectors unlocks maximum database query throughput by skipping redundant norm calculations.',
          bn: 'স্বাভাবিকীকৃত ভেক্টরে ডট গুণন বাছাই করলে ডেটাবেস অপ্রয়োজনীয় হিসাব বাদ দিয়ে সর্বোচ্চ গতিতে সার্চ করতে পারে।'
        }
      },
      {
        id: 'quiz-unit-vector-multiplication-safety',
        kind: 'mcq',
        topic: 'zero-vector-normalization-edge-case',
        question: {
          en: 'What edge case must normalization functions handle to prevent catastrophic runtime exceptions?',
          bn: 'ভেক্টর স্বাভাবিক করার সময় কোন বিশেষ পরিস্থিতি সামাল না দিলে রানটাইম ক্র্যাশ হতে পারে?'
        },
        options: [
          {
            en: 'A zero vector [0, 0, ..., 0] has an L2 norm of 0, which triggers a division-by-zero exception if not guarded',
            bn: 'একটি শূন্য ভেক্টর [০, ০, ..., ০] এর L2 নর্ম ০ হয়, যা সতর্ক না থাকলে ভাগ-দ্বারা-শূন্য (division by zero) ক্র্যাশ তৈরি করে'
          },
          {
            en: 'Vectors that contain the number 7 explode the CPU cache',
            bn: '৭ সংখ্যাটি থাকা ভেক্টর প্রসেসরের ক্যাশ নষ্ট করে দেয়'
          },
          {
            en: 'Vectors cannot have an odd number of dimensions',
            bn: 'ভেক্টরের মাত্রা কখনোই বিজোড় সংখ্যা হতে পারে না'
          },
          {
            en: 'Normalization only crashes on Tuesdays',
            bn: 'স্বাভাবিকীকরণ কেবল মঙ্গলবারে ক্র্যাশ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dividing by zero is mathematically undefined and throws errors in software.',
          bn: 'শূন্য দিয়ে ভাগ করা গণিতে অসংজ্ঞায়িত এবং সফটওয়্যারে মারাত্মক ভুল তৈরি করে।'
        },
        explanation: {
          en: 'Checking if norm === 0 before dividing prevents NaN results and runtime crashes on empty or corrupt vectors.',
          bn: 'ভাগ করার আগে নর্ম ০ কিনা তা পরীক্ষা করে নিলে অনাকাঙ্ক্ষিত ক্র্যাশ ও NaN ত্রুটি এড়ানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'distance-metrics',
    title: {
      en: 'Distance Metrics: Euclidean (L2), Manhattan (L1) & Dot Product',
      bn: 'দূরত্ব পরিমাপ পদ্ধতি: ইউক্লিডিয়ান (L2), ম্যানহাটন (L1) এবং ডট গুণন'
    }
  }
};
