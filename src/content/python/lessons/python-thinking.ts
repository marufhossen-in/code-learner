import type { Lesson } from '../../../lib/types';

export const pythonThinkingLesson: Lesson = {
  slug: 'python-thinking',
  tech: 'python',
  title: {
    en: 'Python Thinking — The one mental model that decodes 90% of “weird Python”',
    bn: 'পাইথন-চিন্তা: ৯০% অদ্ভুত পাইথনের মানস-মডেল — সবকিছু অবজেক্ট'
  },
  summary: {
    en: 'The one mental model that decodes 90% of “weird Python”: values live in memory, names are stickers pasted on them, and assignment never copies. Learn why b = a mutates your surprise, why y stays 5 after x + 1, and how the famous mutable-default trap is just the sticker rule wearing a disguise.',
    bn: 'যে একটি মানস-মডেল ৯০% “অদ্ভুত পাইথন”-এর রহস্য উন্মোচন করে: মান থাকে মেমরিতে, নাম সেগুলোর গায়ে লাগানো স্টিকার, আর অ্যাসাইনমেন্ট কখনো কপি করে না। শিখুন কেন b = a আপনাকে চমক দেয়, কেন x + 1 এর পরেও y থাকে 5, আর বিখ্যাত মিউটেবল-ডিফল্ট ফাঁদ কেন আসলে ভাল্লুকের পোশাকে স্টিকার-নিয়ম।',
  },
  minutes: 30,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is a variable in Python, really?', bn: 'পাইথনে ভেরিয়েবল আসলে কী?' } },
    {
      type: 'para',
      text: {
        en: 'In Python, a variable is not a box that stores a value. Instead, values and objects are created in memory first, each holding a type, an identity, and data. The variable name acts like a sticker pasted onto that existing object. For instance, writing a = [1, 2] creates a list object in memory and labels it with the sticker "a". The assignment operator = pastes or moves a sticker rather than copying the object. When two names label the same object, we call this aliasing. Whether an object can change in place is mutability, which depends on its type.',
        bn: 'পাইথনে ভেরিয়েবল কোনো মান-ধারণকারী বাক্স নয়। বরং মান বা অবজেক্টগুলো মেমরিতে আগে তৈরি হয়, যেখানে প্রতিটির একটি নির্দিষ্ট টাইপ, পরিচয় ও ডেটা থাকে। ভেরিয়েবলের নাম কেবল সেই অবজেক্টের গায়ে লাগানো একটি স্টিকারের মতো কাজ করে। যেমন, a = [1, 2] লিখলে মেমরিতে একটি লিস্ট তৈরি হয় এবং তার ওপর "a" নামের স্টিকার বসে। পাইথনে = চিহ্ন কোনো অবজেক্ট কপি করে না, বরং স্টিকার লাগায় বা এক অবজেক্ট থেকে অন্য অবজেক্টে সরায়। যখন 2 টি নাম একই অবজেক্টকে নির্দেশ করে, তখন তাকে এলিয়াসিং বলে। কোনো অবজেক্ট ভেতরে পরিবর্তনযোগ্য কি না তা তার টাইপের ওপর নির্ভর করে, যাকে মিউটেবিলিটি বলা হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'sticker model', def: { en: 'Values live in memory; names are stickers. = pastes a sticker, never copies the object.', bn: 'মান থাকে মেমরিতে; নাম স্টিকার। = স্টিকার লাগায়, অবজেক্ট কপি করে না।' } },
        { term: 'aliasing', def: { en: 'Two (or more) names pasted on the same object — mutation through one is visible through all.', bn: 'একই অবজেক্টে দুই (বা বেশি) নাম — এক দিয়ে বদলালে সব দিয়ে দেখা যায়।' } },
        { term: 'mutability', def: { en: 'Whether the object itself can change in place: list/dict/set yes; int/str/tuple no.', bn: 'অবজেক্ট নিজে জায়গায় বদলাতে পারে কি না: list/dict/set পারে; int/str/tuple না।' } },
        { term: 'dynamic typing', def: { en: 'Types belong to objects and are checked at runtime; a name may point at any type over time.', bn: 'টাইপ থাকে অবজেক্টের, যাচাই রানটাইমে; একটি নাম কালভোগে যে-কোনো টাইপ ধরতে পারে।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY the sticker model pays off', bn: 'স্টিকার-মডেল কেন মূল্যবান' } },
    {
      type: 'para',
      text: {
        en: 'This design is why Python reads like pseudocode and ships fast: passing a giant list into a function pastes ONE sticker (O(1)), returning it pastes another; nothing big ever travels. The cost is honesty about the sharpest edge: mutation is broadcast to every sticker-holder. The beginner bug “I only changed it inside the helper!” is the sticker model doing exactly what it promised. The rule that resolves the tension is a three-line mantra: READ the model (values first, stickers second), CLASSIFY the type (mutable: handle with consent; immutable: relax), and CHOOSE your copying level deliberately (none, shallow, deep) at module boundaries. Do this and aliasing stops being a landmine and becomes a superpower: your LRU caches share one dict on purpose, your pipelines mutate one dataset in stages without copying gigabytes, your functions communicate back through deliberately shared structures.',
        bn: 'এই নকশারই কারণে পাইথন পড়ে সিউডোকোডের মতো আর দ্রুত শিপ হয়: বিশাল লিস্ট ফাংশনে পাঠালে লাগে 1 টি স্টিকার (O(1)), ফেরত আনলে আরেকটি; বড় কিছু কখনো ভ্রমণ করে না। মূল্য হলো তীক্ষ্ণতম ধারের সত্যকথা: পরিবর্তন প্রচারিত হয় প্রতি স্টিকার-ধারকের কাছে। নতুনদের সেই বাগ “আমি তো শুধু হেল্পারের ভেতরে বদলেছি!” হলো স্টিকার-মডেল তার প্রতিশ্রুতি হুবহু রাখা। উত্তরণের নিয়ম তিন-লাইনের মন্ত্র: মডেল পড়ুন (আগে মান, পরে স্টিকার), টাইপ ভাগ করুন (পরিবর্তনীয়: সন্মতি নিয়ে; অপরিবর্তনীয়: নিশ্চিন্তে), আর মডিউল-সীমানায় সচেতনভাবে কপির স্তর বেছে নিন (শূন্য, খাঁসতর, গভীর)। এতে এলিয়াসিং মাইনক্ষেত্র থেকে বেরিয়ে হয়ে যায় সুপারশক্তি: আপনার LRU ক্যাশ ইচ্ছাকৃতভাবে একটি dict ভাগ করে, পাইপলাইন গিগাবাইট না কপি করে ধাপে ধাপে একটি ডেটাসেটই বদলায়, ফাংশনগুলো ইচ্ছাকৃত ভাগ-করা কাঠামো দিয়ে উত্তর পাঠায়।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW the three moves work', bn: 'তিনটি চাল যেভাবে কাজ করে' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ Binding: name → object', bn: '1️⃣ বাইন্ডিং: নাম → অবজেক্ট' }, text: { en: 'a = [1, 2] — object first, then one sticker. Function arguments bind the same way: the parameter is a NEW sticker on the caller’s object.', bn: 'a = [1, 2] — আগে অবজেক্ট, তারপর স্টিকার। ফাংশন-আর্গুমেন্টও একইরকম বাঁধে: প্যারামিটার কলারের অবজেক্টে নতুন স্টিকার।' } },
        { title: { en: '2️⃣ Aliasing: second sticker', bn: '2️⃣ এলিয়াসিং: দ্বিতীয় স্টিকার' }, text: { en: 'b = a pastes another sticker. Zero bytes copied; both names watch one truth.', bn: 'b = a আরেকটি স্টিকার লাগায়। শূন্য বাইট কপি; দুই নামই দেখে এক সত্য।' } },
        { title: { en: '3️⃣ Mutation vs rebinding', bn: '3️⃣ পরিবর্তন বনাম নাম-বদল' }, text: { en: 'b.append(3) edits the shared box (mutable); x = x + 1 moves x to a NEW box because ints cannot change. Same = sign, different physics.', bn: 'b.append(3) ভাগ-করা বাক্স বদলায় (পরিবর্তনীয়); x = x + 1 নতুন বাক্সে x সরায়, কারণ int বদলাতে পারে না। একই =, ভিন্ন পদার্থবিদ্যা।' } },
        { title: { en: '4️⃣ The operator split: += lies', bn: '4️⃣ অপারেটর-ভাঙন: += মিথ্যা বলে' }, text: { en: 'lst += [3] mutates IN PLACE; tup += (3,) builds a NEW tuple. += means “mutate if you can, else rebind”.', bn: 'lst += [3] জায়গায়ই বদলায়; tup += (3,) নতুন tuple বানায়। += মানে “পারলে বদলা, নইলে নাম সরা”।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      code: `# বাক্সের বদলে স্টিকার — চিরকালীন তিন প্রমাণ
a = [1, 2]
b = a            # দ্বিতীয় স্টিকার, শূন্য কপি
b.append(3)
print(a)         # [1, 2, 3] ← a-ও বদলে গেছে!

x = 5
y = x
x = x + 1        # int অপরিবর্তনীয় → নতুন অবজেক্ট, x সরে গেল
print(y)         # 5 ← y স্থির

# += একই চেহারা, দুই পদার্থবিদ্যা
lst = [1]; lst += [2]      # জায়গায় পরিবর্তন (তালিকা)
tup = (1,); tup += (2,)    # নতুন tuple → রিবাইন্ড

# যাচাইয়ের পাঁচটি চাবি
print(a is b)     # True  — একই অবজেক্ট?
print(a == b)     # True  — মান সমান?
print(id(a))      # আসল ঠিকানা — সন্দেহ হলে এটিই অস্ত্র`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: CPython under the sticker book', bn: 'ভেতরের কথা: স্টিকার-বইয়ের পেছনে CPython' } },
    {
      type: 'para',
      text: {
        en: 'Your .py file is compiled to BYTECODE — STACK instructions for a small virtual machine — and CPython steps through them one by one (dis.dis(your_function) shows the actual ladder). Names live in namespaces: dictionaries from name to object, one per module/class/function — lookup is literally dict[key]. Objects come with a REFCOUNT: how many stickers (plus internal holds) point here. When it hits zero, the object is freed instantly — deterministic cleanup, no sweeping pause; a backup cycle-detector hunts the rare reference islands. Small ints (-5…256) and one-character strings are INTERNED — pre-made citizens every sticker shares, which is why id(5) == id(5) anywhere in your process. And one thread at a time executes bytecode per interpreter via the GIL, protecting refcounts with a single lock. This is great for glue code and I/O-bound services. For heavy number-crunching, workloads run in C extensions like NumPy or multiple processes. The Py Lab below is this machinery as a countertop model — stickers on the left, objects on the heap.',
        bn: 'আপনার .py ফাইল কম্পাইল হয় BYTECODE-এ — ছোট্ট ভার্চুয়াল-মেশিনের স্ট্যাক-নির্দেশনা — আর CPython সেগুলো একে একে চালায় (dis.dis(আপনার_ফাংশন) লিখলেই আসল সিঁড়ি দেখা যায়)। নাম থাকে নেমস্পেসে: নাম→অবজেক্ট ডিকশনারি, প্রতি মডিউল/ক্লাস/ফাংশনে একটি — খোঁজ মানেই আক্ষরিকভাবে dict[key]। প্রতি অবজেক্টের সঙ্গে থাকে রেফকাউন্ট: কত স্টিকার (সহ ভেতরের ধরে-রাখা) এদিকে আঙুল তুলেছে। শূন্যে পড়লেই অবজেক্ট মুছে যায় সাথে সাথে — নির্ধারিত পরিষ্কার, ঝাড়ু-বিরতি নেই; দুর্লহ সাইকেল-দ্বীপ শিকার করে একটি ব্যাকআপ চক্র-শনাক্তকারী। ছোট int (−5…256) আর এক-অক্ষরের স্ট্রিং INTERNE হয় — আগে থেকে বানানো নাগরিক, যাদের সব স্টিকার ভাগ করে, তাই প্রক্রিয়ার যেকোনো প্রান্তে id(5) == id(5)। আর প্রতি ইন্টারপ্রেটারে একবারে একটি থ্রেড বাইটকোড চালায় GIL-এর মাধ্যমে, যা একটিমাত্র লক দিয়ে রেফকাউন্ট সুরক্ষিত রাখে। এটি সাধারণ স্ক্রিপ্ট এবং I/O-ভিত্তিক সেবার জন্য চমৎকার। তবে ভারী গাণিতিক হিসাবের ক্ষেত্রে কাজগুলো NumPy-এর মতো C-এক্সটেনশন বা একাধিক প্রসেসে চালাতে হয়। নিচের Py Lab এই যন্ত্রপাতির টেবিল-মডেল — বামে স্টিকার, হিপে অবজেক্ট।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the Python Lab', bn: 'ভিজ্যুয়াল: পাইথন ল্যাব' } },
    { type: 'visual', id: 'py' },
    {
      type: 'para',
      text: {
        en: 'Walk the first scenario and memorize step 2 — the exact frame where b arrives and NOTHING is copied: one box, two stickers. Then the third scenario: watch the default [] born ONCE under def and silently accumulate memories of past calls. When you can predict each step before pressing next, the sticker model is yours.',
        bn: 'প্রথম সিনারিও হেঁটে শেষ করুন আর মুখস্থ করুন ধাপ ২ — সেই ফ্রেম যেখানে b এসেছে অথচ কিছুই কপি হয়নি: 1 টি বাক্স, 2 টি স্টিকার। তারপর তৃতীয়টি: ডিফল্ট [] def-এর নিচে জন্ম নিচ্ছে একবারই আর নীরবে জমাচ্ছে অতীত কলের স্মৃতি। প্রতিটি ধাপ next চাপার আগে ভবিষ্যদ্বাণী করতে পারলেই বুঝবেন স্টিকার-মডেল আপনার হয়েছে।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: prediction, not surprise', bn: 'ফলাফল: চমক নয়, ভবিষ্যদ্বাণী' } },
    {
      type: 'list',
      items: [
        { en: '= never copies; .append mutates the ONE shared object; + on immutables builds new.', bn: '= কখনো কপি করে না; .append ভাগ-করা এক অবজেক্ট বদলায়; অপরিবর্তনীয়তেতে + নতুন বানায়।' },
        { en: 'Mutable types (list/dict/set) demand consent; immutable (int/str/tuple) can be pasted anywhere.', bn: 'পরিবর্তনীয় টাইপ (list/dict/set) চায় সন্মতি; অপরিবর্তনীয় (int/str/tuple) যেকোনো জায়গায় লাগানো যায়।' },
        { en: 'id() is the truth serum; is asks “same object?”, == asks “same value?”', bn: 'id() সত্য-ঔষধ; is জিজ্ঞেস করে “একই অবজেক্ট?”, == জিজ্ঞেস করে “মান সমান?”' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the list that remembers', bn: 'ডিবাগিং অনুশীলন: স্মৃতিশক্তিশালী লিস্ট' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: your helper def add(item, bag=[]) returns ["a"] on Monday and ["a","b","c",…] by Friday, even though nobody passed bag. In sticker terms, the default container is instantiated during definition and stored on the function. Each invocation merely attaches a label to that existing instance, causing appends to accumulate. The standard remedy uses a sentinel: def add(item, bag=None): bag = [] if bag is None else bag, creating an isolated container per invocation. The deep lesson: defaults are evaluated at DEF-TIME, not CALL-TIME — so any expression you write in a signature runs once, ever. That also explains why def f(ts=time.time()) stamps the DEFINITION moment forever. Print id(f.__defaults__[0]) twice across calls and watch the SAME address return: proof without superstition.',
        bn: "উপসর্গ: আপনার হেল্পার def add(item, bag=[]) সোমবারে ['a'] রিটার্ন করে আর শুক্রবারে ['a','b','c',…] দেখায়, যদিও কেউ bag আর্গুমেন্ট পাঠায়নি। স্টিকারের দৃষ্টিতে, ফাংশন সংজ্ঞায়নের সময় ডিফল্ট লিস্টটি একবারই তৈরি হয়ে ফাংশনের ভেতরে জমা থাকে। প্রতিবার কল করলে সেই একই লিস্টের গায়ে নামফলক বসে, ফলে নতুন আইটেম জমা হতে থাকে। সমাধান হলো সেন্টিনেল প্যাটার্ন: def add(item, bag=None): bag = [] if bag is None else bag, যা প্রতিবার কলের জন্য সম্পূর্ণ আলাদা নতুন লিস্ট তৈরি করে। গভীর শিক্ষা: ডিফল্ট মূল্যায়িত হয় def-সময়ে, কল-সময়ে নয় — তাই স্বাক্ষরে যে-কোনো এক্সপ্রেশন চলে একবারই, চিরকাল। এজন্যই def f(ts=time.time()) চিরদিনের জন্য সংজ্ঞায়ন-মুহূর্তের ছাপ বহন করে। দুই কলের ওপারে id(f.__defaults__[0]) প্রিন্ট করুন আর দেখুন একই ঠিকানা ফিরছে: কুসংস্কার-মুক্ত প্রমাণ।",
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Reaching for copy() by reflex. Most copies are waste; the fix is knowing WHERE a mutation is allowed to be visible. Choose the boundary first, then the copying level.',
        bn: 'প্রতিবিম্ব-স্বভাবে copy() ছোঁয়া। বেশিরভাগ কপি অপচয়; প্রতিকার হলো জানা কোথায় একটি পরিবর্তন দৃশ্যমান হওয়ার অনুমতি আছে। আগে সীমানা ঠিক করুন, তারপর কপির স্তর।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'NumPy views vs copies are the sticker model with money attached: slicing a matrix aliases memory on purpose — that is why it is fast.', bn: 'NumPy-র view বনাম copy হলো অর্থ-জড়িত স্টিকার-মডেল: ম্যাট্রিক্স স্লাইস ইচ্ছাকৃতভাবে মেমরি এলিয়াস করে — তাই-ই এত দ্রুত।' },
        { en: 'Django ORM caches identity per query: two row objects for the same id may be the same object — and your edits broadcast through it.', bn: 'Django ORM কোয়েরিভেদে পরিচয় ক্যাশ করে: একই id-র দুই রো-অবজেক্ট একই অবজেক্টও হতে পারে — আর আপনার সম্পাদনা তা দিয়ে প্রচার হয়।' },
        { en: 'CELERY/JSON APIs exist because objects cannot travel between processes: serialization is the photocopy you finally DO pay for.', bn: 'CELERY/JSON API আছে কারণ প্রসেসের মধ্যে অবজেক্ট ভ্রমণ করতে পারে না: সিরিয়ালাইজেশন সেই ফটোকপি, যার মূল্য অবশেষে দিতেই হয়।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: mutation & copying discipline', bn: 'পরবর্তী: পরিবর্তন ও কপির শৃঙ্খলা' } },
    {
      type: 'para',
      text: {
        en: 'You can read the rules now. Next lesson turns them into reflexes: the full mutability taxonomy, is vs == in anger, shallow versus deep copies at module boundaries, and the four idioms senior Pythonistas write without thinking.',
        bn: 'নিয়ম এখন আপনি পড়তে পারেন। পরের লেসন তা বানায় প্রতিবিম্ব: পুরো পরিবর্তনীয়তা-শ্রেণিবিন্যাস, তেজে-ওঠা is বনাম ==, মডিউল-সীমানায় খাঁসতর বনাম গভীর কপি, আর চারটি ছাঁচ যা প্রবীণ পাইথন-করীরা না ভেবেই লিখে ফেলে।',
      },
    },
  ],
  exercises: [
    {
      id: 'py-think-ex1',
      kind: 'predict',
      topic: 'aliasing',
      question: { en: 'After a = [1, 2]; b = a; b.append(3) — what does print(a) show?', bn: 'a = [1, 2]; b = a; b.append(3) — এরপর print(a) কী দেখায়?' },
      options: [
        { en: '[1, 2]', bn: '[1, 2]' },
        { en: '[1, 2, 3] — one object, two stickers; mutation through b is visible through a', bn: '[1, 2, 3] — একটিই অবজেক্ট, দুটি স্টিকার; b দিয়ে পরিবর্তন a দিয়েও দেখা যায়' },
        { en: 'Error — b was never declared', bn: 'এরর — b তো ঘোষণাই হয়নি' },
      ],
      answer: 1,
      hint: { en: 'Did b = a photocopy the list, or paste a sticker?', bn: 'b = a কি লিস্ট ফটোকপি করেছে, না স্টিকার লাগিয়েছে?' },
      explanation: { en: 'Assignment binds; it never copies. The append edited the single shared object.', bn: 'অ্যাসাইনমেন্ট বাঁধে; কখনো কপি করে না। append সম্পাদনা করেছে সেই এক ভাগ-করা অবজেক্ট।' },
    },
    {
      id: 'py-think-ex2',
      kind: 'predict',
      topic: 'immutability',
      question: { en: 'After x = 5; y = x; x = x + 1 — print(y) gives…', bn: 'x = 5; y = x; x = x + 1 — এরপর print(y) দেয়…' },
      options: [
        { en: '6', bn: '6' },
        { en: '5 — ints are immutable: x+1 built a NEW object and moved only the x sticker', bn: '5 — int অপরিবর্তনীয়: x+1 নতুন অবজেক্ট বানিয়ে কেবল x স্টিকার সরিয়েছে' },
        { en: 'It depends on the interpreter', bn: 'ইন্টারপ্রেটারভেদে' },
      ],
      answer: 1,
      hint: { en: 'Can you edit the number 5 into a 6 in place?', bn: 'সংখ্যা 5 কে কি জায়গায় সম্পাদনা করে 6 বানানো যায়?' },
      explanation: { en: 'Immutability forces += and + into rebinding. y watched the old object the whole time.', bn: 'অপরিবর্তনীয়তা += ও + কে বাধ্য করে নাম-বদলে। y পুরো সময় পুরনো অবজেক্টই দেখেছে।' },
    },
    {
      id: 'py-think-ex3',
      kind: 'mcq',
      topic: 'is-vs-eq',
      question: {
        en: 'In Python, what question does the expression "a is b" evaluate?',
        bn: 'পাইথনে "a is b" এক্সপ্রেশনটি মূলত কী যাচাই করে?'
      },
      options: [
        { en: 'Do they have equal values?', bn: 'তাদের মান কি সমান?' },
        { en: 'Are they the same object in memory (one house, however many stickers)?', bn: 'তারা কি মেমরিতে একই অবজেক্ট (একই বাড়ি, স্টিকার যাই হোক)?' },
        { en: 'Are they the same type?', bn: 'তারা কি একই টাইপের?' },
      ],
      answer: 1,
      hint: { en: 'is compares identities — id(a) == id(b) in one word.', bn: 'is তুলনা করে পরিচয় — এক কথায় id(a) == id(b)।' },
      explanation: { en: 'Use is for identity (None checks!), == for equality. Confusing them is a classic bug family.', bn: 'পরিচয়ে ব্যবহার করুন is (None-চেক!), সমতায় ==। গুলিয়ে ফেলা ক্লাসিক বাগ-পরিবার।' },
    },
    {
      id: 'py-think-ex4',
      kind: 'fill',
      topic: 'defaults',
      question: { en: 'Complete the safe pattern: def add(item, bag=____): bag = [] if bag is None else bag', bn: 'নিরাপদ ছাঁচ পূর্ণ করুন: def add(item, bag=____): bag = [] if bag is None else bag' },
      answer: 'None',
      accept: ['None'],
      hint: { en: 'The immutable placeholder that lets you build a FRESH list per call.', bn: 'অপরিবর্তনীয় স্থানাঙ্ক, যা দিয়ে কলপ্রতি তাজা লিস্ট বানানো যায়।' },
      explanation: { en: 'None is immutable and unique per interpreter — the perfect sentinel. Defaults run at def-time, so the mutable bulk must be born inside the body.', bn: 'None অপরিবর্তনীয় ও ইন্টারপ্রেটারে অনন্য — নিখুঁত প্রহরী। ডিফল্ট চলে def-সময়ে, তাই পরিবর্তনীয় ভূখণ্ড জন্মাতে হবে বডির ভেতরে।' },
      solution: 'None',
    },
  ],
  quiz: {
    id: 'py-think-quiz',
    title: { en: 'Quiz: the sticker model', bn: 'কুইজ: স্টিকার-মডেল' },
    questions: [
      {
        id: 'py-think-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: 'The most accurate picture of a Python variable is…', bn: 'পাইথন ভেরিয়েবলের সবচেয়ে নিখুঁত চিত্র…' },
        options: [
          { en: 'A box holding a value', bn: 'মান ধারণকারী বাক্স' },
          { en: 'A sticker pasted on an object that lives in memory — assignment moves stickers, never objects', bn: 'মেমরিতে থাকা অবজেক্টের গায়ে লাগানো স্টিকার — অ্যাসাইনমেন্ট স্টিকার সরায়, অবজেক্ট কখনো নয়' },
          { en: 'A pointer you must free manually', bn: 'হাতে মুক্ত করতে হয় এমন পয়েন্টার' },
        ],
        answer: 1,
        hint: { en: 'Where does the list live when you write a = [1,2]?', bn: 'a = [1,2] লিখলে লিস্ট থাকে কোথায়?' },
        explanation: { en: 'Objects first, stickers second — the inversion that explains aliasing, defaults and += all at once.', bn: 'আগে অবজেক্ট, তারপর স্টিকার — সেই উল্টো চিন্তা যা একসাথে ব্যাখ্যা করে এলিয়াসিং, ডিফল্ট আর +=।' },
      },
      {
        id: 'py-think-q2',
        kind: 'predict',
        topic: 'plus-equals',
        question: { en: 't = (1,); t += (2,) — under the hood this…', bn: 't = (1,); t += (2,) — পর্দার আড়ালে এটি…' },
        options: [
          { en: 'Appends to the tuple in place', bn: 'জায়গায় টিপলে যুক্ত করে' },
          { en: 'Builds a NEW tuple (1, 2) and REBINDS t — += means “mutate if possible, else rebind”', bn: 'নতুন tuple (1, 2) বানায় আর t কে রিবাইন্ড করে — += মানে “পারলে বদলা, নইলে নাম সরা”' },
          { en: 'Raises TypeError', bn: 'TypeError দেয়' },
        ],
        answer: 1,
        hint: { en: 'Tuples are immutable — which half of the split do they take?', bn: 'টিপল অপরিবর্তনীয় — ভাঙনের কোন ভাগে তারা?' },
        explanation: { en: 'Same operator, different physics. Lists take the in-place branch; tuples take the new-object branch.', bn: 'একই অপারেটর, ভিন্ন পদার্থবিদ্যা। লিস্ট নেয় জায়গায়-বদল শাখা; টিপল নেয় নতুন-অবজেক্ট শাখা।' },
      },
      {
        id: 'py-think-q3',
        kind: 'mcq',
        topic: 'function-args',
        question: { en: 'When you call f(data), what exactly travels into the parameter?', bn: 'f(data) ডাকলে প্যারামিটারে আসলে কী ঢোকে?' },
        options: [
          { en: 'A full copy of data', bn: 'data-এর পূর্ণ কপি' },
          { en: 'A new sticker on the SAME object — O(1) no matter how big data is', bn: 'সেই একই অবজেক্টে নতুন স্টিকার — data যত বড়ই হোক, O(1)' },
          { en: 'A reference you must return to avoid leaks', bn: 'লিক রোধে ফেরত দিতে হয় এমন রেফারেন্স' },
        ],
        answer: 1,
        hint: { en: 'Function arguments are binding. Same physics as b = a.', bn: 'ফাংশন-আর্গুমেন্ট মানে বাইন্ডিং। b = a-র সেই একই পদার্থবিদ্যা।' },
        explanation: { en: 'This is call-by-object-reference: shared objects, local names. Mutation inside f is visible outside; rebinding is not.', bn: 'এটিই call-by-object-reference: ভাগ-করা অবজেক্ট, স্থানীয় নাম। f-এর ভেতরের পরিবর্তন বাইরে দেখা যায়; নাম-বদল যায় না।' },
      },
      {
        id: 'py-think-q4',
        kind: 'mcq',
        topic: 'internals',
        question: {
          en: 'What is the architectural role of the Global Interpreter Lock (GIL) in CPython?',
          bn: 'CPython-এ গ্লোবাল ইন্টারপ্রেটর লক (GIL)-এর প্রধান স্থাপত্যগত ভূমিকা কী?'
        },
        options: [
          { en: 'Python cannot do I/O concurrently', bn: 'পাইথন I/O কনকারেন্ট করতে পারে না' },
          { en: 'One thread at a time executes bytecode per interpreter — saving refcounts with a single lock; CPU-bound work escapes via C extensions or processes', bn: 'প্রতি ইন্টারপ্রেটারে একবারে এক থ্রেড বাইটকোড চালায় — একটি লকে রেফকাউন্ট রক্ষা; CPU-বাউন্ড কাজ পালায় C-এক্সটেনশন বা প্রসেসে' },
          { en: 'Global variables are locked', bn: 'গ্লোবাল ভেরিয়েবল লক থাকে' },
        ],
        answer: 1,
        hint: { en: 'It guards the refcount economy, not your variables.', bn: 'এ পাহারা দেয় রেফকাউন্ট-অর্থনীতিকে, আপনার ভেরিয়েবলকে নয়।' },
        explanation: { en: 'I/O releases the lock (threads excel there); pure-Python CPU loops do not — hence multiprocessing or NumPy for number-crunching.', bn: 'I/O লক ছেড়ে দেয় (থ্রেড সেখানে দারুণ); খাঁটি-পাইথন CPU লুপ দেয় না — তাই সংখ্যা-কষায় multiprocessing বা NumPy।' },
      },
    ],
  },
  nextLesson: {
    slug: 'python-text-numbers',
    title: {
      en: 'Text and Numbers: Names, Casting, Format, Truth & Arithmetic',
      bn: 'টেক্সট ও সংখ্যা: নাম, কাস্টিং, ফরম্যাট, সত্যতা ও পাটিগণিত'
    }
  },
};
