import type { Lesson } from '../../../lib/types';

export const mutationBindingLesson: Lesson = {
  slug: 'mutation-and-binding',
  tech: 'python',
  title: {
    en: 'Mutation Binding — Turn the sticker model into professional reflexes',
    bn: 'পরিবর্তন ও কপি: ভাগ-করা অবজেক্টের শৃঙ্খলা'
  },
  summary: {
    en: 'Turn the sticker model into professional reflexes: the full mutability taxonomy (which types dare change in place), is vs == used in anger, the shallow/deep copy ladder climbed deliberately at module boundaries. And the four idioms (None defaults, list() at edges, tuples as return values, frozen configs) that senior Pythonistas write without thinking.',
    bn: 'স্টিকার-মডেল বানান পেশাদার প্রতিবিম্ব: পুরো পরিবর্তনীয়তা-শ্রেণিবিন্যাস (কোন টাইপ সাহস করে জায়গায় বদলাতে), তেজে-ওঠা অবস্থায় is বনাম ==, মডিউল-সীমানায় সচেতনভাবে ওঠা খাঁসতর/গভীর কপি-সিঁড়ি, আর চারটি ছাঁচ (None ডিফল্ট, প্রান্তে list(), রিটার্ন-মানে tuple, হিমায়িত কনফিগ) যা প্রবীণ পাইথন-করীরা না ভেবেই লিখে ফেলে।',
  },
  minutes: 32,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is the mutability taxonomy?', bn: 'পরিবর্তনীয়তা-শ্রেণিবিন্যাস কী?' } },
    {
      type: 'para',
      text: {
        en: 'Python categorizes every built-in data type into 2 groups: mutable or immutable. Mutable objects like lists, dictionaries, and sets can be edited in place. In contrast, immutable objects such as integers, floats, strings, and tuples cannot change once created. This distinction governs how the sticker model handles shared objects in your programs. A shared mutable object broadcasts changes to all names referencing it. A shared immutable value travels safely without risk of unexpected modifications.',
        bn: 'পাইথন প্রতিটি বিল্ট-ইন ডেটা টাইপকে 2 টি দলে ভাগ করে: পরিবর্তনীয় বা অপরিবর্তনীয়। পরিবর্তনীয় অবজেক্ট যেমন লিস্ট, ডিকশনারি ও সেট মেমরির একই জায়গায় সরাসরি বদলানো যায়। বিপরীতে, অপরিবর্তনীয় অবজেক্ট যেমন ইন্টিজার, ফ্লোট, স্ট্রিং ও টিপল একবার তৈরির পর আর পরিবর্তন করা যায় না। এই বিভাজনই নির্ধারণ করে শেয়ার করা অবজেক্টে স্টিকার মডেল কীভাবে আচরণ করবে। একটি শেয়ার করা মিউটেবল অবজেক্টে পরিবর্তন করলে তা সব রেফারেন্সে প্রকাশ পায়। অপরদিকে ইমিউটেবল মান যেকোনো জায়গায় নিরাপদে ব্যবহার করা যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'mutable', def: { en: 'list, dict, set, bytearray, your classes — edit-in-place citizens.', bn: 'list, dict, set, bytearray, আপনার ক্লাস — জায়গায়-সম্পাদনার নাগরিক।' } },
        { term: 'immutable', def: { en: 'int, str, tuple, frozenset, bytes, None — frozen at birth; safe to share freely.', bn: 'int, str, tuple, frozenset, bytes, None — জন্মেই হিমায়িত; মুক্তভাবে ভাগ নিরাপদ।' } },
        { term: 'shallow copy', def: { en: 'New outer container, same inner objects: list(a), dict(a), obj.copy().', bn: 'নতুন বাইরের পাত্র, ভেতরের অবজেক্ট একই: list(a), dict(a), obj.copy()।' } },
        { term: 'deep copy', def: { en: 'copy.deepcopy: recursive new boxes for the whole graph — powerful, expensive, rarely correct by default.', bn: 'copy.deepcopy: পুরো গ্রাফে পুনরাবৃত্ত নতুন বাক্স — শক্তিশালী, ব্যয়বহুল, ডিফল্টে কদাচিৎ সঠিক।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY consent boundaries matter more than copies', bn: 'কপির চেয়ে সন্মতি-সীমানা কেন বড়' } },
    {
      type: 'para',
      text: {
        en: 'Copying is a tax you pay with RAM and time; broadcasting is a bug you pay with debugging. The senior move avoids BOTH by moving the decision to the MODULE BOUNDARY: inside a module you commit to one mutation policy (say: functions may mutate their arguments), at the boundary you convert. Sanitize inputs into owned structures (list(untrusted)) and freeze outputs you no longer intend to edit (tuple(result)). This is why the idioms exist: None-sentinel defaults keep def-time innocence; list() at the door turns borrowed iterables into owned ones; tuples signal “returned, done, untouchable”; frozen dataclasses make configuration aliens-proof. Each idiom removes a whole bug FAMILY, the same way TypeScript erased bug classes at compile time. Except here the ledger is conventions everyone can read: an API taking a list and returning a tuple says, without a word of documentation, “I may borrow your object, and what I hand back is final”.',
        bn: 'কপি হলো RAM ও সময়ে পরিশোধ্য কর; প্রচার হলো ডিবাগিংয়ে পরিশোধ্য বাগ। প্রবীণ কৌশল দুটোই এড়িয়ে সিদ্ধান্ত নিয়ে যায় মডিউল-সীমানায়: মডিউলের ভেতরে বদ্ধ থাকুন এক পরিবর্তন-নীতিতে (ধরুন: ফাংশন আর্গুমেন্ট বদলাতে পারে), সীমানায় রূপান্তর করুন. ইনপুট নিজস্ব কাঠামোয় শুদ্ধ করে নিন (list(untrusted)), আর যা আর সম্পাদনার ইশারা নেই তা হিমায়িত করে ফেরত দিন (tuple(result))। ছাঁচগুলোর জন্ম এই কারণেই: None-সেন্টিনেল ডিফল্ট def-সময়ের নির্দোষিতা রক্ষা করে; দরজায় list() ধার-নেওয়া ইটারেবলকে বানায় নিজস্ব; tuple ঘোষণা করে “ফেরত দেওয়া, শেষ, অস্পর্শনীয়”; হিমায়িত dataclass কনফিগকে বানায় অপরিচিত-প্রমাণ। প্রতি ছাঁচ পুরো একটি বাগ-পরিবার মুছে দেয় — ঠিক যেমন TypeScript কম্পাইল-কালে বাগ-শ্রেণি মুছেছিল — কেবল এখানে খাতা হলো সবাই-পড়া প্রথা: একটি API যা লিস্ট নিয়ে টিপল ফেরায়, এক শব্দ ডকুমেন্টেশন ছাড়াই বলে দেয়। “আপনার অবজেক্ট ধার নিতে পারি, আর যা ফেরত দেব তা চূড়ান্ত”।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW the ladder climbs: four idioms', bn: 'সিঁড়ির চার ছাঁচ যেভাবে ওঠে' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ None-sentinel, always', bn: '1️⃣ None-সেন্টিনেল, সবসময়' }, text: { en: 'def f(items=None) then items = [] if items is None — the mutable bulk is born inside, per call.', bn: 'def f(items=None) তারপর items = [] if items is None — পরিবর্তনীয় ভূখণ্ড জন্মায় ভেতরে, কলপ্রতি।' } },
        { title: { en: '2️⃣ list() at the door', bn: '2️⃣ দরজায় list()' }, text: { en: 'Borrowed iterable becomes owned list exactly once at the boundary; inside, mutate with a clear conscience.', bn: 'ধার-নেওয়া ইটারেবল হুবহু একবার সীমানায় নিজস্ব লিস্ট হয়; ভেতরে নিশ্চিন্ত বিবেকে পরিবর্তন।' } },
        { title: { en: '3️⃣ tuple signals finality', bn: '3️⃣ tuple ঘোষণা চূড়ান্ততা' }, text: { en: 'Return tuple(rows) when editing ended. Receivers read it as a contract, IDEs and reviewers as a promise.', bn: 'সম্পাদনা শেষ হলে ফেরত দিন tuple(rows)। গ্রহণকারী পড়ে চুক্তি হিসেবে, IDE আর রিভিউয়ার প্রতিশ্রুতি হিসেবে।' } },
        { title: { en: '4️⃣ Freeze what config must not become', bn: '4️⃣ কনফিগ যা হতে পারে না, হিমায়িত করুন' }, text: { en: '@dataclass(frozen=True) for settings: one accidental mutation becomes an exception at the boundary, not corruption at midnight.', bn: '@dataclass(frozen=True) সেটিংসে: দুর্ঘটনামূলক একটি পরিবর্তন সীমানায় ব্যতিক্রম হয়, মাঝরাতের দুর্নীতি নয়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      code: `# চার ছাঁচ, একটি নীতি: সীমানায় সিদ্ধান্ত, ভেতরে নিশ্চিন্তি
def normalize(items=None):
    items = [] if items is None else list(items)  # 1+2) নতুন, নিজস্ব
    items.append('ok')
    return tuple(items)                            # 3) চূড়ান্ত সংকেত

# খাঁসতর বনাম গভীর — গ্রাফ দেখেই সিদ্ধান্ত
import copy
outer = {'tags': ['a'], 'meta': {'n': 1}}
shallow = dict(outer)      # নতুন বাইরের মানচিত্র, ভেতর একই
shallow['tags'].append('b')
print(outer['tags'])       # ['a', 'b'] ← ভেতরের বাক্স ভাগ হয়েই আছে!
deep = copy.deepcopy(outer)
deep['meta']['n'] = 99
print(outer['meta']['n'])  # 1 ← সত্যিকার বিচ্ছিন্নতা

# পরিচয় বনাম সমতা — কোথায় কোনটি
a = [1, 2]; b = [1, 2]
print(a == b)   # True  (মান সমান)
print(a is b)   # False (আলাদা বাড়ি)
print(a is None or a is not None)  # None সবসময় is দিয়ে`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the object graph is the truth', bn: 'ভেতরের কথা: অবজেক্ট-গ্রাফই সত্য' } },
    {
      type: 'para',
      text: {
        en: 'A shallow copy duplicates exactly one LEVEL of the graph: the outer dict/node gets a fresh identity while every child keeps its own. So mutating a child through the copy still broadcasts to the original (the shared inner box the lab showed you). deepcopy walks the graph recursively, memoizing visited nodes so cycles do not loop forever and shared sub-objects stay shared WITHIN the copy; it is correct but costs proportional to the graph. Hence the rule of thumb: deep copies belong at system boundaries (receiving untrusted structures, snapshotting state), never in hot paths. The twin operators finish the machinery: == dispatches to __eq__, which types define for VALUE semantics — lists compare element-wise, two distinct houses with same furniture read equal. Is compares id(), the object’s memory identity, which is why is None is the only sane None test (a user class could LIE about == None but no class contains two different identities of itself). One more level down the ladder mutiny: iterating while mutating — for x in lst: lst.remove(x) — edits the very list being walked, so the iterator’s index silently skips tenants. The professionals filter into a NEW list or walk a copy. And the Py Lab scenario “two names one list” is the exact mental picture that makes the skip obvious.',
        bn: 'খাঁসতর কপি নকল করে গ্রাফের হুবহু এক স্তর: বাইরের dict/নোড পায় নতুন পরিচয়, অথচ প্রতি সন্তান রাখে নিজেরই — ফলে কপির মধ্য দিয়ে সন্তান বদলালে তা মূলকাছেও প্রচার হয় (ল্যাবে দেখা সেই ভাগ-করা ভেতরের বাক্স)। deepcopy গ্রাফ পুনরাবৃত্তভাবে পরিক্রমা করে, পরিদর্শিত নোড স্মরণে রেখে — চক্র চিরকাল ঘোরে না, আর কপির নিজের ভেতরে ভাগ-করা উপ-অবজেক্ট ভাগ-করাই থাকে; সঠিক অথচ খরচ গ্রাফসমানুপাতিক. তাই নিয়ম: গভীর কপি থাক সিস্টেম-সীমানায় (অবিশ্বস্ত কাঠামো গ্রহণে, স্টেট-স্ন্যাপশটে), উত্তপ্ত পথে কখনো নয়। জোড়া অপারেটর যন্ত্রপাতি শেষ করে: == পাঠায় __eq__-তে, যা টাইপ সংজ্ঞায়িত করে মান-অর্থবিদ্যায় — লিস্ট তুলনা করে উপাদানভেদে; ভিন্ন দুই বাড়ির একই আসবাব সমান পড়ে যায়; is তুলনা করে id(), অবজেক্টের স্মৃতি-পরিচয়. তাই is None-ই একমাত্র সুস্থ None-পরীক্ষা (ব্যবহারকারী-ক্লাস == None নিয়ে মিথ্যা বলতে পারে, কিন্তু কোনো ক্লাসে নিজের দুটি ভিন্ন পরিচয় থাকে না)। আর সিঁড়ির এক ধাপ নিচে বিদ্রোহ: বদলানোর সময়ই ইটারেশন — for x in lst: lst.remove(x) — হেঁটে-চলা লিস্টকেই সম্পাদনা করে। ফলে ইটারেটরের সূচক নীরবে ভাড়াটে এড়িয়ে যায়; পেশাজীবীরা ছেঁকে নেন নতুন লিস্টে অথবা হাঁটেন কপির ওপর, আর Py Lab-এর “এক তালিকা, দুই নাম” সিনারিও সেই হুবহু মানসচিত্র যা এড়িয়ে-যাওয়াটা স্পষ্ট করে দেয়।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: revisit the sticker book', bn: 'ভিজ্যুয়াল: স্টিকার-বই পুনরদর্শন' } },
    { type: 'visual', id: 'py', scenario: 'names-are-stickers' },
    {
      type: 'para',
      text: {
        en: 'Run scenario one again with new eyes: the shallow copy question is now “what if b had been list(a)?” — a fresh OUTER box appears at step 2, the append lands in the copy. And a sees none of it. Then the third scenario: the mutable default is exactly a shallow share you never asked for, happening at def-time. Same picture, new discipline.',
        bn: '1 নম্বর সিনারিও নতুন চোখে আবার চালান: খাঁসতর-কপির প্রশ্ন এবার “b যদি হতো list(a)?” — ধাপ 2 এ নতুন বাইরের বাক্স আসে, append পড়ে কপিতে, a কিছুই দেখে না। তারপর তৃতীয়টি: মিউটেবল ডিফল্ট হুবহু একটি অনাহূত খাঁসতর-ভাগ, ঘটে def-সময়ে। একই চিত্র, নতুন শৃঙ্খলা।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: boundaries with convictions', bn: 'ফলাফল: দৃঢ়বিশ্বাসী সীমানা' } },
    {
      type: 'list',
      items: [
        { en: 'Mutate inside, convert at the door: list() in, tuple() out.', bn: 'ভেতরে পরিবর্তন, দরজায় রূপান্তর: ভেতরে list(), বাইরে tuple()।' },
        { en: 'None is the only None test; == is for values, never for identity.', bn: 'None পরীক্ষায় শুধুই None; মানের জন্য ==, পরিচয়ের জন্য কখনো নয়।' },
        { en: 'Deep copy is surgery at boundaries — never a hot-path habit.', bn: 'গভীর কপি হলো সীমানা-অস্ত্রোপচার — উত্তপ্ত পথের অভ্যাস কখনো নয়।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the vanishing tenants', bn: 'ডিবাগিং অনুশীলন: উধাও ভাড়াটেরা' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: some items survive a cleanup loop though they fail your predicate. for x in items: if bad(x): items.remove(x) — and half the bad ones stay. Hunt with sticker eyes: remove shifts every later tenant one seat LEFT while the loop index marches RIGHT — each eviction silently skips the next candidate. The ledger line to memorize: never edit the list you are walking. Three professional fixes, each assuming and revealing the taxonomy: items = [x for x in items if not bad(x)] — build new, rebind once (immutables taught us rebinding is cheap); for x in items[:]. Walk a SHALLOW copy, mutate the original. Itertools-free alternative: indices in reverse with del items[i] — evictions now fall on already-visited seats. Choose by graph size, not by habit: list comprehension for clarity, copy-walking when callbacks must see the mutating original.',
        bn: 'লক্ষণ: পরিষ্কার-লুপ পেরিয়েও আপনার শর্তে ব্যর্থ কিছু উপাদান টিকে থাকে। লুপ চলার সময় remove মেথড পরবর্তী প্রতি উপাদানকে 1 আসন বামে সরায়, অথচ লুপ সামনে এগিয়ে যায় — ফলে প্রতি অপসারণ নীরবে পরের উপাদানকে এড়িয়ে যায়। মুখস্থ রাখার মূল নিয়ম: যে তালিকায় আপনি লুপ চালাচ্ছেন তা সরাসরি সম্পাদন করবেন না। এর 3 টি পেশাদার সমাধান রয়েছে: প্রথমত, কম্প্রিহেনশন দিয়ে নতুন তালিকা তৈরি করা [x for x in data if not bad(x)]; দ্বিতীয়ত, data[:] দিয়ে শ্যালো কপিতে লুপ চালানো; অথবা উল্টো দিক থেকে del চালানো।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Using == to test None. A user class can define __eq__ to claim equality with None — identity can never lie. Always is None / is not None.',
        bn: 'None পরীক্ষায় == ব্যবহার। ব্যবহারকারী-ক্লাস __eq__ সংজ্ঞায়িত করে None-এর সঙ্গে সমতা দাবি করতে পারে — পরিচয় কিন্তু মিথ্যা বলতে পারে না। সবসময় is None / is not None।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'Django QuerySets are lazy immutable-ish contracts; editing model instances in place is the documented way — the framework distinguishes mutability by design.', bn: 'Django QuerySet হলো অলস, প্রায়-অপরিবর্তনীয় চুক্তি; মডেল-ইনস্ট্যান্স জায়গায় সম্পাদনাই দলিলায়িত পথ — ফ্রেমওয়ার্ক নকশাতেই পরিবর্তনীয়তা প্রথায়িত।' },
        { en: 'Pandas SettingWithCopyWarning IS this lesson: slice view or copy — the library refuses to guess your boundary, so it warns loudly.', bn: 'Pandas-এর SettingWithCopyWarning-ই এই লেসন: স্লাইসটা view না copy — লাইব্রেরি আপনার সীমানা অনুমান করতে অস্বীকৃত, তাই জোরে সতর্ক করে।' },
        { en: 'Redis/JSON APIs force the third depth: across the wire every object is deep-copied BY serialization — plan boundaries accordingly.', bn: 'Redis/JSON API বাধ্য করে তৃতীয় গভীরতা: তার পেরিয়ে প্রতি অবজেক্ট সিরিয়ালাইজেশনেই গভীর-কপি — সীমানা পরিকল্পনা সেই অনুযায়ী।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the Python roadmap', bn: 'পরবর্তী: Python রোডম্যাপ' } },
    {
      type: 'para',
      text: {
        en: 'The roadmap below sequences the rest: iterators and comprehensions as data pipelines, decorators as function-level stickers, context managers for resource hygiene, and the async event loop where the GIL finally relaxes. Your sticker eyes carry through all of it.',
        bn: 'নিচের রোডম্যাপ সাজিয়ে দেবে বাকি পথ: ডেটা-পাইপলাইন হিসেবে ইটারেটর ও কম্প্রিহেনশন, ফাংশন-স্তরের স্টিকার হিসেবে ডেকোরেটর, সম্পদ-স্বাস্থ্যের কনটেক্সট-ম্যানেজার, আর অ্যাসিংক ইভেন্ট-লুপ যেখানে GIL অবশেষে শিথিল হয়। আপনার স্টিকার-দৃষ্টি পুরো পথে কাজে লাগবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'py-mut-ex1',
      kind: 'predict',
      topic: 'shallow',
      question: { en: 'outer = {"tags": ["a"]}; shallow = dict(outer); shallow["tags"].append("b") — outer["tags"] is now…', bn: 'outer = {"tags": ["a"]}; shallow = dict(outer); shallow["tags"].append("b") — outer["tags"] এখন…' },
      options: [
        { en: "['a']", bn: "['a']" },
        { en: "['a', 'b'] — shallow copies the OUTER dict only; the inner list is still one shared object", bn: "['a', 'b'] — খাঁসতর কপি করে কেবল বাইরের dict; ভেতরের লিস্ট এখনো একই ভাগ-করা অবজেক্ট" },
        { en: 'KeyError', bn: 'KeyError' },
      ],
      answer: 1,
      hint: { en: 'dict() duplicates which LEVEL of the graph?', bn: 'dict() গ্রাফের কোন স্তর নকল করে?' },
      explanation: { en: 'One level down, the same inner box serves both owners. Shallow copies redraw the street, not the houses.', bn: 'এক স্তর নিচে একই ভেতরের বাক্স সেবা করে দুই মালিককে। খাঁসতর কপি আঁকে রাস্তা নতুন করে, বাড়ি নয়।' },
    },
    {
      id: 'py-mut-ex2',
      kind: 'mcq',
      topic: 'taxomomy',
      question: { en: 'Which of these is IMMUTABLE?', bn: 'এর মধ্যে কোনটি অপরিবর্তনীয়?' },
      options: [
        { en: 'bytearray', bn: 'bytearray' },
        { en: 'frozenset — the frozen twin of set, born sealed', bn: 'frozenset — set-এর হিমায়িত যমজ, জন্মেই সিল করা' },
        { en: 'dict', bn: 'dict' },
      ],
      answer: 1,
      hint: { en: 'The taxonomy pairs most mutables with a frozen twin: list/tuple, set/…', bn: 'শ্রেণিবিন্যাসে প্রায় প্রতি পরিবর্তনীয়র জুড়ে হিমায়িত যমজ: list/tuple, set/…' },
      explanation: { en: 'frozenset is hashable because it cannot change — it can be a dict KEY, which a set never can.', bn: 'frozenset হ্যাশযোগ্য কারণ বদলাতে পারে না — সে dict-এর চাবি হতে পারে, যা set কখনোই না।' },
    },
    {
      id: 'py-mut-ex3',
      kind: 'predict',
      topic: 'iteration',
      question: { en: 'items = [1, 2, 2, 3]; for x in items: if x == 2: items.remove(x) — what survives?', bn: 'items = [1, 2, 2, 3]; for x in items: if x == 2: items.remove(x) — কী টিকে থাকে?' },
      options: [
        { en: '[1, 3]', bn: '[1, 3]' },
        { en: '[1, 2, 3] — evicting shifts later tenants left while the index marches right, so the second 2 is skipped', bn: '[1, 2, 3] — উচ্ছেদে পরবর্তী ভাড়াটে বামে সরে আর সূচক ডানে যায়, ফলে দ্বিতীয় 2 এড়িয়ে যায়' },
        { en: '[1, 2]', bn: '[1, 2]' },
      ],
      answer: 1,
      hint: { en: 'Remove one 2: the next 2 slides into the seat you just checked.', bn: '1 টি 2 সরালে পরের 2 সেই পরীক্ষা-শেষ আসনে ঢুকে যায়।' },
      explanation: { en: 'Never edit the list you are walking — build a new list or walk a shallow copy.', bn: 'যে লিস্টে হাঁটছেন তা সম্পাদনা নয় — নতুন লিস্ট বানান বা খাঁসতর কপিতে হাঁটুন।' },
    },
    {
      id: 'py-mut-ex4',
      kind: 'predict',
      topic: 'identity',
      question: { en: 'The ONLY correct operator for testing None: x ____ None', bn: 'None পরীক্ষার একমাত্র সঠিক অপারেটর: x ____ None' },
      answer: 'is',
      accept: ['is', 'is not'],
      hint: { en: 'Equality can be taught to lie; identity cannot.', bn: 'সমতাকে মিথ্যা শেখানো যায়; পরিচয়কে নয়।' },
      explanation: { en: 'is compares id() — and None is a singleton whose identity is the contract, not its equality.', bn: 'is তুলনা করে id() — আর None এককবস্তু, যার চুক্তি পরিচয়ে, সমতায় নয়।' },
      solution: 'is',
    },
  ],
  quiz: {
    id: 'py-mut-quiz',
    title: { en: 'Quiz: mutation with consent', bn: 'কুইজ: সন্মতিসহ মিউটেশন' },
    questions: [
      {
        id: 'py-mut-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: 'A SHALLOW copy of a nested structure gives you…', bn: 'নেস্টেড কাঠামোর খাঁসতর কপি দেয়…' },
        options: [
          { en: 'Fully independent clones at every depth', bn: 'প্রতি গভীরতায় পূর্ণ স্বাধীন ক্লোন' },
          { en: 'A new OUTER container sharing every INNER object — edits to children still broadcast to the original', bn: 'নতুন বাইরের পাত্র, ভেতরের প্রতি অবজেক্ট ভাগাকৃত — সন্তানের সম্পাদনা মূলকাছেও প্রচার হয়' },
          { en: 'A frozen snapshot', bn: 'হিমায়িত স্ন্যাপশট' },
        ],
        answer: 1,
        hint: { en: 'New street, same houses.', bn: 'রাস্তা নতুন, বাড়ি একই।' },
        explanation: { en: 'Need true independence? deepcopy — pay the graph-sized bill at a boundary, nowhere else.', bn: 'সত্যিকার স্বাধীনতা চাই? deepcopy — গ্রাফ-আকারের বিল মেটান সীমানায়, অন্য কোথাও নয়।' },
      },
      {
        id: 'py-mut-q2',
        kind: 'predict',
        topic: 'tuple-trap',
        question: { en: 't = ([1], [2]); t[0].append(9) — result?', bn: 't = ([1], [2]); t[0].append(9) — ফলাফল?' },
        options: [
          { en: 'TypeError — tuples are immutable', bn: 'TypeError — টিপল অপরিবর্তনীয়' },
          { en: "Works: ([1, 9], [2]) — the tuple froze its SLOTS, not the objects inside them", bn: 'কাজ করে: ([1, 9], [2]) — টিপল হিমায়িত করেছে খানাগুলো, ভেতরের অবজেক্ট নয়' },
          { en: 'Silently ignored', bn: 'নীরবে উপেক্ষিত' },
        ],
        answer: 1,
        hint: { en: 'Immutability guards the container, not the contents.', bn: 'অপরিবর্তনীয়তা পাহারা দেয় পাত্রকে, বিষয়বস্তুকে নয়।' },
        explanation: { en: 'The slot cannot point elsewhere, but the list it points at remains fully mutable.', bn: 'খানাটি অন্য কোথাও নির্দেশ করতে পারে না, কিন্তু যে লিস্টে নির্দেশ করে তা পুরোপুরি পরিবর্তনীয়।' },
      },
      {
        id: 'py-mut-q3',
        kind: 'mcq',
        topic: 'boundaries',
        question: { en: 'The senior place for deepcopy is…', bn: 'deepcopy-র প্রবীণস্থান হলো…' },
        options: [
          { en: 'Everywhere a mutable argument arrives', bn: 'যেখানেই পরিবর্তনীয় আর্গুমেন্ট আসে' },
          { en: 'System boundaries: receiving untrusted structures or snapshotting state — sized to the graph, never in hot paths', bn: 'সিস্টেম-সীমানায়: অবিশ্বস্ত কাঠামো গ্রহণে বা স্টেট-স্ন্যাপশটে — গ্রাফ-আকারে মাপা, উত্তপ্ত পথে কখনো নয়' },
          { en: 'Before every return statement', bn: 'প্রতি return-এর আগে' },
        ],
        answer: 1,
        hint: { en: 'Cost is proportional to the object graph — so locate it where graphs are smallest and trust is lowest.', bn: 'খরচ অবজেক্ট-গ্রাফসমানুপাতিক — রাখুন যেখানে গ্রাফ ক্ষুদ্রতম ও বিশ্বাস সর্বনিম্ন।' },
        explanation: { en: 'Inside your module, a mutation POLICY beats a copying habit; deepcopy is the border checkpoint, not the national dress.', bn: 'মডিউলের ভেতরে পরিবর্তন-নীতি, কপি-অভ্যাসের চেয়ে ভালো; deepcopy হলো সীমান্ত চেকপোস্ট, জাতীয় পোশাক নয়।' },
      },
      {
        id: 'py-mut-q4',
        kind: 'mcq',
        topic: 'identity',
        question: { en: '== and is differ because…', bn: '== আর is আলাদা কারণ…' },
        options: [
          { en: 'is is faster, so prefer it everywhere', bn: 'is দ্রুততর, তাই সর্বত্র এগিয়ে' },
          { en: '== dispatches to __eq__ (value semantics, types may override and lie); is compares id() memory identity — the only sane test for singletons like None', bn: '== পাঠায় __eq__-তে (মান-অর্থবিদ্যা, টাইপ বদলাতে ও মিথ্যা বলতে পারে); is তুলনা করে id() স্মৃতি-পরিচয় — None-জাতীয় এককবস্তুর একমাত্র সুস্থ পরীক্ষা' },
          { en: 'They are aliases with different spellings', bn: 'ভিন্ন বানানে উপনাম মাত্র' },
        ],
        answer: 1,
        hint: { en: 'One asks the objects, the other asks the memory.', bn: 'একটি জিজ্ঞেস করে অবজেক্টকে, অপরটি স্মৃতিকে।' },
        explanation: { en: 'Lists with same furniture read equal by value; only id() reveals they are two houses.', bn: 'একই আসবাবের দুই লিস্ট মানসমান মনে হয়; কেবল id() প্রকাশ করে তারা ভিন্ন বাড়ি।' },
      },
    ],
  },
  nextLesson: {
    slug: 'python-branching-dictionaries',
    title: {
      en: 'Branching and Dictionaries: If-Elif, Dicts & Functions',
      bn: 'ব্রাঞ্চিং ও ডিকশনারি: If-Elif, ডিকশনারি ও ফাংশন'
    }
  },
};
