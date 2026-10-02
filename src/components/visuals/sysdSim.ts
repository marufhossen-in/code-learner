// The envelope ledger: system design's first discipline. One disciplined
// multiplication or division per row, ten million DAUs down to rack counts.
// Every scene is the same walk: seed → the day-total → per-second pulse →
// peak halo → headroom covenant → the physical verdict (boxes, disks, Mbps,
// cache nodes). Digits are pre-locked in each row and verified by the test
// suite; the lab paints the steps one row at a time.

export type SceneKey = 'traffic' | 'storage' | 'bandwidth' | 'memory';

export interface LedgerRow {
  label: { en: string; bn: string };
  value: number;
  unit: string;
  fmt: string;
  note: { en: string; bn: string };
}

export interface SdStep {
  rows: LedgerRow[];
  focus: number; // the row that just landed
  msg: { en: string; bn: string };
}

const r2 = (v: number) => Math.round(v * 100) / 100;

const row = (
  labelEn: string,
  labelBn: string,
  value: number,
  unit: string,
  fmt: string,
  noteEn: string,
  noteBn: string,
): LedgerRow => ({
  label: { en: labelEn, bn: labelBn },
  value: r2(value),
  unit,
  fmt,
  note: { en: noteEn, bn: noteBn },
});

export const SCENES: Record<SceneKey, { title: { en: string; bn: string }; arc: { en: string; bn: string } }> = {
  traffic: {
    title: { en: '🚦 Traffic ledger', bn: '🚦 ট্রাফিক খাতা' },
    arc: {
      en: 'DAU → requests/day → QPS → peak → the rack: the spine of every architecture interview.',
      bn: 'DAU → দৈনিক-রিকোয়েস্ট → QPS → শিখর → র‍্যাক: প্রতি আর্কিটেকচার সাক্ষাৎকারের মেরুদণ্ড।',
    },
  },
  storage: {
    title: { en: '🗄️ Storage ledger', bn: '🗄️ স্টোরেজ খাতা' },
    arc: {
      en: 'Writes/day → GB/day → five-year mirror with replication — the disk side of the envelope.',
      bn: 'দৈনিক-লেখা → GB/দিন → রেপ্লিকেশনসহ পাঁচ-বছরের আয়না — খামের ডিস্ক-পৃষ্ঠা।',
    },
  },
  bandwidth: {
    title: { en: '🌊 Bandwidth ledger', bn: '🌊 ব্যান্ডউইথ খাতা' },
    arc: {
      en: 'Peak QPS × response weight → Mbps, then the CDN lifts 80% off the origin.',
      bn: 'শিখর-QPS × রেসপন্স-ওজন → Mbps, তারপর CDN তুলে নেয় অরিজিনের ৮০% বোঝা।',
    },
  },
  memory: {
    title: { en: '🧠 Memory ledger', bn: '🧠 মেমরি খাতা' },
    arc: {
      en: 'Working-set doctrine: cache the hot slice of daily citizens, cluster what won’t fit.',
      bn: 'ওয়ার্কিং-সেট মতবাদ: দৈনিক নাগরিকের গরম-অংশ ক্যাশে রাখুন, না-ঢুকলে ক্লাস্টার করুন।',
    },
  },
};

