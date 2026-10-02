import type { Lesson } from '../../../lib/types';

export const ChunkingTextLesson: Lesson = {
  slug: 'chunking-text',
  tech: 'embeddings',
  title: {
    en: 'Text Chunking Strategies: Fixed-Size, Sentence-Splitting & Overlap Rules',
    bn: 'টেক্সট চাংকিং কৌশল: ফিক্সড-সাইজ, বাক্য বিভাজন এবং ওভারল্যাপের নিয়ম'
  },
  summary: {
    en: 'Master document chunking for retrieval pipelines: understand model context limits, implement fixed-size sliding windows with 15% to 25% overlap, preserve sentence boundaries, and clamp trailing fragments across a 1000-character corpus.',
    bn: 'অনুসন্ধান পাইপলাইনের জন্য ডকুমেন্ট চাংকিং আয়ত্ত করুন: মডেলের কনটেক্সট সীমা অনুধাবন, ১৫% থেকে ২৫% ওভারল্যাপ সহ ফিক্সড-সাইজ স্লাইডিং উইন্ডো তৈরি, বাক্যের সীমানা সংরক্ষণ এবং ১০০০ অক্ষরের লেখায় শেষ অংশ ক্ল্যাম্প করা।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'chunking-rationale-heading',
      text: {
        en: 'The Document Size Dilemma: Why Slicing Text Is Essential',
        bn: 'নথির আকারের সংকট: লেখাকে খণ্ড খণ্ড করা কেন অপরিহার্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Embedding models cannot ingest unbounded documents. First, transformer architectures enforce strict token input ceilings. Second, even if an entire 50-page manual fits into a large context window, averaging its diverse ideas into a single vector creates a muddy semantic blob where specific facts become impossible to locate. Slicing documents into granular, focused chunks ensures that each individual vector encapsulates a coherent conceptual unit.',
        bn: 'এমবেডিং মডেলগুলো সীমাহীন দৈর্ঘ্যের নথি সরাসরি গ্রহণ করতে পারে না। প্রথমত, ট্রান্সফরমার আর্কিটেকচারে ইনপুট টোকেনের একটি কঠোর সীমা থাকে। দ্বিতীয়ত, একটি সম্পূর্ণ ৫০ পাতার বই কোনো মডেলে প্রবেশ করানো সম্ভব হলেও সব তথ্য মিশে গিয়ে এমন একটি ঘোলাটে ভেক্টর তৈরি হয় যেখান থেকে নির্দিষ্ট তথ্য আলাদা করা যায় না। লেখাকে ছোট ও সুনির্দিষ্ট খণ্ডে ভাগ করলে প্রতিটি ভেক্টর একটি একক ও অর্থপূর্ণ ধারণাকে নিখুঁতভাবে ধারণ করতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Sliding window text chunking producing 7 segments across 1000 characters with 50-character overlap.',
        bn: 'চিত্র ১: স্লাইডিং উইন্ডো চাংকিং যা ৫০ অক্ষরের ওভারল্যাপ সহ ১০০০ অক্ষরের লেখাকে ৭ টি খণ্ডে বিভক্ত করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SLIDING WINDOW CHUNKING: SIZE 200, OVERLAP 50, STEP 150</text>
  
  <!-- Base Document Ruler -->
  <line x1="60" y1="280" x2="780" y2="280" stroke="#475569" stroke-width="2" />
  <text x="60" y="302" fill="#94a3b8" font-size="11" font-family="monospace">0 chars</text>
  <text x="780" y="302" fill="#94a3b8" font-size="11" font-family="monospace" text-anchor="end">1000 chars</text>

  <!-- Chunk 1: 0 - 200 -->
  <rect x="60" y="55" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="132" y="71" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 1: 0–200</text>

  <!-- Chunk 2: 150 - 350 -->
  <rect x="168" y="85" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="240" y="101" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 2: 150–350</text>

  <!-- Chunk 3: 300 - 500 -->
  <rect x="276" y="115" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="348" y="131" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 3: 300–500</text>

  <!-- Chunk 4: 450 - 650 -->
  <rect x="384" y="145" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="456" y="161" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 4: 450–650</text>

  <!-- Chunk 5: 600 - 800 -->
  <rect x="492" y="175" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="564" y="191" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 5: 600–800</text>

  <!-- Chunk 6: 750 - 950 -->
  <rect x="600" y="205" width="144" height="24" rx="4" fill="#38bdf8" />
  <text x="672" y="221" fill="#0f172a" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 6: 750–950</text>

  <!-- Chunk 7: 900 - 1000 (Clamped) -->
  <rect x="708" y="235" width="72" height="24" rx="4" fill="#facc15" />
  <text x="744" y="251" fill="#0f172a" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Chunk 7: 900–1000</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'overlap-and-step-math-heading',
      text: {
        en: 'Sliding Window Arithmetic: Step Sizes and Boundary Clamping',
        bn: 'স্লাইডিং উইন্ডোর পাটিগণিত: স্টেপ সাইজ এবং বাউন্ডারি ক্ল্যাম্পিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A robust sliding window operates on 3 core parameters: chunk size (200 characters), overlap (50 units), and total length (1000 positions). The step size is calculated by subtracting overlap from chunk size: 200 - 50 = 150 characters. The window begins at offset 0, stepping through 150, 300, 450, 600, 750, and 900. Because the 7th window would overshoot past the 1000-character boundary, it clamps at the end, yielding a final segment of 100 letters. Overlapping by 50 units prevents key sentences from being cleaved in half.',
        bn: 'একটি নির্ভরযোগ্য স্লাইডিং উইন্ডো ৩ টি মূল প্যারামিটারে চলে: চাঙ্কের আকার (২০০ অক্ষর), ওভারল্যাপ (৫০ ইউনিট) এবং মোট দৈর্ঘ্য (১০০০ অবস্থান)। স্টেপ সাইজ বের করা হয় চাঙ্কের আকার থেকে ওভারল্যাপ বিয়োগ করে: ২০০ - ৫০ = ১৫০ অক্ষর। উইন্ডো ০ অবস্থান থেকে শুরু হয়ে ১৫০, ৩০০, ৪৫০, ৬০০, ৭৫০ এবং ৯০০ অবস্থানে এগিয়ে যায়। যেহেতু ৭ ম উইন্ডোটি ১০০০ অক্ষরের মূল সীমা অতিক্রম করে ফেলত, তাই এটি শেষ প্রান্তে ক্ল্যাম্প করে ১০০ অক্ষরের একটি সমাপনী টুকরো তৈরি করে। ৫০ ইউনিটের ওভারল্যাপ থাকায় গুরুত্বপূর্ণ বাক্য মাঝখান থেকে ভেঙে যাওয়ার ঝুঁকি থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript sliding window chunking algorithm with boundary clamping.',
        bn: 'বাউন্ডারি ক্ল্যাম্পিং সহ স্লাইডিং উইন্ডো চাংকিংয়ের TypeScript কোড।'
      },
      code: `export interface TextChunk {
  index: number;
  start: number;
  end: number;
  text: string;
}

export function chunkTextWithSlidingWindow(
  content: string,
  chunkSize: number = 200,
  overlap: number = 50
): TextChunk[] {
  const step = chunkSize - overlap;
  const chunks: TextChunk[] = [];
  let start = 0;
  let index = 1;

  while (start < content.length) {
    const end = Math.min(start + chunkSize, content.length);
    chunks.push({
      index,
      start,
      end,
      text: content.slice(start, end)
    });

    if (end === content.length) break;
    start += step;
    index++;
  }

  return chunks;
}

// Generate a mock document of exactly 1000 characters
const mockDoc = 'A'.repeat(1000);
const generatedChunks = chunkTextWithSlidingWindow(mockDoc, 200, 50);

const firstChunk = generatedChunks[0];
const lastChunk = generatedChunks[generatedChunks.length - 1];

console.log('Total Chunks Generated:', generatedChunks.length); // 7
console.log('First Chunk Bounds:', firstChunk.start, 'to', firstChunk.end); // 0 to 200
console.log('Last Chunk Bounds (Clamped):', lastChunk.start, 'to', lastChunk.end); // 900 to 1000
console.log('Final Chunk Length:', lastChunk.text.length); // 100`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Text Chunking',
          def: {
            en: 'Process of partitioning large prose or code files into discrete segments suitable for embedding and retrieval.',
            bn: 'এমবেডিং এবং অনুসন্ধানের সুবিধার্থে বড় লেখা বা কোড ফাইলকে ছোট ছোট অংশে ভাগ করার পদ্ধতি।'
          }
        },
        {
          term: 'Sliding Window',
          def: {
            en: 'Moving frame that advances through document text by a fixed step size to generate successive overlapping chunks.',
            bn: 'একটি চলমান কাঠামো যা নির্দিষ্ট ধাপে নথির ওপর দিয়ে এগিয়ে গিয়ে পর্যায়ক্রমিক ওভারল্যাপিং খণ্ড তৈরি করে।'
          }
        },
        {
          term: 'Chunk Overlap',
          def: {
            en: 'Shared characters or tokens between adjacent chunks ensuring contextual continuity across split boundaries.',
            bn: 'পাশাপাশি দুটি খণ্ডের মধ্যে থাকা অভিন্ন অংশ যা খণ্ড করার কারণে তথ্যের ধারাবাহিকতা নষ্ট হওয়া রোধ করে।'
          }
        },
        {
          term: 'Boundary Clamping',
          def: {
            en: 'Restricting the final window segment so its end pointer terminates precisely at document end without out-of-bounds errors.',
            bn: 'শেষ উইন্ডোটিকে এমনভাবে নিয়ন্ত্রণ করা যাতে তা নথির শেষ সীমানায় সুন্দরভাবে সমাপ্ত হয় এবং সীমানা অতিক্রম না করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'step-size-formula-ex1',
      kind: 'mcq',
      topic: 'step-size-calculation',
      question: {
        en: 'If an application defines a chunk size of 200 characters and an overlap of 50 characters, what is the step size between chunk starting offsets?',
        bn: 'যদি কোনো অ্যাপ্লিকেশনে চাঙ্কের আকার ২০০ অক্ষর এবং ওভারল্যাপ ৫০ অক্ষর নির্ধারণ করা হয়, তবে প্রতিটি চাঙ্ক শুরুর মধ্যকার দূরত্ব (স্টেপ সাইজ) কত?'
      },
      options: [
        { en: '150 characters, calculated as Chunk Size (200) minus Overlap (50)', bn: '১৫০ অক্ষর, যা চাঙ্কের আকার (২০০) থেকে ওভারল্যাপ (৫০) বিয়োগ করে পাওয়া যায়' },
        { en: '250 characters, calculated as 200 + 50', bn: '২৫০ অক্ষর, যা ২০০ + ৫০ হিসেবে হিসাব করা হয়' },
        { en: '10000 characters, calculated as 200 * 50', bn: '১০০০০ অক্ষর, যা ২০০ * ৫০ হিসেবে হিসাব করা হয়' },
        { en: '0 characters, the window never moves', bn: '০ অক্ষর, উইন্ডো কখনোই সামনে এগোয় না' }
      ],
      answer: 0,
      hint: {
        en: 'Subtract the shared overlap from the total window size.',
        bn: 'মোট উইন্ডোর আকার থেকে যৌথ ওভারল্যাপ অংশটি বাদ দিন।'
      },
      explanation: {
        en: 'Step size is window size minus overlap: 200 - 50 = 150 characters per stride.',
        bn: 'স্টেপ সাইজ হলো উইন্ডোর আকার বিয়োগ ওভারল্যাপ: ২০০ - ৫০ = ১৫০ অক্ষর প্রতি পদক্ষেপে।'
      }
    },
    {
      id: 'overlap-purpose-defense-ex2',
      kind: 'mcq',
      topic: 'chunk-overlap-necessity',
      question: {
        en: 'What critical problem occurs when text is chunked with 0% overlap (hard boundary splitting)?',
        bn: 'কোনো ওভারল্যাপ ছাড়া (০% ওভারল্যাপ) টেক্সট টুকরো করলে কোন মারাত্মক সমস্যার সৃষ্টি হয়?'
      },
      options: [
        {
          en: 'Sentences falling directly on the boundary are severed in half, destroying their semantic meaning across both chunks',
          bn: 'ঠিক সীমানায় পড়া বাক্যগুলো মাঝখান থেকে দ্বিখণ্ডিত হয়ে যায়, ফলে উভয় খণ্ডেই তাদের ভাবার্থ নষ্ট হয়ে যায়'
        },
        {
          en: 'The computer battery instantly discharges to 0 percent',
          bn: 'কম্পিউটারের ব্যাটারি সাথে সাথে ০ শতাংশে নেমে যায়'
        },
        {
          en: 'All text files are automatically converted to audio recordings',
          bn: 'সমস্ত টেক্সট ফাইল স্বয়ংক্রিয়ভাবে অডিও রেকর্ডিংয়ে রূপান্তরিত হয়'
        },
        {
          en: 'Zero-overlap is required by all cloud providers',
          bn: 'সমস্ত ক্লাউড প্রোভাইডারে শূন্য ওভারল্যাপ রাখা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Concepts spanning across the boundary lose their subjects or verbs if severed cleanly.',
        bn: 'মাঝখান থেকে কেটে গেলে বাক্যের উদ্দেশ্য বা বিধেয় আলাদা হয়ে অর্থ হারিয়ে ফেলে।'
      },
      explanation: {
        en: 'Overlap guarantees that phrases near partition boundaries remain intact in at least one neighboring chunk.',
        bn: 'ওভারল্যাপ নিশ্চিত করে যে সীমানার কাছাকাছি থাকা বাক্য অন্তত একটি খণ্ডে পূর্ণাঙ্গভাবে সংরক্ষিত থাকবে।'
      }
    },
    {
      id: 'tail-clamping-behavior-ex3',
      kind: 'mcq',
      topic: 'tail-chunk-clamping',
      question: {
        en: 'In our 1000-character document with step size 150 and window 200, why does the 7th chunk have a length of 100 characters instead of 200?',
        bn: 'আমাদের ১০০০ অক্ষরের নথিতে ১৫০ স্টেপ সাইজ এবং ২০০ উইন্ডোর ক্ষেত্রে কেন ৭ ম খণ্ডটির দৈর্ঘ্য ২০০ না হয়ে ১০০ অক্ষর হয়?'
      },
      options: [
        {
          en: 'It starts at offset 900 and clamps precisely at the document 1000-character boundary, absorbing the remaining 100 characters',
          bn: 'এটি ৯০০ অবস্থান থেকে শুরু হয় এবং নথির ১০০০ অক্ষরের শেষ সীমানায় সীমাবদ্ধ থেকে অবশিষ্ট ১০০ অক্ষর গ্রহণ করে'
        },
        {
          en: 'The operating system deleted half of the characters',
          bn: 'অপারেটিং সিস্টেম অর্ধেক অক্ষর মুছে ফেলেছিল'
        },
        {
          en: 'Because 7 is an odd number',
          bn: 'কারণ ৭ একটি বিজোড় সংখ্যা'
        },
        {
          en: 'The server ran out of electricity on the final chunk',
          bn: 'শেষ খণ্ড তৈরির সময় সার্ভারের বিদ্যুৎ চলে গিয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: '1000 minus 900 leaves exactly 100 characters remaining.',
        bn: '১০০০ থেকে ৯০০ বাদ দিলে ঠিক ১০০ অক্ষর অবশিষ্ট থাকে।'
      },
      explanation: {
        en: 'The final window terminates at the end of the text; 1000 - 900 = 100 characters remaining.',
        bn: 'শেষ উইন্ডো নথির শেষ প্রান্তে শেষ হয়; ১০০০ - ৯০০ = ১০০ অক্ষর অবশিষ্ট থাকে।'
      }
    },
    {
      id: 'chunk-size-tradeoff-ex4',
      kind: 'mcq',
      topic: 'chunk-granularity-tradeoffs',
      question: {
        en: 'What is the architectural downside of configuring an excessively large chunk size (e.g. 4000 tokens per chunk)?',
        bn: 'অতিরিক্ত বড় আকারের চাঙ্ক (যেমন প্রতি খণ্ডে ৪০০০ টোকেন) নির্ধারণের প্রধান কারিগরি অসুবিধা কী?'
      },
      options: [
        {
          en: 'The embedding vector averages too many disparate topics together, causing specific factual answers to become diluted and missed during search',
          bn: 'এমবেডিং ভেক্টর বহু ভিন্ন ভিন্ন বিষয়কে একসাথে মিশিয়ে ফেলে, ফলে অনুসন্ধানের সময় সুনির্দিষ্ট তথ্যগুলো হারিয়ে যায়'
        },
        {
          en: 'The text file permanently turns into an executable virus',
          bn: 'টেক্সট ফাইলটি একটি ক্ষতিকর ভাইরাসে রূপান্তরিত হয়'
        },
        {
          en: 'It forces the client screen to turn black and white',
          bn: 'এটি ক্লায়েন্টের স্ক্রিনকে সাদাকালো করে দিতে বাধ্য করে'
        },
        {
          en: 'Large chunks can only be read by quantum computers',
          bn: 'বড় চাঙ্ক কেবল কোয়ান্টাম কম্পিউটারই পড়তে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When too many concepts share one vector, individual precision is diluted.',
        bn: 'একটি ভেক্টরে যখন অতিরিক্ত ধারণা রাখা হয়, তখন প্রতিটি নির্দিষ্ট তথ্যের স্পষ্টতা নষ্ট হয়।'
      },
      explanation: {
        en: 'Large chunks suffer from topic dilution, reducing retrieval precision compared to focused, compact passages.',
        bn: 'বড় আকারের চাঙ্কে অনেক প্রসঙ্গের ভিড়ে নির্দিষ্ট তথ্যের গুরুত্ব কমে যায় এবং অনুসন্ধানের যথার্থতা হ্রাস পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-chunking-text',
    title: {
      en: 'Text Chunking Strategies and Overlap Rules Quiz',
      bn: 'টেক্সট চাংকিং কৌশল এবং ওভারল্যাপ কুইজ'
    },
    questions: [
      {
        id: 'quiz-semantic-chunking-delimiters',
        kind: 'mcq',
        topic: 'hierarchical-recursive-chunking',
        question: {
          en: 'In hierarchical recursive text splitters (such as LangChain RecursiveCharacterTextSplitter), in what order are delimiters evaluated?',
          bn: 'হায়ারার্কিকাল রিকার্সিভ স্প্লিটারে কোন ক্রমানুসারে বিভাজকগুলো পরীক্ষা করা হয়?'
        },
        options: [
          {
            en: 'Double newlines (\\n\\n) first, then single newlines (\\n), then sentence punctuation (". "), then spaces (" "), keeping larger natural structures intact',
            bn: 'প্রথমে প্যারাগ্রাফ ব্রেক (\\n\\n), তারপর লাইন ব্রেক (\\n), তারপর বাক্যের বিরামচিহ্ন (". ") এবং শেষে স্পেস (" "), যাতে স্বাভাবিক গঠন বজায় থাকে'
          },
          {
            en: 'Randomly picking characters from right to left',
            bn: 'ডান থেকে বামে এলোমেলোভাবে অক্ষর বাছাই করে'
          },
          {
            en: 'Alphabetical order from A to Z',
            bn: 'A থেকে Z পর্যন্ত বর্ণানুক্রমিক ক্রমানুসারে'
          },
          {
            en: 'Only splitting on the dollar sign ($)',
            bn: 'কেবল ডলার চিহ্নে ($) ভাগ করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Split at the highest semantic unit possible before resorting to word breaks.',
          bn: 'শব্দ ভাঙার আগে সর্বোচ্চ অর্থপূর্ণ অনুচ্ছেদ বা বাক্যের স্তরে ভাগ করার চেষ্টা করুন।'
        },
        explanation: {
          en: 'Recursive splitting respects document paragraph and sentence structure before falling back to arbitrary whitespace cuts.',
          bn: 'রিকার্সিভ স্প্লিটিং প্রথমে অনুচ্ছেদ ও বাক্যের গঠন ঠিক রাখার চেষ্টা করে, যাতে লেখার স্বাভাবিক অর্থ অক্ষুণ্ণ থাকে।'
        }
      },
      {
        id: 'quiz-parent-document-retrieval',
        kind: 'mcq',
        topic: 'parent-document-retrieval-pattern',
        question: {
          en: 'How does the "Parent Document Retrieval" architectural pattern solve the trade-off between small chunk precision and large chunk context?',
          bn: '"প্যারেন্ট ডকুমেন্ট রিট্রিভাল" প্যাটার্নটি কীভাবে ছোট চাঙ্কের স্পষ্টতা এবং বড় চাঙ্কের প্রেক্ষাপটের ভারসাম্য রক্ষা করে?'
        },
        options: [
          {
            en: 'It embeds small granular chunks for razor-sharp vector search, but returns the larger parent passage to the LLM for rich context',
            bn: 'এটি নিখুঁত অনুসন্ধানের জন্য ছোট ছোট খণ্ডের এমবেডিং তৈরি করে, কিন্তু মডেলকে উত্তর দিতে পুরো বড় অনুচ্ছেদটি সরবরাহ করে'
          },
          {
            en: 'It emails the user parents to confirm every search query',
            bn: 'এটি প্রতিটি অনুসন্ধানের জন্য ব্যবহারকারীর বাবা-মাকে ইমেইল পাঠিয়ে সম্মতি চায়'
          },
          {
            en: 'It deletes all child nodes in the database hierarchy',
            bn: 'এটি ডেটাবেসের সমস্ত চাইল্ড নোড মুছে ফেলে'
          },
          {
            en: 'It requires double the number of monitors in the server room',
            bn: 'সার্ভার রুমে দ্বিগুণ সংখ্যক মনিটর রাখা বাধ্যতামূলক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Search on small fragments; generate answers using the surrounding context.',
          bn: 'খোঁজার সময় ছোট অংশ ব্যবহার করুন; উত্তর তৈরির সময় চারপাশের মূল অংশটি সরবরাহ করুন।'
        },
        explanation: {
          en: 'Parent retrieval achieves the best of both worlds: high-precision vector search coupled with comprehensive LLM context.',
          bn: 'এই কৌশলটি অনুসন্ধানের ক্ষেত্রে সর্বোচ্চ নির্ভুলতা এবং উত্তরের জন্য প্রয়োজনীয় বিস্তৃত প্রেক্ষাপট দুটোই নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-token-vs-character-chunking',
        kind: 'mcq',
        topic: 'tokens-vs-characters-chunking',
        question: {
          en: 'Why should production chunking pipelines count tokens rather than raw character counts when targeting LLM embedding models?',
          bn: 'এমবেডিং মডেলের জন্য চাংকিং করার সময় কেন সাধারণ অক্ষরের বদলে টোকেন সংখ্যা গণনা করা উচিত?'
        },
        options: [
          {
            en: 'Embedding context windows are strictly enforced in token counts, and token-to-character ratios vary wildly across languages and code',
            bn: 'এমবেডিং মডেলের ধারণক্ষমতা টোকেন সংখ্যার ওপর নির্ধারিত হয় এবং ভাষা ও কোডের ক্ষেত্রে অক্ষর ও টোকেনের অনুপাত অনেক ভিন্ন হয়'
          },
          {
            en: 'Because characters are illegal under web standards',
            bn: 'কারণ ওয়েব স্ট্যান্ডার্ডে সাধারণ অক্ষরের ব্যবহার নিষিদ্ধ'
          },
          {
            en: 'Token counting prevents server fans from spinning too fast',
            bn: 'টোকেন গণনা সার্ভারের ফ্যান দ্রুত ঘোরা থেকে বিরত রাখে'
          },
          {
            en: 'Characters cannot be stored inside JSON files',
            bn: 'JSON ফাইলের ভেতর অক্ষর রাখা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Model context limits are measured in tokens, not bytes or letters.',
          bn: 'মডেলের ইনপুট সীমা মাপা হয় টোকেনে, অক্ষর বা বাইটে নয়।'
        },
        explanation: {
          en: 'Token-aware chunking prevents accidental model truncation caused by language-dependent token expansion.',
          bn: 'টোকেন ভিত্তিক চাংকিং করলে বিভিন্ন ভাষায় অক্ষরের তারতম্যের কারণে লেখা মাঝপথে কেটে যাওয়ার ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'quiz-optimal-overlap-percentage',
        kind: 'mcq',
        topic: 'recommended-overlap-ratio',
        question: {
          en: 'What is the universally recommended overlap percentage range for general enterprise prose in RAG pipelines?',
          bn: 'RAG পাইপলাইনে সাধারণ প্রাতিষ্ঠানিক নথিপত্রের জন্য সর্বজনীনভাবে স্বীকৃত ওভারল্যাপের শতকরা হার কত?'
        },
        options: [
          { en: '10% to 20% of the total chunk size', bn: 'মোট চাঙ্কের আকারের ১০% থেকে ২০%' },
          { en: 'Exactly 95% of the total chunk size', bn: 'মোট চাঙ্কের আকারের ঠিক ৯৫%' },
          { en: '0% under all circumstances', bn: 'যেকোনো পরিস্থিতিতে ঠিক ০%' },
          { en: 'Over 500% overlap', bn: '৫০০% এর বেশি ওভারল্যাপ' }
        ],
        answer: 0,
        hint: {
          en: 'A modest overlap provides boundary protection without causing excessive storage bloating.',
          bn: 'একটি পরিমিত ওভারল্যাপ অতিরিক্ত মেমোরি খরচ না করেই বাক্যের সংযোগ রক্ষা করে।'
        },
        explanation: {
          en: 'A 10% to 20% overlap balances semantic boundary preservation against index storage overhead.',
          bn: '১০% থেকে ২০% ওভারল্যাপ তথ্যের ধারাবাহিকতা এবং স্টোরেজ খরচের মধ্যে চমৎকার ভারসাম্য রক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'semantic-search',
    title: {
      en: 'Semantic Search vs Lexical Keyword Matching',
      bn: 'শব্দার্থিক অনুসন্ধান বনাম সাধারণ কিওয়ার্ড ম্যাচিং'
    }
  }
};
