// splice-dsa.mjs — give the six data-structure lessons something that runs.
// Every number in an inserted block is stdout of the file printed above it, produced by mkcode.mjs.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const JOB = [
  {
    hub: 'stacks', slug: 'lifo-thinking', out: 'tools/audit/tmp/out-lifo.ts',
    lead: {
      en: 'Two programs you can run in a terminal. They are the whole idea of last-in-first-out, with the numbers a learner should be able to predict before pressing return.',
      bn: 'টার্মিনালে চালানো যায় এমন দুটি প্রোগ্রাম। এটাই last-in-first-out-এর পুরো ধারণা, আর যে সংখ্যাগুলো একটি শিক্ষার্থী Enter চাপার আগে ভবিষ্যৎ বলে জানতে চাইবে।'
    },
    captions: [
      { en: 'Two backs then null: the cursor cannot walk off the front. Visiting a new page after that erased c.html for good, so the list shrank to three.', bn: 'দুবার পেছনে গিয়ে তৃতীয়বার null: কার্সর সামনের দিক থেকে পড়ে যায় না। এর পর নতুন ঠিকানা দিলে c.html চিরতরে মুছে যায়, তাই তালিকা 3-এ নেমে আসে।' },
      { en: 'The fault is reported at index 9, but the mistake was made at index 7. A stack is what turns a wrong bracket into a sentence about what was still open.', bn: 'ভুলের খবর 9 নম্বর জায়গায়, কিন্তু ভুল হয়েছিল 7-এ। বন্ধনীর ভুলকে “কী এখনো খোলা ছিল”-এর বাক্যে বদলে দেয় স্ট্যাকটি।' }
    ]
  },
  {
    hub: 'stacks', slug: 'stack-machines', out: 'tools/audit/tmp/out-stackmachines.ts',
    lead: {
      en: 'A machine that remembers where it was. Count its frames, then count the calls a second machine needs for the same number.',
      bn: 'যে যন্ত্র মনে রাখে কোথা থেকে এসেছিল। প্রথমে তার ফ্রেম গুনুন, তারপর দেখুন দ্বিতীয় যন্ত্রটি একই উত্তরে কত কল কমায়।'
    },
    captions: [
      { en: 'Ten live calls, ten frames, none left behind. The promise of recursion is only that the stack unwinds exactly as deep as it went.', bn: 'দশটি চলমান কল, দশটি ফ্রেম, একটাও বাকি নেই। recursion-এর প্রতিশ্রুটুকুই এই যে স্ট্যাক যত গভীরে গেছিল ঠিক তত ফিরে আসবে।' },
      { en: 'The same 6765, reached with 21891 calls or with 39. The second version is the first one plus a Map: the call stack stops being the storage.', bn: 'উত্তর একই 6765, পৌঁছানো হয় 21891 কলে বা 39 কলে। দ্বিতীয় সংস্করণ প্রথমটির সঙ্গে একটি Map—এবং কল-স্ট্যাক আর জমা রাখার জায়গা থাকে না।' }
    ]
  },
  {
    hub: 'queues', slug: 'fifo-thinking', out: 'tools/audit/tmp/out-fifo.ts',
    lead: {
      en: 'Four print jobs, one printer, four pages a minute. Nobody cuts in line, and the numbers below show exactly what that fairness buys.',
      bn: 'চারটি প্রিন্ট-জব, একটি প্রিন্টার, মিনিটে চার পাতা। কেউ লাইন কাটে না, আর নিচের সংখ্যাগুলোই বলে দেয় সেই নিষ্ঠার দাম কত।'
    },
    captions: [
      { en: 'The 2-page form waited 8.5 minutes behind a 120-page book while the queue was perfectly fair. That single figure is the whole argument for priorities.', bn: '2 পাতার ফর্মটি 8.5 মিনিট অপেক্ষা করেছে 120 পাতার বইয়ের পেছনে, অথচ queue তখন পুরোপুরি ন্যায্য। অগ্রাধিকারের পুরো যুক্তিটা এই একটি সংখ্যায়।' }
    ]
  },
  {
    hub: 'queues', slug: 'queues-at-work', out: 'tools/audit/tmp/out-queuesatwork.ts',
    lead: {
      en: 'Breadth-first search is a queue wearing a graph costume, and a ring buffer is a queue that forgot to allocate. Both run in one file.',
      bn: 'breadth-first search মানে graph-পরা একটি queue, আর ring buffer মানে বরাদ্দ ভুলে যাওয়া একটি queue। দুটোই এক ফাইলে চলে।'
    },
    captions: [
      { en: 'The distances come out in order because the oldest entry is served first: f is 3 hops even though it touches both d and e. Four writes into a ring of four wrapped the tail back onto the head.', bn: 'সবচেয়ে পুরোনোটি আগে বের হয় বলে দূরত্ব ক্রমে আসে: d ও e দুটোকেই ছুঁয়েও f-এর দূরত্ব 3। ৪-এর ring-এ ৪টি লেখা tail-কে আবার head-এ ফিরিয়ে আনে।' }
    ]
  },
  {
    hub: 'heaps', slug: 'priority-machines', out: 'tools/audit/tmp/out-heaps.ts',
    lead: {
      en: 'Build a heap from eight unsorted numbers, count the swaps, then drain it. Popping is the sort, and every step is printed.',
      bn: 'অগোছানো আটটি সংখ্যা থেকে heap বানান, অদলবদল গুনুন, তারপর খালি করুন। পপ-গুলোই আসলে sort, আর প্রতিটি ধাপ ছাপা হয়।'
    },
    captions: [
      { en: 'Four swaps made a heap out of eight items: each sift-down walked at most three levels, and half the array was already one item deep. Draining it produced the sorted run, which is heap sort in eight pops.', bn: 'আটটি উপাদানে heap বানাতে লেগেছে 4টি অদলবদল: প্রতিটি sift-down সর্বোচ্চ তিন স্তর নেমেছে, অর্ধেক অ্যারে তো আগেই একটি স্তরের নিচে। ৮টি পপ-এ গোড়া থেকেই সাজানো ক্রমে বেরিয়ে আসে—সেটাই heap sort।' }
    ]
  },
  {
    hub: 'trees', slug: 'balanced-trees', out: 'tools/audit/tmp/out-trees.ts',
    lead: {
      en: 'Insert the same fifteen keys twice, once in order and once shuffled, and read the heights. Nothing about the tree changed except the arrival of its keys.',
      bn: 'একই 15টি চাবি দুবার ঢোকান—একবার ক্রমে, একবার এলোমেলো—তারপর উচ্চতা পড়ুন। গাছে কিছু বদলায়নি, বদলেছে শুধু চাবি আসার ক্রম।'
    },
    captions: [
      { en: 'Fifteen levels against five, and both are correct search trees. Insertion order is an input to the design, so every balanced tree is really a promise about the order you refused to allow.', bn: 'একটি গাছ 15 স্তরের, অন্যটি 5-এর, অথচ দুটোই সঠিক search tree। ঢোকার ক্রম ডিজাইনের ইনপুট; তাই balanced tree মূলত সেই ক্রমের উপরেই নিষেধাজ্ঞার নাম।' }
    ]
  }
];