const trafficRows = (): LedgerRow[] => [
  row('DAU', 'দৈনিক-সক্রিয়-ব্যবহারকারী', 10_000_000, 'users', '10M', 'Ten million citizens check in daily.', 'দশ মিলিয়ন নাগরিক প্রতিদিন হাজিরা দেয়।'),
  row('× requests per user-day', '× ব্যবহারকারী-দিনপ্রতি রিকোয়েস্ট', 20, 'req/day', '×20', 'Twenty actions per day: reads plus writes, posts plus scrolls.', 'দিনে কুড়িটি কাজ: পড়া-লেখা, পোস্ট-স্ক্রল মিলে।'),
  row('= requests per day', '= দৈনিক রিকোয়েস্ট', 200_000_000, 'req/day', '200M', 'The first honest total: two hundred million summons a day.', 'প্রথম সৎ মোট: দিনে কুড়ি কোটি সমাহ্বান।'),
  row('÷ seconds per day', '÷ দিনপ্রতি সেকেন্ড', 86_400, 's/day', '86,400', 'The day is 86,400 seconds — keep 10⁵ as the mental gate.', 'দিনে ৮৬,৪০০ সেকেন্ড — 10⁵ গেইটরূপে মাথায় রাখুন।'),
  row('= average QPS', '= গড় QPS', 2_314.81, 'QPS', '≈ 2,315', 'Mental knife: 200M ÷ 10⁵ ≈ 2,000; ÷ 0.864 lifts it to ≈ 2,315.', 'মানসিক-ছুরি: 200M ÷ 10⁵ ≈ 2,000; ÷ 0.864 তুলে দেয় ≈ 2,315।'),
  row('× peak-to-average halo', '× শিখর-থেকে-গড় হ্যালো', 3, 'halo', '×3', 'Traffic breathes: supper-time peaks routinely triple the average.', 'ট্রাফিক শ্বাস নেয়: সন্ধ্যার শিখর নিয়মিত গড়ের তিনগুণ হয়।'),
  row('= peak QPS', '= শিখর QPS', 6_944.44, 'QPS', '≈ 6,944', 'The machine must answer ~7,000 per second without breaking.', 'যন্ত্রকে সেকেন্ডে ~৭,০০০ উত্তর দিতে হবে, ভাঙা ছাড়া।'),
  row('× headroom covenant', '× হেডরুম-চুক্তি', 2, 'covenant', '×2', 'Never size at 100%: the covenant doubles the ask before hardware enters.', 'কখনো ১০০%-এ মাপ নয়: হার্ডওয়্যার আসার আগেই চুক্তি চাহিদা দ্বিগুণ করে।'),
  row('÷ one box’s honest capacity', '÷ একটি বাক্সের সৎ সামর্থ্য', 1_000, 'QPS/box', '1,000', 'A modern stateless tier serves ~1,000 QPS per box.', 'আধুনিক স্টেটলেস-টিয়ার বাক্সপ্রতি ~১,০০০ QPS দেয়।'),
  row('⇒ the rack', '⇒ র‍্যাক', 13.89, 'machines', '≈ 14 boxes', '≈ 14 boxes for the request tier — the envelope’s first verdict.', 'রিকোয়েস্ট-টিয়ারে ≈ ১৪ বাক্স — খামের প্রথম রায়।'),
];

const storageRows = (): LedgerRow[] => [
  row('requests per day', 'দৈনিক রিকোয়েস্ট', 200_000_000, 'req/day', '200M', 'Borrowed from the traffic ledger — engines reuse certified rows.', 'ট্রাফিক-খাতা থেকে ধার — ইঞ্জিন সনদপ্রাপ্ত সারি পুনর্ব্যবহার করে।'),
  row('× write fraction', '× লেখা-ভগ্নাংশ', 0.05, 'writes', '5%', 'Five percent of the traffic carries state — the read-heavy vow.', 'ট্রাফিকের পাঁচ শতাংশ অবস্থা বহন করে — পাঠ-ভারী শপথ।'),
  row('= writes per day', '= দৈনিক লেখা', 10_000_000, 'writes/day', '10M', 'Ten million writes reach the journal every day.', 'দিনে এক কোটি লেখা জার্নালে পৌঁছায়।'),
  row('× bytes per write', '× লেখাপ্রতি বাইট', 1_000, 'bytes', '1KB', 'A post plus metadata ≈ 1KB — the unit coin of storage math.', 'একটি পোস্ট + মেটাডেটা ≈ 1KB — স্টোরেজ-গণিতের মুদ্রা।'),
  row('= storage per day', '= দৈনিক স্টোরেজ', 10_000_000_000, 'bytes/day', '10 GB/day', 'Ten gigabytes a day — ten million KB, once around the decimal track.', 'দিনে দশ গিগাবাইট — দশ মিলিয়ন KB, দশমিক-পথে এক চক্কর।'),
  row('× days per year', '× বছরপ্রতি দিন', 365, 'days', '×365', 'The journal never sleeps, not even for the holidays.', 'জার্নাল কখনো ঘুমায় না, ছুটিতেও নয়।'),
  row('= storage per year', '= বাৎসরিক স্টোরেজ', 3_650_000_000_000, 'bytes/year', '3.65 TB', 'Three and two-thirds terabytes per year of honest writes.', 'বছরে সোয়া-তিন টেরাবাইট সৎ লেখা।'),
  row('× retention horizon', '× ধারণ-সীমানা', 5, 'years', '×5y', 'The covenant runs five years out.', 'চুক্তি পাঁচ বছরের সীমানা পর্যন্ত চলে।'),
  row('= five-year corpus', '= পাঁচ-বছরের ভান্ডার', 18_250_000_000_000, 'bytes', '18.25 TB', 'Eighteen and a quarter terabytes before mirrors.', 'আয়নার আগে সাড়ে-আঠেরো টেরাবাইট।'),
  row('× replication factor', '× রেপ্লিকেশন-গুণক', 3, 'replicas', '×3', 'Three mirrors, or the first disk failure becomes the news.', 'তিনটি আয়না, নইলে প্রথম ডিস্ক-ব্যর্থতাই খবর হয়ে যায়।'),
  row('= provisioned storage', '= ব্যক্ত-স্থাপিত স্টোরেজ', 54_750_000_000_000, 'bytes', '54.75 TB', 'Fifty-four and three-quarters terabytes the rack must own.', 'চুয়ান্ন-দশমিক-সাত-পাঁচ টেরাবাইট র‍্যাককে মালিকানা নিতেই হবে।'),
  row('÷ per-disk capacity', '÷ ডিস্কপ্রতি ধারণ', 8_000_000_000_000, 'bytes/disk', '8 TB/disk', 'An 8-terabyte disk is the data-center’s standard brick.', 'আট-টেরাবাইট ডিস্ক ডেটা-সেন্টারের প্রচলিত ইট।'),
  row('⇒ disk count', '⇒ ডিস্ক-সংখ্যা', 6.84, 'disks', '≈ 7 disks', '≈ seven disks hold five mirrored years — plus spares by doctrine.', '≈ সাতটি ডিস্কে ধরে পাঁচ আয়নাকৃত বছর — মতবাদে অতিরিক্ত রাখুন।'),
];

