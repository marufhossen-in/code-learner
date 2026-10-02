// splice-four.mjs — last four `broken` lessons of the site: insert measured blocks, then fix the
// comma the blocks list needs. Files are given by path, because matching a slug string also hits
// every nextLesson link (that misplacement cost a repair pass earlier today).
import { readFileSync, writeFileSync } from 'node:fs';

const JOB = [
  {
    path: 'src/content/ai-fundamentals/lessons/what-is-ai.ts',
    out: 'tools/audit/tmp/out-what-is-ai.ts',
    lead: {
      en: 'One file, twenty lines, no library. It measures a guessed rule against the best threshold a loop can find, and prints both.',
      bn: 'একটি ফাইল, কুড়ি লাইন, কোনো লাইব্রেরি নয়। এটি একটি অনুমান-নিয়মের সঙ্গে লুপ-বাছাই সেরা থ্রেশহোল্ড মিলিয়ে দেখায়, দুটোর ফলই ছাপে।'
    },
    captions: [
      {
        en: 'Learning here is a for loop over eight thresholds, and it gains seven points. The machine found no hidden law: it measured the same data more patiently than the guess did.',
        bn: 'এখানে শেখা মানে আটটি থ্রেশহোল্ডের উপর একটি for loop, আর তা ৭ পয়েন্ট এগিয়ে যায়। মেশিন কোনো গোপন নিয়ম আবিষ্কার করেনি; অনুমানের চেয়ে ধৈর্যে একই ডেটা মাপে।'
      }
    ]
  },
  {
    path: 'src/content/ai-fundamentals/lessons/how-machines-learn.ts',
    out: 'tools/audit/tmp/out-how-machines-learn.ts',
    lead: {
      en: 'Training is a loop that nudges two numbers downhill on the error. Run it and read the two columns: the loss, and what the model now believes.',
      bn: 'ট্রেনিং মানে দুটি সংখ্যাকে ত্রুটির ঢালে নিচের দিকে ঠেলে দেওয়া লুপ। চালিয়ে দুই কলাম পড়ুন: loss কত, আর মডেল এখন কী বিশ্বাস করে।'
    },
    captions: [
      {
        en: 'Nothing in that loop is magic. Epoch zero believes the slope is 5.22; epoch 200 lands at 3.11 against a truth of 3, and the intercept creeps from 0.87 to 6.29.',
        bn: 'লুপটিতে কিছুই জাদু নয়। প্রথম ধাপে ঢাল 5.22 ভেবে বসানো হয়, 200তম ধাপে 3.11—আসল মান 3-এর কাছে; আর ছেদবিন্দু 0.87 থেকে 6.29-এ উঠে আসে।'
      }
    ]
  },
  {
    path: 'src/content/ai-fundamentals/lessons/limits-bias-safety.ts',
    out: 'tools/audit/tmp/out-limits.ts',
    lead: {
      en: 'Three models, one thousand applications, one question each: how accurate are you, and who did you refuse?',
      bn: 'তিনটি মডেল, এক হাজার আবেদন, প্রতিটির কাছে একটাই প্রশ্ন: আপনি কতটা ঠিক, আর কাকে ফিরিয়ে দিয়েছেন?'
    },
    captions: [
      {
        en: 'Approving nobody scores 46.6 percent and refuses 14 of 14 deserving rare applicants. A single number cannot see that harm; the per-group count is the honest column.',
        bn: 'কারও অনুমোদন না করলে স্কোর ৪৬.৬ শতাংশ, অথচ যোগ্য বিরল-গোষ্ঠীর ১৪ জনের ১৪ জনই ফেরত যায়। একটি মাত্র সংখ্যা এই ক্ষতি দেখে না; গোষ্ঠীভেদে গণনাই সৎ কলাম।'
      }
    ]
  },
  {
    path: 'src/content/http/lessons/the-cookie-jar.ts',
    out: 'tools/audit/tmp/out-cookie.ts',
    lead: {
      en: 'A jar is a filter, not a shelf. This program runs four requests through the attributes on one cookie and prints which survive.',
      bn: 'জার আসলে তাক নয়, ছাঁকনি। এই প্রোগ্রামটি একটি cookie-এর attribute গুলোতে চারটি request চালিয়ে বলে দেয় কোনগুলো টিকে।'
    },
    captions: [
      {
        en: 'Two refusals, each naming the attribute that did it: Secure drops the plain http request, then domain, path and Lax together drop the cross-site POST.',
        bn: 'দুটি প্রত্যাখ্যান, প্রতিটিই যে attribute-টি থেকে এসেছে তার নাম বলে: Secure সাধারণ http request-টি নামিয়ে দেয়, তারপর domain, path ও Lax মিলে cross-site POST নামায়।'
      }
    ]
  }
];

for (const job of JOB) {
  const blocks = readFileSync(job.out, 'utf8').match(/    \{\n      type: 'code',[\s\S]*?\n    \},/g) || [];
  if (blocks.length !== job.captions.length) { console.log(`${job.path}: ${blocks.length} blocks vs ${job.captions.length} captions`); continue; }
  let L = readFileSync(job.path, 'utf8').split('\n');
  // anchor: the close of the blocks array, found by walking up from the first top-level key after it
  let key = L.findIndex((l) => /^  (exercises|quiz|nextLesson|reference):/.test(l));
  if (key < 0) { console.log(`${job.path}: no anchor key`); continue; }
  let close = key;
  while (close > 0 && L[close].trim() !== '],') close--;
  if (close <= 0) { console.log(`${job.path}: no blocks close`); continue; }
  if (/^\s*\}\s*$/.test(L[close - 1])) L[close - 1] = L[close - 1].trimEnd() + ',';
  const region = [
    `    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },`,
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
  writeFileSync(job.path, L.join('\n'));
  console.log(`${job.path}: +${blocks.length} measured block(s) at line ${close + 1}`);
}
