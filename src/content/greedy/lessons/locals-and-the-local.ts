import type { Lesson } from '../../../lib/types';

export const LocalsAndTheLocalLesson: Lesson = {
  slug: 'locals-and-the-local',
  tech: 'greedy',
  title: {
    en: 'Huffman Coding & Lossless Data Compression',
    bn: 'হাফম্যান কোডিং ও লসলেস ডেটা কম্প্রেশন'
  },
  summary: {
    en: 'Master optimal prefix-free trees, understand how min-heaps drive the greedy merging of lowest-frequency symbols, and encode data with Shannon entropy efficiency.',
    bn: 'অপ্টিমাল প্রিফিক্স-ফ্রি ট্রি শিখুন, মিন-হিপ কীভাবে সর্বনিম্ন ফ্রিকোয়েন্সির অক্ষরগুলোকে একত্র করে তা জানুন এবং শ্যানন এন্ট্রপি দক্ষতায় ডেটা এনকোড করুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'the-compression-challenge',
      text: {
        en: 'The Data Compression Challenge',
        bn: 'ডেটা কম্প্রেশনের চ্যালেঞ্জ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard computing systems represent text using fixed-length encodings such as 8-bit ASCII or UTF-8 code units. If a file contains 1000 occurrences of the vowel "e" and only 1 occurrence of the letter "z", assigning 8 bits to both characters wastes massive storage and network bandwidth. Huffman coding uses a greedy algorithm to assign shorter variable-length binary codes to frequent characters and longer codes to rare characters.',
        bn: 'সাধারণ কম্পিউটারে ৮-বিট আসকি (ASCII) বা UTF-8 এর মতো নির্দিষ্ট দৈর্ঘ্যের কোড দিয়ে অক্ষর সংরক্ষণ করা হয়। একটি ফাইলে যদি স্বরবর্ণ "e" ১০০০ বার থাকে আর "z" মাত্র ১ বার থাকে, তবে উভয়কেই ৮ বিট দেওয়া বিপুল মেমরি ও ব্যান্ডউইথ অপচয় করে। হাফম্যান কোডিং একটি গ্রিডি অ্যালগরিদম ব্যবহার করে ঘন ঘন ব্যবহৃত অক্ষরগুলোকে ছোট বাইনারি কোড এবং বিরল অক্ষরগুলোকে দীর্ঘ কোড বরাদ্দ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'prefix-free-code',
          def: {
            en: 'A variable-length binary code where no codeword is a prefix of any other codeword, allowing instantaneous stream decoding without delimiters.',
            bn: 'একটি পরিবর্তনশীল দৈর্ঘ্যের বাইনারি কোড যেখানে কোনো কোড অন্য কোনো কোডের শুরুর অংশ (প্রিফিক্স) হয় না, ফলে কোনো বিশেষ চিহ্ন ছাড়াই নিখুঁতভাবে ডিকোড করা যায়।'
          }
        },
        {
          term: 'min-priority-queue',
          def: {
            en: 'A heap data structure that retrieves the element with the lowest numerical frequency key in O(log N) logarithmic time.',
            bn: 'একটি হিপ ডেটা স্ট্রাকচার যা O(log N) লগারিদমিক সময়ে সর্বনিম্ন ফ্রিকোয়েন্সির উপাদানটি বের করে দেয়।'
          }
        },
        {
          term: 'weighted-path-length',
          def: {
            en: 'The objective function computed as the sum of character frequency multiplied by its tree depth, representing total encoded bit length.',
            bn: 'অক্ষরের ফ্রিকোয়েন্সিকে ট্রির গভীরতা দিয়ে গুণ করে প্রাপ্ত মানের যোগফল, যা এনকোড করা ফাইলের মোট বিট দৈর্ঘ্য নির্দেশ করে।'
          }
        },
        {
          term: 'huffman-tree',
          def: {
            en: 'A full binary tree built by repeatedly merging the two least frequent subtrees until a single root node remains.',
            bn: 'একটি পূর্ণ বাইনারি ট্রি যা সর্বনিম্ন ফ্রিকোয়েন্সির দুটি সাব-ট্রিকে বারবার একত্রিত করে একটি মাত্র রুট নোড অবশিষ্ট থাকা পর্যন্ত গঠিত হয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'huffman-tree-visualization-svg',
      title: {
        en: 'Huffman Tree for 6 Characters: 300 Bits Compressed to 224 Bits',
        bn: '৬টি অক্ষরের জন্য হাফম্যান ট্রি: ৩০০ বিট সংকুচিত হয়ে ২২৪ বিট'
      },
      caption: {
        en: 'Greedy min-heap merges produce an optimal prefix tree: frequent char A(45) gets 1 bit ("0"), while rare F(5) gets 4 bits ("1100").',
        bn: 'গ্রিডি মিন-হিপ একত্রীকরণ একটি সর্বোত্তম প্রিফিক্স ট্রি তৈরি করে: সবচেয়ে বেশি আসা A(৪৫) পায় ১ বিট ("০"), আর বিরল F(৫) পায় ৪ বিট ("১১০০")।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 400" width="100%" height="auto">
  <defs>
    <linearGradient id="treeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="rootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#6d28d9" />
    </linearGradient>
    <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="400" rx="14" fill="url(#treeBg)" stroke="#334155" stroke-width="2"/>

  <!-- Tree Lines -->
  <!-- Root (430, 60) to Left A (250, 140) and Right Node55 (610, 140) -->
  <line x1="430" y1="60" x2="250" y2="140" stroke="#64748b" stroke-width="2"/>
  <line x1="430" y1="60" x2="610" y2="140" stroke="#64748b" stroke-width="2"/>
  <text x="325" y="90" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">0</text>
  <text x="535" y="90" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#f59e0b">1</text>

  <!-- Node55 (610, 140) to Node25 (500, 210) and Node30 (720, 210) -->
  <line x1="610" y1="140" x2="500" y2="210" stroke="#64748b" stroke-width="2"/>
  <line x1="610" y1="140" x2="720" y2="210" stroke="#64748b" stroke-width="2"/>
  <text x="545" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">0</text>
  <text x="675" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f59e0b">1</text>

  <!-- Node25 (500, 210) to Leaf C (440, 290) and Leaf B (560, 290) -->
  <line x1="500" y1="210" x2="440" y2="290" stroke="#64748b" stroke-width="2"/>
  <line x1="500" y1="210" x2="560" y2="290" stroke="#64748b" stroke-width="2"/>
  <text x="460" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">0</text>
  <text x="540" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f59e0b">1</text>

  <!-- Node30 (720, 210) to Node14 (660, 290) and Leaf D (780, 290) -->
  <line x1="720" y1="210" x2="660" y2="290" stroke="#64748b" stroke-width="2"/>
  <line x1="720" y1="210" x2="780" y2="290" stroke="#64748b" stroke-width="2"/>
  <text x="680" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">0</text>
  <text x="760" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f59e0b">1</text>

  <!-- Node14 (660, 290) to Leaf F (620, 360) and Leaf E (700, 360) -->
  <line x1="660" y1="290" x2="620" y2="360" stroke="#64748b" stroke-width="2"/>
  <line x1="660" y1="290" x2="700" y2="360" stroke="#64748b" stroke-width="2"/>
  <text x="630" y="325" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">0</text>
  <text x="690" y="325" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#f59e0b">1</text>

  <!-- Tree Nodes -->
  <!-- Root: 100 -->
  <circle cx="430" cy="60" r="22" fill="url(#rootGrad)"/>
  <text x="430" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">100</text>

  <!-- Leaf A: 45 (Code: "0") -->
  <rect x="205" y="125" width="90" height="36" rx="8" fill="url(#leafGrad)"/>
  <text x="250" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">A: 45 ("0")</text>
  <text x="250" y="154" font-family="system-ui, sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">1 bit</text>

  <!-- Inner Node: 55 -->
  <circle cx="610" cy="140" r="19" fill="url(#innerGrad)"/>
  <text x="610" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">55</text>

  <!-- Inner Node: 25 -->
  <circle cx="500" cy="210" r="18" fill="url(#innerGrad)"/>
  <text x="500" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">25</text>

  <!-- Inner Node: 30 -->
  <circle cx="720" cy="210" r="18" fill="url(#innerGrad)"/>
  <text x="720" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">30</text>

  <!-- Leaf C: 12 (Code: "100") -->
  <rect x="395" y="275" width="90" height="34" rx="6" fill="url(#leafGrad)"/>
  <text x="440" y="292" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">C: 12 ("100")</text>
  <text x="440" y="303" font-family="system-ui, sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">3 bits</text>

  <!-- Leaf B: 13 (Code: "101") -->
  <rect x="515" y="275" width="90" height="34" rx="6" fill="url(#leafGrad)"/>
  <text x="560" y="292" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">B: 13 ("101")</text>
  <text x="560" y="303" font-family="system-ui, sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">3 bits</text>

  <!-- Inner Node: 14 -->
  <circle cx="660" cy="290" r="16" fill="url(#innerGrad)"/>
  <text x="660" y="294" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">14</text>

  <!-- Leaf D: 16 (Code: "111") -->
  <rect x="735" y="275" width="90" height="34" rx="6" fill="url(#leafGrad)"/>
  <text x="780" y="292" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">D: 16 ("111")</text>
  <text x="780" y="303" font-family="system-ui, sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">3 bits</text>

  <!-- Leaf F: 5 (Code: "1100") -->
  <rect x="575" y="345" width="90" height="32" rx="6" fill="url(#leafGrad)"/>
  <text x="620" y="361" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">F: 5 ("1100")</text>
  <text x="620" y="371" font-family="system-ui, sans-serif" font-size="8" fill="#a7f3d0" text-anchor="middle">4 bits</text>

  <!-- Leaf E: 9 (Code: "1101") -->
  <rect x="675" y="345" width="90" height="32" rx="6" fill="url(#leafGrad)"/>
  <text x="720" y="361" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">E: 9 ("1101")</text>
  <text x="720" y="371" font-family="system-ui, sans-serif" font-size="8" fill="#a7f3d0" text-anchor="middle">4 bits</text>

  <!-- Left Stats Info Box -->
  <rect x="25" y="250" width="180" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="35" y="275" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">Bit Comparison:</text>
  <text x="35" y="298" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Fixed (3-bit): 300 bits</text>
  <text x="35" y="320" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#34d399">Huffman: 224 bits</text>
  <text x="35" y="345" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">Saved: 76 bits</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'huffman-algorithm-steps',
      text: {
        en: 'The 4-Step Huffman Tree Construction',
        bn: '৪-ধাপের হাফম্যান ট্রি গঠন'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Frequency Count & Leaf Node Instantiation',
            bn: 'ফ্রিকোয়েন্সি গণনা ও লিফ নোড তৈরি'
          },
          text: {
            en: 'Scan the input text. Count the frequency of each unique symbol. Create a leaf node for each character and push all N nodes into a min-priority queue keyed by frequency.',
            bn: 'ইনপুট টেক্সট স্ক্যান করে প্রতিটি অনন্য অক্ষরের ফ্রিকোয়েন্সি গণনা করুন। প্রতিটি অক্ষরের জন্য একটি লিফ নোড তৈরি করে ফ্রিকোয়েন্সি অনুযায়ী সাজানো মিন-প্রায়োরিটি কিউতে N-টি নোড প্রবেশ করান।'
          }
        },
        {
          title: {
            en: 'Greedily Pop Two Lowest Frequency Nodes',
            bn: 'সর্বনিম্ন ফ্রিকোয়েন্সির দুটি নোড বের করুন'
          },
          text: {
            en: 'While priority queue size > 1, extract the two nodes left and right with minimum frequencies. This is the greedy choice: characters that occur least must be placed deepest.',
            bn: 'যতক্ষণ প্রায়োরিটি কিউতে একের বেশি নোড থাকে, ততক্ষণ সর্বনিম্ন ফ্রিকোয়েন্সির দুটি নোড বের করে নিন। এটিই গ্রিডি পছন্দ: সবচেয়ে কম আসা অক্ষরগুলো ট্রির সবচেয়ে গভীরে থাকবে।'
          }
        },
        {
          title: {
            en: 'Merge into an Internal Parent Node',
            bn: 'একটি নতুন প্যারেন্ট নোডে একত্রিত করুন'
          },
          text: {
            en: 'Create an internal node with frequency = left.freq + right.freq. Assign left child edge binary 0 and right child edge binary 1. Insert this combined node back into the min-priority queue.',
            bn: 'উভয় ফ্রিকোয়েন্সির যোগফল দিয়ে একটি নতুন অভ্যন্তরীণ নোড তৈরি করুন। বাম এজকে বাইনারি ০ এবং ডান এজকে বাইনারি ১ বরাদ্দ করে এই যৌথ নোডটি পুনরায় কিউতে যুক্ত করুন।'
          }
        },
        {
          title: {
            en: 'Extract Root and Generate Codebook Table',
            bn: 'রুট নোড থেকে কোডবুক টেবিল তৈরি করুন'
          },
          text: {
            en: 'When only 1 node remains in the queue, it becomes the tree root. Traverse from root to all leaves: the path of 0s and 1s forms the optimal prefix codeword for each symbol.',
            bn: 'কিউতে কেবল ১টি নোড বাকি থাকলে সেটি পুরো ট্রির রুট নোডে পরিণত হয়। রুট থেকে প্রতিটি লিফ নোড পর্যন্ত পথ অনুসরণ করে ০ এবং ১ দিয়ে প্রতিটি অক্ষরের অপ্টিমাল কোডবুক টেবিল তৈরি করুন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'runnable-huffman-ts',
      text: {
        en: 'Runnable TypeScript: Complete Huffman Encoder & Decoder',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: সম্পূর্ণ হাফম্যান এনকোডার ও ডিকম্প্রেসর'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Compressing 100 characters from 300 bits (3-bit fixed) to 224 bits (Huffman variable) and verifying round-trip decoding.',
        bn: '১০০টি অক্ষরকে ৩০০ বিট থেকে ২২৪ বিটে সংকুচিত করা এবং সফলভাবে ডিকোড যাচাই।'
      },
      code: `// Node in the Huffman tree
class HuffmanNode {
  char: string | null;
  freq: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;

  constructor(char: string | null, freq: number, left: HuffmanNode | null = null, right: HuffmanNode | null = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

// Simple min-priority queue array helper
class MinPriorityQueue {
  private nodes: HuffmanNode[] = [];

  push(node: HuffmanNode): void {
    this.nodes.push(node);
    this.nodes.sort((a, b) => a.freq - b.freq);
  }

  pop(): HuffmanNode | undefined {
    return this.nodes.shift();
  }

  get size(): number {
    return this.nodes.length;
  }
}

// Build Huffman Tree from frequency mapping
function buildHuffmanTree(frequencies: Record<string, number>): HuffmanNode {
  const pq = new MinPriorityQueue();

  for (const [char, freq] of Object.entries(frequencies)) {
    pq.push(new HuffmanNode(char, freq));
  }

  while (pq.size > 1) {
    const left = pq.pop()!;
    const right = pq.pop()!;
    const parent = new HuffmanNode(null, left.freq + right.freq, left, right);
    pq.push(parent);
  }

  return pq.pop()!;
}

// Generate codebook lookup table
function generateCodes(root: HuffmanNode, path = '', codebook: Record<string, string> = {}): Record<string, string> {
  if (root.char !== null) {
    codebook[root.char] = path;
    return codebook;
  }
  if (root.left) generateCodes(root.left, path + '0', codebook);
  if (root.right) generateCodes(root.right, path + '1', codebook);
  return codebook;
}

// 6 characters from standard CLRS textbook: total 100 chars
const frequencies: Record<string, number> = {
  A: 45,
  B: 13,
  C: 12,
  D: 16,
  E: 9,
  F: 5
};

const root = buildHuffmanTree(frequencies);
const codebook = generateCodes(root);

console.log('Generated Huffman Codebook:');
let totalBits = 0;
let fixedBits = 0;
for (const [char, freq] of Object.entries(frequencies)) {
  const code = codebook[char];
  const charBits = freq * code.length;
  totalBits += charBits;
  fixedBits += freq * 3; // 3 bits can represent 6 characters
  console.log(\`Char '\${char}' (freq=\${freq}): code="\${code}" (\${code.length} bits)\`);
}

console.log('Fixed-length total bits:', fixedBits); // 300
console.log('Huffman total bits:', totalBits); // 224
console.log('Bits saved:', fixedBits - totalBits); // 76
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Huffman coding is mathematically proven to produce the optimal prefix code for a given symbol frequency distribution. Its time complexity is O(N log N) using a binary heap, or O(N) if input symbols are already sorted by frequency.',
        bn: 'হাফম্যান কোডিং গাণিতিকভাবে প্রমাণিত যে এটি যেকোনো প্রতীকের ফ্রিকোয়েন্সি বিন্যাসের জন্য সর্বোত্তম প্রিফিক্স কোড তৈরি করে। বাইনারি হিপ ব্যবহারে এর কমপ্লেক্সিটি O(N log N), আর ফ্রিকোয়েন্সি আগে থেকেই সাজানো থাকলে মাত্র O(N)।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-huf-ex-1',
      kind: 'mcq',
      topic: 'prefix-free-property-benefit',
      question: {
        en: 'Why is the prefix-free property essential for variable-length Huffman codes?',
        bn: 'পরিবর্তনশীল দৈর্ঘ্যের হাফম্যান কোডে প্রিফিক্স-ফ্রি বৈশিষ্ট্যটি কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It ensures that no codeword is a prefix of another, allowing instantaneous, unambiguous decoding without delimiter tokens',
          bn: 'এটি নিশ্চিত করে যে কোনো কোড অন্য কোডের শুরুতে বসে না, ফলে কোনো অতিরিক্ত চিহ্ন ছাড়াই নিখুঁতভাবে ডিকোড করা যায়'
        },
        {
          en: 'It doubles the physical bandwidth of the network cable',
          bn: 'এটি নেটওয়ার্ক ক্যাবলের ফিজিক্যাল ব্যান্ডউইথ দ্বিগুণ করে'
        },
        {
          en: 'It forces all character codes to be exactly 8 bits wide',
          bn: 'এটি সব অক্ষরের কোডকে ঠিক ৮ বিট দীর্ঘ হতে বাধ্য করে'
        },
        {
          en: 'It encrypts the payload using asymmetric public keys',
          bn: 'এটি অ্যাসিমেট্রিক পাবলিক কি ব্যবহার করে পেলোড এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A decoder immediately recognizes the end of a character without needing spaces.',
        bn: 'ডিকোডার কোনো স্পেস ছাড়াই সাথে সাথে বুঝতে পারে একটি অক্ষরের সমাপ্তি কোথায়।'
      },
      explanation: {
        en: 'Because no code is a prefix of another, the decoder can read a stream of bits sequentially and uniquely resolve each character the moment a leaf node in the Huffman tree is reached.',
        bn: 'যেহেতু কোনো কোড অন্য কোডের প্রিফিক্স নয়, তাই ডিকোডার বিট স্ট্রিম পড়ার সময় হাফম্যান ট্রির লিফ নোডে পৌঁছানোর সাথে সাথেই প্রতিটি অক্ষর নির্ভুলভাবে চিনে ফেলে।'
      }
    },
    {
      id: 'grd-huf-ex-2',
      kind: 'mcq',
      topic: 'huffman-greedy-merging-rule',
      question: {
        en: 'At each step of Huffman tree construction, which two nodes does the greedy algorithm extract and merge?',
        bn: 'হাফম্যান ট্রি গঠনের প্রতিটি ধাপে গ্রিডি অ্যালগরিদম কোন দুটি নোড বের করে একত্র করে?'
      },
      options: [
        {
          en: 'The two nodes with the lowest frequencies currently in the priority queue',
          bn: 'প্রায়োরিটি কিউতে থাকা বর্তমান সর্বনিম্ন ফ্রিকোয়েন্সির দুটি নোড'
        },
        {
          en: 'The two nodes with the highest frequencies',
          bn: 'সর্বোচ্চ ফ্রিকোয়েন্সির দুটি নোড'
        },
        {
          en: 'The first and last elements in the unsorted array',
          bn: 'অসাজানো অ্যারের প্রথম এবং শেষ উপাদান'
        },
        {
          en: 'Two randomly selected nodes',
          bn: 'এলোমেলোভাবে নির্বাচিত দুটি নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rare symbols must be placed deepest down in the tree.',
        bn: 'বিরল প্রতীকগুলোকে ট্রির সবচেয়ে গভীরে রাখতে হবে।'
      },
      explanation: {
        en: 'By repeatedly merging the two smallest frequency nodes, rare symbols end up deepest in the tree (longer codes), while frequent symbols stay near the root (shorter codes).',
        bn: 'সর্বনিম্ন ফ্রিকোয়েন্সির দুটি নোড বারবার একত্র করার ফলে বিরল অক্ষরগুলো ট্রির গভীরে যায় (দীর্ঘ কোড), আর ঘন ঘন আসা অক্ষরগুলো রুটের কাছে থাকে (সংক্ষিপ্ত কোড)।'
      }
    },
    {
      id: 'grd-huf-ex-3',
      kind: 'mcq',
      topic: 'huffman-bits-calculation',
      question: {
        en: 'In our 6-character example with 100 total characters, how many total bits did the Huffman code require versus a 3-bit fixed encoding?',
        bn: 'আমাদের ১০০ অক্ষরের ৬টি প্রতীকের উদাহরণে ৩-বিট নির্দিষ্ট কোডের তুলনায় হাফম্যান কোডে মোট কত বিট লেগেছিল?'
      },
      options: [
        {
          en: '224 bits for Huffman versus 300 bits for fixed encoding (saving 76 bits)',
          bn: 'হাফম্যানের জন্য ২২৪ বিট বনাম নির্দিষ্ট কোডের জন্য ৩০০ বিট (৭৬ বিট সাশ্রয়)'
        },
        {
          en: '500 bits for Huffman versus 100 bits for fixed',
          bn: 'হাফম্যানের জন্য ৫০০ বিট বনাম নির্দিষ্ট কোডের জন্য ১০০ বিট'
        },
        {
          en: '300 bits for both approaches',
          bn: 'উভয় পদ্ধতির জন্যই ৩০০ বিট'
        },
        {
          en: '100 bits total',
          bn: 'সর্বমোট ১০০ বিট'
        }
      ],
      answer: 0,
      hint: {
        en: 'The calculated bits were 45*1 + 12*3 + 13*3 + 5*4 + 9*4 + 16*3 = 224.',
        bn: 'হিসাবকৃত বিট ছিল ৪৫*১ + ১২*৩ + ১৩*৩ + ৫*৪ + ৯*৪ + ১৬*৩ = ২২৪।'
      },
      explanation: {
        en: 'Fixed encoding required 100 * 3 = 300 bits. Huffman variable length required exactly 224 bits, providing a 25% reduction in size.',
        bn: 'নির্দিষ্ট কোডে লাগতো ১০০ * ৩ = ৩০০ বিট। হাফম্যান ভেরিয়েবল কোডে লেগেছে ঠিক ২২৪ বিট, যা প্রায় ২৫% সাইজ কমিয়ে দেয়।'
      }
    },
    {
      id: 'grd-huf-ex-4',
      kind: 'mcq',
      topic: 'huffman-time-complexity',
      question: {
        en: 'What is the time complexity of constructing a Huffman tree for N distinct characters using a binary min-heap?',
        bn: 'বাইনারি মিন-হিপ ব্যবহার করে N-টি স্বতন্ত্র অক্ষরের জন্য হাফম্যান ট্রি তৈরির টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(N log N) because there are N - 1 merge steps, each requiring O(log N) heap operations',
          bn: 'O(N log N) কারণ N - ১টি একত্রীকরণ ধাপ থাকে এবং প্রতিটিতে O(log N) হিপ অপারেশন লাগে'
        },
        {
          en: 'O(N^3) cubic time',
          bn: 'O(N^3) ঘনকীয় সময়'
        },
        {
          en: 'O(2^N) exponential time',
          bn: 'O(২^N) সূচকীয় সময়'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(১) ধ্রুবক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Building the heap is O(N), and each of the N-1 extractions takes O(log N).',
        bn: 'হিপ বানাতে O(N) এবং N-1 বার বের করতে O(log N) সময় লাগে।'
      },
      explanation: {
        en: 'Initializing the heap with N nodes takes O(N) time. Each of the N - 1 merge iterations performs 2 extract-min operations and 1 insert, each taking O(log N), yielding O(N log N) total time.',
        bn: 'N-টি নোড দিয়ে হিপ শুরু করতে O(N) সময় লাগে। এরপর N - ১টি ধাপে ২টি নোড বের করা ও ১টি যুক্ত করায় O(log N) করে মোট O(N log N) সময় লাগে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Huffman Coding Mastery Quiz',
      bn: 'হাফম্যান কোডিং দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'grd-huf-qz-1',
        kind: 'mcq',
        topic: 'optimal-prefix-tree-proof',
        question: {
          en: 'Why is it guaranteed that the two lowest frequency symbols reside as siblings at maximum depth in an optimal prefix tree?',
          bn: 'কেন এটি নিশ্চিত যে একটি সর্বোত্তম প্রিফিক্স ট্রির সর্বোচ্চ গভীরতায় সর্বনিম্ন ফ্রিকোয়েন্সির দুটি প্রতীক সিবলিং বা সহোদর হিসেবে অবস্থান করে?'
        },
        options: [
          {
            en: 'If they were placed higher up, swapping them with lower-depth, higher-frequency nodes would strictly decrease total tree cost',
            bn: 'যদি তারা উঁচুতে থাকত, তবে তাদের কম গভীরতার বেশি ফ্রিকোয়েন্সির নোডের সাথে অদলবদল করলে মোট খরচ আরও কমে যেত'
          },
          {
            en: 'Because binary trees can never exceed 4 levels of depth',
            bn: 'কারণ বাইনারি ট্রি কখনোই ৪ লেভেলের বেশি গভীর হতে পারে না'
          },
          {
            en: 'Because operating systems reject unbalanced binary trees',
            bn: 'কারণ অপারেটিং সিস্টেম ভারসাম্যহীন বাইনারি ট্রি প্রত্যাখ্যান করে'
          },
          {
            en: 'Due to the speed of light in fiber optic cables',
            bn: 'ফাইবার অপটিক ক্যাবলে আলোর গতির কারণে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiplying large frequencies by large depths produces terrible bit sizes.',
          bn: 'বেশি ফ্রিকোয়েন্সিকে বেশি গভীরতা দিয়ে গুণ করলে বিট সাইজ অনেক বেড়ে যায়।'
        },
        explanation: {
          en: 'Total bits equals sum(freq * depth). To minimize this sum, symbols with minimal frequencies must be paired with maximal depths, proving the greedy choice property.',
          bn: 'মোট বিট সংখ্যা হলো sum(freq * depth)। এই মান সর্বনিম্ন রাখতে সবচেয়ে কম ফ্রিকোয়েন্সিকে সর্বোচ্চ গভীরতার সাথে মেলাতে হয়, যা গ্রিডি চয়েসের সঠিকতা প্রমাণ করে।'
        }
      },
      {
        id: 'grd-huf-qz-2',
        kind: 'mcq',
        topic: 'canonical-huffman-codes',
        question: {
          en: 'What is a Canonical Huffman code, and why is it used in file formats like DEFLATE (ZIP, GZIP) and JPEG?',
          bn: 'ক্যানোনিকাল হাফম্যান কোড কী এবং কেন এটি ZIP, GZIP ও JPEG এর মতো ফাইল ফরম্যাটে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'It standardizes codewords by bit length and numerical value, allowing the entire tree to be reconstructed using only bit lengths instead of transmitting the full tree graph',
            bn: 'এটি বিট দৈর্ঘ্য ও সংখ্যাগত মান দিয়ে কোডগুলোকে সুবিন্যস্ত করে, ফলে পুরো ট্রি না পাঠিয়ে কেবল বিট দৈর্ঘ্য পাঠিয়েই অপর প্রান্তে ট্রি তৈরি করা যায়'
          },
          {
            en: 'It encrypts the compressed file with an AES-256 key',
            bn: 'এটি সংকুচিত ফাইলটিকে AES-256 কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It converts binary 0s into 1s and 1s into 0s',
            bn: 'এটি বাইনারি ০-কে ১ এবং ১-কে ০-তে রূপান্তর করে'
          },
          {
            en: 'It limits the alphabet to only 16 characters',
            bn: 'এটি বর্ণমালাকে কেবল ১৬টি অক্ষরে সীমাবদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Canonical codes drastically shrink the compression dictionary header.',
          bn: 'ক্যানোনিকাল কোড কম্প্রেশন ডিকশনারির হেডারের আকার বিপুল পরিমাণে কমিয়ে দেয়।'
        },
        explanation: {
          en: 'Canonical Huffman codes enforce a deterministic ordering. The decompressor only needs a compact array of code lengths to reconstruct the identical codebook, saving vital header space in ZIP and PNG formats.',
          bn: 'ক্যানোনিকাল হাফম্যান কোড একটি সুনির্দিষ্ট নিয়ম তৈরি করে। ফলে ডিকম্প্রেসরের কেবল কোডের দৈর্ঘ্য জানলেই চলে, যা জিপ ও পিএনজি ফাইলের হেডার সাইজ অনেক কমিয়ে দেয়।'
        }
      },
      {
        id: 'grd-huf-qz-3',
        kind: 'mcq',
        topic: 'http2-hpack-compression',
        question: {
          en: 'How does HTTP/2 use Huffman coding in its HPACK specification?',
          bn: 'HTTP/2 কীভাবে তার HPACK স্পেসিফিকেশনে হাফম্যান কোডিং ব্যবহার করে?'
        },
        options: [
          {
            en: 'It uses a pre-computed static Huffman table based on historical web traffic to compress recurring header strings without sending a custom tree per request',
            bn: 'এটি ওয়েব ট্রাফিকের ভিত্তিতে তৈরি একটি প্রি-কম্পিউটেড স্ট্যাটিক হাফম্যান টেবিল ব্যবহার করে প্রতিটি রিকোয়েস্টে ট্রি না পাঠিয়ে হেডার সংকুচিত করে'
          },
          {
            en: 'It re-encodes the HTML DOM on every keystroke',
            bn: 'প্রতিটি কি-স্ট্রোকে এটি এইচটিএমএল ডম পুনরায় এনকোড করে'
          },
          {
            en: 'It disables TCP handshake packets',
            bn: 'এটি টিসিপি হ্যান্ডশেক প্যাকেট নিষ্ক্রিয় করে'
          },
          {
            en: 'It runs only when user internet disconnects',
            bn: 'এটি কেবল ব্যবহারকারীর ইন্টারনেট বিচ্ছিন্ন হলেই চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'HPACK uses a static pre-shared Huffman table.',
          bn: 'HPACK একটি স্ট্যাটিক প্রি-শেয়ার্ড হাফম্যান টেবিল ব্যবহার করে।'
        },
        explanation: {
          en: 'HTTP/2 RFC 7541 defines a fixed Huffman table calculated over hundreds of thousands of HTTP headers, enabling high compression of headers without transmitting table overhead.',
          bn: 'HTTP/2 স্পেসিফিকেশনে লাখ লাখ হেডারের ওপর ভিত্তি করে তৈরি একটি স্থায়ী হাফম্যান টেবিল রাখা থাকে, যা কোনো হেডার ওভারহেড ছাড়াই দ্রুত ডেটা সংকুচিত করে।'
        }
      },
      {
        id: 'grd-huf-qz-4',
        kind: 'mcq',
        topic: 'shannon-entropy-theoretical-limit',
        question: {
          en: 'What fundamental mathematical limit from information theory establishes the lower bound on compression for any lossless algorithm?',
          bn: 'তথ্য তত্ত্বের (Information Theory) কোন মৌলিক গাণিতিক নিয়ম যেকোনো লসলেস কম্প্রেশনের সর্বনিম্ন সীমা নির্ধারণ করে?'
        },
        options: [
          {
            en: 'Shannon Entropy: H = -sum(p_i * log2(p_i)) bits per symbol',
            bn: 'শ্যানন এন্ট্রপি: প্রতি প্রতীকে H = -sum(p_i * log2(p_i)) বিট'
          },
          {
            en: 'Newton Law of Universal Gravitation',
            bn: 'নিউটনের মহাকর্ষ সূত্র'
          },
          {
            en: 'Moore Law of transistor scaling',
            bn: 'ট্রানজিস্টর বৃদ্ধির মুরের সূত্র'
          },
          {
            en: 'Ohm Law of electrical resistance',
            bn: 'বৈদ্যুতিক রোধের ওহমের সূত্র'
          }
        ],
        answer: 0,
        hint: {
          en: 'Claude Shannon defined entropy as the average information content per symbol.',
          bn: 'ক্লড শ্যানন এন্ট্রপিকে প্রতীকের প্রতি গড়ে তথ্য সামগ্রী হিসেবে সংজ্ঞায়িত করেছিলেন।'
        },
        explanation: {
          en: 'Claude Shannon proved that no lossless compression algorithm can represent an independent and identically distributed source in fewer average bits per symbol than its entropy H. Huffman coding achieves within 1 bit of this theoretical limit.',
          bn: 'ক্লড শ্যানন প্রমাণ করেন যে কোনো লসলেস অ্যালগরিদমই ডেটাকে তার এন্ট্রপি H-এর চেয়ে কম বিটে প্রকাশ করতে পারে না। হাফম্যান কোডিং এই তাত্ত্বিক সীমার মাত্র ১ বিটের মধ্যে ফলাফল দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'gains-and-the-gain',
    title: {
      en: 'Minimum Spanning Trees: Kruskal Algorithm & DSU',
      bn: 'মিনিমাম স্প্যানিং ট্রি: ক্রুশকাল অ্যালগরিদম ও DSU'
    }
  }
};