const bandwidthRows = (): LedgerRow[] => [
  row('peak QPS', 'শিখর QPS', 6_944.44, 'QPS', '≈ 6,944', 'From the traffic ledger’s crest, halo included.', 'ট্রাফিক-খাতার শিখর থেকে, হ্যালোসহ।'),
  row('× bytes per response', '× রেসপন্সপ্রতি বাইট', 10_000, 'bytes', '10KB', 'A feed page with metadata ≈ 10KB on the wire.', 'মেটাডেটাসহ একটি ফিড-পাতা তারে ≈ 10KB।'),
  row('= bytes per second', '= সেকেন্ডপ্রতি বাইট', 69_444_400, 'B/s', '69.4 MB/s', '≈ sixty-nine megabytes per second at the peak window.', 'শিখর-বেলায় ≈ ঊনসত্তর মেগাবাইট প্রতি সেকেন্ড।'),
  row('× eight bits per byte', '× বাইটপ্রতি আট বিট', 8, 'bits', '×8', 'The wire counts in bits, the ledger in bytes: × 8.', 'তার গোনে বিট, খাতা গোনে বাইট: × 8।'),
  row('= link demand', '= লিংক-চাহিদা', 555_555_200, 'bps', '≈ 556 Mbps', 'Half a gigabit per second of egress at the peak.', 'শিখরে সেকেন্ডে অর্ধ-গিগাবিট ইগ্রেস।'),
  row('− CDN offload', '− CDN-ছাড়', 0.8, 'fraction', '80%', 'The CDN serves 80% from the edge — statics and hot feeds.', 'CDN প্রান্ত থেকে ৮০% পরিবেশন করে — স্ট্যাটিক ও গরম ফিড।'),
  row('⇒ origin egress', '⇒ অরিজিন-ইগ্রেস', 111_111_040, 'bps', '≈ 111 Mbps', 'One hundred eleven megabits left for the origin link.', 'অরিজিন-লিংকের জন্য বাকি একশো-এগারো মেগাবিট।'),
];

