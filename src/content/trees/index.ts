import type { TechHub } from '../../lib/types';
import { treeThinkingLesson } from './lessons/tree-thinking';
import { balancedTreesLesson } from './lessons/balanced-trees';
import { theOrderedCeremonyLesson } from './lessons/the-ordered-ceremony';
import { theRotationCourtLesson } from './lessons/the-rotation-court';
import { theSuccessorKnotLesson } from './lessons/the-successor-knot';
import { thePageFestivalLesson } from './lessons/the-page-festival';
import { theAugmentedAtlasLesson } from './lessons/the-augmented-atlas';
import { theSurveyedVerdictLesson } from './lessons/the-surveyed-verdict';
import { theConcurrentGroveLesson } from './lessons/the-concurrent-grove';

export const treeHub: TechHub = {
  slug: 'trees' as never,
  name: 'Trees',
  icon: '🌲',
  tagline: {
    en: 'The geometry of evidence: one vow, three accountants, and questions that halve the world.',
    bn: 'প্রমাণের জ্যামিতি: এক শপথ, তিন হিসাবরক্ষক, আর প্রশ্ন যা জগৎ অর্ধেক করে।',
  },
  intro: {
    en: 'Where peers end, hierarchy begins — and the BST is the structure that turned shape itself into an index. Learn the search vow (left smaller, right bigger), why cost is billed per level, the rotations that repair imbalance in O(1), and how B+ trees re-metered the same vow for disk pages to run every database you have ever touched.',
    bn: 'যেখানে সমকক্ষের শেষ, সেখানে শ্রেণিবিন্যাসের শুরু — আর BST হলো সেই কাঠামো, যা আকৃতিকেই সূচিপত্রে বদলে দিল। শিখুন অনুসন্ধান-শপথ (বামে ছোট, ডানে বড়), কেন খরচ ধরা হয় স্তরপ্রতি, O(1) রোটেশন যা অসাম্য মেরামত করে, আর কীভাবে B+ ট্রি সেই একই শপথ পুনর্বণ্টন করল ডিস্ক-পৃষ্ঠায় — আপনার স্পর্শ করা প্রতি ডেটাবেস চালানোর জন্য।',
  },
  lessons: [treeThinkingLesson, balancedTreesLesson, theOrderedCeremonyLesson, theRotationCourtLesson, theSuccessorKnotLesson, thePageFestivalLesson, theAugmentedAtlasLesson, theSurveyedVerdictLesson, theConcurrentGroveLesson],
  references: [
    {
      group: { en: 'Anatomy of the vow', bn: 'শপথের শারীরস্থান' },
      items: [
        { term: 'root / leaf / depth / height', def: { en: 'Root parents nothing; leaf children nothing. Depth counts down from root; height is the interest rate billed per walk.', bn: 'মূল কারো অভিভাবক নয়; পাতা কারো সন্তান নয়। গভীরতা মূল থেকে নিচে; উচ্চতা হলো প্রতি হাঁটায় ধরা সুদের হার।' } },
        { term: 'BST search vow', def: { en: 'At every node: left subtree all smaller, right all bigger. The shape IS the index — walking is interrogation.', bn: 'প্রতি নোডে: বাম উপ-গাছ সব ছোট, ডান সব বড়। আকৃতিই সূচিপত্র — হাঁটা হলো জিজ্ঞাসাবাদ।' } },
        { term: 'search / insert', def: { en: 'One comparison per level; insert runs the walk and plants at the first empty chair. Both O(height).', bn: 'স্তরপ্রতি একটি তুলনা; সন্নিবেশ হাঁটে আর বসায় প্রথম খালি চেয়ারে। দুটোই O(উচ্চতা)।' } },
        { term: 'delete (the knot)', def: { en: 'Two-children case borrows the inorder successor — the ONE case where the vow dictates a person, not a place.', bn: 'দুই-সন্তান অবস্থায় ধার নেওয়া হয় ইনঅর্ডার সাকসেসর — একমাত্র অবস্থা, যেখানে শপথ জায়গা নয়, ব্যক্তি নির্দেশ করে।' } },
      ],
    },
    {
      group: { en: 'Three accountants, one vow', bn: 'তিন হিসাবরক্ষক, এক শপথ' },
      items: [
        { term: 'AVL tree', def: { en: '|h(l) − h(r)| ≤ 1 at every node, repaired at once. Strictest books, tightest reads (~1.44·log₂n bound).', bn: 'প্রতি নোডে |h(l) − h(r)| ≤ 1, তৎক্ষণাৎ মেরামত। কঠোরতম খাতা, শক্ততম পাঠ (~1.44·log₂n সীমা)।' } },
        { term: 'Red-black tree', def: { en: 'Color invariants (equal black-height, red never parents red) ⤳ ≤ 2·log₂n with fewer write repairs — the write-heavy pick (CFS, TreeMap).', bn: 'রঙ-অপরিবর্তনীয় (সমান কালো-উচ্চতা, লাল লালকে অভিভাবকত্ব করে না) ⤳ ≤ 2·log₂n, লেখা-মেরামত কম — লেখা-ভারীর পছন্দ (CFS, TreeMap)।' } },
        { term: 'B / B+ tree', def: { en: 'Page-sized nodes, fan-out in the hundreds, height 3–4 over billions; B+ chains all data at the leaves for disk-friendly range strolls.', bn: 'পৃষ্ঠা-আকৃতির নোড, শতাধিক ফ্যান-আউট, বিলিয়নেও উচ্চতা ৩–৪; B+ সব ডেটা রাখে শিকল-বদ্ধ পাতায়, ডিস্ক-বান্ধব পরিসর-ভ্রমণে।' } },
        { term: 'Rotation', def: { en: 'O(1) pointer swaps re-rank three nodes keeping every left/right claim: LL↻, RR↺, LR↺·↻, RL↻·↺.', bn: 'O(1) পয়েন্টার-অদল তিন নোডের পদমর্যাদা বদলে প্রতি বাম/ডান দাবি রেখে: LL↻, RR↺, LR↺·↻, RL↻·↺।' } },
      ],
    },
    {
      group: { en: 'Visiting orders', bn: 'পরিদর্শন-ক্রম' },
      items: [
        { term: 'Inorder (L·N·R)', def: { en: 'On a BST, prints sorted — the array was inside the tree all along.', bn: 'BST-তে ছাপে সাজানো — অ্যারেটা সারাক্ষণ গাছের ভেতরেই ছিল।' } },
        { term: 'Preorder (N·L·R)', def: { en: 'Root first: a rebuild recipe. Serialize the vow, restore elsewhere.', bn: 'মূল আগে: পুনর্নির্মাণ-রেসিপি। শপথ ক্রমিক করুন, অন্য জায়গায় পুনস্থাপন করুন।' } },
        { term: 'Postorder (L·R·N)', def: { en: 'Children first: cleanup-safe order — every destructor’s walk.', bn: 'সন্তান আগে: পরিষ্কার-নিরাপদ ক্রম — প্রতি ডেস্ট্রাক্টরের হাঁটা।' } },
        { term: 'Inorder successor', def: { en: 'The smallest of the right subtree: the vow’s appointed heir in the two-children delete.', bn: 'ডান উপ-গাছের ক্ষুদ্রতম: দুই-সন্তান-মোচনে শপথ-মনোনীত উত্তরাধিকারী।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'Hierarchy vocabulary', bn: 'শ্রেণিবিন্যাস-ভাষা' }, detail: { en: 'Node/edge/root/leaf/depth/height; the no-cycle law; why every node is a subtree-root (recursion’s native habitat).', bn: 'নোড/ধার/মূল/পাতা/গভীরতা/উচ্চতা; না-চক্র-বিধান; কেন প্রতি নোড উপ-গাছের মূল (রিকার্শনের স্বদেশ)।' } },
    { stage: 2, title: { en: 'The search vow', bn: 'অনুসন্ধান-শপথ' }, detail: { en: 'BST insert/search walks; cost = O(height); inorder as the hidden sorted array; the staircase adversary.', bn: 'BST সন্নিবেশ/অনুসন্ধান-হাঁটা; খরচ = O(উচ্চতা); লুকানো সাজানো-অ্যারে রূপে ইনঅর্ডার; সিঁড়ি-প্রতিপক্ষ।' } },
    { stage: 3, title: { en: 'The repair grammar', bn: 'মেরামত-ব্যাকরণ' }, detail: { en: 'Rotations LL/RR/LR/RL; AVL height fields; red-black color rules; when to pick which accountant.', bn: 'রোটেশন LL/RR/LR/RL; AVL উচ্চতা-ক্ষেত্র; রেড-ব্ল্যাক রঙ-নিয়ম; কোন হিসাবরক্ষক কখন বাছবেন।' } },
    { stage: 4, title: { en: 'Disk physics', bn: 'ডিস্ক-পদার্থবিদ্যা' }, detail: { en: 'Pages as the meter; B-tree splits; B+ leaf chains; reading EXPLAIN plans as tree-health receipts.', bn: 'মিটাররূপে পৃষ্ঠা; B-ট্রি ভাঙন; B+ পাতা-শিকল; গাছ-স্বাস্থ্যের রসিদ হিসেবে EXPLAIN-পরিকল্পনা পড়া।' } },
  ],
  projects: [
    {
      title: { en: 'WordRank: the autocompleting index', bn: 'ওয়ার্ডর‍্যাঙ্ক: স্বয়ং-সম্পূর্ণ সূচিপত্র' },
      brief: { en: 'Build a BST over 10k words keyed alphabetically, serve prefix-ranges with inorder slices. Then feed it a PRE-SORTED word list, measure the staircase, and repair with median-first insertion — watch the same tree grow two destinations.', bn: 'বর্ণানুক্রম-কীতে ১০ হাজার শব্দে BST বানান, ইনঅর্ডার-স্লাইসে উপসর্গ-পরিসর পরিবেশন করুন। তারপর খাওয়ান আগে-থেকে-সাজানো শব্দ-তালিকা, মাপুন সিঁড়িটা, মেরামত করুন মধ্যমা-আগে সন্নিবেশে — একই গাছ দুই গন্তব্যে বাড়তে দেখুন।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'SpinClinic: live AVL diagnostics', bn: 'স্পিনক্লিনিক: লাইভ AVL নির্ণয়' },
      brief: { en: 'Wrap a BST with height fields; on every insert print the first unbalanced node, name the shape (LL/RR/LR/RL), and apply the rotation(s). A dashboard of spins-per-day against arrival patterns (sorted, random, alternating) is your autopsy chart.', bn: 'BST জড়িয়ে দিন উচ্চতা-ক্ষেত্রে; প্রতি সন্নিবেশে ছাপান প্রথম ভারসাম্যহীন নোড, আকৃতির নাম দিন (LL/RR/LR/RL), প্রয়োগ করুন রোটেশন। দৈনিক-ঘূর্ণনের ড্যাশবোর্ড আগমন-প্যাটার্ন অনুযায়ী (সাজানো, এলোমেলো, পর্যায়ক্রমিক) হবে আপনার ময়নাতদন্ত-চিত্র।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'PagerDB: a toy B+ leaf chain', bn: 'পেজারডিবি: খেলনা B+ পাতা-শিকল' },
      brief: { en: 'Page capacity 8. Insert 200 sorted keys into a simulated B+ tree (split pages at the median, push medians up), then answer “keys 40–70” by walking internal separators to the leaf chain. Count fetches with a counter — that number IS the lesson.', bn: 'পৃষ্ঠা-ধারণক্ষমতা ৮। অনুকরণকৃত B+ ট্রিতে ২০০ সাজানো কী সন্নিবেশ করান (মধ্যমায় পৃষ্ঠা ভাগ, মধ্যমা উপরে ঠেলুন), তারপর “কী ৪০–৭০” উত্তর দিন অন্তর্গত-বিভাজক দিয়ে পাতা-শিকলে হেঁটে। গণনকে আনয়ন গুনুন — সেই সংখ্যাটাই পুরো লেসন।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Balanced-ness is an invariant you maintain, not a behavior you test. Sorted input is an active adversary — plan arrivals or pick the structure accordingly.', bn: 'ভারসাম্যতা রক্ষা-করা অপরিবর্তনীয়, পরীক্ষা-করা আচরণ নয়। সাজানো ইনপুট সক্রিয় প্রতিপক্ষ — আগমন পরিকল্পনা করুন নয়তো তদনুযায়ী কাঠামো বাছুন।' },
    { en: 'Recursion depth = tree height. In production walkers, cap the depth or pass an explicit pointer — the call stack is rented, not owned.', bn: 'রিকার্শন-গভীরতা = গাছের উচ্চতা। প্রোডাকশন-হাঁটকারীতে গভীরতা-সীমা রাখুন নয়তো স্পষ্ট পয়েন্টার দিন — কল-স্ট্যাক ভাড়া, মালিকানাভুক্ত নয়।' },
    { en: 'Treat index TYPE as part of a migration’s public API: hash answers points, B+ answers ranges. After every migration, diff the EXPLAIN plans.', bn: 'সূচিপত্রের ধরনকে মাইগ্রেশনের পাবলিক API-এর অংশ ধরুন: হ্যাশ উত্তর দেয় বিন্দুতে, B+ পরিসরে। প্রতি মাইগ্রেশনের পর EXPLAIN-পরিকল্পনার পার্থক্য দেখুন।' },
    { en: 'Memorize the four imbalance shapes as two singles + two doubles; anything fancier is one of them drawn wider.', bn: 'চার অসাম্য-আকৃতি মুখস্থ করুন দুই একক যোগ দুই দ্বৈত হিসেবে; তার চেয়ে আর মার্জিত যা-ই দেখুন, তা এদের কোনোটিই চওড়া করে আঁকা।' },
    { en: 'In a deletion-heavy tree, prefer the successor (smallest-of-right) uniformly — mixing successor and predecessor by mood skews your balances across the fleet.', bn: 'মোচন-ভারী গাছে সাকসেসর-এই (ডানের-ক্ষুদ্রতম) অগ্রাধিকার দিন একরূপে — মেজাজমতো সাকসেসর-প্রিডিসেসর মেশালে ফ্লিটজুড়ে ভারসাম্য তেরছা হয়।' },
    { en: 'Write one detective sentence per tree-shaped structure you adopt: which questions does this shape make fast, and which honest?', bn: 'অবলম্বন করা প্রতি গাছাকার কাঠামোর জন্য একটি গোয়েন্দা-বাক্য লিখুন: কোন প্রশ্ন এই আকৃতি করে দ্রুত, আর কোন প্রশ্ন করে সৎ?' },
  ],
  interview: [
    {
      q: { en: 'Why is BST search O(log n)? When is it not?', bn: 'BST অনুসন্ধান O(log n) কেন? কখন তা নয়?' },
      a: { en: 'Each comparison discards half the world — one level per hop, and a balanced tree has log₂n levels. It stops being true on skewed (staircase) trees from unordered-friendly arrivals like sorted input: height becomes n and search pays linearly while still renting pointer memory.', bn: 'প্রতি তুলনায় জগৎ অর্ধেক বাদ — প্রতি লাফে এক স্তর, আর ভারসাম্যপূর্ণ গাছের স্তর log₂n। তেরছা (সিঁড়ি) গাছে আর সত্য থাকে না, যেমন সাজানো ইনপুটের মতো বিন্যস্ত-বান্ধব আগমনে: উচ্চতা হয়ে যায় n আর অনুসন্ধান খায় রৈখিক — অথচ পয়েন্টার-মেমরির ভাড়া শোধ চলতেই থাকে।' },
    },
    {
      q: { en: 'AVL vs red-black, one paragraph.', bn: 'AVL বনাম রেড-ব্ল্যাক, এক অনুচ্ছেদে।' },
      a: { en: 'Same vow, different accountants. AVL pre-pays reads: strict |h(l)−h(r)| ≤ 1 ⇒ tighter, shallower trees but up to O(log n) rebalancing checks per write. Red-black pre-pays writes: color invariants tolerate a 2× deeper tree but repair less often — which is why write-heavy production engines (Linux CFS, TreeMap) picked red-black. Strictness is a dial, set by your workload.', bn: 'একই শপথ, ভিন্ন হিসাবরক্ষক। AVL অগ্রিম পাঠ শোধে: কঠোর |h(l)−h(r)| ≤ 1 ⇒ শক্ততর, খাটোতর গাছ কিন্তু লেখাপ্রতি O(log n) পর্যন্ত পুনঃভারসাম্য-পরীক্ষা। রেড-ব্ল্যাক অগ্রিম লেখা শোধে: রঙ-অপরিবর্তনীয় সহ্য করে ২× গভীরতর গাছ কিন্তু কম মেরামত করে — এইজন্যই লেখা-ভারী প্রোডাকশন ইঞ্জিন (লিনাক্স CFS, TreeMap) রেড-ব্ল্যাক বেছে নিয়েছে। কঠোরতা নব; নির্ধারণ করে আপনার কাজের-লোড।' },
    },
    {
      q: { en: 'Draw the rotations for LR.', bn: 'LR-এর রোটেশন আঁকুন।' },
      a: { en: 'The knee: deep chain runs left then right. First LEFT rotation at the left child straightens the knee into LL posture; then RIGHT rotation at the unbalanced node performs the standard LL repair. Two moves, three nodes re-ranked, the search vow never once touched.', bn: 'হাঁটু: গভীর চেইন যায় বামে তারপর ডানে। প্রথমে বাম-সন্তানে বাম রোটেশন হাঁটুকে সোজা করে LL-ভঙ্গিতে আনে; তারপর ভারসাম্যহীন নোডে ডান রোটেশন আরোপ করে প্রচলিত LL-মেরামত। দুই চাল, তিন নোড পুনর্পদায়িত, অনুসন্ধান-শপথ একবারও স্পর্শিত নয়।' },
    },
    {
      q: { en: 'Tree or hash table? Defend the dialect.', bn: 'গাছ না হ্যাশ-টেবিল? উপভাষার পক্ষে যুক্তি দিন।' },
      a: { en: 'Match the structure to the vouchers: exact points → hash (O(1) average, unordered); anything between/sorted/min-max → tree (O(log n) guaranteed geometry). The famous rivalry dissolves the moment you name the QUESTION — a join-date range will never be a hash question, a session lookup will never be a tree question.', bn: 'ভাউচারের সঙ্গে কাঠামো মেলান: হুবহু বিন্দু → হ্যাশ (গড়ে O(1), অনুসূচিত); মাঝখান/সাজানো/ন্যূনতম-সর্বোচ্চ যেকোনোটি → গাছ (গ্যারান্টেড জ্যামিতি O(log n))। বিখ্যাত প্রতিদ্বন্দ্বিতা গলে যায় প্রশ্নের নাম বলতেই — যোগদান-তারিখের পরিসর কখনো হ্যাশ-প্রশ্ন হবে না, সেশন-অনুসন্ধান কখনো গাছ-প্রশ্ন হবে না।' },
    },
  ],
  realWorld: [
    { en: 'MySQL InnoDB, SQLite, every serious store: B+ trees with leaf chains — this hub, tuned for pages.', bn: 'MySQL InnoDB, SQLite, প্রতি গম্ভীর স্টোর: পাতা-শিকলসহ B+ ট্রি — এই হাব, পৃষ্ঠার জন্য টিউনকৃত।' },
    { en: 'Linux CFS: red-black keyed by vruntime, serving “run the leftmost” per core, tens of millions of times a day.', bn: 'লিনাক্স CFS: vruntime-কীতে রেড-ব্ল্যাক, পরিবেশন করে “বামদিকতমটি চালাও” প্রতি কোরে, দিনে কোটি কোটিবার।' },
    { en: 'XFS extent maps and filesystem journals: the vow keyed by file offsets, guarding your disk page by page.', bn: 'XFS এক্সটেন্ট-ম্যাপ ও ফাইলসিস্টেম-জার্নাল: ফাইল-অফসেট-কীতে শপথ, পাহারা দিচ্ছে আপনার ডিস্ক পৃষ্ঠায় পৃষ্ঠায়।' },
    { en: 'The DOM, JSON, any config tree: recursion-native structures you traverse a thousand times a day without noticing.', bn: 'DOM, JSON, যেকোনো কনফিগ-গাছ: রিকার্শন-স্বদেশী কাঠামো, যা আপনি প্রতিদিন হাজারবার ট্রাভার্স করেন, টেরও পান না।' },
  ],
};
