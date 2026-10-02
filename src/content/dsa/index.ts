import type { Hub } from '../../lib/types';
import { bigOThinkingLesson } from './lessons/big-o-thinking';
import { sortingPhysicsLesson } from './lessons/sorting-physics';
import { accidentalQuadraticLesson } from './lessons/the-accidental-quadratic';
import { amortizedLedgerLesson } from './lessons/the-amortized-ledger';
import { recursionAtelierLesson } from './lessons/the-recursion-atelier';
import { halvingVeinLesson } from './lessons/the-halving-vein';
import { countingTerritoryLesson } from './lessons/the-counting-territory';
import { pointerWorkshopLesson } from './lessons/the-pointer-workshop';
import { grandMeasureLesson } from './lessons/the-grand-measure';

export const sortHub: Hub = {
  slug: 'sorting',
  name: 'Sorting & Big-O',
  icon: '↕️',
  tagline: {
    en: 'Count decisions, not seconds: read complexity from loop shape, pay the n log n law, and harvest ordered data forever.',
    bn: 'সেকেন্ড নয়, সিদ্ধান্ত গুনুন: লুপের আকৃতি থেকে কমপ্লেক্সিটি পড়ুন, n log n বিধান মেটান, আর চিরকাল সাজানো ডেটার ফসল কাটুন।',
  },
  about: {
    en: 'This hub teaches the one skill underneath all data structures and databases: counting work as input grows, and reading that count directly from code shape. Lesson one builds the counting discipline — the five growth families as shapes, the three grammar rules (loops add, nesting multiplies, halving divides), the accidental quadratic hiding in innocent loops, and the honest footnotes about memory and amortization. Lesson two spends the counts where they matter most: sorting as an information problem with a provable n log n lower bound, bubble and merge as two physics engines paying the same tax differently, stability and adaptivity as the properties real libraries are built on, and binary-search discipline as the harvest of ordered data. Everything runs inside the DSA Lab, where linear and binary search race on the same shelf and the bubble-vs-merge bill splits visibly as n grows. The result: you stop timing code and start reading it — “quadratic growth is a bug class” becomes a sentence you can prove.',
    bn: 'এই হাব শেখায় সেই এক দক্ষতা যা সব ডেটা-স্ট্রাকচার আর ডেটাবেসের নিচে দাঁড়িয়ে: ইনপুট বাড়ার সঙ্গে কাজ গণনা, আর সেই গণনা সরাসরি কোডের আকৃতি থেকে পড়া। প্রথম লেসন গড়ে গণনা-শৃঙ্খলা — আকৃতি হিসেবে পাঁচ বৃদ্ধি-পরিবার, তিন ব্যাকরণ-নিয়ম (লুপ যোগ, নেস্টিং গুণ, অর্ধেক-করা ভাগ), মাসুদ লুপের ভেতরে লুকানো দুর্ঘটনামূলক কোয়াড্রাটিক, আর মেমরি ও অ্যামর্টাইজেশনের সৎ পাদটীকা। দ্বিতীয় লেসন খরচ করে সেখানেই যেখানে সবচেয়ে মানে: তথ্য-সমস্যা হিসেবে সর্টিং — প্রমাণযোগ্য n log n নিম্নসীমাসহ, দুই পদার্থবিদ্যা-ইঞ্জিন হিসেবে বাবল আর মার্জ — একই কর ভিন্নভাবে মেটায়, স্থায়িত্ব ও অভিযোজন — যেসব বৈশিষ্ট্যে আসল লাইব্রেরি দাঁড়ানো, আর বাইনারি-সার্চ শৃঙ্খলা — সাজানো ডেটার ফসল। সবকিছু চলে DSA Lab-এর ভেতরে, যেখানে একই তাকে লিনিয়ার-বাইনারি দৌড়ায় আর n বাড়ার সঙ্গে বাবল-বনাম-মার্জ বিল দৃশ্যমানভাবে ফাঁক হয়ে যায়। ফল: আপনি কোডের সময় মাপা ছেড়ে তা পড়তে শুরু করবেন — “কোয়াড্রাটিক বৃদ্ধি একটি বাগ-শ্রেণি” হয়ে যাবে প্রমাণযোগ্য বাক্য।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The counting discipline', bn: 'ধাপ ১ — গণনা-শৃঙ্খলা' },
      items: [
        { en: 'Elementary operations: comparisons, probes, writes (lesson 1)', bn: 'মৌলিক অপারেশন: তুলনা, প্রোব, লেখা (লেসন ১)' },
        { en: 'The five families: 1, log n, n, n log n, n² as SHAPES', bn: 'পাঁচ পরিবার: 1, log n, n, n log n, n² — আকৃতি হিসেবে' },
        { en: 'Grammar: loops add, nesting multiplies, halving divides', bn: 'ব্যাকরণ: লুপ যোগ, নেস্টিং গুণ, অর্ধেক-করা ভাগ' },
        { en: 'Worst case as the promissory contract; amortized O(1)', bn: 'প্রতিশ্রুতি-চুক্তি হিসেবে ওয়ারস্ট-কেস; অ্যামর্টাইজড O(1)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Sorting as information', bn: 'ধাপ ২ — তথ্য হিসেবে সর্টিং' },
      items: [
        { en: 'Decision trees and the n·log n lower bound (lesson 2)', bn: 'সিদ্ধান্ত-ট্রি আর n·log n নিম্নসীমা (লেসন ২)' },
        { en: 'Bubble vs merge: same tax, different currencies', bn: 'বাবল বনাম মার্জ: একই কর, ভিন্ন মুদ্রা' },
        { en: 'Stability: sorting twice without losing the first sort', bn: 'স্থায়িত্ব: প্রথম সর্ট না হারিয়ে দুবার সর্ট' },
        { en: 'Adaptivity: nearly-sorted data as the cheapest input', bn: 'অভিযোজন: সবচেয়ে সস্তা ইনপুট হিসেবে প্রায়-সাজানো ডেটা' },
      ],
    },
    {
      title: { en: 'Stage 3 — Structures with promises', bn: 'ধাপ ৩ — প্রতিশ্রুতিসধ কাঠামো' },
      items: [
        { en: 'Hash tables: trading order away for O(1) doors', bn: 'হ্যাশ-টেবিল: ক্রম ত্যাগে O(1) দরজা' },
        { en: 'Stacks & queues: discipline as a data structure', bn: 'স্ট্যাক ও কিউ: ডেটা-স্ট্রাকচার হিসেবে শৃঙ্খলা' },
        { en: 'Heaps: partial order for priority in O(log n)', bn: 'হিপ: O(log n)-এ প্রায়োরিটির আংশিক ক্রম' },
        { en: 'Balanced trees: keeping halving legal forever', bn: 'ভারসাম্যযুক্ত ট্রি: অর্ধেক-করাকে চিরকাল আইনি রাখা' },
      ],
    },
    {
      title: { en: 'Stage 4 — Algorithms that think', bn: 'ধাপ ৪ — যেসব অ্যালগরিদম ভাবে' },
      items: [
        { en: 'Recursion with invariants; memoization boundaries', bn: 'ইনভ্যারিয়েন্টসহ রিকার্শন; মেমোয়াইজেশন-সীমানা' },
        { en: 'Greedy vs dynamic programming: when local best is global', bn: 'গ্রিডি বনাম DP: কখন লোকাল সেরা-ই গ্লোবাল' },
        { en: 'Graph walks: BFS/DFS as frontier discipline (same counting!)', bn: 'গ্রাফ-হাঁটাহাঁটি: সীমান্ত-শৃঙ্খলায় BFS/DFS (সেই একই গণনা!)' },
        { en: 'Toward system design: indexes, caches, queues — this hub at work', bn: 'সিস্টেম-ডিজাইনের পথে: ইনডেক্স, ক্যাশ, কিউ — কর্মরত এই হাব' },
      ],
    },
  ],
  lessons: [bigOThinkingLesson, sortingPhysicsLesson, accidentalQuadraticLesson, amortizedLedgerLesson, recursionAtelierLesson, halvingVeinLesson, countingTerritoryLesson, pointerWorkshopLesson, grandMeasureLesson],
  reference: [
    {
      group: 'Complexity reading',
      methods: [
        {
          name: 'Counting per loop',
          signature: 'for(…) { work }',
          params: { en: 'One visible loop over n costs O(n) trips; every call inside owes its own family — ask each its price.', bn: 'n-এর ওপর একটি দৃশ্যমান লুপ দেয় O(n) ভ্রমণ; ভেতরের প্রতি কল ঋণী নিজের পরিবারে — দাম জিজ্ঞেস করুন প্রতিটিকে।' },
          returns: { en: 'A per-element decision count — the analysis that survives every machine.', bn: 'উপাদানপ্রতি সিদ্ধান্ত-গণনা — প্রতি মেশিনে টিকে-যাওয়া বিশ্লেষণ।' },
          example: 'for (const x of arr) if (need.has(x)) hit++;  // O(n): has হলো O(1)',
        },
        {
          name: 'The halving vein',
          signature: 'while (lo <= hi) { mid; adjust }',
          params: { en: 'Each probe discards half the remaining region — log₂ n probes to reach one.', bn: 'প্রতি প্রোব বাদ দেয় অবশিষ্ট অঞ্চলের অর্ধেক — একটিতে পৌঁছাতে log₂ n প্রোব।' },
          returns: { en: 'O(log n): the superpower unlocked by sorted or balanced structure.', bn: 'O(log n): সাজানো বা ভারসাম্যযুক্ত কাঠামোর দেওয়া সুপারশক্তি।' },
          example: 'if (a[mid] < t) lo = mid + 1; else hi = mid - 1;',
        },
        {
          name: 'Amortized growth',
          signature: 'arr.push(x)  →  O(1) amortized',
          params: { en: 'Occasional doubling-copy prepaid by many cheap pushes; the sequence as a whole pays linear rent.', bn: 'মাঝে মাঝে দ্বিগুণ-কপির বিল মেটে অনেক সস্তা push-এর অগ্রিমে; ধারাটি মোটে লিনিয়ার ভাড়া দেয়।' },
          returns: { en: 'O(1) per push on honest average — why dynamic arrays rule the world.', bn: 'সৎ গড়ে pushপ্রতি O(1) — ডায়নামিক অ্যারে তাই পৃথিবী শাসন করে।' },
          example: 'for (const x of src) out.push(x);   // মোটে O(n), ভ্রমণপ্রতি ~O(1)',
        },
      ],
    },
    {
      group: 'Classic sorts',
      methods: [
        {
          name: 'Bubble / insertion / selection',
          signature: 'O(n²) worst · insertion is adaptive O(n) on nearly-sorted',
          params: { en: 'Bubble bubbles the max home per pass; insertion slides cards left; selection votes the min forward.', bn: 'বাবল প্রতি পাসে সর্বোচ্চকে বাড়ি ভাসিয়ে দেয়; ইনসারশন তাস বামে সরায়; সিলেকশন সর্বনিম্নকে সামনে ভোট দেয়।' },
          returns: { en: 'Correct, instructive, quadratic — the pedagogues; insertion earns its keep inside hybrids.', bn: 'সঠিক, শিক্ষামূলক, কোয়াড্রাটিক — শিক্ষকেরা; হাইব্রিডের ভেতরে ইনসারশন মজুরি পায়।' },
          example: 'if (a[j] > a[j+1]) swap(a[j], a[j+1]);',
          mistake: { en: 'Shipping bubble in any hot path — nostalgia is not a complexity class.', bn: 'উত্তপ্ত পথে বাবল শিপ করা — নস্টালজিয়া কোনো কমপ্লেক্সিটি-শ্রেণি নয়।' },
        },
        {
          name: 'Merge sort',
          signature: 'O(n log n) always · stable · O(n) extra space',
          params: { en: 'Divide to singletons, zipper back with <= taking ties from the left run — the honest frugal strategy.', bn: 'একক-পরমাণুতে ভাগ, <= দিয়ে জিপার — ড্র-তে বাম ধারা আগে — সৎ মিতব্যয়ী কৌশল।' },
          returns: { en: 'Guaranteed n log n, stable for free — the reference implementation of the law.', bn: 'গ্যারান্টিযুক্ত n log n, বিনা খরচে স্থিতিশীল — বিধানের রেফারেন্স-বাস্তবায়ন।' },
          example: 'buf[k++] = (a[i] <= a[j]) ? a[i++] : a[j++];',
        },
        {
          name: 'Quicksort / heapsort / introsort',
          signature: 'O(n log n) average · worst matters · hybrids defend',
          params: { en: 'Quick gambles on pivots (mostly wins, famously worst n², unstable); heap guarantees via partial order; introsort opens quick, retreats to heap, polishes with insertion.', bn: 'কুইক পিভটে জুয়া (অধিকাংশ জয়, কুখ্যাত ওয়ারস্ট n², অস্থিতিশীল); হিপ আংশিক-ক্রমে গ্যারান্টি; ইন্ট্রো কুইকে শুরু, হিপে উধাও, ইনসারশনে শোধন।' },
          returns: { en: 'Real speed with seatbelts — what production runtimes actually ship.', bn: 'সিটবেল্টসহ আসল গতি — প্রোডাকশন-রানটাইম আসলে যা শিপ করে।' },
          example: "sort(arr);  // introsort-বংশধর — trust the library, know the physics",
        },
      ],
    },
    {
      group: 'Search discipline',
      methods: [
        {
          name: 'Linear scan',
          signature: 'O(n) · any layout · zero preconditions',
          params: { en: 'Look at everything once — unbeatable when data is small, unsorted, or scanned once ever.', bn: 'সবকিছু একবার দেখুন — অজেয় যখন ডেটা ছোট, অসাজানো, বা জীবনে একবারই স্ক্যান হয়।' },
          returns: { en: 'The honest baseline every optimization must beat by shape, not by benchmark.', bn: 'সেই সৎ বেসলাইন যাকে প্রতি অপ্টিমাইজেশান হারাতে বাধ্য আকৃতিতে, বেঞ্চমার্কে নয়।' },
          example: 'arr.find(x => x.id === id)',
        },
        {
          name: 'Binary search',
          signature: 'O(log n) · requires sorted · two commandments',
          params: { en: 'mid moves BOTH bounds strictly past itself; loop ends when [lo, hi] empties.', bn: 'mid উভয় সীমানাকে নিজের কঠোর ওপারে ঠেলে; লুপ শেষ [lo, hi] শূন্য হলে।' },
          returns: { en: 'log₂(n+1) probes max — door-counting on any ordered asset, indexes included.', bn: 'সর্বোচ্চ log₂(n+1) প্রোব — ইনডেক্সসহ যেকোনো সাজানো সম্পদে দরজা-গণনা।' },
          example: 'let lo = 0, hi = a.length - 1;',
          mistake: { en: 'lo = mid (not mid+1) — the infinite time-loop; and (lo+hi)/2 overflow in fixed-width ints.', bn: 'lo = mid (mid+1 নয়) — অন্তহীন সময়-চক্র; আর নির্দিষ্ট-বিট int-এ (lo+hi)/2 ওভারফ্লো।' },
        },
        {
          name: 'Hash lookup',
          signature: 'O(1) average · unordered · equality only',
          params: { en: 'Set.has / Map.get trade ORDER for a door at O(1) average — the boundary conversion of lesson one.', bn: 'Set.has / Map.get ক্রমের বদলে দেয় গড়ে O(1) দরজা — প্রথম লেসনের সীমানা-রূপান্তর।' },
          returns: { en: 'Membership and dedupe in O(1) — the accidental-quadratic antidote.', bn: 'O(1)-এ সদস্যতা ও ডিডুপ — দুর্ঘটনামূলক-কোয়াড্রাটিকের প্রতিষেধক।' },
          example: 'const need = new Set(arr); need.has(id);',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'The Accidental Quadratic Hunt', bn: 'দুর্ঘটনামূলক কোয়াড্রাটিক শিকার' },
      diff: 'beginner',
      desc: {
        en: 'Plant three hidden quadratics in a toy API (includes-in-loop, string-concat-in-loop, Set-rebuilt-in-loop). A teammate finds them using only loop-shape grammar — no profiler allowed. Deliverable: the three diagnoses in family language + the two-move fix for each.',
        bn: 'খেলনা API-তে তিনটি লুকানো কোয়াড্রাটিক পুঁতুন (লুপে-includes, লুপে স্ট্রিং-যোগ, লুপে Set-পুনর্নির্মাণ)। সতীর্থ খুঁজে বের করবে কেবল লুপ-আকৃতি ব্যাকরণে — প্রোফাইলার নিষিদ্ধ। ডেলিভারেবল: পরিবার-ভাষায় তিনটি রোগনির্ণয় + প্রতিটির দুই-চাল প্রতিকার।',
      },
    },
    {
      title: { en: 'Race Report: Linear vs Binary', bn: 'দৌড়-প্রতিবেদন: লিনিয়ার বনাম বাইনারি' },
      diff: 'intermediate',
      desc: {
        en: 'Instrument both searches on real data sizes (10³…10⁶), plot measured steps beside the lab predictions, and explain every deviation with the model footnotes (cache, JIT, branch prediction). Bonus: find the n where library find() switches strategies.',
        bn: 'বাস্তব ডেটা-আকারে (10³…10⁶) দুই সার্চ যন্ত্রিত করুন, ল্যাব-ভবিষ্যদ্বাণীর পাশে মাপা ধাপ ছক করুন, প্রতি বিচ্যুতির ব্যাখ্যা দিন মডেল-পাদটীকায় (ক্যাশ, JIT, ব্রাঞ্চ-প্রেডিকশন)। বোনাস: সেই n খুঁজুন যেখানে লাইব্রেরির find() কৌশল বদলায়।',
      },
    },
    {
      title: { en: 'Adaptivity Field Study', bn: 'অভিযোজন-ক্ষেত্রগবেষণা' },
      diff: 'advanced',
      desc: {
        en: 'Build a dataset with tunable disorder (k inversions), run insertion/merge/quick at each k, and chart the crossover points. Deliverable: the chart, plus a memo recommending exactly which library sort your team should call for time-series data — with the stability argument included.',
        bn: 'নিয়ন্ত্রণযোগ্য বিশৃঙ্খলতার (k ইনভার্শন) ডেটাসেট বানান, প্রতি k-তে ইনসারশন/মার্জ/কুইক চালান, ক্রসওভার-বিন্দু লেখচিত্র করুন। ডেলিভারেবল: চিত্র, সঙ্গে স্মারক — টাইম-সিরিজ ডেটায় দলের কোন লাইব্রেরি-সর্ট ডাকা উচিত, স্থায়িত্ব-যুক্তিসহ।',
      },
    },
  ],
  bestPractices: [
    { en: 'Count decisions per element before measuring anything — seconds are weather, growth is climate.', bn: 'মাপার আগে উপাদানপ্রতি সিদ্ধান্ত গুনুন — সেকেন্ড আবহাওয়া, বৃদ্ধি জলবায়ু।' },
    { en: 'Before any nesting, point at every call inside and demand its family.', bn: 'নেস্টিংয়ের আগে ভেতরের প্রতি কলের দিকে আঙুল তুলে পরিবার জানতে চান।' },
    { en: 'Sort once per data shape; then harvest O(log n) habits for the life of the structure.', bn: 'প্রতি ডেটা-আকৃতিতে একবার সর্ট করুন; তারপর কাঠামো-জীবন কাটুন O(log n) অভ্যাসে।' },
    { en: 'Reach for Set/Map at membership boundaries — the accidental-quadratic antidote.', bn: 'সদস্যতা-সীমানায় ধরুন Set/Map — দুর্ঘটনামূলক-কোয়াড্রাটিকের প্রতিষেধক।' },
    { en: 'Library sorts only: they carry stability, adaptivity and pivot-paranoia you will not re-derive.', bn: 'কেবল লাইব্রেরি-সর্ট: তাদের সঙ্গে স্থায়িত্ব, অভিযোজন আর পিভট-সতর্কতা — যা আপনি নতুন করে নিষ্পত্তি করবেন না।' },
    { en: 'Invariant first, index arithmetic second: the shrinking [lo, hi] region is the only certificate a search deserves.', bn: 'আগে ইনভ্যারিয়েন্ট, পরে সূচক-পাটিগণিত: সংকুচিত-হওয়া [lo, hi] অঞ্চলই একমাত্র সনদ যা কোনো সার্চের প্রাপ্য।' },
  ],
  interview: [
    {
      q: { en: 'Why can comparison sorts never beat n log n?', bn: 'তুলনা-সর্ট n log n-কে কেন কখনো হারাতে পারে না?' },
      a: {
        en: 'Sorting is information gathering: n! possible orderings, and each comparison answers ONE yes/no pair question — one bit. Any decision tree that must name n! leaves needs height log₂(n!) ≈ n log n − 1.44n: a law, not a habit. Escaping it means escaping the QUESTION — counting sort counts occurrences, radix reads digits; different models, different constraints, legitimate ways to pay less.',
        bn: 'সর্টিং হলো তথ্য-সংগ্রহ: n! সম্ভাব্য ক্রমাবিরোধ, আর প্রতি তুলনা উত্তর দেয় একটি হ্যাঁ/না জোড়া-প্রশ্ন — এক বিট। যে সিদ্ধান্ত-ট্রিকে n! পাতার নাম বলতেই হয় তার প্রয়োজন উচ্চতা log₂(n!) ≈ n log n − 1.44n: বিধান, অভ্যাস নয়। পালানো মানে প্রশ্ন-ই পালানো — কাউন্টিং-সর্ট গোনে উপস্থিতি, র‍্যাডিক্স পড়ে অঙ্ক; ভিন্ন মডেল, ভিন্ন সীমাবদ্ধতা — কম দেওয়ার বৈধ পথ।',
      },
    },
    {
      q: { en: 'Explain O(n) vs O(n²) with one hidden-loop example.', bn: 'একটি লুকানো-লুপ উদাহরণে O(n) বনাম O(n²) ব্যাখ্যা করুন।' },
      a: {
        en: 'for (const id of ids) if (!list.includes(id)) miss++ — one visible loop, but includes is itself O(n) riding inside every trip: n² in an O(n) costume. The fix rides the grammar: lift a Set out of the loop (pay O(n) once at the door) and membership becomes O(1) average — the whole endpoint returns to linear. The interview point: complexity lives in the CALL GRAPH, not the visible loop count.',
        bn: 'for (const id of ids) if (!list.includes(id)) miss++ — একটি দৃশ্যমান লুপ, অথচ includes নিজেই O(n), সওয়ার হয় প্রতি ভ্রমণে: O(n) পোশাকে n²। প্রতিকার চলে ব্যাকরণের পথে: লুপের বাইরে একটি Set তুলুন (দরজায় একবার O(n)), সদস্যতা হয়ে যায় গড়ে O(1) — পুরো এন্ডপয়েন্ট ফিরে লিনিয়ারে। ইন্টারভিউ-মূল্য: কমপ্লেক্সিটি থাকে কল-গ্রাফে, দৃশ্যমান লুপ-সংখ্যায় নয়।',
      },
    },
    {
      q: { en: 'What is stability, and when does your team care?', bn: 'স্থায়িত্ব কী, আর দলের তার প্রয়োজন কখন পড়ে?' },
      a: {
        en: 'A stable sort guarantees equal keys keep their original relative order. Teams care every time they sort compound views: sort by last name, then by date — with stability the first ordering survives inside equal groups of the second. Merge sort gets it free (zipper takes ties from the left run), naive quicksort loses it, and production sorts (Timsort descendants) advertise it explicitly.',
        bn: 'স্থিতিশীল সর্টের গ্যারান্টি: সমান চাবি রাখে আদি আপেক্ষিক ক্রম। দলের তার প্রয়োজন পড়ে প্রতি যৌগিক-ভিউ সর্টে: আগে পদবিতে, তারপর তারিখে — স্থায়িত্বে দ্বিতীয়টির সমান-দলের ভেতরে টিকে থাকে প্রথম সরণি। মার্জ তা পায় বিনা খরচে (জিপার ড্র-তে বাম ধারা নেয়), সরল কুইকসর্ট হারায়, আর প্রোডাকশন-সর্ট (Timsort-বংশধর) তা স্পষ্ট বিজ্ঞাপন করে।',
      },
    },
    {
      q: { en: 'Quick versus merge — what do you actually choose and why?', bn: 'কুইক বনাম মার্জ — আসলে কোনটি বাছবেন আর কেন?' },
      a: {
        en: 'Neither by hand — the library answer IS the senior answer: production sorts are hybrids. If forced to reason: merge guarantees n log n everywhere and stability, at the price of O(n) space; quicksort is in-place-ish and cache-happy but gambling on pivots with an n² cliff — which is exactly why introsort watches the gamble and retreats to heapsort. Choose by constraints: external/linked data → merge lineage; arrays with tight memory → introsort lineage; and always ask whether stability is part of your contract.',
        bn: 'নিজ হাতে কোনোটিই নয় — লাইব্রেরি উত্তর-ই প্রবীণ উত্তর: প্রোডাকশন-সর্ট হাইব্রিড। যুক্তি করতে বাধ্য হলে: মার্জ গ্যারান্টি দেয় সর্বত্র n log n ও স্থায়িত্ব, মূল্য O(n) জায়গা; কুইকসর্ট প্রায়-ইন-প্লেস ও ক্যাশ-প্রিয়, অথচ পিভট জুয়ায় n² খাদের পথ — introsort তাই জুয়া পাহারা দিয়ে হিপসর্টে পশ্চাদ্ধাবন করে। সীমাবদ্ধতা দেখে বাছুন: এক্সটার্নাল/লিংকড ডেটা → মার্জ-বংশ; টানটান মেমরির অ্যারে → ইন্ট্রোসর্ট-বংশ; আর সবসময় জিজ্ঞেস করুন স্থায়িত্ব আপনার চুক্তির অংশ কি না।',
      },
    },
  ],
  realWorld: [
    { en: 'Every database index is Stage-1 carved in B-tree: halving with fat pages, so SELECTs harvest O(log n) instead of table scans.', bn: 'প্রতি ডেটাবেস-ইনডেক্স B-tree-খোদাই করা ধাপ-১: মোটা পেজে অর্ধেক-করা, ফলে SELECT কাটে O(log n), টেবিল-স্ক্যান নয়।' },
    { en: 'Timsort (Python) and its JSC/Java descendants are Stage-2 shipped: run-hunting adaptivity with guarantees the analysis made provable.', bn: 'Timsort (Python) ও তার JSC/Java বংশধর শিপ-করা ধাপ-২: রান-শিকারি অভিযোজন — যেসব গ্যারান্টি বিশ্লেষণ-ধাপ প্রমাণযোগ্য করেছিল।' },
    { en: 'sort | uniq, LSM-tree merges, k-way merge in Kafka consumers — the zipper from lesson two is everywhere data flows in order.', bn: 'sort | uniq, LSM-tree মার্জ, Kafka কনজিউমারে k-way মার্জ — দ্বিতীয় লেসনের জিপার সর্বত্র, যেখানে ডেটা ক্রমে প্রবাহিত হয়।' },
    { en: 'Rate limiters, caches and Set-based memberships are Stage-1 at work: shape decisions made in design review, long before any benchmark exists.', bn: 'রেট-লিমিটার, ক্যাশ আর Set-ভিত্তিক সদস্যতা — কর্মরত ধাপ-১: ডিজাইন-রিভিউতেই নেওয়া আকৃতি-সিদ্ধান্ত, কোনো বেঞ্চমার্ক থাকারও অনেক আগে।' },
  ],
};