const memoryRows = (): LedgerRow[] => [
  row('daily active users', 'দৈনিক সক্রিয় ব্যবহারকারী', 10_000_000, 'users', '10M', 'The census, again — every ledger starts at citizens.', 'জনগণনা, আবার — প্রতি খাতা শুরু হয় নাগরিক দিয়ে।'),
  row('× hot working-set fraction', '× গরম ওয়ার্কিং-সেট ভগ্নাংশ', 0.2, 'fraction', '20%', 'The 80/20 doctrine: one citizen in five is hot within any hour.', '৮০/২০ মতবাদ: যে-কোনো ঘণ্টায় পাঁচে এক নাগরিক গরম।'),
  row('= hot profiles', '= গরম প্রোফাইল', 2_000_000, 'profiles', '2M', 'Two million profiles must answer at memory speed.', 'দুই মিলিয়ন প্রোফাইল মেমরি-গতিতে উত্তর দিতে বাধ্য।'),
  row('× bytes per cached profile', '× ক্যাশকৃত-প্রোফাইলপ্রতি বাইট', 1_000, 'bytes', '1KB', 'One kilobyte of profile, session flags and unread counters.', 'এক কিলোবাইট প্রোফাইল, সেশন-ফ্ল্যাগ ও অনপঠিত-কাউন্টার।'),
  row('= hot-set bytes', '= গরম-সেট বাইট', 2_000_000_000, 'bytes', '2 GB', 'Two gigabytes of honest working set.', 'দুই গিগাবাইট খাঁটি ওয়ার্কিং-সেট।'),
  row('× index and TTL tax', '× ইনডেক্স ও TTL কর', 1.6, 'tax', '×1.6', 'Sixty percent overhead: hash maps, TTL clocks, eviction lists.', 'ষাট শতাংশ খরচ: হ্যাশ-ম্যাপ, TTL ঘড়ি, এভিকশন-তালিকা।'),
  row('= cache memory', '= ক্যাশ-মেমরি', 3_200_000_000, 'bytes', '3.2 GB', 'Three point two gigabytes the cache must breathe within.', 'তিন-দশমিক-দুই গিগাবাইটের মধ্যে ক্যাশকে শ্বাস নিতে হবে।'),
  row('⇒ redis verdict', '⇒ redis-রায়', 8_000_000_000, 'bytes/node', 'one 8 GB node', 'One 8GB Redis primary holds the hot set twice over — plus one replica for HA.', 'একটি 8GB Redis-প্রাইমারি গরম-সেট দ্বিগুণ ধারণ করে — HA-তে আরেকটি রেপ্লিকা।'),
];

const SOURCES: Record<SceneKey, () => LedgerRow[]> = {
  traffic: trafficRows,
  storage: storageRows,
  bandwidth: bandwidthRows,
  memory: memoryRows,
};

