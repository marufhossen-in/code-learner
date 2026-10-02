import type { Hub } from '../../lib/types';
import { pointerThinkingLesson } from './lessons/pointer-thinking';
import { pointerSurgeryLesson } from './lessons/pointer-surgery';
import { theAddressMachinesLesson } from './lessons/the-address-machines';
import { theCourierDisciplineLesson } from './lessons/the-courier-discipline';
import { theDoublyChainedCourtLesson } from './lessons/the-doubly-chained-court';
import { theCycleCartographerLesson } from './lessons/the-cycle-cartographer';
import { theSkipTowerLesson } from './lessons/the-skip-tower';
import { theMemoryDioramaLesson } from './lessons/the-memory-diorama';
import { theChainPanoramaLesson } from './lessons/the-chain-panorama';

export const llHub: Hub = {
  slug: 'linked-lists',
  name: 'Linked Lists',
  icon: '🔗',
  tagline: {
    en: 'The structure that exists only in its arrows: O(1) stitches for those who walk, reachable-or-dead physics for everyone.',
    bn: 'যে কাঠামো টেকে কেবল তার তীরগুলোতে: হাঁটতে-স্কুলে যাওয়াদের জন্য O(1) সেলাই, সবার জন্য পৌঁছানো-নয়-মৃত্যু পদার্থবিদ্যা।',
  },
  about: {
    en: 'Arrays rent contiguity and pay shifting tax. Linked lists tear up the lease entirely: nodes born anywhere in the heap, structure spelled out by next-pointers alone, membership changes performed as pointer edits while the rest of the list does not budge. This hub is where the platform’s DSA lineage becomes physical. Lesson one teaches the model — node = value + one hand, head as the only door, position rented by the hop, and the reachability law that silently buries any node whose last hand lets go. Lesson two puts scalpel in hand: the two-stitch insert whose ORDER is legislation, the vault-over-the-victim delete, the dummy-head pattern that deletes special cases instead of nodes, the reverse dance with its pocket-proof invariant, Floyd’s tortoise-and-hare proof of cycles, and the severed-tail debug drill every interview panel has watched a candidate bleed through. Everything runs in the Linked List Lab, where hands labeled head/p/prev/cur/tmp/fresh hover over boxes and arrows while you freeze the dance frame by frame. You leave able to recite surgery invariants under pressure — the exact skill that separates “said O(n)” from “wrote O(n) and meant it”.',
    bn: 'অ্যারে ভাড়া নেয় সংলগ্নতা, দেয় সরানো কর। লিংকড-লিস্ট চুক্তিনামা ছিঁড়ে ফেলে পুরো: নোড জন্মায় heap-এ যে-কোথাও, কাঠামো বানান হয় next-পয়েন্টার অক্ষরে, সদস্য-পরিবর্তন হয় পয়েন্টার-সম্পাদনায়, বাকি লিস্ট এক চুল না-নাড়িয়ে। এই হাবে প্ল্যাটফর্মের DSA বংশধরা হয়ে ওঠে শারীরিক। প্রথম লেসন শেখায় মডেল — নোড = মান + এক হাত, একমাত্র দরজা হিসেবে head, লাফের ভাড়ায় অবস্থান, আর পৌঁছানো-যাওয়া বিধান যা নীরবে সমাধিস্থ করে প্রতি নোড যার শেষ হাত ছেড়েছে। দ্বিতীয় লেসন হাতে দেয় স্নায়ুছুরি: দুই-সেলাই ইনসার্ট যার ক্রম হলো আইন, ভুক্তভোগীর-মাথা-উড়ে-ভল্ট ডিলিট, ডামি-হেড প্যাটার্ন যা নোড নয় বিশেষ-বাক্স ডিলিট করে, পকেট-প্রমাণ-অনবরত-সত্যসহ উল্টানো-নাচ, চক্র-প্রমাণের Floyd-এর কাঠবিড়ালি-খরগোশ, আর বিচ্ছিন্ন-লেজ ডিবাগ-ড্রিল যা প্রতি ইন্টারভিউ-প্যানেল প্রার্থীদের রক্তক্ষরণে দেখেছে। সবকিছু চলে Linked List Lab-এ — বাক্স-তীরের ওপর ভাসমান হাত head/p/prev/cur/tmp/fresh, যখন আপনি নাচ ফ্রিজ করেন ফ্রেমে ফ্রেমে। ফিরে আসবেন চাপের মধ্যেও সার্জারি-অনবরত-সত্য আবৃতি-করার সামর্থ্য নিয়ে — “বললাম O(n)” আর “লিখলাম O(n) বোঝে পড়ে”-র মাঝের সেই বিভাজক দক্ষতাটিই।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The model', bn: 'ধাপ ১ — মডেল' },
      items: [
        { en: 'Node = value + next; structure lives ONLY in arrows (lesson 1)', bn: 'নোড = মান + next; কাঠামো থাকে কেবল তীরে (লেসন ১)' },
        { en: 'head: the one door — lose it, lose everything at once', bn: 'head: এক দরজা — হারালেই পুরোটা একসাথে হারানো' },
        { en: 'Position is rented by the hop: the k-th node costs k dereferences', bn: 'অবস্থান ভাড়া-নেওয়া লাফে: k-তম নোড খরচ k অনুসরণ' },
        { en: 'Reachability is life: GC buries whomever the last hand releases', bn: 'পৌঁছানো-যাওয়াই জীবন: শেষ হাত ছাড়লে GC সমাধি করে' },
      ],
    },
    {
      title: { en: 'Stage 2 — Surgery', bn: 'ধাপ ২ — সার্জারি' },
      items: [
        { en: 'Insert: two stitches, ORDER legislated (fresh.next first)', bn: 'ইনসার্ট: দুই সেলাই, আইনকৃত ক্রম (আগে fresh.next)' },
        { en: 'Delete: one pointer vault over the victim, zero shifting', bn: 'ডিলিট: ভুক্তভোগীর মাথা উড়ে এক পয়েন্টার-ভল্ট, শূন্য সরানো' },
        { en: 'Dummy head: delete the if (k===0) branch, not the node (lesson 2)', bn: 'ডামি হেড: if (k===0) শাখা ডিলিট করুন, নোড নয় (লেসন ২)' },
        { en: 'Edge cases audit: empty list, head court, last-node stitches', bn: 'প্রান্তিক-নিরীক্ষণ: খালি লিস্ট, head-অস্ত্রোপচার, শেষ-নোড সেলাই' },
      ],
    },
    {
      title: { en: 'Stage 3 — Dances with proofs', bn: 'ধাপ ৩ — প্রমাণসহ নাচ' },
      items: [
        { en: 'Reverse: tmp→flip→advance, pocket-proof invariant (lesson 2)', bn: 'উল্টানো: tmp→ঘোরানো→অগ্রসর, পকেট-প্রমাণ অনবরত-সত্য (লেসন ২)' },
        { en: 'Floyd: deterministic capture in a circular stadium, O(1) memory', bn: 'Floyd: বৃত্তাকার স্টেডিয়ামে নির্ধারক ধরা-পড়া, O(1) মেমরি' },
        { en: 'Cycle entrance: the third-runner handshake at the door', bn: 'চক্র-প্রবেশ: দরজায় তৃতীয়-দৌড়বিদের হাত-মেলানো' },
        { en: 'Doubly-linked upgrade: a backward hand for O(1) known-node delete', bn: 'দ্বি-হাত উন্নয়ন: পরিচিত-নোড ডিলিট O(1)-এ, বিনিময়ে মেমরি' },
      ],
    },
    {
      title: { en: 'Stage 4 — Lists at scale', bn: 'ধাপ ৪ — বড় স্কেলে লিস্ট' },
      items: [
        { en: 'LRU = hash map + doubly-linked list, fused (the two hubs meet)', bn: 'LRU = হ্যাশ-ম্যাপ + দ্বি-লিংক লিস্ট, মিশে-যাওয়া (দুই হাবের মিলন)' },
        { en: 'Free-lists in allocators; intrusive lists in kernels', bn: 'অ্যালোকেটরের ফ্রি-লিস্ট; কার্নেলের intrusive লিস্ট' },
        { en: 'Adjacency lists — the graph hub’s raw ingredient', bn: 'অ্যাডজেসেন্সি-লিস্ট — গ্রাফ হাবের কাঁচামাল' },
        { en: 'When arrays still win: read-heavy, cache-hungry sweeps', bn: 'কখন অ্যারেই জেতে: পড়া-ভারী, ক্যাশ-ক্ষুধার্ত ঝাঁটা' },
      ],
    },
  ],
  lessons: [pointerThinkingLesson, pointerSurgeryLesson, theAddressMachinesLesson, theCourierDisciplineLesson, theDoublyChainedCourtLesson, theCycleCartographerLesson, theSkipTowerLesson, theMemoryDioramaLesson, theChainPanoramaLesson],
  reference: [
    {
      group: 'Walking & reading',
      methods: [
        {
          name: 'traverse / at(k)',
          signature: 'let p = head; for (i<k) p = p.next',
          params: { en: 'Rent position k with exactly k dereferences — the only purchase this structure offers.', bn: 'হুবহু k অনুসরণে অবস্থান k ভাড়া — এই কাঠামোর একমাত্র কেনাকাটা।' },
          returns: { en: 'The node at position k, or null past the end. O(k), cache-hostile per hop.', bn: 'অবস্থান k-এর নোড, নয় থামার ওপারে null। O(k), প্রতি লাফে ক্যাশ-বিরোধী।' },
          example: 'let p = head; for (let i = 0; p && i < k; i++) p = p.next;',
          mistake: { en: 'Looping by index into null, then dereferencing — the walk-off TypeError.', bn: 'ইনডেক্সে null পর্যন্ত লুপ করে তারপর অনুসরণ — সেই পা-ফসকানো TypeError।' },
        },
        {
          name: 'length audit',
          signature: 'count while (cur) — or maintain your own counter',
          params: { en: 'The chain itself is the only honest odometer; lists do not know their size.', bn: 'শিকল নিজেই একমাত্র সৎ মাইলগণক; লিস্ট নিজের আকার জানে না।' },
          returns: { en: 'n after an O(n) honest walk — cache friends: KEEP a length variable if sizes matter.', bn: 'O(n) সৎ-হাঁটার পরে n — বন্ধুত্বপূর্ণ উপায়: দৈর্ঘ্য মানে রাখলে length ভেরিয়েবলই ধরে রাখুন।' },
          example: 'let n = 0; for (let cur = head; cur; cur = cur.next) n++;',
        },
      ],
    },
    {
      group: 'Surgery',
      methods: [
        {
          name: 'insert front',
          signature: 'head = { value, next: head }',
          params: { en: 'The list’s celebrated bargain: newcomer grasps the whole chain, head is reassigned. Two assignments.', bn: 'লিস্টের বিখ্যাত সওদা: নবাগত পুরো শিকল হাতে নেয়, head নতুন বরাদ্দ। দুই অ্যাসাইনমেন্ট।' },
          returns: { en: 'O(1) — no walk, no shift, no apology.', bn: 'O(1) — হাঁটা নেই, সরানো নেই, ক্ষমা-প্রার্থনা নেই।' },
          example: 'head = node(' + String.fromCharCode(39) + 'pineapple' + String.fromCharCode(39) + ', head);',
        },
        {
          name: 'insertAfter court',
          signature: 'fresh.next = court.next; court.next = fresh',
          params: { en: 'Two stitches in LEGISLATED order — grasp the tail before releasing the court.', bn: 'আইনকৃত ক্রমে দুই সেলাই — অস্ত্রোপচার-স্থল ছাড়ার আগে লেজ হাতে নিন।' },
          returns: { en: 'O(1) after the O(k) courtship walk. The honest bill has two lines.', bn: 'O(k) প্রণয়-হাঁটার পর O(1)। সৎ বিলের দুই লাইন আছে।' },
          example: 'fresh.next = court.next; court.next = fresh;',
          mistake: { en: 'Reversed order: court forgets the tail BEFORE fresh grasps it — orphaned chain plus self-cycle, one line-pair, two disasters.', bn: 'উল্টা ক্রম: fresh হাতে নেওয়ার আগেই court লেজ ভুলে গেছে — অনাথ শিকল যোগ আত্ম-চক্র, এক লাইন-জোড়ায় দুই দুর্যোগ।' },
        },
        {
          name: 'deleteAfter court',
          signature: 'court.next = court.next.next',
          params: { en: 'One vault over the victim; performed from the court, never the victim. Guard for null twice.', bn: 'ভুক্তভোগীর মাথা উড়ে এক ভল্ট; অস্ত্রোপচার-স্থল থেকে, ভুক্তভোগী থেকে নয়। null-রক্ষী দুইবার।' },
          returns: { en: 'O(1); victim unreachable → collector reclaims. Doubly-linked lists downgrade known-node delete to this sentence.', bn: 'O(1); ভুক্তভোগী অপৌঁছনীয় → কালেক্টর সংগ্রহ করে। দ্বি-লিংক লিস্ট পরিচিত-নোড ডিলিট নামায় এই বাক্যে।' },
          example: 'if (court && court.next) court.next = court.next.next;',
        },
        {
          name: 'dummy head',
          signature: 'const dummy = { value: null, next: head }',
          params: { en: 'A throwaway court parked before the real head — every position gains a uniform surgery path.', bn: 'আসল head-এর আগে পার্ক করা ফেলনা অস্ত্রোপচার-স্থল — প্রতি অবস্থান পায় অভিন্ন সার্জারি-পথ।' },
          returns: { en: 'Zero if (k===0) branches; one allocation; return dummy.next.', bn: 'শূন্য if (k===0) শাখা; একটি বরাদ্দ; return dummy.next।' },
          example: 'const dummy = { value: null, next: head }; …; return dummy.next;',
        },
      ],
    },
    {
      group: 'Dances & detectors',
      methods: [
        {
          name: 'reverse',
          signature: 'tmp = cur.next; cur.next = prev; prev = cur; cur = tmp',
          params: { en: 'Save the tail, flip the arrow, advance both — one refrain per node.', bn: 'লেজ বাঁচান, তীর ঘোরান, দুজনেই এগিয়ে — নোডপ্রতি এক সুর।' },
          returns: { en: 'return prev — old tail, new head. O(n) time, O(1) extra memory.', bn: 'return prev — পুরনো লেজ, নতুন নেতা। সময় O(n), বাড়তি মেমরি O(1)।' },
          example: 'let prev = null, cur = head; while (cur) { const t = cur.next; cur.next = prev; prev = cur; cur = t; }',
          mistake: { en: 'prev = head as an initializer — a dirty start that stitches the tail to the start: ring city.', bn: 'prev = head শুরুতে — নোংরা শুরু, লেজ জুড়ে যায় শুরুতে: বলয় নগর।' },
        },
        {
          name: 'hasCycle (Floyd)',
          signature: 'slow++, fast += 2; meet ⇒ cycle',
          params: { en: 'Two runners, a circular stadium, a gap that shrinks by exactly one per turn.', bn: 'দুই দৌড়বিদ, বৃত্তাকার স্টেডিয়াম, প্রতি ঘুরে হুবহু এক-ঘরে কমা ফাঁক।' },
          returns: { en: 'true with proof at gap 0; false when fast signs the null affidavit. O(n), O(1) memory.', bn: 'ফাঁক ০-তে প্রমাণসহ true; fast null-শপথনামা সই করলে false। O(n), O(1) মেমরি।' },
          example: 'while (fast && fast.next) { slow = slow.next; fast = fast.next.next; if (slow === fast) return true; }',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Build a Type-Safe List, by Hand', bn: 'হাতে গড়া টাইপ-নিরাপদ লিস্ট' },
      diff: 'beginner',
      desc: {
        en: 'Implement pushFront/insertAfter/deleteAfter/reverse over raw node objects, then wrap them in a tiny class with a maintained length. Unit tests must include the walk-off the end, the empty-list dance, and the severed-tail regression: assert chainValues still spells the original tail after every surgery.',
        bn: 'কাঁচা নোড-অবজেক্টে pushFront/insertAfter/deleteAfter/reverse বানান, তারপর ছোট ক্লাসে মোড়ান length-রক্ষণাবেক্ষণসহ। ইউনিট-টেস্টে থাকতেই হবে: শেষ-পেরিয়ে-হাঁটা, খালি-লিস্ট নাচ, আর বিচ্ছিন্ন-লেজ রিগ্রেশন — প্রতি সার্জারির পর দাবি করুন পুরনো লেজ chainValues-এ অক্ষত আছে।',
      },
    },
    {
      title: { en: 'Floyd in the Field', bn: 'ক্ষেত্রময় Floyd' },
      diff: 'intermediate',
      desc: {
        en: 'Write hasCycle and findCycleStart, then DELIBERATELY manufacture the two classic disasters — reversed-stitch self-cycle and dirty-start ring — and prove the detector catches both in under 2n hops. Deliverable: a test file where the bug is the fixture and the detector is the verdict.',
        bn: 'লিখুন hasCycle ও findCycleStart, তারপর ইচ্ছাকৃত দুই ধ্রুপদি দুর্যোগ তৈরি করুন — উল্টা-সেলাইয়ের আত্ম-চক্র আর নোংরা-শুরুর বলয় — প্রমাণ করুন ডিটেক্টর ২n লাফের মধ্যে দুটোই ধরে। ডেলিভারেবল: এমন টেস্ট-ফাইল যেখানে বাগ-ই ফিক্সচার, ডিটেক্টর-ই রায়।',
      },
    },
    {
      title: { en: 'LRU Cache — the Two Hubs Meet', bn: 'LRU ক্যাশ — দুই হাবের মিলন' },
      diff: 'advanced',
      desc: {
        en: 'Fuse the hash hub and this one: a Map for O(1) doors plus a doubly-linked list ordered by recency. get moves a node to the head court in O(1); eviction vaults the tail. Property tests: capacity respected, recency order exact, and every node reachable from BOTH structures after every operation — the fusions are where invariants earn rent.',
        bn: 'হ্যাশ হাব আর এই হাব মেলান: O(1) দরজার জন্য Map, সাম্প্রতিকতা-ক্রমের জন্য দ্বি-লিংক লিস্ট। get নোডকে O(1)-এ head-অস্ত্রোপচার-স্থলে তোলে; বিতাড়ন লেজের মাথা ভল্ট করে। প্রপার্টি-টেস্ট: capacity মান্যত, সাম্প্রতিকতা-ক্রম হুবহু, আর প্রতি অপারেশনের পর প্রতি নোড দুই কাঠামো থেকেই পৌঁছানো যায় — মিলনের জায়গাতেই অনবরত-সত্য ভাড়া উপার্জন করে।',
      },
    },
  ],
  bestPractices: [
    { en: 'Name the bill before naming the structure: random reads → array; splices at known courts → list.', bn: 'কাঠামোর নামের আগে বিলের নাম: এলোমেলো পড়া → অ্যারে; পরিচিত অস্ত্রোপচার-স্থলে জোড়া → লিস্ট।' },
    { en: 'Loop on the pointer, never the index: while (cur !== null) IS the only honest length.', bn: 'পয়েন্টারে লুপ, ইনডেক্সে কখনো নয়: while (cur !== null)-ই একমাত্র সৎ দৈর্ঘ্য।' },
    { en: 'Recite the stitch order before writing it: grasp the tail, then release the court.', bn: 'লেখার আগে সেলাই-ক্রম আবৃত করুন: আগে লেজ হাতে, তারপর অস্ত্রোপচার-স্থল ছাড়া।' },
    { en: 'One dummy head beats every if (k === 0) — branches are bugs pre-rented.', bn: 'একটি ডামি হেড প্রতি if (k === 0)-কে হারায় — শাখা হলো আগেই-ভাড়া-দেওয়া বাগ।' },
    { en: 'Say the invariant out loud per dance: behind prev reversed, from cur untouched.', bn: 'প্রতি নাচে জোরে বলুন অনবরত-সত্য: prev-এর পেছনে উল্টানো, cur থেকে অচূত।' },
    { en: 'After every surgery function in CI, run hasCycle. Detectors are cheaper than incident reviews.', bn: 'প্রতি সার্জারি-ফাংশনের পরে CI-তে hasCycle। ইনসিডেন্ট-রিভিউর চেয়ে ডিটেক্টর সস্তা।' },
  ],
  interview: [
    {
      q: { en: 'When would you choose a linked list over an array?', bn: 'কখন অ্যারের বদলে লিংকড-লিস্ট বাছবেন?' },
      a: {
        en: 'When the workload spends splices, not reads. Arrays own random access O(1) and cache-friendly sweeps but charge O(n) for mid-structure membership changes — the shifting tax on contiguity. Lists invert the ledger: insert/delete at a KNOWN node is two stitches with nobody moving, growth needs no resize, and the front of the list costs O(1) forever. The honest interview addendum: the k-th element costs O(k) on a list, cache behaviour is poor (every hop is a dereference to an unpredictable address, defeating the prefetcher), and each node pays value-plus-pointer memory. So the precise sentence is: choose the list when inserts and deletes land at courts you already hold — queues, LRU recency chains, allocator free-lists — and choose the array the moment positions must be read rather than spliced.',
        bn: 'যখন কাজের চাপ খরচ করে জোড়ায়, পড়ায় নয়। অ্যারের দখলে র‍্যান্ডম-অ্যাক্সেস O(1) আর ক্যাশ-বান্ধব ঝাঁটা, কিন্তু নেয় O(n) মাঝের সদস্য-পরিবর্তনে — সংলগ্নতার সরানো কর। লিস্ট খাতা উল্টে দেয়: পরিচিত নোডে ইনসার্ট/ডিলিট মানে দুই সেলাই, কেউ নড়ে না, বৃদ্ধিতে রিসাইজ লাগে না, আর সামনের মাথা চিরকাল O(1)। ইন্টারভিউর সৎ পরিশিষ্ট: k-তম উপাদান লিস্টে খরচ O(k), ক্যাশ-আচরণ দুর্বল (প্রতি লাফ অচেনা ঠিকানায় অনুসরণ, prefetcher পরাভূত), আর প্রতি নোডে মেমরি মূল্য মান-যোগ-পয়েন্টার। সূতরাং সুস্পষ্ট বাক্য: লিস্ট বাছুন যখন ইনসার্ট-ডিলিট নামে এমন অস্ত্রোপচার-স্থলে যা আপনি আগেই ধরে আছেন — কিউ, LRU-সাম্প্রতিকতা-শিকল, অ্যালোকেটর ফ্রি-লিস্ট; আর অবস্থান পড়তে হলে-ই অ্যারে।',
      },
    },
    {
      q: { en: 'Reverse a linked list — go.', bn: 'লিংকড-লিস্ট উল্টে দিন — শুরু করুন।' },
      a: {
        en: 'Three hands: prev starts at null, cur at head. Per refrain: tmp = cur.next (rescue the tail BEFORE touching it), cur.next = prev (flip exactly one arrow), prev = cur and cur = tmp (advance as one creature). Termination: cur is null ⇒ everything sits behind prev ⇒ return prev. I keep the proof in my pocket as an invariant — “everything behind prev is reversed, everything from cur onward untouched” — which is trivially true at start, preserved per refrain, and at termination becomes the theorem. O(n) time, O(1) extra memory, no new nodes. The candidate-killers I name unprompted: losing the tail by flipping before saving, and the dirty start prev = head which closes a ring.',
        bn: 'তিন হাত: prev শুরু null-এ, cur head-এ। প্রতি সুরে: tmp = cur.next (তীর ছোঁয়ার আগেই লেজ উদ্ধার), cur.next = prev (হুবহু একটি তীর ঘোরানো), prev = cur আর cur = tmp (এক প্রাণের মতো অগ্রসর)। সমাপ্তি: cur হলো null ⇒ সবই prev-এর পেছনে ⇒ return prev। পকেটে রাখি অনবরত-সত্য প্রমাণ — “prev-এর পেছনের সব উল্টানো, cur থেকে অচূত” — শুরুতে তুচ্ছ সত্য, প্রতি সুরে রক্ষিত, সমাপ্তিতে উপপাদ্য। সময় O(n), বাড়তি মেমরি O(1), নতুন নোড শূন্য। অজুহাত-ছাড়া নাম বলি প্রার্থী-ঘাতীদের: বাঁচানোর আগে ঘোরানোয় হারানো লেজ, আর নোংরা শুরু prev = head যা বলয় বন্ধ করে দেয়।',
      },
    },
    {
      q: { en: 'Detect a cycle in O(1) space, and find where it starts.', bn: 'O(1) জায়গায় চক্র শনাক্ত করুন, আর বলুন কোথায় শুরু।' },
      a: {
        en: 'Floyd: slow walks one hop per turn, fast two. If a cycle exists downstream, once both are inside the ring fast gains exactly one node per turn — a circular gap shrinking by one guarantees capture at 0, never a pass-by; no cycle means fast reaches null, the sworn affidavit. To find the door: freeze slow at the meeting point, park a third runner at head, advance both one hop per turn — head-to-door and meeting-to-door are equal distances around the ring, so the handshake lands exactly on the entrance. Linear time, two or three pointers, zero bookkeeping arrays — the canonical answer, and the reason “tortoise and hare” is the phrase that ends the question.',
        bn: 'Floyd: slow চলে এক লাফ, fast দুই। নিচে চক্র থাকলে, দুজনে বৃত্তে ঢোকামাত্র fast প্রতি ঘুরে হুবহু এক নোডে এগিয়ে যায় — এক-ঘরে কমা বৃত্তাকার ফাঁক নিশ্চিত করে ০-তে ধরা-পড়া, উল্টে-যাওয়া কখনো নয়; চক্র না থাকলে fast পৌঁছায় null, সেই শপথনামা। দরজা খুঁজতে: slow-কে মিলন-স্থলে জমান, head-এ রাখুন তৃতীয় দৌড়বিদ, দুজনে এক-লাফ গতি — head-থেকে-দরজা আর মিলন-থেকে-বৃত্ত-ঘুরে-দরজা দূরত্বে সমান, তাই হাত মেলে হুবহু প্রবেশপথে। রৈখিক সময়, দুই-তিন পয়েন্টার, শূন্য হিসাব-খাতা — আদর্শ উত্তর, আর “tortoise and hare” বাক্যটি প্রশ্ন শেষ করে এই কারণেই।',
      },
    },
    {
      q: { en: 'Why do experienced teams still default to arrays/dynamic arrays in read-heavy services?', bn: 'অভিজ্ঞ দল পড়া-ভারী সার্ভিসে তবু অ্যারে/ডাইনামিক-অ্যারে ডিফল্ট করে কেন?' },
      a: {
        en: 'Because physics beats Big-O at the benchmark table. Contiguity lets the prefetcher run ahead of the loop — a sweep of n array cells rides memory in bulk, while n list hops pay full latency per node at unpredictable addresses. The same O(n) in both columns can be an order of magnitude apart in wall-clock, and read-heavy services live in wall-clock. Add per-node pointer overhead — memory footprint, GC pressure, allocation churn — and the list only earns its keep where surgery dominates: known-court splices, recency-ordered chains, intrusive kernel structures. The senior answer names WHERE the list wins instead of apologizing for arrays: caches (LRU), allocators (free-lists), schedulers (wait queues) — anywhere the bill is paid in stitches, not steps.',
        bn: 'কারণ বেঞ্চমার্ক-টেবিলে পদার্থবিদ্যা Big-O-কে হারায়। সংলগ্নতায় prefetcher লুপের সামনে দৌড়ায় — n ঘরের ঝাঁটা মেমরি নেয় বাল্কে, যেখানে n লাফ দেয় পুরো ল্যাটেন্সি নোডপ্রতি অচেনা ঠিকানায়। দুই কলামের একই O(n) দেয়াল-ঘড়িতে দশগুণ দূরে থাকতে পারে, আর পড়া-ভারী সার্ভিস বাস করে দেয়াল-ঘড়িতেই। এর সঙ্গে নোডপ্রতি পয়েন্টার-খরচ — মেমরি-ছাপ, GC চাপ, বরাদ্দ-নড়াচড়া — তখন লিস্ট রুটি-রুজি পায় কেবল যেখানে সার্জারি-ই চাপ: পরিচিত-অস্ত্রোপচার-স্থল জোড়া, সাম্প্রতিকতা-শিকল, কার্নেলের intrusive কাঠামো। প্রবীণ উত্তর ক্ষমা না-চেয়ে নাম বলে লিস্ট কোথায় জেতে: ক্যাশ (LRU), অ্যালোকেটর (ফ্রি-লিস্ট), শিডিউলার (ওয়েট-কিউ) — যেখানেই বিল পরিশোধ হয় সেলাইতে, পদসংখ্যায় নয়।',
      },
    },
  ],
  realWorld: [
    { en: 'Ask Linux: list_head is embedded inside task structs, inode structs, socket structs — one intrusive linked-list vocabulary spoken by the whole kernel since 2.4.', bn: 'লিনাক্সকে জিজ্ঞেস করুন: list_head বসানো আছে task, inode, socket struct-এর ভেতরে — 2.4 থেকে পুরো কার্নেল কথা বলে এক intrusive লিংকড-লিস্ট শব্দভান্ডারে।' },
    { en: 'Your browser’s HTTP connection reuse pools and JS timer queues are pointer chains precisely because inserting anywhere must never shift anybody.', bn: 'ব্রাউজারের HTTP কানেকশন-পুল আর JS টাইমার-কিউ পয়েন্টার-শিকল হুবহু এই কারণে: যে-কোথাও ইনসার্ট যেন কাউকে কখনো সরাতে না-পারে।' },
    { en: 'LeetCode 206 (reverse), 141/142 (cycle + entrance) are this hub verbatim — the lab’s dance frames ARE the whiteboard.', bn: 'LeetCode 206 (উল্টানো), 141/142 (চক্র + প্রবেশ) হুবহু এই হাব — ল্যাবের নাচ-ফ্রেমগুলোই হোয়াইটবোর্ড।' },
    { en: 'Doubly-linked lists power Redis’s consumer-group structures and every LRU ever shipped — the warp upgrade (one backward hand for O(1) known-node delete) is production’s favorite exchange rate.', bn: 'দ্বি-লিংক লিস্ট চালায় Redis-এর কনজিউমার-গ্রুপ কাঠামো আর শিপ-হওয়া প্রতি LRU — warp উন্নয়ন (পরিচিত-নোড ডিলিট O(1)-এ, বিনিময়ে এক পেছন-মুখী হাত) প্রোডাকশনের প্রিয় বিনিময়-হার।' },
  ],
};
