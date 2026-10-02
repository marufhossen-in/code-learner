import type { TechHub } from '../../lib/types';
import { heapThinkingLesson } from './lessons/heap-thinking';
import { priorityMachinesLesson } from './lessons/priority-machines';
import { theCompleteCitadelLesson } from './lessons/the-complete-citadel';
import { theSortedPyreLesson } from './lessons/the-sorted-pyre';
import { theKWayTournamentLesson } from './lessons/k-way-tournament';
import { theMirrorThronesLesson } from './lessons/the-mirror-thrones';
import { theLazyMeadowsLesson } from './lessons/the-lazy-meadows';
import { theHorizonTradesLesson } from './lessons/the-horizon-trades';
import { thePilgrimageBenchLesson } from './lessons/the-pilgrimage-bench';

export const heapHub: TechHub = {
  slug: 'heaps' as never,
  name: 'Heaps',
  icon: '⛰️',
  tagline: {
    en: 'Partial order, full speed: the weakest useful vow, flattened into an array by three shifts of arithmetic.',
    bn: 'আংশিক ক্রম, পুরো গতি: দুর্বলতম কার্যকর শপথ, তিন শিফট পাটিগণিতে অ্যারেতে চ্যাপ্টা।',
  },
  intro: {
    en: 'The queues hub left a debt: selecting the most-urgent by scanning is O(n) per serve. The heap pays it — every parent outranks its children and nothing else is promised, the complete tree needs zero pointers (parent=(i−1)>>1, children 2i+1/2i+2), the throne answers in O(1), and both repairs ride the log₂n ladder the completeness shape builds for free.',
    bn: 'কিউ-হাব একটি ঋণ রেখে গিয়েছিল: স্ক্যানে জরুরিতম-নির্বাচন মানে পরিবেশনপ্রতি O(n)। হিপ সেটা শোধ করে — প্রতি অভিভাবক সন্তানদের জেয়, বাকি কিছুর প্রতিশ্রুতি নেই, সম্পূর্ণ গাছের শূন্য পয়েন্টার লাগে (parent=(i−1)>>1, children 2i+1/2i+2), সিংহাসন উত্তর দেয় O(1)-এ, আর দুই মেরামতই চড়ে log₂n মই, যা সম্পূর্ণতার আকৃতি বিনামূল্যে গড়ে দেয়।',
  },
  lessons: [heapThinkingLesson, priorityMachinesLesson, theCompleteCitadelLesson, theSortedPyreLesson, theKWayTournamentLesson, theMirrorThronesLesson, theLazyMeadowsLesson, theHorizonTradesLesson, thePilgrimageBenchLesson],
  references: [
    {
      group: { en: 'The vow and the chassis', bn: 'শপথ আর চ্যাসি' },
      items: [
        { term: 'heap vow', def: { en: 'Parent outranks children (max: ≥, min: ≤). One global consequence: arr[0] is provably the loudest alive.', bn: 'অভিভাবক সন্তানকে জেয় (max: ≥, min: ≤)। একটি বৈশ্বিক পরিণতি: arr[0] প্রমাণিত জোরালোতম।' } },
        { term: 'complete binary tree', def: { en: 'Levels full left-to-right — balance by construction; also the shape that lets an array impersonate a tree with zero holes.', bn: 'স্তর ভরা বাম-থেকে — নির্মাণেই ভারসাম্য; সেই আকৃতিও, যা অ্যারেকে অভিনয় করতে দেয় গাছের, শূন্য ফাঁকে।' } },
        { term: 'index arithmetic', def: { en: 'parent=(i−1)>>1 · left=2i+1 · right=2i+2. The entire pointer layer, replaced by three register shifts.', bn: 'parent=(i−1)>>1 · left=2i+1 · right=2i+2। পুরো পয়েন্টার-স্তর, তিন রেজিস্টার-শিফটে বদলানো।' } },
        { term: 'peak() / arr[0]', def: { en: 'The throne read — O(1), the whole point of the machine.', bn: 'সিংহাসন-পাঠ — O(1), যন্ত্রের পুরো অভিপ্রায়।' } },
      ],
    },
    {
      group: { en: 'The two escalators', bn: 'দুই এস্কেলেটর' },
      items: [
        { term: 'sift-up (insert)', def: { en: 'Land at arr[n], climb the parent chain while louder. O(log n) worst; O(1) amortized for random arrivals.', bn: 'arr[n]-এ নামো, পিতৃ-শিকলে উঠো জোরালো থাকতে থাকতে। সর্বোচ্চ O(log n); এলোমেলো আগমনে অ্যামর্টাইজড O(1)।' } },
        { term: 'sift-down (serve)', def: { en: 'Evict throne, promote last citizen, descend via STRONGEST child (weakest would re-commit the crime). O(log n).', bn: 'সিংহাসন উচ্ছেদ, শেষ নাগরিকের উত্থান, শক্তিশালী-তম সন্তান দিয়ে নামো (দুর্বল হলে সেই অপরাধই পুনঘটত)। O(log n)।' } },
        { term: 'heapify', def: { en: 'Bottom-up build: sift down parents ⌊n/2⌋−1 → 0. O(n) — the Σ k/2ᵏ⁺¹ = 1 series caps total falls at ≈ 2n comparisons.', bn: 'নীচুপথি নির্মাণ: অভিভাবকদের ছাঁকাই ⌊n/2⌋−1 → 0। O(n) — Σ k/2ᵏ⁺¹ = 1 শ্রেণি মোট পতন সীমায় ≈ 2n তুলনায়।' } },
        { term: 'size-k top-k', def: { en: 'min-heap of k chairs + “storm the throne or drown” — interrogate a stream of any length in O(k) memory.', bn: 'k চেয়ারের min-হিপ + “সিংহাসন দখল নয়তো ডোবো” — যে-দৈর্ঘ্যের ধারা জিজ্ঞাসাবাদ করুন O(k) মেমরিতে।' } },
      ],
    },
    {
      group: { en: 'The dial-board', bn: 'নব-দালান' },
      items: [
        { term: 'd-ary heap', def: { en: 'd children per parent: fewer storeys, wider desks. d≈4 for down-dominant workloads (timers), d=2 for up-dominant.', bn: 'অভিভাবকপ্রতি d সন্তান: কম তলা, চওড়া ডেস্ক। নিম্ন-প্রধানে (টাইমার) d≈4, ঊর্ধ্ব-প্রধানে d=2।' } },
        { term: 'twin-heap median', def: { en: 'max-heap (small half) faces min-heap (big half), sizes differ ≤1 — the median is born between the thrones, O(1).', bn: 'max-হিপ (ছোট অর্ধেক) মুখোমুখি min-হিপের (বড় অর্ধেক), আকার-পার্থক্য ≤1 — মধ্যমা জন্ম নেয় সিংহাসনদ্বয়ের মাঝে, O(1)।' } },
        { term: 'stability patch', def: { en: '(priority, serial) lexicographic — equal-loudness ties break by arrival, hinge of the queues hub’s within-class fairness.', bn: '(অগ্রাধিকার, সিরিয়াল) অভিধানিক — সম-জোরালোপনার টাই ভাঙে আগমনে; কিউ-হাবের শ্রেণি-অন্তর্গত ন্যায়ের কব্জা।' } },
        { term: 'decrease-key lanes', def: { en: 'Lazy: version-tagged duplicates, stale binned at the throne. Eager: chair-map + sift-up. Dijkstra lives on the lazy lane.', bn: 'অলস: ভার্সন-ট্যাগকৃত সদৃশ, বাসি সিংহাসনে বিন। তৎপর: চেয়ার-ম্যাপ + ঊর্ধ্ব-ছাঁকাই। Dijkstra বাস করে অলস-লেনে।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'The weakest vow', bn: 'দুর্বলতম শপথ' }, detail: { en: 'Partial order vs the BST’s total claim; why arr[0] is provably the extreme; sibling anarchy as a feature.', bn: 'আংশিক ক্রম বনাম BST-এর পূর্ণ দাবি; arr[0] কেন প্রমাণিত চরম; সৌভ্রাতৃত্ব-বিশৃঙ্খলা ফিচাররূপে।' } },
    { stage: 2, title: { en: 'The array body', bn: 'অ্যারে-দেহ' }, detail: { en: 'Completeness discipline; index arithmetic over pointers; why cache lines serve whole families per fetch.', bn: 'সম্পূর্ণতা-শৃঙ্খলা; পয়েন্টারের বদলে সূচক-পাটিগণিত; কেন ক্যাশ-লাইন প্রতি আনয়নে পুরো পরিবার পরিবেশন করে।' } },
    { stage: 3, title: { en: 'Two escalators + ambush', bn: 'দুই এস্কেলেটর + অ্যামবুশ' }, detail: { en: 'sift-up / strongest-child sift-down; O(n) heapify with the Σ k/2ᵏ⁺¹ proof; size-k top-k gatekeeper.', bn: 'ঊর্ধ্ব-ছাঁকাই / শক্তিশালীতম-সন্তান নিম্ন-ছাঁকাই; Σ k/2ᵏ⁺¹ প্রমাণসহ O(n) হিপিফাই; আকার-k top-k গেটকিপার।' } },
    { stage: 4, title: { en: 'The dial-board', bn: 'নব-দালান' }, detail: { en: 'd-ary for timer worlds; twin thrones for streaming medians; (priority, serial) stability; decrease-key lanes for the graphs hub’s Dijkstra.', bn: 'টাইমার-জগতের d-ary; স্ট্রিমিং মধ্যমার যমজ সিংহাসন; (অগ্রাধিকার, সিরিয়াল) স্থিততা; গ্রাফ-হাবের Dijkstra-র জন্য decrease-key লেন।' } },
  ],
  projects: [
    {
      title: { en: 'TriAge: the serial-patched ER desk', bn: 'ট্রায়এজ: সিরিয়াল-প্যাচকৃত জরুরি ডেস্ক' },
      brief: { en: 'Simulate a stream of (severity, arrivalSerial) patients through a max-heap, then add “patient worsens” events via the lazy lane (version counter, stale-binning at the throne). The forever test: served order must descend lexicographically — severity first, serial second.', bn: '(তীব্রতা, আগমনসিরিয়াল) রোগীর ধারা চালান max-হিপে, তারপর যোগ করুন "রোগী অবনতি" ঘটনা অলস-লেনে (ভার্সন-কাউন্টার, সিংহাসনে বাসি-বিন)। চিরকালীন টেস্ট: পরিবেশিতা-ক্রম অবশ্যই অবরোহী অভিধানিক — আগে তীব্রতা, তারপর সিরিয়াল।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'TimerWheel-Lite: a d-ary experiment bench', bn: 'টাইমারহুইল-লাইট: d-ary পরীক্ষা-বেঞ্চ' },
      brief: { en: 'Implement a parametric d-ary heap (d configurable) and race d=2 vs d=4 vs d=8 on two workloads: insert-heavy and fire-heavy. Graph hops-per-operation against d, and find where the cache desk starts paying for its width.', bn: 'প্যারামেট্রিক d-ary হিপ বাস্তবায়ন করুন (d কনফিগারযোগ্য) আর প্রতিযোগিতা করান d=2 বনাম d=4 বনাম d=8 দুই কাজলোডে: সন্নিবেশ-ভারী ও ফায়ার-ভারী। ক্রিয়াপ্রতি লাফের গ্রাফ আঁকুন d-এর বিপরীতে, খুঁজে বের করুন ক্যাশ-ডেস্ক কোথায় তার প্রস্থের বিল দিতে শুরু করে।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'MedianWindow: two thrones, one answer', bn: 'মিডিয়ানউইন্ডো: দুই সিংহাসন, একটি উত্তর' },
      brief: { en: 'Twin-heap streaming median over a scrolling latency feed: render both thrones live, log rebalance hand-offs, then answer p50/p90 by assigning unequal quotas (10/90) instead of halves — the percentile dial is the same machine.', bn: 'স্ক্রলিং লেটেন্সি-ফিডে যমজ-হিপ স্ট্রিমিং মধ্যমা: দুই সিংহাসন লাইভ দেখান, ভারসাম্য-হস্তান্তর লগ করুন, তারপর উত্তর দিন p50/p90 — অর্ধেকের বদলে অসমান কোটা (১০/৯০) বরাদ্দ করে — শতকরা-নব সেই একই যন্ত্র।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Never read interior chairs as ranks. The heap vows loudness-at-crown only; ranked output is paid through serves (or another structure entirely).', bn: 'অভ্যন্তর-চেয়ার কখনো পদমর্যাদারূপে পড়বেন না। হিপ শপথ করে কেবল মুকুটে-জোরালোপনা; পদমর্যাদাহেতু আউটপুট মূল্যধার্য পরিবেশনের মাধ্যমে (নয়তো অন্য কাঠামোতেই)।' },
    { en: 'Apply the stability patch at birth: (priority, serial) lexicographic. Equal loudness is never rare — severity classes, quantized timestamps, default zeros.', bn: 'জন্মেই প্রয়োগ করুন স্থিততা-প্যাচ: (অগ্রাধিকার, সিরিয়াল) অভিধানিক। সম-জোরালোপনা কখনোই বিরল নয় — তীব্রতা-শ্রেণি, পরিমিত টাইমস্ট্যাম্প, ডিফল্ট-শূন্য।' },
    { en: 'Sift down through the strongest child, always; the weaker descent immediately re-commits the vow-crime.', bn: 'নিম্ন-ছাঁকাই করুন সর্বদা শক্তিশালী-তম সন্তানে; দুর্বল অবতরণ সঙ্গে সঙ্গেই পুনঘটায় শপথ-অপরাধ।' },
    { en: 'Choose heapify over n inserts when handed a raw collection: O(n) beats O(n log n), and the series Σ k/2ᵏ⁺¹ is why it is not a typo.', bn: 'কাঁচা সংগ্রহ হাতে পেলে n সন্নিবেশের বদলে হিপিফাই: O(n) জেতে O(n log n)-কে, আর Σ k/2ᵏ⁺¹ শ্রেণিই সাক্ষ্য যে তা টাইপো নয়।' },
    { en: 'For strengthen-in-place (decrease-key), prefer the lazy lane (duplicate + version counter) until profiling proves you need the chair-map.', bn: 'জায়গায়-জোরালোকরণে (decrease-key) অগ্রাধিকার দিন অলস-লেনে (সদৃশ + ভার্সন-কাউন্টার), যতক্ষণ না প্রোফাইলিং প্রমাণ করে চেয়ার-ম্যাপ দরকার।' },
    { en: 'Before adopting any heap variant (d-ary, Fibonacci, pairing), reconcile the cache ledger with the complexity ledger at the same table — physics picks the member.', bn: 'যেকোনো হিপ-প্রকারভেদ গ্রহণের আগে (d-ary, Fibonacci, pairing) মেলান ক্যাশ-খাতা জটিলতা-খাতার সঙ্গে একই টেবিলে — সদস্য বাছে পদার্থবিদ্যা।' },
  ],
  interview: [
    {
      q: { en: 'Why is a heap not just a sorted array?', bn: 'হিপ কেন শুধু সাজানো-অ্যারে নয়?' },
      a: { en: 'Because sortedness maintains a total order nobody asked for — insert then pays the array hub’s eviction tax O(n). The heap signs the minimum viable vow (parent outranks children), which still yields the only read priority work needs (the extreme, at arr[0], O(1)) while repairs ride the short complete-tree ladder at O(log n) both ways, in cache-friendly contiguity.', bn: 'কারণ সাজানো-ভাব রক্ষণ করে এমন পূর্ণ ক্রম, যা কেউ চায়নি — সন্নিবেশ তখন শোধ দেয় অ্যারে-হাবের উচ্ছেদ-কর O(n)। হিপ সই করে ন্যূনতম কার্যকর শপথ (অভিভাবক সন্তানকে জেয়), যা তবু ফল দেয় অগ্রাধিকার-কাজে দরকারি একমাত্র পাঠ (চরমটি, arr[0]-এ, O(1)), অথচ মেরামত চড়ে খাটো সম্পূর্ণ-গাছ-মইতে O(log n)-এ, উভয়দিকেই, ক্যাশ-বান্ধব সংলগ্নতায়।' },
    },
    {
      q: { en: 'Prove build-heap is O(n).', bn: 'প্রমাণ করুন build-heap হলো O(n)।' },
      a: { en: 'Falls are bounded by subtree height, and heights are anti-correlated with populations: n/2 nodes fall 0 (leaves), n/4 fall ≤1, n/8 fall ≤2, one throne falls log n. Sum: n·Σ k/2ᵏ⁺¹ = n·1 ≈ 2n comparisons. Tall ladders exist; nearly nobody rides them.', bn: 'পতন সীমাবদ্ধ উপ-গাছ-উচ্চতায়, আর উচ্চতা জনসংখ্যার প্রতিসংশ্লিষ্ট: n/2 নোড পড়ে 0 (পাতা), n/4 পড়ে ≤1, n/8 পড়ে ≤2, একটি সিংহাসন পড়ে log n। যোগফল: n·Σ k/2ᵏ⁺¹ = n·1 ≈ 2n তুলনা। লম্বা মই আছে; প্রায় কেউই চড়ে না।' },
    },
    {
      q: { en: 'Streaming top-k of ten billion rows, design it.', bn: 'হাজার-কোটি সারির স্ট্রিমিং top-k, নকশা করুন।' },
      a: { en: 'Size-k MIN-heap as gatekeeper: each row storms the throne (v > arr[0]) or drowns at the door in O(1); storms pay one O(log k) sift-down. Total O(n log k) time, O(k) memory — the stream enters the algorithm, never the RAM. The thermos beats the warehouse.', bn: 'আকার-k MIN-হিপ গেটকিপাররূপে: প্রতি সারি সিংহাসন দখল করে (v > arr[0]) নয়তো দরজায় ডুবে O(1)-এ; দখলদার দেয় একটি O(log k) নিম্ন-ছাঁকাই। মোট O(n log k) সময়, O(k) মেমরি — ধারা ঢোকে অ্যালগরিদমে, RAM-এ কখনো নয়। থার্মস জেতে গুদামকে।' },
    },
    {
      q: { en: 'Heap or AVL for a priority queue?', bn: 'প্রায়োরিটি-কিউর জন্য হিপ না AVL?' },
      a: { en: 'Heap. The priority question is extreme-only; the AVL pays rotation bookkeeping to maintain a total order no customer reads. Heap root is O(1) in ONE array cell (cache-adjacent to its own children), repairs without balance-inspections, and completeness gives balance by construction. Pick the vow that matches the question — the trees hub owes its geometry to range queries, the heap owes nothing to them.', bn: 'হিপ। অগ্রাধিকার-প্রশ্ন চরম-কেন্দ্রিক; AVL খরচ করে রোটেশন-হিসাবরক্ষণ, এমন পূর্ণ ক্রম রক্ষণে যা কোনো গ্রাহক পড়ে না। হিপ-মূল O(1), একটি অ্যারে-কক্ষেই (নিজের সন্তানদের সঙ্গে ক্যাশ-সংলগ্ন), ভারসাম্য-পরিদর্শন ছাড়া মেরামত করে, আর সম্পূর্ণতা দেয় ভারসাম্য নির্মাণেই। বাছুন প্রশ্নের সঙ্গে মানানসই শপথ — গাছ-হাব তার জ্যামিতির ঋণী পরিসর-প্রশ্নের কাছে, হিপ সেদিকে কোনো ঋণ রাখে না।' },
    },
  ],
  realWorld: [
    { en: 'Python heapq / Java PriorityQueue / C++ priority_queue: the binary heap as every language’s default priority contract.', bn: 'Python heapq / Java PriorityQueue / C++ priority_queue: প্রতি ভাষার ডিফল্ট অগ্রাধিকার-চুক্তিরূপে বাইনারি হিপ।' },
    { en: 'Go runtime and libuv timers: 4-ary heaps, one cache-fetched desk per sift-down level — the dial in production.', bn: 'Go রানটাইম ও libuv টাইমার: 4-ary হিপ, নিম্ন-ছাঁকাই-স্তরপ্রতি এক ক্যাশ-আনিত ডেস্ক — প্রোডাকশনে নবটি।' },
    { en: 'k-way merge in LSM-tree compaction: one citizen per sorted run, the throne is the merge cursor — the heap as tournament desk.', bn: 'LSM-ট্রি কমপ্যাকশনে k-পথ-মিলন: প্রতি সাজানো রান থেকে এক নাগরিক, সিংহাসনই মিলন-কার্সর — প্রতিযোগিতা-ডেস্করূপে হিপ।' },
    { en: 'Dijkstra / A* in every router and game engine: decrease-key (lazy lane) keeps tentative distances cheap — the graphs hub breathes through this vow.', bn: 'প্রতি রাউটার ও গেম-ইঞ্জিনে Dijkstra / A*: decrease-key (অলস-লেন) সম্ভাব্য দূরত্ব রাখে সস্তা — গ্রাফ-হাব শ্বাস নেয় এই শপথ দিয়েই।' },
  ],
};
