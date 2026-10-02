import type { TechHub } from '../../lib/types';
import { envelopeLesson } from './lessons/the-envelope-discipline';
import { lastPointLesson } from './lessons/the-last-single-point';
import { storageLedgerLesson } from './lessons/the-storage-ledger';
import { cacheSabbathLesson } from './lessons/the-cache-sabbath';
import { queuePatienceLesson } from './lessons/the-queue-patience';
import { readWriteDivorceLesson } from './lessons/the-read-write-divorce';
import { partitionLedgerLesson } from './lessons/the-partition-ledger';
import { durableDuetLesson } from './lessons/the-durable-duet';

export const sysdHub: TechHub = {
  slug: 'system-design' as never,
  name: 'System Design',
  icon: '🏗️',
  tagline: {
    en: 'Two disciplines, one habit: price the living system honestly, then price its funerals honestly.',
    bn: 'দুই শৃঙ্খলা, এক অভ্যাস: জীবিত-সিস্টেমের দাম দিন সৎভাবে, তারপর তার জানাজার দাম সৎভাবে।',
  },
  intro: {
    en: 'The DSA hubs taught you to walk a data structure; this hub teaches you to price a city. The envelope discipline converts product speech into physics speech — ten million citizens × twenty requests ÷ 86,400 seconds into ~2,315 QPS at rest, ~6,944 at the breathing peak, ≈14 stateless boxes after the halo and the covenant; the same ceremonial walk prices seven disks for five mirrored years, ~111 Mbps on the origin after the CDN lifts its four-fifths, and one 8 GB Redis node for the hot slice. The funeral discipline picks up where the envelope stops: census every citizen that appears exactly once, honor the multiplication laws of parallel mirrors and serial chains, install statelessness, standbys, lease jitter and clustered doors — and quote the nines you bought, never the nines you dreamed of. Two ledgers, one habit: audit any row, any time, out loud.',
    bn: 'DSA-হাবগুলো শিখিয়েছিল ডেটা-স্ট্রাকচারে হাঁটা; এই হাব শেখায় শহরের দাম দেওয়া। খাম-শৃঙ্খলা রূপান্তর করে প্রোডাক্ট-ভাষাকে পদার্থবিদ্যা-ভাষায় — দশ মিলিয়ন নাগরিক × কুড়ি রিকোয়েস্ট ÷ ৮৬,৪০০ সেকেন্ড, বিশ্রামে ~2,315 QPS, শ্বাস-শিখরে ~6,944, হ্যালো আর চুক্তির পর ≈১৪ স্টেটলেস-বাক্স; একই আনুষ্ঠানিক চলা মূল্য দেয় পাঁচ আয়নাকৃত বছরের জন্য সাত ডিস্ক, CDN-এর পাঁচের-চার তুলে-নেওয়ার পর অরিজিনে ~111 Mbps, আর গরম-অংশের জন্য এক 8 GB Redis নোড। জানাজা-শৃঙ্খলা তুলে নেয় খাম যেখানে থামে সেখান থেকে: জনগণনা করুন প্রতি হুবহু-একবার-আসা নাগরিক, মান্য করুন সমান্তরাল-আয়না ও শিকল-শৃঙ্খলার বর্গ-বিধি, ইনস্টল করুন স্টেটলেসতা, স্ট্যান্ডবাই, লিজ-জিটার আর ক্লাস্টারকৃত দুয়ার — আর কোট করুন আপনার কেনা নাইন, কখনো স্বপ্নের নাইন নয়। দুই খাতা, এক অভ্যাস: যেকোনো সারি, যেকোনো সময়, জোরে নিরীক্ষণ করুন।',
  },
  lessons: [envelopeLesson, lastPointLesson, storageLedgerLesson, cacheSabbathLesson, queuePatienceLesson, readWriteDivorceLesson, partitionLedgerLesson, durableDuetLesson],
  references: [
    {
      group: { en: 'The envelope', bn: 'খাম' },
      items: [
        { term: 'the ceremony', def: { en: 'census → day-total → per-second pulse → peak halo → headroom covenant → physical verdict. The order IS the discipline.', bn: 'জনগণনা → দিন-মোট → সেকেন্ডপ্রতি নাড়ি → শিখর-হ্যালো → হেডরুম-চুক্তি → ভৌত রায়। ক্রমটাই শৃঙ্খলা।' } },
        { term: '86,400-second gate', def: { en: 'req/day ÷ 86,400 = avg QPS. Knife: ÷10⁵ then ×1.157 (÷0.864). 86.4M/day ↔ 1,000 QPS is the clean mnemonic.', bn: 'রিকোয়েস্ট/দিন ÷ 86,400 = গড় QPS। ছুরি: ÷10⁵ তারপর ×1.157 (÷0.864)। 86.4M/দিন ↔ 1,000 QPS-ই পরিচ্ছন্ন স্মরণিকা।' } },
        { term: 'canonical walk (this hub)', def: { en: '10M DAU × 20 req → 200M/day → ≈2,315 QPS → ×3 halo → ≈6,944 → ×2 covenant → ÷1K/box ⇒ ≈14 boxes.', bn: '10M DAU × 20 রিকোয়েস্ট → 200M/দিন → ≈2,315 QPS → ×3 হ্যালো → ≈6,944 → ×2 চুক্তি → ÷1K/বাক্স ⇒ ≈১৪ বাক্স।' } },
        { term: 'stolen constants', def: { en: 'Dean numbers (100 ns memory, 100 μs SSD, 100+ ms ocean), capacity ranges (1K–10K QPS/box), habit tables (≈3× halo, 5% writes). Quote as ranges; never to save a design.', bn: 'Dean-সংখ্যা (মেমরি 100 ns, SSD 100 μs, মহাসাগর 100+ ms), সামর্থ্য-পরিসর (1K–10K QPS/বাক্স), অভ্যাস-তালিকা (≈3× হ্যালো, 5% লেখা)। পরিসররূপে উদ্ধৃত করুন; কখনো নকশা বাঁচাতে নয়।' } },
        { term: 'unit-seam ambush', def: { en: 'Estimation errors tunnel through bytes×bits, KB×KiB, seconds×days. Read units aloud per row — the built-in lie detector.', bn: 'অনুমান-ভুল সরণী করে বাইট×বিট, KB×KiB, সেকেন্ড×দিন সেলাই দিয়ে। একক সারিপ্রতি জোরে পড়ুন — অন্তর্নির্মিত মিথ্যা-আবিষ্কারক।' } },
      ],
    },
    {
      group: { en: 'The funeral ledger', bn: 'জানাজা-খাতা' },
      items: [
        { term: 'SPOF census', def: { en: 'Draw the path; mark citizens appearing EXACTLY ONCE. Mirrors, disqualification-as-stateless, or signed accepted-risk — pick one per mark.', bn: 'পথ আঁকো; হুবহু-একবার-আসা নাগরিক চিহ্ন করো। আয়না, স্টেটলেস-অযোগ্যতা, নয়তো সইকৃত গৃহীত-ঝুঁকি — চিহ্নপ্রতি একটি বাছো।' } },
        { term: 'serial law', def: { en: 'Chain availability = Π links. 0.99⁵ ≈ 95.1%. The weakest citizen rules the verdict; mirror IT first.', bn: 'শিকল-প্রাপ্যতা = Π কড়ি। 0.99⁵ ≈ ৯৫.১%। দুর্বলতম নাগরিকই রায় শাসন করে; তার আয়না প্রথমে।' } },
        { term: 'mirror law', def: { en: 'N independent mirrors at a: 1 − (1−a)ⁿ. 2×99.5% → 99.9975%. Only independent failures multiply — shared racks collapse it.', bn: 'a প্রাপ্যতার N স্বতন্ত্র আয়না: 1 − (1−a)ⁿ। 2×99.5% → 99.9975%। গুণ মানে কেবল স্বতন্ত্র ব্যর্থতা — ভাগ-করা র‍্যাক তা ভেঙে ফেলে।' } },
        { term: '(RTO, RPO)', def: { en: 'Time-to-rule vs truth-lost: sync mirrors buy RPO=0 with write latency; async buy flat latency with a funeral allowance. Name YOUR pair.', bn: 'রাজত্ব-কাল বনাম হারানো-সত্য: সিঙ্ক-আয়না কেনে RPO=0 লেখা-লেটেন্সির মূল্যে; অ্যাসিঙ্ক কেনে সমতল লেটেন্সি জানাজা-ভাতার মূল্যে। নিজের জোড়ার নাম বলো।' } },
        { term: 'nines ladder', def: { en: '99.9% ≈ 43.8 min/mo (business floor) · 99.99% ≈ 4.4 min/mo (rehearsed realm) · 99.999% ≈ 26 s/mo (other civilization). Buy the rung you can pay for.', bn: '৯৯.৯% ≈ ৪৩.৮ মিনিট/মাস (ব্যবসার মেঝে) · ৯৯.৯৯% ≈ ৪.৪ মিনিট/মাস (মহড়া-রাজ্য) · ৯৯.৯৯৯% ≈ ২৬ সে/মাস (অন্য সভ্যতা)। পরিশোধযোগ্য ধাপ কিনো।' } },
      ],
    },
  ],
  roadmap: [
    { stage: 1, title: { en: 'The census habit', bn: 'জনগণনা-অভ্যাস' }, detail: { en: 'Product speech → physics speech; the 86,400-second gate; knife math (÷10⁵, ×1.157); audit any row out loud.', bn: 'প্রোডাক্ট-ভাষা → পদার্থবিদ্যা-ভাষা; ৮৬,৪০০-সেকেন্ড গেইট; ছুরি-গণিত (÷10⁵, ×1.157); যেকোনো সারি জোরে নিরীক্ষণ।' } },
    { stage: 2, title: { en: 'Halo & covenant', bn: 'হ্যালো ও চুক্তি' }, detail: { en: '×3 breathing halo on the pulse; ×2 headroom covenant before hardware; N+1 funeral rule; ugly fractions round up.', bn: 'নাড়িতে ×3 শ্বাস-হ্যালো; হার্ডওয়্যারের আগে ×2 হেডরুম-চুক্তি; N+1 জানাজা-রীতি; কদাকার ভগ্নাংশ উপরে গোল।' } },
    { stage: 3, title: { en: 'Sibling ledgers', bn: 'সহোদর খাতা' }, detail: { en: 'Storage (5y mirror ≈ 7 disks), bandwidth (CDN-lifted ≈ 111 Mbps), memory (80/20 working set → one 8 GB Redis). Borrowed rows carry origin credit.', bn: 'স্টোরেজ (৫বছর-আয়না ≈ ৭ ডিস্ক), ব্যান্ডউইথ (CDN-তোলা ≈ 111 Mbps), মেমরি (৮০/২০ ওয়ার্কিং-সেট → এক 8 GB Redis)। ধার-করা সারি জন্ম-ক্রেডিট বহন করে।' } },
    { stage: 4, title: { en: 'Funeral-proofing', bn: 'জানাজা-প্রতিরোধ' }, detail: { en: 'SPOF census; serial vs mirror multiplication; RTO/RPO purchases; lease jitter and stampedes; the nines ladder quoted as product, not aspiration.', bn: 'SPOF-জনগণনা; শিকল বনাম আয়না গুণন; RTO/RPO ক্রয়; লিজ-জিটার ও স্ট্যাম্পিড; নাইন-মই গুণফলরূপে কোট, আকাঙ্ক্ষা নয়।' } },
  ],
  projects: [
    {
      title: { en: 'NapkinBench: the audit harness', bn: 'ন্যাপকিনবেঞ্চ: নিরীক্ষণ-হার্নেস' },
      brief: { en: 'Implement the four ledgers as one function each with unit-tagged numbers (never raw floats); feed five product prompts (a chat app, a photo feed, a ticketing site, a URL shortener, a school portal) and emit the full census→verdict walk for each. The harness MUST refuse any row whose unit cannot be spoken aloud, and must print the audit trail when any two ledgers disagree by more than 2×.', bn: 'চার খাতা বাস্তবায়ন করুন একটি করে ফাংশনে, একক-ট্যাগকৃত সংখ্যায় (কাঁচা-ফ্লোট কখনোই নয়); পাঁচটি প্রোডাক্ট-প্রম্পট খাওয়ান (চ্যাট-অ্যাপ, ফটো-ফিড, টিকিটিং-সাইট, URL-সংক্ষেপক, স্কুল-পোর্টাল) আর প্রতিটিতে পুরো জনগণনা→রায় চলা নিক্ষেপ করুন। হার্নেসকে অবশ্যই প্রত্যাখ্যান করতে হবে যে সারির একক জোরে উচ্চারণ করা যায় না, আর ছাপাতে হবে অডিট-পথ যখনি কোনো দুই খাতা 2×-এর বেশি মতভেদ করে।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'HuntTheSPOF: census reports for real diagrams', bn: 'হান্টদ্যSPOF: বাস্তব-চিত্রের জনগণনা-রিপোর্ট' },
      brief: { en: 'Take three public architecture diagrams (a startup blog’s stack, a mid-size SaaS, a chaos-engineering case study). Run the census on each: every once-appearing citizen marked, classified (mirror / disqualify / accepted-risk), and priced against the nines ladder. Deliverable: a one-page report per system with (RTO, RPO) pairs honestly marked “undocumented” where the diagram stays silent.', bn: 'তিনটি প্রকাশিত স্থাপত্য-চিত্র নিন (স্টার্টআপ-ব্লগের স্ট্যাক, মাঝারি SaaS, ক্যাওস-ইঞ্জিনিয়ারিং কেস-স্টাডি)। প্রতিটিতে জনগণনা চালান: প্রতি একবার-আসা নাগরিক চিহ্নিত, শ্রেণিকৃত (আয়না / অযোগ্য / গৃহীত-ঝুঁকি), আর নাইন-মইয়ের বিপরীতে মূল্যায়িত। প্রদেয়: সিস্টেমপ্রতি এক-পাতার রিপোর্ট, (RTO, RPO) জোড়া সৎভাবে চিহ্নিত “অদলিলকৃত” যেখানে চিত্র চুপ।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'FuneralDrill: the rehearsal rig', bn: 'ফিউনারেলড্রিল: মহড়া-রিগ' },
      brief: { en: 'On a local stack (two app boxes behind a hand-rolled balancer, one primary/standby journal, one cache): script the four funeral exams — random box kill, journal wedged-alive-serving-nothing, lease-armada expiry, balancer door swing. Measure actual RTO and RPO against the ledger estimates, publish the deltas, and add the jitter + coalescing fixes until the stampede scenario costs less than one nines-rung per run.', bn: 'স্থানীয় স্ট্যাকে (হাতে-গড়া ব্যালান্সারের পেছনে দুই অ্যাপ-বাক্স, একটি প্রাইমারি/স্ট্যান্ডবাই জার্নাল, একটি ক্যাশ): চার জানাজা-পরীক্ষা স্ক্রিপ্ট করুন — এলোমেলো বাক্স-হত্যা, জার্নাল জীবিত-কিন্তু-নীরব-আটকানো, লিজ-বহর-মেয়াদোত্তীর্ণ, ব্যালান্সার-দুয়ার-নড়াচড়া। প্রকৃত RTO/RPO মাপুন খাতার অনুমানের বিপরীতে, ব্যাতয় ছাপান, আর জিটার + একত্রীকরণ-সংশোধন যোগ করতে থাকুন যতক্ষণ না স্ট্যাম্পিড-দৃশ্যপট প্রতি রানে এক মই-ধাপের নিচে খরচ করে।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Open every design review with the census row and close with the failure census. Skipping either ceremony converts the review into storytelling.', bn: 'প্রতি ডিজাইন-রিভিউ খুলুন জনগণনা-সারিতে আর শেষ করুন ব্যর্থতা-জনগণনায়। যেকোনো অনুষ্ঠান বাদ দিলে রিভিউ হয়ে যায় গল্প-শোনানো।' },
    { en: 'One operation per row; unit printed and spoken per row; never a naked number. The unit-seam ambush kills more capacity plans than arithmetic ever did.', bn: 'সারিপ্রতি একটি ক্রিয়া; সারিপ্রতি ছাপা-ও-উচ্চারিত একক; কখনো উলঙ্গ সংখ্যা নয়। একক-সেলাই-অভিঘাত পাটিগণিতের চেয়ে বেশি ক্যাপাসিটি-পরিকল্পনা হত্যা করেছে।' },
    { en: 'Halo first, covenant second, never merged: tidal traffic and unmodelled life are different weapons, and one shield cannot parry both.', bn: 'হ্যালো আগে, চুক্তি পরে, কখনো এক নয়: জোয়ারীয় ট্রাফিক আর অমডেলকৃত জীবন আলাদা অস্ত্র, আর একটি ঢাল দুটোই ঠেকাতে পারে না।' },
    { en: 'Mirror the weakest citizen before strengthening the strongest. The ledger enforces this ordering; sentiment reverses it and pays.', bn: 'দুর্বলতম নাগরিকের আয়না আগে, শক্তিশালীতমকে শক্তিশালী করা পরে। খাতা এই ক্রম জারি করে; অনুভূতি তা উল্টে দাম শোধ দেয়।' },
    { en: 'Certify three ways: ping for process, canary for service, census for singularity. Every postmortem is the story of a missing certification.', bn: 'তিনভাবে সনদ দিন: প্রসেসের পিং, পরিষেবার ক্যানারি, এককতার জনগণনা। প্রতি পোস্টমর্টেম হলো হারানো সনদের গল্প।' },
    { en: 'Quote nines as the product of the chain, and match the rung to what the business pays. Aspirational nines are invoices sent to your future self.', bn: 'নাইন কোট করুন শিকলের গুণফলরূপে, আর ধাপ মেলান ব্যবসার পরিশোধের সঙ্গে। আকাঙ্ক্ষা-নাইন হলো ভবিষ্যৎ-আপনার নামে পাঠানো চালান।' },
  ],
  interview: [
    {
      q: { en: 'Design a URL shortener for 100M users. Where do you START?', bn: '১০ কোটি ব্যবহারকারীর জন্য URL-সংক্ষেপক নকশা করুন। কোথা থেকে শুরু করবেন?' },
      a: { en: 'With the envelope, out loud: census (100M users), behavior (≈10 reads and ≈0.1 writes per user-week, turned into req/day), the gate, the halo, the covenant, then the verdict rows for boxes, journal rows-per-day and cache size — naming each constant as a range that survives to the verdict. Only after ≈3 rows of verdicts do boxes get drawn, and every box drawn inherits a marked citizen on the SPOF census. The interviewer is grading the ceremony order and your willingness to be surprised by the numbers, not your knowledge of shortURL trivia.', bn: 'খাম দিয়ে, জোরে: জনগণনা (১০ কোটি ব্যবহারকারী), আচরণ (≈১০ পাঠ ও ≈০.১ লেখা ব্যবহারকারী-সপ্তাহে, রিকোয়েস্ট/দিন-এ রূপান্তরিত), গেইট, হ্যালো, চুক্তি, তারপর বাক্স, জার্নাল-সারি/দিন আর ক্যাশ-মাপের রায়-সারি — প্রতি ধ্রুবক পরিসররূপে নামকৃত, রায় পর্যন্ত টিকে-থাকা। প্রায় তিন সারি রায়ের পরেই বাক্স আঁকা হয়, আর প্রতি আঁকা বাক্স উত্তরাধিকার পায় SPOF-জনগণনায় চিহ্নিত নাগরিক। সাক্ষাৎকারকারী মূল্যায়ন করছেন অনুষ্ঠান-ক্রম আর সংখ্যায়-অবাক-হওয়ার আপনার ইচ্ছা, shortURL-সংগতি নয়।' },
    },
    {
      q: { en: 'Why is 99.9% availability usually NOT the sum of its parts?', bn: 'কেন ৯৯.৯% প্রাপ্যতা সাধারণত তার অংশগুলোর সমষ্টি নয়?' },
      a: { en: 'Because the request path is a serial chain, and chains multiply: five links at 99% make 0.99⁵ ≈ 95%, so “every citizen is 99%” architects a 94–95% system. The rescue is asymmetric: mirrors square failures — two 99% boxes give 99.99% — while chains degrade linearly. That’s why the discipline mirrors the weakest link FIRST (usually the journal), quotes availability as a chain product, and audits every mirror for shared fate (same rack, same deploy, same account) that would collapse the square back to the single point.', bn: 'কারণ রিকোয়েস্ট-পথ একটি শিকল-শৃঙ্খলা, আর শিকল গুণিত হয়: ৯৯%-এর পাঁচ কড়ি বানায় 0.99⁵ ≈ ৯৫%, তাই “প্রতি নাগরিক ৯৯%” স্থপতি নির্মাণ করে ৯৪–৯৫% সিস্টেম। মুক্তি অ-প্রতিসম: আয়না ব্যর্থতা বর্গ করে — দুই ৯৯%-বাক্স দেয় ৯৯.৯৯% — অথচ শিকল সরলরৈখিকে নামে। এই কারণেই শৃঙ্খলা আয়না গড়ে দুর্বলতম কড়িতে প্রথমে (সাধারণত জার্নাল), প্রাপ্যতা কোট করে শিকল-গুণফলরূপে, আর প্রতি আয়না অডিট করে ভাগ-করা নিয়তিতে (একই র‍্যাক, একই ডিপ্লয়, একই অ্যাকাউন্ট), যা বর্গকে ভেঙে দেবে একক-পয়েন্টে।' },
    },
    {
      q: { en: 'Your cache primary dies at midnight. Walk me through the next sixty seconds — twice: once without preparation, once prepared.', bn: 'আপনার ক্যাশ-প্রাইমারি মধ্যরাতে মরে। টানা ষাট সেকেন্ড বর্ণনা করুন — দুইবার: একবার অপ্রস্তুত, একবার প্রস্তুত।' },
      a: { en: 'Unprepared: every hot read misses, the retry-of-the-hole multiplies the flood ×3–10, the journal hits its covenant in seconds and falls, the tier backs up behind it, and the cache restart meets a “welcome-back party” — the resurrection stampede. Prepared: the standby promotes inside RTO (seconds), TTL jitter spreads the lease armada’s deaths across minutes instead of one second, request coalescing caps every key’s concurrent re-fetch at one, and the dashboard already shows miss-rate converging to the pre-funeral line. Same city, same midnight; the difference is entirely which purchases the ledger recorded BEFORE the funeral arrived — a hot standby is not an expense, it is the invoice for the other version of this question.', bn: 'অপ্রস্তুত: প্রতি গরম-পাঠ মিস করে, হোল-রিট্রাই ঢলকে ×3–10 গুণে, জার্নাল কয়েক সেকেন্ডে চুক্তি ছাড়িয়ে পড়ে, স্তর তার পেছনে জমে ওঠে, আর ক্যাশ-রিস্টার্ট পায় “স্বাগত-পার্টি” — পুনরুত্থান-স্ট্যাম্পিড। প্রস্তুত: স্ট্যান্ডবাই RTO-র ভেতর (সেকেন্ডে) উর্ধ্বগতি হয়, TTL-জিটার লিজ-বহরের মৃত্যু ছড়িয়ে দেয় মিনিটজুড়ে, রিকোয়েস্ট-একত্রীকরণ প্রতি কী-এর সমবর্তী পুনঃআনয়ন থামায় এক-এ, আর ড্যাশবোর্ড ইতিমধ্যে দেখায় মিস-রেট জানাজা-পূর্ব রেখায় অভিসারী। একই শহর, একই মধ্যরাত; পার্থক্য পুরোটাই কোন ক্রয়গুলো খাতা লিপিবদ্ধ করেছিল জানাজা আসার আগে — গরম স্ট্যান্ডবাই ব্যয় নয়, তা হলো এই প্রশ্নের অন্য সংস্করণের চালান।' },
    },
    {
      q: { en: 'The CTO says “just make it stateless and Kubernetes will handle availability.” Respond.', bn: 'সিটিও বললেন “শুধু স্টেটলেস করুন, প্রাপ্যতা Kubernetes সামলে নেবে।” জবাব দিন।' },
      a: { en: 'Statelessness certifies the tier allowed to die — it does nothing for the citizens that were never boxes: the journal, the cache primary, the balancer door, the region, and every shared-fate deploy. Kubernetes restarts processes; it cannot mirror truth, prevent a stampede, or give a corpse a coroner’s exam. The ledger’s answer runs in order: the SPOF census (what still appears once?), the nines math (what rung does the chain actually produce?), the certification trio (ping ≠ canary ≠ census), and the rehearsal rule — statelessness is a behavior proven by funerals in staging, not a label on a manifest. After that conversation, offer the invoice comparison: “allowed to die” tier + one mirrored journal usually beats five aspirational nines at a fraction of the burn.', bn: 'স্টেটলেসতা স্তরকে সনদ দেয় মরার অনুমতিতে — তা কিছুই করে না সেই নাগরিকদের জন্য যারা কখনো বাক্স ছিল না: জার্নাল, ক্যাশ-প্রাইমারি, ব্যালান্সার-দুয়ার, অঞ্চল, আর প্রতি ভাগ-করা-নিয়তি ডিপ্লয়। Kubernetes প্রক্রিয়া পুনরায় চালু করে; তা সত্যের আয়না গড়তে পারে না, স্ট্যাম্পিড ঠেকাতে পারে না, বা মৃতদেহকে শবব্যাচ্ছেদ-পরীক্ষা দিতে পারে না। খাতার উত্তর ক্রমে চলে: SPOF-জনগণনা (এখনো কী একবার আসে?), নাইন-গণিত (শিকল আসলে কোন ধাপ উৎপাদন করে?), সনদ-ত্রয়ী (পিং ≠ ক্যানারি ≠ জনগণনা), আর মহড়া-নিয়ম — স্টেটলেসতা আচরণ, ম্যানিফেস্টে নয়, স্টেজিং-জানাজায় প্রমাণিত। সেই কথোপকথনের পর চালান-তুলনা উপহার দিন: “মরার অনুমতি” স্তর + একটি আয়নাকৃত জার্নাল সাধারণত জেতে পাঁচ আকাঙ্ক্ষা-নাইনকে, ভগ্নাংশ-ব্যয়ে।' },
    },
  ],
  realWorld: [
    { en: 'Architecture interviews & staff-level reviews: the census-first ceremony is the grading rubric — halo precedes covenant, verdicts surprise out loud.', bn: 'আর্কিটেকচার সাক্ষাৎকার ও স্টাফ-পর্যায় রিভিউ: জনগণনা-প্রথম অনুষ্ঠান-ই মূল্যায়ন-পত্র — হ্যালো চুক্তির আগে, রায় জোরে অবাক করে।' },
    { en: 'Launch & capacity reviews at scale: the CFO’s spreadsheet dies by unit-seam unless the envelope walks beside it; budgets then land within one nine.', bn: 'স্কেলে লঞ্চ ও ক্যাপাসিটি-রিভিউ: সিএফও-র স্প্রেডশিট মরে একক-সেলাইয়ে, খাম পাশে না-চললে; বাজেট তখন পড়ে এক মই-ধাপের ভেতর।' },
    { en: 'SRE & platform engineering: stateless certification, census drills, canary writes and chaos weekdays are this hub promoted to a profession.', bn: 'SRE ও প্ল্যাটফর্ম-ইঞ্জিনিয়ারিং: স্টেটলেস-সনদ, জনগণনা-মহড়া, ক্যানারি-লেখা আর সাপ্তাহ-দিনের ক্যাওস হলো পেশায় উন্নীত এই হাব।' },
    { en: 'Cloud cost engineering: accept-reject every architecture purchase against the envelope that priced the mirrors — the ledger is the negotiation instrument.', bn: 'ক্লাউড কস্ট-ইঞ্জিনিয়ারিং: প্রতি স্থাপত্য-ক্রয় গ্রহণ-প্রত্যাখ্যান করুন সেই খামের বিপরীতে যা আয়নার দাম দিয়েছে — খাতাটি-ই দর-কষাকষি-যন্ত্র।' },
  ],
};
