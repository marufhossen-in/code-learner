import type { Hub } from '../../lib/types';
import { TheViewportAndTheMeasuringTapeLesson } from './lessons/the-viewport-and-the-measuring-tape';
import { TheFluidClothLesson } from './lessons/the-fluid-cloth';
import { BreakpointsAndTheFittingScheduleLesson } from './lessons/breakpoints-and-the-fitting-schedule';
import { BoxesThatBendLesson } from './lessons/boxes-that-bend';
import { ThePouringGridLesson } from './lessons/the-pouring-grid';
import { PicturesThatFitLesson } from './lessons/pictures-that-fit';
import { BeyondTheWidthLesson } from './lessons/beyond-the-width';
import { TheFittingVerdictLesson } from './lessons/the-fitting-verdict';

export const responsiveDesignHub: Hub = {
  slug: 'responsive-design',
  name: 'Responsive Web Design',
  icon: '📱',
  tagline: { en: 'The tailor’s own shop, learned room by room: the tape, the cloth, the schedule, the bench, the floor, the gallery, the door — and the exit verdict at the fitting’s end.', bn: 'দর্জির নিজ দোকান, ঘর ধরে শেখা: ফিতা, কাপড়, সূচি, bench, মেঝে, gallery, দরজা — আর fitting-শেষে exit রায়।' },
  intro: { en: 'THE TAPE READS HONEST (lesson 1): a responsive page is a promise with two clauses — an honest viewport that reports true inches, and garments measured to whatever room it reports — and the whole hub is the negotiation between that promise and every room built and unbuilt. THE CLOTH (lesson 2) stretches without stops: percentages resolving, bounds picking, type scaling between stops, shapes holding through loading. THE SCHEDULE (lesson 3) posts appointments where garments break: mobile-first climbs, range syntax, em stairs, rights beside widths. THE BENCH (lesson 4) bends single axes: basis suggesting, shares dividing, wrap multiplying, minima holding unless filed. THE FLOOR (lesson 5) pours two axes: auto-fit counting, minmax flooring, areas mapping, subgrid inheriting. THE GALLERY (lesson 6) hangs pictures per room: shelves stocked, reports honest, art directed, shapes reserved, loads mannered. THE DOOR (lesson 7) crosses beyond width: parents declaring, fluids reading cqw, rights holding past rooms, hands sizing, tables reflowing. THE VERDICT (lesson 8) files strategy as habits: fluids sizing, stops reshaping, parents tailoring, rights overruling, budgets binding — and the graduate leaves with the tape, not a device list.', bn: 'ফিতা সৎ পড়ে (পাঠ ১): responsive পাতা দুই-ধারার প্রতিশ্রুতি — সত্যি ইঞ্চি-জানানো সৎ viewport, আর তার-বলা যেকোনো ঘরে মাপা পোশাক — আর পুরো hub ওই প্রতিশ্রুতি আর গড়া-অগড়া প্রতি ঘরের মাঝের দরকষাকষি। কাপড় (পাঠ ২) থামা ছাড়াই টানে: শতাংশ মিটানো, সীমা বাছা, থামার মাঝে type মাপা, load-জুড়ে আকৃতি ধরা। সূচি (পাঠ ৩) পোশাক-ভাঙা appointment টাঙায়: mobile-first চড়াই, range বানান, em সিঁড়ি, চওড়া-পাশে অধিকার। bench (পাঠ ৪) এক অক্ষ বাঁকায়: basis পরামর্শ, ভাগ বিভাজন, wrap গুণন, file না-হলে সর্বনিম্ন ধরা। মেঝে (পাঠ ৫) দুই অক্ষ ঢালে: auto-fit গোনা, minmax মেঝে, এলাকা map, subgrid উত্তরাধিকার। gallery (পাঠ ৬) ঘর-প্রতি ছবি টাঙায়: তাক মজুত, প্রতিবেদন সৎ, শিল্প নির্দেশিত, আকৃতি সংরক্ষিত, load ভদ্র। দরজা (পাঠ ৭) চওড়া পার হয়: parent ঘোষণা, তরল cqw পড়া, ঘর-পার অধিকার থাকা, হাত মাপা, table পুনঃপ্রবাহ। রায় (পাঠ ৮) কৌশল অভ্যাসে file করে: তরল মাপা, থামা পুনর্গঠন, parent সেলাই, অধিকার বাতিল, বাজেট বাঁধা — আর graduate device তালিকা না ফিতা নিয়ে বেরোয়।' },
  roadmap: [
    {
      title: { en: 'Stage 1 — The tape, the cloth, the schedule', bn: 'ধাপ ১ — ফিতা, কাপড়, সূচি' },
      items: [
        { en: 'The viewport and the measuring tape: honest inches, split pixels, containers, riding keyboards (lesson 1)', bn: 'viewport আর ফিতা: সৎ ইঞ্চি, ভাগ pixel, container, চড়া keyboard (পাঠ ১)' },
        { en: 'The fluid cloth: percentage resolution, live bounds, two-master type, held shapes (lesson 2)', bn: 'তরল কাপড়: শতাংশ মিটানো, live সীমা, দুই-মনিব type, ধরা আকৃতি (পাঠ ২)' },
        { en: 'Breakpoints and the fitting schedule: mobile-first climbs, ranges, em stairs, rights beside (lesson 3)', bn: 'breakpoint আর fitting সূচি: mobile-first চড়াই, range, em সিঁড়ি, পাশে অধিকার (পাঠ ৩)' },
        { en: 'Hub law one: measure honest, stretch fluid, stop at content — the room first, the fittings after', bn: 'hub-এর প্রথম আইন: সৎ মাপো, তরল টানো, বিষয়বস্তুতে থামো — আগে ঘর, পরে fitting' },
      ],
    },
    {
      title: { en: 'Stage 2 — The bench, the floor, the gallery', bn: 'ধাপ ২ — bench, মেঝে, gallery' },
      items: [
        { en: 'Boxes that bend: flex suggestions, weighted shares, wrap, filed minima (lesson 4)', bn: 'বাঁকা বাক্স: flex পরামর্শ, ওজন-ভাগ, wrap, file-সর্বনিম্ন (পাঠ ৪)' },
        { en: 'The pouring grid: auto-fit counting, floored fractions, areas, subgrid lines (lesson 5)', bn: 'ঢালা grid: auto-fit গোনা, মেঝে-ভগ্নাংশ, এলাকা, subgrid লাইন (পাঠ ৫)' },
        { en: 'Pictures that fit: honest sizes, directed art, reserved shapes, mannered loads (lesson 6)', bn: 'খাপ-ছবি: সৎ sizes, নির্দেশিত শিল্প, সংরক্ষিত আকৃতি, ভদ্র load (পাঠ ৬)' },
        { en: 'Hub law two: bend one axis, pour two, hang per room — suggestions deciding, maps redrawing', bn: 'hub-এর দ্বিতীয় আইন: এক অক্ষ বাঁকাও, দুই ঢালো, ঘর-প্রতি টাঙাও — পরামর্শ নির্ণয়, map পুনঃআঁকা' },
      ],
    },
    {
      title: { en: 'Stage 3 — The door and the verdict', bn: 'ধাপ ৩ — দরজা আর রায়' },
      items: [
        { en: 'Beyond width: container parents, cqw fluids, rights past rooms, touch and tables (lesson 7)', bn: 'চওড়ার ওপারে: container parent, cqw তরল, ঘর-পার অধিকার, স্পর্শ-table (পাঠ ৭)' },
        { en: 'The fitting verdict: fluids sizing, stops reshaping, budgets binding, matrices tried (lesson 8)', bn: 'fitting রায়: তরল মাপা, থামা পুনর্গঠন, বাজেট বাঁধা, ম্যাট্রিক্স চেষ্টা (পাঠ ৮)' },
        { en: 'The counterfactual page: one page refitted, one matrix filled, one verdict filed with a date', bn: 'counterfactual পাতা: এক পাতা পুনঃখাপ, এক ম্যাট্রিক্স ভরা, তারিখ-সহ এক রায় file-করা' },
        { en: 'Hub law three: parent patterns, honor rights, weigh bytes — habits filed, never wishes', bn: 'hub-এর তৃতীয় আইন: ছাঁচ parent করো, অধিকার মানো, byte ওজন করো — অভ্যাস file, ইচ্ছা কখনো না' },
      ],
    },
  ],
  lessons: [TheViewportAndTheMeasuringTapeLesson, TheFluidClothLesson, BreakpointsAndTheFittingScheduleLesson, BoxesThatBendLesson, ThePouringGridLesson, PicturesThatFitLesson, BeyondTheWidthLesson, TheFittingVerdictLesson],
  references: [],
  projects: [
    {
      title: { en: 'The Refitted Page: one page, every room', bn: 'পুনঃখাপ পাতা: এক পাতা, প্রতি ঘর' },
      brief: { en: 'Take any fixed-width page you own and refit it the way lessons one through six demand: meta viewport with a min() wrap; fluid clamp type with rem floors; mobile-first content stops in range syntax on em stairs; flex rails with filed minima and auto-fit grid counts; honest srcset sizes with AVIF-first picture direction and intrinsic reserves. Gate: 360/768/1440/zoomed all fitted, zero layout shift in the filmstrip, phones fetching small bytes — the page with its tape honest.', bn: 'তোমার মালিকানাধীন যেকোনো স্থির-চওড়া পাতা নাও আর পাঠ এক-থেকে-ছয়ের দাবি-মতো পুনঃখাপ করো: min() wrap-সহ meta viewport; rem মেঝেসহ তরল clamp type; em সিঁড়িতে range বানানে mobile-first বিষয়বস্তু থামা; file-সর্বনিম্নসহ flex rail আর auto-fit grid গোনা; AVIF-আগে picture নির্দেশনাসহ সৎ srcset sizes আর intrinsic সংরক্ষণ। ফাটক: 360/768/1440/zoom সব খাপ — filmstrip-শূন্য layout shift — ফোন ছোট byte আনে — ফিতা-সৎ পাতা।' },
    },
    {
      title: { en: 'The Certified Opening: matrix, budget, verdict', bn: 'প্রত্যয়িত খোলা: ম্যাট্রিক্স, বাজেট, রায়' },
      brief: { en: 'Take the refitted page and certify it the way lessons seven and eight demand: container-query cards fitting rail and hero parents; rights stack honored (motion, contrast, scheme, forced); 44px targets with disclosed menus and reflowed tables; byte budgets for pictures and fonts enforced; then try the full matrix — rooms × rights × hands — and file the dated verdict with per-cell stamps. Gate: thirty-six cells tried, budgets green in CI, no gadget-named stop anywhere — the opening certified, never hoped.', bn: 'পুনঃখাপ পাতা নাও আর পাঠ সাত-আটের দাবি-মতো প্রত্যয়ন করো: rail-hero parent-খাপ container-query card; মানা অধিকার স্তূপ (গতি, contrast, scheme, forced); প্রকাশিত menu-পুনঃপ্রবাহ table-সহ 44px লক্ষ্য; বলবৎ ছবি-font byte বাজেট; তারপর পূর্ণ ম্যাট্রিক্স চেষ্টা করো — ঘর × অধিকার × হাত — আর ঘর-প্রতি ছাপাসহ তারিখ-রায় file করো। ফাটক: ছত্রিশ ঘর চেষ্টা — CI-সবুজ বাজেট — কোথাও gadget-নাম থামা নেই — প্রত্যয়িত খোলা — আশা কখনো না।' },
    },
  ],
  bestPractices: [
    { en: 'Measure honest first: meta viewport on every page, min() wraps, visual math for bottoms — never a 980 fiction, never a confiscated pinch (lesson one).', bn: 'আগে সৎ মাপো: প্রতি পাতায় meta viewport, min() wrap, নিচে দৃশ্য গণিত — কখনো 980 কল্পনা না, কখনো বাজেয়াপ্ত চিমটি না (পাঠ ১)।' },
    { en: 'Stretch before stopping: resolve every percent, bound with min/max/clamp, scale two-master type, reserve shapes — breakpoints resting (lesson two).', bn: 'থামার আগে টানো: প্রতি শতাংশ মিটাও, min/max/clamp-সীমাবদ্ধ করো, দুই-মনিব type মাপো, আকৃতি সংরক্ষণ করো — breakpoint বিশ্রামে (পাঠ ২)।' },
    { en: 'Climb mobile-first, stop at content: narrow bases, range appointments, em stairs, gadget-free names — rights beside every width (lesson three).', bn: 'mobile-first চড়ো, বিষয়বস্তুতে থামো: সরু ভিত্তি, range appointment, em সিঁড়ি, gadget-মুক্ত নাম — প্রতি চওড়া-পাশে অধিকার (পাঠ ৩)।' },
    { en: 'Bend one axis, pour two: basis suggestions with weighted shares, auto-fit counts with floored fractions — minima filed, lines inherited (lessons four, five).', bn: 'এক অক্ষ বাঁকাও, দুই ঢালো: ওজন-ভাগসহ basis পরামর্শ, মেঝে-ভগ্নাংশসহ auto-fit গোনা — সর্বনিম্ন file, লাইন উত্তরাধিকার (পাঠ ৪, ৫)।' },
    { en: 'Hang per room, cross past width: honest sizes with directed art, container parents with cqw fluids — touch fitted, tables reflowed, rights always (lessons six, seven).', bn: 'ঘর-প্রতি টাঙাও, চওড়া পার হও: নির্দেশিত শিল্পসহ সৎ sizes, cqw তরলসহ container parent — স্পর্শ খাপ, table পুনঃপ্রবাহ, অধিকার সবসময় (পাঠ ৬, ৭)।' },
    { en: 'Certify, never hope: budget bytes in CI, try the matrix per release — fluids sizing, stops reshaping, verdicts shipped with dates (lesson eight).', bn: 'প্রত্যয়ন করো, আশা কখনো না: CI-byte বাজেট করো, release-প্রতি ম্যাট্রিক্স চেষ্টা করো — তরল মাপা, থামা পুনর্গঠন, তারিখসহ রায় পাঠানো (পাঠ ৮)।' },
  ],
  interview: [
    {
      q: { en: 'A 390-wide phone shows your page tiny, as a shrunken desktop. What single label is missing, and what two readings does it fix?', bn: 'এক 390-চওড়া ফোন তোমার পাতা ক্ষুদ্র দেখায় — সংকুচিত desktop-হিসেবে। কোন একক label হারানো, আর কোন দুই পাঠ ঠিক করে?' },
      a: { en: 'The meta viewport is missing: width=device-width reports true layout inches instead of the 980 fiction, and initial-scale=1 opens at honest scale. The interview follows up with maximum-scale=1 — why the shop calls it a confiscation — and the candidate who answers “it locks low-vision readers out of zoom” has the rights page, not just the tape.', bn: 'meta viewport হারানো: width=device-width 980 কল্পনার বদলে সত্যি layout ইঞ্চি জানায় — আর initial-scale=1 সৎ মাপে খোলে। interview maximum-scale=1 দিয়ে ফলো-আপ করে — দোকান কেন বাজেয়াপ্তি বলে — আর যে candidate জবাব দেয় “এটা কম-দৃষ্টি পাঠক zoom-বাইরে তালা করে” তার অধিকার-পাতা আছে — শুধু ফিতা না।' },
    },
    {
      q: { en: 'Your auto-fill rail strands two cards narrow in a wide room, and bare 1fr bursts beside long words. Name both fixes with their laws.', bn: 'তোমার auto-fill rail চওড়া ঘরে দুই card সরু আটকায়, আর খালি 1fr লম্বা শব্দ-পাশে ফাটে। দুই ফিক্সের নাম বলো আইনসহ।' },
      a: { en: 'Stranded rails misfile the shelving verb: auto-fit collapses empty tracks where auto-fill preserves ghosts — fill shelves, fit counts. Burst fractions hold silent minima: minmax(0, 1fr) releases what bare fr holds — fr holds, minmax releases. The follow-up asks about staggering buttons across cards — and the candidate who answers “subgrid inherits the rail’s rows” has the inheritance, which is the whole of lesson five in one clause.', bn: 'আটকা rail তাকে-রাখা ক্রিয়া ভুল-file করে: auto-fit খালি track ভাঙে যেখানে auto-fill ভূত সংরক্ষণ করে — fill তাকে রাখে, fit গুনে। ফাটা ভগ্নাংশ নীরব সর্বনিম্ন ধরে: minmax(0, 1fr) মুক্ত করে যা খালি fr ধরে — fr ধরে, minmax মুক্ত করে। ফলো-আপ card-জুড়ে টলমল button নিয়ে — আর যে candidate জবাব দেয় “subgrid rail-সারি উত্তরাধিকার করে” তার উত্তরাধিকার আছে — এক খণ্ডে পাঠ পাঁচের সমগ্র।' },
    },
    {
      q: { en: 'Phones download desktop bytes from your gallery, and the hero arrives lazy and late. State both billings and both refilings.', bn: 'ফোন তোমার gallery থেকে desktop byte download করে, আর hero lazy-দেরিতে আসে। দুই বিল বলো আর দুই পুনরায় file।' },
      a: { en: 'Doubled downloads bill a sizes fiction: browsers optimize perfectly from lies, so sizes must match rendered width per room — lies double, honesty halves. Late heroes bill a role error: heroes file eager with fetchpriority high while followers wait lazy — heroes rush, followers wait. The follow-up asks about mixed w/x srcsets — and the candidate who answers “one shelf, one descriptor kind” has the mixing law, and the gallery opens.', bn: 'দ্বিগুণ download sizes কল্পনা-বিল করে: browser মিথ্যা-থেকে নিখুঁত অনুকূলন করে — তাই sizes-কে ঘর-প্রতি render-চওড়া মিলতেই হবে — মিথ্যা দ্বিগুণ করে, সততা অর্ধেক করে। দেরি hero ভূমিকা-ত্রুটি বিল করে: hero eager উচ্চ-অগ্রাধিকার file করে আর অনুসারী lazy অপেক্ষা করে — hero তাড়া করে, অনুসারী অপেক্ষা করে। ফলো-আপ মেশানো w/x srcset নিয়ে — আর যে candidate জবাব দেয় “এক তাক, এক বর্ণনাকারী-ধরন” তার মেশানো-আইন আছে — আর gallery খোলে।' },
    },
    {
      q: {
        en: 'What is the operational difference between media queries and container queries, and when should you choose container queries?',
        bn: 'মিডিয়া কুয়েরি এবং কন্টেইনার কুয়েরির মধ্যে বাস্তব পার্থক্য কী, এবং কখন কন্টেইনার কুয়েরি বেছে নেওয়া উচিত?'
      },
      a: {
        en: 'Media queries query the global browser viewport, forcing components to make layout assumptions based on screen width. Container queries evaluate the computed dimensions of the immediate parent container declared with container-type: inline-size. Use container queries whenever a reusable component must adapt intelligently whether rendered in a narrow 300px sidebar or a wide 1200px main grid column.',
        bn: 'মিডিয়া কুয়েরি পুরো ব্রাউজার ভিউপোর্টের মাপ দেখে, যা উপাদানগুলোকে স্ক্রিনের ওপর নির্ভরশীল করে ফেলে। অন্যদিকে কন্টেইনার কুয়েরি container-type: inline-size ঘোষিত মূল প্যারেন্ট কন্টেইনারের মাপ পর্যবেক্ষণ করে। কোনো কম্পোনেন্ট যখন সরু ৩০০px সাইডবার কিংবা চওড়া ১২০০px কলাম যেকোনো জায়গায় স্বাধীনভাবে নিজের লেআউট মানিয়ে নিতে চায়, তখন কন্টেইনার কুয়েরি ব্যবহার করতে হয়।'
      }
    },
  ],
  realWorld: [
    { en: 'Frameworks climb mobile-first with fluid tokens: Tailwind stairs, Bootstrap tiers, clamp ramps — stops reshaping, fluids sizing, gadgets unnamed.', bn: 'framework তরল token-সহ mobile-first চড়ে: Tailwind সিঁড়ি, Bootstrap স্তর, clamp ঢাল — থামা পুনর্গঠন, তরল মাপা, gadget অনামা।' },
    { en: 'Storefronts and feeds hang per room: honest sizes, AVIF shelves, intrinsic reserves — bytes billed per fitting, shifts zero by construction.', bn: 'দোকান-feed ঘর-প্রতি টাঙায়: সৎ sizes, AVIF তাক, intrinsic সংরক্ষণ — fitting-প্রতি বিল byte — গঠনে শূন্য shift।' },
    { en: 'Systems parent their patterns: container-query cards in rails, heroes and dialogs — one pattern filed, many parents fitted.', bn: 'system ছাঁচ-parent করে: rail, hero, dialog-এ container-query card — এক ছাঁচ file, অনেক parent খাপ।' },
    { en: 'And releases certify matrices: rooms × rights × hands tried per ship — verdicts dated, regressions stamped, strangers never shipped.', bn: 'আর release ম্যাট্রিক্স প্রত্যয়ন করে: পাঠানো-প্রতি চেষ্টা ঘর × অধিকার × হাত — তারিখ-রায়, ছাপা regression, অচেনা কখনো পাঠানো না।' },
  ],
};