const MSGS: Record<SceneKey, { en: string; bn: string }[]> = {
  traffic: [
    { en: 'Seed the ledger: the daily-active census.', bn: 'খাতা বুনিয়াদ: দৈনিক-সক্রিয়-জনগণনা।' },
    { en: 'Multiply by the twenty-visit habit.', bn: 'কুড়িবার-আসা অভ্যাসে গুণ করুন।' },
    { en: 'The day-total: two hundred million summons.', bn: 'দিন-মোট: কুড়ি কোটি সমাহ্বান।' },
    { en: 'Cross the 86,400-second gate.', bn: '৮৬,৪০০-সেকেন্ড গেইট পেরোন।' },
    { en: 'Average QPS ≈ 2,315 — the machine’s resting pulse.', bn: 'গড় QPS ≈ 2,315 — যন্ত্রের বিশ্রাম-নাড়ি।' },
    { en: 'Triple it: the breathing halo.', bn: 'তিনগুণ করুন: শ্বাস-হ্যালো।' },
    { en: 'Peak ≈ 6,944 — the sprint number.', bn: 'শিখর ≈ 6,944 — স্প্রিন্ট-সংখ্যা।' },
    { en: 'Pay the headroom covenant — double the ask.', bn: 'হেডরুম-চুক্তি শোধ দিন — চাহিদা দ্বিগুণ।' },
    { en: 'Price one honest box at 1,000 QPS.', bn: 'একটি সৎ বাক্সের দাম ১,০০০ QPS।' },
    { en: 'The envelope’s verdict: ≈ 14 boxes, N+1 honored.', bn: 'খামের রায়: ≈ ১৪ বাক্স, N+1 মান্য।' },
  ],
  storage: [
    { en: 'Borrow the certified day-total.', bn: 'সনদপ্রাপ্ত দিন-মোট ধার নিন।' },
    { en: 'Only five percent of it writes.', bn: 'তার মাত্র পাঁচ শতাংশ লেখে।' },
    { en: 'Ten million writes reach the journal daily.', bn: 'দিনে এক কোটি লেখা জার্নালে পৌঁছায়।' },
    { en: 'Each write weighs a kilobyte.', bn: 'প্রতি লেখার ওজন এক কিলোবাইট।' },
    { en: 'Ten gigabytes a day — the daily drip.', bn: 'দিনে দশ গিগাবাইট — দৈনিক-ফোঁটা।' },
    { en: 'The journal never sleeps: × 365.', bn: 'জার্নাল কখনো ঘুমায় না: × 365।' },
    { en: '3.65 TB a year of honest writes.', bn: 'বছরে 3.65 TB সৎ লেখা।' },
    { en: 'Stretch the horizon: five years out.', bn: 'সীমানা টানুন: পাঁচ বছর দূরে।' },
    { en: '18.25 TB before any mirror is bought.', bn: 'কোনো আয়না কেনার আগে 18.25 TB।' },
    { en: 'Triple it: three mirrors or the news.', bn: 'তিনগুণ: তিন আয়না, নইলে সংবাদপত্রে নাম।' },
    { en: '54.75 TB the rack must own.', bn: '54.75 TB র‍্যাককে মালিক হতেই হবে।' },
    { en: 'Price one brick at 8 TB.', bn: 'একটি ইটের দাম ধরুন 8 TB।' },
    { en: '≈ seven disks — plus spares by doctrine.', bn: '≈ সাতটি ডিস্ক — মতবাদে অতিরিক্ত রাখুন।' },
  ],
  bandwidth: [
    { en: 'Start from the crest: peak QPS, halo included.', bn: 'শিখর থেকে শুরু: হ্যালোসহ শিখর QPS।' },
    { en: 'Each answer weighs ten kilobytes.', bn: 'প্রতি উত্তরের ওজন দশ কিলোবাইট।' },
    { en: '69.4 MB/s leaves the rack at peak.', bn: 'শিখরে র‍্যাক ছাড়ে 69.4 MB/s।' },
    { en: 'The wire counts bits: × 8.', bn: 'তার গোনে বিট: × 8।' },
    { en: 'Half a gigabit of egress demand.', bn: 'অর্ধ-গিগাবিট ইগ্রেস চাহিদা।' },
    { en: 'The CDN lifts four-fifths from the edge.', bn: 'CDN প্রান্ত থেকে তুলে নেয় পাঁচের-চার।' },
    { en: '≈ 111 Mbps remains for the origin — one fat pipe suffices.', bn: '≈ 111 Mbps বাকি থাকে অরিজিনে — একটি মোটা পাইপ যথেষ্ট।' },
  ],
  memory: [
    { en: 'Every ledger starts at citizens.', bn: 'প্রতি খাতা শুরু হয় নাগরিক দিয়ে।' },
    { en: 'One in five is hot within the hour.', bn: 'পাঁচে এক নাগরিক ঘণ্টার ভেতর গরম।' },
    { en: 'Two million profiles answer at memory speed.', bn: 'দুই মিলিয়ন প্রোফাইল মেমরি-গতিতে উত্তর দেয়।' },
    { en: 'A kilobyte each — flags, counters, names.', bn: 'প্রতিটিতে কিলোবাইট — ফ্ল্যাগ, কাউন্টার, নাম।' },
    { en: 'The honest working set: 2 GB.', bn: 'খাঁটি ওয়ার্কিং-সেট: 2 GB।' },
    { en: 'Pay the index-and-TTL tax: × 1.6.', bn: 'ইনডেক্স-ও-TTL কর দিন: × 1.6।' },
    { en: 'The cache must breathe within 3.2 GB.', bn: 'ক্যাশকে শ্বাস নিতে হবে 3.2 GB-র ভেতর।' },
    { en: 'Verdict: one 8 GB primary holds it twice over, plus replica.', bn: 'রায়: একটি 8 GB প্রাইমারি দ্বিগুণ ধারণ করে, সাথে রেপ্লিকা।' },
  ],
};

export function simulate(scene: SceneKey): SdStep[] {
  const rows = SOURCES[scene]();
  return rows.map((_, i) => ({
    rows: rows.slice(0, i + 1),
    focus: i,
    msg: MSGS[scene][i],
  }));
}
