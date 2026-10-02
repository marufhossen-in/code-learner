import type { Lesson } from '../../../lib/types';

export const theTextMillLesson: Lesson = {
  slug: 'the-text-mill',
  tech: 'searching',
  title: {
    en: 'Substring & Pattern Searching: Naive, KMP & Rabin-Karp',
    bn: 'সাবস্ট্রিং ও প্যাটার্ন সার্চ: নাইভ, KMP ও রবিন-কার্প'
  },
  summary: {
    en: 'String pattern matching locates all occurrences of a pattern of length m within a body text of length n. Naive sliding window search checks every alignment in O(n * m) worst-case time, incurring quadratic slowdown on repetitive texts. The Knuth-Morris-Pratt algorithm preprocesses the pattern to compute a prefix function table in O(m) time, ensuring the text pointer never moves backward and completing search in deterministic O(n + m) time. The Rabin-Karp algorithm uses rolling polynomial hashes to compare candidate substrings in O(1) expected time per slide.',
    bn: 'স্ট্রিং প্যাটার্ন ম্যাচিং n দৈর্ঘ্যের মূল লেখার ভেতর m দৈর্ঘ্যের নির্দিষ্ট প্যাটার্নের সমস্ত উপস্থিতি খুঁজে বের করে। সাধারণ স্লাইডিং উইন্ডো নাইভ সার্চ প্রতিটি অবস্থানে O(n * m) ওর্য়াস্ট-কেস সময়ে পরীক্ষা করে, যা পুনরাবৃত্তিমূলক লেখায় মারাত্মক দ্বিঘাত মন্থরতা তৈরি করে। নূথ-মরিস-প্র্যাট বা KMP অ্যালগরিদম O(m) সময়ে প্যাটার্নের প্রিফিক্স ফাংশন টেবিল তৈরি করে, যা টেক্সট পয়েন্টারকে কখনো পেছনে না ফিরিয়ে নিশ্চিতভাবে O(n + m) সময়ে অনুসন্ধান সম্পন্ন করে। রবিন-কার্প অ্যালগরিদম রোলিং পলিনোমিয়াল হ্যাশ ব্যবহার করে প্রতি স্লাইডে গড়ে O(1) সময়ে সম্ভাব্য সাবস্ট্রিং তুলনা করে।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The String Matching Problem and Naive Limitations',
        bn: 'স্ট্রিং ম্যাচিং সমস্যা এবং নাইভ পদ্ধতির সীমাবদ্ধতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Substring searching is the computational task of identifying the starting index where a pattern p of length m appears inside a larger text t of length n. The simplest approach, naive string search, aligns the pattern with the text starting at index 0 and compares characters from left to right. When a mismatch occurs, the naive algorithm shifts the pattern window by exactly 1 position and restarts character comparisons from the beginning of the pattern. In the worst case, such as searching for pattern aaab inside text aaaaaaa, the algorithm performs m comparisons at almost every position, degrading to O(n * m) time. Advanced pattern matching algorithms avoid this quadratic penalty by retaining information learned from partial matches.',
        bn: 'সাবস্ট্রিং সার্চ হলো এমন একটি কম্পিউটেশনাল প্রক্রিয়া যার মাধ্যমে n দৈর্ঘ্যের একটি বড় টেক্সট t এর ভেতর m দৈর্ঘ্যের প্যাটার্ন p ঠিক কোন ইনডেক্স থেকে শুরু হয়েছে তা খুঁজে বের করা হয়। সবচেয়ে সরল পদ্ধতি নাইভ স্ট্রিং সার্চ টেক্সটের ইনডেক্স ০ থেকে প্যাটার্নকে বসিয়ে বাম থেকে ডানে অক্ষরগুলো তুলনা করে। কোনো অমিল বা মিসম্যাচ ঘটলে নাইভ অ্যালগরিদম প্যাটার্নটিকে ঠিক ১ ঘর ডানে সরায় এবং প্যাটার্নের শুরু থেকে পুনরায় সব অক্ষর তুলনা করা শুরু করে। সবচেয়ে খারাপ ক্ষেত্রে, যেমন aaaaaaa টেক্সটের ভেতর aaab প্যাটার্ন খোঁজার সময়, অ্যালগরিদমটি প্রায় প্রতিটি অবস্থানে m সংখ্যক তুলনা চালায়, যার ফলে সময় জটিলতা O(n * m) এ নেমে যায়। উন্নত প্যাটার্ন ম্যাচিং অ্যালগরিদমগুলো আংশিক মিল থেকে প্রাপ্ত তথ্য কাজে লাগিয়ে এই দ্বিঘাত বিলম্ব রোধ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Naive String Search',
          def: {
            en: 'A brute-force pattern matching algorithm that tests every possible text alignment, resulting in O(n * m) worst-case time complexity.',
            bn: 'একটি ব্রুট-ফোর্স প্যাটার্ন ম্যাচিং অ্যালগরিদম যা প্রতিটি সম্ভাব্য অবস্থানে পরীক্ষা চালায় এবং সবচেয়ে খারাপ ক্ষেত্রে O(n * m) সময় নেয়।'
          }
        },
        {
          term: 'Prefix Function (LPS)',
          def: {
            en: 'An array where lps[i] stores the length of the longest proper prefix of pattern[0..i] that is also a suffix of pattern[0..i].',
            bn: 'একটি অ্যারে যেখানে lps[i] হলো pattern[0..i] এর এমন দীর্ঘতম প্রকৃত প্রিফিক্সের দৈর্ঘ্য যা একই সাথে pattern[0..i] এর একটি সাফিক্স।'
          }
        },
        {
          term: 'KMP Algorithm',
          def: {
            en: 'A linear time pattern matching algorithm that utilizes the prefix function to resume searching after mismatches without rewinding the text pointer.',
            bn: 'একটি লিনিয়ার টাইম প্যাটার্ন ম্যাচিং অ্যালগরিদম যা টেক্সট পয়েন্টার পেছনে না ফিরিয়েই প্রিফিক্স ফাংশনের সাহায্যে অমিলের পর অনুসন্ধান চালিয়ে যায়।'
          }
        },
        {
          term: 'Rolling Hash',
          def: {
            en: 'A hash function that computes the hash value of a sliding window in O(1) time by removing the exiting character and appending the entering character.',
            bn: 'একটি হ্যাশ ফাংশন যা বের হয়ে যাওয়া অক্ষর বাদ দিয়ে এবং নতুন অক্ষর যুক্ত করে O(1) সময়ে স্লাইডিং উইন্ডোর হ্যাশ মান নির্ণয় করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'kmp-mechanics',
      text: {
        en: 'The Knuth-Morris-Pratt (KMP) Architecture',
        bn: 'নূথ-মরিস-প্র্যাট (KMP) আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The core insight of the Knuth-Morris-Pratt algorithm is that the text pointer i never moves backward. When a character mismatch occurs after matching j characters, the matched segment pattern[0..j - 1] is already known. If a suffix of this matched segment is identical to a prefix of the pattern, the algorithm shifts the pattern so that this prefix aligns with the matching suffix, setting j = lps[j - 1]. Precomputing the longest prefix suffix array takes O(m) time and memory. During search, pointer i advances continuously from 0 to n. Because pointer j increases at most n times and decreases only as many times as it increased, the total number of operations during text traversal is bounded by 2 * n. Combined with O(m) preprocessing, KMP achieves guaranteed deterministic O(n + m) time complexity.',
        bn: 'নূথ-মরিস-প্র্যাট অ্যালগরিদমের মূল কৌশল হলো টেক্সট পয়েন্টার i কখনোই পেছনে ফেরে না। j সংখ্যক অক্ষর মেলার পর কোনো অমিল দেখা দিলে মিলে যাওয়া অংশ pattern[0..j - 1] আমাদের পূর্বেই জানা থাকে। মিলে যাওয়া অংশের কোনো সাফিক্স যদি প্যাটার্নের প্রিফিক্সের সমান হয়, তবে অ্যালগরিদম প্যাটার্নটিকে এমনভাবে সরায় যেন সেই প্রিফিক্সটি মিলে যাওয়া সাফিক্সের সাথে মিলে যায়, অর্থাৎ j = lps[j - 1] হয়। দীর্ঘতম প্রিফিক্স সাফিক্স অ্যারে তৈরি করতে O(m) সময় ও মেমরি লাগে। অনুসন্ধানের সময় পয়েন্টার i ধারাবাহিকভাবে ০ থেকে n পর্যন্ত এগিয়ে যায়। যেহেতু পয়েন্টার j সর্বোচ্চ n বার বাড়ে এবং যতবার বাড়ে তার চেয়ে বেশি কমতে পারে না, তাই টেক্সট পরিদর্শনে মোট অপারেশনের সংখ্যা ২ * n দ্বারা সীমাবদ্ধ থাকে। O(m) প্রি-প্রসেসিংসহ KMP অ্যালগরিদম নিশ্চিতভাবে O(n + m) টাইম কমপ্লেক্সিটি অর্জন করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'kmp-search.ts',
      caption: {
        en: 'Implementation of the KMP prefix function builder and linear pattern matcher.',
        bn: 'KMP প্রিফিক্স ফাংশন এবং লিনিয়ার প্যাটার্ন ম্যাচিংয়ের সঠিক বাস্তবায়ন।'
      },
      code: `export function computeLPSArray(pattern: string): number[] {
  const m = pattern.length;
  const lps = new Array(m).fill(0);
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1]; // Fallback to shorter prefix
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

export function kmpSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  if (m === 0) return [];

  const lps = computeLPSArray(pattern);
  const matches: number[] = [];
  let i = 0; // Pointer for text
  let j = 0; // Pointer for pattern

  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      matches.push(i - j); // Match found at starting index i - j
      j = lps[j - 1];       // Look for next potential match
    } else if (i < n && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];     // Fallback without incrementing i
      } else {
        i++;
      }
    }
  }
  return matches;
}`
    },
    {
      type: 'heading',
      id: 'rabin-karp-mechanics',
      text: {
        en: 'The Rabin-Karp Rolling Hash Algorithm',
        bn: 'রবিন-কার্প রোলিং হ্যাশ অ্যালগরিদম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Rabin-Karp algorithm approaches string search from a numerical hashing perspective. Instead of comparing characters individually at each alignment, it treats every length-m substring as a base-d integer evaluated modulo a large prime q. The hash of the pattern and the initial window of text are computed in O(m) time. When sliding the window from index i to i + 1, the new hash is derived in constant O(1) time. It subtracts the exiting character text[i], multiplies by base d, and adds entering character text[i + m] modulo q. If the window hash matches the pattern hash, the algorithm performs a direct character-by-character verification to guard against hash collisions. On average, Rabin-Karp operates in O(n + m) time, making it particularly effective for multi-pattern searching.',
        bn: 'রবিন-কার্প অ্যালগরিদম স্ট্রিং সার্চকে একটি সাংখ্যিক হ্যাশিংয়ের দৃষ্টিকোণ থেকে দেখে। প্রতিটি অবস্থানে একে একে অক্ষর তুলনা করার বদলে এটি প্রতিটি m দৈর্ঘ্যের সাবস্ট্রিংকে একটি বড় মৌলিক সংখ্যা q দ্বারা মডুলো করা বেস-d পূর্ণসংখ্যা হিসেবে বিবেচনা করে। প্যাটার্ন এবং টেক্সটের প্রথম উইন্ডোর হ্যাশ O(m) সময়ে গণনা করা হয়। উইন্ডোটি ইনডেক্স i থেকে i + ১ এ সরানোর সময় O(1) কনস্ট্যান্ট সময়ে নতুন হ্যাশ পাওয়া যায়। এটি বের হয়ে যাওয়া অক্ষর text[i] এর মান বিয়োগ করে, বেস d দিয়ে গুণ করে এবং নতুন যুক্ত হওয়া অক্ষর text[i + m] যোগ করে মডিউলো q গণনা করে। টেক্সট উইন্ডোর হ্যাশ যদি প্যাটার্নের হ্যাশের সাথে মিলে যায়, তবে হ্যাশ সংঘর্ষ এড়াতে অ্যালগরিদমটি সরাসরি অক্ষরগুলো পরীক্ষা করে নিশ্চিত হয়। গড়ে রবিন-কার্প O(n + m) সময়ে কাজ করে, যা একাধিক প্যাটার্ন অনুসন্ধানের জন্য বিশেষভাবে উপযোগী।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'rabin-karp.ts',
      caption: {
        en: 'Implementation of the Rabin-Karp algorithm with rolling polynomial hash.',
        bn: 'রোলিং পলিনোমিয়াল হ্যাশ সহ রবিন-কার্প অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন।'
      },
      code: `export function rabinKarpSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  if (m === 0 || m > n) return [];

  const d = 256;      // Number of characters in the alphabet
  const q = 1000000007; // Large prime modulus
  let patternHash = 0;
  let windowHash = 0;
  let h = 1;          // d^(m-1) % q
  const matches: number[] = [];

  // Precompute h = pow(d, m - 1) % q
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate initial hash values
  for (let i = 0; i < m; i++) {
    patternHash = (d * patternHash + pattern.charCodeAt(i)) % q;
    windowHash = (d * windowHash + text.charCodeAt(i)) % q;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === windowHash) {
      // Hash match: verify characters to confirm
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) matches.push(i);
    }

    // Slide window: compute hash for next substring in O(1)
    if (i < n - m) {
      windowHash = (d * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
      if (windowHash < 0) {
        windowHash += q;
      }
    }
  }

  return matches;
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: LPS Construction and Text Alignment',
        bn: 'এক্সিকিউশন ট্রেস: LPS টেবিল তৈরি এবং টেক্সট অ্যালাইনমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We trace both algorithms searching for pattern ABABCABAB of length 9 inside text ABABDABACDABABCABAB of length 19. First, building the LPS table for ABABCABAB computes array [0, 0, 1, 2, 0, 1, 2, 3, 4]. Notice that at index 8 (the final B), prefix ABAB of length 4 matches suffix ABAB. When matching against text ABABDABACDABABCABAB, the first mismatch occurs at text index 4 where text has D but pattern has C. Instead of restarting at text index 1, KMP inspects lps[3] which is 2 (prefix AB). Pointer i remains at 4 while j resumes from 2, preserving previous work. Both KMP and Rabin-Karp locate the exact match at starting index 10.',
        bn: 'আমরা ১৯ দৈর্ঘ্যের টেক্সট ABABDABACDABABCABAB এর ভেতর ৯ দৈর্ঘ্যের প্যাটার্ন ABABCABAB অনুসন্ধানে উভয় অ্যালগরিদম পরিচালনা করি। প্রথমত, ABABCABAB এর জন্য LPS টেবিল তৈরি করলে [0, 0, 1, 2, 0, 1, 2, 3, 4] অ্যারে পাওয়া যায়। লক্ষণীয় যে ইনডেক্স ৮ এ (শেষের B তে) ৪ দৈর্ঘ্যের প্রিফিক্স ABAB এর সাথে সাফিক্স ABAB হুবহু মিলে যায়। টেক্সট ABABDABACDABABCABAB এর সাথে মেলানোর সময় প্রথম অমিলটি ঘটে টেক্সট ইনডেক্স ৪ এ যেখানে টেক্সটে D আছে কিন্তু প্যাটার্নে C আছে। টেক্সটের ইনডেক্স ১ এ ফিরে যাওয়ার বদলে KMP lps[3] এর মান ২ (প্রিফিক্স AB) ব্যবহার করে। ফলে পয়েন্টার i এর মান ৪ এ স্থির থাকে এবং j এর মান ২ থেকে পুনরায় শুরু হয়। KMP এবং রবিন-কার্প উভয় অ্যালগরিদমই ঠিক ইনডেক্স ১০ এ কাঙ্ক্ষিত প্যাটার্নটি খুঁজে পায়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-kmp-demo.ts',
      caption: {
        en: 'Step-by-step execution trace of KMP pattern matching.',
        bn: 'KMP প্যাটার্ন ম্যাচিংয়ের প্রতিটি ধাপের বাস্তব এক্সিকিউশন ট্রেস।'
      },
      code: `// Text:    "ABABDABACDABABCABAB" (length = 19)
// Pattern: "ABABCABAB"           (length = 9)

// 1. LPS Table for "ABABCABAB":
// char 'A' -> lps[0] = 0
// char 'B' -> lps[1] = 0
// char 'A' -> lps[2] = 1 ("A" matches "A")
// char 'B' -> lps[3] = 2 ("AB" matches "AB")
// char 'C' -> lps[4] = 0
// char 'A' -> lps[5] = 1 ("A")
// char 'B' -> lps[6] = 2 ("AB")
// char 'A' -> lps[7] = 3 ("ABA")
// char 'B' -> lps[8] = 4 ("ABAB" matches "ABAB")
// Result: [0, 0, 1, 2, 0, 1, 2, 3, 4]

// 2. KMP Execution:
// Matches text[0..3] ("ABAB") with pattern[0..3] ("ABAB")
// At text[4] ('D') vs pattern[4] ('C') -> mismatch!
// Fallback: j = lps[3] = 2. i stays at 4!
// Continues matching from j = 2...
// Match found at index 10!
// Verification: text.slice(10, 19) === "ABABCABAB" -> true!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Prefix Suffix Overlaps',
        bn: 'প্রিফিক্স সাফিক্স ওভারল্যাপের ভিজ্যুয়ালাইজেশন'
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
        en: 'Comparative Analysis: String Search Algorithms',
        bn: 'তুলনামূলক বিশ্লেষণ: স্ট্রিং সার্চ অ্যালগরিদম'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Preprocessing Time', bn: 'প্রি-প্রসেসিং সময়' },
        { en: 'Search Time Complexity', bn: 'সার্চ টাইম কমপ্লেক্সিটি' },
        { en: 'Optimal Practical Scenario', bn: 'সর্বোত্তম ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Naive Search', bn: 'নাইভ সার্চ' },
          { en: 'O(1) none', bn: 'O(1) কোনোটি নয়' },
          { en: 'O(n * m) worst case', bn: 'সবচেয়ে খারাপ ক্ষেত্রে O(n * m)' },
          { en: 'Short non-repeating search queries', bn: 'ছোট অ-পুনরাবৃত্তিমূলক সার্চ কোয়েরি' }
        ],
        [
          { en: 'Knuth-Morris-Pratt (KMP)', bn: 'নূথ-মরিস-প্র্যাট (KMP)' },
          { en: 'O(m) LPS table', bn: 'O(m) LPS টেবিল' },
          { en: 'Deterministic O(n + m)', bn: 'সুনির্দিষ্ট O(n + m)' },
          { en: 'Streaming input where text cannot rewind', bn: 'স্ট্রিমিং ইনপুট যেখানে টেক্সট রিওয়াইন্ড অসম্ভব' }
        ],
        [
          { en: 'Rabin-Karp', bn: 'রবিন-কার্প' },
          { en: 'O(m) initial hash', bn: 'O(m) প্রাথমিক হ্যাশ' },
          { en: 'O(n + m) average, O(n * m) worst', bn: 'গড়ে O(n + m), খারাপতম O(n * m)' },
          { en: 'Plagiarism detection and multi-pattern matching', bn: 'প্লেজারিজম শনাক্তকরণ ও বহু প্যাটার্ন সন্ধান' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Efficient Pattern Matching',
        bn: 'সারসংক্ষেপ: কার্যকর প্যাটার্ন ম্যাচিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Substring searching transitions from inefficient quadratic scanning to guaranteed linear performance through structured preprocessing. KMP leverages internal pattern symmetries via the LPS table to eliminate text backtracking. Rabin-Karp uses rolling arithmetic hashes to compare candidate substrings in constant time per position. Understanding these principles enables developers to build high-performance search engines, syntax highlighters, and bioinformatics tools.',
        bn: 'গঠনমূলক প্রি-প্রসেসিংয়ের মাধ্যমে সাবস্ট্রিং সার্চ অদক্ষ দ্বিঘাত স্ক্যান থেকে বেরিয়ে নিশ্চিত লিনিয়ার পারফরম্যান্সে রূপ নেয়। KMP অ্যালগরিদম টেক্সট ব্যাকট্র্যাকিং দূর করতে LPS টেবিলের সাহায্যে প্যাটার্নের অভ্যন্তরীণ প্রতিসাম্যকে কাজে লাগায়। রবিন-কার্প রোলিং হ্যাশ ব্যবহার করে প্রতি অবস্থানে কনস্ট্যান্ট সময়ে সাবস্ট্রিং তুলনা করে। এই নীতিগুলো আয়ত্ত করার মাধ্যমে ডেভেলপাররা উচ্চগতির সার্চ ইঞ্জিন, সিনট্যাক্স হাইলাইটার এবং বায়োইনফরমেটিক্স সফটওয়্যার তৈরি করতে পারেন।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-skip-parade',
    tech: 'searching',
    title: {
      en: 'Skip Lists: Layered Probabilistic Search',
      bn: 'স্কিপ লিস্ট: স্তরিত সম্ভাব্যতা ভিত্তিক অনুসন্ধান'
    }
  },
  exercises: [
    {
      id: 'tm-ex1',
      kind: 'predict',
      topic: 'lps array calculation',
      question: {
        en: 'What is the prefix function LPS array for the pattern string ABABAC?',
        bn: 'ABABAC প্যাটার্ন স্ট্রিংটির প্রিফিক্স ফাংশন LPS অ্যারে কোনটি হবে?'
      },
      options: [
        {
          en: '[0, 0, 1, 2, 3, 0]',
          bn: '[০, ০, ১, ২, ৩, ০]'
        },
        {
          en: '[0, 0, 0, 0, 0, 0]',
          bn: '[০, ০, ০, ০, ০, ০]'
        },
        {
          en: '[0, 1, 2, 3, 4, 5]',
          bn: '[০, ১, ২, ৩, ৪, ৫]'
        },
        {
          en: '[0, 0, 1, 2, 0, 0]',
          bn: '[০, ০, ১, ২, ০, ০]'
        }
      ],
      answer: 0,
      hint: {
        en: 'For prefix ABABA at index 4, proper prefix ABA matches proper suffix ABA (length 3). At index 5 (C), mismatch resets to 0.',
        bn: 'ইনডেক্স ৪ এ ABABA এর ক্ষেত্রে প্রকৃত প্রিফিক্স ABA এর সাথে সাফিক্স ABA মিলে যায় (দৈর্ঘ্য ৩)। ইনডেক্স ৫ এ C আসায় তা আবার ০ হয়ে যায়।'
      },
      explanation: {
        en: 'A has 0; AB has 0; ABA has length 1 (A); ABAB has length 2 (AB); ABABA has length 3 (ABA); and ABABAC has 0 because no proper prefix matches suffix C. Thus the array is [0, 0, 1, 2, 3, 0].',
        bn: 'A এর জন্য ০; AB এর ০; ABA এর দৈর্ঘ্য ১ (A); ABAB এর দৈর্ঘ্য ২ (AB); ABABA এর দৈর্ঘ্য ৩ (ABA); এবং ABABAC এর ০ কারণ কোনো প্রিফিক্স সাফিক্স C এর সাথে মেলে না। ফলে অ্যারেটি হয় [০, ০, ১, ২, ৩, ০]।'
      }
    },
    {
      id: 'tm-ex2',
      kind: 'mcq',
      topic: 'kmp text pointer invariant',
      question: {
        en: 'Why is the text pointer i guaranteed to never move backward during KMP search execution?',
        bn: 'KMP সার্চ এক্সিকিউশন চলাকালীন টেক্সট পয়েন্টার i কখনোই পেছনে ফিরবে না বলে কেন নিশ্চিত থাকা যায়?'
      },
      options: [
        {
          en: 'Because the precomputed LPS table indicates the maximum pattern prefix that already matches the current text suffix, shifting only the pattern pointer j',
          bn: 'কারণ পূর্বগণিত LPS টেবিল নির্দেশ করে প্যাটার্নের কোন সর্বোচ্চ প্রিফিক্সটি ইতোমধ্যেই টেক্সট সাফিক্সের সাথে মিলে আছে, ফলে শুধুমাত্র প্যাটার্ন পয়েন্টার j পরিবর্তন হয়'
        },
        {
          en: 'Because JavaScript strings are immutable and cannot be read backwards',
          bn: 'কারণ জাভাস্ক্রিপ্ট স্ট্রিং অপরিবর্তনীয় এবং উল্টো দিক থেকে পড়া যায় না'
        },
        {
          en: 'Because KMP reverses the entire text before beginning execution',
          bn: 'কারণ KMP কাজ শুরু করার আগে পুরো টেক্সট উল্টে নেয়'
        },
        {
          en: 'Because the operating system memory controller forbids backward iteration',
          bn: 'কারণ অপারেটিং সিস্টেমের মেমরি কন্ট্রোলার পেছনে পুনরাবৃত্তি নিষিদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The information about matched characters is stored in the LPS table, so text characters need not be re-read.',
        bn: 'মিলে যাওয়া অক্ষরের তথ্য LPS টেবিলে সংরক্ষিত থাকে, তাই টেক্সটের অক্ষরগুলো পুনরায় পড়ার প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'The LPS array stores previous matching suffix information. On a mismatch, KMP resets the pattern pointer j = lps[j - 1] while keeping pointer i stationary or advancing it, ensuring i never decrements.',
        bn: 'LPS অ্যারে পূর্ববর্তী মিলে যাওয়া সাফিক্সের তথ্য সংরক্ষণ করে। কোনো অমিল ঘটলে KMP প্যাটার্ন পয়েন্টার j = lps[j - 1] করে দেয় কিন্তু i পয়েন্টারকে স্থির রেখে বা সামনে বাড়িয়ে নিশ্চিত করে যে i কখনোই কমবে না।'
      }
    },
    {
      id: 'tm-ex3',
      kind: 'mcq',
      topic: 'rabin-karp rolling hash efficiency',
      question: {
        en: 'How does the Rabin-Karp algorithm achieve O(1) time complexity when updating the window hash as it slides forward by 1 character?',
        bn: '১টি অক্ষর সামনে স্লাইড করার সময় উইন্ডো হ্যাশ আপডেট করতে রবিন-কার্প অ্যালগরিদম কীভাবে O(1) টাইম কমপ্লেক্সিটি অর্জন করে?'
      },
      options: [
        {
          en: 'By algebraically subtracting the contribution of the exiting leftmost character and adding the new rightmost character using arithmetic operations',
          bn: 'গাণিতিক সূত্রের মাধ্যমে বের হয়ে যাওয়া বামের অক্ষরের মান বিয়োগ করে এবং নতুন ডান পাশের অক্ষরের মান যোগ করে'
        },
        {
          en: 'By hashing the entire substring from scratch using an MD5 hash function',
          bn: 'একটি MD5 হ্যাশ ফাংশন ব্যবহার করে পুরো সাবস্ট্রিংটিকে প্রথম থেকে পুনরায় হ্যাশ করে'
        },
        {
          en: 'By storing all possible substring hashes in an auxiliary array before searching',
          bn: 'অনুসন্ধানের পূর্বে সমস্ত সম্ভাব্য সাবস্ট্রিং হ্যাশ একটি সহায়ক অ্যারেতে সংরক্ষণ করে'
        },
        {
          en: 'By utilizing multi-threaded parallel GPU hardware shaders',
          bn: 'মাল্টি-থ্রেডেড সমান্তরাল জিপিইউ হার্ডওয়্যার শেডার ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of how a sliding window sum updates: new_sum = old_sum - exiting_val + entering_val.',
        bn: 'স্লাইডিং উইন্ডোর যোগফল কীভাবে আপডেট হয় ভাবুন: new_sum = old_sum - exiting_val + entering_val।'
      },
      explanation: {
        en: 'A rolling polynomial hash computes the new hash from the old hash in constant time: new_hash = (d * (old_hash - text[i] * h) + text[i + m]) % q, requiring no loop over the length-m window.',
        bn: 'একটি রোলিং পলিনোমিয়াল হ্যাশ কনস্ট্যান্ট সময়ে পুরনো হ্যাশ থেকে নতুন হ্যাশ তৈরি করে: new_hash = (d * (old_hash - text[i] * h) + text[i + m]) % q, যার জন্য m দৈর্ঘ্যের উইন্ডোতে কোনো লুপ চালাতে হয় না।'
      }
    }
  ],
  quiz: {
    id: 'text-mill-quiz',
    title: {
      en: 'Pattern Matching and Substring Search Quiz',
      bn: 'প্যাটার্ন ম্যাচিং ও সাবস্ট্রিং সার্চ কুইজ'
    },
    questions: [
      {
        id: 'tq1',
        kind: 'mcq',
        topic: 'naive search worst case',
        question: {
          en: 'In which scenario does naive string searching exhibit its worst-case O(n * m) runtime behavior?',
          bn: 'কোন পরিস্থিতিতে নাইভ স্ট্রিং সার্চ তার সবচেয়ে খারাপ O(n * m) রানটাইম প্রদর্শন করে?'
        },
        options: [
          {
            en: 'When both the text and the pattern consist of long repetitive sequences of the same character with a mismatch at the very end of the pattern',
            bn: 'যখন টেক্সট এবং প্যাটার্ন উভয়ই একই অক্ষরের দীর্ঘ পুনরাবৃত্তিমূলক অনুক্রম নিয়ে গঠিত হয় এবং অমিলটি প্যাটার্নের একদম শেষে ঘটে'
          },
          {
            en: 'When the text and pattern contain completely distinct characters with zero overlap',
            bn: 'যখন টেক্সট এবং প্যাটার্নে কোনো মিল না থাকা সম্পূর্ণ ভিন্ন অক্ষর থাকে'
          },
          {
            en: 'When searching for an empty pattern of length 0',
            bn: 'যখন ০ দৈর্ঘ্যের একটি খালি প্যাটার্ন অনুসন্ধান করা হয়'
          },
          {
            en: 'When the text length n is strictly less than pattern length m',
            bn: 'যখন টেক্সটের দৈর্ঘ্য n প্যাটার্নের দৈর্ঘ্য m এর চেয়ে কঠোরভাবে কম হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider text aaaaaaaaaa and pattern aaab.',
          bn: 'aaaaaaaaaa টেক্সট এবং aaab প্যাটার্নের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'When text is aaaaaaaaaa and pattern is aaab, naive search matches the first 3 characters and fails on the 4th, advancing by only 1 position. This forces m comparisons at every alignment.',
          bn: 'যখন টেক্সট aaaaaaaaaa এবং প্যাটার্ন aaab হয়, তখন নাইভ সার্চ প্রথম ৩টি অক্ষর মেলায় এবং ৪র্থটিতে ব্যর্থ হয়ে মাত্র ১ ঘর এগোয়। এটি প্রতিটি অবস্থানে m সংখ্যক তুলনা করতে বাধ্য করে।'
        }
      },
      {
        id: 'tq2',
        kind: 'mcq',
        topic: 'kmp preprocessing complexity',
        question: {
          en: 'What is the time and space complexity required to construct the KMP prefix function (LPS table) for a pattern of length m?',
          bn: 'm দৈর্ঘ্যের প্যাটার্নের জন্য KMP প্রিফিক্স ফাংশন (LPS টেবিল) তৈরি করতে কত সময় এবং মেমরির প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'O(m) time and O(m) auxiliary space',
            bn: 'O(m) সময় এবং O(m) অতিরিক্ত মেমরি'
          },
          {
            en: 'O(m^2) time and O(1) space',
            bn: 'O(m^2) সময় এবং O(1) মেমরি'
          },
          {
            en: 'O(log m) time and O(m) space',
            bn: 'O(log m) সময় এবং O(m) মেমরি'
          },
          {
            en: 'O(n) time and O(n) space',
            bn: 'O(n) সময় এবং O(n) মেমরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'The LPS array is computed by scanning the pattern once using two pointers.',
          bn: 'দুটি পয়েন্টার দিয়ে প্যাটার্নটিকে একবার স্ক্যান করে LPS অ্যারে তৈরি করা হয়।'
        },
        explanation: {
          en: 'Building the LPS table requires a single forward scan of the length-m pattern with amortized pointer updates, taking linear O(m) time and storing an array of size m in O(m) space.',
          bn: 'LPS টেবিল তৈরিতে m দৈর্ঘ্যের প্যাটার্নকে অ্যামর্টাইজড পয়েন্টার আপডেটের মাধ্যমে একবার স্ক্যান করা হয়, যা লিনিয়ার O(m) সময় নেয় এবং O(m) মেমরিতে m আকারের একটি অ্যারে সংরক্ষণ করে।'
        }
      },
      {
        id: 'tq3',
        kind: 'mcq',
        topic: 'rabin-karp collisions',
        question: {
          en: 'Why must Rabin-Karp perform a character-by-character check even when the window hash matches the pattern hash?',
          bn: 'উইন্ডো হ্যাশ এবং প্যাটার্ন হ্যাশ মিলে গেলেও রবিন-কার্প অ্যালগরিদমকে কেন অক্ষরে অক্ষরে পরীক্ষা করতে হয়?'
        },
        options: [
          {
            en: 'Because different strings can produce identical hash values modulo q (hash collisions), producing false positives without verification',
            bn: 'কারণ ভিন্ন স্ট্রিংও মডুলো q এর কারণে একই হ্যাশ মান তৈরি করতে পারে (হ্যাশ কলিশন), যা যাচাই না করলে ভুল ফলাফল দিতে পারে'
          },
          {
            en: 'To update the CPU instruction cache for subsequent loops',
            bn: 'পরবর্তী লুপের জন্য সিপিইউ ইন্সট্রাকশন ক্যাশ আপডেট করতে'
          },
          {
            en: 'Because modulo arithmetic changes the encoding of uppercase letters',
            bn: 'কারণ মডুলো অ্যারিথমেটিক বড় হাতের অক্ষরের এনকোডিং পরিবর্তন করে দেয়'
          },
          {
            en: 'Because character verification runs in O(1) time',
            bn: 'কারণ অক্ষর যাচাইকরণ O(1) সময়ে সম্পন্ন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Pigeonhole Principle: many different strings map to a finite set of integers.',
          bn: 'পিজিয়নহোল নীতি: অসংখ্য ভিন্ন স্ট্রিং একটি সীমিত পূর্ণসংখ্যার সেটে ম্যাপ হতে পারে।'
        },
        explanation: {
          en: 'Hash functions map infinite possible strings to a finite set of numbers modulo q. Two non-matching strings can have identical hash values (a collision), so matching characters explicitly is mandatory.',
          bn: 'হ্যাশ ফাংশন অসীম সংখ্যক স্ট্রিংকে q এর অধীন একটি সসীম সংখ্যায় ম্যাপ করে। অমিল থাকা দুটি স্ট্রিংয়েরও একই হ্যাশ মান হতে পারে (কলিশন), তাই সরাসরি অক্ষরগুলো মেলানো বাধ্যতামূলক।'
        }
      },
      {
        id: 'tq4',
        kind: 'mcq',
        topic: 'streaming text search',
        question: {
          en: 'Why is KMP uniquely suited for processing live streaming data over network sockets compared to naive search or Boyer-Moore?',
          bn: 'নাইভ সার্চ বা বয়ার-মুরের তুলনায় লাইভ নেটওয়ার্ক সকেট দিয়ে প্রবাহিত ডেটা অনুসন্ধানে KMP কেন বিশেষভাবে উপযোগী?'
        },
        options: [
          {
            en: 'KMP reads the text strictly in a single forward pass without ever seeking backward, allowing search over stream buffers that cannot be rewound',
            bn: 'KMP টেক্সটকে কঠোরভাবে একক সম্মুখবর্তী পাসে পড়ে এবং কখনো পেছনে ফেরে না, ফলে রিওয়াইন্ড করা যায় না এমন লাইভ স্ট্রিম বাফারে এটি সহজে কাজ করতে পারে'
          },
          {
            en: 'KMP compresses the text stream by 50 percent using Huffman encoding',
            bn: 'KMP হাফম্যান এনকোডিং ব্যবহার করে টেক্সট স্ট্রিমকে ৫০ শতাংশ সংকুচিত করে'
          },
          {
            en: 'KMP converts network packets into binary search trees',
            bn: 'KMP নেটওয়ার্ক প্যাকেটগুলোকে বাইনারি সার্চ ট্রিতে রূপান্তর করে'
          },
          {
            en: 'KMP executes on the network interface card hardware',
            bn: 'KMP সরাসরি নেটওয়ার্ক ইন্টারফেস কার্ডের হার্ডওয়্যারে পরিচালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Network streams do not allow indexing backwards: stream[i - 1] is gone forever once consumed.',
          bn: 'নেটওয়ার্ক স্ট্রিমে পেছনে যাওয়া যায় না: stream[i - 1] একবার পড়া হয়ে গেলে তা হারিয়ে যায়।'
        },
        explanation: {
          en: 'Naive search and Boyer-Moore frequently step backwards in the text. KMP guarantees that text pointer i strictly advances, allowing continuous processing of non-seekable network streams.',
          bn: 'নাইভ সার্চ এবং বয়ার-মুর অ্যালগরিদম প্রায়শই টেক্সটে পেছনের দিকে যায়। কিন্তু KMP টেক্সট পয়েন্টার i কে কঠোরভাবে সামনের দিকে এগিয়ে নেওয়ার নিশ্চয়তা দেয়, যা নেটওয়ার্ক স্ট্রিমের জন্য আদর্শ।'
        }
      },
      {
        id: 'tq5',
        kind: 'mcq',
        topic: 'rabin-karp multi-pattern advantage',
        question: {
          en: 'When is Rabin-Karp vastly superior to KMP for real-world text analysis?',
          bn: 'বাস্তব ক্ষেত্রে টেক্সট বিশ্লেষণের জন্য কখন রবিন-কার্প KMP এর চেয়ে অনেক বেশি শ্রেষ্ঠত্ব প্রদর্শন করে?'
        },
        options: [
          {
            en: 'When searching for multiple patterns of the same length simultaneously, because candidate window hashes can be looked up in a hash set in O(1) time',
            bn: 'যখন একই দৈর্ঘ্যের একাধিক প্যাটার্ন একসাথে খুঁজতে হয়, কারণ উইন্ডো হ্যাশটি একটি হ্যাশ সেটে মাত্র O(1) সময়ে পরীক্ষা করা যায়'
          },
          {
            en: 'When the pattern length m is larger than the text length n',
            bn: 'যখন প্যাটার্নের দৈর্ঘ্য m টেক্সটের দৈর্ঘ্য n এর চেয়ে বড় হয়'
          },
          {
            en: 'When the alphabet consists exclusively of binary digits 0 and 1',
            bn: 'যখন বর্ণমালায় শুধুমাত্র বাইনারি অঙ্ক ০ এবং ১ থাকে'
          },
          {
            en: 'When executing searches inside relational database triggers',
            bn: 'যখন রিলেশনাল ডেটাবেস ট্রিগারের ভেতরে অনুসন্ধান চালানো হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Precompute hashes for 1000 patterns into a set. One sliding window checks all 1000 patterns.',
          bn: '১০০০টি প্যাটার্নের হ্যাশ আগে একটি সেটে রাখুন। একটি একক স্লাইডিং উইন্ডো একসাথে ১০০০টি প্যাটার্ন পরীক্ষা করতে পারে।'
        },
        explanation: {
          en: 'For k patterns of identical length, their hashes can be placed into a hash set in O(k * m) time. A single text pass checks each window hash against the set in O(1), achieving O(n + k * m) time.',
          bn: 'একই দৈর্ঘ্যের k সংখ্যক প্যাটার্নের হ্যাশ O(k * m) সময়ে একটি হ্যাশ সেটে রাখা যায়। টেক্সটের একটি একক পাসে প্রতি উইন্ডো হ্যাশ মাত্র O(1) সময়ে সেটের সাথে মিলিয়ে O(n + k * m) সময়ে কাজ সম্পন্ন করা যায়।'
        }
      }
    ]
  }
};
