import type { Hub } from '../../lib/types';
import { pythonThinkingLesson } from './lessons/python-thinking';
import { oopAndEcosystemLesson } from './lessons/oop-and-ecosystem';
import { branchingAndDictionariesLesson } from './lessons/branching-and-dictionaries';
import { textAndNumbersLesson } from './lessons/text-and-numbers-point-by-point';
import { tuplesAndSetsLesson } from './lessons/tuples-and-sets-point-by-point';
import { mutationBindingLesson } from './lessons/mutation-and-binding';
import { sequenceMillLesson } from './lessons/the-sequence-mill';
import { mappingVaultLesson } from './lessons/the-mapping-vault';
import { functionFoundryLesson } from './lessons/the-function-foundry';
import { classCourtLesson } from './lessons/the-class-court';
import { generatorGardenLesson } from './lessons/the-generator-garden';
import { errorCourtLesson } from './lessons/the-error-court';
import { importArchiveLesson } from './lessons/the-import-archive';

export const pyHub: Hub = {
  slug: 'python',
  name: 'Python',
  icon: '🐍',
  tagline: {
    en: 'Readable like pseudocode, honest about its physics: names are stickers, everything is an object, and mutation broadcasts by design.',
    bn: 'সিউডোকোডের মতো পঠনযোগ্য, পদার্থবিদ্যা নিয়ে সৎ: নাম হলো স্টিকার, সবকিছু অবজেক্ট, আর পরিবর্তন প্রচার হয় নকশাতেই।',
  },
  about: {
    en: 'Python wins beginners by reading like English and keeps professionals by hiding nothing: the sticker model (names bind, values live), the mutability taxonomy, and the CPython machinery (bytecode, refcounting, the GIL) are all visible within the first week if you know where to look. This hub teaches exactly where to look — two deep lessons built around the Python Lab, where you step through code and watch names paste onto objects, shared lists grow through any sticker, ints rebind instead of rewriting, and the famous mutable-default trap assemble itself at def-time. Then the discipline: is vs ==, shallow vs deep copies, mutation policies at module boundaries, and the four idioms that make senior Python read like a contract. The result is the jump from “Python does weird things” to predicting every line before it runs — the foundation that Django, Flask, FastAPI and machine-learning hubs all assume you own.',
    bn: 'পাইথন নতুনদের জয় করে ইংরেজির মতো পড়া যায় বলে, পেশাদারদের ধরে রাখে কিছুই না লুকিয়ে: স্টিকার-মডেল (নাম বাঁধে, মান থাকে), পরিবর্তনীয়তা-শ্রেণিবিন্যাস, আর CPython-যন্ত্রপাতি (বাইটকোড, রেফকাউন্টিং, GIL) — সবই প্রথম সপ্তাহেই দৃশ্যমান, যদি জানা থাকে কোথায় তাকাতে হবে। এই হাব শেখায় হুবহু কোথায় তাকাতে হয় — Python Lab কেন্দ্রে রেখে দুটি গভীর লেসন, যেখানে কোড ধাপে ধাপে সামনে এগিয়ে দেখবেন নাম অবজেক্টে লাগছে, ভাগ-করা লিস্ট যে-কোনো স্টিকার দিয়েই বড় হচ্ছে, int সম্পাদনা না হয়ে নাম বদলাচ্ছে, আর বিখ্যাত মিউটেবল-ডিফল্ট ফাঁদ def-সময়েই নিজেকে জড়িয়ে ফেলছে। তারপর শৃঙ্খলা: is বনাম ==, খাঁসতর বনাম গভীর কপি, মডিউল-সীমানায় পরিবর্তন-নীতি, আর চারটি ছাঁচ যা প্রবীণ পাইথনকে চুক্তির মতো পড়া যায়। ফল হলো “পাইথন তো অদ্ভুত কিছু করে” থেকে প্রতি লাইন চলার আগেই ভবিষ্যদ্বাণী করার লাফ — সেই ভিত যা Django, Flask, FastAPI ও machine-learning হাব ধরে নেয় আপনার মালিকানায়।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The sticker model', bn: 'ধাপ ১ — স্টিকার-মডেল' },
      items: [
        { en: 'Names bind, values live: assignment never copies (lesson 1)', bn: 'নাম বাঁধে, মান থাকে: অ্যাসাইনমেন্ট কখনো কপি করে না (লেসন ১)' },
        { en: 'Everything is an object — numbers, strings, functions, None', bn: 'সবকিছু অবজেক্ট — সংখ্যা, স্ট্রিং, ফাংশন, None' },
        { en: 'Dynamic typing: types belong to objects, checked at runtime', bn: 'ডায়নামিক টাইপিং: টাইপ অবজেক্টের, যাচাই রানটাইমে' },
        { en: 'id(), is and == — the truth serum trio', bn: 'id(), is আর == — সত্য-ঔষধ ত্রয়ী' },
      ],
    },
    {
      title: { en: 'Stage 2 — Mutability discipline', bn: 'ধাপ ২ — পরিবর্তন-শৃঙ্খলা' },
      items: [
        { en: 'The taxonomy: list/dict/set vs int/str/tuple/frozenset (lesson 2)', bn: 'শ্রেণিবিন্যাস: list/dict/set বনাম int/str/tuple/frozenset (লেসন ২)' },
        { en: 'Shallow vs deep copy — and where each belongs', bn: 'খাঁসতর বনাম গভীর কপি — আর কোনটি কোথায়' },
        { en: 'None-sentinel defaults; def-time evaluation', bn: 'None-সেন্টিনেল ডিফল্ট; def-সময়ে মূল্যায়ন' },
        { en: 'Boundary policy: list() in, tuple() out', bn: 'সীমানা-নীতি: ভেতরে list(), বাইরে tuple()' },
      ],
    },
    {
      title: { en: 'Stage 3 — Data pipelines', bn: 'ধাপ ৩ — ডেটা পাইপলাইন' },
      items: [
        { en: 'Comprehensions and generator expressions as readable loops', bn: 'পঠনযোগ্য লুপ হিসেবে কম্প্রিহেনশন ও জেনেরেটর-এক্সপ্রেশন' },
        { en: 'Iterators, laziness and itertools', bn: 'ইটারেটর, অলসতা ও itertools' },
        { en: 'Decorators: function-level stickers with behavior', bn: 'ডেকোরেটর: আচরণসহ ফাংশন-স্তরের স্টিকার' },
        { en: 'Context managers (with) for resource hygiene', bn: 'সম্পদ-স্বাস্থ্যের কনটেক্সট-ম্যানেজার (with)' },
      ],
    },
    {
      title: { en: 'Stage 4 — The machine & the ecosystem', bn: 'ধাপ ৪ — যন্ত্র আর ইকোসিস্টেম' },
      items: [
        { en: 'Bytecode, namespaces, refcounting (lesson 1 internals)', bn: 'বাইটকোড, নেমস্পেস, রেফকাউন্টিং (লেসন ১-এর ভেতরের কথা)' },
        { en: 'The GIL honestly: I/O threads, CPU processes, C extensions', bn: 'GIL সত্যকথা: I/O-তে থ্রেড, CPU-তে প্রসেস, C-এক্সটেনশন' },
        { en: 'Virtualenv/pip: dependency isolation as a boundary', bn: 'virtualenv/pip: সীমানা হিসেবে নির্ভরতা-বিচ্ছিন্নতা' },
        { en: 'Toward Django/Flask/FastAPI and data science', bn: 'Django/Flask/FastAPI ও ডেটা-সায়েন্সের পথে' },
      ],
    },
  ],
  lessons: [
    pythonThinkingLesson,
    textAndNumbersLesson,
    mutationBindingLesson,
    branchingAndDictionariesLesson,
    sequenceMillLesson,
    tuplesAndSetsLesson,
    mappingVaultLesson,
    functionFoundryLesson,
    classCourtLesson,
    oopAndEcosystemLesson,
    generatorGardenLesson,
    errorCourtLesson,
    importArchiveLesson,
  ],
  reference: [
    {
      group: 'Identity & binding',
      methods: [
        {
          name: '=' ,
          signature: 'name = expression',
          params: { en: 'Evaluates the right side (object first), then pastes the name sticker onto it. Never copies.', bn: 'ডান পাশ মূল্যায়ন করে (আগে অবজেক্ট), তারপর নাম-স্টিকার লাগায়। কখনো কপি করে না।' },
          returns: { en: 'A binding in the current namespace — O(1) whatever the object size.', bn: 'চলতি নেমস্পেসে একটি বিন্ডিং — অবজেক্ট যত বড়ই হোক O(1)।' },
          example: 'a = [1, 2]\nb = a        # দ্বিতীয় স্টিকার, একই লিস্ট',
        },
        {
          name: 'is / ==',
          signature: 'a is b   |   a == b',
          params: { en: 'is compares id() — same object; == dispatches to __eq__ — same value, type-defined.', bn: 'is তুলনা করে id() — একই অবজেক্ট; == পাঠায় __eq__-তে — মান সমান, টাইপ-সংজ্ঞায়িত।' },
          returns: { en: 'bool; use is for None and singleton checks, == everywhere values matter.', bn: 'bool; None ও এককবস্তু-চেকে is, মান গুরুত্বপূর্ণ সর্বত্র ==।' },
          example: 'a is None      # ✅ সবসময়\na == None      # ✗ __eq__ বানোয়াট হতে পারে',
        },
        {
          name: 'id() / type()',
          signature: 'id(obj) → int   |   type(obj) → type',
          params: { en: 'id reveals the object identity (CPython: its address); type reveals which class built it.', bn: 'id প্রকাশ করে অবজেক্ট-পরিচয় (CPython-এ ঠিকানা); type প্রকাশ করে কোন ক্লাস তা বানিয়েছে।' },
          returns: { en: 'The debugger’s two best friends inside the sticker book.', bn: 'স্টিকার-বইয়ের ভেতরে ডিবাগারের দুই প্রিয় বন্ধু।' },
          example: 'id(a) == id(b)   # a is b-এর লম্বা সংস্করণ',
        },
      ],
    },
    {
      group: 'Copying',
      methods: [
        {
          name: 'list() / dict() / .copy()',
          signature: 'list(a)  |  dict(d)  |  a.copy()',
          params: { en: 'SHALLOW: new outer container, same inner objects. One graph level duplicated.', bn: 'খাঁসতর: নতুন বাইরের পাত্র, ভেতরের অবজেক্ট একই। গ্রাফের এক স্তর নকল।' },
          returns: { en: 'Boundary ownership without graph-sized bills.', bn: 'গ্রাফ-আকারের বিল ছাড়াই সীমানা-মালিকানা।' },
          example: 'owned = list(untrusted)   # দরজায় রূপান্তর',
        },
        {
          name: 'copy.deepcopy',
          signature: 'copy.deepcopy(obj) → obj',
          params: { en: 'Recursive new boxes for the whole object graph; shared subgraphs stay shared within the copy (memoized).', bn: 'পুরো অবজেক্ট-গ্রাফে পুনরাবৃত্ত নতুন বাক্স; ভাগ-করা উপ-গ্রাফ কপির ভেতরেও ভাগ-করাই থাকে (স্মরণিত)।' },
          returns: { en: 'True independence — priced by graph size; place at system boundaries.', bn: 'সত্যিকার স্বাধীনতা — মূল্য গ্রাফ-আকারে; রাখুন সিস্টেম-সীমানায়।' },
          example: 'snapshot = copy.deepcopy(state)',
        },
        {
          name: '+= (__iadd__ vs fallback)',
          signature: 'obj += other',
          params: { en: 'Mutables implement __iadd__ (in-place); immutables fall back to building NEW + rebinding.', bn: 'পরিবর্তনীয়রা বাস্তবায়ন করে __iadd__ (জায়গায়); অপরিবর্তনীয়রা নামে নতুন-নির্মাণ + রিবাইন্ডে।' },
          returns: { en: 'One operator spelling, two physics — know which citizen you hold.', bn: 'এক বানান, দুই পদার্থবিদ্যা — হাতের নাগরিক চিনুন।' },
          example: 'lst += [3]     # জায়গায়\ntup += (3,)    # নতুন টিপল',
        },
      ],
    },
    {
      group: 'Function contracts',
      methods: [
        {
          name: 'def',
          signature: 'def name(param=default):',
          params: { en: 'Default expressions run ONCE at def-time and live inside the function object.', bn: 'ডিফল্ট-এক্সপ্রেশন চলে একবারই, def-সময়ে, থাকে ফাংশন-অবজেক্টের ভেতরে।' },
          returns: { en: 'A function object + a sticker on it.', bn: 'একটি ফাংশন-অবজেক্ট + তার ওপর স্টিকার।' },
          example: 'def add(item, bag=None):\n    bag = [] if bag is None else bag',
          mistake: { en: 'def f(bag=[]) — the mutable default trap: one shared bag across ALL calls.', bn: 'def f(bag=[]) — মিউটেবল-ডিফল্ট ফাঁদ: সব কলের ওপারে ভাগ-করা একটি থলে।' },
        },
        {
          name: 'return tuple(...)',
          signature: 'return tuple(result)',
          params: { en: 'The finality signal: receivers get an immutable sequence, documenting that editing ended.', bn: 'চূড়ান্ততার সংকেত: গ্রহণকারী পায় অপরিবর্তনীয় ধারা — দলিলায়িত যে সম্পাদনা শেষ।' },
          returns: { en: 'A contract readable by reviewers, IDEs and future-you.', bn: 'রিভিউয়ার, IDE ও ভবিষ্যৎ-আপনার পঠনযোগ্য চুক্তি।' },
          example: 'return tuple(rows)',
        },
        {
          name: '@dataclass(frozen=True)',
          signature: '@dataclass(frozen=True)',
          params: { en: 'Auto-generated init/eq/repr with mutation raising FrozenInstanceError at the boundary.', bn: 'স্বয়ংক্রিয় init/eq/repr, সঙ্গে সীমানায় FrozenInstanceError-এ উঠতি পরিবর্তন।' },
          returns: { en: 'Configuration and value objects no teammate can accidentally corrupt.', bn: 'কনফিগ ও মান-অবজেক্ট, দুর্ঘটনায় দূষণ-অযোগ্য কোনো সতীর্থের জন্যই।' },
          example: '@dataclass(frozen=True)\nclass Config:\n    retries: int = 3',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'The Aliasing Postmortem', bn: 'এলিয়াসিং পোস্টমর্টেম' },
      diff: 'beginner',
      desc: {
        en: 'Take any toy script with a list passed between functions. Introduce the aliasing on purpose, reproduce the “impossible” mutation, then narrate the fix with id() printouts before and after. Deliverable: a 5-line demo + the sticker-model explanation a beginner could re-teach.',
        bn: 'ফাংশনের মধ্যে লিস্ট চলাচলকারী কোনো ছোট স্ক্রিপ্ট নিন। ইচ্ছাকৃতভাবে এলিয়াসিং ঢুকান, “অসম্ভব” পরিবর্তন পুনরুৎপাদন করুন, তারপর আগে/পরে id() প্রিন্টসহ সমাধান বর্ণনা করুন। ডেলিভারেবল: ৫-লাইনের ডেমো + স্টিকার-মডেল ব্যাখ্যা, যা কোনো নতুন শিক্ষার্থী আবার শেখাতে পারে।',
      },
    },
    {
      title: { en: 'Bag-of-Calls Trap Box', bn: 'কলের-থলে ফাঁদ-বাক্স' },
      diff: 'intermediate',
      desc: {
        en: 'Build a tiny memoization-style helper with a mutable default, ship the bug deliberately, detect it with id(fn.__defaults__[0]) across calls, then refactor to the None-sentinel idiom plus a property-based test that two fresh calls never share state.',
        bn: 'মিউটেবল ডিফল্টসহ ছোট মেমোয়াইজেশন-ধাঁচের হেল্পার বানান, ইচ্ছাকৃতভাবে বাগ শিপ করুন, কলের ওপারে id(fn.__defaults__[0]) দিয়ে ধরুন, তারপর None-সেন্টিনেল ছাঁচে রিফ্যাক্ট করুন, সাথে প্রপার্টি-ভিত্তিক টেস্ট যে দুটি তাজা কল কখনো স্টেট ভাগ করে না।',
      },
    },
    {
      title: { en: 'Pipeline with Convictions', bn: 'দৃঢ়বিশ্বাসী পাইপলাইন' },
      diff: 'advanced',
      desc: {
        en: 'A three-stage data pipeline (parse → transform → export) where every boundary is deliberate: list() in, tuple() out, frozen dataclass configs, one documented mutation policy per stage, and an order-of-magnitude note on where deepcopy was considered and rejected.',
        bn: 'তিন-স্টেজ ডেটা-পাইপলাইন (পার্স → রূপান্তর → রপ্তানি) যেখানে প্রতি সীমানা সচেতন: ভেতরে list(), বাইরে tuple(), হিমায়িত dataclass কনফিগ, স্টেজপ্রতি একটি দলিলায়িত পরিবর্তন-নীতি, আর কোথায় deepcopy বিবেচিত হয়ে বাতিল হলো তার মান-ক্রমের নোট।',
      },
    },
  ],
  bestPractices: [
    { en: '= binds; it never copies. Teach the sticker model on day one of every onboarding.', bn: '= বাঁধে; কখনো কপি করে না। প্রতি অনবোর্ডিংয়ের প্রথম দিনেই শেখান স্টিকার-মডেল।' },
    { en: 'Defaults are None sentinels; the mutable bulk is born inside the body, per call.', bn: 'ডিফল্ট হোক None-সেন্টিনেল; পরিবর্তনীয় ভূখণ্ড জন্মাক বডির ভেতরে, কলপ্রতি।' },
    { en: 'Mutate inside, convert at the door: list() in, tuple() out — readable as a contract.', bn: 'ভেতরে পরিবর্তন, দরজায় রূপান্তর: ভেতরে list(), বাইরে tuple() — চুক্তি হিসেবে পঠনযোগ্য।' },
    { en: 'is for identity (None!), == for values. A class can fake equality; it cannot fake identity.', bn: 'পরিচয়ে is (None!), মানে ==। সমতা বানোয়াট করা যায়; পরিচয় যায় না।' },
    { en: 'Never edit the list you are walking — build new or walk a shallow copy.', bn: 'যে লিস্টে হাঁটছেন তা সম্পাদনা নয় — নতুন বানান বা খাঁসতর কপিতে হাঁটুন।' },
    { en: 'Deepcopy at boundaries only, priced by graph size — never as a hot-path reflex.', bn: 'deepcopy কেবল সীমানায়, মূল্য গ্রাফ-আকারে — উত্তপ্ত পথের প্রতিবিম্ব কখনো নয়।' },
  ],
  interview: [
    {
      q: { en: 'Explain Python’s assignment model in 60 seconds.', bn: '৬০ সেকেন্ডে পাইথনের অ্যাসাইনমেন্ট-মডেল ব্যাখ্যা করুন।' },
      a: {
        en: 'Values are objects living in memory; names are stickers pasted onto them. Assignment always moves a sticker and never copies the object — so b = a aliases, append through b shows through a, and x = x + 1 REBINDS because ints cannot change in place. Function arguments bind the same way: shared object, local sticker. Mutability, a property of the TYPE, decides whether the house can be rearranged while all stickers keep watching.',
        bn: 'মান হলো মেমরিতে থাকা অবজেক্ট; নাম তাদের গায়ে লাগানো স্টিকার। অ্যাসাইনমেন্ট সবসময় স্টিকার সরায়, অবজেক্ট কখনো কপি করে না — তাই b = a এলিয়াস করে, b দিয়ে append a দিয়ে দেখা যায়, আর x = x + 1 রিবাইন্ড করে কারণ int জায়গায় বদলাতে পারে না। ফাংশন-আর্গুমেন্টও একইভাবে বাঁধে: ভাগ-করা অবজেক্ট, স্থানীয় স্টিকার। পরিবর্তনীয়তা — টাইপের বৈশিষ্ট্য — ঠিক করে বাড়ি সাজানো যাবে কি না, সব স্টিকার তাকিয়ে থাকা অবস্থায়।',
      },
    },
    {
      q: { en: 'Why is def f(items=[]) a bug? How do you fix it?', bn: 'def f(items=[]) কেন বাগ? সমাধান কী?' },
      a: {
        en: 'Defaults are evaluated once, at def-time, and stored inside the function object — so every call that omits items pastes a sticker on the SAME list, and mutations accumulate across calls. Fix with the None-sentinel idiom: def f(items=None): items = [] if items is None else items — a fresh object per call, plus a test asserting two fresh calls never alias.',
        bn: 'ডিফল্ট মূল্যায়িত হয় একবারই, def-সময়ে, জমা থাকে ফাংশন-অবজেক্টে — ফলে items না দেওয়া প্রতি কল সেই একই লিস্টে স্টিকার লাগায়, পরিবর্তন কল-জুড়ে জমতে থাকে। প্রতিকার None-সেন্টিনেল ছাঁচ: def f(items=None): items = [] if items is None else items — কলপ্রতি তাজা অবজেক্ট, সঙ্গে টেস্ট যে দুটি তাজা কল কখনো এলিয়াস হয় না।',
      },
    },
    {
      q: { en: 'is vs == — and what does that imply for None checks?', bn: 'is বনাম == — None-চেকে এর প্রভাব কী?' },
      a: {
        en: '== dispatches to __eq__, which classes may override — value equality, possibly a polite lie. is compares id(), memory identity — no class can contain two of itself. None is a singleton whose contract IS identity, therefore is None / is not None is the only robust test; == None can be forged by a mischievous __eq__.',
        bn: '== পাঠায় __eq__-তে, যা ক্লাস বদলে দিতে পারে — মান-সমতা, সম্ভবত বিনয়ী মিথ্যা। is তুলনা করে id(), স্মৃতি-পরিচয় — কোনো ক্লাসে নিজের দুই রূপ থাকে না। None এককবস্তু যার চুক্তি-ই পরিচয়, তাই is None / is not None-ই একমাত্র টেকসই পরীক্ষা; == None-কে দুষ্টু __eq__ নকল করতে পারে।',
      },
    },
    {
      q: { en: 'What is the GIL and when does it actually hurt?', bn: 'GIL কী, আর আসলে কখন কষ্ট দেয়?' },
      a: {
        en: 'The Global Interpreter Lock: one thread at a time executes Python bytecode per interpreter, keeping refcount updates race-free with a single lock. It hurts CPU-bound pure-Python loops (threads gain nothing there) and is painless for I/O-bound code since the lock is released during waits — and for heavy math, the ecosystem routes around it with C extensions (NumPy) or multiprocessing.',
        bn: 'গ্লোবাল ইন্টারপ্রেটর লক: প্রতি ইন্টারপ্রেটারে একবারে এক থ্রেড পাইথন-বাইটকোড চালায়, একটি লকে রেফকাউন্ট-হালনাগাদ রেসমুক্ত রেখে। কষ্ট দেয় CPU-বাউন্ড খাঁটি-পাইথন লুপে (থ্রেড সেখানে কিছুই জুটায় না), ব্যথামুক্ত I/O-বাউন্ড কোডে (অপেক্ষার সময় লক ছাড়া পায়) — আর ভারী হিসাবের জন্য ইকোসিস্টেম পথ টেরে নেয় C-এক্সটেনশন (NumPy) বা multiprocessing দিয়ে।',
      },
    },
  ],
  realWorld: [
    { en: 'NumPy slicing aliases memory ON PURPOSE — views versus copies is the sticker model carrying a performance budget.', bn: 'NumPy স্লাইসিং ইচ্ছাকৃতভাবে মেমরি এলিয়াস করে — view বনাম copy হলো পারফরম্যান্স-বাজেটবাহী স্টিকার-মডেল।' },
    { en: 'Pandas raises SettingWithCopyWarning precisely because the library refuses to guess your mutation boundary — this lesson names that warning.', bn: 'Pandas ঠিক এই কারণেই তোলে SettingWithCopyWarning — লাইব্রেরি আপনার পরিবর্তন-সীমানা অনুমান করতে অস্বীকৃত; এই লেসন সেই সতর্কতার নামকরণ করে।' },
    { en: 'Django, Flask and FastAPI hubs all assume the sticker model: request-scoped mutation, shared app config, and ORM identity maps are its daily expressions.', bn: 'Django, Flask ও FastAPI হাব সবাই স্টিকার-মডেল ধরে নেয়: রিকোয়েস্ট-স্কোপ্ড পরিবর্তন, ভাগ-করা অ্যাপ-কনফিগ আর ORM আইডেন্টিটি-ম্যাপ তার দৈনন্দিন প্রকাশ।' },
    { en: 'Every JSON boundary (Redis, Celery, HTTP) is the third copy-depth made visible: serialization IS the deep copy you pay for crossing processes.', bn: 'প্রতি JSON সীমানা (Redis, Celery, HTTP) দৃশ্যমান তৃতীয় কপি-গভীরতা: সিরিয়ালাইজেশন-ই সেই গভীর কপি, প্রসেস-অতিক্রমের মূল্য।' },
  ],
};
