import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { CATEGORIES, TECHS, techsByCategory } from '../data/registry';
import { ROADMAPS } from '../data/roadmaps';
import { GLOSSARY } from '../data/glossary';
import { allLessons, getHub } from '../content';
import type { ReactNode } from 'react';

function Section({
  id,
  titleKey,
  subKey,
  children,
  action,
}: {
  id: string;
  titleKey: string;
  subKey: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  const { ui } = useI18n();
  return (
    <section id={id} className="mx-auto max-w-350 scroll-mt-20 px-1 py-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">{ui(titleKey)}</h2>
          <p className="mt-1 text-sm text-muted">{ui(subKey)}</p>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

const card = 'rounded-xl border border-border bg-surface transition hover:border-accent/60 hover:shadow-lg';

export default function Home() {
  const { T, ui, lang } = useI18n();
  const prog = useProgress();
  const heroRef = useRef<HTMLDivElement>(null);
  const lessons = allLessons();
  const js = getHub('javascript');
  const nextLesson = lessons.find((l) => !prog.isLessonDone(`${l.tech}/${l.slug}`)) ?? lessons[0];

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', { y: 18, opacity: 0, duration: 0.55, stagger: 0.09, ease: 'power2.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { n: TECHS.length, k: 'home.stats.tech' },
    { n: lessons.length, k: 'home.stats.lessons' },
    { n: GLOSSARY.length, k: 'home.stats.terms' },
    { n: 34, k: 'home.stats.labs' },
  ];

  return (
    <div>
      {/* ─── HERO ─── */}
      <div ref={heroRef} className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent), var(--accent-2))' }}
        />
        <div className="relative grid gap-6 p-6 md:grid-cols-[3fr_2fr] md:p-10">
          <div>
            <span data-hero className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {ui('home.hero.badge')} · EN | বাংলা
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              <span data-hero className="block">{ui('home.hero.title1')}</span>
              <span data-hero className="block text-accent">{ui('home.hero.title2')}</span>
            </h1>
            <p data-hero className="mt-4 max-w-xl leading-7 text-muted">{ui('home.hero.sub')}</p>
            <div data-hero className="mt-6 flex flex-wrap gap-3">
              {lessons[0] && (
                <Link
                  to={`/learn/${lessons[0].tech}/lessons/${lessons[0].slug}`}
                  className="rounded-xl bg-accent px-5 py-2.5 font-bold text-onaccent shadow-md transition hover:opacity-90"
                >
                  {ui('cta.start')} →
                </Link>
              )}
              <Link
                to="/playground"
                className="rounded-xl border border-border bg-bg px-5 py-2.5 font-semibold transition hover:border-accent/60"
              >
                ▶ {ui('cta.trycode')}
              </Link>
              <Link
                to="/explore"
                className="rounded-xl border border-border bg-bg px-5 py-2.5 font-semibold transition hover:border-accent/60"
              >
                🧭 {ui('cta.explore')}
              </Link>
            </div>
          </div>
          <div data-hero className="hidden items-center md:flex">
            <div className="codeblock w-full rounded-xl border border-border p-4 font-mono text-[13px] leading-7 shadow-inner" aria-hidden="true">
              <div><span className="tok-c">// your first deep lesson</span></div>
              <div><span className="tok-k">function</span> <span className="tok-f">makeCounter</span>() {'{'}</div>
              <div>&nbsp;&nbsp;<span className="tok-k">let</span> count = <span className="tok-n">0</span>;</div>
              <div>&nbsp;&nbsp;<span className="tok-k">return</span> <span className="tok-k">function</span> () {'{'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;count += <span className="tok-n">1</span>;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="tok-k">return</span> count;</div>
              <div>&nbsp;&nbsp;{'}'};</div>
              <div>{'}'}</div>
              <div className="mt-2 border-t border-border/50 pt-2 text-muted">→ memory · closure · scope chain ↑</div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 divide-x divide-border border-t border-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">{s.n}</div>
              <div className="text-xs text-muted">{ui(s.k)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── TECHNOLOGY EXPLORER ─── */}
      <Section
        id="explorer"
        titleKey="home.sec.explorer.t"
        subKey="home.sec.explorer.s"
        action={
          <Link to="/explore" className="text-sm font-semibold text-accent hover:underline">
            {ui('nav.explore')} →
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((c) => {
            const items = techsByCategory(c.id);
            return (
              <Link key={c.id} to={`/explore#${c.id}`} className={`${card} p-4`}>
                <div className="mb-1 text-2xl" aria-hidden="true">{c.icon}</div>
                <div className="font-semibold leading-tight">{T({ en: c.en, bn: c.bn })}</div>
                <div className="mt-1 text-xs text-muted">{items.length} {lang === 'bn' ? 'টি' : 'topics'}</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {items.slice(0, 3).map((t) => (
                    <span key={t.slug} className="rounded bg-elev px-1.5 py-0.5 text-[10px] text-muted">
                      {t.name}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ─── LEARNING PATHS ─── */}
      <Section
        id="paths"
        titleKey="home.sec.paths.t"
        subKey="home.sec.paths.s"
        action={
          <Link to="/roadmaps" className="text-sm font-semibold text-accent hover:underline">
            {ui('nav.roadmaps')} →
          </Link>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {ROADMAPS.map((r) => (
            <Link key={r.id} to={`/roadmaps#${r.id}`} className={`${card} p-4`}>
              <div className="mb-2 text-2xl" aria-hidden="true">{r.icon}</div>
              <div className="font-semibold">{T(r.title)}</div>
              <p className="mt-1 text-sm leading-6 text-muted">{T(r.summary)}</p>
              <div className="mt-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-muted">
                <span>{ui('road.beginner')}</span>
                <span aria-hidden="true" className="text-accent">→</span>
                <span>{ui('road.pro')}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─── POPULAR TUTORIALS ─── */}
      <Section id="popular" titleKey="home.sec.popular.t" subKey="home.sec.popular.s">
        <div className="grid gap-3 md:grid-cols-2">
          {lessons.map((l) => {
            const doneIt = prog.isLessonDone(`${l.tech}/${l.slug}`);
            return (
              <Link key={l.slug} to={`/learn/${l.tech}/lessons/${l.slug}`} className={`${card} flex gap-3 p-4`}>
                <span aria-hidden="true" className="text-3xl">{getHub(l.tech)?.icon}</span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-semibold">
                    {T(l.title)}
                    {doneIt && <span className="text-xs text-ok">✓</span>}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted line-clamp-2">{T(l.summary)}</span>
                  <span className="mt-2 block text-xs text-muted">
                    ⚡ {getHub(l.tech)?.name} · {l.minutes} {ui('lesson.minutes')}
                    {l.exercises.length > 0 && ` · ${prog.doneCount(l.exercises.map((e) => e.id || ''))}/${l.exercises.length} ${ui('ex.progress')}`}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ─── INTERACTIVE LABS + PLAYGROUND ─── */}
      <div className="grid gap-3 xl:grid-cols-2">
        <Section
          id="labs"
          titleKey="home.sec.labs.t"
          subKey="home.sec.labs.s"
          action={
            <Link to="/labs" className="text-sm font-semibold text-accent hover:underline">
              {ui('nav.labs')} →
            </Link>
          }
        >
          <div className="grid gap-3">
            {[
              { to: '/labs#event-loop', icon: '♻️', t: ui('labs.eventloop'), d: ui('labs.eventloop.d') },
              { to: '/labs#execution', icon: '🧠', t: ui('labs.exec'), d: ui('labs.exec.d') },
              { to: '/labs#browser', icon: '🌐', t: ui('labs.browser'), d: ui('labs.browser.d') },
              { to: '/labs#box-model', icon: '📦', t: T({ en: 'Box Model Lab', bn: 'বক্স মডেল ল্যাব' }), d: T({ en: 'Margin, border, padding, content — drag the layers.', bn: 'মার্জিন, বর্ডার, প্যাডিং, কনটেন্ট — স্তরগুলো টেনে দেখুন।' }) },
              { to: '/labs#flexbox', icon: '↔️', t: T({ en: 'Flexbox Lab', bn: 'ফ্লেক্সবক্স ল্যাব' }), d: T({ en: 'Main axis, cross axis, distribution — live.', bn: 'মূল অ্যাক্সিস, ক্রস অ্যাক্সিস, বণ্টন — লাইভ।' }) },
              { to: '/labs#grid', icon: '▦', t: T({ en: 'Grid Lab', bn: 'গ্রিড ল্যাব' }), d: T({ en: 'Rows and columns at once, with spans.', bn: 'সারি-কলাম একসাথে, স্প্যানসহ।' }) },
              { to: '/labs#dom-tree', icon: '🌳', t: T({ en: 'DOM Tree Lab', bn: 'DOM ট্রি ল্যাব' }), d: T({ en: 'Type HTML, see the live object tree.', bn: 'HTML লিখুন, জীবন্ত ট্রি দেখুন।' }) },
              { to: '/labs#forms', icon: '📝', t: T({ en: 'Form Validation Lab', bn: 'ফর্ম ভ্যালিডেশন ল্যাব' }), d: T({ en: 'Zero-JS native constraints, live.', bn: 'জাভাস্ক্রিপ্ট-ছাড়া নেটিভ কনস্ট্রেইন্ট।' }) },
              { to: '/labs#git', icon: '🌿', t: T({ en: 'Git Visualizer', bn: 'Git ভিজ্যুয়ালাইজার' }), d: T({ en: 'Four zones, real commands, commit graph.', bn: 'চার জোন, আসল কমান্ড, কমিট গ্রাফ।' }) },
              { to: '/labs#react', icon: '⚛️', t: T({ en: 'Re-render Lab', bn: 'রি-রেন্ডার ল্যাব' }), d: T({ en: 'setState fires, memo shields — watch the tree burn.', bn: 'setState চালে, memo ঢাকে — ট্রি জ্বলতে দেখুন।' }) },
              { to: '/labs#docker', icon: '🐳', t: T({ en: 'Docker Visualizer', bn: 'Docker ভিজ্যুয়ালাইজার' }), d: T({ en: 'Build cache, layers, containers, network.', bn: 'বিল্ড ক্যাশ, লেয়ার, কন্টেইনার, নেটওয়ার্ক।' }) },
              { to: '/labs#typescript', icon: '🔷', t: T({ en: 'Type Lab', bn: 'টাইপ ল্যাব' }), d: T({ en: 'Watch type beliefs infer, split, narrow — never.', bn: 'টাইপ-বিশ্বাস অনুমান, ভাগ, সঙ্কোচন দেখুন — never পর্যন্ত।' }) },
              { to: '/labs#python', icon: '🐍', t: T({ en: 'Python Lab', bn: 'পাইথন ল্যাব' }), d: T({ en: 'Names are stickers; watch aliasing and the default trap.', bn: 'নাম হলো স্টিকার; এলিয়াসিং আর ডিফল্ট-ফাঁদ দেখুন।' }) },
              { to: '/labs#dsa', icon: '↕️', t: T({ en: 'DSA Lab', bn: 'DSA ল্যাব' }), d: T({ en: 'Race searches, split the sort bill, read the growth invoice.', bn: 'সার্চ-দৌড়, সর্ট-বিলের ফাঁক, বৃদ্ধির চালান।' }) },
              { to: '/labs#ht', icon: '#️⃣', t: T({ en: 'Hash Lab', bn: 'হ্যাশ ল্যাব' }), d: T({ en: 'Content becomes addresses — chains crowd, the table doubles.', bn: 'বিষয়বস্তু-ই ঠিকানা — চেইন ভিড়ে, টেবিল দ্বিগুণ হয়।' }) },
              { to: '/labs#ll', icon: '🔗', t: T({ en: 'Linked List Lab', bn: 'লিংকড-লিস্ট ল্যাব' }), d: T({ en: 'Walk, stitch, vault, reverse — the three-pointer dance per frame.', bn: 'হাঁটা, সেলাই, ভল্ট, উল্টানো — তিন-আঙুলের নাচ ফ্রেমে ফ্রেমে।' }) },
              { to: '/labs#stk', icon: '🥞', t: T({ en: 'Stack Lab', bn: 'স্ট্যাক ল্যাব' }), d: T({ en: 'Plates, brackets, RPN, call frames — LIFO in six scenes.', bn: 'থালা, বন্ধনী, RPN, কল-ফ্রেম — ছয় দৃশ্যে LIFO।' }) },
              { to: '/labs#queue', icon: '🚶', t: T({ en: 'Queue Lab', bn: 'কিউ ল্যাব' }), d: T({ en: 'Fair line, ring wrap, two-tray pour, priority bargain — FIFO in four scenes.', bn: 'ন্যায্য সারি, রিং-ভাঁজ, দ্বি-বন্দনী ঢালাই, অগ্রাধিকার-সওদা — চার দৃশ্যে FIFO।' }) },
              { to: '/labs#tree', icon: '🌲', t: T({ en: 'Tree Lab', bn: 'গাছ ল্যাব' }), d: T({ en: 'BST walks, three traversals, RR & LR rotation repairs — trees in four scenes.', bn: 'BST হাঁটা, তিন ট্রাভার্সাল, RR ও LR রোটেশন-মেরামত — চার দৃশ্যে গাছ।' }) },
              { to: '/labs#heap', icon: '⛰️', t: T({ en: 'Heap Lab', bn: 'হিপ ল্যাব' }), d: T({ en: 'Sift escalators, throne serves, O(n) heapify, top-3 gatekeeper — the partial-order machine.', bn: 'ছাঁকাই-এস্কেলেটর, সিংহাসন-পরিবেশন, O(n) হিপিফাই, top-3 গেটকিপার — আংশিক-ক্রমের যন্ত্র।' }) },
              { to: '/labs#graph', icon: '🕸️', t: T({ en: 'Graph Lab', bn: 'গ্রাফ ল্যাব' }), d: T({ en: 'Wavefront, plunge, back edge, zero-debt tray — four walks on two worlds.', bn: 'তরঙ্গ-সারি, ডুব, ব্যাক ধার, শূন্য-ঋণ ট্রে — দুই জগতে চার হাঁটা।' }) },
              { to: '/labs#galg', icon: '🧭', t: T({ en: 'Graph Algo Lab', bn: 'গ্রাফ-অ্যালগ ল্যাব' }), d: T({ en: 'Weld the cheapest cable, relax the biting world — MST, Bellman-Ford, Floyd.', bn: 'সস্তাতম তার ঝালাই করুন, কামড়ানো জগৎ শিথিল করুন — MST, Bellman-Ford, Floyd।' }) },
              { to: '/labs#srch', icon: '🔎', t: T({ en: 'Search Lab', bn: 'সার্চ ল্যাব' }), d: T({ en: 'Linear marches, binary halves, boundary collapses — four machines, four vows.', bn: 'লিনিয়ার মার্চ করে, বাইনারি অর্ধেক, সীমানা ভেঙে পড়ে — চার যন্ত্র, চার শপথ।' }) },
              { to: '/labs#sysd', icon: '🏗️', t: T({ en: 'System Design Lab', bn: 'সিস্টেম-ডিজাইন ল্যাব' }), d: T({ en: 'DAU → QPS → boxes, disks, Mbps, cache — four envelope ledgers, honestly walked.', bn: 'DAU → QPS → বাক্স, ডিস্ক, Mbps, ক্যাশ — চার খাম-খাতা, সৎভাবে হাঁটা।' }) },
              { to: '/labs#cch', icon: '🧊', t: T({ en: 'Cache Lab', bn: 'ক্যাশ ল্যাব' }), d: T({ en: 'Eleven references, three seats, four laws — LRU keeps 2, FIFO 1, and the undertaker executes A only once.', bn: 'এগারো রেফারেন্স, তিন আসন, চার বিধান — LRU বাঁচায় ২, FIFO ১, আর কবরখেকো A-কে মারে হুবহু একবার।' }) },
              { to: '/labs#dsy', icon: '🌐', t: T({ en: 'DistSys Lab', bn: 'ডিস্ট-সিস ল্যাব' }), d: T({ en: 'One 19-beat fate-line, four consistency laws — naive buries one write in silence, the exam moves the crown, and i19 lights the betrayed lamp.', bn: 'এক ১৯-ছন্দের নিয়তি-রেখা, চার ধারাবাহিকতা-বিধান — নিরীক্ষ নীরবে একটি লেখা সমাহিত করে, পরীক্ষা মুকুট সরায়, আর i19 জ্বালায় বিশ্বাসঘাত-প্রদীপ।' }) },
              { to: '/labs#http', icon: '📨', t: T({ en: 'HTTP Lab', bn: 'HTTP ল্যাব' }), d: T({ en: 'Twelve envelopes, four client laws — 122,300 vs 69,300 bytes, one rewrite refused.', bn: 'বারো খাম, চার ক্লায়েন্ট-বিধান — 122,300 বনাম 69,300 বাইট, একটি প্রত্যাখ্যাত পুনর্লিখন।' }) },
              { to: '/labs#rest', icon: '🗂️', t: T({ en: 'REST Lab', bn: 'REST ল্যাব' }), d: T({ en: 'Ten operations, four API laws — 10 verbed envelopes vs zero, one docket priced in seven counters.', bn: 'দশ কাজ, চার API-বিধান — 10টি বনাম 0টি ক্রিয়ামিশ্রিত খাম, সাত গণকে মূল্যায়িত ডকেট।' }) },
              { to: '/labs#gql', icon: '⬡', t: T({ en: 'GraphQL Lab', bn: 'GraphQL ল্যাব' }), d: T({ en: 'Eight beats, four query laws — 537 vs 9 database queries, one depth bomb rejected at the gate.', bn: 'আট ছন্দ, চার কোয়েরি-বিধান — 537 বনাম 9 ডেটাবেস-প্রশ্ন, ফাটকে-প্রত্যাখ্যাত একটি গভীরতা-বোমা।' }) },
              { to: '/labs#node', icon: '🧵', t: T({ en: 'Node Lab', bn: 'Node ল্যাব' }), d: T({ en: 'Eight beats, four runtime laws — 898ms stolen loop and 51 starved clients vs 8ms and 19 rps.', bn: 'আট ছন্দ, চার রানটাইম-বিধান — 898ms চুরি-করা লুপ আর 51 অনাহারী ক্লায়েন্ট বনাম 8ms আর 19 rps।' }) },
              { to: '/labs#network', icon: '🕸️', t: T({ en: 'Network Simulator', bn: 'নেটওয়ার্ক সিমুলেটর' }), d: T({ en: 'DNS, TLS, CDN, LB, DB — one request’s journey.', bn: 'DNS, TLS, CDN, LB, DB — একটি রিকোয়েস্টের যাত্রা।' }) },
              { to: '/labs#database', icon: '🗄️', t: T({ en: 'Database Lab', bn: 'ডেটাবেস ল্যাব' }), d: T({ en: 'Why indexes make queries fly — live EXPLAIN.', bn: 'ইনডেক্সে কেন কোয়েরি উড়ে — লাইভ EXPLAIN।' }) },
              { to: '/labs#loadbalancer', icon: '⚖️', t: T({ en: 'Load Balancing Lab', bn: 'লোড ব্যালান্সিং ল্যাব' }), d: T({ en: 'Flood, failover, algorithms — live traffic.', bn: 'ঢল, ফেইলওভার, অ্যালগরিদম — লাইভ ট্রাফিক।' }) },
              { to: '/labs#security', icon: '🔐', t: T({ en: 'Security Lab', bn: 'সিকিউরিটি ল্যাব' }), d: T({ en: 'Real JWT crypto — sign, tamper, attack.', bn: 'আসল JWT ক্রিপ্টো — সাইন, ছিঁড়া, আক্রমণ।' }) },
              { to: '/debug', icon: '🐞', t: T({ en: 'Debug Challenges', bn: 'ডিবাগ চ্যালেঞ্জ' }), d: T({ en: 'Six broken programs — find the bug, earn points.', bn: '৬টি ভাঙা প্রোগ্রাম — বাগ খুঁজুন, পয়েন্ট জিতুন।' }) },
            ].map((l) => (
              <Link key={l.to} to={l.to} className={`${card} flex items-center gap-3 p-3.5`}>
                <span aria-hidden="true" className="text-2xl">{l.icon}</span>
                <span>
                  <span className="block font-semibold">{l.t}</span>
                  <span className="block text-sm text-muted">{l.d}</span>
                </span>
                <span aria-hidden="true" className="ml-auto text-accent">→</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="playground" titleKey="home.sec.play.t" subKey="home.sec.play.s">
          <div className={`${card} overflow-hidden`}>
            <div className="codeblock border-b border-border p-3 font-mono text-xs" aria-hidden="true">
              <span className="tok-k">const</span> dream = <span className="tok-s">"build"</span>;
              <span className="tok-c"> // ▶ Run</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 p-4">
              <div className="min-w-0 flex-1">
                <div className="font-semibold">HTML · CSS · JavaScript</div>
                <p className="text-sm text-muted">
                  {T({
                    en: 'Syntax highlighting, live preview, console, download — all in your browser.',
                    bn: 'সিনট্যাক্স হাইলাইটিং, লাইভ প্রিভিউ, কনসোল, ডাউনলোড — সব আপনার ব্রাউজারেই।',
                  })}
                </p>
              </div>
              <Link to="/playground" className="rounded-xl bg-ok px-4 py-2 font-bold text-white transition hover:opacity-90">
                ▶ {ui('play.run')}
              </Link>
            </div>
          </div>

          <h3 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wide text-muted">{ui('home.sec.projects.t')}</h3>
          <div className="grid gap-2">
            {js?.projects.map((p) => (
              <div key={p.title.en} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
                <span className="rounded-lg bg-elev px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-muted">
                  {ui(`diff.${p.diff ?? p.difficulty}`)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-medium">{T(p.title)}</span>
                  <span className="block truncate text-xs text-muted">{T((p.desc ?? p.brief)!)}</span>
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ─── ARCHITECTURE TEASER ─── */}
      <Section id="architecture" titleKey="home.sec.arch.t" subKey="home.sec.arch.s">
        <div className={`${card} p-4`}>
          <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs" aria-hidden="true">
            {['Browser', 'DNS', 'TCP', 'TLS', 'Server', 'DB', 'Response', 'DOM', 'Paint'].map((n, i) => (
              <span key={n} className="flex items-center gap-2">
                <span className="rounded-lg border border-border bg-elev px-2.5 py-1.5">{n}</span>
                {i < 8 && <span className="text-accent">→</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">
              {T({
                en: 'Follow one request through the whole stack — animated, step by step.',
                bn: 'একটি রিকোয়েস্টকে পুরো স্ট্যাক জুড়ে অনুসরণ করুন — ধাপে ধাপে, অ্যানিমেটেড।',
              })}
            </p>
            <Link to="/labs#browser" className="rounded-xl border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10">
              ▶ {ui('labs.browser')}
            </Link>
          </div>
        </div>
      </Section>

      {/* ─── PROGRESS / CONTINUE / RECENT ─── */}
      <div className="grid gap-3 xl:grid-cols-3">
        <Section id="progress" titleKey="home.sec.progress.t" subKey="home.sec.progress.s">
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '📚', n: prog.lessons.length, k: 'prog.lessons' },
              { icon: '✍️', n: Object.values(prog.exercises).filter(Boolean).length, k: 'prog.exercises' },
              { icon: '🏆', n: prog.bestQuiz ? `${prog.bestQuiz.score}/${prog.bestQuiz.total}` : '—', k: 'prog.quiz' },
              { icon: '🔥', n: prog.streak, k: 'prog.streak' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-surface p-4 text-center">
                <div aria-hidden="true" className="text-xl">{s.icon}</div>
                <div className="mt-1 text-xl font-extrabold">{s.n}</div>
                <div className="text-xs text-muted">{ui(s.k)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="continue" titleKey="home.sec.continue.t" subKey="home.sec.recommended.t">
          {nextLesson ? (
            <Link to={`/learn/${nextLesson.tech}/lessons/${nextLesson.slug}`} className={`${card} block p-4`}>
              <div className="text-xs uppercase tracking-wide text-muted">{ui('home.sec.recommended.t')}</div>
              <div className="mt-1 font-semibold">
                {getHub(nextLesson.tech)?.icon} {T(nextLesson.title)}
              </div>
              <p className="mt-1 text-sm text-muted line-clamp-2">{T(nextLesson.summary)}</p>
              <span className="mt-2 inline-block rounded-lg bg-accent px-3 py-1.5 text-sm font-bold text-onaccent">
                {ui('cta.start')} →
              </span>
            </Link>
          ) : (
            <p className="text-sm text-muted">{ui('prog.empty')}</p>
          )}
        </Section>

        <Section id="recent" titleKey="home.sec.recent.t" subKey="home.sec.progress.s">
          {prog.recent.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted">{ui('prog.empty')}</p>
          ) : (
            <ul className="space-y-2">
              {prog.recent.slice(0, 5).map((r) => (
                <li key={r.path + r.at}>
                  <Link to={r.path} className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm transition hover:border-accent/60">
                    <span aria-hidden="true">{r.kind === 'lesson' ? '📗' : '🧪'}</span>
                    <span className="min-w-0 flex-1 truncate font-medium">{T(r.title)}</span>
                    <span aria-hidden="true" className="text-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </div>
    </div>
  );
}
