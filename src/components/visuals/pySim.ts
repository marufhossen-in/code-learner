/** Python Lab engine: the names-are-stickers model — names bind, objects live. */

export interface PyObj {
  id: string;
  type: 'int' | 'str' | 'list' | 'tuple' | 'func';
  repr: string;
  note?: { en: string; bn: string };
}

export interface PyStep {
  /** 1-based active code line */
  line: number;
  names: { name: string; objId: string }[];
  objects: PyObj[];
  /** object box to pulse */
  highlight?: string;
  note: { en: string; bn: string };
}

export interface PyScenario {
  id: string;
  title: { en: string; bn: string };
  intro: { en: string; bn: string };
  code: string[];
  steps: PyStep[];
}

/* ---------------------------------- */
/* Scenario 1: two names, one list    */
/* ---------------------------------- */

const namesStickers: PyScenario = {
  id: 'names-are-stickers',
  title: { en: 'Two names, one list', bn: 'এক তালিকা, দুই নাম' },
  intro: {
    en: 'In Python, variables are not boxes that HOLD values — values live elsewhere and names are stickers pasted on them. Watch what b = a really does.',
    bn: 'পাইথনে ভেরিয়েবল মান ধারণকারী বাক্স নয় — মান থাকে অন্যত্র, নাম ওপরে লাগানো স্টিকার মাত্র। দেখুন b = a আসলে কী করে।',
  },
  code: ['a = [1, 2]', 'b = a', 'b.append(3)', 'print(a)  # কী দেখাবে?'],
  steps: [
    {
      line: 1,
      names: [{ name: 'a', objId: 'L1' }],
      objects: [{ id: 'L1', type: 'list', repr: '[1, 2]' }],
      highlight: 'L1',
      note: {
        en: 'A list object is built in memory first; the name a is a sticker pasted onto it.',
        bn: 'আগে মেমরিতে লিস্ট-অবজেক্ট তৈরি; নাম a সেটার গায়ে লাগানো স্টিকার মাত্র।',
      },
    },
    {
      line: 2,
      names: [
        { name: 'a', objId: 'L1' },
        { name: 'b', objId: 'L1' },
      ],
      objects: [{ id: 'L1', type: 'list', repr: '[1, 2]', note: { en: 'ONE object, TWO stickers', bn: 'একটিই অবজেক্ট, স্টিকার দুটি' } }],
      highlight: 'L1',
      note: {
        en: 'b = a copies NOTHING — it pastes a second sticker onto the very same object.',
        bn: 'b = a কিছুই কপি করে না — সেই একই অবজেক্টে দ্বিতীয় স্টিকার লাগে।',
      },
    },
    {
      line: 3,
      names: [
        { name: 'a', objId: 'L1' },
        { name: 'b', objId: 'L1' },
      ],
      objects: [{ id: 'L1', type: 'list', repr: '[1, 2, 3]' }],
      highlight: 'L1',
      note: {
        en: 'Mutating through b changes the SHARED box. No name was touched — the object itself grew.',
        bn: 'b দিয়ে বদলালে বদলায় ভাগ-করা বাক্সটি। কোনো নামে হাত দেওয়া হয়নি — অবজেক্ট নিজেই বড় হয়েছে।',
      },
    },
    {
      line: 4,
      names: [
        { name: 'a', objId: 'L1' },
        { name: 'b', objId: 'L1' },
      ],
      objects: [{ id: 'L1', type: 'list', repr: '[1, 2, 3]' }],
      note: {
        en: 'print(a) shows [1, 2, 3] — a and b have been watching the same truth all along. Output: [1, 2, 3]',
        bn: 'print(a) দেখায় [1, 2, 3] — a আর b গোড়া থেকেই একই সত্য দেখছিল। আউটপুট: [1, 2, 3]',
      },
    },
  ],
};

/* ---------------------------------- */
/* Scenario 2: ints are immutable     */
/* ---------------------------------- */

