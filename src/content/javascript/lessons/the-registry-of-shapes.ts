import type { Lesson } from '../../../lib/types';

/**
 * Rewritten 2026-09-26 from the old "Registry Of Shapes" page, which repeated one metaphor for 571
 * lines and taught nothing. This version teaches the actual lookup walk, with the numbers a learner
 * can check in a console, and it carries the w3schools pages that hub was missing: function
 * expressions and definitions, call/apply/bind, for...in versus for...of, Object.keys/values/entries,
 * defineProperty getters, freeze/seal, WeakMap, and object versus primitive types.
 */
export const registryOfShapesLesson: Lesson = {
  slug: 'js-objects-prototypes',
  tech: 'javascript',
  title: {
    en: 'Objects and the prototype chain: how a name is found',
    bn: 'অবজেক্ট আর prototype chain: নামটা কোথায় পাওয়া যায়'
  },
  summary: {
    en: 'A record stores values under names. Asking for a name it does not have does not fail — the engine walks one more record, then one more, until the chain ends. That walk explains methods on arrays, `this`, class syntax, and why 10,000 objects can share one function.',
    bn: 'একটি record মান রাখে নামের নিচে। না-থাকা নাম চাইলে ভুল হয় না — engine আরেকটি record দেখে, তারপর আরেকটি, চেইন শেষ হওয়া পর্যন্ত। এই হাঁটাই বোঝায় array-এর method, `this`, class-এর ভাষা, আর ১০,০০০ অবজেক্ট কীভাবে একটিই function শেয়ার করে।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'js-dom-events',
    tech: 'javascript',
    title: {
      en: 'DOM and events: how a click reaches your function',
      bn: 'DOM আর event: ক্লিক আপনার function পর্যন্ত কীভাবে পৌঁছায়'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — names, not positions', bn: 'কী — অবস্থান নয়, নাম' }
    },
    {
      type: 'para',
      text: {
        en: 'Declare one record: `const user = { name: "Ada", age: 36 }`. Two names, two values, and no order to remember. An array asks for position 0; a record asks for `name`. That difference is the whole reason this data shape exists, and the rest of the page is about what happens when the name you ask for is not inside.',
        bn: 'একটি record লিখুন: `const user = { name: "Ada", age: 36 }`। দুটি নাম, দুটি মান, কোনো ক্রম মনে রাখার দরকার নেই। array চায় ০ নম্বর অবস্থান; record চায় `name`। এই তফাতটাই এই গঠনের পুরো কারণ, আর চাওয়া নামটি ভেতরে না-থাকলে কী ঘটে — সেটাই বাকি পাঠ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The prototype is the second record a lookup falls back to. Every object is created with one attached, and that one has its own, so the fallbacks form a line that ends in `null`. Reading `user.name` walks that line; writing to the same name does not.',
        bn: 'prototype হলো দ্বিতীয় record, যেখানে খুঁজতে না-পেলে engine ফিরে যায়। প্রতিটি অবজেক্ট একটি বেঁধে রেখে জন্মায়, তারও আরেকটি থাকে — তাই ফিরে দেখার এই লাইন `null`-এ গিয়ে থামে। `user.name` পড়ার সময় সেই লাইন ধরা হয়; একই নামে লিখলে কিন্তু ওই পথ ধরা হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'lookup.js',
      code: `const proto = { kind: 'human', greet() { return \`Hi, \${this.name}\`; } };
const user = Object.create(proto);
user.name = 'Ada';

user.greet();                 // 'Hi, Ada' — greet is not on user at all
user.kind;                    // 'human'  — found one step away
Object.keys(user);            // ['name'] — own names only, no fallbacks
'name' in user;               // true
'greet' in user;              // true  — in looks along the line
Object.hasOwn(user, 'greet'); // false — own property only, since ES2022`,
      caption: {
        en: 'Two of the four lookups leave the object and still find an answer. `Object.keys` and `Object.hasOwn` refuse to leave, which is why both pairs disagree.',
        bn: 'চারটি খোঁজার দুটি অবজেক্ট ছেড়েও উত্তর পায়। `Object.keys` আর `Object.hasOwn` বাইরে যায় না — তাই দুই জোড়ার ফল আলাদা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'own property',
          def: { en: 'A name stored directly on this one value, found by Object.keys and hasOwn.', bn: 'যে নাম সরাসরি এই মানটির ওপরই লেখা — Object.keys আর hasOwn ওটাই পায়।' }
        },
        {
          term: 'prototype',
          def: { en: 'The record a lookup falls back to when a name is missing, attached at creation time.', bn: 'নাম না-পেলে engine যে record-এ ফিরে যায়, তৈরির সময় যেটি বেঁধে দেওয়া হয়।' }
        },
        {
          term: 'prototype chain',
          def: { en: 'The line of fallback records, ending at null, that every read walks until it hits an answer.', bn: 'ফিরে দেখার record-গুলোর লাইন, শেষে null, যেটিতে একটি উত্তর না-মেলা পর্যন্ত প্রতিটি পড়া হাঁটে।' }
        },
        {
          term: 'shadowing',
          def: { en: 'Storing a name on the object itself so the fallback version is never reached again.', bn: 'নামটি নিজের ওপরই রেখে দেওয়া, যাতে নিচের সংস্করণ আর কখনো পড়াই না হয়।' }
        },
        {
          term: 'this',
          def: { en: 'The value written before the dot at call time, not the one that defined the function.', bn: 'কল করার সময় বিন্দুর আগে যে লেখা ছিল সেটি, যেটি function তৈরি করেছে সেটি নয়।' }
        },
        {
          term: 'constructor',
          def: { en: 'A function called with new: it receives an empty value as this and fills in the fields.', bn: 'new দিয়ে ডাকা function: খালি মান this হিসেবে পায়, তারপর field বসায়।' }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY it matters', bn: 'কেন দরকার' }
    },
    {
      type: 'list',
      items: [
        { en: 'Array methods are not copied into every array. One array of 1,000 items still shares the same `map` function your first array used.', bn: 'array-এর method প্রতিটি array-তে নকল হয় না। ১,০০০ আইটেমের array-ও প্রথমটির `map` function-ই শেয়ার করে।' },
        { en: 'Class syntax is that fallback with nicer typing. `class` stores methods on a shared object, exactly as `Object.create` does.', bn: 'class লেখা মানে সেই fallback-এর সুন্দর বানান। `class` method বসায় এক শেয়ার করা অবজেক্টে, ঠিক যেমন `Object.create` করে।' },
        { en: 'Two bugs live here: a method that reads the wrong `this`, and a name written too late that shadows the shared one.', bn: 'এখানে দুটি বাগ বাস করে: ভুল `this` পড়া method, আর দেরিতে লেখা নাম যা শেয়ার করাটির পথ আটকে দেয়।' },
        { en: 'Property order, `for...in`, and JSON output all disagree with each other unless you know which names are own.', bn: 'ক্রম, `for...in` আর JSON-এর ফল — তিনটিই একে অপরকে অস্বীকার করে, না-জানলে কোন নামগুলো নিজের।' }
      ]
    },
    {
      type: 'table',
      head: [
        { en: 'what you write', bn: 'যা লেখেন' },
        { en: 'what runs', bn: 'কী চলে' },
        { en: 'use it when', bn: 'কখন লাগে' }
      ],
      rows: [
        [
          { en: '{ name: "Ada" }', bn: '{ name: "Ada" }' },
          { en: 'creates a value whose fallback is Object.prototype', bn: 'এমন মান বানায় যার fallback হলো Object.prototype' },
          { en: 'plain data, config, one-off groupings', bn: 'সাধারণ data, config, একবারের দলগত লেখা' }
        ],
        [
          { en: 'Object.create(proto)', bn: 'Object.create(proto)' },
          { en: 'creates an empty value with the fallback you chose', bn: 'খালি মান বানায়, fallback আপনিই বেছে নেন' },
          { en: 'shared behaviour without a class keyword', bn: 'class-ছাড়া আচরণ শেয়ার করতে' }
        ],
        [
          { en: 'class User { greet() {} }', bn: 'class User { greet() {} }' },
          { en: 'methods land on User.prototype; new picks that up', bn: 'method বসে User.prototype-এ; new সেটাই বেছে নেয়' },
          { en: 'many instances, inheritance, readable syntax', bn: 'একাধিক instance, inheritance, পড়তে সহজ' }
        ],
        [
          { en: 'Object.defineProperty(o, k, {...})', bn: 'Object.defineProperty(o, k, {...})' },
          { en: 'installs a getter, a setter, or a hidden field', bn: 'getter, setter বা লুকানো field বসায়' },
          { en: 'a computed value that must look like a field', bn: 'হিসাব-করা মান যখন field-এর মতো দেখাতে চায়' }
        ]
      ],
      caption: {
        en: 'Three of these build the same shape: an empty value with a chosen fallback. Only the last one lets a read run your code.',
        bn: 'এর তিনটিই একই গঠন বানায়: বেছে নেওয়া fallback সহ একটি খালি মান। শেষটিতেই পড়ার সময় আপনার কোড চলে।'
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW it runs — one read, five stages', bn: 'কীভাবে চলে — একটি পড়া, পাঁচ ধাপ' }
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. The part before the dot is evaluated', bn: '১. বিন্দুর আগের অংশটি আগে হিসাব হয়' },
          text: { en: '`user.name` starts as an ordinary expression. Whatever it produces becomes the receiver of the read — `undefined.name` throws a TypeError before any lookup happens.', bn: '`user.name`-এর শুরু সাধারণ হিসাব। যা পাওয়া যায় সেটিই পড়ার গন্তব্য — `undefined.name` লিখলে কোনো খোঁজার আগেই TypeError আসে।' }
        },
        {
          title: { en: '2. Own names are checked first', bn: '২. প্রথমে নিজের নামগুলো দেখা হয়' },
          text: { en: 'If the receiver itself holds `name`, the answer is returned and the walk stops here. Roughly a handful of names, so this is the cheap case.', bn: 'গন্তব্যের নিজের কাছে `name` থাকলে উত্তর ফেরত যায়, হাঁটা এখানেই শেষ। কয়েকটি নামের কথা, তাই এটাই সস্তা পথ।' }
        },
        {
          title: { en: '3. Otherwise the fallback is read', bn: '৩. না-পেলে পরের ঠিকানায় যাওয়া' },
          text: { en: 'The engine takes the value stored at the hidden slot, checks its own names, and repeats. Three to five hops is normal; `Array.prototype` sits four hops from `[]`.', bn: 'লুকানো জায়গায় যে মান আছে engine সেটি নেয়, তার নিজের নাম দেখে, বারবার করে। তিন-পাঁচ ধাপ স্বাভাবিক; `[]` থেকে `Array.prototype` চার ধাপ দূরে।' }
        },
        {
          title: { en: '4. `null` ends the line', bn: '৪. `null` এলে লাইন শেষ' },
          text: { en: 'A fallback of null means “nothing above me”. The read gives undefined — not an error, which is why a typo like `usr.nme` fails quietly in production.', bn: 'fallback null মানে “ওপরে আর কেউ নেই”। পড়া undefined দেয় — ভুল নয়, তাই `usr.nme`-এর মতো টাইপো প্রোডাকশনে নীরবে ব্যর্থ হয়।' }
        },
        {
          title: { en: '5. A write skips the walk entirely', bn: '৫. লেখার সময় হাঁটা হয় না' },
          text: { en: '`user.kind = "dev"` creates the name on `user`, even though `kind` already lived one hop away. The old value still exists below — that is shadowing, and `delete user.kind` uncovers it again.', bn: '`user.kind = "dev"` নামটি `user`-এই বানায়, যদিও `kind` এক ধাপ নিচে আগে থেকেই ছিল। পুরোনো মান নিচে থেকে যায় — এটিই shadowing; `delete user.kind` লিখলে আবার বেরিয়ে আসে।' }
        }
      ]
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'counter.js',
      code: `// Two ways to give 10,000 objects a method. Count the functions you make.
function Counter(start) { this.n = start; }
Counter.prototype.inc = function () { return ++this.n; };

function CounterWasteful(start) {
  this.n = start;
  this.inc = function () { return ++this.n; };   // one new function per object
}

const a = [], b = [];
for (let i = 0; i < 10000; i++) a.push(new Counter(0));
for (let i = 0; i < 10000; i++) b.push(new CounterWasteful(0));

a[0].inc === a[9999].inc;   // true  — the same function object, found by walking
b[0].inc === b[9999].inc;   // false — 10,000 separate closures, each over its own n
CounterWasteful.prototype.inc; // undefined — nothing was ever put there`,
      caption: {
        en: 'The first shape stores one function and 10,000 numbers. The second stores 10,000 functions, and each keeps its own scope alive. `class` syntax picks the first shape for you.',
        bn: 'প্রথম গঠনে থাকে একটিই function আর ১০,০০০ সংখ্যা। দ্বিতীয়টিতে ১০,০০০টি আলাদা function, প্রত্যেকের নিজের scope বেঁচে থাকে। `class` লিখলে স্বয়ংক্রিয়ভাবে প্রথমটিই বাছা হয়।'
      }
    },
    {
      type: 'heading',
      id: 'this-and-call',
      text: { en: 'HOW it runs — `this`, call, apply, bind', bn: 'কীভাবে চলে — `this`, call, apply, bind' }
    },
    {
      type: 'para',
      text: {
        en: 'A function written on a shared record has no owner until it is called. `this` is decided at that moment: the value before the dot, or undefined in a bare call when the file is strict. `call`, `apply` and `bind` exist to let you choose it yourself.',
        bn: 'শেয়ার করা record-এ লেখা function-এর কোনো মালিক থাকে না, ডাকার মুহূর্ত পর্যন্ত। `this` ঠিক হয় ওই সময়ে: বিন্দুর আগের মানটি, আর strict ফাইলে সাধারণ ডাকে undefined। নিজে থেকে বেছে নিতেই `call`, `apply` ও `bind`।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'this.js',
      code: `const greet = function (loud) { return \`Hi \${this.name}\${loud ? '!!' : ''}\`; };

greet.call({ name: 'Ada' });              // 'Hi Ada'
greet.apply({ name: 'Grace' }, [true]);   // 'Hi Grace!!' — same, arguments in an array
const bound = greet.bind({ name: 'Hopper' });
bound();                                  // 'Hi Hopper', forever — bind never calls

// The classic break: lose the dot, lose this.
const f = { name: 'Ada', hi() { return this.name; } };
const lost = f.hi;
lost();                                   // undefined — called bare, so this is not f
const saved = f.hi.bind(f);
saved();                                  // 'Ada'`,
      caption: {
        en: 'Arrow functions are the exception: they close over `this` from where they were written, which is why a callback passed to `setTimeout` inside a method still sees the object.',
        bn: 'arrow function ব্যতিক্রম: যেখানে লেখা হয়েছিল সেখানকার `this` নিয়ে বসে থাকে। তাই method-এর ভেতরে `setTimeout`-এ দেওয়া callback-ও অবজেক্টটি দেখতে পায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The read walk: own names, then fallbacks, then null',
        bn: 'পড়ার হাঁটা: নিজের নাম, তারপর fallback, শেষে null'
      },
      svg: `<svg viewBox="0 0 640 232" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="user object, its prototype, Object.prototype, then null"><defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="currentColor"/></marker></defs><rect x="14" y="66" width="150" height="70" rx="10" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="89" y="88" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">user</text><text x="89" y="108" font-size="10" text-anchor="middle" fill="currentColor" opacity=".75">name: 'Ada'</text><text x="89" y="124" font-size="10" text-anchor="middle" fill="currentColor" opacity=".75">kind: 'dev' (shadow)</text><rect x="214" y="66" width="150" height="70" rx="10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><text x="289" y="88" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">proto</text><text x="289" y="108" font-size="10" text-anchor="middle" fill="currentColor" opacity=".75">kind: 'human'</text><text x="289" y="124" font-size="10" text-anchor="middle" fill="currentColor" opacity=".75">greet(){}</text><rect x="414" y="66" width="180" height="70" rx="10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><text x="504" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">Object.prototype</text><text x="504" y="118" font-size="10" text-anchor="middle" fill="currentColor" opacity=".75">toString, hasOwnProperty…</text><path d="M164 100 H206" stroke="currentColor" stroke-width="1.6" marker-end="url(#arr)"/><path d="M364 100 H406" stroke="currentColor" stroke-width="1.6" marker-end="url(#arr)"/><path d="M504 136 V170" stroke="currentColor" stroke-width="1.6" marker-end="url(#arr)"/><text x="504" y="188" font-size="11" text-anchor="middle" fill="currentColor" opacity=".8">null — the walk ends</text><text x="89" y="36" font-size="11" text-anchor="middle" fill="currentColor">read user.kind</text><path d="M89 44 V60" stroke="currentColor" stroke-width="1.4" marker-end="url(#arr)"/><text x="89" y="216" font-size="10" text-anchor="middle" fill="currentColor" opacity=".7">found at hop 1 · read user.greet → hop 2 · read user.zz → null → undefined</text></svg>`,
      caption: {
        en: 'Dashed boxes are not stored on the reader — they are what the reader falls back to. `kind` written on `user` hides the one below it.',
        bn: 'ফাঁকা বাক্সগুলো পড়ার নিজের কাছে নেই — পড়ার ফিরে দেখার ঠিকানা। `user`-এ লেখা `kind` নিচেরটিকে ঢেকে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'practical',
      text: { en: 'WHAT ELSE LIVES ON THIS CHAIN', bn: 'এই চেইনে আর কী আছে' }
    },
    {
      type: 'list',
      items: [
        { en: 'Primitives have a temporary wrapper: `ada.length` boxes the string for one read, so 3 comes back and `typeof ada` still says string.', bn: 'primitive-এর জন্য ক্ষণিকের মোড়ক: `ada.length` পড়ার সময় string-টি বেঁধে ফেলা হয়, তাই ৩ আসে, আর `typeof ada` তবু string-ই বলে।' },
        { en: '`for...in` walks the whole line, so it prints inherited names too; `Object.keys` returns own names in insertion order, and `for...of` asks the value for an iterator instead.', bn: '`for...in` পুরো লাইন ধরে হাঁটে, তাই উত্তরাধিকারের নামও ছাপে; `Object.keys` নিজের নাম ক্রমে দেয়, আর `for...of` মানের কাছে iterator চায়।' },
        { en: 'Getters and setters hide arithmetic behind a field, which is how `full` can answer while only `first` and `last` are stored.', bn: 'getter/setter হিসাবকে field-এর আড়ালে রাখে — তাই শুধু `first` ও `last` রাখলেও `full` উত্তর দিতে পারে।' },
        { en: '`Object.freeze` stops writes on that one value; `Object.seal` stops new names; neither protects the fallback above.', bn: '`Object.freeze` সেই মানটিতে লেখা বন্ধ করে; `Object.seal` নতুন নাম বন্ধ করে; কোনোটিই ওপরের fallback-কে ধরে রাখে না।' },
        { en: 'A WeakMap keys by identity and does not keep the key alive — the usual place to hide private state behind an object.', bn: 'WeakMap চেনে পরিচয় দিয়ে, আর key-কে বেঁধে রাখে না — অবজেক্টের আড়ালে গোপন অবস্থা রাখার জায়গা।' }
      ]
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'id-and-order.js',
      code: `const ada = { first: 'Ada', last: 'Lovelace' };
Object.defineProperty(ada, 'full', { get() { return \`\${this.first} \${this.last}\`; }, enumerable: false });

ada.full;                  // 'Ada Lovelace' — computed, never stored
Object.keys(ada);          // ['first', 'last'] — enumerable: false kept it out
for (const k in ada) console.log(k);   // first, last — and any inherited enumerable name too

const seen = new WeakMap();
seen.set(ada, { visits: 1 });
seen.get(ada).visits;      // 1 — attached to this exact record, gone with it

const frozen = Object.freeze({ a: 1 });
frozen.a = 2;              // ignored (throws in strict mode)
frozen.b = 3;              // also ignored`,
      caption: {
        en: 'Three tools that look alike and do different jobs: `enumerable` decides whether a name is listed, a getter decides what a read computes, and a WeakMap decides who can reach the private side.',
        bn: 'তিনটি হাতিয়ার দেখতে একরকম, কাজ আলাদা: `enumerable` ঠিক করে নামটি তালিকায় উঠবে কি না, getter ঠিক করে পড়লে কী হিসাব হবে, আর WeakMap ঠিক করে গোপন অংশে কারা পৌঁছাবে।'
      }
    },
    {
      type: 'visual',
      id: 'event-loop'
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'A read walks the chain, a write never does. When behaviour looks wrong, ask which names are own: `Object.keys(obj).length` and `Object.hasOwn(obj, "name")` answer in one line each.',
        bn: 'পড়া চেইন ধরে হাঁটে, লেখা হাঁটে না। আচরণ ভুল মনে হলে জিজ্ঞেস করুন কোন নামগুলো নিজের: `Object.keys(obj).length` আর `Object.hasOwn(obj, "name")` — প্রতিটি এক লাইনের উত্তর।'
      }
    },
    {
      type: 'heading',
      id: 'misstep',
      text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Adding a method inside the constructor', bn: 'constructor-এর ভেতরে method লেখা' },
      text: {
        en: '10,000 instances built with `this.inc = function () {...}` create 10,000 function objects and 10,000 captured scopes, and `a.inc === b.inc` is false. Put the method on the shared record instead — one function, found by the walk, and equality restored. `class` does this already; that is most of why it exists.',
        bn: '`this.inc = function () {...}` দিয়ে ১০,০০০ instance বানালে ১০,০০০টি function অবজেক্ট আর ১০,০০০টি আটকে-থাকা scope তৈরি হয়, আর `a.inc === b.inc` মিথ্যা হয়। method শেয়ার করা record-এ বসান — একটিই function, হাঁটাই খুঁজে বের করে, সমান-চিহ্নও ফিরে আসে। `class` এটি আগে থেকেই করে; এর Existence-এর বড় অংশই সেটা।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-ro-ex1',
      kind: 'mcq',
      topic: 'javascript: Objects and the prototype chain',
      question: {
        en: 'An object has no name `zz`, and its fallback has no `zz` either, but the fallback of that fallback holds `toString`. What does `obj.zz` give?',
        bn: 'একটি অবজেক্টে `zz` নাম নেই, তার fallback-এও নেই, তবে তার-o-আগেরটিতে `toString` আছে। `obj.zz` কী দেবে?'
      },
      options: [
        { en: 'a function', bn: 'একটি function' },
        { en: 'undefined — the walk ended without `zz`', bn: 'undefined — `zz` ছাড়াই হাঁটা শেষ' },
        { en: 'a TypeError, the name is missing', bn: 'TypeError, নামটি নেই' },
        { en: 'null, because the chain ended', bn: 'null, চেইন শেষ বলে' }
      ],
      answer: 1,
      hint: { en: 'The walk looks for the one name you asked for, not anything nearby.', bn: 'হাঁটা খোঁজে কেবল যে নাম চেয়েছিলেন সেটি, পাশেরটি নয়।' },
      explanation: {
        en: 'Finding `toString` does not help a read of `zz`. The engine climbs until a fallback is null and returns undefined; the neighbour being present only proves the walk ran to the top.',
        bn: '`zz` পড়তে `toString` পেয়ে লাভ নেই। engine fallback null না-হওয়া পর্যন্ত ওঠে আর undefined ফেরত দেয়; পাশের নামটি থাকা প্রমাণ করে হাঁটা শেষ পর্যন্ত গেছে, আর কিছু নয়।'
      }
    },
    {
      id: 'js-ro-ex2',
      kind: 'predict',
      topic: 'javascript: Objects and the prototype chain',
      question: {
        en: 'What does the last line print? Type the value exactly.',
        bn: 'শেষ লাইনটি কী ছাপে? হুবহু মানটি লিখুন।'
      },
      code: `const base = { count: 1 };
const child = Object.create(base);
child.count = child.count + 10;
Object.keys(base); // ?`,
      hint: { en: 'Read the second line: who was written to?', bn: 'দ্বিতীয় লাইনটি পড়ুন: কার ওপর লেখা হলো?' },
      answer: "['count']",
      accept: ["['count']", '[ count ]', "['count',]", 'count'],
      explanation: {
        en: 'The write landed on `child`, creating an own `count` of 11 there. `base` still holds its one own name, so its keys are `["count"]` with the original 1 inside.',
        bn: 'লেখা `child`-এ বসল, সেখানে নিজের `count` ১১ হিসেবে তৈরি হলো। `base`-এর নিজের কাছে একটিই নাম ছিল, তাই চাবি `["count"]`, ভেতরে আগের ১।'
      }
    },
    {
      id: 'js-ro-ex3',
      kind: 'mcq',
      topic: 'javascript: Objects and the prototype chain',
      question: {
        en: 'You build 10,000 objects and want one shared method each. Which shape costs one function in total?',
        bn: '১০,০০০ অবজেক্ট বানাচ্ছেন, প্রতিটির জন্য একটি করে শেয়ার করা method চান। কোন গঠনে মোট একটিই function খরচ?'
      },
      options: [
        { en: 'assign it inside the constructor with this.method = function () {}', bn: 'constructor-এর ভেতরে this.method = function () {} দিয়ে বসানো' },
        { en: 'assign it to the constructor’s prototype, or write it in a class body', bn: 'constructor-এর prototype-এ বসানো, বা class-এর ভেতরে লেখা' },
        { en: 'put it in an array and hand each object an index', bn: 'array-এ রেখে প্রতিটি অবজেক্টকে নম্বর দেওয়া' },
        { en: 'define it with an arrow function in a closure per object', bn: 'প্রতিটি অবজেক্টের জন্য closure-এ arrow function লেখা' }
      ],
      answer: 1,
      hint: { en: 'Two of these make one function per object; the shared record makes one.', bn: 'দুটিতে প্রতি অবজেক্টে একটি করে function বাড়ে; শেয়ার করা record-এ একটিই।' },
      explanation: {
        en: 'The prototype holds one function and every read of the name walks up to it, so 10,000 objects share it and `a.m === b.m` is true. A constructor body runs once per object, so anything assigned there is copied 10,000 times.',
        bn: 'prototype-এ একটিই function থাকে, নাম পড়তে প্রত্যেকে ওপরে উঠে সেটি পায় — তাই ১০,০০০ অবজেক্টেও শেয়ার, আর `a.m === b.m` সত্যি। constructor-এর ভেতর প্রতি অবজেক্টে চলে, তাই সেখানে যা লেখেন তাই ১০,০০০ বার নকল হয়।'
      }
    },
    {
      id: 'js-ro-ex4',
      kind: 'fill',
      topic: 'javascript: Objects and the prototype chain',
      question: {
        en: 'Which single method answers “is this name stored on this object itself, not above it” for the object user and the name greet? Write the whole call.',
        bn: '“নামটি কি এই অবজেক্টেই লেখা, ওপরে নয়” — user অবজেক্ট আর greet নামের জন্য কোন একটি পদ্ধতি উত্তর দেয়? পুরো ডাকটি লিখুন।'
      },
      answer: 'Object.hasOwn(user, "greet")',
      accept: ['Object.hasOwn(user, "greet")', "Object.hasOwn(user, 'greet')", 'user.hasOwnProperty("greet")', "user.hasOwnProperty('greet')"],
      hint: { en: 'One argument pair: the object, then the name as a string.', bn: 'দুটি অংশ: অবজেক্ট, তারপর নামটি string হিসেবে।' },
      explanation: {
        en: 'Object.hasOwn(user, "greet") is the modern form; hasOwnProperty on the value is the old one and can be shadowed by a data field actually named hasOwnProperty.',
        bn: 'Object.hasOwn(user, "greet") নতুন রূপ; মানের ওপর hasOwnProperty পুরোনো, আর hasOwnProperty নামের একটি field থাকলে সেটি ঢেকে দিতে পারে।',
      }
    }
  ],
  quiz: {
    id: 'js-objects-prototypes-quiz',
    title: { en: 'Quiz — Objects and the prototype chain', bn: 'কুইজ — অবজেক্ট আর prototype chain' },
    questions: [
      {
        id: 'roq1',
        kind: 'mcq',
        topic: 'javascript: Objects and the prototype chain',
        question: { en: 'Where does a property lookup go after the object itself fails?', bn: 'নিজের অবজেক্টে না-পেলে খোঁজা কোথায় যায়?' },
        options: [
          { en: 'to its prototype, and on up the line', bn: 'তার prototype-এ, তারপর ওপরের দিকে' },
          { en: 'to the global object always', bn: 'সবসময় global অবজেক্টে' },
          { en: 'nowhere — the read fails', bn: 'কোথাও নয় — পড়া ব্যর্থ' },
          { en: 'to the last object created', bn: 'সবশেষে তৈরি অবজেক্টে' }
        ],
        answer: 0,
        hint: {
          en: 'It delegates upwards along the prototype chain.',
          bn: 'এটি প্রোটোটাইপ চেইন বেয়ে ওপরের দিকে খোঁজ করে।'
        },
        explanation: { en: 'One hop at a time, through each record’s own names, until a fallback is null.', bn: 'এক ধাপ করে, প্রতিটির নিজের নাম দেখতে দেখতে, fallback null না-হওয়া পর্যন্ত।' }
      },
      {
        id: 'roq2',
        kind: 'mcq',
        topic: 'javascript: Objects and the prototype chain',
        question: { en: 'What is true right after `user.kind = "dev"`, when `kind` already lived on the prototype?', bn: '`user.kind = "dev"`-এর ঠিক পরে কী সত্যি, যদি `kind` আগে prototype-এ থাকত?' },
        options: [
          { en: 'the prototype’s value changed for everyone', bn: 'সবার জন্য prototype-এর মান বদলে গেছে' },
          { en: 'user now has an own kind of "dev"', bn: 'user-এর নিজের এখন kind "dev"' },
          { en: 'the assignment is ignored', bn: 'লেখাটি উপেক্ষিত হয়েছে' },
          { en: 'a TypeError is thrown', bn: 'TypeError উঠেছে' }
        ],
        answer: 1,
        hint: {
          en: 'Assignment creates an own property on the receiver.',
          bn: 'অ্যাসাইনমেন্ট অবজেক্টের নিজের ভেতর ওন প্রোপার্টি বানায়।'
        },
        explanation: { en: 'Writes do not walk. The name is created on the receiver, shadowing the one below it.', bn: 'লেখা হাঁটে না। নাম গন্তব্যেই তৈরি হয়, নিচেরটি ঢাকা পড়ে।' }
      },
      {
        id: 'roq3',
        kind: 'mcq',
        topic: 'javascript: Objects and the prototype chain',
        question: { en: 'Why does `lost = obj.hi; lost()` print undefined for `this`?', bn: '`lost = obj.hi; lost()`-এ `this`-এর জায়গায় undefined ছাপে — কেন?' },
        options: [
          { en: 'because hi was defined with an arrow', bn: 'hi arrow দিয়ে লেখা বলে' },
          { en: 'because the dot is gone at call time', bn: 'ডাকার মুহূর্তে বিন্দু নেই বলে' },
          { en: 'because hi is on the prototype', bn: 'hi prototype-এ আছে বলে' },
          { en: 'because obj was frozen', bn: 'obj freeze করা আছে বলে' }
        ],
        answer: 1,
        hint: {
          en: 'Invoking a detached reference loses the original receiver context.',
          bn: 'বিন্দু ছাড়া কল করলে আসল রিসিভার কনটেক্সট হারিয়ে যায়।'
        },
        explanation: { en: 'this comes from the receiver at call time. A bare call has no receiver, so it is undefined in strict code; bind(obj) pins it.', bn: 'this আসে ডাকার সময় গন্তব্য থেকে। খালি ডাকে গন্তব্য নেই, তাই strict কোডে undefined; bind(obj) সেটি আঁটে দেয়।' }
      },
      {
        id: 'roq4',
        kind: 'mcq',
        topic: 'javascript: Objects and the prototype chain',
        question: { en: 'Which list contains inherited names as well as own ones?', bn: 'কোন তালিকায় উত্তরাধিকারের নামও থাকে, নিজের নামও?' },
        options: [
          { en: 'Object.keys(obj)', bn: 'Object.keys(obj)' },
          { en: 'for...in over obj', bn: 'obj-এর ওপর for...in' },
          { en: 'Object.values(obj)', bn: 'Object.values(obj)' },
          { en: 'Object.entries(obj)', bn: 'Object.entries(obj)' }
        ],
        answer: 1,
        hint: {
          en: 'One loop statement traverses inherited enumerable properties.',
          bn: 'একটি লুপ স্টেটমেন্ট উত্তরাধিকার সূত্রে পাওয়া প্রোপার্টিতেও ঘুরে।'
        },
        explanation: { en: 'The other three list own enumerable names only; for...in climbs the chain, which is why it is usually wrapped in a hasOwn check.', bn: 'বাকি তিনটি শুধু নিজের enumerable নাম গোনে; for...in চেইন বেয়ে ওঠে, তাই সাধারণত hasOwn দিয়ে আড় করা হয়।' }
      },
      {
        id: 'roq5',
        kind: 'mcq',
        topic: 'javascript: Objects and the prototype chain',
        question: { en: 'You need private per-object state that disappears with the object and is not enumerable. What fits?', bn: 'প্রতি অবজেক্টের গোপন অবস্থা চান যা অবজেক্টের সঙ্গে হারিয়ে যায় আর তালিকায়ও ধরা পড়ে না — কী বসবে?' },
        options: [
          { en: 'a WeakMap keyed by the object', bn: 'অবজেক্ট দিয়ে key করা WeakMap' },
          { en: 'an underscore-prefixed field', bn: 'নিচে-চিহ্ন দেওয়া field' },
          { en: 'a non-enumerable property on the prototype', bn: 'prototype-এ অ- enumerable property' },
          { en: 'a frozen object', bn: 'freeze করা অবজেক্ট' }
        ],
        answer: 0,
        hint: {
          en: 'Garbage-collection-friendly weak referencing.',
          bn: 'মেমোরি ফাঁকা করতে সক্ষম উইক রেফারেন্সিং।'
        },
        explanation: { en: 'WeakMap holds its value only while the key is alive, so nothing leaks after the object is gone; a prefix is a convention, not a wall.', bn: 'WeakMap key বেঁচে থাকলেই মান রাখে, অবজেক্ট গেলে কিছু বাকি থাকে না; উপসর্গ তো কেবল রীতি, দেয়াল নয়।' }
      }
    ]
  }
};