// the lesson's OWN slug line, at two-space indent. Matching the bare string also hits every
// nextLesson link, which is how one pass landed blocks in the wrong file.
const findFile = (hub, slug) => {
  const dir = join('src/content', hub, 'lessons');
  for (const f of readdirSync(dir)) {
    const text = readFileSync(join(dir, f), 'utf8');
    if (text.includes("\n  slug: '" + slug + "',\n")) return join(dir, f);
  }
  return null;
};
const stripRegion = (path) => {
  let lines = readFileSync(path, 'utf8').split(String.fromCharCode(10));
  let n = 0;
  for (;;) {
    const i = lines.findIndex((l) => l.includes("id: 'run'") && l.includes('Run it: the same claim'));
    if (i < 0) break;
    let j = i;
    while (j < lines.length && lines[j].trim() !== '],') j++;
    if (j >= lines.length) break;
    lines.splice(i, j - i);
    n++;
  }
  if (n) writeFileSync(path, lines.join(String.fromCharCode(10)));
  return n;
};

// 1. clear every file in the four hubs, so a re-run cannot stack regions or leave one misplaced
const seen = new Set();
for (const job of JOB) {
  const guess = findFile(job.hub, job.slug);
  if (guess) seen.add(guess);
}
for (const dir of ['stacks', 'queues', 'heaps', 'trees']) {
  for (const f of readdirSync(join('src/content', dir, 'lessons'))) {
    const path = join('src/content', dir, 'lessons', f);
    const n = stripRegion(path);
    if (n) console.log(`stripped ${n} region(s) from ${path}`);
  }
}

for (const job of JOB) {
  const path = findFile(job.hub, job.slug);
  if (!path) { console.log(`${job.slug}: file not found`); continue; }
  const blocks = readFileSync(job.out, 'utf8').match(/    \{\n      type: 'code',[\s\S]*?\n    \},/g) || [];
  if (blocks.length !== job.captions.length) { console.log(`${job.slug}: ${blocks.length} blocks vs ${job.captions.length} captions`); continue; }
  const L = readFileSync(path, 'utf8').split('\n');
  const ex = L.findIndex((l) => /^\s*exercises: \[/.test(l));
  if (ex < 0) { console.log(`${job.slug}: no exercises anchor`); continue; }
  let close = ex; while (!/^\s*\],\s*$/.test(L[close])) close--;
  const region = [
    `    { type: 'heading', id: 'run', text: { en: 'Run it: the same claim in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },`,
    `    {`,
    `      type: 'para',`,
    `      text: {`,
    `        en: '${job.lead.en}',`,
    `        bn: '${job.lead.bn}'`,
    `      }`,
    `    },`,
    ...blocks.map((b, i) => b.replace(/\n    \},$/, `,\n      caption: {\n        en: '${job.captions[i].en}',\n        bn: '${job.captions[i].bn}'\n      }\n    },`))
  ];
  L.splice(close, 0, ...region);
  writeFileSync(path, L.join('\n'));
  console.log(`${job.slug}: +${blocks.length} measured block(s)`);
}
