import { readFileSync, writeFileSync } from 'node:fs';
const lesson = 'src/content/distributed-systems/lessons/the-consistency-menu.ts';
const gen = readFileSync('tools/audit/tmp/out-menu.ts', 'utf8');
const blocks = gen.match(/    \{\n      type: 'code',[\s\S]*?\n    \},/g);
if (!blocks || blocks.length !== 3) { console.log('parsed', blocks && blocks.length, 'blocks'); process.exit(1); }
const cap = [
  { en: 'Rows where W plus R only equals N still read stale: 351 misses in 1,000. The rule is W + R > N, and the > is the whole lesson.', bn: 'যে সারিতে W আর R মিলে ঠিক N হয়, সেখানেও ১০০০ পাঠের ৩৫১টি পুরোনো। নিয়ম W + R > N — আর এই > চিহ্নটাই পুরো পাঠ।' },
  { en: 'Same 1,000 operations, same dice, one change: the read is sent to a replica at least as new as the last one the session saw. 602 backwards reads become zero, and no quorum was raised.', bn: 'একই ১,০০০ অপারেশন, একই নম্বর, বদলায় শুধু একটি কথা: পাঠ সেখানে যায় যার সংস্করণ সেশনের শেষ দেখা সংস্করণের কম নয়। ৬০২টি পেছোনো-পাঠ শূন্য হয়ে যায়, কোনো quorum বাড়াতে হয় না।' },
  { en: 'The buried half is not an error the system reports; it is an edit a user made that no longer exists. Version vectors keep both and move the decision to the application, where it can be seen.', bn: 'যে অর্ধেক লেখা হারায়, সেটি কোনো reported error নয়; সেটি ব্যবহারকারীর একটি সম্পাদনা যেটি আর নেই। version vector দুটোই রাখে আর সিদ্ধান্তটি application-এ নিয়ে যায়, যেখানে সেটি দেখা যায়।' }
];
const region = [
  `    { type: 'heading', id: 'run', text: { en: 'RUN: the three prices, measured', bn: 'চালিয়ে দেখা: তিনটি দাম মাপা হলো' } },`,
  `    {`,
  `      type: 'para',`,
  `      text: {`,
  `        en: 'Three short programs, each the whole claim of one menu row. Save them, run them with node, and the numbers below appear on your terminal as well.',`,
  `        bn: 'তিনটি ছোট প্রোগ্রাম, প্রতিটি তালিকার একটি সারির পুরো দাবি। ফাইলগুলো রেখে node দিয়ে চালান, নিচের সংখ্যাগুলো আপনার টার্মিনালেও আসবে।'`,
  `      }`,
  `    },`,
  ...blocks.map((b, i) => b.replace(/\n    \},$/, `,\n      caption: {\n        en: '${cap[i].en}',\n        bn: '${cap[i].bn}'\n      }\n    },`))
].join('\n');
const L = readFileSync(lesson, 'utf8').split('\n');
const anchor = L.findIndex((l) => /id: 'visual'/.test(l));
if (anchor < 0) { console.log('MISS visual anchor'); process.exit(1); }
L.splice(anchor, 0, region);
writeFileSync(lesson, L.join('\n'));
console.log('inserted 3 measured code blocks before the visual section');
