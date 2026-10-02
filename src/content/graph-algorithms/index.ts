import type { TechHub } from '../../lib/types';
import { spanningWorldsLesson } from './lessons/spanning-worlds';
import { everyPriceEveryPairLesson } from './lessons/every-price-every-pair';
import { clanLedgerLesson } from './lessons/the-clan-ledger';
import { bellmanPatientLedgerLesson } from './lessons/bellman-and-the-patient-ledger';
import { strongholdSplitLesson } from './lessons/the-stronghold-split';
import { astarCompassLesson } from './lessons/astar-and-the-compass';
import { flowNarrowCutLesson } from './lessons/flow-and-the-narrow-cut';
import { graphAlgorithmsCapstoneLesson } from './lessons/graph-algorithms-capstone';

export const graphAlgoHub: TechHub = {
  slug: 'graph-algorithms' as never,
  name: 'Graph Algorithms',
  icon: '🧭',
  tagline: {
    en: 'The graphs hub named the world; this one prices it — connection by licensed greed, routes by patient audits.',
    bn: 'গ্রাফ-হাব জগতের নাম দিল; এটি মূল্য দেয় — লাইসেন্সকৃত লোভে সংযোগ, ধৈর্য-নিরীক্ষণে পথ।',
  },
  intro: {
    en: 'Four machines, three worlds, two licenses. Kruskal welds cheapest-first across families behind union-find’s clan ledger; Prim grows one wall through cheapest crossings with lazy stale-binning — both licensed by the cut property’s exchange proof. Bellman-Ford relaxes every corridor for V−1 honest rounds when tolls bite (the V-th round auditing negative cycles out loud); Floyd-Warshall prices every pair by mediator induction in one V³ table. The entire hub is the graphs canon’s paying customers: MSTs, honest shortest paths, and all-pairs tables.',
    bn: 'চার যন্ত্র, তিন জগৎ, দুই লাইসেন্স। Kruskal ঝালাই দেয় সস্তাতম-আগে ভিন্ন পরিবারে, ইউনিয়ন-ফাইন্ড গোষ্ঠী-খাতার পিছনে; Prim গড়ে একটি প্রাচীর সস্তাতম পেরোনো দিয়ে, অলস বাসি-বিনসহ — দুজনেই লাইসেন্সপ্রাপ্ত কাট-প্রপার্টির বিনিময়-প্রমাণে। Bellman-Ford শিথিল করে প্রতি করিডর V−1 সৎ রাউন্ড, যখন টোল কামড়ায় (V-তম রাউন্ড জোরে নিরীক্ষণ করে ঋণাত্মক চক্র); Floyd-Warshall মূল্য দেয় প্রতি জোড়া মধ্যস্থ-ইন্ডাকশনে একটি V³ টেবিলে। পুরো হাব হলো গ্রাফ-শাস্ত্রের প্রদানকারী গ্রাহক: MST, সৎ শর্টেস্ট-পাথ, আর সব-জোড়া টেবিল।',
  },
  lessons: [spanningWorldsLesson, everyPriceEveryPairLesson, clanLedgerLesson, bellmanPatientLedgerLesson, strongholdSplitLesson, astarCompassLesson, flowNarrowCutLesson, graphAlgorithmsCapstoneLesson],
  references: [
    {
      group: { en: 'The welding desk', bn: 'ঝালাই-ডেস্ক' },
      items: [
        { term: 'MST', def: { en: '|V|−1 ring-free welds, everyone wired, minimum toll. Family of answers when ties exist.', bn: '|V|−1 বলয়মুক্ত ঝালাই, সবাই ওয়্যার্ড, ন্যূনতম টোল। টাই থাকলে উত্তরের পরিবার।' } },
        { term: 'cut property', def: { en: 'Cheapest crossing of any fence belongs to some MST — proof by exchange, the greed license.', bn: 'যে-কোনো বেড়ার সস্তাতম পেরোনো থাকে কোনো-না-কোনো MST-তে — বিনিময় দিয়ে প্রমাণ, লোভের লাইসেন্স।' } },
        { term: 'Kruskal · O(|E| log |E|)', def: { en: 'Sort corridors once; weld cheapest-first across different clans; refuse incest. Sparse worlds love it.', bn: 'করিডর একবার সাজাও; ভিন্ন গোষ্ঠীতে সস্তাতম-আগে ঝালাই; সম্বন্ধ-অপরাধ ফিরিয়ে দাও। বিরল জগৎ ভালোবাসে।' } },
        { term: 'Prim · O((|V|+|E|)·log|V|)', def: { en: 'One wall from a seed, cheapest crossing annexes next; stale candidates binned at pop. Dense worlds prefer it.', bn: 'বীজ থেকে এক প্রাচীর, সস্তাতম পেরোনো সংযোজন করে পরেরটিকে; বাসি প্রার্থী পপে বিন। ঘন জগৎ পছন্দ করে।' } },
        { term: 'union-find · ~O(α(n))', def: { en: 'find climbs to the clan elder + path compression; union marries by rank. “Same family?” nearly free, forever.', bn: 'find আরোহণ গোষ্ঠীমোড়ে + পথ-সংকোচন; union বিবাহ মর্যাদা ধরে। “একই পরিবার?” প্রায় বিনামূল্যে, চিরকাল।' } },
      ],
    },
    {
      group: { en: 'The honest ledgers', bn: 'সৎ খাতাগুলো' },
      items: [
        { term: 'relaxation', def: { en: 'd[u] + w < d[v] ⇒ regrant d[v]. The one primitive both pricing machines share.', bn: 'd[u] + w < d[v] ⇒ d[v] পুনর্মঞ্জুর। একমাত্র আদিম-ক্রিয়া দুই মূল্যায়ন-যন্ত্রের ভাগ-নেওয়া।' } },
        { term: 'Bellman-Ford · O(V·E)', def: { en: 'Relax every corridor V−1 rounds; round k seals ≤k-hop prices; silent round ⇒ exit early.', bn: 'প্রতি করিডর শিথিল V−1 রাউন্ড; রাউন্ড k সিল করে ≤k-লাফ মূল্য; নীরব রাউন্ড ⇒ আগে প্রস্থান।' } },
        { term: 'the V-th audit', def: { en: 'Any residual improvement = reachable negative cycle — report poisoned citizens (and their reachable set) as unpriced, never as numbers.', bn: 'যে-কোনো অবশিষ্ট উন্নতি = পৌঁছানো-যায় ঋণাত্মক চক্র — বিষাক্ত নাগরিকদের (ও তাদের পৌঁছানো-যায়-সেট) রিপোর্ট করুন অমূল্যায়িতরূপে, সংখ্যা নয়।' } },
        { term: 'Floyd-Warshall · O(V³)', def: { en: 'Mediator k outermost: d[i][j] = min(today, through k). All pairs, negative tolls tolerated; negative diagonal = the audit.', bn: 'মধ্যস্থ k সবচেয়ে বাইরে: d[i][j] = min(আজকের, k দিয়ে)। সব জোড়া, ঋণাত্মক টোল সহ্য; ঋণাত্মক কর্ণ = নিরীক্ষণ।' } },
        { term: 'license grid', def: { en: 'tolls ≥ 0 + one source → Dijkstra · negative tolls + one source → Bellman-Ford · all pairs → Floyd · connection only → MST.', bn: 'টোল ≥ 0 + এক উৎস → Dijkstra · ঋণাত্মক টোল + এক উৎস → Bellman-Ford · সব জোড়া → Floyd · কেবল সংযোগ → MST।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'The stingy question', bn: 'কৃপণ প্রশ্নটি' }, detail: { en: 'Weighted worlds, the |V|−1 receipt law, tree-shape by accounting; why “short” receipts mean forests.', bn: 'মূল্যধার্য জগৎ, |V|−1 রশিদ-বিধান, হিসাবেই গাছ-আকৃতি; “ছোটো” রশিদ কেন ফরেস্ট বোঝায়।' } },
    { stage: 2, title: { en: 'Licensed greed', bn: 'লাইসেন্সকৃত লোভ' }, detail: { en: 'The cut property’s exchange proof; Kruskal sort-and-weld with union-find; Prim’s wall with lazy stale-binning; dense vs sparse verdicts.', bn: 'কাট-প্রপার্টির বিনিময়-প্রমাণ; ইউনিয়ন-ফাইন্ডসহ Kruskal সাজাও-ও-ঝালাই; অলস বাসি-বিনে Prim-প্রাচীর; ঘন বনাম বিরল রায়।' } },
    { stage: 3, title: { en: 'Patient prices', bn: 'ধৈর্য-মূল্য' }, detail: { en: 'The wave law’s floor dissolves under negative tolls; Bellman-Ford’s k-round induction; silent-round exit; the V-th round audit and the poisoned set.', bn: 'ঋণাত্মক টোলে তরঙ্গ-বিধানের মেঝে গলে; Bellman-Ford-এর k-রাউন্ড-ইন্ডাকশন; নীরব-রাউন্ড-প্রস্থান; V-তম রাউন্ড নিরীক্ষণ ও বিষাক্ত-সেট।' } },
    { stage: 4, title: { en: 'The democratic table', bn: 'গণতান্ত্রিক টেবিল' }, detail: { en: 'Floyd-Warshall mediator induction (k outermost forever); all-pairs in V³; the diagonal audit; choosing the ledger from the license grid.', bn: 'Floyd-Warshall মধ্যস্থ-ইন্ডাকশন (k চিরকাল বাইরে); V³-তে সব জোড়া; কর্ণ-নিরীক্ষণ; লাইসেন্স-গ্রিডে খাতা-নির্বাচন।' } },
  ],
  projects: [
    {
      title: { en: 'CampusCable: the forest reporter', bn: 'ক্যাম্পাসকেবল: ফরেস্ট-রিপোর্টার' },
      brief: { en: 'Feed a building map into Kruskal with a hand-rolled union-find (log every marry/refuse), then make one island deliberate: the receipt must read “spanning forest of k families” with populations per clan — not a total. Bonus: draw the refused-incest ledger as a ring report.', bn: 'ভবন-মানচিত্র খাবলে দিন Kruskal-এ হাতে-গড়া ইউনিয়ন-ফাইন্ডসহ (প্রতি বিবাহ/প্রত্যাখ্যান লগ করুন), তারপর একটি দ্বীপ ইচ্ছাকৃত করুন: রশিদ পড়তে হবে “k পরিবারের স্প্যানিং-ফরেস্ট”, গোষ্ঠীপ্রতি জনসংখ্যাসহ — মোট নয়। বোনাস: প্রত্যাখ্যাত-সম্বন্ধ-খাতা আঁকুন বলয়-রিপোর্টরূপে।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'WeldOff: Kruskal vs Prim, honestly timed', bn: 'ওয়েল্ডঅফ: Kruskal বনাম Prim, সৎভাবে সময়কৃত' },
      brief: { en: 'Generate weighted worlds across the sparse↔dense dial (|E| from 2|V| to |V|²/4) and race the two welders with timing per phase (sort vs throne). Verify every output against the cut property AND the |V|−1 law, then chart where the crossing happens — and publish the crossover as your hub’s resident legend.', bn: 'বিরল↔ঘন নবে ওজনধারী জগৎ উৎপন্ন করুন (|E| থেকে 2|V| থেকে |V|²/4) আর দুই ঝালাইকারীর দৌড় করান প্রতি পর্বে সময়কৃত (সাজানো বনাম সিংহাসন)। প্রতি আউটপুট যাচাই করুন কাট-প্রপার্টি আর |V|−1 বিধানে, তারপর ক্রসওভার-বিন্দু চার্ট করুন — আর প্রকাশ করুন সেটুকু আপনার হাবের আবাসিক কিংবদন্তিরূপে।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'ArbitrageLens: the audit that refuses', bn: 'আরবিট্রাজলেন্স: অস্বীকারকর্তা নিরীক্ষণ' },
      brief: { en: 'Build a currency corridor graph priced as log-rates, run one-source Bellman-Ford with the V-th audit, and answer ONLY in one of two dialects: a price table, or the poisoned ring (citizens + chain) with every reachable victim marked unpriced. Feed a toy market where the loop appears mid-day; the tool must flip dialects live and never print a short-sighted number.', bn: 'গড়ুন log-রেটে মূল্যায়িত মুদ্রা-করিডর-গ্রাফ, চালান V-তম-নিরীক্ষণসহ এক-উৎস Bellman-Ford, আর উত্তর দিন কেবল দুটোর একটি ভাষান্তরে: মূল্য-টেবিল, নয়তো বিষাক্ত বলয় (নাগরিক + শিকল), যেখানে প্রতি পৌঁছাযোগ্য শিকার চিহ্নিত অমূল্যায়িত। এমন খেলনা-বাজার খাওয়ান যেখানে লুপ দুপুরে দেখা দেয়; টুলকে জীবন্ত ভাষান্তর বদলাতে হবে আর কখনো সংকীর্ণ-দৃষ্টি সংখ্যা ছাপা যাবে না।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Guard every MST receipt with the |V|−1 law before quoting. A short weld list is a forest report; print families, not a total.', bn: 'কোটেশনের আগে প্রতি MST রশিদ রক্ষা করুন |V|−1 বিধানে। ছোটো ঝালাই-তালিকা মানে ফরেস্ট-রিপোর্ট; ছাপান পরিবার, মোট নয়।' },
    { en: 'Union-find needs BOTH tricks before it is nearly free: compression without rank still walks long roots on adversarial orders.', bn: 'ইউনিয়ন-ফাইন্ডের প্রায়-বিনামূল্যে হতে দুটোই কৌশল চাই: মর্যাদা ছাড়া কেবল সংকোচন প্রতিকূল ক্রমে লম্বা শিকড়ে হাঁটে।' },
    { en: 'Write the negative-toll answer down FIRST: any pricer licensed for them must document its poisoned-set dialect before its happy path.', bn: 'ঋণাত্মক-টোল-উত্তর লিখে ফেলুন প্রথমে: তাদের লাইসেন্সপ্রাপ্ত যেকোনো মূল্যায়ককে দলিল দিতে হবে তার বিষাক্ত-সেট-ভাষান্তর, সুখের পথের আগে।' },
    { en: 'Never let a shortest-path API return a plain number on a biting world. The return type should have three citizens: priced, unreachable, poisoned.', bn: 'কামড়ানো জগতে কখনো শর্টেস্ট-পাথ API-কে ফেরত দিতে দেবেন না সরল সংখ্যা। ফেরত-টাইপে তিন নাগরিক থাকুক: মূল্যায়িত, অনগম্য, বিষাক্ত।' },
    { en: 'Keep Floyd’s k outermost — always. Loop order there is the theorem; anything else prices pairs with not-yet-certified mediators.', bn: 'Floyd-এর k রাখুন বাইরে — সবসময়। সেখানে লুপ-ক্রম-ই উপপাদ্য; অন্য কিছু মূল্য দেয় অ-সনদপ্রাপ্ত মধ্যস্থ দিয়ে।' },
    { en: 'Route through the license grid, not habit: ≥0 tolls+one source ⇒ throne; biting tolls+one source ⇒ Bellman-Ford; all pairs ⇒ table; connection ⇒ welds.', bn: 'চলুন লাইসেন্স-গ্রিডে, অভ্যাসে নয়: ≥0 টোল+এক উৎস ⇒ সিংহাসন; কামড়ানো টোল+এক উৎস ⇒ Bellman-Ford; সব জোড়া ⇒ টেবিল; সংযোগ ⇒ ঝালাই।' },
  ],
  interview: [
    {
      q: { en: 'Kruskal or Prim — and can you PROVE either works?', bn: 'Kruskal না Prim — আর কোনোটি কাজ করে প্রমাণ করতে পারবেন?' },
      a: { en: 'Pick by world density (sparse favors the sorted haggle, dense favors the wall — array-Prim even hits O(|V|²)), then prove with the cut property: any fence’s cheapest crossing sits in some MST, by exchanging it for whatever pricier crossing an MST without it must contain. Kruskal’s fences are clan borders, Prim’s is the single wall; the proof is one exchange long for both. End by naming the anti-example: the “delete the most expensive corridor in every ring” reverse-delete twin — same license, opposite direction.', bn: 'বেছে নিন জগতের ঘনত্বে (বিরলে সাজানো-দরদামী, ঘনে প্রাচীর — অ্যারে-Prim O(|V|²)-তেও পৌঁছয়), তারপর কাট-প্রপার্টিতে প্রমাণ: যে-কোনো বেড়ার সস্তাতম পেরোনো থাকে কোনো-না-কোনো MST-তে, বিনিময় করে সেটুকুকে তুলনীয় দামি পেরোনোর সঙ্গে, যা e-বিহীন MST-কে অবশ্যই ধারণ করতে হয়। Kruskal-এর বেড়া গোষ্ঠী-সীমানা, Prim-এরটি এক প্রাচীর; দুটোর জন্যই প্রমাণ এক বিনিময়-লম্বা। শেষ করুন প্রতি-দৃষ্টান্তে: “প্রতি বলয়ে দামি-তম করিডর মুছে ফেলো” reverse-delete যমজ — একই লাইসেন্স, বিপরীত দিক।' },
    },
    {
      q: { en: 'Explain union-find’s α(n) in one breath — and why people still say “basically O(1)”.', bn: 'এক শ্বাসে ইউনিয়ন-ফাইন্ডের α(n) ব্যাখ্যা করুন — আর মানুষ কেন তাতেও “মূলত O(1)” বলে।' },
      a: { en: 'The clan ledger charges walks up to the elder, and two habits make those walks shrink forever: compression re-roots everyone passed under the elder, rank marries shorter trees under taller ones. The amortized bill becomes O(α(n)) per operation where α is inverse-Ackermann — below 5 for any n that fits in this universe’s memory — so “nearly O(1)” is not laziness, it is the universe’s own ceiling on α. The depth of an honest engineer’s answer is knowing the constant is a THEOREM about bookkeeping, not a benchmark.', bn: 'গোষ্ঠী-খাতা বিল করে মোড়-পর্যন্ত-চলায়, আর দুই অভ্যাস সেই চলা চিরকালের জন্য খাটো করে: সংকোচন পথে-পড়া সবাইকে নতুন-মূল দেয় মোড়ের নিচে, মর্যাদা খাটো গাছের বিবাহ দেয় লম্বার নিচে। অ্যামর্টাইজড বিল হয় O(α(n)) প্রতি ক্রিয়া, যেখানে α বিপরীত-অ্যাকারমান — এই মহাবিশ্বের মেমোরিতে মাপা যায় এমন যে-কোনো n-এর জন্য ৫-এর নিচে — তাই “প্রায় O(1)” অলসতা নয়, সেটা মহাবিশ্বের নিজস্ব ছাদ α-র ওপর। সৎ প্রকৌশলীর উত্তরের গভীরতা হলো জানা যে ধ্রুবকটি হিসাবরক্ষণের উপপাদ্য, বেঞ্চমার্ক নয়।' },
    },
    {
      q: { en: 'Dijkstra is failing intermittently on production. First three questions you ask?', bn: 'প্রোডাকশনে Dijkstra অনিয়মিত ব্যর্থ হচ্ছে। আপনার প্রথম তিন প্রশ্ন?' },
      a: { en: 'One: any negative toll anywhere reachable — one −3 revokes the license entirely, wave law or not. Two: what decrease-key dialect does the heap speak — in-place edits without a chair-map resurrect stale settlements; the lazy lane must compare d !== dist.get(v) at pop or it prices yesterday. Three: is the mixer honest about ∞ — unreachable citizens must surface as unreachable, not as “very large settles”. All three are the same question in costume: which license did this pipeline actually sign?', bn: 'এক: পৌঁছানো-যায় এলাকায় কোথাও ঋণাত্মক টোল আছে কি না — একটি −৩ লাইসেন্স পুরো প্রত্যাহার করে, তরঙ্গ-বিধান যাই-হোক। দুই: হিপ কোন decrease-key ভাষান্তরে কথা বলে — চেয়ার-ম্যাপ ছাড়া জায়গায়-সম্পাদনা বাসি নিষ্পত্তি পুনর্জীবিত করে; অলস লেনকে পপে d !== dist.get(v) মেলাতেই হয়, নইলে গতকালের মূল্য দেয়। তিন: মিশ্রক ∞ নিয়ে সৎ কি — অনগম্য নাগরিক দেখা দেবে অনগম্যরূপে, “খুব বড় নিষ্পত্তি”রূপে নয়। তিনটিই মূলত পোশাকবদলানো এক প্রশ্ন: এই পাইপলাইন আসলে কোন লাইসেন্সে সই করেছে?' },
    },
    {
      q: { en: 'One team ships 20,000 “optimal conversions” a day. How do you prove the optimizer is honest?', bn: 'এক দল দিনে ২০,০০০ “সর্বোত্তম রূপান্তর” শিপ করে। অপ্টিমাইজার সৎ প্রমাণ করবেন কীভাবে?' },
      a: { en: 'Demand the audit dialect in writing before looking at any numbers: what does the system emit when its corridor graph grows a negative ring? Then stress it with a synthetic arbitrage loop and measure the answer: the honest reports poison + reachable victims as unpriced; liars print plausible finite numbers; cowards crash. Finally, reconciliation: sample N conversions and check the fixpoint d[v] ≤ d[u] + w over the shipped routes. Honesty in pricing is a REPORT SHAPE, not an accuracy rate.', bn: 'যেকোনো সংখ্যা দেখার আগে লিখিত নিরীক্ষণ-ভাষান্তর দাবি করুন: করিডর-গ্রাফে ঋণাত্মক বলয় জন্মালে সিস্টেম কী নির্গত করে? তারপর সিনথেটিক আরবিট্রাজ-লুপ দিয়ে চাপ দিন আর উত্তর মাপুন: সৎ রিপোর্ট দেয় বিষ + পৌঁছাযোগ্য শিকার, অমূল্যায়িত চিহ্নে; মিথ্যাবাদীরা ছাপে বিশ্বাসযোগ্য সসীম সংখ্যা; কাপুরুষরা ভাঙে। শেষে, মিলকরণ: N রূপান্তর নমুনা করুন আর শিপকৃত পথে ফিক্সপয়েন্ট d[v] ≤ d[u] + w যাচাই করুন। মূল্যায়নে সততা হলো রিপোর্ট-আকৃতি, নির্ভুলতা-হার নয়।' },
    },
  ],
  realWorld: [
    { en: 'Physical infrastructure: fiber backbones, power grids, water lines — the original MST customer; redundancy is deliberately paid elsewhere, per ring, not per weld.', bn: 'ভৌত অবকাঠামো: ফাইবার-ব্যাকবোন, বিদ্যুৎ-গ্রিড, পানের লাইন — আদি MST গ্রাহক; রিড্যান্ডেন্সি ইচ্ছাকৃতভাবে অন্যত্র শোধ হয়, বলয় ধরে, ঝালাই ধরে নয়।' },
    { en: 'Single-linkage clustering & taxonomy: Kruskal’s family count IS the dendrogram — stop welding at k families and you have a k-cluster report.', bn: 'সিঙ্গেল-লিংকেজ ক্লাস্টারিং ও শ্রেণীবিন্যাস: Kruskal-এর পরিবার-সংখ্যা-ই ডেনড্রোগ্রাম — k পরিবারে ঝালাই থামালেই k-ক্লাস্টার রিপোর্ট।' },
    { en: 'Finance pipelines: log-rate corridor graphs with Bellman-Ford audits are the backbone of arbitrage surveillance — the poisoned set is a compliance report, not an error.', bn: 'অর্থ-পাইপলাইন: Bellman-Ford-নিরীক্ষণসহ log-রেট করিডর-গ্রাফ হলো আরবিট্রাজ-নজরদারির মেরুদণ্ড — বিষাক্ত-সেট একটি কমপ্লায়েন্স-রিপোর্ট, এরর নয়।' },
    { en: 'Timetables, logistics & GIS: all-pairs tables serve the “everyone to everywhere” question at lookup speed — computed once, priced forever.', bn: 'সময়সূচি, লজিস্টিক্স ও GIS: সব-জোড়া টেবিল পরিবেশন করে “সবাইকে সর্বত্র” প্রশ্ন টেবিল-দেখার গতিতে — একবার গণনাকৃত, চিরকাল মূল্যায়িত।' },
  ],
};
