import type { Lesson } from '../../../lib/types';

export const theGridStairLesson: Lesson = {
  slug: 'the-grid-stair',
  tech: 'searching',
  title: {
    en: 'Matrix Searching: 2D Saddleback & Row-Column Elimination',
    bn: 'ম্যাট্রিক্স অনুসন্ধান: ২ডি স্যাডলব্যাক ও সারি-কলাম বর্জন'
  },
  summary: {
    en: 'Searching a two-dimensional matrix depends on its sorting guarantees. In a strictly sorted flattened matrix, a single binary search over m * n elements finds keys in O(log(m * n)) time. When rows and columns are independently sorted in ascending order (a Young Tableau), the saddleback algorithm begins at the top-right corner, where the element is simultaneously the row maximum and column minimum. Each comparison eliminates an entire row or column, guaranteeing search completion in O(m + n) time. For a 1000 by 1000 grid, this requires at most 2000 probes compared to 1000000 brute-force checks.',
    bn: 'দ্বিমাত্রিক ম্যাট্রিক্সে অনুসন্ধান এর সাজানো শর্তের ওপর নির্ভর করে। একটি সম্পূর্ণ সমতলভাবে সাজানো ম্যাট্রিক্সে m * n উপাদানের ওপর একটি একক বাইনারি সার্চ O(log(m * n)) সময়ে মান খুঁজে বের করে। যখন প্রতিটি সারি এবং কলাম স্বাধীনভাবে ছোট থেকে বড় ক্রমে সাজানো থাকে (ইয়াং ট্যাবলিউ), তখন স্যাডলব্যাক অ্যালগরিদম উপর-ডান কোণ থেকে অনুসন্ধান শুরু করে, যেখানে উপাদানটি একই সাথে তার সারির সর্বোচ্চ এবং কলামের সর্বনিম্ন মান। প্রতিটি তুলনা একটি সম্পূর্ণ সারি বা কলাম বাদ দেয়, যা নিশ্চিতভাবে O(m + n) সময়ে কাজ শেষ করে। ১০০০ গুণ ১০০০ আকারের গ্রিডে এটি ব্রুট-ফোর্স পদ্ধতির ১০০০০০০ পরীক্ষার বিপরীতে সর্বোচ্চ ২০০০ প্রোবে সমাধান দেয়।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Two Distinct Matrix Sorting Contracts',
        bn: 'ম্যাট্রিক্স সাজানোর দুটি স্বতন্ত্র চুক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When searching a 2D matrix of m rows and n columns, algorithms distinguish between two distinct structural layouts. The first layout is the strictly sorted matrix, where each row is sorted and the first element of each row strictly exceeds the last element of the preceding row. This structure acts as a flattened 1D sorted array, allowing standard binary search across indices 0 to m * n - 1 in O(log(m * n)) time. The second layout is the row-wise and column-wise sorted matrix, where elements increase from left to right along every row and increase from top to bottom along every column. Because rows can overlap in value ranges, a flat binary search fails. Instead, saddleback search exploits geometric corner properties to achieve linear perimeter traversal in O(m + n) steps.',
        bn: 'm সংখ্যক সারি এবং n সংখ্যক কলামের দ্বিমাত্রিক ম্যাট্রিক্সে অনুসন্ধানের সময় অ্যালগরিদম দুটি ভিন্ন কাঠামোগত বিন্যাসকে বিবেচনা করে। প্রথম বিন্যাসটি হলো সম্পূর্ণ সাজানো ম্যাট্রিক্স, যেখানে প্রতিটি সারি সাজানো থাকে এবং প্রতিটি সারির প্রথম উপাদান পূর্ববর্তী সারির শেষ উপাদানের চেয়ে বড় হয়। এই কাঠামোটি একটি সমতল ১ডি সাজানো অ্যারের মতো আচরণ করে, যা ইনডেক্স ০ থেকে m * n - ১ পর্যন্ত O(log(m * n)) সময়ে সাধারণ বাইনারি সার্চের সুযোগ দেয়। দ্বিতীয় বিন্যাসটি হলো সারি ও কলাম অনুসারে সাজানো ম্যাট্রিক্স, যেখানে প্রতিটি সারিতে বাম থেকে ডানে এবং প্রতিটি কলামে উপর থেকে নিচে মান বৃদ্ধি পায়। যেহেতু সারির মানের পরিসর একে অপরকে ওভারল্যাপ করতে পারে, তাই এখানে সমতল বাইনারি সার্চ কাজ করে না। এর পরিবর্তে স্যাডলব্যাক সার্চ জ্যামিতিক কোণার সুবিধা নিয়ে O(m + n) পদক্ষেপে পরিধি বরাবর রৈখিক অনুসন্ধান নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Saddleback Search',
          def: {
            en: 'An elimination search on row-wise and column-wise sorted matrices that starts at an anti-diagonal corner, completing in O(m + n) time.',
            bn: 'সারি ও কলাম অনুসারে সাজানো ম্যাট্রিক্সে বিপরীত-কর্ণ কোণ থেকে শুরু হওয়া একটি বর্জন সার্চ যা O(m + n) সময়ে সম্পন্ন হয়।'
          }
        },
        {
          term: 'Young Tableau Matrix',
          def: {
            en: 'A 2D array where every row is sorted in ascending order from left to right and every column is sorted from top to bottom.',
            bn: 'একটি দ্বিমাত্রিক অ্যারে যার প্রতিটি সারি বাম থেকে ডানে এবং প্রতিটি কলাম উপর থেকে নিচে ছোট থেকে বড় ক্রমে সাজানো থাকে।'
          }
        },
        {
          term: 'Flattened 2D Indexing',
          def: {
            en: 'Mapping a 1D index k into 2D coordinates using row = Math.floor(k / n) and col = k % n.',
            bn: 'row = Math.floor(k / n) এবং col = k % n সূত্রের মাধ্যমে ১ডি ইনডেক্স k কে দ্বিমাত্রিক স্থানাঙ্কে রূপান্তর করার পদ্ধতি।'
          }
        },
        {
          term: 'Perimeter Complexity',
          def: {
            en: 'An execution bound proportional to the grid boundary dimensions (m + n) rather than the total grid area (m * n).',
            bn: 'একটি এক্সিকিউশন সীমা যা গ্রিডের মোট ক্ষেত্রফল (m * n) এর পরিবর্তে গ্রিডের পরিসীমার মাত্রা (m + n) এর সমানুপাতিক।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'corner-elimination',
      text: {
        en: 'The Corner Property and Strip Elimination',
        bn: 'কোণার বৈশিষ্ট্য এবং সম্পূর্ণ স্ট্রিপ বর্জন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The secret to O(m + n) saddleback search lies in selecting an optimal starting position. The top-left corner is the global minimum and the bottom-right corner is the global maximum; probing either yields no directional guidance because both neighbor steps move in the same relative direction. In contrast, the top-right corner at row 0 and column n - 1 possesses a dual status: it is simultaneously the largest element in its row and the smallest element in its column. When comparing matrix[row][col] with target, if the corner value exceeds the target, no element below it in that column can match because column values increase downwards. The entire column is eliminated by decrementing col. Symmetrically, if the corner value is less than the target, no element to its left in that row can match because row values decrease westward. The entire row is eliminated by incrementing row. Each probe discards 1 full row or 1 full column.',
        bn: 'O(m + n) স্যাডলব্যাক অনুসন্ধানের চাবিকাঠি হলো সঠিক শুরুর অবস্থান নির্বাচন। উপর-বাম কোণটি হলো সম্পূর্ণ গ্রিডের সর্বনিম্ন এবং নিচে-ডান কোণটি হলো সর্বোচ্চ মান; এদের যেকোনো একটিতে অনুসন্ধান শুরু করলে কোনো স্পষ্ট দিকনির্দেশনা পাওয়া যায় না কারণ সংলগ্ন উভয় পথেই মান একই ধারায় বাড়ে বা কমে। এর বিপরীতে সারি ০ এবং কলাম n - ১ এ অবস্থিত উপর-ডান কোণটি একটি দ্বৈত ক্ষমতার অধিকারী: এটি একই সাথে তার সারির বৃহত্তম এবং কলামের ক্ষুদ্রতম মান। matrix[row][col] এর সাথে টার্গেটের তুলনা করার সময় যদি কোণার মান টার্গেটের চেয়ে বড় হয়, তবে সেই কলামের নিচের কোনো উপাদানই উত্তরের সমান হতে পারে না কারণ নিচে নামলে মান কেবল বাড়ে। ফলে col কমিয়ে পুরো কলামটি এক পদক্ষেপে বাদ দেওয়া যায়। একইভাবে কোণার মান যদি টার্গেটের চেয়ে ছোট হয়, তবে সেই সারির বামের কোনো উপাদানই টার্গেটের সমান হতে পারে না। ফলে row বাড়িয়ে পুরো সারিটি বাদ দেওয়া যায়। প্রতিটি পরীক্ষা ১টি পূর্ণ সারি বা ১টি পূর্ণ কলাম বাদ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'matrix-search.ts',
      caption: {
        en: 'Implementation of flattened binary search and saddleback row-column elimination.',
        bn: 'সমতল বাইনারি সার্চ এবং স্যাডলব্যাক সারি-কলাম বর্জন সার্চের কোড বাস্তবায়ন।'
      },
      code: `export function searchSortedMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  // Flattened binary search for strictly sorted matrix
  let lo = 0;
  let hi = m * n - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const r = Math.floor(mid / n);
    const c = mid % n;
    const val = matrix[r][c];

    if (val === target) return true;
    if (val < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

export function searchRowColSortedMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  // Start at top-right corner: (row 0, col n - 1)
  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    const val = matrix[row][col];
    if (val === target) {
      return true; // Target located
    }
    if (val > target) {
      col--; // Eliminate current column entirely
    } else {
      row++; // Eliminate current row entirely
    }
  }
  return false; // Target absent after exhausting grid boundary
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Navigating a 4 by 4 Grid',
        bn: 'এক্সিকিউশন ট্রেস: ৪ গুণ ৪ গ্রিডে পরিদর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We trace saddleback search on a 4 by 4 matrix with rows [1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], and [10, 13, 14, 17] seeking target 5. The search begins at row 0, col 3 with value 11. Because 11 > 5, column 3 is ruled out and col steps left to 2. At row 0, col 2, value is 7 > 5, so column 2 is discarded as col decrements to 1. At row 0, col 1, value is 4 < 5, so row 0 is eliminated and row advances to 1. At row 1, col 1, value 5 matches the target. The search succeeds in exactly 4 comparisons. In contrast, searching for absent value 15 visits cells (0,3)=11, (1,3)=12, (2,3)=16, (2,2)=9, and (3,2)=14 before col exits at -1, proving absence in 5 comparisons.',
        bn: 'আমরা ৪ গুণ ৪ আকারের ম্যাট্রিক্সে টার্গেট ৫ অনুসন্ধানে স্যাডলব্যাক অ্যালগরিদম পরিচালনা করি যেখানে সারিগুলো হলো [1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], এবং [10, 13, 14, 17]। অনুসন্ধান শুরু হয় মান ১১ সহ row ০, col ৩ এ। যেহেতু ১১ > ৫, তাই কলাম ৩ বাতিল হয় এবং col কমে ২ হয়। row ০, col ২ এ মান ৭ > ৫ হওয়ায় কলাম ২ বাতিল হয়ে col কমে ১ হয়। row ০, col ১ এ মান ৪ < ৫ হওয়ায় সারি ০ বাতিল হয়ে row বেড়ে ১ হয়। row ১, col ১ এ মান ৫ মিলে যায়। অনুসন্ধানটি ঠিক ৪টি তুলনায় সফল হয়। বিপরীতে অনুপস্থিত মান ১৫ খুঁজতে এটি ক্রমানুসারে (০,৩)=১১, (১,৩)=১২, (২,৩)=১৬, (২,২)=৯, এবং (৩,২)=১৪ পরিদর্শন করার পর col এর মান -১ এ পৌঁছে ৫টি তুলনায় অনুপস্থিতি নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-matrix-steps.ts',
      caption: {
        en: 'Step-by-step coordinates and values during 4x4 matrix search.',
        bn: '৪ গুণ ৪ ম্যাট্রিক্সে অনুসন্ধানের প্রতিটি ধাপের স্থানাঙ্ক ও মান।'
      },
      code: `// Grid:
// [ 1,  4,  7, 11 ]
// [ 2,  5,  8, 12 ]
// [ 3,  6,  9, 16 ]
// [10, 13, 14, 17 ]

// 1. Search for target 5:
// Step 1: row=0, col=3, val=11 (11 > 5) -> col = 2 (col 3 eliminated)
// Step 2: row=0, col=2, val=7  (7 > 5)  -> col = 1 (col 2 eliminated)
// Step 3: row=0, col=1, val=4  (4 < 5)  -> row = 1 (row 0 eliminated)
// Step 4: row=1, col=1, val=5  (5 == 5) -> MATCH FOUND!
// Total comparisons: 4

// 2. Search for target 15 (absent):
// Step 1: row=0, col=3, val=11 (11 < 15) -> row = 1
// Step 2: row=1, col=3, val=12 (12 < 15) -> row = 2
// Step 3: row=2, col=3, val=16 (16 > 15) -> col = 2
// Step 4: row=2, col=2, val=9  (9 < 15)  -> row = 3
// Step 5: row=3, col=2, val=14 (14 < 15) -> row = 4 (out of bounds)
// Total comparisons: 5 -> NOT FOUND`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing 2D Saddleback Step Traversal',
        bn: '২ডি স্যাডলব্যাক ধাপ পরিদর্শনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'algorithm-comparison',
      text: {
        en: 'Complexity Comparison for an m by n Matrix',
        bn: 'm গুণ n ম্যাট্রিক্সের কর্মক্ষমতার তুলনামূলক সারণি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Sorting Contract Required', bn: 'প্রয়োজনীয় সাজানোর শর্ত' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Probes on 1000x1000 Grid', bn: '১০০০x১০০০ গ্রিডে মোট প্রোব' }
      ],
      rows: [
        [
          { en: 'Brute Force Scan', bn: 'ব্রুট ফোর্স স্ক্যান' },
          { en: 'None (unordered data)', bn: 'কোনোটি নয় (অগোছালো ডেটা)' },
          { en: 'O(m * n)', bn: 'O(m * n)' },
          { en: '1000000 comparisons', bn: '১০০০০০০টি তুলনা' }
        ],
        [
          { en: 'Row-by-Row Binary Search', bn: 'সারিভিত্তিক বাইনারি সার্চ' },
          { en: 'Each row sorted independently', bn: 'প্রতিটি সারি আলাদাভাবে সাজানো' },
          { en: 'O(m * log n)', bn: 'O(m * log n)' },
          { en: '10000 comparisons', bn: '১০০০০টি তুলনা' }
        ],
        [
          { en: 'Saddleback Corner Search', bn: 'স্যাডলব্যাক কোণা সার্চ' },
          { en: 'Both rows and columns sorted', bn: 'সারি ও কলাম উভয়ই সাজানো' },
          { en: 'O(m + n)', bn: 'O(m + n)' },
          { en: '2000 comparisons', bn: '২০০০টি তুলনা' }
        ],
        [
          { en: 'Flattened 2D Binary Search', bn: 'সমতল ২ডি বাইনারি সার্চ' },
          { en: 'Strictly sorted across all rows', bn: 'সমস্ত সারি জুড়ে সম্পূর্ণ সাজানো' },
          { en: 'O(log(m * n))', bn: 'O(log(m * n))' },
          { en: '20 comparisons', bn: '২০টি তুলনা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Exploiting Multidimensional Geometry',
        bn: 'সারসংক্ষেপ: বহুমাত্রিক জ্যামিতির পূর্ণ সদ্ব্যবহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Multidimensional searching illustrates how dual sorting constraints reduce search bounds from area-based complexity O(m * n) down to perimeter-based complexity O(m + n). By anchoring search at an anti-diagonal corner that simultaneously represents the row maximum and column minimum, saddleback search guarantees that every step eliminates an entire row or column without backtracking.',
        bn: 'বহুমাত্রিক অনুসন্ধান দেখায় কীভাবে দ্বৈত সর্টিং শর্ত অনুসন্ধানের পরিধিকে ক্ষেত্রফল-ভিত্তিক জটিলতা O(m * n) থেকে কমিয়ে পরিসীমা-ভিত্তিক জটিলতা O(m + n) এ নামিয়ে আনে। বিপরীত-কর্ণের এমন একটি কোণায় অনুসন্ধান শুরু করে যা একই সাথে সারির সর্বোচ্চ ও কলামের সর্বনিম্ন মান ধারণ করে, স্যাডলব্যাক সার্চ নিশ্চিত করে যে প্রতিটি পদক্ষেপ কোনো ব্যাকট্র্যাকিং ছাড়াই একটি সম্পূর্ণ সারি বা কলাম বাতিল করে।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-search-panorama',
    tech: 'searching',
    title: {
      en: 'The Search Panorama: Architecture, Trade-Offs & Fallbacks',
      bn: 'সার্চ প্যানোরামা: আর্কিটেকচার, ট্রেড-অফ ও ফলব্যাক'
    }
  },
  exercises: [
    {
      id: 'gs-ex1',
      kind: 'mcq',
      topic: 'corner selection rationale',
      question: {
        en: 'Why can saddleback search start at the top-right or bottom-left corner of a 2D sorted matrix, but never at the top-left or bottom-right corner?',
        bn: '২ডি সর্টেড ম্যাট্রিক্সে স্যাডলব্যাক অনুসন্ধান কেন উপর-ডান বা নিচে-বাম কোণ থেকে শুরু করা যায়, কিন্তু উপর-বাম বা নিচে-ডান কোণ থেকে কখনো শুরু করা যায় না?'
      },
      options: [
        {
          en: 'The top-right and bottom-left corners simultaneously represent the maximum of one dimension and the minimum of the other, enabling unambiguous row or column elimination',
          bn: 'উপর-ডান এবং নিচে-বাম কোণগুলো একই সাথে এক মাত্রার সর্বোচ্চ এবং অন্য মাত্রার সর্বনিম্ন মান ধারণ করে, যার ফলে দ্ব্যর্থহীনভাবে পুরো সারি বা কলাম বাদ দেওয়া যায়'
        },
        {
          en: 'The top-left corner is reserved exclusively for the CPU memory cache pointer',
          bn: 'উপর-বাম কোণটি শুধুমাত্র সিপিইউ মেমরি ক্যাশ পয়েন্টারের জন্য সংরক্ষিত থাকে'
        },
        {
          en: 'Starting at the top-left corner causes an array index out of bounds exception',
          bn: 'উপর-বাম কোণ থেকে শুরু করলে অ্যারে ইনডেক্স আউট অফ বাউন্ডস এরর ঘটে'
        },
        {
          en: 'JavaScript 2D arrays cannot read index [0][0] in a while loop',
          bn: 'হোয়াইল লুপে জাভাস্ক্রিপ্ট ২ডি অ্যারে ইনডেক্স [০][০] পড়তে অক্ষম'
        }
      ],
      answer: 0,
      hint: {
        en: 'At top-left, both down and right increase in value. If target is larger, which way do you go?',
        bn: 'উপর-বামে নিচে এবং ডানে উভয় পথেই মান বৃদ্ধি পায়। টার্গেট বড় হলে আপনি কোন পথে যাবেন?'
      },
      explanation: {
        en: 'At [0][0], both stepping right and descending down increase the element value. If target > matrix[0][0], branching in either direction is plausible, yielding no elimination. At [0][n-1], stepping down increases while moving left decreases, providing two opposite deterministic directions.',
        bn: '[০][০] অবস্থানে ডানে অগ্রসর হলে এবং নিচে নামলে উভয় পথেই মান বৃদ্ধি পায়। টার্গেট বড় হলে উভয় পথেই সমাধান থাকা সম্ভব, ফলে কোনো অংশ বাদ দেওয়া যায় না। কিন্তু [০][n-১] অবস্থানে নিচে নামলে মান বাড়ে এবং বামে গেলে মান কমে, যা দুটি বিপরীত নিশ্চিত দিকনির্দেশনা দেয়।'
      }
    },
    {
      id: 'gs-ex2',
      kind: 'predict',
      topic: 'saddleback comparison trace',
      question: {
        en: 'In a 4 by 4 matrix sorted row-wise and column-wise, searching for a target using saddleback search requires at most how many comparisons in the worst case?',
        bn: 'সারি ও কলাম অনুসারে সাজানো একটি ৪ গুণ ৪ ম্যাট্রিক্সে স্যাডলব্যাক সার্চ ব্যবহার করে অনুসন্ধানের ক্ষেত্রে সবচেয়ে খারাপ পরিস্থিতিতে সর্বোচ্চ কয়টি তুলনা লাগতে পারে?'
      },
      options: [
        {
          en: '8 comparisons (m + n = 4 + 4)',
          bn: '৮টি তুলনা (m + n = ৪ + ৪)'
        },
        {
          en: '16 comparisons (m * n)',
          bn: '১৬টি তুলনা (m * n)'
        },
        {
          en: '2 comparisons',
          bn: '২টি তুলনা'
        },
        {
          en: '4 comparisons',
          bn: '৪টি তুলনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The row pointer starts at 0 and increments at most 4 times. The col pointer starts at 3 and decrements at most 4 times.',
        bn: 'row পয়েন্টার ০ থেকে শুরু হয়ে সর্বোচ্চ ৪ বার বাড়ে। col পয়েন্টার ৩ থেকে শুরু হয়ে সর্বোচ্চ ৪ বার কমে।'
      },
      explanation: {
        en: 'On each comparison, either row is incremented or col is decremented. The row index can advance at most m times (4) and the column index can decrease at most n times (4), bounding total comparisons by m + n = 8.',
        bn: 'প্রতিটি তুলনায় হয় row বাড়ে অথবা col কমে। row ইনডেক্স সর্বোচ্চ m বার (৪) বাড়তে পারে এবং col ইনডেক্স সর্বোচ্চ n বার (৪) কমতে পারে, যার ফলে মোট তুলনার সংখ্যা m + n = ৮ দ্বারা সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'gs-ex3',
      kind: 'mcq',
      topic: 'flattened vs row-col sorted',
      question: {
        en: 'If a 2D matrix of dimensions 1000 by 1000 guarantees that every row is sorted, and matrix[i][n - 1] < matrix[i + 1][0] for all i, what is the fastest search algorithm and its worst-case complexity?',
        bn: 'যদি ১০০০ গুণ ১০০০ আকারের একটি ২ডি ম্যাট্রিক্সে প্রতিটি সারি সাজানো থাকে এবং সব i এর জন্য matrix[i][n - 1] < matrix[i + 1][0] শর্ত নিশ্চিত হয়, তবে সবচেয়ে দ্রুততম সার্চ অ্যালগরিদম ও তার জটিলতা কোনটি?'
      },
      options: [
        {
          en: 'Flattened 2D binary search taking at most 20 comparisons in O(log(m * n)) time',
          bn: 'সমতল ২ডি বাইনারি সার্চ যা O(log(m * n)) সময়ে সর্বোচ্চ ২০টি তুলনা গ্রহণ করে'
        },
        {
          en: 'Saddleback search taking 2000 comparisons in O(m + n) time',
          bn: 'স্যাডলব্যাক সার্চ যা O(m + n) সময়ে ২০০০টি তুলনা গ্রহণ করে'
        },
        {
          en: 'Linear search taking 1000000 comparisons in O(m * n) time',
          bn: 'লিনিয়ার সার্চ যা O(m * n) সময়ে ১০০০০০০টি তুলনা গ্রহণ করে'
        },
        {
          en: 'Row-by-row binary search taking 10000 comparisons in O(m * log n) time',
          bn: 'সারিভিত্তিক বাইনারি সার্চ যা O(m * log n) সময়ে ১০০০০টি তুলনা গ্রহণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Total elements = 1000000. ceil(log2(1000000)) = 20.',
        bn: 'মোট উপাদান = ১০০০০০০। ceil(log2(১০০০০০০)) = ২০।'
      },
      explanation: {
        en: 'Because the entire matrix forms a single contiguous strictly sorted sequence, standard binary search over the flattened index range [0, 999999] finds any key in ceil(log2(1000000)) = 20 comparisons.',
        bn: 'যেহেতু সম্পূর্ণ ম্যাট্রিক্সটি একটি অবিচ্ছিন্ন সম্পূর্ণ সাজানো অনুক্রম তৈরি করে, তাই সমতল ইনডেক্স রেঞ্জ [০, ৯৯৯৯৯৯] এর ওপর স্ট্যান্ডার্ড বাইনারি সার্চ চালিয়ে মাত্র ceil(log2(১০০০০০০)) = ২০টি তুলনায় যেকোনো মান খুঁজে পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'grid-stair-quiz',
    title: {
      en: 'Matrix Searching and Saddleback Algorithm Quiz',
      bn: 'ম্যাট্রিক্স অনুসন্ধান ও স্যাডলব্যাক অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'gsq1',
        kind: 'mcq',
        topic: 'perimeter vs area complexity',
        question: {
          en: 'Why is the saddleback search algorithm described as having perimeter complexity rather than area complexity?',
          bn: 'স্যাডলব্যাক সার্চ অ্যালগরিদমকে কেন ক্ষেত্রফল জটিলতার বদলে পরিসীমা জটিলতা বিশিষ্ট বলা হয়?'
        },
        options: [
          {
            en: 'Because each step eliminates an entire row or column, bounding total steps by the sum of dimensions (m + n) rather than the product (m * n)',
            bn: 'কারণ প্রতিটি পদক্ষেপে একটি সম্পূর্ণ সারি বা কলাম বাতিল হয়, ফলে মোট পদক্ষেপের সংখ্যা মাত্রার যোগফল (m + n) দ্বারা সীমাবদ্ধ হয়, গুণফল (m * n) দ্বারা নয়'
          },
          {
            en: 'Because it only inspects the outer border cells of the matrix and ignores inner cells',
            bn: 'কারণ এটি ম্যাট্রিক্সের শুধুমাত্র বাইরের সীমানার সেলগুলো পরীক্ষা করে এবং ভেতরের সেলগুলো উপেক্ষা করে'
          },
          {
            en: 'Because the algorithm is executed using geometry calculation libraries',
            bn: 'কারণ অ্যালগরিদমটি জ্যামিতিক হিসাবের লাইব্রেরি ব্যবহার করে কার্যকর করা হয়'
          },
          {
            en: 'Because perimeter searching requires constant O(1) space',
            bn: 'কারণ পরিসীমা অনুসন্ধানে কনস্ট্যান্ট O(1) মেমরির প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare m + n (perimeter terms) to m * n (area terms).',
          bn: 'm + n (পরিসীমার পদ) এর সাথে m * n (ক্ষেত্রফলের পদ) তুলনা করুন।'
        },
        explanation: {
          en: 'In an m x n matrix, saddleback search moves either left or down at each step, making at most m down steps and at most n left steps. The total operations scale with the perimeter (m + n).',
          bn: 'একটি m x n ম্যাট্রিক্সে স্যাডলব্যাক সার্চ প্রতি পদক্ষেপে হয় বামে নয় নিচে নামে, ফলে এটি সর্বোচ্চ m বার নিচে এবং n বার বামে যেতে পারে। এর মোট অপারেশন পরিসীমা (m + n) এর সমানুপাতিক হয়।'
        }
      },
      {
        id: 'gsq2',
        kind: 'mcq',
        topic: 'flattened 2d coordinate conversion',
        question: {
          en: 'In a 2D matrix with n columns, how is a flattened 1D index mid converted into row and column coordinates?',
          bn: 'n সংখ্যক কলাম বিশিষ্ট ২ডি ম্যাট্রিক্সে সমতল ১ডি ইনডেক্স mid কে কীভাবে সারি এবং কলাম স্থানাঙ্কে রূপান্তর করা হয়?'
        },
        options: [
          {
            en: 'row = Math.floor(mid / n) and col = mid % n',
            bn: 'row = Math.floor(mid / n) এবং col = mid % n'
          },
          {
            en: 'row = mid % n and col = Math.floor(mid / n)',
            bn: 'row = mid % n এবং col = Math.floor(mid / n)'
          },
          {
            en: 'row = Math.floor(mid / m) and col = mid % m',
            bn: 'row = Math.floor(mid / m) এবং col = mid % m'
          },
          {
            en: 'row = mid * n and col = mid + n',
            bn: 'row = mid * n এবং col = mid + n'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each row contains n elements. Dividing by n gives the row index; remainder gives column offset.',
          bn: 'প্রতিটি সারিতে n উপাদান থাকে। n দিয়ে ভাগ করলে সারি ইনডেক্স পাওয়া যায়; ভাগশেষ কলামের অবস্থান দেয়।'
        },
        explanation: {
          en: 'Since rows are of length n, mid / n determines how many complete rows precede the element (the row index), and mid % n determines the element offset within that row (the column index).',
          bn: 'যেহেতু প্রতিটি সারির দৈর্ঘ্য n, তাই mid / n নির্ধারণ করে উপাদানের পূর্বে কয়টি পূর্ণ সারি অতিক্রান্ত হয়েছে (সারি ইনডেক্স), এবং mid % n সেই সারির ভেতরের অবস্থান (কলাম ইনডেক্স) নির্দেশ করে।'
        }
      },
      {
        id: 'gsq3',
        kind: 'mcq',
        topic: 'saddleback worst case probes',
        question: {
          en: 'For a matrix with 500 rows and 500 columns, what is the maximum number of comparisons performed by saddleback search?',
          bn: '৫০০ সারি এবং ৫০০ কলামের একটি ম্যাট্রিক্সে স্যাডলব্যাক সার্চে সর্বোচ্চ কয়টি তুলনা সম্পন্ন হতে পারে?'
        },
        options: [
          {
            en: '1000 comparisons',
            bn: '১০০০টি তুলনা'
          },
          {
            en: '250000 comparisons',
            bn: '২৫০০০০টি তুলনা'
          },
          {
            en: '500 comparisons',
            bn: '৫০০টি তুলনা'
          },
          {
            en: '18 comparisons',
            bn: '১৮টি তুলনা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculate m + n for m = 500 and n = 500.',
          bn: 'm = ৫০০ এবং n = ৫০০ এর জন্য m + n হিসাব করুন।'
        },
        explanation: {
          en: 'With m = 500 and n = 500, the maximum number of steps across the grid perimeter before bounds exhaustion is m + n = 500 + 500 = 1000 comparisons.',
          bn: 'm = ৫০০ এবং n = ৫০০ হলে গ্রিডের পরিসীমা নিঃশেষ হওয়ার আগে সর্বোচ্চ পদক্ষেপের সংখ্যা হয় m + n = ৫০০ + ৫০০ = ১০০০টি তুলনা।'
        }
      },
      {
        id: 'gsq4',
        kind: 'mcq',
        topic: 'alternative starting corner',
        question: {
          en: 'Besides the top-right corner, which other corner of a row-column sorted matrix can serve as a valid starting point for saddleback search?',
          bn: 'উপর-ডান কোণ ছাড়া সারি-কলাম সাজানো ম্যাট্রিক্সের আর কোন কোণটি স্যাডলব্যাক অনুসন্ধানের একটি বৈধ প্রারম্ভিক বিন্দু হিসেবে কাজ করতে পারে?'
        },
        options: [
          {
            en: 'The bottom-left corner at row m - 1, col 0 (which is the column maximum and row minimum)',
            bn: 'সারি m - ১, কলাম ০ এ অবস্থিত নিচে-বাম কোণটি (যা কলামের সর্বোচ্চ এবং সারির সর্বনিম্ন মান)'
          },
          {
            en: 'The top-left corner at row 0, col 0',
            bn: 'সারি ০, কলাম ০ এ অবস্থিত উপর-বাম কোণটি'
          },
          {
            en: 'The bottom-right corner at row m - 1, col n - 1',
            bn: 'সারি m - ১, কলাম n - ১ এ অবস্থিত নিচে-ডান কোণটি'
          },
          {
            en: 'The center cell at row Math.floor(m / 2), col Math.floor(n / 2)',
            bn: 'সারি Math.floor(m / ২), কলাম Math.floor(n / ২) এ অবস্থিত কেন্দ্র সেলটি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look for the other anti-diagonal corner with dual max/min status.',
          bn: 'দ্বৈত সর্বোচ্চ/সর্বনিম্ন মর্যাদা সহ অন্য বিপরীত-কর্ণ কোণটি লক্ষ্য করুন।'
        },
        explanation: {
          en: 'The bottom-left cell matrix[m - 1][0] is the maximum of its column (column 0) and the minimum of its row (row m - 1). Moving up decreases values and moving right increases values, providing identical elimination logic.',
          bn: 'নিচে-বামের সেল matrix[m - ১][০] হলো তার কলামের (কলাম ০) সর্বোচ্চ এবং সারির (সারি m - ১) সর্বনিম্ন মান। উপরে উঠলে মান কমে এবং ডানে গেলে মান বাড়ে, যা অভিন্ন বর্জন যুক্তি প্রদান করে।'
        }
      },
      {
        id: 'gsq5',
        kind: 'mcq',
        topic: 'jagged matrix compatibility',
        question: {
          en: 'Why does the saddleback elimination logic continue to function even on jagged arrays where rows have unequal lengths, provided each row and column is sorted?',
          bn: 'প্রতিটি সারি এবং কলাম সাজানো থাকলে সারিগুলোর দৈর্ঘ্য অসমান হলেও (জ্যাগেড অ্যারে) কেন স্যাডলব্যাক বর্জন যুক্তি কার্যকর থাকে?'
        },
        options: [
          {
            en: 'Because the elimination invariant relies only on monotonic relationships along rows and columns, not on rectangular geometric symmetry',
            bn: 'কারণ বর্জন ইনভেরিয়ান্টটি সারি ও কলামের একমুখী সম্পর্কের ওপর নির্ভর করে, কোনো আয়তাকার জ্যামিতিক প্রতিসাম্যের ওপর নয়'
          },
          {
            en: 'Because jagged arrays automatically pad empty cells with zeroes',
            bn: 'কারণ জ্যাগেড অ্যারে স্বয়ংক্রিয়ভাবে ফাঁকা সেলগুলো শূন্য দিয়ে পূরণ করে নেয়'
          },
          {
            en: 'Because jagged arrays run exclusively on SIMD vector processors',
            bn: 'কারণ জ্যাগেড অ্যারে শুধুমাত্র SIMD ভেক্টর প্রসেসরে কাজ করে'
          },
          {
            en: 'Because the binary search engine flattens jagged arrays automatically',
            bn: 'কারণ বাইনারি সার্চ ইঞ্জিন স্বয়ংক্রিয়ভাবে জ্যাগেড অ্যারেকে সমতল করে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If row values increase rightward, any value smaller than the target still eliminates everything to its left.',
          bn: 'সারির মান ডানে বাড়তে থাকলে টার্গেটের চেয়ে ছোট যেকোনো মান এখনও তার বামের সমস্ত উপাদানকে বাতিল করে দেয়।'
        },
        explanation: {
          en: 'The property that elements to the left are smaller and elements below are larger is an intrinsic property of sorted rows and columns. This monotonic elimination invariant holds even if individual row lengths vary.',
          bn: 'বামের উপাদান ছোট এবং নিচের উপাদান বড় হওয়ার বৈশিষ্ট্যটি সাজানো সারি ও কলামের একটি সহজাত ধর্ম। পৃথক সারির দৈর্ঘ্য অসমান হলেও এই একমুখী বর্জন ইনভেরিয়ান্টটি সম্পূর্ণ অটুট থাকে।'
        }
      }
    ]
  }
};