const immutableRebind: PyScenario = {
  id: 'immutable-rebind',
  title: { en: 'Rebinding, not rewriting', bn: 'নাম বদল, মান নয়' },
  intro: {
    en: 'ints, strings and tuples can NEVER change in place. x + 1 builds a new object and moves the sticker. Watch y get left behind — correctly.',
    bn: 'int, str, tuple জায়গায় বদলাতেই পারে না। x + 1 নতুন অবজেক্ট বানিয়ে স্টিকার সরায়। দেখুন y যুক্তিসঙ্গতভাবে পিছিয়ে থাকে।',
  },
  code: ['x = 5', 'y = x', 'x = x + 1', "print(y)  # মান বেরিয়ে এলো?"],
  steps: [
    {
      line: 1,
      names: [{ name: 'x', objId: 'I1' }],
      objects: [{ id: 'I1', type: 'int', repr: '5' }],
      highlight: 'I1',
      note: {
        en: "The int object 5 appears; x is its sticker. ints are frozen at birth — nobody can edit a '5' into a '6'.",
        bn: 'int অবজেক্ট 5 জন্মাল; x তার স্টিকার। int জন্মেই হিমায়িত — কেউ 5-কে সম্পাদনা করে 6 বানাতে পারে না।',
      },
    },
    {
      line: 2,
      names: [
        { name: 'x', objId: 'I1' },
        { name: 'y', objId: 'I1' },
      ],
      objects: [{ id: 'I1', type: 'int', repr: '5', note: { en: 'two stickers, one int', bn: 'দুই স্টিকার, এক int' } }],
      note: {
        en: 'y = x — same rule as before: a second sticker on the same object.',
        bn: 'y = x — আগের সেই নিয়ম: একই অবজেক্টে দ্বিতীয় স্টিকার।',
      },
    },
    {
      line: 3,
      names: [
        { name: 'x', objId: 'I2' },
        { name: 'y', objId: 'I1' },
      ],
      objects: [
        { id: 'I1', type: 'int', repr: '5', note: { en: 'untouched; y still lives here', bn: 'অছুত; y এখনো এখানেই' } },
        { id: 'I2', type: 'int', repr: '6', note: { en: 'brand new object', bn: 'একদম নতুন অবজেক্ট' } },
      ],
      highlight: 'I2',
      note: {
        en: 'x + 1 cannot EDIT 5 — it builds a NEW object 6, and the x sticker moves. y is not dragged along.',
        bn: 'x + 1, 5-কে সম্পাদনা করতে পারে না — নতুন অবজেক্ট 6 বানিয়ে x স্টিকার সরে যায়। y-কে টেনে নেওয়া হয় না।',
      },
    },
    {
      line: 4,
      names: [
        { name: 'x', objId: 'I2' },
        { name: 'y', objId: 'I1' },
      ],
      objects: [
        { id: 'I1', type: 'int', repr: '5' },
        { id: 'I2', type: 'int', repr: '6' },
      ],
      note: {
        en: 'print(y) → 5. Rebinding moved one sticker only. If ints were mutable this would have printed 6 — and chaos everywhere.',
        bn: 'print(y) → 5। নাম-বদল সরিয়েছে একটি স্টিকারই। int পরিবর্তনীয় হলে এখানে 6 আসত — আর সব জায়গায় বিশৃঙ্খলা।',
      },
    },
  ],
};

/* ---------------------------------- */
/* Scenario 3: the mutable default    */
/* ---------------------------------- */

