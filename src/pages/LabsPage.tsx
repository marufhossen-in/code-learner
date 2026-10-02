import { useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { EventLoopLab } from '../components/visuals/EventLoopLab';
import { ExecutionVisualizer, EXEC_SCENARIOS } from '../components/visuals/ExecutionVisualizer';
import { Pipeline, BROWSER_PIPELINE } from '../components/visuals/Pipeline';
import { BoxModelLab } from '../components/visuals/BoxModelLab';
import { FlexboxLab } from '../components/visuals/FlexboxLab';
import { GridLab } from '../components/visuals/GridLab';
import { DomTreeLab } from '../components/visuals/DomTreeLab';
import { FormPlayground } from '../components/visuals/FormPlayground';
import { GitLab } from '../components/visuals/GitLab';
import { RenderLab } from '../components/visuals/RenderLab';
import { DockerLab } from '../components/visuals/DockerLab';
import { K8sLab } from '../components/visuals/K8sLab';
import { NetworkLab } from '../components/visuals/NetworkLab';
import { DbLab } from '../components/visuals/DbLab';
import { LbLab } from '../components/visuals/LbLab';
import { SecurityLab } from '../components/visuals/SecurityLab';
import { TypeLab } from '../components/visuals/TypeLab';
import { PyLab } from '../components/visuals/PyLab';
import { DsLab } from '../components/visuals/DsLab';
import { HtLab } from '../components/visuals/HtLab';
import { LlLab } from '../components/visuals/LlLab';
import { StkLab } from '../components/visuals/StkLab';
import { QueueLab } from '../components/visuals/QueueLab';
import { TreeLab } from '../components/visuals/TreeLab';
import { HeapLab } from '../components/visuals/HeapLab';
import { GraphLab } from '../components/visuals/GraphLab';
import { GraphAlgoLab } from '../components/visuals/GraphAlgoLab';
import { SearchLab } from '../components/visuals/SearchLab';
import { SysdLab } from '../components/visuals/SysdLab';
import { CacheLab } from '../components/visuals/CacheLab';
import { DistsysLab } from '../components/visuals/DistsysLab';
import { HttpLab } from '../components/visuals/HttpLab';
import { RestLab } from '../components/visuals/RestLab';
import { GraphqlLab } from '../components/visuals/GraphqlLab';
import { NodeLab } from '../components/visuals/NodeLab';
import { useState } from 'react';

const PLANNED: { icon: string; en: string; bn: string; den: string; dbn: string }[] = [];

export default function LabsPage() {
  const { T, ui } = useI18n();
  const { pushRecent } = useProgress();
  const [scenario, setScenario] = useState<'sum' | 'closure'>('sum');

  useEffect(() => {
    pushRecent({ path: '/labs', kind: 'lab', title: { en: 'Interactive Labs', bn: 'ইন্টারঅ্যাক্টিভ ল্যাব' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-350 space-y-10">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">🧪 {ui('nav.labs')}</h1>
        <p className="mt-1 max-w-2xl text-muted">
          {T({
            en: 'Text-only explanations are not enough. These labs let you watch the machine think — press PLAY and follow along.',
            bn: 'শুধু টেক্সটের ব্যাখ্যা যথেষ্ট নয়। এই ল্যাবে মেশিনের চিন্তা চোখে দেখুন — PLAY চাপুন আর সাথে সাথে বুঝুন।',
          })}
        </p>
      </header>

      <section id="event-loop" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">♻️ {ui('labs.eventloop')}</h2>
        <p className="mb-3 text-sm text-muted">{ui('labs.eventloop.d')}</p>
        <EventLoopLab />
      </section>

      <section id="execution" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🧠 {ui('labs.exec')}</h2>
        <p className="mb-3 text-sm text-muted">{ui('labs.exec.d')}</p>
        <div className="mb-3 flex gap-2" role="tablist" aria-label="scenario">
          {(Object.keys(EXEC_SCENARIOS) as ('sum' | 'closure')[]).map((s) => (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={scenario === s}
              onClick={() => setScenario(s)}
              className={`rounded-lg border px-3 py-1.5 font-mono text-sm transition ${
                scenario === s ? 'border-accent bg-accent/15 font-semibold' : 'border-border hover:bg-elev'
              }`}
            >
              {s === 'sum' ? 'x + y' : 'makeCounter()'}
            </button>
          ))}
        </div>
        <ExecutionVisualizer key={scenario} scenario={scenario} />
      </section>

      <section id="browser" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🌐 {ui('labs.browser')}</h2>
        <p className="mb-3 text-sm text-muted">{ui('labs.browser.d')}</p>
        <Pipeline steps={BROWSER_PIPELINE} />
      </section>

      <section id="box-model" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">📦 {T({ en: 'Box Model Lab', bn: 'বক্স মডেল ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({ en: 'Drag padding, border and margin — watch the total size change in real time.', bn: 'প্যাডিং, বর্ডার, মার্জিন টানুন — মোট মাপ লাইভ বদলাতে দেখুন।' })}
        </p>
        <BoxModelLab />
      </section>

      <section id="flexbox" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">↔️ {T({ en: 'Flexbox Lab', bn: 'ফ্লেক্সবক্স ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({ en: 'Every justify/align combination, live. Build the mental model that makes CSS predictable.', bn: 'প্রতিটি justify/align কম্বিনেশন, লাইভ। CSS-কে অনুমানযোগ্য করা মানসিক মডেলটা গড়ুন।' })}
        </p>
        <FlexboxLab />
      </section>

      <section id="grid" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">▦ {T({ en: 'Grid Lab', bn: 'গ্রিড ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({ en: 'Tracks, fr shares, spanning — the two-dimensional canvas, live.', bn: 'ট্র্যাক, fr ভাগ, স্প্যানিং — দ্বিমাত্রিক ক্যানভাস, লাইভ।' })}
        </p>
        <GridLab />
      </section>

      <section id="dom-tree" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🌳 {T({ en: 'DOM Tree Lab', bn: 'DOM ট্রি ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({ en: 'Type HTML, watch the browser build the object tree — with live node counts.', bn: 'HTML লিখুন, ব্রাউজারকে অবজেক্ট-ট্রি বানাতে দেখুন — লাইভ নোড গণনাসহ।' })}
        </p>
        <DomTreeLab />
      </section>

      <section id="forms" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">📝 {T({ en: 'Form Validation Lab', bn: 'ফর্ম ভ্যালিডেশন ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({ en: 'Native constraint validation — no JavaScript. Break it, then fix it.', bn: 'নেটিভ কনস্ট্রেইন্ট ভ্যালিডেশন — জাভাস্ক্রিপ্ট ছাড়া। ভাঙুন, তারপর ঠিক করুন।' })}
        </p>
        <FormPlayground />
      </section>

      <section id="git" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🌿 {T({ en: 'Git Visualizer', bn: 'Git ভিজ্যুয়ালাইজার' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Working Dir → Staging → Local → Remote. Run real commands, watch the commit graph grow.',
            bn: 'ওয়ার্কিং ডির → স্টেজিং → লোকাল → রিমোট। আসল কমান্ড চালান, কমিট গ্রাফ বাড়তে দেখুন।',
          })}
        </p>
        <GitLab />
      </section>

      <section id="react" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">⚛️ {T({ en: 'Re-render Lab', bn: 'রি-রেন্ডার ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Fire setState, watch the component tree burn — then shield nodes with memo and try again.',
            bn: 'setState চালান, কম্পোনেন্ট ট্রি জ্বলতে দেখুন — তারপর memo দিয়ে নোড ঢেকে আবার চেষ্টা করুন।',
          })}
        </p>
        <RenderLab />
      </section>

      <section id="docker" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🐳 {T({ en: 'Docker Visualizer', bn: 'Docker ভিজ্যুয়ালাইজার' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Text → Image → Container. Watch the build cache work and the layer stack form.',
            bn: 'টেক্সট → ইমেজ → কন্টেইনার। বিল্ড ক্যাশ কাজ করতে ও লেয়ার স্তূপ হতে দেখুন।',
          })}
        </p>
        <DockerLab />
      </section>

      <section id="kubernetes" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">☸️ {T({ en: 'Kubernetes Visualizer', bn: 'Kubernetes ভিজ্যুয়ালাইজার' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Desire → register → queue → verdict. Write a deployment, watch pods pend, chairs fill, a node die, and the name stay put.',
            bn: 'ইচ্ছা → রওকদারি → সারি → রায়। ডিপ্লয়মেন্ট লিখুন, পডকে Pending হতে, আসন ভরতে, নোড মরতে আর নামকে অটল থাকতে দেখুন।',
          })}
        </p>
        <K8sLab />
      </section>

      <section id="typescript" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🔷 {T({ en: 'Type Lab', bn: 'টাইপ ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'The belief ledger made visible: step code and watch type beliefs infer, split at guards, narrow in branches and bottom out on never.',
            bn: 'দৃশ্যমান বিশ্বাস-খাতা: কোড স্টেপ করে দেখুন টাইপ-বিশ্বাস অনুমানী হচ্ছে, গার্ডে ভাগ হচ্ছে, শাখায় সঙ্কুচিত হচ্ছে আর never-এ ধসছে।',
          })}
        </p>
        <TypeLab />
      </section>

      <section id="python" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🐍 {T({ en: 'Python Lab', bn: 'পাইথন ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'The sticker book: step code and watch names paste onto objects, shared lists grow, ints rebind — and the mutable default trap itself.',
            bn: 'স্টিকার-বই: কোড ধাপে ধাপে চালিয়ে দেখুন নাম অবজেক্টে লাগছে, ভাগ-করা লিস্ট বড় হচ্ছে, int নাম বদলাচ্ছে — আর মিউটেবল-ডিফল্ট ফাঁদ নিজেই।',
          })}
        </p>
        <PyLab />
      </section>

      <section id="dsa" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">↕️ {T({ en: 'DSA Lab', bn: 'DSA ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Count the work: race linear vs binary search, watch the bubble/merge bill split, and read the growth table like an invoice.',
            bn: 'কাজ গুনুন: লিনিয়ার-বাইনারি দৌড় দেখুন, বাবল/মার্জ বিল ফাঁক হতে দেখুন, আর বৃদ্ধি-ছক পড়ুন চালানের মতো।',
          })}
        </p>
        <DsLab />
      </section>

      <section id="ht" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">#️⃣ {T({ en: 'Hash Lab', bn: 'হ্যাশ ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Watch content become addresses: doors fill, chains crowd, the load factor hits the red line — and the whole table doubles and rehashes in one frame.',
            bn: 'দেখুন বিষয়বস্তু কীভাবে ঠিকানা হয়: দরজা ভরে, চেইন ভিড়ে, লোড-ফ্যাক্টর লাল-রেখা স্পর্শ করে — আর পুরো টেবিল এক ফ্রেমে দ্বিগুণ হয়ে পুনঃহ্যাশ হয়।',
          })}
        </p>
        <HtLab />
      </section>

      <section id="ll" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🔗 {T({ en: 'Linked List Lab', bn: 'লিংকড-লিস্ট ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Hands labeled head/p/prev/cur/tmp hover over boxes and arrows: walk for position, stitch inserts in law-governed order, then reverse the whole chain — the three-pointer dance, frozen per frame.',
            bn: 'বাক্স-তীরের ওপর ভাসমান হাত head/p/prev/cur/tmp: অবস্থানের জন্য হাঁটুন, আইন-ক্রমে সেলাই দিন, তারপর পুরো শিকল উল্টে দিন — তিন-আঙুলের নাচ, ফ্রেমে-জমানো।',
          })}
        </p>
        <LlLab />
      </section>

      <section id="stk" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🥞 {T({ en: 'Stack Lab', bn: 'স্ট্যাক ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Six scenes, one law: plates push and pop on a spring tray, brackets validate as IOUs, RPN arithmetic needs no grammar, call frames pile to overflow.',
            bn: 'ছয় দৃশ্য, এক বিধান: স্প্রিং-বন্দনীতে থালা পুশ-পপ হয়, বন্ধনী যাচাই হয় প্রতিশ্রুতি দিয়ে, RPN গাণিতিকে ব্যাকরণ লাগে না, কল-ফ্রেম স্তূপ হয়ে অভারফ্লো করে।',
          })}
        </p>
        <StkLab />
      </section>

      <section id="queue" className="scroll-mt-20">
        <h2 className="mb-2 text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          {T({ en: '🚶 Queue Lab', bn: '🚶 কিউ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'Four scenes on two doors: the fair line serves the longest waiter, the ring buffer wraps modulo capacity, two lazy stacks compose into a queue, and priority rewrites the selection law on purpose.',
            bn: 'দুই দরজায় চার দৃশ্য: ন্যায্য সারি পরিবেশন করে দীর্ঘতম অপেক্ষাকারীকে, রিং-বাফার ঘোরে capacity-তে ভাগশেষে, দুই অলস স্ট্যাক মিলে হয় কিউ, আর অগ্রাধিকার ইচ্ছাকৃত নির্বাচন-বিধান বদলে দেয়।',
          })}
        </p>
        <QueueLab />
      </section>

      <section id="tree" className="scroll-mt-20">
        <h2 className="mb-2 text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          {T({ en: '🌲 Tree Lab', bn: '🌲 গাছ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'Four scenes on one vow: grow the BST by comparison hops, chase a hit and an honest ∅ miss, visit in three orders (inorder prints the hidden sorted array), and spin the O(1) rotations that dissolve RR staircases and LR knees.',
            bn: 'এক শপথে চার দৃশ্য: তুলনা-লাফে BST গড়ুন, হিট ও সৎ ∅ মিস অনুসরণ করুন, তিন ক্রমে পরিদর্শন করুন (ইনঅর্ডার ছাপে লুকানো সাজানো-অ্যারে), আর ঘোরান O(1) রোটেশন যা RR সিঁড়ি ও LR হাঁটু গলিয়ে দেয়।',
          })}
        </p>
        <TreeLab />
      </section>

      <section id="heap" className="scroll-mt-20">
        <h2 className="mb-2 text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          {T({ en: '⛰️ Heap Lab', bn: '⛰️ হিপ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The complete tree living in an array, shown with its ghost: sift-up climbs, the throne serves in the queues hub’s exact priority order, heapify ambushes with O(n), and a size-3 gatekeeper answers top-3 from a nine-deep stream.',
            bn: 'অ্যারেতে-বসবাসকারী সম্পূর্ণ গাছ, তার ছায়া-সহ: ঊর্ধ্ব-ছাঁকাই ওঠে, সিংহাসন পরিবেশন করে কিউ-হাবের হুবহু অগ্রাধিকার-ক্রমে, হিপিফাই অ্যামবুশ করে O(n)-এ, আর আকার-৩ গেটকিপার নয়-গভীর ধারা থেকে top-3 উত্তর দেয়।',
          })}
        </p>
        <HeapLab />
      </section>

      <section id="graph" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🕸️ Graph Lab', bn: '🕸️ গ্রাফ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'Four walks on two worlds: BFS sweeps the six-citizen demo in waves (shortest-hop law by queue discipline), DFS plunges one corridor at a time, the three-color hunt photographs its back edge B — D — F — E — B, and Kahn’s zero-debt tray serves the curriculum DAG in the only lawful direction.',
            bn: 'দুই জগতে চার হাঁটা: BFS ছয়-নাগরিকের ডেমো ঝাড়ু দেয় তরঙ্গে (কিউ-শৃঙ্খলায় স্বল্পতম-লাফ বিধান), DFS একবারে একটি করিডরে ডুব দেয়, তিন-রঙের শিকার তার ব্যাক ধার B — D — F — E — B আলোকিত করে, আর Kahn-এর শূন্য-ঋণ ট্রে পাঠক্রম-DAG পরিবেশন করে একমাত্র বৈধ দিকে।',
          })}
        </p>
        <GraphLab />
      </section>

      <section id="galg" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🧭 Graph Algorithms Lab', bn: '🧭 গ্রাফ-অ্যালগরিদম ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'Two welders price connection — Kruskal’s sort-and-weld behind a clan ledger, Prim’s growing wall through cheapest crossings (one refusal each: incest and staleness) — then two auditors price routes: Bellman-Ford relaxing every corridor for honest rounds on a biting world, and Floyd-Warshall renegotiating every pair through every mediator until row S reads [0, 4, 1, 5, 7].',
            bn: 'দুই ঝালাইকারী সংযোগের মূল দেয় — গোষ্ঠী-খাতার আড়ালে Kruskal-এর সাজাও-ও-ঝালাই, সস্তাতম পেরোনো দিয়ে Prim-এর বর্ধমান প্রাচীর (প্রত্যেকে একটি প্রত্যাখ্যান: সম্বন্ধ-অপরাধ আর বাসিপণ) — তারপর দুই নিরীক্ষক পথের মূল্য দেয়: Bellman-Ford কামড়ানো জগতে প্রতি করিডরকে সৎ রাউন্ডে শিথিল করে, আর Floyd-Warshall প্রতি মধ্যস্থের হাতে প্রতি জোড়া পুনঃদর করিয়ে S সারি নামায় [0, 4, 1, 5, 7]-এ।',
          })}
        </p>
        <GraphAlgoLab />
      </section>

      <section id="srch" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🔎 Search Lab', bn: '🔎 সার্চ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'Four machines, one medieval question, four vows. Linear marches seat-by-seat and exits early at 39 — ten comparisons, no vow signed. Binary halves the window 16 → 8 → 3 → 1 under the sorted vow and names the kill line on every branch. Boundary walks half-open [lo, hi) and collapses AT lo === hi — first seat ≥ 30, insert position included. Interpolation guesses by proportion on the squares strip: three compass readings to land stone-dead on 49.',
            bn: 'চার যন্ত্র, এক মধ্যযুগীয় প্রশ্ন, চার শপথ। লিনিয়ার মার্চ করে চেয়ার-ধরে-চেয়ার আর আগে থামে 39-এ — দশ তুলনা, কোনো শপথ সই ছাড়াই। বাইনারি সাজানো-শপথে জানালা অর্ধেক করে 16 → 8 → 3 → 1 আর প্রতি শাখায় মৃত্যু-লাইনের নাম বলে। সীমানা অর্ধ-উন্মুক্ত [lo, hi)-তে হেঁটে ভেঙে পড়ে lo === hi-তেই — ≥ 30 এমন প্রথম চেয়ার, সন্নিবেশ-অবস্থানসহ। ইন্টারপোলেশন বর্গ-সারিতে অনুপাতে অনুমান করে: তিন কম্পাস-পাঠে পাথরে-নিহত 49-এ।',
          })}
        </p>
        <SearchLab />
      </section>

      <section id="sysd" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🏗️ System Design Lab', bn: '🏗️ সিস্টেম-ডিজাইন ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The envelope ledger: ten million citizens become physics, one honest row at a time. Traffic walks the full ceremony — census → day-total → 86,400-second gate → ≈2,315 resting pulse → ×3 breathing halo → ×2 headroom covenant ⇒ ≈14 boxes. Storage prices five mirrored years at ≈7 disks, bandwidth lets the CDN lift 80% off a ≈556 Mbps peak down to ≈111 Mbps, and memory fits the 80/20 hot slice into one 8 GB Redis primary, twice over.',
            bn: 'খাম-খাতা: দশ মিলিয়ন নাগরিক হয়ে ওঠে পদার্থবিদ্যা, একবারে একটি সৎ সারি। ট্রাফিক হেঁটে যায় পুরো অনুষ্ঠানে — জনগণনা → দিন-মোট → ৮৬,৪০০-সেকেন্ড গেইট → ≈2,315 বিশ্রাম-নাড়ি → ×3 শ্বাস-হ্যালো → ×2 হেডরুম-চুক্তি ⇒ ≈১৪ বাক্স। স্টোরেজ মূল্য দেয় পাঁচ আয়নাকৃত বছর ≈৭ ডিস্কে, ব্যান্ডউইথে CDN তুলে নেয় ≈556 Mbps শিখরের ৮০% নামিয়ে ≈111 Mbps-এ, আর মেমরি ৮০/২০ গরম-অংশ ঢোকায় এক 8 GB Redis-প্রাইমারিতে, দ্বিগুণ জায়গায়।',
          })}
        </p>
        <SysdLab />
      </section>

      <section id="cch" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🧊 Cache Lab', bn: '🧊 ক্যাশ ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Vault Tribunal: eleven references — A B C A D E A B C D E — knock on a three-seat residence, and four eviction laws preside in turn. LRU drags the touched to the head and beheads the tail (2 hits, final vault E D C); FIFO stamps arrivals and never reads popularity — it executes A one reference before A hits (1 hit, the trace’s betrayal); LFU counts oaths and makes A immortal (E×1 D×1 A×3 seated); and the TTL undertaker sweeps graves C@5 B@6 D@8 E@9 C@11 for free and executes the living exactly once: A@10, no graves, no room. Same eleven knocks, four verdicts — the law IS the cache.',
            bn: 'তিজোরি-ট্রাইব্যুনাল: এগারো রেফারেন্স — A B C A D E A B C D E — তিন-আসনের বাসস্থানে ধক করে, আর চার বহিষ্কার-বিধান পালা করে মিম্বরে বসে। LRU স্পৃষ্টকে টেনে আনে মাথায় আর লেজের শিরশ্ছেদ করে (২ হিট, শেষ তিজোরি E D C); FIFO সিল দেয় আগমনে আর জনপ্রিয়তা পড়েই না — A-কে মৃত্যুদণ্ড দেয় হুবহু A-এর হিটের এক রেফ আগে (১ হিট, ট্রেসের বিশ্বাসঘাতকতা); LFU গোনে শপথ আর করে A-কে অমর (বসা E×1 D×1 A×3); আর TTL-কবরখেকো ঝুঁড়ে ফাঁকা করে কবর C@5 B@6 D@8 E@9 C@11 বিনামূল্যে, আর জীবিতকে মৃত্যুদণ্ড দেয় হুবহু একবার: A@10, কবর নেই, জায়গা নেই। একই এগারো ধক, চার রায় — বিধান-ই ক্যাশ।',
          })}
        </p>
        <CacheLab />
      </section>

      <section id="dsy" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🌐 DistSys Lab', bn: '🌐 ডিস্ট-সিস ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Fate-Line Choir: three siblings — Asha, Bala, Cara — walk one fixed 19-beat destiny (6 writes, 8 reads, the wall falls at i4 and i16, heals at i9 and i17), and four consistency laws preside in turn. Naive LWW accepts every knock and silently buries k1=2@7 at the heal (accepts=6, lost=1, errors=0 — the law works exactly as configured). Sloppy quorum takes a ⌑ lodger, accepted-until-delivery (hints=1, no burials, one dead courier from a lie). Strict majority refuses the minority politely at i6 and i8 — and its healing day is bookkeeping, zero duels. The single leader strands its own crown at i16; the lease expires, the succession exam moves it Bala→Cara, and i19 lights the betrayed lamp (k1=2@7 served from yesterday against the world’s 4@16). Same fate, four verdicts: count the counters before you sign the treaty.',
            bn: 'নিয়তি-রেখার সুরদল: তিন সহোদর — আশা, বলা, কারা — হাঁটে এক স্থির ১৯-ছন্দের নিয়তিতে (৬ লেখা, ৮ পাঠ, প্রাচীর পড়ে i4 আর i16-এ, নিরাময় i9 আর i17-এ), আর চার ধারাবাহিকতা-বিধান পালা করে মিম্বরে বসে। নিরীক্ষ LWW প্রতি ধক গ্রহণ করে আর নিরাময়ে নীরবে সমাহিত করে k1=2@7 (গৃহীত=6, হারানো=1, ত্রুটি=0 — বিধান কাজ করে হুবহু কনফিগার-মতো)। ঢিলা কোরাম নেয় ⌑ অতিথি, পৌঁছানো-পর্যন্ত-গৃহীত (hints=1, সমাধি নেই, মিথ্যা থেকে এক মৃত বাহক দূরে)। কঠোর সংখ্যাগরিষ্ঠ বিনীতে প্রত্যাখ্যান করে সংখ্যালঘুকে i6 আর i8-এ — আর তার নিরাময়-দিবস হিসাব-কাজ, দ্বন্দ্ব শূন্য। একক নেতার নিজের মুকুটই আটকে যায় i16-এ; লিজ শেষ হয়, উত্তরাধিকার-পরীক্ষা তা সরিয়ে দেয় বলা→কারা, আর i19 জ্বালায় বিশ্বাসঘাত-প্রদীপ (পৃথিবীর 4@16-এর বিরুদ্ধে গতকাল থেকে k1=2@7 পরিবেশিত)। একই নিয়তি, চার রায়: চুক্তি সই করার আগে গণক গুনে নিন।',
          })}
        </p>
        <DistsysLab />
      </section>

      <section id="http" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '📨 HTTP Lab', bn: '📨 HTTP ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Envelope Exchange: one fixed 12-beat conversation — two fetches, a login, a personal read, a dead 60-second lease, a permanent emigration, a form POST meeting a 302, a 401 duel and its credentialed retry, the second logo knock — walked by four client laws. The absent-minded browser honors nothing and pays 122,300 origin bytes across 12 knocks (302 rewrites its POST into GET at the border, 401 surprises it into a blind retry). The validator keeps the seal but skips the lease: 2×304 win the body bytes back (69,300) yet every beat still knocks. The clerk honors both instruments and adds the conversation’s only cache hit at beat 12. The purist pays exactly the clerk’s bill but refuses the rewrite: rewrites=0. Same twelve envelopes, four verdicts — the law IS the conversation.',
            bn: 'খাম-বিনিময়: একটি স্থির ১২-ছন্দের কথোপকথন — দুটি ফেচ, একটি লগইন, একটি ব্যক্তিগত পাঠ, মৃত ৬০-সেকেন্ড-লিজ, স্থায়ী স্থানান্তর, 302-মুখোমুখি ফর্ম-POST, 401 দ্বৈরথ আর তার শংসাপত্রধারী রিট্রাই, দ্বিতীয় লোগো-ধক — চার ক্লায়েন্ট-বিধানের হাঁটা। বিস্মৃত-ব্রাউজার কিছুই মানে না আর শোধ দেয় 12 ধকে 122,300 অরিজিন-বাইট (302 তার POST-কে সীমান্তে GET-এ পুনর্লিখন করে, 401 তাকে অন্ধ-রিট্রাইতে চমকায়)। সনদ-পরীক্ষক রাখে সিল কিন্তু লিজ বাদ: 2×304 ফেরত আনে বডি-বাইট (69,300), অথচ প্রতি ছন্দেই ধক পড়ে। কেরানি মানে দুটি যন্ত্রই আর যোগ করে কথোপকথনের একমাত্র ক্যাশ-হিট ১২ ছন্দে। খাঁটিয়াল শোধ দেয় হুবহু কেরানির বিল কিন্তু প্রত্যাখ্যান করে পুনর্লিখন: rewrites=0। একই বারো খাম, চার রায় — বিধান-ই কথোপকথন।',
          })}
        </p>
        <HttpLab />
      </section>

      <section id="rest" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🗂️ REST Lab', bn: '🗂️ REST ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Endpoint Docket: one fixed 10-beat workload — list, read, create, replace, patch, delete, a blind retry, a filtered list, an expanded join — priced under four API-design laws. The messenger smuggles every verb through POST /api/do (10 verbed, 5 caches cremated, 32 KB overfetch, 1 duplicated order). The improviser improvises /getAllProducts and arms a DELETE behind GET (3 verbed, 3 status lies, 11 calls for 10 beats). The grammarian pays the design tax and closes every counter at zero; the cartographer pays double and leaves with 10 discoverable links. Same docket, four bills — the law IS the API.',
            bn: 'এন্ডপয়েন্ট-ডকেট: একটি স্থির ১০-ছন্দের কাজের-চাপ — তালিকা, পাঠ, সৃষ্টি, প্রতিস্থাপন, প্যাচ, অপসারণ, একটি অন্ধ-রিট্রাই, একটি ছাঁকা-তালিকা, একটি প্রসারিত-জয়েন — চার API-নকশা-বিধানে মূল্যায়িত। বার্তাবাহক প্রতি ক্রিয়া পাচার করে POST /api/do দিয়ে (10টি ক্রিয়ামিশ্রিত, 5টি ক্যাশ দহনকৃত, 32 KB অতি-ফেচ, 1টি দ্বৈত-অর্ডার)। উদ্ভাবক বানায় /getAllProducts আর সজ্জিত করে DELETE আড়ালে GET-এ (3টি ক্রিয়ামিশ্রিত, 3টি স্ট্যাটাস-মিথ্যা, 10 ছন্দে 11 ডাক)। ব্যাকরণবিদ নকশা-কর দিয়ে প্রতি গণক শূন্যে বন্ধ করে; মানচিত্রকার দ্বিগুণ দিয়ে নেয় 10টি আবিষ্কারযোগ্য-লিংক। একই ডকেট, চার বিল — বিধান-ই API।',
          })}
        </p>
        <RestLab />
      </section>

      <section id="gql" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '⬡ GraphQL Lab', bn: '⬡ GraphQL ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Question Docket: one fixed 8-beat workload — two question cards, a product grid, an orders list, a depth bomb (the 510-query friends cascade), a partial-failure mutation, a named operation, a rerun — priced under four query laws. The forager’s honest resolvers pay 537 DB queries behind a blind gate. The batcher’s DataLoader cremates the N+1 (23) but lets the bomb execute (8) and still pays 1,350 bytes of wire. The gatekeeper rejects the bomb at parse time (15 queries, 160 bytes); the librarian adds shelf memory (9 queries, 2 cache hits). Same docket, one endpoint — the client names the shape, the gate names the budget, the shelf names the memory.',
            bn: 'প্রশ্ন-ডকেট: একটি স্থির ৮-ছন্দের কাজের-চাপ — দুই প্রশ্ন-কার্ড, একটি প্রোডাক্ট-গ্রিড, একটি অর্ডার-তালিকা, একটি গভীরতা-বোমা (510-প্রশ্নের বন্ধুতন্ত্র-ক্যাসকেড), একটি আংশিক-ব্যর্থ-মিউটেশন, একটি নামকৃত-অপারেশন, একটি রিরান — চার কোয়েরি-বিধানে মূল্যায়িত। তৃণভোজীর সৎ রিসলভার শোধ দেয় 537টি DB-প্রশ্ন, অন্ধ-ফাটকের আড়ালে। ব্যাচকারীর DataLoader N+1 দহন করে (23) কিন্তু বোমা কার্যকর করতে দেয় (8) আর শোধ দেয় 1,350 বাইট তার-বিল। প্রহরী বোমা প্রত্যাখ্যান করে পার্স-কালে (15 প্রশ্ন, 160 বাইট); গ্রন্থাগারিক যোগ করে তাক-স্মৃতি (9 প্রশ্ন, 2 ক্যাশ-হিট)। একই ডকেট, একটি এন্ডপয়েন্ট — ক্লায়েন্ট আকৃতি বলে, ফাটক বাজেট বলে, তাক স্মৃতি বলে।',
          })}
        </p>
        <GraphqlLab />
      </section>

      <section id="node" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">
          {T({ en: '🧵 Node Lab', bn: '🧵 Node ল্যাব' })}
        </h2>
        <p className="mb-4 max-w-3xl text-sm text-muted">
          {T({
            en: 'The Loop Docket: one fixed 8-beat traffic burst — health probe, bcrypt login, 2MB orders, 400ms report, 50MB receipt, tampered order, async crash, 50-client blast — priced under four runtime disciplines. The Blocker pays 898ms of hostage loop before one async throw kills the process (51 starved, 0 rps). The Careless pockets the pool once, then hangs two sockets and swallows two truths. The Chain-Keeper walks every error home but pays the 20s burst honestly. The Streamer paces bytes and sheds load: 8ms stall, 42MB flat, 19 rps. One register, four fates.',
            bn: 'লুপ-ডকেট: একটি স্থির ৮-ছন্দের ট্রাফিক-বিস্ফোরণ — স্বাস্থ্য-পরীক্ষা, bcrypt-লগইন, 2MB অর্ডার, 400ms রিপোর্ট, 50MB রশিদ, বিকৃত-অর্ডার, অ্যাসিঙ্ক-বিপর্যয়, 50-ক্লায়েন্ট-আঘাত — চার রানটাইম-শৃঙ্খলায় মূল্যায়িত। অবরোধকারী শোধ দেয় 898ms জিম্মি-লুপ, তারপর একটি async ছোঁড়া প্রসেস মেরে ফেলে (51 অনাহারী, 0 rps)। উদাসীন একবার পুল দখল করে, তারপর দুই সকেট ঝুলায় আর দুই সত্য গিলে ফেলে। শৃঙ্খল-রক্ষী প্রতি ত্রুটিকে বাসায় হাঁটায় কিন্তু 20-সেকেন্ডের বিস্ফোরণ সৎভাবে শোধ দেয়। স্রোতধারী বাইটের গতি নির্ধারণ করে আর চাপ ঝরায়: 8ms স্থবিরতা, 42MB সমতল, 19 rps। এক রওকদারি, চার নিয়তি।',
          })}
        </p>
        <NodeLab />
      </section>

      <section id="network" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🕸️ {T({ en: 'Network Simulator', bn: 'নেটওয়ার্ক সিমুলেটর' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'One request’s full journey: Browser → DNS → TCP/TLS → CDN → LB → Server → DB.',
            bn: 'একটি রিকোয়েস্টের সম্পূর্ণ যাত্রা: ব্রাউজার → DNS → TCP/TLS → CDN → LB → সার্ভার → DB।',
          })}
        </p>
        <NetworkLab />
      </section>

      <section id="database" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🗄️ {T({ en: 'Database Lab', bn: 'ডেটাবেস ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'SQL → parse → plan → scan pages or walk a B-tree. Toggle indexes and watch the work shrink.',
            bn: 'SQL লিখুন → পার্স → প্ল্যান → পেজ স্ক্যান বা B-tree ওয়াক। ইনডেক্স টগল করে কাজ কমতে দেখুন।',
          })}
        </p>
        <DbLab />
      </section>

      <section id="loadbalancer" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">⚖️ {T({ en: 'Load Balancing Lab', bn: 'লোড ব্যালান্সিং ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Algorithms, capacity, failover: flood the pool, kill a server, watch the balancer adapt.',
            bn: 'অ্যালগরিদম, ক্যাপাসিটি, ফেইলওভার: পুলে ঢল ছাড়ুন, সার্ভার বন্ধ করুন, ব্যালান্সারের মানিয়ে নেওয়া দেখুন।',
          })}
        </p>
        <LbLab />
      </section>

      <section id="security" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-bold">🔐 {T({ en: 'Security Lab', bn: 'সিকিউরিটি ল্যাব' })}</h2>
        <p className="mb-3 text-sm text-muted">
          {T({
            en: 'Real crypto, fake secrets: forge JWTs, tamper, run the alg:none attack, and hash passwords properly.',
            bn: 'আসল ক্রিপ্টো, নকল সিক্রেট: JWT জাল করুন, ছিঁড়ুন, alg:none আক্রমণ, আর পাসওয়ার্ড সঠিকভাবে হ্যাশ করুন।',
          })}
        </p>
        <SecurityLab />
      </section>

      {/* coming soon */}
      {PLANNED.length > 0 ? (
        <section>
          <h2 className="mb-3 text-xl font-bold">🧭 {ui('labs.planned')}</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {PLANNED.map((p) => (
              <div key={p.en} className="rounded-xl border border-dashed border-border bg-surface p-4 opacity-80">
                <div className="flex items-center gap-2 font-semibold">
                  <span aria-hidden="true">{p.icon}</span> {T({ en: p.en, bn: p.bn })}
                  <span className="ml-auto rounded-full bg-elev px-2 py-0.5 text-[10px] font-bold uppercase text-muted">
                    {ui('status.planned')}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{T({ en: p.den, bn: p.dbn })}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-xl border border-ok/40 bg-ok/5 p-4 text-sm">
          🎉 <b>{T({ en: 'Every planned lab is live.', bn: 'পরিকল্পিত সব ল্যাব লাইভ।' })}</b>{' '}
          {T({
            en: '14 interactive simulators — from the event loop to JWT forgery — all running locally in your browser.',
            bn: '১৪টি ইন্টারঅ্যাক্টিভ সিমুলেটর — ইভেন্ট লুপ থেকে JWT জালিয়াতি পর্যন্ত — সব আপনার ব্রাউজারে লোকালি চলছে।',
          })}
        </div>
      )}
    </div>
  );
}
