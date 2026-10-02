import type { Lesson } from '../../../lib/types';

/**
 * Rewritten 2026-09-26. The old page had seven paragraphs, two tables and not one runnable thing —
 * `concept-check` scored it BROKEN (“pictures and tables only, nothing runs”). This version keeps
 * the same place in the hub (5th lesson, before the gossip lesson) and teaches the arithmetic:
 * clock skew with milliseconds, Lamport’s rule with integers, a vector-clock comparison that says
 * “concurrent”, and the lease bug a backward clock jump actually causes.
 */
export const timeWithoutClocksLesson: Lesson = {
  slug: 'time-without-clocks',
  tech: 'distributed-systems',
  title: {
    en: 'Time without clocks: ordering events when the clock lies',
    bn: 'ঘড়ি ছাড়া সময়: ঘড়ি ভুল বললে ঘটনা টির ক্রম ঠিক করা'
  },
  summary: {
    en: 'Two machines disagree about “now” by tens of milliseconds, and a paused VM can arrive an hour in the past. So a cluster does not ask what time it is — it counts events. Here is the counting, with the numbers, and the bug you get when you use the wall clock anyway.',
    bn: 'দুটি মেশিন “এখন” নিয়ে কয়েক ডজন মিলিসেকেন্ডে দ্বিমত, আর থেমে-যাওয়া একটি VM এক ঘণ্টা পিছনে ফিরে আসতে পারে। তাই একটি cluster জিজ্ঞেস করে না এখন কটা বাজে — সে ঘটনা গুনে। নিচে সেই গণনা সংখ্যাসহ, আর wall clock ব্যবহার করলে যে বাগ হয় সেটি।'
  },
  minutes: 22,
  nextLesson: {
    slug: 'the-gossip-parish',
    tech: 'distributed-systems',
    title: { en: 'The Gossip Parish', bn: 'গুজব-পল্লি' }
  },
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT — measure the disagreement first', bn: 'কী — আগে অমিল মাপুন' } },
    {
      type: 'para',
      text: {
        en: 'Run `date +%s.%N` on two machines in the same room, at the same moment, and subtract. On a laptop on office Wi-Fi the gap is usually 5 to 80 milliseconds. Inside one rack, synced by chrony, it drops under 1 millisecond. Neither number is a mistake: it is what your ordering rules have to survive.',
        bn: 'একই ঘরের দুটি মেশিনে SSH দিয়ে হুবহু একসময়ে `date +%s.%N` চালান, বিয়োগ করুন। অফিসের Wi-Fi-এ ল্যাপটপে ব্যবধান সাধারণত ৫ থেকে ৮০ মিলিসেকেন্ড। একই র‍্যাকে chrony দিয়ে সিঙ্ক থাকলে তা ১ মিলিসেকেন্ডের নিচে নামে। দুটি সংখ্যাই ভুল নয় — ক্রম ঠিক করার নিয়মগুলোকে এই ব্যবধান টিকিয়ে রাখতে হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A “timestamp” is one machine’s reading, not a fact. The fix is to stop asking the clock and instead keep a counter that only moves forward, updated every time a node sends or receives. That counter is a logical clock: it gives order, never a time of day.',
        bn: 'একটি “timestamp” হলো একটি মেশিনের পাঠ, সত্যি নয়। সমাধান: ঘড়িকে প্রশ্ন করা বাদ দিন, বরং একটি কাউন্টার রাখুন যা শুধু এগোয় — প্রতিটি পাঠাওয়া-নেওয়ায় বেড়ে যায়। এটিই logical clock: এটি ক্রম দেয়, দিনের সময় কখনো বলে না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'skew.sh',
      code: `# on machine A and machine B, at the same moment (run with: time skew.sh)
date +%s.%N
# 1761523200.842117   A
# 1761523200.712488   B
# difference: 0.129629 s  -> 129 ms of skew, on the same LAN, both synced

chronyc sources -v | head -3
# clock still drifts about 15 microseconds per second after sync`,
      caption: {
        en: '129 ms is longer than a whole user click. Anything that decides “which write was later” from these numbers is a coin toss at that scale.',
        bn: '১২৯ মিলিসেকেন্ড এক ক্লিকের চেয়েও বেশি। এই সংখ্যা দেখে “কোন লেখাটি পরের” ঠিক করা মানে ওই স্কেলে নোটাক্ষেপ ফেলা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'wall clock', def: { en: 'The machine’s calendar reading, which can jump forward, step back, or follow the user.', bn: 'মেশিনের ক্যালেন্ডার পাঠ, যা সামনে লাফাতে পারে, পেছনে যেতে পারে, ব্যবহারকারীর সঙ্গেও চলতে পারে।' } },
        { term: 'monotonic clock', def: { en: 'A counter since boot that never steps back, used for measuring durations only.', bn: 'বুট থেকে চলা কাউন্টার, পেছনে যায় না — শুধু সময়ের দৈর্ঘ্য মাপতে লাগে।' } },
        { term: 'logical clock', def: { en: 'A number advanced by send and receive rules, giving order without any claim about real time.', bn: 'পাঠানো-গ্রহণের নিয়মে বাড়ানো সংখ্যা — ক্রম দেয়, আসল সময় নিয়ে কিছুই দাবি করে না।' } },
        { term: 'causality', def: { en: 'The fact that a message was sent before it was received; ordering rules exist to keep this visible.', bn: 'একটি বার্তা পাওয়ার আগে পাঠানো হয়েছিল—এই সত্যই causality; ক্রমের নিয়ম এটি দেখা রাখে।' } },
        { term: 'concurrent', def: { en: 'Two events neither of which could have influenced the other, so either order is legal.', bn: 'দুটি ঘটনার কোনোটিই অন্যটিকে প্রভাবিত করতে পারেনি — তাই যে ক্রমেই বসুক, দুটোই বৈধ।' } }
      ]
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        { en: 'Two writes seven frames apart can be stamped in the wrong order, and the older one silently wins.', bn: 'দুটি লেখার মাঝে সাতটি ফ্রেমের ব্যবধানেও ক্রম উল্টে যেতে পারে, পুরোনোটি চুপচাপ জিতে যায়।' },
        { en: 'A lease “expires in 30 seconds” is arithmetic on a clock that a snapshot restore moved backwards by hours.', bn: '“৩০ সেকেন্ডে শেষ” lease হলো এমন ঘড়ির হিসাব, যা snapshot restore ঘণ্টাখানেক পেছনে ঠেলে দিতে পারে।' },
        { en: 'Retrying a payment “only if it is older than five minutes” needs the difference between two machines, not one clock.', bn: '“পাঁচ মিনিট পুরোনো হলেই” পুনরায় চালানোর শর্তে দুটি মেশিনের ব্যবধান লাগে, একটি ঘড়ির পাঠ নয়।' },
        { en: 'Debugging “which replica saw the write first” without a counter means reading logs by eye, at the millisecond.', bn: 'কাউন্টার ছাড়া “কোন replica আগে লেখাটি দেখেছে” বের করা মানে চোখ দিয়ে মিলিসেকেন্ড মিলিয়ে লগ পড়া।' }
      ]
    },
    { type: 'heading', id: 'how', text: { en: 'HOW it runs — Lamport’s two rules', bn: 'কীভাবে চলে — Lamport-এর দুটি নিয়ম' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Each node keeps one integer', bn: '১. প্রতি নোড একটিই পূর্ণসংখ্যা রাখে' }, text: { en: 'It starts at 0 and is called `t`. Nothing about the machine’s clock enters it.', bn: '০ থেকে শুরু, নাম `t`। মেশিনের ঘড়ি এর ভেতরে ঢোকে না।' } },
        { title: { en: '2. Add one before every event', bn: '২. প্রতিটি ঘটনার আগে এক যোগ' }, text: { en: 'Send, receive, or a local write: `t += 1` first, then stamp the event with the new value.', bn: 'পাঠানো, গ্রহণ বা নিজের লেখা — আগে `t += 1`, তারপর নতুন মানটি ঘটার ছাপ হিসেবে বসান।' } },
        { title: { en: '3. On receive, jump past the sender', bn: '৩. পেলে পাঠকের চেয়ে এগিয়ে যান' }, text: { en: 'Set `t = max(t, t_incoming) + 1`. This is the whole trick: the receiver’s number is always greater than the sender’s.', bn: '`t = max(t, t_incoming) + 1` বসান — এইটুকুই মূল কৌশল: পানকারীর সংখ্যা পাঠানোর সংখ্যার চেয়ে বেশিই থাকে।' } },
        { title: { en: '4. Order by the numbers', bn: '৪. সংখ্যা দেখে ক্রম' }, text: { en: 'Smaller happened first. Equal numbers on different nodes are the price: you cannot tell whether one caused the other.', bn: 'ছোটটি আগে। আলাদা নোডে সমান সংখ্যাটাই দাম: একটি কি অন্যটির কারণ, তা আর বোঝা যায় না।' } }
      ]
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'lamport.js',
      code: `let t = { A: 0, B: 0, C: 0 };
function stamp(node, event) { t[node] += 1; return node + ' ' + event + ' -> t=' + t[node]; }

console.log(stamp('A', 'write'));      // A write -> t=1
t.B = Math.max(t.B, 1) + 1;          // receive rule: max(local, incoming) + 1
console.log(stamp('B', 'receive'));   // B receive -> t=2
console.log(stamp('B', 'write'));     // B write -> t=3
t.C = Math.max(t.C, 3) + 1;
console.log(stamp('C', 'receive'));   // C receive -> t=4

// send < receive on every hop: 1 < 2, 3 < 4.
// what you cannot learn from these: whether A write and B receive were really linked.
`,
      caption: {
        en: 'Four events, four integers, and causality preserved with no clock involved. The cost is precision: two nodes can hold 3 for entirely unrelated reasons.',
        bn: 'চারটি ঘটনা, চারটি সংখ্যা, কোনো ঘড়ি ছাড়াই causality রক্ষা। ক্ষতি নিখুঁততার: দুটি নোডে ৩ থাকতে পারে সম্পূর্ণ অসম্পর্কিত কারণে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'That imprecision has a name in the trade: a total order that is stronger than causality invents facts. Two vector clocks fix it — one counter per node, copied along, compared entry by entry.',
        bn: 'এই অ-নিখুঁততার নাম আছে: causality-এর চেয়ে শক্ত ক্রম দিলে কাল্পনিক ঘটনা তৈরি হয়। দুটি vector clock তা ঠিক করে — প্রতি নোডের নিজের কাউন্টার, সঙ্গে সঙ্গে কপি, একটি একটি করে মিলিয়ে দেখা।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'vectors.js',
      code: `// A vector is one number per node. Compare entry by entry.
const after = (a, b) => Object.keys(b).some(k => (b[k] ?? 0) > (a[k] ?? 0)) &&
                        Object.keys(a).every(k => (a[k] ?? 0) >= (b[k] ?? 0));
const concurrent = (a, b) => !after(a, b) && !after(b, a);

const w1 = { A: 1, B: 0 };          // Ada wrote on A
const w2 = { A: 0, B: 1 };          // Grace wrote on B, never heard of w1
concurrent(w1, w2);                 // true  — either may be called later

const seen = { A: 2, B: 1 };        // A merged both of them, then wrote again
after(seen, w1);                    // true  — A’s later write must win over w1
after(seen, w2);                    // true`,
      caption: {
        en: 'A conflict the total order hid is now a fact you can act on: two independent writes to the same key. The merge function is what resolves it — not the clock.',
        bn: 'যে দ্বন্দ্ব total order ঢেকে রেখেছিল, এখন তা হাতে-নাপা সত্যি: একই চাবিতে দুটি স্বাধীন লেখা। মেজ-ফাংশন সেটি মিটায় — ঘড়ি নয়।'
      }
    },
    {
      type: 'table',
      head: [{ en: 'what you reach for', bn: 'কী তুলে নেন' }, { en: 'gives', bn: 'কী দেয়' }, { en: 'breaks when', bn: 'কখন ভাঙে' }],
      rows: [
        [{ en: 'wall clock (Date.now)', bn: 'wall clock (Date.now)' }, { en: 'a human-readable stamp, sortable across a day', bn: 'পড়ার মতো ছাপ, এক দিন জুড়ে সাজানো যায়' }, { en: 'NTP steps, DST, a VM restored from a snapshot', bn: 'NTP লাফ, DST, snapshot থেকে ফেরানো VM' }],
        [{ en: 'monotonic clock', bn: 'monotonic clock' }, { en: 'honest durations on one machine', bn: 'একটি মেশিনে সত্যি দৈর্ঘ্য' }, { en: 'comparing two machines at all', bn: 'দুটি মেশিনের তুলনা করতেই পারবে না' }],
        [{ en: 'Lamport counter', bn: 'Lamport কাউন্টার' }, { en: 'causality in one integer', bn: 'একটি পূর্ণসংখ্যায় causality' }, { en: 'you need to detect concurrency', bn: 'concurrency দেখা দরকার হলে' }],
        [{ en: 'vector clocks', bn: 'vector clocks' }, { en: 'order plus “these two raced”', bn: 'ক্রম আর “এই দুটি দৌড়েছে”' }, { en: 'the cluster has hundreds of nodes (one entry each)', bn: 'শত শত নোড হলে (প্রতিটির এক ঘর)' }],
        [{ en: 'hybrid (HLC)', bn: 'hybrid (HLC)' }, { en: 'wall-clock-ish value that still respects causality', bn: 'ঘড়ির কাছাকাছি মান, তবু causality মানে' }, { en: 'skew exceeds the tolerance you picked', bn: 'ব্যবধান বেছে নেওয়া সীমা ছাড়ালে' }]
      ],
      caption: { en: 'CockroachDB and Cassandra both use the last row, because users want a timestamp they can read and the system wants an order it can trust.', bn: 'CockroachDB আর Cassandra শেষ লাইনটিই নেয় — ব্যবহারকারী পড়ার মতো সময় চান, সিস্টেম ভরসা করা ক্রম চান।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Durations on one box: monotonic clock. Order across boxes: a counter. A human-readable stamp on a record: wall clock, and never as a tiebreaker alone. Pick one job per clock and the bugs disappear.',
        bn: 'একটি মেশিনে সময়ের দৈর্ঘ্য: monotonic clock। মেশিনের মাঝে ক্রম: একটি কাউন্টার। record-এ পড়ার মতো ছাপ: wall clock, তবে একা বিচারকের কাজ কখনো নয়। প্রতি ঘড়ির একটিই কাজ রাখলে বাগগুলো নেই হয়ে যায়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Expiring a lease with the wall clock', bn: 'wall clock দিয়ে lease শেষ করা' },
      text: {
        en: 'A leader renews a 30-second lease by comparing `Date.now()` to its own start time. The box is suspended for two hours, wakes with a clock that is still old, and now both nodes believe they are leader. Use a monotonic counter for the expiry, and let the clock only label the event.',
        bn: 'একজন leader ৩০ সেকেন্ডের lease `Date.now()`-এর সঙ্গে নিজের শুরুর সময় মিলিয়ে নতুন করে। বাক্সটি দুই ঘণ্টা ঝুলে থাকে, পুরোনো ঘড়ি নিয়েই জাগে — এবার দুটি নোডই মনে করে নেতা নিজে। শেষ হওয়ার হিসাব monotonic কাউন্টারে রাখুন, ঘড়ি যেন কেবল ঘটনায় ছাপ দেয়।'
      }
    },
    {
      type: 'visual',
      id: 'event-loop'
    }
  ],
  exercises: [
    {
      id: 'time-clock-ex1',
      kind: 'mcq',
      topic: 'distributed-systems: Time without clocks',
      question: {
        en: 'Machine A’s clock is 120 ms ahead. Ada writes on A at true 00.000; Grace overwrites on B at true 00.050, and B runs 40 ms slow. Last-writer-wins picks which value?',
        bn: 'A মেশিনের ঘড়ি ১২০ মিলিসেকেন্ড এগিয়ে। Ada আসল ০০.০০০-তে A-তে লেখেন; Grace আসল ০০.০০৫০-তে B-তে লেখেন, আর B ৪০ মিলিসেকেন্ড পিছিয়ে। last-writer-wins কোন মান বাছে?'
      },
      options: [
        { en: 'Ada’s — its stamp reads 120 ms, Grace’s reads 10 ms', bn: 'Ada-র — তার ছাপ ১২০ মিলিসেকেন্ড দেখায়, Grace-এর ১০' },
        { en: 'Grace’s — she wrote later in real time', bn: 'Grace-এর — তিনি আসলে পরে লিখেছেন' },
        { en: 'whichever replica answers first', bn: 'যে replica আগে জবাব দেয়' },
        { en: 'neither; the write is rejected', bn: 'কোনোটিই না; লেখাটি ফিরিয়ে দেওয়া হয়' }
      ],
      answer: 0,
      hint: { en: 'Compare the stamps, not the truth: 120 vs (50 − 40).', bn: 'সত্যি নয়, ছাপ মেলান: ১২০ বনাম (৫০ − ৪০)।' },
      explanation: {
        en: 'B stamps Grace’s write 00.010 because its clock is slow, and 010 is lower than A’s 120, so the older write wins. That lost update is the reason replicas exchange counters instead of trusting clocks.',
        bn: 'B-র ঘড়ি পিছিয়ে বলে Grace-এর লেখায় ছাপ বসে ০০.০১০, আর ০১০ A এর ১২০ এর চেয়ে ছোট — তাই পুরোনো লেখাটি জেতে। এই হারানো আপডেটের জন্যই replica গুলো ঘড়ির বদলে কাউন্টার অদলবদল করে।'
      }
    },
    {
      id: 'time-clock-ex2',
      kind: 'predict',
      topic: 'distributed-systems: Time without clocks',
      question: { en: 'What number does B stamp on its receive? Give the integer.', bn: 'পাওয়া ঘটনায় B কোন সংখ্যাটি বসায়? পূর্ণসংখ্যা দিন।' },
      code: `// B's counter is 9. It receives a message stamped 24.\n// Rule on receive: t = max(t, t_incoming) + 1`,
      answer: '25',
      accept: ['25', '২৫'],
      hint: { en: 'max(9, 24) then add one.', bn: 'max(9, 24) তারপর এক যোগ।' },
      explanation: {
        en: 'max(9, 24) = 24, plus one = 25. B cannot keep its old 9, or the send it just answered would not be earlier than its own reply.',
        bn: 'max(9, 24) = ২৪, আর এক যোগে ২৫। পুরোনো ৯ রাখা যাবে না — তাহলে যে ডাকটির জবাব দিচ্ছে, সেই ডাকটিই তার আগে থাকত না।'
      }
    },
    {
      id: 'time-clock-ex3',
      kind: 'mcq',
      topic: 'distributed-systems: Time without clocks',
      question: { en: 'Two writes carry {A:1,B:0} and {A:0,B:1}. What can a merge function say about them?', bn: 'দুটি লেখার সঙ্গে {A:1,B:0} আর {A:0,B:1} আছে। মেজ-ফাংশন এদেরবিষয়ে কী বলতে পারে?' },
      options: [
        { en: 'they are concurrent — neither saw the other', bn: 'দুটিই সমসাময়িক — কোনোটি অন্যটি দেখেনি' },
        { en: 'A’s write came first', bn: 'A-র লেখাটি আগে' },
        { en: 'B’s write came first', bn: 'B-র লেখাটি আগে' },
        { en: 'the vectors are equal', bn: 'দুটি ভেক্টরই সমান' }
      ],
      answer: 0,
      hint: { en: 'Each has one entry the other cannot beat.', bn: 'প্রতিটিতে একটি করে ঘর আছে যেটি অন্যটি ছাড়াতে পারে না।' },
      explanation: {
        en: 'Neither vector is greater in every entry, so neither happened after the other: the write conflict is real and must be resolved by the merge, a CRDT, or a human.',
        bn: 'কোনো ভেক্টরই প্রতিটি ঘরে বড় নয়, তাই কোনোটি পরেও ঘটেনি: দ্বন্দ্বটি সত্যি, মেজ, CRDT বা মানুষ দিয়েই মিটাতে হবে।'
      }
    },
    {
      id: 'time-clock-ex4',
      kind: 'fill',
      topic: 'distributed-systems: Time without clocks',
      question: { en: 'Which clock should measure “this request took 400 ms” on one server? Write its name.', bn: 'একটি সার্ভারে “এই অনুরোধে ৪০০ মিলিসেকেন্ড লেগেছে” কোন ঘড়ি মাপবে? নামটি লিখুন।' },
      answer: 'monotonic clock',
      accept: ['monotonic clock', 'monotonic', 'CLOCK_MONOTONIC', 'process.hrtime'],
      hint: { en: 'The one that never steps back.', bn: 'যেটি কখনো পেছনে লাফায় না।' },
      explanation: {
        en: 'Durations need a counter since boot: `CLOCK_MONOTONIC`, `process.hrtime()`, or a steady timer. A wall clock that NTP steps sideways turns 400 ms into a negative number.',
        bn: 'দৈর্ঘ্যের দরকার বুট থেকে চলা কাউন্টার: `CLOCK_MONOTONIC`, `process.hrtime()` বা steady timer। NTP নড়া wall clock ৪০০ মিলিসেকেন্ডকে ঋণাত্মক বানিয়ে দিতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'time-without-clocks-quiz',
    title: { en: 'Quiz — Time without clocks', bn: 'কুইজ — ঘড়ি ছাড়া সময়' },
    questions: [
      {
        id: 'tcq1', kind: 'mcq', topic: 'distributed-systems: Time without clocks',
        question: { en: 'What does a logical clock guarantee that a synced wall clock does not?', bn: 'সিঙ্ক করা wall clock যা দেয় না, logical clock সেটি কী দেয়?' },
        options: [{ en: 'a send always gets a smaller number than its receive', bn: 'পাঠানোর সংখ্যা সবসময় পাওয়ার সংখ্যার চেয়ে ছোট' }, { en: 'the correct hour of day', bn: 'দিনের সঠিক সময়' }, { en: 'shorter code', bn: 'ছোট কোড' }, { en: 'faster messages', bn: 'দ্রুত বার্তা' }],
        hint: { en: "The rule is max(local, incoming) + 1.", bn: "নিয়মটি max(নিজের, এলো)+১।" },
        answer: 0,
        explanation: { en: 'The receive rule max(local, incoming) + 1 forces it. Nothing about the real time is claimed, which is the point.', bn: 'গ্রহণের নিয়ম max(নিজের, এলো)+১ সেটি বাধ্য করে। আসল সময় নিয়ে কিছু বলা হয় না — পুরো কথাটাই এখানে।' }
      },
      {
        id: 'tcq2', kind: 'mcq', topic: 'distributed-systems: Time without clocks',
        question: { en: 'Why does a single Lamport counter fail to detect a write conflict?', bn: 'একটিই Lamport কাউন্টার কেন লেখার দ্বন্দ্ব ধরতে পারে না?' },
        options: [{ en: 'unrelated events can share one number', bn: 'অসম্পর্কিত ঘটনার সংখ্যা এক হতে পারে' }, { en: 'it only counts seconds', bn: 'এটি সেকেন্ড গুনে' }, { en: 'it needs the wall clock too', bn: 'এর সঙ্গে wall clock লাগে' }, { en: 'it cannot go up', bn: 'এটি বাড়তে পারে না' }],
        hint: { en: "Equal numbers say nothing, they do not say equal cause.", bn: "সমান সংখ্যা কিছুই বলে না, সমান কারণ বলে না।" },
        answer: 0,
        explanation: { en: 'Equal numbers mean “cannot tell”, and the counter has no way to say “neither caused the other” — vector clocks add one entry per node for that.', bn: 'সমান সংখ্যা মানে “বোঝা যাচ্ছে না”, আর কোনোটিই অন্যটির কারণ নয়—এটি বলার জায়গা কাউন্টারে নেই; তাই vector clock প্রতি নোডের একটি ঘর যোগ করে।' }
      },
      {
        id: 'tcq3', kind: 'mcq', topic: 'distributed-systems: Time without clocks',
        question: { en: 'A VM resumes from a snapshot with its wall clock two hours behind. Which design survives?', bn: 'snapshot থেকে ফেরা VM-এর wall clock দুই ঘণ্টা পেছনে। কোন নকশা টিকে থাকে?' },
        options: [{ en: 'leases counted down on a monotonic clock', bn: 'monotonic ঘড়িতে গোনা lease' }, { en: 'leases comparing Date.now() to a stored start', bn: 'Date.now() কে জমা রাখা শুরুর সঙ্গে মাপা lease' }, { en: 'a longer 30-second lease', bn: '৩০ সেকেন্ডের বদলে লম্বা lease' }, { en: 'checking the clock once at boot', bn: 'বুটে একবার ঘড়ি দেখা' }],
        hint: { en: "Ask which clock cannot move backwards.", bn: "কোন ঘড়ি পেছনে যেতে পারে না, সেটি ভাবুন।" },
        answer: 0,
        explanation: { en: 'A monotonic counter only moves forward, so expiry stays true across a jump; stored wall-clock arithmetic goes negative and hands out two leaders.', bn: 'monotonic কাউন্টার শুধু এগোয়, লাফেও শেষ হওয়ার হিসাব সত্যি থাকে; জমা রাখা ঘড়ির বিয়োগ ঋণাত্মক হয়ে দুজন নেতা বানায়।' }
      },
      {
        id: 'tcq4', kind: 'mcq', topic: 'distributed-systems: Time without clocks',
        question: { en: 'What does a hybrid logical clock try to keep?', bn: 'hybrid logical clock কী ধরে রাখার চেষ্টা করে?' },
        options: [{ en: 'causality and a close-to-wall-clock value', bn: 'causality আর ঘড়ির কাছাকাছি মান' }, { en: 'exact NTP sync', bn: 'নিখুঁত NTP সিঙ্ক' }, { en: 'one counter per node', bn: 'প্রতি নোডে একটি করে কাউন্টার' }, { en: 'zero message overhead', bn: 'শূন্য বার্তার খরচ' }],
        hint: { en: "Physical time plus a tiebreaker for collisions.", bn: "physical time, আর মিলে গেলে এক টাই-ব্রেকার।" },
        answer: 0,
        explanation: { en: 'It takes the physical time as the base and adds a logical tiebreaker when the clock goes backwards or two stamps collide, so rows sort like timestamps and order like a counter.', bn: 'ভিত্তি হিসেবে physical time নেয়, ঘড়ি পেছনে গেলে বা দুটি ছাপ মিলে গেলে logical অংশটি টাই-ব্রেকার যোগ করে — তাই সারি timestamp-এর মতো সাজে, কাউন্টারের মতো ক্রম মানে।' }
      }
    ]
  }
};
