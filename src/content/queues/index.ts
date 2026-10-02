import type { TechHub } from '../../lib/types';
import { fifoThinkingLesson } from './lessons/fifo-thinking';
import { queuesAtWorkLesson } from './lessons/queues-at-work';
import { theRingHotelLesson } from './lessons/the-ring-hotel';
import { theTwoTrayChanceryLesson } from './lessons/the-two-tray-chancery';
import { thePriorityThroneLesson } from './lessons/the-priority-throne';
import { theSlidingObservatoryLesson } from './lessons/the-sliding-observatory';
import { theMessageConsulateLesson } from './lessons/the-message-consulate';
import { theBfsTideLesson } from './lessons/the-bfs-tide';
import { theArrivalPanoramaLesson } from './lessons/the-arrival-panorama';

export const queueHub: TechHub = {
  slug: 'queues' as never,
  name: 'Queues',
  icon: '🚶',
  tagline: {
    en: 'The fairness machine: two doors, one vow, and the pointer pair that keeps both O(1).',
    bn: 'ন্যায়বিচার-যন্ত্র: দুই দরজা, এক শপথ, আর পয়েন্টার-জোড়া যা দুটোকেই রাখে O(1)।',
  },
  intro: {
    en: 'Every fast talker who has ever met a slow listener has re-invented the queue. It is the stack’s mirror twin — same ingredients, opposite policy — and the canonical answer whenever service must honour the wait, bursts must be absorbed, or the producer and consumer must be allowed to keep different clocks without drowning each other.',
    bn: 'দ্রুত-বক্তা যতবার মন্থর-শ্রোতার মুখোমুখি হয়েছে, ততবার কিউ পুনরাবিষ্কৃত হয়েছে। এটি স্ট্যাকের আয়না-যমজ — একই উপাদান, বিপরীত নীতি — আর মূল উত্তর যখনই পরিবেশনকে অপেক্ষার মর্যাদা দিতে হয়, ঢল শোষণ করতে হয়, বা উৎপাদক-ভোক্তাকে ভিন্ন ঘড়িতে টিকে থাকতে হয় পরস্পরকে না-ডুবিয়ে।',
  },
  lessons: [fifoThinkingLesson, queuesAtWorkLesson, theRingHotelLesson, theTwoTrayChanceryLesson, thePriorityThroneLesson, theSlidingObservatoryLesson, theMessageConsulateLesson, theBfsTideLesson, theArrivalPanoramaLesson],
  references: [
    {
      group: { en: 'The two doors', bn: 'দুই দরজা' },
      items: [
        { term: 'enqueue(x)', def: { en: 'Admit x at the back door only. O(1) with a walking tail pointer.', bn: 'কেবল পেছনের দরজায় x ভর্তি। চলমান tail পয়েন্টারে O(1)।' } },
        { term: 'dequeue()', def: { en: 'Dismiss the front citizen — the longest waiter is always next. Underflows on empty.', bn: 'সামনের নাগরিক বিদায় — সর্বদাই পরের দীর্ঘতম-অপেক্ষাকারী। খালিতে আন্ডারফ্লো।' } },
        { term: 'peek() / front()', def: { en: 'Read who is next without serving. Never touches the corridor.', bn: 'কে পরের, পরিবেশন ছাড়া পড়া। করিডর স্পর্শ করে না কখনোই।' } },
        { term: 'isEmpty() / size()', def: { en: 'isEmpty guards both protocols; size answers for the whole corridor.', bn: 'isEmpty দুই প্রোটোকলেরই রক্ষী; size উত্তর দেয় পুরো করিডরের হয়ে।' } },
      ],
    },
    {
      group: { en: 'Shapes in production', bn: 'প্রোডাকশনের আকৃতিগুলো' },
      items: [
        { term: 'Ring buffer', def: { en: 'Fixed chairs + modulo fingers; head==tail is the full/empty riddle needing a witness.', bn: 'স্থির চেয়ার + ভাগশেষ-আঙুল; head==tail পূর্ণ/খালি ধাঁধা, সাক্ষী লাগেই।' } },
        { term: 'Two-stack queue', def: { en: 'LIFO∘LIFO = FIFO via the lazy pour — amortized O(1), disciplines compose.', bn: 'LIFO∘LIFO = FIFO অলস ঢালাইয়ে — অ্যামর্টাইজড O(1), শৃঙ্খলা সংযুক্ত হয়।' } },
        { term: 'Bounded queue', def: { en: 'A land deed + a border policy (block / drop / overwrite) = the anti-epidemic of backend.', bn: 'খতিয়ান + সীমান্ত-নীতি (অবরোধ/ফেলা/পুনর্লেখন) = ব্যাকএন্ডের মহামারি-প্রতিশেধক।' } },
        { term: 'Priority queue', def: { en: 'Same doors, rewritten selection law — the loudest first, FIFO demoted to tiebreak.', bn: 'সেই দরজা, পুনর্লিখিত নির্বাচন-বিধান — জোরালো আগে, FIFO নামে টাইব্রেকারে।' } },
      ],
    },
    {
      group: { en: 'Working vocabulary', bn: 'কর্মময় শব্দভাণ্ডার' },
      items: [
        { term: 'Back-pressure', def: { en: 'Demand showing as pressure on the producer, not debt on the medium.', bn: 'চাহিদা চাপ হয়ে উৎপাদকের ওপর, মাধ্যমের ওপর ঋণ হয়ে নয়।' } },
        { term: 'Head-of-line blocking', def: { en: 'One heavy front citizen pins everyone behind it — the fairness tax of strict FIFO.', bn: 'এক ভারী সম্মুখ-নাগরিক পেছনের সবাইকে আটকে রাখে — কঠোর FIFO-র ন্যায়-কর।' } },
        { term: 'Starvation', def: { en: 'A low-priority citizen waiting forever; an equilibrium of policy, answered by design moves, not debugging.', bn: 'নিচু-অগ্রাধিকারের নাগরিকের চির-অপেক্ষা; নীতির ভারসাম্য, উত্তর নকশা-চালে, ডিবাগিংয়ে নয়।' } },
        { term: 'Amortization', def: { en: 'Two-stack pays 2 moves per item instead of 1 per step — accounting, not mercy.', bn: 'দ্বি-স্ট্যাক দেয় উপাদানপ্রতি ২ সরানো, ধাপপ্রতি ১ নয় — এটা হিসাব-বিদ্যা, দয়া নয়।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'Two doors, one vow', bn: 'দুই দরজা, এক শপথ' }, detail: { en: 'FIFO as structural fairness; enqueue/dequeue/peek; the pointer pair that beats array.shift(); underflow guard.', bn: 'কাঠামোগত ন্যায় হিসেবে FIFO; enqueue/dequeue/peek; array.shift()-কে হারানো পয়েন্টার-জোড়া; আন্ডারফ্লো-রক্ষী।' } },
    { stage: 2, title: { en: 'Fixed land', bn: 'স্থির জমি' }, detail: { en: 'Ring buffers: modulo pointers, the full/empty riddle, three witness schemes (sacrificed chair, count, wide index).', bn: 'রিং-বাফার: ভাগশেষ-পয়েন্টার, পূর্ণ/খালি ধাঁধা, তিন সাক্ষী-পদ্ধতি (ত্যাগ-চেয়ার, গণনক, প্রশস্ত সূচক)।' } },
    { stage: 3, title: { en: 'Borders & bargains', bn: 'সীমানা ও সওদা' }, detail: { en: 'Bounded policies (block/drop/overwrite), back-pressure as upstream telemetry, the two-stack machine, priority with starvation defense.', bn: 'সীমাবদ্ধ নীতি (অবরোধ/ফেলা/পুনর্লেখন), ঊর্দ্ব-টেলিমেট্রি হিসেবে ব্যাক-প্রেশার, দ্বি-বন্দনী যন্ত্র, অনাহার-প্রতিরক্ষাসহ অগ্রাধিকার।' } },
    { stage: 4, title: { en: 'The dialect test', bn: 'উপভাষা-পরীক্ষা' }, detail: { en: 'BFS, schedulers, spools, message brokers — name the dialect, choose the structure, defend the complexity ledger.', bn: 'BFS, শিডিউলার, স্পুল, মেসেজ-ব্রোকার — উপভাষার নাম বলুন, কাঠামো বাছুন, জটিলতা-খাতার পক্ষে যুক্তি দিন।' } },
  ],
  projects: [
    {
      title: { en: 'Print-Sprint: the spool simulator', bn: 'প্রিন্ট-স্প্রিন্ট: স্পুল-সিমুলেটর' },
      brief: { en: 'Model a print shop: jobs arrive with pages arrive-rate faster than the printer’s serve-rate. Render the queue visually, print a live dashboard (depth, served, longest-wait), then answer: what scan or restore arrives when the printer jams mid-queue?', bn: 'ছাপাখানার মডেল করুন: কাজ আসে প্রিন্টারের পরিবেশন-গতির চেয়ে দ্রুত। কিউ চিত্রায়িত করুন, লাইভ ড্যাশবোর্ড ছাপান (গভীরতা, পরিবেশিত, দীর্ঘতম-অপেক্ষা) — তারপর উত্তর দিন: সারি-মাঝখানে প্রিন্টার জ্যাম হলে কী ঘটে?' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'RingTone: the bounded event mixer', bn: 'রিংটোন: সীমাবদ্ধ ইভেন্ট-মিক্সার' },
      brief: { en: 'A CAP=16 ring absorbs keyboard, timer and network events into one pipeline. Implement all three border policies as a switch — block, drop (with counter), overwrite — and record which one your synth app prefers for each event class.', bn: 'CAP=১৬ রিং-এ কিবোর্ড, টাইমার ও নেটওয়ার্ক ইভেন্ট মেশিন এক পাইপলাইনে। তিন সীমান্ত-নীতিই সুইচে বাস্তবায়ন করুন — অবরোধ, ফেলা (গণনকসহ), পুনর্লেখন — আর লিপিবদ্ধ করুন আপনার সিন্থ অ্যাপ কোন শ্রেণিতে কোনটি পছন্দ করে।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'TriageDesk: priority with escape hatches', bn: 'ট্রায়াজডেস্ক: পলায়নপথসহ অগ্রাধিকার' },
      brief: { en: 'Build the ER waiting room: severities 1–9, FIFO within equal severity. Then implement aging (pri += 1 per 10 ticks) and a reserved floor lane, and graph the worst-case wait of the quietest class before/after — an autopsy in charts.', bn: 'জরুরি-বিভাগের অপেক্ষাগার বানান: তীব্রতা ১–৯, সম-তীব্রতায় FIFO। এরপর বাস্তবায়ন করুন বার্ধক্য (প্রতি ১০ টিকে pri += 1) ও সংরক্ষিত মেঝে-লেন — আর চার্টে আঁকুন নীরবতম শ্রেণির সর্বোচ্চ-অপেক্ষা আগে/পরে — চিত্রে ময়নাতদন্ত।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Name the border policy at construction time: block, drop, or overwrite. “Later” is the name of the OOM killer’s calendar.', bn: 'নির্মাণ-মুহূর্তেই সীমান্ত-নীতির নাম লিখুন: অবরোধ, ফেলা, না পুনর্লেখন। “পরে” হলো OOM-কিলারের ক্যালেন্ডারের নাম।' },
    { en: 'Never reach shift()/pop-front-by-move in hot loops; walk a head index or hold both pointers. Front-door changes are pointer moves, not citizen relocations.', bn: 'উত্তপ্ত লুপে কখনো shift()/সরানো-পপ নয়; চালান head সূচক নয়তো দুই পয়েন্টারই ধরুন। দরজা-পরিবর্তন মানে পয়েন্টার-সরানো, নাগরিক-স্থানান্তর নয়।' },
    { en: 'Alarm on queue (depth) — it is the vanguard metric that sees the month coming.', bn: 'অ্যালার্ম বসান কিউ-গভীরতায় — এটিই অগ্রগামী মেট্রিক, যা মাসটা আগেই দেখে নেয়।' },
    { en: 'Count every accepted loss (dropped++, overwritten++). Silence is the worst border policy ever invented.', bn: 'প্রতি গৃহীত ক্ষতি গণনা করুন (dropped++, overwritten++)। নীরবতা ইতিহাসের সবচেয়ে খারাপ সীমান্ত-নীতি।' },
    { en: 'If you write “priority queue”, you must also write the anti-starve clause: aging, lanes, or deadlines.', bn: '“প্রায়োরিটি কিউ” লিখলেই লিখতে হবে অনাহার-প্রতিরোধী ধারা: বার্ধক্য, লেন, না সময়সীমা।' },
    { en: 'Test the full/empty riddle frame explicitly: head==tail with all chairs occupied, then head==tail with none.', bn: 'ধাঁধা-ফ্রেমটি স্পষ্টভাবে পরীক্ষা করুন: সব চেয়ার-ভরা অবস্থায় head==tail, তারপর কিছু না-থাকলেও head==tail।' },
  ],
  interview: [
    {
      q: { en: 'Queue vs stack — one sentence.', bn: 'কিউ বনাম স্ট্যাক — এক বাক্যে।' },
      a: { en: 'Two specialized doors instead of one sealed end: the crown moves from the newest arrival to the longest waiter — same ingredients, opposite policy, and the policy IS the structure.', bn: 'এক সিলপ্রান্তের বদলে দুই বিশেষায়িত দরজা: মুকুট চলে নবীনতমের মাথা থেকে দীর্ঘতম-অপেক্ষাকারীর মাথায় — একই উপাদান, বিপরীত নীতি, আর নীতিটিই কাঠামো।' },
    },
    {
      q: { en: 'Implement a queue with two stacks.', bn: 'দুই স্ট্যাক দিয়ে কিউ বাস্তবায়ন করুন।' },
      a: { en: 'Inbox takes enqueues; outbox serves dequeues; pour only when outbox is dry. Every item crosses exactly twice in its life, so serve is amortized O(1). The laziness is the correctness — pouring mid-outbox re-reverses the timeline.', bn: 'inbox-এ enqueue; outbox থেকে dequeue; ঢালাই কেবল outbox শুকনো হলে। প্রতি উপাদান জীবনে হুবহু দুইবার পথ পার হয়, ফলে পরিবেশন অ্যামর্টাইজড O(1)। অলসতাটাই সঠিকতা — outbox কথাবলা অবস্থায় ঢালাই মানে টাইমলাইন পুনর্বিবর্ণ।' },
    },
    {
      q: { en: 'How does a ring buffer tell FULL from EMPTY?', bn: 'রিং-বাফার পূর্ণ চেনে খালি থেকে কীভাবে?' },
      a: { en: 'On pointers alone, it cannot — both faces are head==tail. Park a witness: sacrifice one slot (full at tail+1 ≡ head), keep a count field, or use unbounded wrap-counts with masking. Where the witness parks is a design decision.', bn: 'কেবল পয়েন্টার দিয়ে পারে না — দুই মুখই head==tail। সাক্ষী রাখুন: একটি চেয়ার ত্যাগ (tail+1 ≡ head হলে পূর্ণ), গণনক ফিল্ড, অথবা মাস্কিং-সহ অসীম আবর্ত-গণনা। সাক্ষী কোথায় থাকে তা-ই নকশা-সিদ্ধান্ত।' },
    },
    {
      q: { en: 'What is back-pressure and why is it a feature?', bn: 'ব্যাক-প্রেশার কী, আর ফিচার কেন?' },
      a: { en: 'It is demand registering as pressure on the producer instead of debt on the medium. A bounded queue saying “wait/drop/overwrite” at the door is the cheapest upstream telemetry ever built; the unbounded alternative outsources the same sentence to the OOM killer.', bn: 'চাহিদা চাপ হয়ে যায় উৎপাদকের ওপর, মাধ্যমের ওপর ঋণ হয়ে নয়। সীমাবদ্ধ কিউ-র দরজায় বলা “অপেক্ষা/ফেলা/পুনর্লেখন” হলো নির্মিত সস্তা-তম ঊর্দ্ব-টেলিমেট্রি; সীমাহীন বিকল্পটি সেই একই বাক্য OOM-কিলার দিয়ে বলায়।' },
    },
  ],
  realWorld: [
    { en: 'Kafka / SQS / RabbitMQ — the planet’s message backbones are queues with persistence, partitions, and this lesson’s doors.', bn: 'Kafka / SQS / RabbitMQ — ভূগোলের মেসেজ-মেরুদণ্ড হলো পার্সিস্টেন্স, পার্টিশনসহ কিউ — এই লেসনের দরজাগুলোতেই।' },
    { en: 'Browser event-loop task queues — one FIFO discipline per lane, arbitrating input vs timers vs paint.', bn: 'ব্রাউজার ইভেন্ট-লুপ টাস্ক-কিউ — প্রতি করিডরে একটি FIFO, সালিসি করে ইনপুট বনাম টাইমার বনাম পেইন্ট।' },
    { en: 'Reactive Streams’ request(n) — back-pressure standardized as a Java type in 2017.', bn: 'Reactive Streams-এর request(n) — ২০১৭-এ জাভা-টাইপে প্রমিত ব্যাক-প্রেশার।' },
    { en: 'CPU schedulers: aging is the antique anti-starve clause still running on every core of your machine right now.', bn: 'CPU শিডিউলার: বার্ধক্য হলো সেই পুরনো অনাহার-ধারা, যা এই মুহূর্তেও আপনার মেশিনের প্রতি কোরে চলছে।' },
  ],
};