const mutableDefault: PyScenario = {
  id: 'mutable-default',
  title: { en: 'The mutable default trap', bn: 'পরিবর্তনীয় ডিফল্টের ফাঁদ' },
  intro: {
    en: 'Default arguments are evaluated ONCE, when def runs — not per call. A default list is therefore a secret shared bag across every call that omits it. The most famous Python bug, step by step.',
    bn: 'ডিফল্ট আর্গুমেন্ট মূল্যায়িত হয় একবারই — def চলার সময়, প্রতি কলে নয়। ফলে ডিফল্ট লিস্ট প্রতি কলের মধ্যে চুপিচুপি ভাগ-করা থলে হয়ে যায়। সবচেয়ে বিখ্যাত পাইথন-বাগ, ধাপে ধাপে।',
  },
  code: ['def add(item, bag=[]):', '    bag.append(item)', "    return bag", '', "add('a')  # ['a']", "add('b')  # ['b']? নাকি…"],
  steps: [
    {
      line: 1,
      names: [{ name: 'add', objId: 'F1' }],
      objects: [
        { id: 'F1', type: 'func', repr: 'add(item, bag)', note: { en: 'holds the default list inside', bn: 'ভেতরেই ডিফল্ট লিস্ট বহন করে' } },
        { id: 'D1', type: 'list', repr: '[]', note: { en: 'default [] born NOW, exactly once', bn: 'ডিফল্ট [] এখনই জন্ম নিল, হুবহু একবার' } },
      ],
      highlight: 'D1',
      note: {
        en: 'def executes and the default list [] is born ONCE and stored inside the function object.',
        bn: 'def চলে আর ডিফল্ট লিস্ট [] একবারই জন্ম নিয়ে গেঁথে যায় ফাংশন-অবজেক্টের ভেতরে।',
      },
    },
    {
      line: 5,
      names: [
        { name: 'add', objId: 'F1' },
        { name: 'bag', objId: 'D1' },
      ],
      objects: [
        { id: 'F1', type: 'func', repr: 'add(item, bag)' },
        { id: 'D1', type: 'list', repr: "['a']" },
      ],
      highlight: 'D1',
      note: {
        en: "First call: bag is only a sticker on that SAME default list. append('a') mutates it. Returns ['a'] — looks fine!",
        bn: "প্রথম কল: bag কেবল সেই একই ডিফল্ট-লিস্টের স্টিকার। append('a') তা বদলে দেয়। ফেরে ['a'] — ঠিকঠাকই মনে হচ্ছে!",
      },
    },
    {
      line: 6,
      names: [
        { name: 'add', objId: 'F1' },
        { name: 'bag', objId: 'D1' },
      ],
      objects: [
        { id: 'F1', type: 'func', repr: 'add(item, bag)' },
        { id: 'D1', type: 'list', repr: "['a']", note: { en: 'still carrying the ghost of call 1', bn: 'প্রথম কলের স্মৃতি এখনো ভর করছে' } },
      ],
      note: {
        en: "Second call — and bag is a sticker on the same list AGAIN. The 'a' from before never left.",
        bn: 'দ্বিতীয় কল — আর bag আবারও সেই একই লিস্টের স্টিকার। আগের a কোথাও যায়নি।',
      },
    },
    {
      line: 2,
      names: [
        { name: 'add', objId: 'F1' },
        { name: 'bag', objId: 'D1' },
      ],
      objects: [
        { id: 'F1', type: 'func', repr: 'add(item, bag)' },
        { id: 'D1', type: 'list', repr: "['a', 'b']" },
      ],
      highlight: 'D1',
      note: {
        en: "append('b') lands in the shared bag: ['a', 'b']. Fix: def add(item, bag=None) then bag = [] if bag is None — a fresh list per call.",
        bn: "append('b') পড়ল ভাগ-করা থলেতে: ['a', 'b']। প্রতিকার: def add(item, bag=None) তারপর bag = [] if bag is None — কলপ্রতি তাজা লিস্ট।",
      },
    },
  ],
};

export const PY_SCENARIOS: PyScenario[] = [namesStickers, immutableRebind, mutableDefault];

/** Data-integrity audit — the lab UI and the tests both lean on this. */
export function validateScenario(s: PyScenario): string[] {
  const errors: string[] = [];
  s.steps.forEach((st, i) => {
    if (st.line < 1 || st.line > s.code.length) errors.push(`${s.id}#${i}: line ${st.line} outside code`);
    const ids = new Set(st.objects.map((o) => o.id));
    if (ids.size !== st.objects.length) errors.push(`${s.id}#${i}: duplicate object id`);
    st.names.forEach((n) => {
      if (!ids.has(n.objId)) errors.push(`${s.id}#${i}: name ${n.name} points at missing ${n.objId}`);
    });
    if (st.highlight && !ids.has(st.highlight)) errors.push(`${s.id}#${i}: highlight ${st.highlight} missing`);
  });
  return errors;
}
