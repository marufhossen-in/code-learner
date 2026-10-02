import type { Hub } from '../../lib/types';
import { hashThinkingLesson } from './lessons/hash-thinking';
import { hashDisastersLesson } from './lessons/hash-disasters';
import { theAddressForgeLesson } from './lessons/the-address-forge';
import { theFoldLedgerLesson } from './lessons/the-fold-ledger';
import { theCollidedCityLesson } from './lessons/the-collided-city';
import { theTombstoneAvenueLesson } from './lessons/the-tombstone-avenue';
import { theCollisionEngineeringLesson } from './lessons/the-collision-engineering';
import { theLiftRelayLesson } from './lessons/the-lift-relay';
import { theHashPanoramaLesson } from './lessons/the-hash-panorama';

export const htHub: Hub = {
  slug: 'hash-tables',
  name: 'Hash Tables',
  icon: '#️⃣',
  tagline: {
    en: 'The third addressing idea: content becomes the door. O(1) average, collisions by design, weapons-grade defenses included.',
    bn: 'তৃতীয় ঠিকানা-ধারণা: বিষয়বস্তু-ই হয়ে ওঠে দরজা। গড়ে O(1), সংঘর্ষ নকশাতেই, অস্ত্র-মানের প্রতিরক্ষাসহ।',
  },
  about: {
    en: 'Arrays address by position. Trees address by order. Hash tables complete the trinity: addressing by CONTENT — the key itself computes its own door. This hub teaches the whole protocol: hash functions that scatter with avalanche discipline, mod-folding into power-of-two tables, collisions as pigeonhole physics (chaining vs open addressing), load-factor governance with doubling resizes, and the two-stage lookup protocol (teleport, then equality) whose two contracts — immutable hash-significant key fields, and equals-implies-equal-hash — must hold like law. Lesson two walks into the dark mirror deliberately: hash flooding as farmable O(n²) denial-of-service, salting with SipHash as the reference defense, Java’s treeification as degrade-gracefully engineering, iteration-order portability traps, and the canonicalization discipline that stops Admin@ and admin@ from becoming two users. Everything runs inside the Hash Lab, where you watch doors fill, chains crowd, load factor hit the red line, and the whole world double and rehash in one amortized rescue. The result: you stop using Map on autopilot and start designing addressing with its ceilings named.',
    bn: 'অ্যারে ঠিকানা দেয় অবস্থানে। ট্রি দেয় ক্রমে। হ্যাশ-টেবিল ত্রিত্ব সম্পূর্ণ করে: বিষয়বস্তু দিয়ে ঠিকানা — চাবি নিজেই হিসাব করে নিজের দরজা। এই হাব শেখায় পুরো প্রোটোকল: অ্যাভালাঞ্চ-শৃঙ্খলায় বিক্ষেপকারী হ্যাশ-ফাংশন, দুই-ঘাত টেবিলে মড-ভাঁজ, কবুতর-খাঁচা পদার্থবিদ্যা হিসেবে সংঘর্ষ (চেইনিং বনাম ওপেন-অ্যাড্রেসিং), দ্বিগুণ-রিসাইজসহ লোড-ফ্যাক্টর শাসন, আর দুই-স্তর লুকআপ-প্রোটোকল (টেলিপোর্ট, তারপর সমতা) — যার দুই চুক্তি (হ্যাশ-গুরুত্বপূর্ণ চাবি-ফিল্ড অপরিবর্তনীয়, ও সমান ⇒ সমান-হ্যাশ) আইনের মতো টিকতে হবে। দ্বিতীয় লেসন ইচ্ছাকৃত অন্ধকার প্রতিবিম্বে নামে: চাষযোগ্য O(n²) সেবা-অস্বীকার হিসেবে হ্যাশ-ফ্লাডিং, রেফারেন্স-প্রতিরক্ষা হিসেবে SipHash-লবণ, মার্জিত-অবক্ষয় প্রকৌশল হিসেবে Java-র ট্রিরূপীকরণ, ইটারেশন-ক্রম বহনযোগ্যতা-ফাঁদ, আর Admin@ ও admin@-কে দুই ব্যবহারকারী হতে বারণ করা স্বাভাবিককরণ-শৃঙ্খলা। সবকিছু চলে Hash Lab-এর ভেতরে — দেখুন দরজা ভরছে, চেইন ভিড়ছে, লোড-ফ্যাক্টর লাল-রেখা স্পর্শ করছে, আর পুরো জগৎ এক অ্যামর্টাইজড উদ্ধারে দ্বিগুণ হয়ে পুনঃহ্যাশ হচ্ছে। ফল: অটোপাইলটে Map ব্যবহার ছেড়ে আপনি নকশা করবেন ঠিকানা — সিলিং-নামকৃত অবস্থায়।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The third addressing', bn: 'ধাপ ১ — তৃতীয় ঠিকানা' },
      items: [
        { en: 'Position vs order vs content: the trinity of addressing (lesson 1)', bn: 'অবস্থান বনাম ক্রম বনাম বিষয়বস্তু: ঠিকানার ত্রিত্ব (লেসন ১)' },
        { en: 'Hash function duties: deterministic, uniform, avalanche', bn: 'হ্যাশ-ফাংশনের কর্তব্য: নির্ধারক, অভিন্ন, অ্যাভালাঞ্চ' },
        { en: 'h(key) % m and the power-of-two mask trick', bn: 'h(key) % m আর দুই-ঘাত মাস্ক-কারিগরি' },
        { en: 'Pigeonhole: collisions are physics, designed for not surprised by', bn: 'কবুতর-খাঁচা: সংঘর্ষ পদার্থবিদ্যা — নকশায় সামলানো, চমকে নয়' },
      ],
    },
    {
      title: { en: 'Stage 2 — Keeping O(1) honest', bn: 'ধাপ ২ — O(1) সৎ রাখা' },
      items: [
        { en: 'Chaining vs open addressing: delete-friendliness vs cache-friendliness', bn: 'চেইনিং বনাম ওপেন-অ্যাড্রেসিং: ডিলিট-বান্ধবতা বনাম ক্যাশ-বান্ধবতা' },
        { en: 'Clustering: why probe walks tax their neighbors', bn: 'গুচ্ছায়ন: প্রোব-হাঁটা প্রতিবেশীকে কেন কর বোঝায়' },
        { en: 'Load factor governance and the doubling rescue (lesson 1)', bn: 'লোড-ফ্যাক্টর শাসন আর দ্বিগুণ-উদ্ধার (লেসন ১)' },
        { en: 'The two-stage protocol and its two contracts', bn: 'দুই-স্তর প্রোটোকল আর তার দুই চুক্তি' },
      ],
    },
    {
      title: { en: 'Stage 3 — The dark mirror', bn: 'ধাপ ৩ — অন্ধকার প্রতিবিম্ব' },
      items: [
        { en: 'Hash flooding: farmable collisions as DoS (lesson 2)', bn: 'হ্যাশ-ফ্লাডিং: DoS হিসেবে চাষযোগ্য সংঘর্ষ (লেসন ২)' },
        { en: 'Salting with SipHash: make the worst case unforeseeable', bn: 'SipHash-লবণ: ওয়ারস্ট-কেস অনুমান-অযোগ্য করান' },
        { en: 'Treeification floors: degrade to log n, never to inferno', bn: 'ট্রিরূপীকরণ-ভিত্তি: log n-এ অবক্ষয়, জাহান্নামে নয়' },
        { en: 'Iteration-order portability; canonicalization treaties', bn: 'ইটারেশন-ক্রম বহনযোগ্যতা; স্বাভাবিককরণ-চুক্তি' },
      ],
    },
    {
      title: { en: 'Stage 4 — Hashing at scale', bn: 'ধাপ ৪ — বড় স্কেলে হ্যাশিং' },
      items: [
        { en: 'Consistent hashing: partition keys over moving servers', bn: 'কনসিস্টেন্ট হ্যাশিং: চলমান সার্ভারে চাবি-বিবাজন' },
        { en: 'Bloom filters: probabilistic membership at tiny memory', bn: 'ব্লুম-ফিল্টার: ক্ষুদ্র মেমরিতে সম্ভাব্য-সদস্যতা' },
        { en: 'Redis dict, Memcached, router tables — the lab in production', bn: 'Redis dict, Memcached, রাউটার-টেবিল — প্রোডাকশনের ল্যাব' },
        { en: 'Cryptographic hashes: same letters, different universe (security hub)', bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ: একই অক্ষর, ভিন্ন মহাবিশ্ব (সিকিউরিটি হাব)' },
      ],
    },
  ],
  lessons: [hashThinkingLesson, hashDisastersLesson, theAddressForgeLesson, theFoldLedgerLesson, theCollidedCityLesson, theTombstoneAvenueLesson, theCollisionEngineeringLesson, theLiftRelayLesson, theHashPanoramaLesson],
  reference: [
    {
      group: 'Core operations',
      methods: [
        {
          name: 'set / get / has',
          signature: 'map.set(k, v) · map.get(k) · map.has(k)',
          params: { en: 'Compute h(k) % m, teleport, then equality-check at the door. Average O(1) for all three.', bn: 'h(k) % m গণনা, টেলিপোর্ট, তারপর দরজায় সমতা-যাচাই। তিনটিরই গড়ে O(1)।' },
          returns: { en: 'Membership and retrieval at content-addressed speed.', bn: 'বিষয়বস্তু-ঠিকানা গতিতে সদস্যতা ও উদ্ধার।' },
          example: 'const hits = users.filter(u => needed.has(u.id));',
        },
        {
          name: 'delete',
          signature: 'map.delete(k) · dict.pop(k)',
          params: { en: 'Chaining: unlink the chain node. Open addressing: tombstone, or the probe walks rot silently.', bn: 'চেইনিং: চেইন-নোড খুলে দিন। ওপেন-অ্যাড্রেসিং: টম্বস্টোন — নইলে প্রোব-হাঁটা নীরবে পচে।' },
          returns: { en: 'Average O(1); the strategy tax your collision scheme chose in advance.', bn: 'গড়ে O(1); আপনার সংঘর্ষ-রণকৌশল আগেই ঠিক-করে-রাখা কর।' },
          example: 'sessions.delete(expiredId);',
          mistake: { en: 'Naively nulling an open-addressing slot — probe chains through it break at the hole.', bn: 'ওপেন-অ্যাড্রেসিং স্লট সরাসরি ফাঁকা করা — তার মধ্য দিয়ে যাওয়া প্রোব-চেইন গর্তে ভেঙে যায়।' },
        },
        {
          name: 'resize (implicit)',
          signature: 'α > ~0.75 ⇒ double + rehash-all',
          params: { en: 'The library speaks it silently; you should know the sentence it is saying.', bn: 'লাইব্রেরি তা নীরবে বলে; আপনার জানা দরকার সে কোন বাক্য বলছে।' },
          returns: { en: 'α halved in one move; amortized O(1) restored; your map, same dress, double world.', bn: 'এক চালে α অর্ধেক; পুনরুদ্ধারিত অ্যামর্টাইজড O(1); আপনার ম্যাপ — একই পোশাক, দ্বিগুণ জগৎ।' },
          example: '// watch the red 75% line in the Hash Lab — the rescue frame',
        },
      ],
    },
    {
      group: 'Function choice',
      methods: [
        {
          name: 'FNV-1a (teaching grade)',
          signature: 'h ^= byte; h *= 0x01000193 (32-bit)',
          params: { en: 'Simple, deterministic, decent avalanche — the lab’s hash so you can trace every door.', bn: 'সরল, নির্ধারক, মানানসই অ্যাভালাঞ্চ — ল্যাবের হ্যাশ, যাতে প্রতিটি দরজা হাতে গোনা যায়।' },
          returns: { en: 'A 32-bit storm you can explain on a whiteboard.', bn: 'হোয়াইটবোর্ডে ব্যাখ্যাযোগ্য এক 32-বিট ঝড়।' },
          example: 'h = (h ^ s.charCodeAt(i)) * 16777619 >>> 0;',
        },
        {
          name: 'SipHash (armed)',
          signature: 'Keyed hash with random per-process secret',
          params: { en: 'The reference defense against hash flooding: a MAC-grade function whose key is your runtime’s secret.', bn: 'হ্যাশ-ফ্লাডিং-বিরোধী রেফারেন্স-প্রতিরক্ষা: MAC-মানের ফাংশন, চাবি আপনার রানটাইমের গোপনীয়তা।' },
          returns: { en: 'Collision-farm-proof by design — Python/Rust defaults.', bn: 'নকশাতেই সংঘর্ষ-চাষ-রোধী — Python/Rust ডিফল্ট।' },
          example: 'PYTHONHASHSEED=random   # Python ≥ 3.4-এর ডিফল্ট মতবাদ',
        },
        {
          name: 'Mod folding',
          signature: 'h % m  or  h & (m − 1) for power-of-two m',
          params: { en: 'Folds the 32-bit storm onto 0…m−1 doors; mask instead of division when m is a power of two.', bn: '32-বিট ঝড় ভাঁজ করে 0…m−1 দরজায়; দুই-ঘাত m হলে ভাগের বদলে মাস্ক।' },
          returns: { en: 'One integer, one door, constant time — the arithmetic heartbeat of every hash table.', bn: 'একটি পূর্ণসংখ্যা, একটি দরজা, নির্দিষ্ট সময় — প্রতি হ্যাশ-টেবিলের পাটিগণিত-হৃৎস্পন্দন।' },
          example: 'const door = h & (m - 1);   // m দুই-ঘাত হলে ভাগমুক্ত',
        },
      ],
    },
    {
      group: 'Contracts & treaties',
      methods: [
        {
          name: 'equals ⇒ equal hash',
          signature: 'Java: equals/hashCode · Python: __eq__/__hash__',
          params: { en: 'The two-stage protocol’s binding treaty: break it and duplicates rent different doors forever.', bn: 'দুই-স্তর প্রোটোকলের বাঁধন-চুক্তি: ভাঙলে ডুপ্লিকেট চিরকালের জন্য ভিন্ন দরজা ভাড়া নেয়।' },
          returns: { en: 'One logical entity, one apartment — enforced by two witnesses.', bn: 'একটি যুক্তি-সত্তা, একটি ফ্ল্যাট — দুই সাক্ষীর বলবৎকরণে।' },
          example: 'console.assert(!equals(x,y) || hashOf(x) === hashOf(y));',
          mistake: { en: 'equals overridden, hashCode forgotten — the quietest duplicate-farm in the codebase.', bn: 'equals ওভাররাইডিত, hashCode বিস্মৃত — কোডবেসের নীরবতম ডুপ্লিকেট-খামার।' },
        },
        {
          name: 'Immutable key fields',
          signature: 'key.hash must not change while in table',
          params: { en: 'Hash-significant fields frozen while the key is parked; otherwise the vanishing-key bug drives in.', bn: 'চাবি পার্ক-করা অবস্থায় হ্যাশ-গুরুত্বপূর্ণ ফিল্ড হিমায়িত; নইলে উধাও-চাবি বাগ ঢুকে পড়ে।' },
          returns: { en: 'A key that answers at the same door it was inserted at, always.', bn: 'এমন চাবি যা সবসময় সেই একই দরজায় উত্তর দেয়, যেখানে সে ঢোকানো হয়েছিল।' },
          example: "dict key — tuple of immutables ✅ ~ tuple containing a list ✗",
        },
        {
          name: 'Canonicalization treaty',
          signature: 'map.set(canon(k), v) at the boundary',
          params: { en: 'One spelling rule signed once: locale lowercase, trim, NFC — before stage one ever sees the key.', bn: 'একবার সই করা এক বানান-নিয়ম: লোকেলসহ ছোট-হরফ, ছাঁটাই, NFC — প্রথম স্তর চাবি দেখার আগেই।' },
          returns: { en: 'Admin@ and admin@ become one user — because physics, not policy, made them so.', bn: 'Admin@ আর admin@ হয়ে ওঠে এক ব্যবহারকারী — কারণ নীতি নয়, পদার্থবিদ্যা তাই ঠিক করে।' },
          example: 'const door = canon(email).toLowerCase().trim();',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Build Your Own Map', bn: 'নিজের Map বানান' },
      diff: 'beginner',
      desc: {
        en: 'Implement a chaining hash map in 60 lines with FNV-1a: set/get/has/delete, chains at every door, and a load-factor gauge. Test it against property: insert every key of the lab list and prove each is findable after α crosses 0.75.',
        bn: '৬০ লাইনে FNV-1a দিয়ে চেইনিং হ্যাশ-ম্যাপ বানান: set/get/has/delete, প্রতি দরজায় চেইন, লোড-ফ্যাক্টর গেজ। প্রপার্টি-টেস্ট করুন: ল্যাব-তালিকার প্রতি চাবি ইনসার্ট করে প্রমাণ করুন α 0.75 পেরোলেও প্রতিটি খুঁজে পাওয়া যায়।',
      },
    },
    {
      title: { en: 'Flood, Then Salt', bn: 'প্লাবন, তারপর লবণ' },
      diff: 'intermediate',
      desc: {
        en: 'Take a toy JSON endpoint backed by your own unsalted map. Farm a collision set offline (brute-force strings with a shared door at m=64), measure the quadratic meltdown, then add a per-process salt and watch the farm die. Deliverable: both graphs with the doctrine sentence.',
        bn: 'নিজের লবণহীন ম্যাপের পেছনে একটি ছোট JSON এন্ডপয়েন্ট দাঁড় করান। অফলাইনে সংঘর্ষ-সেট চাষ করুন (m=64-এ সম-দরজা স্ট্রিং ব্রুট-ফোর্স), কোয়াড্রাটিক-গলন মাপুন, তারপর প্রক্রিয়াপ্রতি লবণ দিয়ে দেখুন চাষ মরে গেছে। ডেলিভারেবল: মতবাদ-বাক্যসহ দুই লেখচিত্র।',
      },
    },
    {
      title: { en: 'Canonicalization Checkpoint', bn: 'স্বাভাবিককরণ চেকপয়েন্ট' },
      diff: 'advanced',
      desc: {
        en: 'Build a user registry where every write AND every read passes through one canonicalize(email) treaty: locale-aware casing, trim, Unicode NFC. Add the two contract tests (equal⇒equal-hash, lookup-after-mutation) and a regression test that Admin-variants can never fork the registry again.',
        bn: 'এমন ব্যবহারকারী-নিবন্ধন বানান যেখানে প্রতি লেখা ও পড়া যায় এক canonicalize(email) চুক্তি দিয়ে: লোকেল-সচেতন ছোট-হরফ, ছাঁটাই, ইউনিকোড NFC। দুই চুক্তি-টেস্ট যোগ করুন (সমান⇒সমান-হ্যাশ, পরিবর্তন-পরবর্তী-লুকআপ) আর রিগ্রেশন-টেস্ট যে Admin-ভ্যারিয়েন্ট আর কখনো নিবন্ধন ভাগ করতে পারবে না।',
      },
    },
  ],
  bestPractices: [
    { en: 'Name your addressing first: position vs order vs content — the structure follows.', bn: 'আগে ঠিকানার নাম: অবস্থান বনাম ক্রম বনাম বিষয়বস্তু — কাঠামো নিজে আসবে।' },
    { en: 'Order needed? Tree lineage. Equality only? Hash. The currencies never overlap for free.', bn: 'ক্রম দরকার? ট্রি বংশ। শুধু সমতা? হ্যাশ। মুদ্রা দুটো বিনামূল্যে কখনো মেলে না।' },
    { en: 'Deterministic-and-unsalted hashes over attacker input are a vulnerability class, not a style.', bn: 'আক্রমণকারীর ইনপুটে নির্ধারক-ও-লবণহীন হ্যাশ একটি দুর্বলতা-শ্রেণি, শৈলী নয়।' },
    { en: 'Keep contracts testable: equal⇒equal-hash and lookup-after-mutation ride CI forever.', bn: 'চুক্তি রাখুন পরীক্ষাযোগ্য: সমান⇒সমান-হ্যাশ আর পরিবর্তন-পরবর্তী-লুকআপ চিরকাল CI-তে সওয়ার।' },
    { en: 'Know your ceiling sentence: “under flooding our map degrades to ___.”', bn: 'সিলিং-বাক্যটি জানুন: “ফ্লাডিংয়ে আমাদের ম্যাপ নামে ___-এ।”' },
    { en: 'Canonicalize every key that crosses a trust boundary, once, at the door.', bn: 'বিশ্বাস-সীমান্ত পেরোনো প্রতি চাবি স্বাভাবিক করুন, একবার, দরজাতেই।' },
  ],
  interview: [
    {
      q: { en: 'How can a hash table claim O(1) when collisions obviously exist?', bn: 'সংঘর্ষ স্পষ্টতই থাকতে হ্যাশ-টেবিল O(1) দাবি করে কেমনে?' },
      a: {
        en: 'O(1) is an average under two governance conditions: the hash scatters uniformly (avalanche discipline keeps doors fair) and load factor stays low (doubling resizes keep α under ~0.75, amortized by long runs of cheap operations). With both, chains are a handful of tenants long — constant by any honest definition — so teleport + short equality checks total constant time. Remove either condition and the claim degrades, which is why lesson two teaches flooding: adversaries attack exactly those conditions.',
        bn: 'O(1) হলো দুই শাসন-শর্তের গড়: হ্যাশ বিক্ষেপ করে অভিন্নভাবে (অ্যাভালাঞ্চ-শৃঙ্খলা দরজা ন্যায্য রাখে) আর লোড-ফ্যাক্টর কম থাকে (দ্বিগুণ-রিসাইজ α থামায় ~0.75-এর নিচে, দীর্ঘ সস্তা-অপারেশন-ধারার অ্যামর্টাইজমেন্টে)। দুটো থাকলে চেইন থাকে কয়েক-ভাড়াটের লম্বু — যে-কোনো সৎ সংজ্ঞায় ধ্রুবক — ফলে টেলিপোর্ট + সংক্ষিপ্ত সমতা-যাচাই মিলেও ধ্রুবক সময়। যেকোনো শর্ত সরালে দাবি ক্ষয় হয়, ঠিক এই কারণে দ্বিতীয় লেসন ফ্লাডিং শেখায়: প্রতিপক্ষ আক্রমণ করে হুবহু সেই শর্তগুলো।',
      },
    },
    {
      q: { en: 'Chaining vs open addressing — what does a senior choose?', bn: 'চেইনিং বনাম ওপেন-অ্যাড্রেসিং — প্রবীণ কোনটি বেছে?' },
      a: {
        en: 'By physics, not politics. Chaining: chain-lists per door — trivial deletes, tolerant of high α, but pointer-chasing chains that anguish caches. Open addressing: everything lives in the array — cache-happy probes and compact memory, but clustering taxes every neighbor and deletes need tombstones. Rule of thumb: unknown load or delete-heavy → chaining lineage (Java); tight memory, read-heavy, known sizes → open addressing lines (many C++ flat maps); and in both camps, know the clustering and tombstone sentences of the design you inherit.',
        bn: 'রাজনীতিতে নয়, পদার্থবিদ্যায়। চেইনিং: দরজাপ্রতি চেইন-তালিকা — তুচ্ছ ডিলিট, উচ্চ α সহ্যকারী, অথচ পয়েন্টার-পিছনে ক্যাশ-ক্লেশী চেইন। ওপেন-অ্যাড্রেসিং: সবকিছু অ্যারের ভেতরেই — ক্যাশ-প্রিয় প্রোব আর সংহত মেমরি, অথচ গুচ্ছায়ন প্রতিবেশী সবাইকে কর বোঝায় আর ডিলিটে লাগে টম্বস্টোন। হাতের-কাছের নিয়ম: অজানা লোড বা ডিলিট-ভারী → চেইনিং বংশ (Java); টানটান মেমরি, পড়া-ভারী, জানা আকার → ওপেন-অ্যাড্রেসিং লাইন (অনেক C++ ফ্ল্যাট-ম্যাপ); আর দুই শিবিরেই জানুন আপনার উত্তরাধিকার-নকশার গুচ্ছায়ন- বা টম্বস্টোন-বাক্য।',
      },
    },
    {
      q: { en: 'What is hash flooding and how do you stop it?', bn: 'হ্যাশ ফ্লাডিং কী, থামাবেন কীভাবে?' },
      a: {
        en: 'If the hash over attacker-controlled strings is deterministic and computable by the attacker, collisions become farmable: a precomputed key set sharing one door turns a request handler’s map ops into O(n) each, the whole request into O(n²) — a tiny POST as a server-melter. Stop it by removing computability: salt hashes with a per-process random secret (SipHash, Python ≥3.4/Rust defaults), keep a degrade-ceiling where applicable (Java treeifies long chains to log n), and rate-limit as a symptom-soother — never as the defense of record.',
        bn: 'আক্রমণকারী-নিয়ন্ত্রিত স্ট্রিংয়ের হ্যাশ নির্ধারক ও আক্রমণকারীর গণনাযোগ্য হলে সংঘর্ষ চাষযোগ্য হয়: পূর্বগণিত একই-দরজা চাবির সেট রিকোয়েস্ট-হ্যান্ডলারের ম্যাপ-অপগুলোকে প্রতিটিতে O(n) বানায়, পুরো রিকোয়েস্ট O(n²) — ক্ষুদ্র একটি POST-ই সার্ভার-গলক। থামান গণনাযোগ্যতা সরিয়ে: প্রক্রিয়াপ্রতি এলোমেলো গোপনীয়তাসহ হ্যাশে লবণ (SipHash, Python ≥3.4/Rust ডিফল্ট), প্রযোজ্য ক্ষেত্রে অবক্ষয়-সিলিং রাখুন (Java লম্বা চেইন log n-এ ট্রি-রূপায়), আর রেট-লিমিট থাকুক লক্ষণ-প্রশমক — কখনোই না মূল প্রতিরক্ষা।',
      },
    },
    {
      q: { en: 'equals/hashCode contract — what breaks when it breaks?', bn: 'equals/hashCode চুক্তি — ভাঙলে কী ভাঙে?' },
      a: {
        en: 'The lookup protocol itself. Stage one routes by hash, stage two confirms by equals; if equals changes without hashCode following, logically-equal keys scatter to different doors and the map stores duplicates blind to each other — contains lies, dedupe dies, and every unit test of equals in isolation still passes (the bug lives between the stages, not inside either). Enforce it with property tests that assert equal⇒equal-hash across generated instances, and freeze hash-significant fields after insertion.',
        bn: 'লুকআপ-প্রোটোকল নিজেই। প্রথম স্তর হ্যাশে পাঠায়, দ্বিতীয় সমতায় নিশ্চিত করে; hashCode না মিলে equals বদলালে যুক্তির-সমান চাবিরা ছড়ায় ভিন্ন দরজায়, ম্যাপ জমা করে অন্ধ ডুপ্লিকেট — contains মিথ্যা বলে, ডিডুপ মরে, আর equals-এর একক ইউনিট-টেস্টও পাস করে (বাগ থাকে স্তরদুটোর মাঝখানে, কোনোটির ভেতরে নয়)। বলবৎ করুন প্রপার্টি-টেস্টে — উৎপাদিত ইনস্ট্যান্সজুড়ে সমান⇒সমান-হ্যাশ দাবি — আর ইনসার্ট-পরবর্তী হ্যাশ-গুরুত্বপূর্ণ ফিল্ড হিমায়িত করুন।',
      },
    },
  ],
  realWorld: [
    { en: 'Python guarantees dicts iterate in insertion order since 3.7 — a portability promise written into the language; Java HashMap explicitly promises nothing.', bn: 'Python গ্যারান্টি দেয় dict ইটারেট হয় ইনসারশন-ক্রমে (3.7 থেকে) — ভাষাতে লেখা বহনযোগ্যতা-প্রতিশ্রুতি; Java HashMap স্পষ্ট কিছুই প্রতিশ্রুতি দেয় না।' },
    { en: 'Redis object system is the Hash Lab at network scale: dicts with incremental rehashing — the resize rescue spread over many small steps instead of one.', bn: 'Redis অবজেক্ট-সিস্টেম হলো নেটওয়ার্ক-স্কেলের Hash Lab: ক্রমিক-রিসাইজসহ dict — দ্বিগুণ-উদ্ধার এখানে ছড়িয়ে অনেক ছোট ধাপে।' },
    { en: 'Postgres hash indexes are specialists for equality on wide keys while the B-tree stands default: the order-vs-doors decision, maintained by professionals.', bn: 'Postgres হ্যাশ-ইনডেক্স প্রশস্ত চাবিতে সমতার বিশেষজ্ঞ, অথচ B-ট্রি দাঁড়িয়ে ডিফল্ট: ক্রম-বনাম-দরজা সিদ্ধান্ত, পেশাজীবী রক্ষণাবেক্ষণে।' },
    { en: 'Every Set/Map conversion at a loop boundary (DSA hub, lesson one) is this hub in its daily costume: O(1) doors replacing O(n) scanning costumes.', bn: 'লুপ-সীমানায় প্রতি Set/Map রূপান্তর (DSA হাব, প্রথম লেসন) এই হাবেরই দৈনন্দিন পোশাক: O(n) স্ক্যান-পোশাকের বদলে O(1) দরজা।' },
  ],
};
