import type { TechHub } from '../../lib/types';
import { graphThinkingLesson } from './lessons/graph-thinking';
import { pathsThroughWorldsLesson } from './lessons/paths-through-worlds';
import { wavefrontLawLesson } from './lessons/the-wavefront-law';
import { plungeOrderLesson } from './lessons/the-plunge-order';
import { cycleHuntLesson } from './lessons/the-cycle-hunt';
import { kahnBuildOrderLesson } from './lessons/kahn-and-the-build-order';
import { dijkstraThroneLesson } from './lessons/dijkstra-and-the-throne';
import { graphsCapstoneLesson } from './lessons/graphs-capstone';

export const graphHub: TechHub = {
  slug: 'graphs' as never,
  name: 'Graphs',
  icon: '🕸️',
  tagline: {
    en: 'The vows fall, the machines stay: citizens, corridors, a bouncer’s stamp — and two walks wearing different trays.',
    bn: 'শপথ পড়ল, যন্ত্র রইল: নাগরিক, করিডর, দুয়ারির স্ট্যাম্প — আর ভিন্ন ট্রে পরা দুই হাঁটা।',
  },
  intro: {
    en: 'Every structure so far was a graph under oath. The graphs hub drops the vows — any citizen may know any others, corridors may loop — and keeps only what still pays: the adjacency list for a sparse world, the mark-AT-THE-DOOR stamp that makes cycles survivable, BFS’s wavefront (shortest-hop law by queue discipline), DFS’s plunge, three colors for the smoking-gun cycle, Kahn’s zero-debt tray for build orders, and Dijkstra’s heap-driven pricing — the heaps hub’s throne, first seen in full production.',
    bn: 'এ পর্যন্ত প্রতিটি কাঠামো ছিল শপথবদ্ধ গ্রাফ। গ্রাফ-হাব শপথগুলো খুলে ফেলে — যে-কোনো নাগরিক অন্য যেকাউকে চানতে পারে, করিডর ঘুরে আসতে পারে — আর রেখে দেয় কেবল যা এখনো মূল্য শোধ করে: স্পার্স-জগতের অ্যাজেসেন্সি লিস্ট, দুয়ারেই-দাগ-স্ট্যাম্প যা চক্রকে করে বসবাসযোগ্য, BFS-এর তরঙ্গ-সারি (কিউ-শৃঙ্খলায় স্বল্পতম-লাফ বিধান), DFS-এর ডুব, ধোঁয়াশা-বন্দুক চক্রের তিন রঙ, নির্মাণ-ক্রমের Kahn-এর শূন্য-ঋণ ট্রে, আর Dijkstra-এর হিপ-চালিত মূল্যায়ন — হিপ-হাবের সিংহাসন, প্রথমবার পুরো প্রোডাকশনে।',
  },
  lessons: [graphThinkingLesson, pathsThroughWorldsLesson, wavefrontLawLesson, plungeOrderLesson, cycleHuntLesson, kahnBuildOrderLesson, dijkstraThroneLesson, graphsCapstoneLesson],
  references: [
    {
      group: { en: 'The world & the stamp', bn: 'জগৎ আর স্ট্যাম্প' },
      items: [
        { term: 'adjacency list', def: { en: 'Record<citizen, roster> — O(|V|+|E|) memory; the default because the world is sparse.', bn: 'Record<নাগরিক, খাতা> — O(|V|+|E|) মেমরি; ডিফল্ট, কারণ জগৎ স্পার্স।' } },
        { term: 'adjacency matrix', def: { en: '|V|² grid for O(1) “corridor?” questions — pays even when empty; tiny dense worlds only.', bn: '|V|² গ্রিড, O(1) "করিডর?" প্রশ্নে — খালি থাকলেও খরচ দেয়; কেবল ছোট ডেন্স জগৎ।' } },
        { term: 'mark-on-push', def: { en: 'Stamp when a citizen ENTERS the machine. The whole defense against cycles; move the stamp to pop-time and the walk hangs.', bn: 'নাগরিক যন্ত্রে ঢোকার সময়ই দাগ। চক্রের বিরুদ্ধে পুরো প্রতিরক্ষা; দাগ সরালে পপ-সময়ে হাঁটা হ্যাং হয়।' } },
        { term: 'discovery tree', def: { en: 'One parent edge per discovered citizen: |V|−1 edges on a connected world — arithmetic, not convention.', bn: 'আবিষ্কৃত নাগরিকপ্রতি একটি অভিভাবক-ধার: সংযুক্ত জগতে |V|−1 ধার — পাটিগণিত, রীতি নয়।' } },
        { term: 'the census law', def: { en: 'A walk names the reachable COMPONENT. |V| − |visited| is the island population; count restarts to count components.', bn: 'হাঁটা নাম দেয় পৌঁছানো-যায় উপাংশের। |V| − |visited| হলো দ্বীপ-জনসংখ্যা; উপাংশ গুনতে গুনুন রিস্টার্ট।' } },
      ],
    },
    {
      group: { en: 'The two machines', bn: 'দুই যন্ত্র' },
      items: [
        { term: 'BFS (FIFO tray)', def: { en: 'Waves of hop-count: everyone served at shortest distance on unweighted worlds. The discovery tree IS the shortest-path tree.', bn: 'লাফ-সংখ্যার তরঙ্গ: অভারহীন জগতে সবাই পরিবেশিত স্বল্পতম দূরত্বে। আবিষ্কার-গাছ-ই স্বল্পতম-পথ-গাছ।' } },
        { term: 'DFS (LIFO tray)', def: { en: 'One corridor to its death, backtrack by stack-memory. The constitution of cycle hunts, mazes and deadlocks.', bn: 'একটি করিডর তার মৃত্যু পর্যন্ত, স্ট্যাক-স্মৃতিতে ব্যাকট্র্যাক। চক্র-শিকার, গোলকধাঁধা ও ডেডলকের সংবিধান।' } },
        { term: 'three-color DFS', def: { en: 'white never met · gray on my live descent · black settled. The gray set is the plunge’s own memory.', bn: 'সাদা কখনো দেখিনি · ধূসর জীবিত অবতরণে · কালো নিষ্পত্ত। ধূসর-সেট হলো ডুবের নিজস্ব স্মৃতি।' } },
        { term: 'back edge', def: { en: 'Gray meets non-parent gray ⇒ cycle, constructively: walk the parent chain to the gray one and the ring is photographed. O(|V|+|E|).', bn: 'ধূসরের দেখা অ-অভিভাবক ধূসরে ⇒ চক্র, রচনাগতভাবে: অভিভাবক-শিকল বরাবর নামলেই বলয় আলোকচিত্র। O(|V|+|E|)।' } },
      ],
    },
    {
      group: { en: 'Trays, thrones & prices', bn: 'ট্রে, সিংহাসন ও মূল্য' },
      items: [
        { term: 'DAG', def: { en: 'Directed + acyclic — the only directed world with a legal build order; curricula, import graphs, pipelines.', bn: 'নির্দেশিত + অচক্রিক — বৈধ নির্মাণ-ক্রমযুক্ত একমাত্র নির্দেশিত জগৎ; পাঠক্রম, ইমপোর্ট-গ্রাফ, পাইপলাইন।' } },
        { term: 'topological order', def: { en: 'Every edge points strictly forward in the output. A FAMILY of answers, not a unique one — the FIFO tray picks its member deterministically.', bn: 'ফলাফলে প্রতি ধার কঠোরভাবে সামনে। উত্তরের পরিবার, অনন্য নয় — FIFO ট্রে নিয়তিবাদে সদস্য বাছে।' } },
        { term: "Kahn's algorithm", def: { en: 'In-degree ledger + zero-debt tray: serve whoever owes nothing, forgive followers. Tray starving mid-world ⇒ cycle, and the remainder IS the evidence.', bn: 'ইন-ডিগ্রি খাতা + শূন্য-ঋণ ট্রে: পরিবেশন করুন শূন্য-পাওনাদার, মওকুফ করুন অনুসারী। মাঝপথে ট্রে-মৃত্যু ⇒ চক্র, আর অবশেষই সাক্ষ্য।' } },
        { term: "Dijkstra", def: { en: 'Non-negative tolls: settle citizens in non-decreasing price via a min-heap of (price, citizen) stamps — the throne serves the frontier.', bn: 'ঋণাত্মকহীন টোল: min-হিপে (মূল্য, নাগরিক) স্ট্যাম্প রেখে নাগরিকদের নিষ্পত্ত করুন অ-হ্রাসমান মূল্যে — সিংহাসন পরিবেশন করে সীমানা।' } },
        { term: 'lazy decrease-key', def: { en: 'Cheaper finding ⇒ push a NEW stamp, skip stale ones at pop (d ≠ dist.get(u)). Never edit the heap in place — the machine forgives no manual repairs.', bn: 'সস্তা আবিষ্কার ⇒ নতুন স্ট্যাম্প পুশ, পপে পুরনোগুলো বাদ (d ≠ dist.get(u))। হিপ কখনো জায়গাতেই সম্পাদনা করবেন না — যন্ত্র হাতে-কলমে মেরামত ক্ষমা করে না।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'Citizens & corridors', bn: 'নাগরিক ও করিডর' }, detail: { en: 'Node/edge vocabulary, directed vs mutual knowing, sparse-vs-dense verdict, and why the adjacency list is the default body.', bn: 'নোড/ধার শব্দভাণ্ডার, নির্দেশিত বনাম যোজনীয় চেনা, স্পার্স-বনাম-ডেন্স রায়, আর অ্যাজেসেন্সি লিস্ট কেন ডিফল্ট দেহ।' } },
    { stage: 2, title: { en: 'The stamp & the two trays', bn: 'স্ট্যাম্প আর দুই ট্রে' }, detail: { en: 'Mark at the door; the identical loop whose single tray-line differentiates wavefront from plunge; census law and island counting.', bn: 'দুয়ারে দাগ; হুবহু এক লুপ, যার একটি ট্রে-লাইন পার্থক্য গড়ে তরঙ্গ-সারি বনাম ডুব; আদমশুমারি-বিধান ও দ্বীপ-গণনা।' } },
    { stage: 3, title: { en: 'Colors & the gun', bn: 'রঙ আর বন্দুক' }, detail: { en: 'Three-color DFS, the gray set as live memory, the back edge as constructive cycle proof — the descent chain photographed.', bn: 'তিন-রঙের DFS, জীবিত-স্মৃতিরূপে ধূসর-সেট, রচনাগত চক্র-প্রমাণরূপে ব্যাক ধার — অবতরণ-শিকল আলোকচিত্র।' } },
    { stage: 4, title: { en: 'Orders & prices', bn: 'ক্রম ও মূল্য' }, detail: { en: 'DAG and the topo family; Kahn’s debt ledger and the starvation report; Dijkstra on the heaps hub’s throne with lazy decrease-key.', bn: 'DAG আর টপো-পরিবার; Kahn-এর ঋণ-খাতা ও না-খেয়ে-মরা রিপোর্ট; হিপ-হাবের সিংহাসনে Dijkstra, সদ্যজাত decrease-key-সহ।' } },
  ],
  projects: [
    {
      title: { en: 'CrawlCensus: the island accountant', bn: 'ক্রলসেনসাস: দ্বীপ-হিসাবরক্ষক' },
      brief: { en: 'Build a toy web graph (pages as citizens, links as corridors), walk it BFS from a seed, then run the census: report |visited| vs |V|, restart walks on unstamped citizens, and print each island’s population. Add the forever test: restart count must equal the number of connected components you seeded.', bn: 'খেলনা ওয়েব-গ্রাফ গড়ুন (নাগরিকরূপে পৃষ্ঠা, করিডররূপে লিংক), BFS হাঁটুন বীজ থেকে, তারপর চালান আদমশুমারি: রিপোর্ট করুন |visited| বনাম |V|, অস্ট্যাম্প নাগরিকে হাঁটা রিস্টার্ট করুন, প্রতিটি দ্বীপের জনসংখ্যা ছাপান। চিরকালীন টেস্ট যোগ করুন: রিস্টার্ট-সংখ্যা = আপনার বপনকৃত সংযুক্ত-উপাংশ-সংখ্যা।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'SemesterSmith: the legal-order desk', bn: 'সেমিস্টারস্মিথ: বৈধ-ক্রম ডেস্ক' },
      brief: { en: 'Author a course DAG with prerequisites, emit a Kahn order, and then deliberately add a circular requirement — watch the tray starve, extract the indebted remainder, and run three-color on it to print the ring as a registrar’s notice. The deliverable: one command that outputs either a legal plan or the photographed ring.', bn: 'আগের-শর্তসহ একটি কোর্স-DAG রচনা করুন, Kahn-ক্রম বের করুন, তারপর ইচ্ছাকৃতভাবে বৃত্তীয় প্রয়োজনীয়তা যোগ করুন — দেখুন ট্রে না-খেয়ে মরে, ঋণী-অবশেষ বের করুন, তার ওপর তিন-রঙ চালিয়ে রেজিস্ট্রার-নোটিশরূপে বলয় ছাপান। ডেলিভারেবল: একটি কমান্ড, যা আউটপুট দেয় বৈধ পরিকল্পনা নয়তো আলোকচিত্র বলয়।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'RouteBench: the throne under load', bn: 'রাউটবেঞ্চ: চাপের নিচে সিংহাসন' },
      brief: { en: 'Generate weighted sparse worlds and race three pricers: BFS-with-tray (correct only when all tolls equal), Dijkstra on an array floor (O(V) scan per pop), and Dijkstra on the heaps hub’s throne with lazy decrease-key. Chart settle-time against |V| and find where the throne starts paying rent — then break Dijkstra honestly with one negative toll and print the regret.', bn: 'মূল্যধার্য স্পার্স-জগৎ উৎপন্ন করুন আর প্রতিযোগিতা করান তিন মূল্যায়কের: ট্রেসহ BFS (শুধু সমান-টোলে সঠিক), অ্যারে-মেঝেতে Dijkstra (পপপ্রতি O(V) স্ক্যান), আর হিপ-হাবের সিংহাসনে Dijkstra, সদ্যজাত decrease-key-সহ। |V|-এর বিপরীতে নিষ্পত্তি-সময়ের চার্ট আঁকুন, খুঁজে বের করুন সিংহাসন কোথা থেকে ভাড়া দিতে শুরু করে — তারপর একটি ঋণাত্মক টোল দিয়ে Dijkstra-কে সৎভাবে ভাঙুন আর অনুশোচনা ছাপান।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Stamp at the door. Mark-on-pop is the single line that turns O(|V|+|E|) walks into infinite corridor parties — audit it first in any traversal bug.', bn: 'দুয়ারেই দাগ দিন। পপের-সময়-দাগ সেই একটি লাইন, যা O(|V|+|E|) হাঁটাকে অনন্ত করিডর-উৎসব বানায় — যেকোনো ট্রাভার্সাল-বাগে সেটুকুই আগে নিরীক্ষণ করুন।' },
    { en: 'Write undirected edges twice or never. Half-written corridors manufacture ghost islands in the storage layer — the hardest census bug class.', bn: 'অমুখী ধার লিখুন দুইবার, নয়তো কখনোই না। অর্ধেক-লেখা করিডর সংরক্ষণ-স্তরে ভূতুড়ে দ্বীপ জন্ম দেয় — আদমশুমারি-বাগের কঠিনতম শ্রেণি।' },
    { en: 'Always close a traversal with the census: visited.size === |V|, else log the island count. Reachability ≠ population — silence is the failure mode.', bn: 'প্রতিটি ট্রাভার্সাল শেষ করুন আদমশুমারিতে: visited.size === |V|, নইলে দ্বীপ-সংখ্যা লগ করুন। পৌঁছানো-যায় ≠ জনসংখ্যা — ব্যর্থতা-রূপ হলো নীরবতা।' },
    { en: 'Treat a starved Kahn tray as a report, not a retry prompt: the indebted remainder contains the ring — run three colors there and read the names back.', bn: 'না-খেয়ে-মরা Kahn-ট্রেকে নিন রিপোর্টরূপে, আবার-চেষ্টার প্রম্পট নয়: ঋণী-অবশেষে রয়েছে বলয়টি — সেখানে তিন রঙ চালিয়ে নামগুলো ফেরত পড়ুন।' },
    { en: 'Keep decrease-key lazy until profiling says otherwise: push a fresh stamp per better price, let the table arbitrate at pop. In-place edits break the throne’s bookkeeping invisibly.', bn: 'decrease-key রাখুন সদ্যজাত, যতক্ষণ না প্রোফাইলিং আলাদা বলে: প্রতি সস্তা মূল্যে নতুন স্ট্যাম্প পুশ, মীমাংসা হোক পপে খাতা দিয়ে। জায়গায়-সম্পাদনা সিংহাসনের হিসাব ভাঙে অদৃশ্যে।' },
    { en: 'Verify topological orders, never trust them: a linear-time pass checking pos(u) < pos(v) for every edge is cheaper than one downstream build failure.', bn: 'টপোলজিক্যাল ক্রম যাচাই করুন, কখনো বিশ্বাস করবেন না: প্রতি ধারে pos(u) < pos(v) যাচাইয়ের রৈখিক পাস একটিমাত্র ডাউনস্ট্রিম বিল্ড-ব্যর্থতার চেয়ে সস্তা।' },
  ],
  interview: [
    {
      q: { en: 'BFS or DFS — how do you decide in one question?', bn: 'BFS না DFS — একটি প্রশ্নে স্থির করবেন কীভাবে?' },
      a: { en: 'Ask: does the answer care about DISTANCE? Shortest-hop questions (nearest server, friends within k, minimum conversions) demand the wave law, hence BFS on its FIFO tray. Shape questions (is there a path at all, cycles, mazes, exhaustibility, topo flavor) want the plunge, hence DFS on the stack — or the explicit tray of the lab. Same loop, same O(|V|+|E|): the answer picks the tray, never the mood.', bn: 'জিজ্ঞেস করুন: উত্তরটা কি দূরত্ব নিয়ে? স্বল্পতম-লাফ প্রশ্ন (নিকটতম সার্ভার, k-এর মধ্যে বন্ধু, ন্যূনতম রূপান্তর) চায় তরঙ্গ-বিধান, অর্থাৎ BFS তার FIFO ট্রেতে। আকৃতি-প্রশ্ন (পথ আছেই কি না, চক্র, গোলকধাঁধা, শেষযোগ্যতা, টপো-স্বাদ) চায় ডুব, অর্থাৎ DFS স্ট্যাকে — নয়তো ল্যাবের স্পষ্ট ট্রেতে। একই লুপ, একই O(|V|+|E|): উত্তরটাই ট্রে বাছে, মেজাজ কখনো নয়।' },
    },
    {
      q: { en: 'Detect a cycle in an undirected graph. Why say “not my parent”?', bn: 'অমুখী গ্রাফে চক্র শনাক্ত করুন। "আমার অভিভাবক নয়" কেন বলতে হয়?' },
      a: { en: 'Three-color the plunge: white→gray on open, gray→black on settle. Meeting a WHITE citizen is discovery; meeting GRAY is either the corridor you arrived by (your parent — exempt) or a back edge (proof of a ring, and the parent chain reconstructs it). Without the parent exemption, every edge in an undirected world “finds” a gray neighbor — the corridor you just walked — and accuses everything. Black citizens are settled business and cannot incriminate: three colors, and the courtroom needs no more.', bn: 'ডুবটা রাঙান তিন রঙে: খোলায় সাদা→ধূসর, নিষ্পত্তিতে ধূসর→কালো। সাদার দেখা মানে আবিষ্কার; ধূসরের দেখা হলো দুটোর একটি: আপনার আগমন-করিডর (আপনার অভিভাবক — ছাড়প্রাপ্ত) নয়তো ব্যাক ধার (বলয়ের প্রমাণ, অভিভাবক-শিকল তা পুনর্গঠন করে)। অভিভাবক-ছাড় ছাড়া অমুখী জগতের প্রতি ধারই "খুঁজে পায়" ধূসর প্রতিবেশী — আপনার এইমাত্র-হেঁটে-আসা করিডর — আর অভিযুক্ত করে সবাইকে। কালো নাগরিক নিষ্পত্ত ব্যবসা, অভিযুক্ত করতে পারে না: তিন রঙ, আর আদালতের আর কিছু লাগে না।' },
    },
    {
      q: { en: 'When does topological sort exist, and how does Kahn prove non-existence for free?', bn: 'টপোলজিক্যাল সর্ট কখন থাকে, আর Kahn কীভাবে অনস্তিত্ব প্রমাণ করে বিনামূল্যে?' },
      a: { en: 'Exactly on DAGs: acyclic ⇒ some citizen owes nothing (otherwise chase debts forever and you must revisit — a cycle), and orderable ⇒ acyclic by definition. Kahn’s tray is the constructive witness both ways: it serves n citizens iff the world is a DAG, and if it starves early, the indebted remainder collectively holds a cycle — no order exists, and the stuck state is the evidence. One algorithm, two proofs, no extra pass.', bn: 'হুবহু DAG-এ: অচক্রিক ⇒ কারো পাওনা শূন্য (নইলে ঋণ তাড়া করতে করতে কাকে না কাকে পুনর্দর্শন করতেই হবে — চক্র), আর ক্রমে-সাজানো-যায় ⇒ সংজ্ঞায়ই অচক্রিক। Kahn-এর ট্রে দুই দিকেই রচনাগত সাক্ষী: n নাগরিক পরিবেশিত হয় যদ্দ্বারা-কেবল জগৎটা DAG, আর আগেই না-খেয়ে মরলে, ঋণী-অবশেষ সম্মিলিতভাবে ধারণ করে একটি চক্র — কোনো ক্রম নেই, আর আটকে-যাওয়া অবস্থাটাই প্রমাণ। একটি অ্যালগরিদম, দুটি প্রমাণ, কোনো বাড়তি পাস নয়।' },
    },
    {
      q: { en: 'Why a heap inside Dijkstra — and why is decrease-key usually lazy?', bn: 'Dijkstra-র ভেতরে হিপ কেন — আর decrease-key প্রায়শই সদ্যজাত কেন?' },
      a: { en: 'The settle loop asks one question O(|E|) times: “who is globally cheapest RIGHT NOW?” A floor scan pays O(|V|) per answer; the heaps hub’s throne pays O(log|V|). Lazy decrease-key avoids the missing chair-map: a cheaper finding pushes a fresh (price, citizen) stamp instead of editing the heap, and pop-time honesty (d !== dist.get(u)) bins stale stamps for free. Total: O((|V|+|E|)·log|V|) with the heaps hub’s machine borrowed unmodified — the throne forgives no in-place repairs.', bn: 'নিষ্পত্তি-লুপ O(|E|) বার জিজ্ঞেস করে একটি প্রশ্ন: "এই মুহূর্তে বৈশ্বিক সস্তাতম কে?" মেঝে-স্ক্যান উত্তরপ্রতি নেয় O(|V|); হিপ-হাবের সিংহাসন নেয় O(log|V|)। সদ্যজাত decrease-key এড়িয়ে যায় অনুপস্থিত চেয়ার-ম্যাপ: সস্তা আবিষ্কার পুশ করে নতুন (মূল্য, নাগরিক) স্ট্যাম্প, হিপ সম্পাদনার বদলে, আর পপ-কালীন সততা (d !== dist.get(u)) বিনামূল্যে বিন করে পুরনো স্ট্যাম্প। মোট: O((|V|+|E|)·log|V|), হিপ-হাবের যন্ত্র অপরিবর্তিত ধার-নিয়ে — সিংহাসন জায়গায়-মেরামত ক্ষমা করে না।' },
    },
    {
      q: { en: 'Design “suggested friends within 2 hops, no duplicates, at scale.”', bn: 'নকশা করুন "২ লাফের মধ্যে প্রস্তাবিত বন্ধু, ডুপ্লিকেট ছাড়া, বৃহৎ-স্কেলে।"' },
      a: { en: 'Adjacency list (social worlds are sparse, avg degree tiny vs |V|), BFS with a wave budget: stamp at the door, serve two full waves, bin everything in waves 1–2 that is not the user and not already direct. Duplicates die by the stamp; the wave budget stops the tray by POLICY, not exhaustion; per-user cost is O(reachable-within-2-hops), which is why feeds cap hop budgets. The whole design is three house laws: list, stamp, wave.', bn: 'অ্যাজেসেন্সি লিস্ট (সামাজিক জগৎ স্পার্স, গড় ডিগ্রি |V|-এর তুলনায় ক্ষুদ্র), তরঙ্গ-বাজেটসহ BFS: দুয়ারে দাগ, দুটি পূর্ণ তরঙ্গ পরিবেশন, তরঙ্গ ১–২-এর সবাই বিনে — ব্যবহারকারী নিজে আর সরাসরি বন্ধুরা বাদে। স্ট্যাম্পে মরে ডুপ্লিকেট; তরঙ্গ-বাজেট ট্রে থামায় নীতিতে, ক্লান্তিতে নয়; ব্যবহারকারীপ্রতি খরচ O(২-লাফে-অন্তর্ভুক্ত) — এই কারণেই ফিডগুলো লাফ-বাজেট সীমায়। পুরো নকশা তিনটি গৃহ-বিধান: লিস্ট, স্ট্যাম্প, তরঙ্গ।' },
    },
  ],
  realWorld: [
    { en: 'Package registries & build tools (npm, Turbo, Bazel): DAGs by vow; the starved-tray report is every “circular dependency” error you have ever read.', bn: 'প্যাকেজ-রেজিস্ট্রি ও বিল্ড-টুল (npm, Turbo, Bazel): শপথেই DAG; না-খেয়ে-মরা-ট্রে রিপোর্ট-ই প্রতিটি "circular dependency" এরর যা আপনি এ যাবৎ পড়েছেন।' },
    { en: 'Routers, maps & game engines: Dijkstra / A* over sparse weighted worlds — the heaps hub’s throne serves the frontier at every hop.', bn: 'রাউটার, মানচিত্র ও গেম-ইঞ্জিন: স্পার্স মূল্যধার্য জগতে Dijkstra / A* — প্রতি লাফে সীমানা পরিবেশন করে হিপ-হাবের সিংহাসন।' },
    { en: 'OS deadlock detection & DB lock managers: wait-for graphs walked by three-color DFS; the gray set is the kernel’s evidence table.', bn: 'OS ডেডলক-শনাক্তকরণ ও DB লক-ম্যানেজার: wait-for গ্রাফে তিন-রঙের DFS; ধূসর-সেট হলো কার্নেলের সাক্ষ্য-তালিকা।' },
    { en: 'Spreadsheets, reactive frameworks & incremental compilers: dependency DAGs re-served in topological order per edit — Kahn under every keystroke you never noticed.', bn: 'স্প্রেডশিট, রিঅ্যাক্টিভ ফ্রেমওয়ার্ক ও ইনক্রিমেন্টাল কম্পাইলার: নির্ভরতা-DAG পুনঃপরিবেশিত টপোলজিক্যাল ক্রমে প্রতি সম্পাদনায় — আপনার না-লক্ষ্য করা প্রতি কী-চাপের নিচে Kahn।' },
  ],
};
