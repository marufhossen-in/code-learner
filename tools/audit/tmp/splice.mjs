import { readFileSync, writeFileSync } from 'node:fs';
const p = 'src/content/javascript/lessons/one-page-each.ts';
const L = readFileSync(p, 'utf8').split('\n');
const set = (i, text) => { const n = i - 1; if (!L[n].trim()) { console.log(`EMPTY line ${i}`); return; } console.log(`line ${i}: [${L[n].trim().slice(0, 26)}] -> replaced`); L[n] = text; };

set(407, `    { type: 'heading', id: 'p15', text: { en: '15. Modules, geolocation, and reading an error before it wakes you', bn: '১৫. module, geolocation, আর error-টা ঘুম ভাঙার আগে পড়ে নেওয়া' } },`);
set(412, `        bn: 'উপরের প্রতিটি পয়েন্টই একটি module-এর এক লাইন। দুটি export, একটি namespace import, আর যে কোড ভিজিটর কখনো চাইবেই না তার জন্য একটি lazy import—ব্রাউজারের module system-এর পুরোটাই এটুকু। বাকিটা সহজ সতর্কতা।'`);
set(444, `        bn: 'ডায়নামিক import-এরই একটি সংখ্যা আছে: প্রথম bundle-এ না রেখে দিলে chart লাইব্রারির 240 KB প্রতি ভিজিটরের রিকোয়েস্টে বাঁচে।'`);

const anchor = L.findIndex((l) => l.trim() === "type: 'diagram',");
if (anchor < 0) { console.log('MISS diagram anchor'); process.exit(1); }
L.splice(anchor - 1, 0, ...readFileSync('tools/audit/tmp/p16.txt', 'utf8').replace(/\n$/, '').split('\n'));

const quizLine = L.findIndex((l) => l.trim() === 'quiz: {');
if (quizLine < 0) { console.log('MISS quiz anchor'); process.exit(1); }
let close = quizLine; while (!L[close].includes('],')) close--;
L.splice(close, 0, ...readFileSync('tools/audit/tmp/ex5.txt', 'utf8').replace(/\n$/, '').split('\n'));

writeFileSync(p, L.join('\n'));
console.log('spliced point 16 and the fifth exercise');
