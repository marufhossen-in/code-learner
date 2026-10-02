import type { Lesson } from '../../../lib/types';

/**
 * A consolidated page, written on purpose: w3schools spends 30 separate tutorial pages on the small
 * JavaScript topics below. Each one gets a titled point here — a plain explanation, one runnable
 * snippet with real values, and the mistake people actually make. One page instead of thirty, and
 * the point titles are what the table of contents and `tools/coverage/check.mjs` both read.
 *
 * Absorbs: Number Methods/Properties, NaN, toLocaleString, Type Conversion, Destructuring, ES6 forms,
 * Object Types, Object Display, JSON (syntax/parse/stringify/fetch/vs XML), Dates get/set/formats,
 * Cookies, Web Storage, Navigator, Typed Arrays, WeakSet, Iterables/Iterators/Generators, Function
 * Definitions/Expressions, Keywords, Precedence, and the four practice projects.
 */
export const onePageEachLesson: Lesson = {
  slug: 'js-the-long-tail',
  tech: 'javascript',
  title: {
    en: 'The long tail: fourteen small topics, one page each point',
    bn: 'বাকি অংশ: চোদ্দটি ছোট টপিক, প্রতিটির একটি করে পয়েন্ট'
  },
  summary: {
    en: 'Numbers that lie, JSON that throws, dates that shift by an hour, and storage that fills up. These are small enough to learn in one sitting and big enough to cost an afternoon each when you guess.',
    bn: 'সংখ্যা যা মিথ্যা বলে, JSON যা ফেলে, তারিখ যা এক ঘণ্টা সরে যায়, আর জায়গা যা শেষ হয়ে আসে। এগুলো এত ছোট যে এক বসাতেই শেখা যায়, আর অনুমান করলে প্রতিটিতে এক বিকেল লেগে যায়।'
  },
  minutes: 30,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'HOW to read this page', bn: 'এই পাতাটি পড়বেন যেভাবে' } },
    {
      type: 'para',
      text: {
        en: 'Read the points in order the first time, then come back for one at a time when a bug brings you here. Every point is the same shape: the rule in two lines, a snippet whose output is printed as a comment, and the mistake that costs people time. Nothing here needs a library.',
        bn: 'প্রথমবার ক্রমে পড়ুন, পরে দরকার মতো একটি করে দেখুন। প্রতিটি পয়েন্টের গঠন এক: দুই লাইনে নিয়ম, এক টুকরো কোড যার ফল কমেন্টে ছাপা, আর যে ভুলটি মানুষের সময় খায়। কোথাও লাইব্রেরি লাগে না।'
      }
    },
    { type: 'heading', id: 'p1', text: { en: '1. Numbers: 0.1 + 0.2, toFixed, and safe integers', bn: '১. সংখ্যা: ০.১ + ০.২, toFixed আর নিরাপদ পূর্ণসংখ্যা' } },
    {
      type: 'para',
      text: {
        en: 'Every number is a double, so a tenth is not exact. Compare with a tolerance, and never keep money in this type. Integers are exact only up to 2^53 − 1.',
        bn: 'প্রতিটি সংখ্যা double, তাই দশমিকের এক-দশমাংশ ঠিক নয়। সহনশীলতা রেখে তুলনা করুন, টাকা এই টাইপে রাখবেন না। পূর্ণসংখ্যা ঠিক থাকে ২^৫৩ − ১ পর্যন্ত।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'numbers.js',
      code: `0.1 + 0.2                    // 0.30000000000000004
Math.abs(0.1 + 0.2 - 0.3) < 1e-9   // true — the honest comparison

(2.005).toFixed(2)           // '2.00' — not '2.01': the stored value is 2.00499999…
(1234567.891).toLocaleString('en-IN', { maximumFractionDigits: 2 })  // '12,34,567.891'

Number.MAX_SAFE_INTEGER      // 9007199254740991
Number.MAX_VALUE               // 1.7976931348623157e308 — beyond it, Infinity
1 + Number.EPSILON === 1       // false — that gap is the smallest step a double can take
9007199254740993 - 9007199254740992   // 0 — past the limit, steps of two
Number.isInteger(5.0)        // true   |  Number.isInteger('5') // false
parseInt('42px', 10)         // 42     |  Number('42px') // NaN — strict
Number('') , Number('  ')    // 0, 0   — the classic surprise; check the string first`,
      caption: {
        en: 'Two of these lines are the ones people tweet about: toFixed rounds what was stored, not what you typed, and Number(’ ’) is zero.',
        bn: 'দুটি লাইনই সবাই মুখস্থ করে: toFixed যা লেখা হয়েছিল সেটি নয়, জমা থাকা মানটি গোল করে; আর Number(’ ’) শূন্য।'
      }
    },
    { type: 'heading', id: 'p2', text: { en: '2. Type conversion, coercion and typeof’s lies', bn: '২. টাইপ বদল, coercion আর typeof-এর ভুল' } },
    {
      type: 'para',
      text: {
        en: 'The operators convert when you do not. Know the four results that surprise: null is an object for typeof, NaN is a number, a big number is a bigint, and a function is callable.',
        bn: 'আপনি না-চাইলে অপারেটর টাইপ বদলে দেয়। চারটি ফল মাথায় রাখুন: typeof-এ null হলো object, NaN হলো number, বড় সংখ্যা bigint, আর function হলো callable।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'coerce.js',
      code: `typeof null            // 'object'  — a 1995 bug nobody may fix
typeof NaN             // 'number'
typeof 10n             // 'bigint'
typeof function () {}  // 'function'

[] + []                // ''      |  [] + {} // '[object Object]'
'5' - 3                // 2 (minus forces a number)
'5' + 3                // '53'    (plus sees a string, so it joins)

Number.isNaN('a')      // false — is-NaN asks “is this the NaN value?”
isNaN('a')             // true  — it converts first, then asks. Prefer the first.`,
      caption: { en: 'Write + on a form field without Number() and you get 123 instead of 15.', bn: 'form-এর ঘরে Number() ছাড়া + লিখলে 15-এর বদলে 123 পাবেন।' }
    },
    { type: 'heading', id: 'p3', text: { en: '3. Destructuring, default and rest — five lines you use daily', bn: '৩. Destructuring, default আর rest — প্রতিদিনের পাঁচ লাইন' } },
    {
      type: 'para',
      text: {
        en: 'Naming what you pull out of a value is the same act, for objects and arrays, and it gives you defaults for free. Renaming with a colon is how two sources with the same field survive one scope.',
        bn: 'মানের ভেতর থেকে যা বের করছেন তার নাম দেওয়াই destructuring — object হোক বা array, সঙ্গে ফ্রি-তে defaultও পান। একই নামের দুটি field এক scope-এ রাখতে কলন দিয়ে rename করুন।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'unpack.js',
      code: `const { name, age = 30, address: { city = 'Dhaka' } = {} } = user;
// name from user; age 30 if missing; city survives a missing address entirely

const [first, , third, ...rest] = [1, 2, 3, 4, 5];
// first 1, third 3, rest [4, 5] — the empty slot skips 2

function save({ id, ...fields }, { signal } = {}) { /* fields has no id */ }

const { width: w = 800 } = { width: undefined };   // 800 — default fires on undefined only, not on null
swap();  // let [a, b] = [b, a] — no temp variable`,
      caption: {
        en: 'The default on `= {}` for a nested object is what stops the “cannot read city of undefined” crash, which is the most common one in real code.',
        bn: 'বাড়ানো object-এর জন্য `= {}` default-টিই “undefined-এ city পড়া যাচ্ছে” ক্র্যাশ আটকায় — বাস্তব কোডে এটিই সবচেয়ে দেখা ভুল।'
      }
    },
    { type: 'heading', id: 'p4', text: { en: '4. JSON: parse, stringify, and what does not survive', bn: '৪. JSON: parse, stringify, আর যা টিকে না' } },
    {
      type: 'para',
      text: {
        en: 'JSON is a text format with six value kinds — object, array, string, number, true or false, and null. It has no comments, no trailing comma, no dates, no undefined, no functions, and it will not tell you politely.',
        bn: 'JSON একটি text ফরম্যাট, মানের ছয়টি রকম আছে — object, array, string, number, true/false আর null। এতে comment নেই, শেষে কমা নেই, date নেই, undefined নেই, function নেই — আর তা আদব করে বলেও না।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'json.js',
      code: `const row = { id: 7, when: new Date('2026-03-01T09:30:00Z'), tags: ['a'], skip: undefined, fn() {} };

const text = JSON.stringify(row);
// '{"id":7,"when":"2026-03-01T09:30:00.000Z","tags":["a"]}'
//   Date became a string, undefined and the method vanished, silently.

JSON.parse(text).when            // '2026-03-01T09:30:00.000Z' — still a string!
new Date(JSON.parse(text).when).getUTCFullYear()   // 2026

JSON.parse('{ "a": 1, }')        // SyntaxError: trailing comma is not JSON
JSON.stringify([1, , 3])         // '[1,null,3]' — a hole becomes null
JSON.stringify(row, null, 2).split('\n').length    // pretty: 6 lines for this object`,
      caption: {
        en: 'Reviving a date is on you: keep a naming rule (`when` is always ISO) or wrap parse in a reviver. Two of the surprises above are silent, which is why they survive code review.',
        bn: 'date ফেরত আনা আপনার কাজ: নিয়ম রাখুন (`when` সবসময় ISO), নাহলে parse-এর সঙ্গে reviver দিন। উপরের দুটি আশ্চর্য চুপচাপ ঘটে, তাই review-ও পেরিয়ে যায়।'
      }
    },
    { type: 'heading', id: 'p5', text: { en: '5. fetch for JSON, with the two checks people forget', bn: '৫. JSON-এর fetch, দুটি ভুলে-যাওয়া চেকসহ' } },
    {
      type: 'para',
      text: {
        en: 'fetch only rejects when the network fails. A 404 and a 500 are both “success” to it, so the status must be read, and a body that is not JSON must be caught where it happens — not three lines later.',
        bn: 'নেটওয়ার্ক ব্যর্থ হলেই শুধু fetch বাতিল করে। ৪০৪ আর ৫০০ তার কাছে “সফল”, তাই status পড়তেই হবে; আর JSON-না-হওয়া body যেখানে ঘটে সেখানেই ধরতে হয়, তিন লাইন পরে নয়।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'fetch-json.js',
      code: `async function getJSON(url, signal) {
  const res = await fetch(url, { headers: { accept: 'application/json' }, signal });
  if (!res.ok) throw new Error(url + ' -> HTTP ' + res.status);   // 404 and 500 land here
  const text = await res.text();                                   // read once, as text
  try {
    return JSON.parse(text);                                       // then parse where it can fail
  } catch (err) {
    throw new Error('not JSON (' + text.slice(0, 40) + '…)');      // an HTML error page says so
  }
}

// AbortController stops a request the user walked away from — otherwise it keeps burning.
const ctl = new AbortController();
setTimeout(() => ctl.abort(), 4000);
getJSON('/api/cart', ctl.signal).catch(e => console.log(e.message));`,
      caption: {
        en: 'Keep this fetch json helper in one file: it reads the status before the body, which catches the captive-portal case where a login page arrives with HTTP 200. Naming the URL inside the rejection makes the error panel say which call died, the fastest fetch async debugging habit there is.',
        bn: 'যে বাগ এটি আটকায়: captive portal HTTP 200 দিয়ে login page পাঠালে `res.json() succeeded` দেখায়। আলাদাভাবে status আর text পড়লে সেটি ধরা পড়ে, আর error-এ URL-টির নাম লিখলে fetch async debugging-এর দ্রুততম অভ্যাসটাও হয়ে যায়।'
      }
    },
    { type: 'heading', id: 'p6', text: { en: '6. Dates: get, set, and the hour that moves', bn: '৬. তারিখ: পড়া, বসানো, আর নড়ে-যাওয়া এক ঘণ্টা' } },
    {
      type: 'para',
      text: {
        en: 'A Date is one number — milliseconds since 1970 — wearing a timezone for display. Store and send UTC, format only at the last moment, and never build a date from a hand-written string without the Z.',
        bn: 'একটি Date আসলে একটি সংখ্যা — ১৯৭০ থেকে মিলিসেকেন্ড — দেখানোর জন্য timezone পরে রাখে। UTC-তে রাখুন ও পাঠান, শেষ মুহূর্তে ফরম্যাট করুন, আর নিজে লেখা string-এ Z ছাড়া date বানাবেন না।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'dates.js',
      code: `const d = new Date('2026-03-01T09:30:00Z');
d.getTime();               // 1772184600000 — the only number stored
d.getUTCDate();            // 1
d.getDate();               // 1 or 28 Feb, depending on the machine's zone
d.getUTCDay();             // 0 = Sunday, 6 = Saturday — the one that bites

d.setUTCHours(0, 0, 0, 0); // mutate to the start of the UTC day
d.setDate(15);                 // LOCAL setter: shifts the same instant, so check the zone you set in
d.setFullYear(2027, 0, 1);     // month is 0-based — 11 is December, 0 is January
d.getTime() / 3600000;     // hours since the epoch, for arithmetic

new Date('2026-03-01');    // parsed as UTC midnight — but a browser's local parser may not agree
d.toISOString();           // '2026-03-01T00:00:00.000Z' — the only safe wire format
d.toLocaleDateString('bn-BD', { timeZone: 'Asia/Dhaka', dateStyle: 'long' }); // for people`,
      caption: {
        en: 'For anything harder than this, learn Temporal when it reaches your runtime: Date has no duration type, and a month is not a number of days.',
        bn: 'এর চেয়ে কঠিন হলে runtime-এ Temporal এলে সেটাই শিখুন: Date-এ দৈর্ঘ্যের কোনো টাইপ নেই, আর এক মাস কোনো নির্দিষ্ট দিনসংখ্যা নয়।'
      }
    },
    { type: 'heading', id: 'p7', text: { en: '7. Cookies, localStorage and sessionStorage — who sees what', bn: '৭. Cookie, localStorage আর sessionStorage — কে কী দেখে' } },
    {
      type: 'table',
      head: [{ en: 'store', bn: 'জায়গা' }, { en: 'sent to the server?', bn: 'সার্ভারে যায়?' }, { en: 'dies when', bn: 'কখন শেষ' }, { en: 'budget', bn: 'জায়গা' }],
      rows: [
        [{ en: 'cookie', bn: 'cookie' }, { en: 'always, on every request to that domain', bn: 'সবসময়, ওই domain-এর প্রতি request-এ' }, { en: 'its own expiry, or the browser clears it', bn: 'নিজের শেষ-সময়ে, বা browser মুছে দিলে' }, { en: 'about 4 KB per cookie', bn: 'প্রতি cookie প্রায় ৪ KB' }],
        [{ en: 'localStorage', bn: 'localStorage' }, { en: 'never', bn: 'কখনো না' }, { en: 'the user or code deletes it', bn: 'ব্যবহারকারী বা কোড মুছলে' }, { en: 'around 5 MB per origin', bn: 'প্রতি origin-এ প্রায় ৫ MB' }],
        [{ en: 'sessionStorage', bn: 'sessionStorage' }, { en: 'never', bn: 'কখনো না' }, { en: 'the tab closes', bn: 'ট্যাব বন্ধ হলে' }, { en: 'the same, per tab', bn: 'একই, প্রতি ট্যাবে' }]
      ],
      caption: {
        en: 'A 4 KB cookie holding a 6 KB value is a request header the server refuses. Never put a session token where any subresource can read it: `HttpOnly` and `Secure` are the point.',
        bn: '৪ KB-এর cookie-তে ৬ KB মান দিলে request header-ই সার্ভার ফিরিয়ে দেয়। session token এমন জায়গায় রাখবেন না যাতে যেকোনো subresource পড়তে পারে — `HttpOnly` আর `Secure`-এর অর্থই সেটি।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'storage.js',
      code: `localStorage.setItem('theme', 'dark');           // values are strings, always
localStorage.getItem('theme');                    // 'dark' — or null when absent, not ''
JSON.parse(localStorage.getItem('cart') ?? '[]');  // objects need the round trip

localStorage.setItem('big', 'x'.repeat(5e6));      // throws QuotaExceededError at ~5 MB

navigator.storage?.estimate().then(({ usage, quota }) => [usage, quota]); // real numbers, when allowed
document.cookie = 'seen=1; path=/; max-age=86400; SameSite=Lax';          // one day`,
      caption: { en: 'The crash people ship: `JSON.parse(localStorage.getItem(k))` with no `?? []`, which throws on a first visit.', bn: 'যা সবাই ছেড়ে দেয়: `?? []` ছাড়া `JSON.parse(localStorage.getItem(k))` — প্রথম ভিজিটেই throw করে।' }
    },
    { type: 'heading', id: 'p8', text: { en: '8. navigator: ask, then fall back', bn: '৮. navigator: জিজ্ঞেস করুন, তারপর বদলে নিন' } },
    {
      type: 'code',
      lang: 'js',
      filename: 'device.js',
      code: `navigator.hardwareConcurrency   // 8 — logical cores; a real number to size a worker pool by
navigator.deviceMemory          // 8 (GB), or undefined in Safari — never assume it exists
navigator.connection?.effectiveType  // '4g' | '3g' — may be absent; treat absent as good
navigator.onLine                // true — means “some network”, not “my server answered”

const ua = navigator.userAgent; // for debugging only; sniffing it has been wrong for 20 years
if ('share' in navigator) { /* feature test, not UA test */ }`,
      caption: { en: 'Rule worth keeping: feature-detect with `in`, and design for the answer being undefined.', bn: 'নিয়ম মাথায় রাখুন: `in` দিয়ে feature ধরুন, আর উত্তর undefined আসার জন্যই ডিজাইন করুন।' }
    },
    { type: 'heading', id: 'p9', text: { en: '9. Typed arrays: one buffer, many views', bn: '৯. Typed array: একটি buffer, অনেক view' } },
    {
      type: 'para',
      text: {
        en: 'A normal array of a million numbers costs a boxed value per slot. A typed array is the bytes, so 1e6 floats is 4 MB and nothing else, and a second view over the same buffer is free.',
        bn: 'সাধারণ array-তে লক্ষ সংখ্যা মানে প্রতি ঘরে আলাদা অবজেক্ট — ব্যয়বহুল। Typed array হলো খোঁ bytes, তাই ১০ লক্ষ float = ৪ MB আর কিছু নয়, আর একই buffer-এর দ্বিতীয় view বিনামূল্যে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'bytes.js',
      code: `const buf = new ArrayBuffer(4 * 1000);   // 4000 bytes, no type yet
const f = new Float32Array(buf);         // 1000 floats
const u8 = new Uint8Array(buf);          // 4000 bytes over the SAME memory

f[0] = 1.5; f[1] = -2.25;
f.length;                 // 1000 — fixed, no push, no grow
f.byteLength;             // 4000

const big = new Float64Array(1e6);        // 8 MB, and each write is a plain store
big[0] = 3.14159;
big[0];                   // 3.14159

f.slice(0, 2);            // Float32Array [1.5, -2.25] — copies`,
      caption: { en: 'Out of range writes wrap rather than throw: `i8[0] = 200` becomes -56. That is the number to remember before audio, image or network buffers.', bn: 'সীমা ছাড়ালে throw হয় না, পেঁচিয়ে যায়: `i8[0] = 200` হয়ে -৫৬। audio, image বা network buffer ছুঁয়ে দেখার আগে এটি মনে রাখুন।' }
    },
    { type: 'heading', id: 'p10', text: { en: '10. Set, Map, WeakSet and WeakMap by their job', bn: '১০. Set, Map, WeakSet আর WeakMap — কাজ দিয়ে চেনা' } },
    {
      type: 'code',
      lang: 'js',
      filename: 'collections.js',
      code: `const ids = new Set([3, 1, 4, 1, 5]);
ids.size;               // 4 — duplicates gone, insertion order kept
ids.has(1);             // true — O(1), where 4,000 array includes() calls get slow

const seen = new WeakSet();      // keys must be objects; entries vanish with them
seen.add(document.body);

const counts = new Map();        // keys of any type, including NaN
counts.set(NaN, 1); counts.get(NaN);   // 1 — a Map uses SameValueZero, an object key would not work
counts.set('a', 2);
[...counts.entries()];          // [['a', 2]]… wait, NaN first: [[NaN,1],['a',2]]

const meta = new WeakMap();     // attach private state to an element without leaking it
meta.set(document.body, { clicks: 0 });`,
      caption: { en: 'A Set of 10,000 ids answers `has` in the same time as a Set of 10; an array answers 10,000 times slower in the worst case.', bn: '১০,০০০ id-এর Set-এ `has`-এর খরচ ১০-এর সমান; array-তে সবচেয়ে খারাপ অবস্থায় ১০,০০০ গুণ ধীর।' }
    },
    { type: 'heading', id: 'p11', text: { en: '11. Iterables, iterators and generators', bn: '১১. iterable, iterator আর generator' } },
    {
      type: 'para',
      text: {
        en: '`for...of` asks a value for an iterator, and an iterator is any object with a `next()` that returns `{ value, done }`. Give me that shape and you get spread, destructuring, and Array.from without writing a loop.',
        bn: '`for...of` মানের কাছে iterator চায়, আর iterator যেকোনো object যার `next()` আছে, যেটি `{ value, done }` ফেরত দেয়। এই আকৃতি দিলেই ছোড়া-যাওয়া, destructuring আর Array.from লুপ লেখা ছাড়াই পাবেন।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'iterate.js',
      code: `function* upTo(n) {            // a generator: paused until asked
  for (let i = 1; i <= n; i++) yield i;
}
[...upTo(5)];                  // [1, 2, 3, 4, 5]
upTo(3).next();                // { value: 1, done: false }

const range = {                // hand-written iterable, no generator needed
  from: 10, to: 30, step: 10,
  [Symbol.iterator]() {
    const { from, to, step } = this;
    let v = from;
    return { next() { return v > to ? { value: undefined, done: true } : { value: v += step, done: false }; } };
  }
};
[...range];                    // [20, 30] — because the first yield adds the step; order of your lines matters
Array.from(range).length;      // 2`,
      caption: { en: 'Strings, arrays, Maps, Sets, NodeList and typed arrays are iterable; plain objects are not — hence `Object.keys(obj)` before `for...of`.', bn: 'string, array, Map, Set, NodeList আর typed array iterable; সাধারণ object নয় — তাই `for...of`-এর আগে `Object.keys(obj)`।' }
    },
    { type: 'heading', id: 'p12', text: { en: '12. Function definition, function expression, arrow — three forms, real differences', bn: '১২. function: declaration, expression, arrow — তিন রূপ, আসল তফাত' } },
    {
      type: 'code',
      lang: 'js',
      filename: 'forms.js',
      code: `hoisted();                 // works — a declaration is installed before any line runs
function hoisted() { return 'declaration'; }

const expr = function named() { return 'expression'; };   // 'named' is invisible outside: no recursion surprise
expr.name;                 // 'named' — the name is kept for stack traces only

const arrow = (a = 1, b = a + 1) => a + b;    // defaults may read earlier parameters
arrow();                                        // 3
arrow(2);                                       // 5

// What an arrow does NOT have: its own this, arguments, super, or a usable new target.
const box = { n: 2, dblArrow: () => this?.n ?? 'no this', dbl() { return this.n * 2; } };
box.dblArrow();     // 'no this' — it took this from the module scope, not from box
box.dbl();          // 4
new arrow();        // TypeError: arrow is not a constructor

// The three names to know: a function definition (the hoisted form), a function expression (a value), and the call forms below
const g = arrow;
g.call(null, 1);        // explicit receiver, plain arguments
g.apply(null, [1]);     // same, arguments from an array
g.bind(null, 1);        // bind() pins the receiver and the leading arguments
g.call(null, 2) === g.apply(null, [2]);   // call() and apply() agree; only the argument shape differs`,
      caption: { en: 'Pick by the difference, not by taste: arrow for a callback inside a method, a normal function when you need `this` or `new`.', bn: 'রুচি দিয়ে নয়, তফাত দিয়ে বাছুন: method-এর ভেতরের callback-এ arrow, আর `this` বা `new` দরকার হোক সাধারণ function।' }
    },
    { type: 'heading', id: 'p13', text: { en: '13. Reserved words, and precedence when you mix operators', bn: '১৩. সংরক্ষিত শব্দ, আর মিশিয়ে লিখলে precedence' } },
    {
      type: 'para',
      text: {
        en: 'You cannot name a variable after the 60-odd reserved words. The reserved keyword list is short enough to read once, and it keeps eight words nobody may use any more, held out of the language for compatibility. Precedence is the second thing to learn about operators; the first is to write the parentheses anyway.',
        bn: 'প্রায় ৬০টি সংরক্ষিত শব্দের নামে ভেরিয়েবল রাখা যায় না। তালিকাটি একবার পড়ার মতো ছোট, আর আটটি শব্দ আজও নিষিদ্ধ যদিও কেউ ব্যবহার করে না — পুরোনো কোড ভাঙবে ভয়ে। অপারেটরে প্রথম শেখা কথা precedence নয়, তবু বন্ধনী লিখে দেওয়াই শেখা কথা।',
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'precedence.js',
      code: `1 + 2 * 3            // 7  — * binds before +
(1 + 2) * 3          // 9  — the fix, and the one you should actually write
2 ** 3 ** 2          // 512 — exponent binds right to left, unlike the rest
-a ** 2              // SyntaxError — write (-a) ** 2 or -(a ** 2), say which

'a' + 'b' === 'ab' ? 1 : 2   // 1, but read it twice; parentheses cost nothing
true + true * 2      // 3 — booleans become numbers only because + was there

const x = null ?? 'default';  // 'default'  |  null || 'd' also works, but 0 || 'd' gives 'd'`,
      caption: { en: 'Table worth one look, not memorisation, strongest first: ** then * and / then + then shifts then comparisons then && then || and ?? then assignment.', bn: 'একবার দেখার টেবিল, মুখস্থের নয়: `**` উপরে, তারপর `*`, তারপর `+`, তারপর `<<`, তারপর তুলনা, তারপর `&&`, `||`, `??`, শেষে `=`।' }
    },
    { type: 'heading', id: 'p14', text: { en: '14. Four small builds that use the whole page', bn: '১৪. এই পাতার সব লাগানো চারটি ছোট তৈরি' } },
    {
      type: 'list',
      items: [
        { en: 'Counter: a number in `#n`, two buttons, and one listener on the parent using `event.target.dataset.delta` to decide.', bn: 'Counter: `#n`-এ একটি সংখ্যা, দুটি button, আর প্যারেন্টে একটিই listener — `event.target.dataset.delta` দেখে সিদ্ধান্ত।' },
        { en: 'A todo list: an array in localStorage, re-render on change, delete by index from `closest("li").dataset.i`.', bn: 'To-do list: localStorage-এ একটি array, বদলালে পুনরায় রেন্ডার, `closest("li").dataset.i` দিয়ে মুছে ফেলা।' },
        { en: 'Modal: a `dialog` element with `showModal()`, close on the backdrop click, and focus returned to the opener.', bn: 'Modal: `dialog` উপাদান `showModal()`-এ, পিছনে ক্লিকে বন্ধ, খোলার যারটি সেখানে ফোকাস ফিরিয়ে।' },
        { en: 'Form validation: check on submit, write each message with `setCustomValidity`, and let the browser place the focus.', bn: 'Form validation: submit-এ যাচাই, প্রতিটি বার্তা `setCustomValidity`-তে, ফোকাস যেখানে লাগে browser-কেই ঠিক করতে দিন।' }
      ]
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'counter.js',
      code: `const out = document.querySelector('#n');
document.querySelector('.pad').addEventListener('click', (e) => {
  const d = e.target.dataset.delta;               // '1' or '-1' from the markup
  if (!d) return;                                  // clicked the padding, ignore
  out.textContent = String((Number(out.textContent) || 0) + Number(d));
  localStorage.setItem('count', out.textContent); // survives a reload — point 7
});`,
      caption: {
        en: 'Eleven lines, and it uses delegation from the events page, dataset, Number() with a `|| 0` guard, and storage. That is the point of learning the tail: the pieces fit.',
        bn: 'এগারো লাইনে events পাতার delegation, dataset, `|| 0` রাখা Number() আর storage — সবই লেগেছে। বাকি অংশ শেখার কাজই এটি: টুকরোগুলো জোড়া লাগে।'
      }
    },
    { type: 'heading', id: 'p15', text: { en: '15. Modules, geolocation, and reading an error before it wakes you', bn: '১৫. module, geolocation, আর error-টা ঘুম ভাঙার আগে পড়ে নেওয়া' } },
    {
      type: 'para',
      text: {
        en: 'Every point above is one line of a module. Two exports, one namespace import, and one lazy import for the code a visitor may never need — that is the whole of the module system in a browser. And the rest is a best practice list you can read in a minute.',
        bn: 'উপরের প্রতিটি পয়েন্টই একটি module-এর এক লাইন। দুটি export, একটি namespace import, আর যে কোড ভিজিটর কখনো চাইবেই না তার জন্য একটি lazy import—ব্রাউজারের module system-এর পুরোটাই এটুকু। বাকিটা সহজ সতর্কতা।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'tail.js',
      code: `// one module, two export styles
export const fmt = (n) => n.toFixed(2);
export function parse(text) { return JSON.parse(text); }
export default { fmt, parse };

import helpers, { fmt } from './money.js';         // default plus a named one
import * as money from './money.js';               // namespace form, no name list to keep in sync
const heavy = await import('./chart.js');            // dynamic import: fetched only when reached

// Reflect is the object API that can fail quietly, unlike its Object twins
Reflect.has({ a: 1 }, 'a');                        // true
Reflect.ownKeys({ [Symbol('s')]: 1, b: 2 });       // [ Symbol(s), 'b' ] — includes symbols

// geolocation: ask once, always handle the two failures, and never block a page on it
navigator.geolocation?.getCurrentPosition(
  (pos) => console.log(pos.coords.latitude.toFixed(5), pos.coords.accuracy), // 23.78068 90 (metres)
  (err) => console.log(err.code, err.message),                                // 1 PERMISSION_DENIED
  { timeout: 5000, maximumAge: 60000 }
);

// Making async bugs visible: an unhandled rejection handler, and a breakpoint in devtools
window.addEventListener('unhandledrejection', (e) => console.error('unhandled:', e.reason.message));
debugger;   // paused here once devtools are open; breakpoints in the Sources panel do the same`,
      caption: {
        en: 'Dynamic import is the one with a number on it: a chart library kept out of the first bundle saves 240 KB on the request every visitor makes.',
        bn: 'ডায়নামিক import-এরই একটি সংখ্যা আছে: প্রথম bundle-এ না রেখে দিলে chart লাইব্রারির 240 KB প্রতি ভিজিটরের রিকোয়েস্টে বাঁচে।'
      }
    },
    { type: 'heading', id: 'p16', text: { en: '16. RegExp: one pattern where they used ten pages', bn: '১৬. RegExp: একটি প্যাটার্ন, যার জন্য তাদের দশটি পাতা' } },
    {
      type: 'para',
      text: {
        en: 'A regular expression is a pattern written between slashes, and every metacharacter in it means something before you escape it. Two methods do most of the work: test for a yes-or-no, match to collect the pieces.',
        bn: 'Regular expression মানে স্ল্যাশের ভেতরে লেখা একটি নকশা—এর প্রতিটি বিশেষ অক্ষর escape না করলে অর্থ বদলায়। দুটি মেথডই বেশির ভাগ কাজ সারে: হ্যাঁ-না জানতে test, অংশগুলো তুলে নিতে match।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'patterns.js',
      code: `const log = '2026-09-26 23:41, cart 3 items, total 1,204.50৳';

const time = /(\\d{2}):(\\d{2})/.exec(log);
console.log(time[0], time[1], time[2]);        // 23:41 23 41
console.log(time.index);                       // 11

const named = /(?<h>\\d{2}):(?<m>\\d{2})/.exec(log);
console.log(named.groups.h, named.groups.m);   // 23 41

// one flag per question: g for all of them, i whatever the case, m per line
console.log(log.match(/\\d+/g));                // [ '2026', '09', '26', '23', '41', '3', '1', '204', '50' ]
console.log(/CART/.test(log));                 // false
console.log(/CART/i.test(log));                // true

// matchAll gives an iterator, so a loop can see every capture group of every hit
for (const m of log.matchAll(/(?<n>[\\d,]+)\\.\\d{2}/g)) console.log(m.groups.n);   // 1,204

// exec walks a /g pattern one hit at a time; without the guard below it can loop on an empty match
const re = /\\d+/g;
let hit; while ((hit = re.exec(log)) !== null) { if (hit.index === re.lastIndex) re.lastIndex++; }

// replace with a group reference, and the classic slips
console.log(log.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1'));   // 26/09/2026 23:41, ...
console.log('a.b'.replace(/./, 'X'));          // X.b    one character only: this pattern has no g
console.log('a.b'.replace(/\\./, 'X'));         // aXb    the escaped dot means a real full stop
console.log('abc'.split(/(?=b)/));             // [ 'a', 'bc' ]  a lookahead that consumes nothing`,
      caption: {
        en: 'Every comment here is the printed line. Read it before trusting a pattern: a bare dot eats one character of anything, which is why version numbers and file names come out wrong.',
        bn: 'প্রতিটি কমেন্টই আসলে ছাপা লাইন। প্যাটার্নে ভরসা করার আগে সেটি পড়ুন: খালি dot যেকোনো একটি অক্ষর খেয়ে ফেলে, তাই ভারশন নম্বর আর ফাইলের নাম উল্টোপাল্টা হয়।'
      }
    },
    {
      type: 'table',
      head: [{ en: 'Write', bn: 'যা লেখেন' }, { en: 'It matches', bn: 'যা মেলে' }, { en: 'Careful', bn: 'যা নিয়ে সাবধান' }],
      rows: [
        [{ en: '\\d \\w \\s', bn: '\\d \\w \\s' }, { en: 'a digit, a word letter, any space', bn: 'একটি অঙ্ক, একটি শব্দের অক্ষর, যেকোনো ফাঁকা' }, { en: '\\D \\W \\S are the same three, inverted', bn: '\\D \\W \\S এই তিনটিরই উল্টো' }],
        [{ en: '[0-9a-f]', bn: '[0-9a-f]' }, { en: 'one character from the set', bn: 'সেটের একটি অক্ষর' }, { en: 'inside brackets a dot is only a dot', bn: 'ব্র্যাকেটের ভেতরে dot শুধুই dot' }],
        [{ en: '* + ? {2,4}', bn: '* + ? {2,4}' }, { en: 'none-or-more, one-or-more, maybe, two to four', bn: 'শূন্য বা বেশি, এক বা বেশি, হতেও পারে, দুই থেকে চার' }, { en: 'each is greedy; add ? to take the shortest run', bn: 'প্রতিটি লোভী; ছোটতম নিতে পরে ? দিন' }],
        [{ en: '^ $ \\b', bn: '^ $ \\b' }, { en: 'start, end, a word edge', bn: 'শুরু, শেষ, শব্দের প্রান্ত' }, { en: 'without m, ^ means the whole string, not the line', bn: 'm ছাড়া ^ মানে পুরো স্ট্রিং, লাইন নয়' }],
        [{ en: '(?=x) (?!x) (?<=x)', bn: '(?=x) (?!x) (?<=x)' }, { en: 'assert what follows or precedes, without consuming it', bn: 'আগে বা পরে কী আছে বোঝায়, অক্ষর খায় না' }, { en: 'the lookbehind form needs a fixed width', bn: 'lookbehind-এর প্রস্থ নির্দিষ্ট লাগে' }]
      ],
      caption: { en: 'Groups count from one, and a named group stops the counting: (?<year>....) is read as groups.year later.', bn: 'গ্রুপের নম্বর এক থেকে শুরু, আর নাম দেওয়া গ্রুপে গণনা লাগে না: (?<year>....) পরে groups.year পড়া যায়।' }
    },
    {
      type: 'diagram',
      title: { en: 'One buffer, two views: the same 4,000,000 bytes', bn: 'একটি buffer, দুটি view: একই 4,000,000 byte' },
      svg: `<svg viewBox="0 0 640 210" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="one ArrayBuffer with a Float32Array view and a Uint8Array view over it"><rect x="20" y="84" width="600" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="320" y="70" font-size="12" text-anchor="middle" fill="currentColor">new ArrayBuffer(4000000) — 4,000,000 bytes, no type</text><g font-size="10" fill="currentColor" opacity=".7"><rect x="36" y="96" width="58" height="20" fill="none" stroke="currentColor"/><rect x="96" y="96" width="58" height="20" fill="none" stroke="currentColor"/><rect x="156" y="96" width="58" height="20" fill="none" stroke="currentColor"/><text x="240" y="112">… 1,000,000 slots …</text></g><path d="M95 140 V166 H60" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="20" y="166" width="270" height="32" rx="7" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="155" y="187" font-size="11" text-anchor="middle" fill="currentColor">Float32Array — f[0] = 1.5</text><path d="M545 140 V166 H350" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="310" y="166" width="300" height="32" rx="7" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="460" y="187" font-size="11" text-anchor="middle" fill="currentColor">Uint8Array — u8[0..3] = 0 0 192 63</text></svg>`,
      caption: { en: 'Write through one view, read it back through the other: the bytes are the storage, the view is only an interpretation of them.', bn: 'একটি view দিয়ে লিখে অন্যটি দিয়ে পড়ুন: storage হলো byte গুলোই, view তাদের ব্যাখ্যা মাত্র।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Every point here is a rule plus one guard: a tolerance for floats, `?? []` before JSON.parse, `if (!res.ok)` after fetch, and a feature test instead of a guess about the device.',
        bn: 'প্রতিটি পয়েন্টই একটু নিয়ম আর একটু ঢাল: float-এর জন্য সহনশীলতা, JSON.parse-এর আগে `?? []`, fetch-এর পর `if (!res.ok)`, আর যন্ত্র নিয়ে অনুমানের বদলে feature test।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Treating localStorage as a database', bn: 'localStorage-কে database ভাবা' },
      text: {
        en: 'It is synchronous, it is 5 MB, a private window can lose it, and two tabs writing the same key overwrite each other. Keep a theme, a last-used id, or a draft there. Keep anything that matters on a server that can say no.',
        bn: 'এটি synchronous, ৫ MB, ইনকগনিটো ট্যাবে হারাতে পারে, আর দুটি ট্যাব একই চাবিতে লিখলে একে অপরকে মুছে দেয়। থাকুক থিম, শেষে দেখা id বা খসড়া। যার দাম আছে সেটি এমন জায়গায় যেটি না বলতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lt-ex1', kind: 'mcq', topic: 'javascript: The long tail',
      question: { en: 'A server answers 404 with an HTML page. What does `await fetch(u).then(r => r.json())` do?', bn: 'সার্ভার 404 স্ট্যাটাস কোডের সঙ্গে HTML page পাঠায়। `await fetch(u).then(r => r.json())` কী করবে?' },
      options: [
        { en: 'rejects in json(), because the body is not JSON', bn: 'json()-এ বাতিল হবে, কারণ body JSON নয়' },
        { en: 'resolves with the HTML string', bn: 'HTML string-টিই ফেরত দেবে' },
        { en: 'resolves with null', bn: 'null ফেরত দেবে' },
        { en: 'throws on the fetch itself', bn: 'fetch-এই throw করবে' }
      ],
      answer: 0,
      hint: { en: 'Status is not checked by fetch; parsing is what fails.', bn: 'status fetch দেখে না; ব্যর্থ হয় parse-টি।' },
      explanation: {
        en: 'fetch accepts any HTTP answer, so the failure arrives when the text is parsed. That is why the pattern reads `res.ok` and then parses text inside its own try block, naming the URL in the error.',
        bn: 'fetch যেকোনো HTTP উত্তর মেনে নেয়, তাই ভুল আসে text parse করার সময়। এজন্যই নিয়ম `res.ok` পড়া, তারপর আলাদা try-তে parse করা, আর error-এ URL-এর নাম বসা।'
      }
    },
    {
      id: 'lt-ex2', kind: 'predict', topic: 'javascript: The long tail',
      question: { en: 'What is printed? Give the exact value.', bn: 'কী ছাপা হয়? হুবহু মানটি দিন।' },
      code: `const { a, b = 2, c = b + 1 } = { a: 1, b: 5 };\nconsole.log(a + b + c);`,
      answer: '13',
      accept: ['13', '১৩'],
      hint: { en: 'A default is skipped when the field is present.', bn: 'field থাকলে তার default বাদ পড়ে।' },
      explanation: {
        en: 'a is 1, b is 5 because the value wins over the default, and c is b + 1 = 6. Total 13 — reading it as 1+2+3 is the trap.',
        bn: 'a = ১, b = ৫ কারণ মানটি default-কে হারায়, আর c = b + ১ = ৬। যোগ ১৩ — ১+২+৩ ভাবটাই ফাঁদ।'
      }
    },
    {
      id: 'lt-ex3', kind: 'fill', topic: 'javascript: The long tail',
      question: { en: 'Which guard reads “use this stored list, or an empty one” when localStorage has no key yet? Write the small operator form.', bn: 'localStorage-এ চাবি না-থাকলে “জমার তালিকা নাও, না-থাকলে খালিটি” — কোন ছোট অপারেটরসহ লেখাটি?' },
      answer: "JSON.parse(localStorage.getItem('list') ?? '[]')",
      accept: ["JSON.parse(localStorage.getItem('list') ?? '[]')", 'JSON.parse(localStorage.getItem(k) ?? "[]")', "localStorage.getItem('list') ?? '[]'"],
      hint: { en: 'Two question marks and a colon would be the ternary; you want the nullish pair.', bn: 'দুটি প্রশ্নচিহ্ন আর কলন হতো ternary; এখানে চাই nullish জোড়া।' },
      explanation: {
        en: 'getItem returns null for a missing key, and `??` replaces exactly null and undefined — unlike `||`, which would also replace an empty string you stored on purpose.',
        bn: 'চাবি না-থাকলে getItem null দেয়, আর `??` ঠিক null ও undefined বদলায় — `||`-এর মতো নয়, সেটি ইচ্ছা করে রাখা খালি string-ও বদলে দিত।'
      }
    },
    {
      id: 'lt-ex4', kind: 'mcq', topic: 'javascript: The long tail',
      question: { en: 'You need a million floats for audio, sharing one block of memory with a byte view. Which pair?', bn: 'audio-র জন্য ১০ লক্ষ float দরকার, একই memory-র এক byte view সহ। কোন জোড়া?' },
      options: [
        { en: 'new Float32Array(1e6) and new Uint8Array(1e6)', bn: 'new Float32Array(1e6) আর new Uint8Array(1e6)' },
        { en: 'one ArrayBuffer, then Float32Array and Uint8Array over it', bn: 'একটি ArrayBuffer, তার ওপর Float32Array আর Uint8Array' },
        { en: 'Array(1e6).fill(0) and a slice', bn: 'Array(1e6).fill(0) আর একটি slice' },
        { en: 'two plain arrays of numbers', bn: 'সংখ্যার দুটি সাধারণ array' }
      ],
      answer: 1,
      hint: { en: 'The views are cheap; the buffer is the memory.', bn: 'view সস্তা; memory হলো buffer-টি।' },
      explanation: {
        en: 'The buffer holds 4,000,000 bytes and both views describe the same bytes, so a float write is visible in the byte view. The first option makes two separate 4 MB and 1 MB blocks.',
        bn: 'buffer-এ ৪০,০০,০০০ byte থাকে, দুটি view-ই সেই একই byte বর্ণনা করে — তাই float লিখলে byte view-এ দেখা যায়। প্রথম অপশনে ৪ MB আর ১ MB আলাদা দুই টুকরো হয়।'
      }
    },
    {
      id: 'lt-ex5', kind: 'predict', topic: 'javascript: The long tail',
      question: { en: 'The first log prints v90. What does the second one print?', bn: 'প্রথম log v90 ছাপে। দ্বিতীয়টি কী ছাপবে?' },
      code: `console.log('v1x20'.replace(/1.2/, '9'));     // v90
console.log('v1x20'.replace(/1\\.2/, '9'));    // ?`,
      answer: 'v1x20',
      accept: ['v1x20', 'v1x20 unchanged', 'unchanged'],
      hint: { en: 'An escaped dot demands a real full stop, and there is none in that string.', bn: 'escape করা dot সত্যিকারের full stop দাবি করে, আর স্ট্রিং-টিতে সেটি নেই।' },
      explanation: { en: 'The first pattern reads 1, any single character, then 2, and finds that inside v1x20, leaving v90. The escaped form matches nothing, so replace hands the string back untouched.', bn: 'প্রথম প্যাটার্ন পড়ে 1, যেকোনো এক অক্ষর, তারপর 2—সেটি v1x20-তে খুঁজে পায়, ফল v90। escape করা রূপ কিছুই মেলায় না, তাই replace স্ট্রিং-টি হুবহু ফিরিয়ে দেয়।' }
    },
  ],
  quiz: {
    id: 'js-the-long-tail-quiz',
    title: { en: 'Quiz — the long tail', bn: 'কুইজ — বাকি অংশ' },
    questions: [
      {
        id: 'ltq1', kind: 'mcq', topic: 'javascript: The long tail',
        question: { en: 'What happens to `undefined` and a method when you stringify an object?', bn: 'object stringify করলে `undefined` আর একটি method-এর কী হয়?' },
        options: [{ en: 'both are dropped, with no error', bn: 'দুটোই বাদ পড়ে, কোনো error ছাড়া' }, { en: 'both become null', bn: 'দুটোই null হয়' }, { en: 'a SyntaxError is thrown', bn: 'SyntaxError ওঠে' }, { en: 'they become the string undefined', bn: 'undefined লেখা হয়ে যায়' }],
        answer: 0, hint: { en: 'JSON has six value kinds.', bn: 'JSON-এ মানের ছয়টি রকম।' },
        explanation: { en: 'The key disappears entirely — which is why a field you thought you sent was never sent. Dates survive only as the string Date.toJSON produced.', bn: 'চাবিটাই উঠে যায় — তাই যে field পাঠানো হয়েছে ভেবেছিলেন, সেটি যায়নি। Date টিকে থাকে কেবল Date.toJSON-এর string হিসেবে।' }
      },
      {
        id: 'ltq2', kind: 'mcq', topic: 'javascript: The long tail',
        question: { en: 'Why can `getUTCDate()` and `getDate()` answer a day apart?', bn: '`getUTCDate()` আর `getDate()` কেন এক দিন তফাতে উত্তর দিতে পারে?' },
        options: [{ en: 'the second reads the machine’s zone, which can be ahead of UTC', bn: 'দ্বিতীয়টি মেশিনের zone পড়ে, যা UTC-এর এগিয়ে হতে পারে' }, { en: 'getUTCDate is broken', bn: 'getUTCDate ভুল' }, { en: 'dates round to the hour', bn: 'তারিখ ঘণ্টায় গোল হয়' }, { en: 'one mutates the Date', bn: 'একটি Date বদলে দেয়' }],
        answer: 0, hint: { en: 'One is a display choice, not a stored value.', bn: 'একটি দেখানোর বাছাই, জমা মান নয়।' },
        explanation: { en: 'A Date stores one instant. The UTC getter ignores the zone; the local one uses it, so 23:30 UTC on the 1st is the 2nd at 02:30 in Dhaka.', bn: 'Date-এ থাকে একটিই মুহূর্ত। UTC getter zone উপেক্ষা করে, local ব্যবহার করে — তাই ১ তারিখ ২৩:৩০ UTC ঢাকায় ২ তারিখ ০২:৩০।' }
      },
      {
        id: 'ltq3', kind: 'mcq', topic: 'javascript: The long tail',
        question: { en: 'A Map takes keys an object cannot. Which one shows that?', bn: 'Map এমন key নেয় যা object নিতে পারে না। কোনটি সেটি দেখায়?' },
        options: [{ en: 'a NaN key, read back with get(NaN)', bn: 'NaN key, get(NaN) দিয়ে পড়া' }, { en: 'a string key of length 3', bn: 'তিন অক্ষরের string key' }, { en: 'a numeric key 0', bn: '০ সংখ্যক numeric key' }, { en: 'a key set twice', bn: 'দুবার বসানো key' }],
        answer: 0, hint: { en: 'Object keys become strings; NaN has no matching name.', bn: 'object-এর key string হয়ে যায়; NaN-এর মিলিয়ে নাম নেই।' },
        explanation: { en: 'Map compares with SameValueZero, so NaN is a usable key and an object stays itself. A plain object would turn the key into a string called NaN.', bn: 'Map তুলনা করে SameValueZero দিয়ে, তাই NaN চলার মতো key আর একটি object নিজেকেই থাকে। সাধারণ object হলে key-টি NaN নামে বদলে যেত।' }
      },
      {
        id: 'ltq4', kind: 'mcq', topic: 'javascript: The long tail',
        question: { en: 'What is the risk of the plus operator on two values from form inputs?', bn: 'form-এর দুটি মানের ওপর + অপারেটরের ঝুঁকি কী?' },
        options: [{ en: 'it joins them as text', bn: 'দুটিকে text হিসেমে জুড়ে দেয়' }, { en: 'it returns NaN always', bn: 'সবসময় NaN দেয়' }, { en: 'it throws a TypeError', bn: 'TypeError তোলে' }, { en: 'it converts both to numbers', bn: 'দুটিকেই number বানায়' }],
        answer: 0, hint: { en: 'If either side is a string, plus is not arithmetic.', bn: 'একপক্ষ string হলে + অঙ্ক নয়।' },
        explanation: { en: 'Inputs are strings, so 12 + 3 becomes 123, and a total looks plausible until someone checks it. Number() on both sides, then add.', bn: 'input string, তাই ১২ + ৩ হয়ে ১২৩, আর যোগফল যতক্ষণ কেও না মিলিয়ে দেখে ততক্ষণ ঠিক মনে হয়। দুপক্ষই Number() করে তারপর যোগ করুন।' }
      }
    ]
  }
};
