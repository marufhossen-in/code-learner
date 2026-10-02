import type { Lesson } from '../../../lib/types';

export const OrdersAndTheOrderLesson: Lesson = {
  slug: 'orders-and-the-order',
  tech: 'dynamic-programming',
  title: {
    en: 'String DP: Longest Common Subsequence & Edit Distance',
    bn: 'স্ট্রিং ডিপি: লংগেস্ট কমন সাবসিকোয়েন্স ও এডিট ডিসট্যান্স'
  },
  summary: {
    en: 'Master 2D sequence alignment, solve Longest Common Subsequence and Levenshtein Edit Distance, and discover how version control diff algorithms work under the hood.',
    bn: '২ডি সিকোয়েন্স অ্যালাইনমেন্ট আয়ত্ত করুন, লংগেস্ট কমন সাবসিকোয়েন্স ও লেভেনস্টাইন এডিট ডিসট্যান্স সমাধান করুন এবং গিট ডিফ অ্যালগরিদমের ভেতরের কৌশল জানুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'sequence-alignment-concept',
      text: {
        en: 'The Sequence Alignment Challenge',
        bn: 'সিকোয়েন্স অ্যালাইনমেন্টের চ্যালেঞ্জ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Comparing text strings is fundamental across computing, powering version control diff tools, search engine spell checkers, and bioinformatics genetic sequence alignment. In String DP, states are parameterized by two prefix indices i and j, representing prefixes of string S1 and string S2. By analyzing whether the current characters match, we transition between subproblems in O(M * N) time.',
        bn: 'দুটি টেক্সট স্ট্রিং তুলনা করা কম্পিউটার বিজ্ঞানের অন্যতম মৌলিক কাজ, যা ভার্সন কন্ট্রোল ডিফ টুল, সার্চ ইঞ্জিন বানান পরীক্ষক এবং বায়োইনফরমেটিক্স জেনেটিক সিকোয়েন্স অ্যালাইনমেন্টের মূল ভিত্তি। স্ট্রিং ডিপিতে স্টেটগুলোকে দুটি প্রিফিক্স সূচক i এবং j দ্বারা প্রকাশ করা হয়, যা স্ট্রিং S1 এবং S2-এর অংশবিশেষ নির্দেশ করে। বর্তমান অক্ষরগুলো মিলেছে কিনা তা যাচাই করে আমরা O(M * N) সময়ে সাব-প্রবলেমের মধ্যে যাতায়াত করি।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'longest-common-subsequence',
          def: {
            en: 'The longest sequence of characters that appear in the same relative order in both strings, though not necessarily consecutively.',
            bn: 'সবচেয়ে দীর্ঘ অক্ষরের ক্রম যা উভয় স্ট্রিংয়ে একই আপেক্ষিক ধারাবাহিকতায় থাকে, যদিও তাদের পরপর থাকা বাধ্যতামূলক নয়।'
          }
        },
        {
          term: 'levenshtein-edit-distance',
          def: {
            en: 'The minimum number of single-character edit operations (Insert, Delete, or Replace) required to transform string S1 into string S2.',
            bn: 'স্ট্রিং S1-কে স্ট্রিং S2-তে রূপান্তর করতে প্রয়োজনীয় একক অক্ষরের পরিবর্তন অপারেশনের (যোগ, বিয়োগ বা প্রতিস্থাপন) সর্বনিম্ন সংখ্যা।'
          }
        },
        {
          term: 'diagonal-match-transition',
          def: {
            en: 'The state transition dp[i][j] = dp[i - 1][j - 1] occurring when S1[i - 1] === S2[j - 1], requiring zero additional edit cost.',
            bn: 'যখন S1[i - ১] === S2[j - ১] মিলে যায় তখন dp[i][j] = dp[i - ১][j - ১] সমীকরণ, যাতে কোনো অতিরিক্ত পরিবর্তন খরচ লাগে না।'
          }
        },
        {
          term: 'diff-backtracking',
          def: {
            en: 'Tracing backward through a completed 2D matrix from bottom-right to top-left to reconstruct the exact sequence of additions and deletions.',
            bn: 'সম্পন্ন ২ডি ম্যাট্রিক্সের নিচ-ডান থেকে ওপর-বামে উল্টো হেঁটে সংযোজন ও বিয়োজনের সুনির্দিষ্ট ক্রম পুনরুদ্ধার করার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'lcs-and-edit-distance-svg',
      title: {
        en: 'String DP Matrices: LCS ("ABCDE", "ACE" = 3) and Edit Distance ("horse", "ros" = 3)',
        bn: 'স্ট্রিং ডিপি ম্যাট্রিক্স: LCS ("ABCDE", "ACE" = ৩) এবং এডিট ডিসট্যান্স ("horse", "ros" = ৩)'
      },
      caption: {
        en: 'LCS between "ABCDE" and "ACE" yields length 3 ("ACE"). Edit Distance from "horse" to "ros" requires 3 operations (replace, delete, delete).',
        bn: '"ABCDE" ও "ACE"-এর মধ্যে LCS দৈর্ঘ্য ৩ ("ACE")। আর "horse" থেকে "ros"-এ রূপান্তরে ৩টি অপারেশন লাগে (প্রতিস্থাপন, মুছে ফেলা, মুছে ফেলা)।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="strBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="matchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#strBg)" stroke="#334155" stroke-width="2"/>

  <!-- Left: Longest Common Subsequence (LCS) -->
  <rect x="35" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa">1. Longest Common Subsequence (LCS)</text>
  <text x="55" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">S1 = "ABCDE" (len 5) vs S2 = "ACE" (len 3)</text>

  <!-- Alignment visualization -->
  <rect x="55" y="100" width="340" height="110" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="75" y="130" font-family="monospace" font-size="16" fill="#cbd5e1">S1:  <tspan fill="#34d399" font-weight="bold">A</tspan>  B  <tspan fill="#34d399" font-weight="bold">C</tspan>  D  <tspan fill="#34d399" font-weight="bold">E</tspan></text>
  <text x="75" y="160" font-family="monospace" font-size="16" fill="#cbd5e1">S2:  <tspan fill="#34d399" font-weight="bold">A</tspan>  -  <tspan fill="#34d399" font-weight="bold">C</tspan>  -  <tspan fill="#34d399" font-weight="bold">E</tspan></text>
  <text x="75" y="190" font-family="system-ui, sans-serif" font-size="12" fill="#34d399">Matched Characters: 'A', 'C', 'E'</text>

  <rect x="55" y="225" width="340" height="110" rx="8" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
  <text x="70" y="250" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">LCS Recurrence Rules:</text>
  <text x="70" y="272" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• If match: dp[i][j] = 1 + dp[i-1][j-1]</text>
  <text x="70" y="292" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])</text>
  <text x="70" y="318" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Result: LCS Length = 3 ("ACE")</text>

  <!-- Right: Levenshtein Edit Distance -->
  <rect x="445" y="30" width="380" height="320" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="465" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#34d399">2. Levenshtein Edit Distance</text>
  <text x="465" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Transform "horse" into "ros" using 3 operations</text>

  <rect x="465" y="100" width="340" height="110" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="485" y="128" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">1. Replace 'h' with 'r' -&gt; "rorse"</text>
  <text x="485" y="152" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">2. Delete 'r' -&gt; "rose"</text>
  <text x="485" y="176" font-family="system-ui, sans-serif" font-size="12" fill="#cbd5e1">3. Delete 'e' -&gt; "ros"</text>
  <text x="485" y="198" font-family="system-ui, sans-serif" font-size="11" fill="#34d399">Total Edit Operations: 3</text>

  <rect x="465" y="225" width="340" height="110" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="480" y="250" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">Edit Distance Recurrence:</text>
  <text x="480" y="272" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• If match: dp[i][j] = dp[i-1][j-1]</text>
  <text x="480" y="292" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">• Else: 1 + min(Insert, Delete, Replace)</text>
  <text x="480" y="318" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Result: Minimum Distance = 3</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'lcs-and-edit-recurrence-equations',
      text: {
        en: 'The Recurrence Equations for String DP',
        bn: 'স্ট্রিং ডিপির রিকারেন্স সমীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For Longest Common Subsequence, comparing character S1[i - 1] with S2[j - 1] yields two cases. If they match, the problem reduces to extending the best LCS from earlier prefixes: dp[i][j] = 1 + dp[i - 1][j - 1]. If they differ, the character from S1 or S2 is excluded: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]). For Edit Distance, if characters match, cost is zero: dp[i][j] = dp[i - 1][j - 1]. If they differ, we take 1 plus the minimum of three possible edits: Insert dp[i][j - 1], Delete dp[i - 1][j], or Replace dp[i - 1][j - 1].',
        bn: 'লংগেস্ট কমন সাবসিকোয়েন্সে S1[i - ১] ও S2[j - ১] অক্ষর দুটি তুলনার ক্ষেত্রে ২টি পরিস্থিতি তৈরি হয়। যদি তারা মিলে যায়, তবে পূর্ববর্তী প্রিফিক্স সমাধানের সাথে ১ যোগ হয়: dp[i][j] = ১ + dp[i - ১][j - ১]। আর না মিললে যেকোনো একটি স্ট্রিংয়ের অক্ষর বাদ দিয়ে সর্বোচ্চটি নেওয়া হয়: dp[i][j] = Math.max(dp[i - ১][j], dp[i][j - ১])। এডিট ডিসট্যান্সে অক্ষর মিললে খরচ শূন্য: dp[i][j] = dp[i - ১][j - ১]। আর অমিল থাকলে ৩টি সম্ভাব্য অপারেশনের (যোগ, বিয়োগ বা প্রতিস্থাপন) সর্বনিম্নটির সাথে ১ যোগ করা হয়।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-string-dp-ts',
      text: {
        en: 'Runnable TypeScript: Complete LCS and Levenshtein Edit Distance Solvers',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: সম্পূর্ণ LCS ও লেভেনস্টাইন এডিট ডিসট্যান্স সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Computing LCS length 3 for ("ABCDE", "ACE") and Levenshtein Edit Distance 3 for ("horse", "ros").',
        bn: '("ABCDE", "ACE") এর জন্য LCS দৈর্ঘ্য ৩ এবং ("horse", "ros") এর জন্য এডিট ডিসট্যান্স ৩ গণনা।'
      },
      code: `// 1. Longest Common Subsequence (LCS) with Backtracking
function longestCommonSubsequence(s1: string, s2: string): { length: number; lcsString: string } {
  const m = s1.length;
  const n = s2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to reconstruct the LCS string
  const chars: string[] = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (s1[i - 1] === s2[j - 1]) {
      chars.push(s1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return { length: dp[m][n], lcsString: chars.reverse().join('') };
}

// 2. Levenshtein Edit Distance
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Base Cases: deletions from word1
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  // Base Cases: insertions into word1
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // 0 cost for match
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i][j - 1],     // Insert
          dp[i - 1][j],     // Delete
          dp[i - 1][j - 1]  // Replace
        );
      }
    }
  }

  return dp[m][n];
}

// Test Benchmark
const s1 = 'ABCDE';
const s2 = 'ACE';
const lcsResult = longestCommonSubsequence(s1, s2);

const w1 = 'horse';
const w2 = 'ros';
const editDist = minDistance(w1, w2);

console.log('LCS Length:', lcsResult.length); // 3
console.log('LCS String:', lcsResult.lcsString); // "ACE"
console.log('Edit Distance from "horse" to "ros":', editDist); // 3
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'Both LCS and Edit Distance run in O(M * N) time and O(M * N) space. Because row i only depends on row i - 1, the space complexity can be compressed to O(min(M, N)) if only the length is required rather than the full reconstructed alignment.',
        bn: 'LCS এবং এডিট ডিসট্যান্স উভয়ই O(M * N) সময় ও মেমরিতে চলে। যেহেতু সারি i কেবল পূর্ববর্তী সারি i - ১ এর ওপর নির্ভর করে, তাই সম্পূর্ণ পথ পুনরুদ্ধারের প্রয়োজন না থাকলে মেমরি O(min(M, N))-এ সংকুচিত করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'dp-ord-ex-1',
      kind: 'mcq',
      topic: 'lcs-matching-character-recurrence',
      question: {
        en: 'In Longest Common Subsequence, what is the recurrence relation when characters S1[i - 1] and S2[j - 1] match?',
        bn: 'লংগেস্ট কমন সাবসিকোয়েন্সে যখন S1[i - ১] এবং S2[j - ১] অক্ষর দুটি মিলে যায়, তখন রিকারেন্স সমীকরণ কোনটি?'
      },
      options: [
        {
          en: 'dp[i][j] = 1 + dp[i - 1][j - 1]',
          bn: 'dp[i][j] = ১ + dp[i - ১][j - ১]'
        },
        {
          en: 'dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])',
          bn: 'dp[i][j] = Math.max(dp[i - ১][j], dp[i][j - ১])'
        },
        {
          en: 'dp[i][j] = dp[i - 1][j - 1] * 2',
          bn: 'dp[i][j] = dp[i - ১][j - ১] * ২'
        },
        {
          en: 'dp[i][j] = 0',
          bn: 'dp[i][j] = ০'
        }
      ],
      answer: 0,
      hint: {
        en: 'A matching character adds 1 to the optimal solution of both preceding prefixes.',
        bn: 'একটি মিলে যাওয়া অক্ষর আগের উভয় প্রিফিক্সের সর্বোত্তম সমাধানের সাথে ১ যোগ করে।'
      },
      explanation: {
        en: 'When both characters are identical, they extend the longest common subsequence formed by prefixes of length i - 1 and j - 1 by exactly 1 character.',
        bn: 'উভয় অক্ষর এক হলে তারা i - ১ এবং j - ১ দৈর্ঘ্যের প্রিফিক্স দ্বারা গঠিত সাবসিকোয়েন্সকে ঠিক ১টি অক্ষর দ্বারা দীর্ঘ করে।'
      }
    },
    {
      id: 'dp-ord-ex-2',
      kind: 'mcq',
      topic: 'edit-distance-operations-count',
      question: {
        en: 'What is the minimum Levenshtein Edit Distance required to transform string "horse" into "ros"?',
        bn: '"horse" স্ট্রিংকে "ros"-এ রূপান্তর করতে সর্বনিম্ন লেভেনস্টাইন এডিট ডিসট্যান্স কত?'
      },
      options: [
        {
          en: '3 operations (Replace h with r, delete r, delete e)',
          bn: '৩টি অপারেশন (h-কে r দিয়ে প্রতিস্থাপন, r মুছে ফেলা, e মুছে ফেলা)'
        },
        {
          en: '5 operations',
          bn: '৫টি অপারেশন'
        },
        {
          en: '1 operation',
          bn: '১টি অপারেশন'
        },
        {
          en: '0 operations',
          bn: '০টি অপারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Replace h -> r gives "rorse", delete r -> "rose", delete e -> "ros" (3 operations).',
        bn: 'h বদলে r করলে "rorse", r মুছলে "rose", e মুছলে "ros" (মোট ৩টি ধাপ)।'
      },
      explanation: {
        en: 'Transforming "horse" into "ros" requires exactly 3 operations: replacing "h" with "r", then deleting the second "r", then deleting "e".',
        bn: '"horse" থেকে "ros" বানাতে ঠিক ৩টি অপারেশন লাগে: "h"-কে "r" দিয়ে প্রতিস্থাপন, দ্বিতীয় "r" মোছা এবং শেষে "e" মোছা।'
      }
    },
    {
      id: 'dp-ord-ex-3',
      kind: 'mcq',
      topic: 'edit-distance-base-case-definition',
      question: {
        en: 'Why is the base case dp[i][0] initialized to i in Levenshtein Edit Distance?',
        bn: 'লেভেনস্টাইন এডিট ডিসট্যান্সে কেন বেস কেস dp[i][0]-কে i দিয়ে ইনিশিয়ালাইজ করা হয়?'
      },
      options: [
        {
          en: 'Transforming a prefix of length i into an empty string of length 0 requires exactly i deletion operations',
          bn: 'i দৈর্ঘ্যের একটি প্রিফিক্সকে ০ দৈর্ঘ্যের খালি স্ট্রিংয়ে রূপান্তর করতে ঠিক i-টি ডিলিট অপারেশন প্রয়োজন'
        },
        {
          en: 'Because empty strings take zero bytes of memory',
          bn: 'কারণ খালি স্ট্রিং শূন্য বাইট মেমরি খরচ করে'
        },
        {
          en: 'Because JavaScript string length starts at 1',
          bn: 'কারণ জাভাস্ক্রিপ্ট স্ট্রিং দৈর্ঘ্য ১ দিয়ে শুরু হয়'
        },
        {
          en: 'To prevent division by zero in floating point arithmetic',
          bn: 'ফ্লোটিং পয়েন্ট পাটিগণিতে শূন্য দিয়ে ভাগ প্রতিরোধ করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'To make an empty string from a word of length i, you must delete every character.',
        bn: 'i দৈর্ঘ্যের শব্দ থেকে খালি স্ট্রিং তৈরি করতে প্রতিটি অক্ষর মুছে ফেলতে হয়।'
      },
      explanation: {
        en: 'Converting any word of length i into an empty string requires deleting all i characters one by one. Hence dp[i][0] = i.',
        bn: 'i দৈর্ঘ্যের যেকোনো শব্দকে খালি স্ট্রিংয়ে পরিণত করতে সবগুলো i-টি অক্ষর এক এক করে মুছে ফেলতে হয়। তাই dp[i][0] = i।'
      }
    },
    {
      id: 'dp-ord-ex-4',
      kind: 'mcq',
      topic: 'string-dp-space-optimization',
      question: {
        en: 'If an engineer only needs the final edit distance number and does not need to reconstruct the alignment, what is the optimal auxiliary space?',
        bn: 'যদি কোনো ইঞ্জিনিয়ারের কেবল চূড়ান্ত এডিট ডিসট্যান্স সংখ্যাটি প্রয়োজন হয় এবং সম্পূর্ণ পথ না লাগে, তবে সর্বোত্তম স্পেস কত?'
      },
      options: [
        {
          en: 'O(min(M, N)) auxiliary space using two alternating rolling 1D rows',
          bn: 'দুটি পর্যায়ক্রমিক ১ডি সারি ব্যবহার করে O(min(M, N)) অতিরিক্ত স্পেস'
        },
        {
          en: 'O(M * N) space is strictly irreducible',
          bn: 'O(M * N) স্পেস কমানো সম্পূর্ণরূপে অসম্ভব'
        },
        {
          en: 'O(2^M) exponential space',
          bn: 'O(২^M) সূচকীয় স্পেস'
        },
        {
          en: 'O(1) space with zero memory storage',
          bn: 'শূন্য মেমরি সহ O(1) স্পেস'
        }
      ],
      answer: 0,
      hint: {
        en: 'Row i only reads from row i - 1, requiring only two rows of length min(M, N).',
        bn: 'সারি i কেবল আগের সারি i - ১ থেকে পড়ে, ফলে মাত্র ২টি সারি সংরক্ষণ করলেই চলে।'
      },
      explanation: {
        en: 'Because transitions only access the current row and the immediate previous row, maintaining two alternating 1D rows reduces space from O(M * N) to O(min(M, N)).',
        bn: 'যেহেতু স্টেট ট্রানজিশনে কেবল বর্তমান ও পূর্ববর্তী সারির প্রয়োজন হয়, তাই দুটি পর্যায়ক্রমিক সারি রেখে মেমরি O(min(M, N))-এ নামিয়ে আনা যায়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'String Dynamic Programming Quiz',
      bn: 'স্ট্রিং ডায়নামিক প্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'dp-ord-qz-1',
        kind: 'mcq',
        topic: 'git-diff-myers-algorithm',
        question: {
          en: 'How does the Git version control system utilize Longest Common Subsequence principles in its diff engine?',
          bn: 'গিট ভার্সন কন্ট্রোল সিস্টেম কীভাবে তার ডিফ ইঞ্জিনে লংগেস্ট কমন সাবসিকোয়েন্স নীতি প্রয়োগ করে?'
        },
        options: [
          {
            en: 'It treats lines of code as string tokens and computes the LCS to identify unchanged code lines, rendering non-matching tokens as deletions (-) and additions (+)',
            bn: 'এটি কোডের প্রতিটি লাইনকে টোকেন হিসেবে ধরে LCS নির্ণয় করে অপরিবর্তিত লাইনগুলো চিহ্নিত করে এবং অমিল অংশগুলোকে বিয়োগ (-) ও যোগ (+) হিসেবে দেখায়'
          },
          {
            en: 'It sends text files across the internet using UDP packets',
            bn: 'এটি UDP প্যাকেট ব্যবহার করে ইন্টারনেটে ফাইল পাঠায়'
          },
          {
            en: 'It recompiles all files into binary machine code',
            bn: 'এটি সমস্ত ফাইলকে বাইনারি মেশিন কোডে পুনরায় কম্পাইল করে'
          },
          {
            en: 'It reverses the commit history in Git repositories',
            bn: 'এটি গিট রিপোজিটরির কমিট হিস্ট্রি উল্টো করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unchanged lines form the LCS; missing lines are red diffs and added lines are green diffs.',
          bn: 'অপরিবর্তিত লাইনগুলো LCS গঠন করে; বাকিগুলো লাল ও সবুজ ডিফ হিসেবে প্রদর্শিত হয়।'
        },
        explanation: {
          en: 'The Myers diff algorithm in Git computes the edit script and LCS between lines of two file versions. The longest common lines are preserved, and deviations become diff hunks.',
          bn: 'গিটের মায়ার্স ডিফ অ্যালগরিদম দুটি ফাইলের লাইনের মধ্যে LCS গণনা করে। দীর্ঘতম সাধারণ লাইনগুলো সংরক্ষিত থাকে এবং বাকিগুলো যোগ ও বিয়োগ হিসেবে প্রদর্শিত হয়।'
        }
      },
      {
        id: 'dp-ord-qz-2',
        kind: 'mcq',
        topic: 'longest-common-substring-vs-subsequence',
        question: {
          en: 'What is the vital difference between Longest Common Subsequence (LCS) and Longest Common Substring?',
          bn: 'লংগেস্ট কমন সাবসিকোয়েন্স (LCS) এবং লংগেস্ট কমন সাবস্ট্রিং-এর মধ্যে মৌলিক পার্থক্য কোনটি?'
        },
        options: [
          {
            en: 'Substrings must be strictly contiguous in both original strings, whereas subsequences allow non-adjacent characters as long as relative order is preserved',
            bn: 'সাবস্ট্রিং-এর ক্ষেত্রে অক্ষরগুলোকে অবশ্যই মূল স্ট্রিংয়ে পরপর (অবিচ্ছিন্ন) থাকতে হয়, যেখানে সাবসিকোয়েন্সে আপেক্ষিক ক্রম ঠিক রেখে মাঝে ফাঁক থাকা সম্ভব'
          },
          {
            en: 'Substrings can only contain numbers',
            bn: 'সাবস্ট্রিং-এ কেবল সংখ্যা থাকতে পারে'
          },
          {
            en: 'Subsequences cannot exceed 3 characters in length',
            bn: 'সাবসিকোয়েন্সের দৈর্ঘ্য ৩ অক্ষরের বেশি হতে পারে না'
          },
          {
            en: 'Substrings are only evaluated in Python',
            bn: 'সাবস্ট্রিং কেবল পাইথনে মূল্যায়িত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Substrings are continuous slices; subsequences preserve order with gaps.',
          bn: 'সাবস্ট্রিং হলো টানা অংশ; সাবসিকোয়েন্স ফাঁক সহ ক্রম বজায় রাখে।'
        },
        explanation: {
          en: 'In "ABCDE", "ACE" is a valid subsequence because relative order is preserved. However, "ACE" is not a substring because characters are not contiguous.',
          bn: '"ABCDE"-তে "ACE" একটি বৈধ সাবসিকোয়েন্স কারণ আপেক্ষিক ক্রম অক্ষুণ্ণ আছে। কিন্তু এটি সাবস্ট্রিং নয় কারণ অক্ষরগুলো পাশাপাশি টানা অবস্থানে নেই।'
        }
      },
      {
        id: 'dp-ord-qz-3',
        kind: 'mcq',
        topic: 'shortest-common-supersequence',
        question: {
          en: 'Given two strings S1 of length M and S2 of length N, what is the length of their Shortest Common Supersequence (SCS) in terms of their LCS length?',
          bn: 'M দৈর্ঘ্যের S1 এবং N দৈর্ঘ্যের S2-এর জন্য তাদের শর্টেস্ট কমন সুপারসিকোয়েন্সের (SCS) দৈর্ঘ্য LCS দৈর্ঘ্যের সাপেক্ষে কত?'
        },
        options: [
          {
            en: 'Length = M + N - LCS(S1, S2)',
            bn: 'দৈর্ঘ্য = M + N - LCS(S1, S2)'
          },
          {
            en: 'Length = M * N',
            bn: 'দৈর্ঘ্য = M * N'
          },
          {
            en: 'Length = LCS(S1, S2) * 2',
            bn: 'দৈর্ঘ্য = LCS(S1, S2) * ২'
          },
          {
            en: 'Length = Math.max(M, N)',
            bn: 'দৈর্ঘ্য = Math.max(M, N)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sum both lengths and subtract the duplicated common characters once.',
          bn: 'উভয় দৈর্ঘ্য যোগ করে সাধারণ অক্ষরের ডুপ্লিকেট অংশ একবার বিয়োগ করুন।'
        },
        explanation: {
          en: 'The shortest string containing both S1 and S2 as subsequences contains all characters from both strings minus the common subsequence characters that can be shared once: M + N - LCS.',
          bn: 'উভয় স্ট্রিংকে সাবসিকোয়েন্স হিসেবে ধারণকারী ক্ষুদ্রতম স্ট্রিংটির দৈর্ঘ্য হবে দুই স্ট্রিংয়ের মোট অক্ষরের যোগফল থেকে তাদের সাধারণ LCS একবার বিয়োগ করলে যা হয়: M + N - LCS।'
        }
      },
      {
        id: 'dp-ord-qz-4',
        kind: 'mcq',
        topic: 'bioinformatics-needleman-wunsch',
        question: {
          en: 'How do geneticists and computational biologists use the Needleman-Wunsch algorithm in DNA genome sequencing?',
          bn: 'জিনতত্ত্ববিদ ও বায়োইনফরমেটিক্স বিজ্ঞানীরা ডিএনএ জিনোম সিকোয়েন্সিংয়ে কীভাবে নিডলম্যান-উন্শ অ্যালগরিদম ব্যবহার করেন?'
        },
        options: [
          {
            en: 'It adapts 2D String DP with customizable scoring matrices (match rewards, mismatch penalties, gap penalties) to find optimal global alignments between DNA nucleotide strands (A, C, G, T)',
            bn: 'এটি কাস্টমাইজযোগ্য স্কোরিং ম্যাট্রিক্স সহ ২ডি স্ট্রিং ডিপি ব্যবহার করে ডিএনএ নিউক্লিওটাইড সিকোয়েন্সের (A, C, G, T) মধ্যে গ্লোবাল অ্যালাইনমেন্ট খুঁজে বের করে'
          },
          {
            en: 'It counts the number of cells under a biological microscope',
            bn: 'এটি অনুবীক্ষণ যন্ত্রের নিচে জৈবিক কোষের সংখ্যা গণনা করে'
          },
          {
            en: 'It measures the body temperature of laboratory animals',
            bn: 'এটি গবেষণাগারের প্রাণীদের শরীরের তাপমাত্রা পরিমাপ করে'
          },
          {
            en: 'It synthesizes artificial insulin in petri dishes',
            bn: 'এটি পেট্রি ডিশে কৃত্রিম ইনসুলিন সংশ্লেষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It aligns DNA nucleotide sequences using scoring penalties for mutations and insertions.',
          bn: 'এটি রূপান্তর ও সন্নিবেশের পেনাল্টি স্কোর ব্যবহার করে ডিএনএ সিকোয়েন্স মেলায়।'
        },
        explanation: {
          en: 'The Needleman-Wunsch algorithm is global sequence alignment dynamic programming applied to genomic sequences, assigning mathematical scores to genetic mutations, insertions, and deletions.',
          bn: 'নিডলম্যান-উন্শ অ্যালগরিদম হলো জিনোমিক সিকোয়েন্সে প্রয়োগ করা গ্লোবাল স্ট্রিং ডিপি, যা জেনেটিক মিউটেশন ও গ্যাপের জন্য স্কোর বরাদ্দ করে ডিএনএ বিশ্লেষণ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'grids-and-the-grid',
    title: {
      en: 'Interval & Matrix DP: LIS & Matrix Chain',
      bn: 'ইন্টারভ্যাল ও ম্যাট্রিক্স ডিপি: LIS ও ম্যাট্রিক্স চেইন'
    }
  }
};
