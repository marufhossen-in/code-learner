import type { Lesson } from '../../../lib/types';

export const VectorsAndTheFrameLesson: Lesson = {
  slug: 'vectors-and-the-frame',
  tech: 'r',
  title: {
    en: 'R Vectors & Data Frames: Types, Indexing & Recycling',
    bn: 'R ভেক্টর এবং ডাটা ফ্রেম: টাইপ, ইনডেক্সিং ও রিসাইক্লিং'
  },
  summary: {
    en: 'A beginner introduction to statistical computing in R: atomic vectors (numeric, character, logical), 1-based indexing, recycling rules, and tabular data.frame structures.',
    bn: 'R এ স্ট্যাটিস্টিক্যাল কম্পিউটিংয়ের প্রাথমিক ধারণা: অ্যাটমিক ভেক্টর (সংখ্যা, ক্যারেক্টার, লজিক্যাল), ১-ভিত্তিক ইনডেক্সিং, রিসাইক্লিং রুল এবং tabular data.frame গঠন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'vectors-intro',
      text: {
        en: '1. What are R Atomic Vectors?',
        bn: '১. R অ্যাটমিক ভেক্টর কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you begin programming in R, you encounter a unique design principle: scalars do not exist. Even a solitary number like 42 is an atomic vector containing exactly 1 element.',
        bn: 'যখন আপনি R প্রোগ্রামিং শুরু করেন, একটি অনন্য নিয়মের মুখোমুখি হবেন: এখানে কোনো স্কেলার মান নেই। এমনকি ৪২ এর মতো একটি একক সংখ্যাও আসলে ১ টি উপাদান বিশিষ্ট একটি অ্যাটমিক ভেক্টর।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In R, an atomic vector is a contiguous sequence of values where all elements must share the identical data type. R provides 4 primary atomic vector types used in data science:',
        bn: 'R এ অ্যাটমিক ভেক্টর হলো একই ডাটা টাইপের ধারাবাহিক মানের সংগ্রহ। ডাটা সায়েন্সের জন্য R এ ৪ টি প্রধান অ্যাটমিক ভেক্টর টাইপ ব্যবহৃত হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Numeric / Double (e.g. c(1.5, 2.8, 42.0)): Stores 64-bit floating point numbers. This is the default numeric type in R.',
          bn: '১. Numeric / Double (যেমন c(1.5, 2.8, 42.0)): ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যা সংরক্ষণ করে। এটি R এর ডিফল্ট সংখ্যা টাইপ।'
        },
        {
          en: '2. Integer (e.g. c(1L, 2L, 42L)): Stores whole numbers denoted explicitly by appending a capital "L" suffix to prevent floating-point allocation.',
          bn: '২. Integer (যেমন c(1L, 2L, 42L)): পূর্ণসংখ্যা সংরক্ষণ করে যা বোঝাতে সংখ্যার শেষে ক্যাপিটাল "L" প্রত্যয় যুক্ত করা হয়।'
        },
        {
          en: '3. Character (e.g. c("setosa", "versicolor")): Stores text strings enclosed in single or double quotes.',
          bn: '৩. Character (যেমন c("setosa", "versicolor")): উদ্ধৃতি চিহ্নের মধ্যে টেক্সট স্ট্রিং সংরক্ষণ করে।'
        },
        {
          en: '4. Logical (e.g. c(TRUE, FALSE, TRUE)): Stores boolean truth values (TRUE or FALSE, abbreviated T or F).',
          bn: '৪. Logical (যেমন c(TRUE, FALSE, TRUE)): বুলিয়ান সত্য বা মিথ্যা মান সংরক্ষণ করে (TRUE বা FALSE, সংক্ষেপে T বা F)।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'vectors-and-dataframe-diagram',
      title: {
        en: 'R Atomic Vectors & 2D Data Frame Architecture',
        bn: 'R অ্যাটমিক ভেক্টর এবং ২D ডাটা ফ্রেম আর্কিটেকচার'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">R Data Structures: 1-Based Vectors &amp; data.frame</text>' +
          '<!-- Column 1: 1-Based Atomic Vector -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. ATOMIC VECTOR: c(10, 20, 30)</text>' +
            '<rect x="15" y="45" width="190" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Index [1] &#x2192; Value: 10</text>' +
            '<text x="25" y="86" fill="#94a3b8" font-size="8">1-Based! First element is [1]</text>' +
            '<rect x="15" y="110" width="190" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="133" fill="#38bdf8" font-size="10" font-weight="bold">Index [2] &#x2192; Value: 20</text>' +
            '<text x="25" y="151" fill="#94a3b8" font-size="8">x[2] returns second element</text>' +
            '<rect x="15" y="175" width="190" height="55" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="25" y="198" fill="#38bdf8" font-size="10" font-weight="bold">Index [3] &#x2192; Value: 30</text>' +
            '<text x="25" y="216" fill="#94a3b8" font-size="8">Negative: x[-2] drops index 2</text>' +
            '<rect x="15" y="240" width="190" height="70" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="110" y="262" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Coercion Hierarchy</text>' +
            '<text x="110" y="280" fill="#cbd5e1" font-size="9" text-anchor="middle">logical &#x2192; integer &#x2192; numeric</text>' +
            '<text x="110" y="296" fill="#cbd5e1" font-size="9" text-anchor="middle">&#x2192; character (most flexible)</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 260 200 L 285 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Column 2: Recycling Rule -->' +
          '<g transform="translate(295, 60)">' +
            '<rect width="210" height="330" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="1.5"/>' +
            '<text x="105" y="26" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">2. RECYCLING RULE</text>' +
            '<rect x="12" y="45" width="186" height="50" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="66" fill="#facc15" font-size="10" font-weight="bold">Vector A (Len 4):</text>' +
            '<text x="20" y="82" fill="#cbd5e1" font-size="9" font-family="monospace">c(1, 2, 3, 4)</text>' +
            '<rect x="12" y="105" width="186" height="65" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="126" fill="#facc15" font-size="10" font-weight="bold">Vector B (Len 2):</text>' +
            '<text x="20" y="142" fill="#cbd5e1" font-size="9" font-family="monospace">c(10, 20)</text>' +
            '<text x="20" y="158" fill="#34d399" font-size="8">Recycled to: c(10, 20, 10, 20)</text>' +
            '<rect x="12" y="180" width="186" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="20" y="202" fill="#34d399" font-size="10" font-weight="bold">A + B (Sum):</text>' +
            '<text x="20" y="222" fill="#38bdf8" font-size="9" font-family="monospace">c(11, 22, 13, 24)</text>' +
            '<text x="105" y="268" fill="#cbd5e1" font-size="10" text-anchor="middle">Vectorized in C SIMD</text>' +
            '<text x="105" y="286" fill="#34d399" font-size="10" text-anchor="middle">50x faster than loops</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 515 200 L 540 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Column 3: 2D Data Frame -->' +
          '<g transform="translate(550, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. data.frame (2D Table)</text>' +
            '<rect x="12" y="45" width="196" height="150" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#60a5fa" font-size="10" font-weight="bold">id (Int) | name (Chr) | score (Num)</text>' +
            '<line x1="16" y1="76" x2="204" y2="76" stroke="#64748b" stroke-width="1"/>' +
            '<text x="20" y="96" fill="#cbd5e1" font-size="9">1  | "Alice"    | 94.5</text>' +
            '<text x="20" y="116" fill="#cbd5e1" font-size="9">2  | "Bob"      | 88.0</text>' +
            '<text x="20" y="136" fill="#cbd5e1" font-size="9">3  | "Charlie"  | 76.2</text>' +
            '<text x="20" y="160" fill="#38bdf8" font-size="9">df[1, 2] &#x2192; "Alice"</text>' +
            '<text x="20" y="180" fill="#34d399" font-size="9">df$score &#x2192; c(94.5, 88.0, 76.2)</text>' +
            '<text x="110" y="235" fill="#cbd5e1" font-size="10" text-anchor="middle">Columns = Named Vectors</text>' +
            '<text x="110" y="255" fill="#cbd5e1" font-size="10" text-anchor="middle">All columns must share</text>' +
            '<text x="110" y="272" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Equal Row Length (3)</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'indexing-and-recycling',
      text: {
        en: '2. 1-Based Indexing, Negative Exclusion & Recycling',
        bn: '২. ১-ভিত্তিক ইনডেক্সিং, নেগেটিভ বাদ দেওয়া এবং রিসাইক্লিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike languages derived from C that start indexing at 0, R is mathematically inspired and indexes sequences starting at 1. Subsetting in R provides 3 powerful patterns:',
        bn: 'C ভাষা থেকে তৈরি অন্যান্য ভাষার মতো ০ নয়, R গণিতের ধারায় অনুপ্রাণিত হয়ে ১ থেকে ইনডেক্সিং শুরু করে। R এ সাবসেট বা ডাটা নির্বাচনের ৩ টি শক্তিশালী প্যাটার্ন রয়েছে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Positive Integer Indexing: x[c(1, 3)] retrieves elements at position 1 and position 3.',
          bn: '১. পজিটিভ ইন্টিজার ইনডেক্সিং: x[c(1, 3)] ১ নম্বর এবং ৩ নম্বর অবস্থানের উপাদানগুলোকে বের করে আনে।'
        },
        {
          en: '2. Negative Integer Indexing: x[-2] returns all elements except the element at index 2.',
          bn: '২. নেগেটিভ ইন্টিজার ইনডেক্সিং: x[-2] ২ নম্বর ইনডেক্সের উপাদানটিকে বাদ দিয়ে বাকি সব উপাদান ফেরত দেয়।'
        },
        {
          en: '3. Logical Masking: x[x > 20] evaluates a boolean condition on every element, returning only values where the condition is TRUE.',
          bn: '৩. লজিক্যাল মাস্কিং: x[x > 20] প্রতিটি উপাদানের ওপর শর্ত যাচাই করে কেবল সত্য (TRUE) মানগুলোকে নির্বাচন করে।'
        }
      ]
    },
    {
      type: 'para',
      text: {
        en: 'When performing operations on 2 vectors of unequal length, R applies the Recycling Rule. The elements of the shorter vector repeat in sequence until they match the length of the longer vector. For example, c(1, 2, 3, 4) + c(10, 20) recycles the 2-element vector to c(10, 20, 10, 20), computing c(11, 22, 13, 24).',
        bn: 'ভিন্ন দৈর্ঘ্যের ২টি ভেক্টরের মাঝে গণনা করার সময় R রিসাইক্লিং রুল প্রয়োগ করে। ছোট ভেক্টরের উপাদানগুলো বারবার ঘুরে বড় ভেক্টরের সমান দৈর্ঘ্য তৈরি করে। যেমন c(1, 2, 3, 4) + c(10, 20) হিসাবের সময় ছোট ভেক্টরটি c(10, 20, 10, 20) হয়ে যায় এবং ফলাফল c(11, 22, 13, 24) তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'dataframe-structure',
      text: {
        en: '3. Tabular Data with data.frame',
        bn: '৩. data.frame দিয়ে দ্বি-মাত্রিক টেবিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A data.frame is R\'s fundamental data structure for statistical analysis. Internally, a data frame is a list of equal-length atomic vectors, where each vector forms a column. Columns can hold different data types (such as numeric, character, or factor), but all columns must share identical row counts.',
        bn: 'data.frame হলো স্ট্যাটিস্টিক্যাল বিশ্লেষণের জন্য R এর সবচেয়ে গুরুত্বপূর্ণ ডাটা স্ট্রাকচার। অভ্যন্তরীণভাবে এটি একই দৈর্ঘ্যের কয়েকটি ভেক্টরের একটি তালিকা, যেখানে প্রতিটি ভেক্টর একটি কলাম তৈরি করে। কলামগুলো ভিন্ন ভিন্ন টাইপ ধারণ করতে পারে, কিন্তু সমস্ত কলামের সারির সংখ্যা সমান হতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'vector-simulator',
      text: {
        en: '4. R Vector & Data Frame Engine in TypeScript',
        bn: '৪. TypeScript এ R ভেক্টর ও ডাটা ফ্রেম ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how R evaluates atomic type coercion, executes 1-based indexing and negative subsetting, implements the vector recycling rule, and filters tabular data frames:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে R টাইপ রূপান্তর মূল্যায়ন করে, ১-ভিত্তিক ইনডেক্সিং ও নেগেটিভ সাবসেটিং করে, ভেক্টর রিসাইক্লিং চালায় এবং ডাটা ফ্রেম ফিল্টার করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of R atomic vector coercion, 1-based indexing, recycling addition, and 2D data frame subsetting.',
        bn: 'R অ্যাটমিক ভেক্টর টাইপ রূপান্তর, ১-ভিত্তিক ইনডেক্সিং, রিসাইক্লিং যোগ এবং ডাটা ফ্রেমের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of R Atomic Vectors, 1-Based Indexing, Recycling & Data Frames

// 1. R Vector class simulating 1-based indexing and recycling
class RVector<T> {
  public elements: T[];

  constructor(items: T[]) {
    this.elements = [...items];
  }

  get length(): number {
    return this.elements.length;
  }

  // 1-based indexing: index 1 is elements[0]
  get(index1Based: number): T {
    if (index1Based < 1 || index1Based > this.elements.length) {
      throw new Error('Index out of bounds: R uses 1-based indexing');
    }
    return this.elements[index1Based - 1];
  }

  // Negative indexing: drops the specified 1-based index
  exclude(index1Based: number): T[] {
    return this.elements.filter((_, idx) => idx !== index1Based - 1);
  }
}

// Vectorized addition with the Recycling Rule
function addVectors(v1: number[], v2: number[]): number[] {
  const maxLen = Math.max(v1.length, v2.length);
  const result: number[] = [];

  for (let i = 0; i < maxLen; i++) {
    // Recycle elements using modulo
    const val1 = v1[i % v1.length];
    const val2 = v2[i % v2.length];
    result.push(val1 + val2);
  }
  return result;
}

// 2D Data Frame simulation
interface RDataFrameRow {
  id: number;
  species: string;
  sepalLength: number;
}

class RDataFrame {
  private rows: RDataFrameRow[] = [];

  constructor(data: RDataFrameRow[]) {
    this.rows = data;
  }

  // Filter rows by condition (logical masking)
  filterBySepal(minVal: number): RDataFrameRow[] {
    return this.rows.filter((r) => r.sepalLength >= minVal);
  }
}

// Execution demonstration
// 1. Test 1-based indexing and negative exclusion
const vec = new RVector<number>([10, 20, 30, 40]);
console.log('R 1-based index 1: ' + vec.get(1)); // -> 10
console.log('R 1-based index 3: ' + vec.get(3)); // -> 30

const dropped = vec.exclude(2); // Drop index 2 (value 20)
console.log('After negative index [-2] count: ' + dropped.length); // -> 3

// 2. Test Recycling Rule: c(1, 2, 3, 4) + c(10, 20)
const shortVec = [10, 20];
const longVec = [1, 2, 3, 4];
const sumVec = addVectors(longVec, shortVec);
console.log('Recycling addition result: ' + sumVec.join(', ')); // -> 11, 22, 13, 24

// 3. Test data.frame logical filtering
const df = new RDataFrame([
  { id: 1, species: 'setosa', sepalLength: 5.1 },
  { id: 2, species: 'versicolor', sepalLength: 6.4 },
  { id: 3, species: 'virginica', sepalLength: 7.2 }
]);

const filtered = df.filterBySepal(6.0);
console.log('Filtered rows meeting threshold: ' + filtered.length); // -> 2`
    }
  ],
  exercises: [
    {
      id: 'vec-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the starting index number for atomic vectors in the R programming language?',
        bn: 'R প্রোগ্রামিং ভাষায় অ্যাটমিক ভেক্টরের শুরু ইনডেক্স নম্বর কত?'
      },
      options: [
        {
          en: '1 (R uses 1-based indexing)',
          bn: '১ (R এ ১-ভিত্তিক ইনডেক্সিং ব্যবহৃত হয়)'
        },
        {
          en: '0 (R uses 0-based indexing)',
          bn: '০ (R এ ০-ভিত্তিক ইনডেক্সিং ব্যবহৃত হয়)'
        },
        {
          en: '-1 (R uses negative indexing)',
          bn: '-১ (R এ নেগেটিভ ইনডেক্সিং ব্যবহৃত হয়)'
        },
        {
          en: '10 (R indexes start at 10)',
          bn: '১০ (R এর ইনডেক্স ১০ থেকে শুরু হয়)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unlike Python and C, R starts counting at 1.',
        bn: 'পাইথন বা সি-এর মতো নয়, R গণনা ১ থেকে শুরু করে।'
      },
      explanation: {
        en: 'R uses 1-based indexing. The first element of vector x is accessed via x[1], not x[0].',
        bn: 'R এ ১-ভিত্তিক ইনডেক্সিং ব্যবহৃত হয়। ভেক্টরের প্রথম উপাদানটি x[1] দিয়ে পাওয়া যায়।'
      }
    },
    {
      id: 'vec-ex-2',
      kind: 'mcq',
      question: {
        en: 'What occurs when adding vector c(1, 2, 3, 4) to vector c(10, 20) under R recycling rules?',
        bn: 'R এর রিসাইক্লিং রুলের অধীনে c(1, 2, 3, 4) এবং c(10, 20) ভেক্টর যোগ করলে কী ঘটে?'
      },
      options: [
        {
          en: 'c(10, 20) is recycled to c(10, 20, 10, 20), producing result c(11, 22, 13, 24)',
          bn: 'c(10, 20) রিসাইকেল হয়ে c(10, 20, 10, 20) হয়, ফলে ফলাফল c(11, 22, 13, 24) তৈরি হয়'
        },
        {
          en: 'R throws a fatal error and terminates the session immediately',
          bn: 'R একটি মারাত্মক ত্রুটি দিয়ে সাথে সাথে প্রোগ্রাম বন্ধ করে দেয়'
        },
        {
          en: 'Only the first 2 elements are added, dropping elements 3 and 4',
          bn: 'কেবল প্রথম ২ টি উপাদান যোগ হয় এবং ৩ ও ৪ নম্বর উপাদান বাদ পড়ে'
        },
        {
          en: 'All numbers are converted into character strings',
          bn: 'সমস্ত সংখ্যা ক্যারেক্টার স্ট্রিংয়ে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The shorter vector repeats its elements until it matches the length of the longer vector.',
        bn: 'ছোট ভেক্টরটির উপাদানগুলো বড় ভেক্টরের সমান না হওয়া পর্যন্ত পুনরায় আবর্তিত হয়।'
      },
      explanation: {
        en: 'Under R recycling rules, the shorter 2-element vector repeats to match the 4-element vector, yielding c(1+10, 2+20, 3+10, 4+20) = c(11, 22, 13, 24).',
        bn: 'রিসাইক্লিং রুলের অধীনে ২-উপাদানের ছোট ভেক্টরটি ৪-উপাদানের ভেক্টরের সাথে যোগের সময় c(1+10, 2+20, 3+10, 4+20) আবর্তিত হয়ে c(11, 22, 13, 24) তৈরি করে।'
      }
    },
    {
      id: 'vec-ex-3',
      kind: 'mcq',
      question: {
        en: 'What does negative indexing (e.g. x[-2]) accomplish in R?',
        bn: 'R এ নেগেটিভ ইনডেক্সিং (যেমন x[-2]) কী কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It returns all elements of the vector except the element at position 2',
          bn: 'এটি ২ নম্বর অবস্থানের উপাদানটিকে বাদ দিয়ে ভেক্টরের বাকি সমস্ত উপাদান ফেরত দেয়'
        },
        {
          en: 'It counts elements backwards from the end of the vector like Python',
          bn: 'এটি পাইথনের মতো ভেক্টরের শেষ থেকে পেছনের দিকে উপাদান গণনা করে'
        },
        {
          en: 'It multiplies every element in the vector by -2',
          bn: 'এটি ভেক্টরের প্রতিটি উপাদানকে -২ দিয়ে গুণ করে'
        },
        {
          en: 'It converts the vector into an empty list',
          bn: 'এটি ভেক্টরটিকে একটি খালি লিস্টে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Negative indices in R mean exclusion, not reverse counting.',
        bn: 'R এ নেগেটিভ ইনডেক্স মানে বাদ দেওয়া, পেছন থেকে গোনা নয়।'
      },
      explanation: {
        en: 'In R, a negative integer index excludes that specific position, returning a subset containing all other elements.',
        bn: 'R এ নেগেটিভ ইনডেক্স সেই নির্দিষ্ট অবস্থানের উপাদান বাদ দিয়ে বাকি উপাদানগুলোর সাবসেট প্রদান করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-vectors-and-the-frame',
    title: {
      en: 'R Vectors and Data Frames Quiz',
      bn: 'R ভেক্টর এবং ডাটা ফ্রেম কুইজ'
    },
    questions: [
      {
        id: 'vec-q1',
        kind: 'mcq',
        question: {
          en: 'If an atomic vector in R contains both numbers and text strings (e.g. c(1, "hello", 3)), what type will all elements be coerced into?',
          bn: 'R এ একটি অ্যাটমিক ভেক্টরে সংখ্যা ও টেক্সট স্ট্রিং উভয়ই থাকলে (যেমন c(1, "hello", 3)), সমস্ত উপাদান কোন টাইপে রূপান্তরিত হবে?'
        },
        options: [
          {
            en: 'Character vector (character is the most flexible type in R coercion)',
            bn: 'Character ভেক্টর (R টাইপ রূপান্তরে ক্যারেক্টার হলো সবচেয়ে ফ্লেক্সিবল টাইপ)'
          },
          {
            en: 'Numeric vector (the string is converted to 0)',
            bn: 'Numeric ভেক্টর (স্ট্রিংটি ০ তে রূপান্তরিত হয়)'
          },
          {
            en: 'Logical vector of TRUE and FALSE',
            bn: 'TRUE এবং FALSE এর Logical ভেক্টর'
          },
          {
            en: 'The operation raises a syntax error and fails to compile',
            bn: 'অপারেশনটি সিনট্যাক্স এরর দিয়ে কম্পাইল হতে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Atomic vectors can only hold 1 type; character sits at the top of the coercion hierarchy.',
          bn: 'অ্যাটমিক ভেক্টর কেবল ১ টি টাইপ রাখতে পারে; ক্যারেক্টার রূপান্তরের শীর্ষে থাকে।'
        },
        explanation: {
          en: 'Because atomic vectors must be homogeneous, R coerces all elements to character strings (the least restrictive type in: logical -> integer -> numeric -> character).',
          bn: 'অ্যাটমিক ভেক্টরের تمام উপাদান একই টাইপের হতে হয়, তাই R সমস্ত উপাদানকে Character স্ট্রিংয়ে রূপান্তর করে।'
        }
      },
      {
        id: 'vec-q2',
        kind: 'mcq',
        question: {
          en: 'How do you explicitly denote an integer constant in R code rather than a floating-point double?',
          bn: 'R কোডে ফ্লোটিং-পয়েন্ট ডাবল না বুঝিয়ে কীভাবে স্পষ্টভাবে পূর্ণসংখ্যা বা ইন্টিজার নির্দেশ করা হয়?'
        },
        options: [
          {
            en: 'Append a capital "L" suffix (e.g. 42L)',
            bn: 'সংখ্যার শেষে ক্যাপিটাল "L" প্রত্যয় যোগ করে (যেমন 42L)'
          },
          {
            en: 'Prefix with the word "int:" (e.g. int:42)',
            bn: 'শুরুতে "int:" প্রিফিক্স দিয়ে (যেমন int:42)'
          },
          {
            en: 'Wrap the number in curly braces (e.g. {42})',
            bn: 'সংখ্যাটিকে কার্লি ব্র্যাকেটে ঘিরে (যেমন {42})'
          },
          {
            en: 'Write the number in hexadecimal format only',
            bn: 'শুধুমাত্র হেক্সাডেসিমেল ফরম্যাটে সংখ্যা লিখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In R, numbers without an "L" suffix are stored as 64-bit doubles.',
          bn: 'R এ "L" প্রত্যয় ছাড়া সমস্ত সংখ্যা ৬৪-বিট ডাবল হিসেবে সংরক্ষিত হয়।'
        },
        explanation: {
          en: 'In R, 42 is stored as a double. Appending "L" (42L) instructs the interpreter to allocate a 32-bit integer.',
          bn: 'R এ ৪২ সংখ্যাটি ডাবল হিসেবে থাকে। পূর্ণসংখ্যা বোঝাতে শেষে "L" (42L) যোগ করতে হয়।'
        }
      },
      {
        id: 'vec-q3',
        kind: 'mcq',
        question: {
          en: 'What structural requirement must all columns in an R data.frame satisfy?',
          bn: 'একটি R data.frame-এর সমস্ত কলামকে কোন কাঠামোগত শর্তটি পূরণ করতে হয়?'
        },
        options: [
          {
            en: 'All columns must have the exact same number of rows (equal length)',
            bn: 'সমস্ত কলামে অবশ্যই হুবহু সমান সংখ্যক সারি (সমান দৈর্ঘ্য) থাকতে হবে'
          },
          {
            en: 'All columns must hold the exact same data type',
            bn: 'تمام কলামে অবশ্যই হুবহু একই ডাটা টাইপ থাকতে হবে'
          },
          {
            en: 'A data frame can only contain a maximum of 2 columns',
            bn: 'একটি ডাটা ফ্রেমে সর্বোচ্চ ২ টি কলাম থাকতে পারে'
          },
          {
            en: 'Column names must be written in pure Latin alphabet',
            bn: 'কলামের নাম খাঁটি ল্যাটিন বর্ণমালায় লেখা হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A data frame is a list of equal-length vectors.',
          bn: 'একটি ডাটা ফ্রেম মূলত সমান দৈর্ঘ্যের ভেক্টরের তালিকা।'
        },
        explanation: {
          en: 'While different columns in a data.frame can store different data types, every column vector must have the same length (equal row count).',
          bn: 'data.frame-এর বিভিন্ন কলাম ভিন্ন ভিন্ন ডাটা টাইপ রাখতে পারলেও, প্রতিটি কলামের সারির সংখ্যা সমান হতে হয়।'
        }
      },
      {
        id: 'vec-q4',
        kind: 'mcq',
        question: {
          en: 'Which operator extracts a column from a data frame as a raw vector by column name?',
          bn: 'কোন অপারেটরটি কলামের নাম দিয়ে ডাটা ফ্রেম থেকে একটি কলামকে সরাসরি ভেক্টর হিসেবে বের করে আনে?'
        },
        options: [
          {
            en: 'The dollar operator $ (e.g. df$score)',
            bn: 'ডলার অপারেটর $ (যেমন df$score)'
          },
          {
            en: 'The arrow operator <-',
            bn: 'তীর অপারেটর <-'
          },
          {
            en: 'The colon operator :',
            bn: 'কোলন অপারেটর :'
          },
          {
            en: 'The pipe operator |>',
            bn: 'পাইপ অপারেটর |>'
          }
        ],
        answer: 0,
        hint: {
          en: 'The dollar symbol is standard for accessing named columns.',
          bn: 'নামযুক্ত কলাম অ্যাক্সেস করতে ডলার চিহ্ন মানসম্মত।'
        },
        explanation: {
          en: 'The $ operator extracts a named column from a data frame as a vector (e.g., df$score returns the score vector).',
          bn: '$ অপারেটর ডাটা ফ্রেম থেকে নির্দিষ্ট কলামকে সরাসরি একটি ভেক্টর হিসেবে প্রদান করে।'
        }
      },
      {
        id: 'vec-q5',
        kind: 'mcq',
        question: {
          en: 'What function is standardly used to construct an atomic vector in R by combining elements?',
          bn: 'উপাদানগুলোকে একত্রিত করে R এ একটি অ্যাটমিক ভেক্টর তৈরি করতে মানসম্মতভাবে কোন ফাংশন ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'c() (combining elements)',
            bn: 'c() (উপাদান একত্রিত করা)'
          },
          {
            en: 'make_vector()',
            bn: 'make_vector()'
          },
          {
            en: 'array_push()',
            bn: 'array_push()'
          },
          {
            en: 'new_array()',
            bn: 'new_array()'
          }
        ],
        answer: 0,
        hint: {
          en: '"c" stands for combine or concatenate.',
          bn: '"c" মানে কম্বাইন (combine) বা একত্রিত করা।'
        },
        explanation: {
          en: 'The c() function (short for combine) is the standard method for constructing atomic vectors in R (e.g., c(1, 2, 3)).',
          bn: 'R এ ভেক্টর তৈরি করতে c() ফাংশন ব্যবহৃত হয় (যেমন c(1, 2, 3))।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lists-and-the-factor',
    title: {
      en: 'Lists & Factors: Heterogeneous Trees & Categorical Data',
      bn: 'লিস্ট এবং ফ্যাক্টর: হেটেরোজিনিয়াস ট্রি ও ক্যাটাগরিক্যাল ডাটা'
    }
  }
};
