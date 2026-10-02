/**
 * Batch 1 of authored Bengali twins for quiz/exercise option labels whose `bn:` was the English
 * pasted again. Reads the first N rows of tools/audit/tmp/twins/top.tsv (the strings ranked by how
 * many lines they cost) and pairs them with the twins below, then writes top-filled.tsv for
 * tools/twin-fill.mjs. Each row here is checked against the string it is being applied to, so a
 * misalignment stops the batch instead of quietly pasting the wrong Bengali.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '/home/user/codeshikhon/';
const TWINS = [
  'currentColor-হ্যান্ডশেক, রেখার-মাথা (cap), জোড়া (join), সীমা (limit), ড্যাশের বাক্যবিধি, gradientUnits-এর নোঙর-নিয়ম।',
  'সাবগ্রাফ, এন্টিটি + @key, রিপ্রেজেন্টেশন, কুয়েরি-পরিকল্পনা।',
  'সিলেক্টর ভেতরে পৌঁছায়, ইনহেরিটেন্সই থিমিং, কাস্টম প্রপার্টি শ্যাডো পেরোয়, বন্ধ উইন্ডো নিজের স্টাইল নিজেই রাখে।',
  'রাস্টার মানে ভেক্টরের ছাপ, টেবিলই পাঠ, অ্যাট্রিবিউট = তলদেশ, রঙ আসে CSS-এর হাত থেকে, জ্যামিতি থেকে নয়।',
  'রঙের ক্রম = ডকুমেন্টের ক্রম, currentColor-হ্যান্ডশেক, রেখার-মাথা, জোড়া, সীমা, ড্যাশের বাক্যবিধি।',
  'clip বনাম mask, SVG হলো DOM-এর এক শাখা, জানালার চার রকম, আর বন্ধ <img> জানালা।',
  'ইনহেরিটেন্সই থিমিং, কাস্টম প্রপার্টি শ্যাডো পেরোয়, বন্ধ উইন্ডো নিজের স্টাইল নিজে রাখে, রঙের ক্রম = ডকুমেন্টের ক্রম।',
  'সাজানো সংগ্রহ, ঝুলন্ত ঠিকানা, আনার নীতি, বাদ-পড়ার নিয়ম।',
  'অবজেক্ট-টাইপ, ইন্টারফেস, ইউনিয়ন, ইনপুট-অবজেক্ট।',
  'যোগ করা পরিবর্তন, আরও শক্ত করা, অবচলনের বিধি, সহনশীল পাঠক।',
  'ছড়িয়ে-পড়া খরচ, সম্ভাব্যতা-ফাংশন (Φ), হিসাবরক্ষণের পদ্ধতি, পুঁজির পদ্ধতি।',
  'সূচকের হিসাবের দরজা, উপরে-ছাঁকনি ও নিচে-ছাঁকনি, অসম্ভবতার কেন্দ্র, টোকেন-বালতি (β, ρ)।',
  'পেজিং-চুক্তি, স্বাস্থ্য-রেজিস্টার, শিডিউলিং-মতবাদ, নিষ্কাশন-নোটিশ।',
  'উত্তরণের অনুষ্ঠান, হুমকির হাতিয়ার-গণনা, স্তরে-স্তরে সুরক্ষার খতিয়ান, আক্রান্তের খরচের হিসাব।',
  'কম্পোজিশন + সিদ্ধযোগ্যতা, নাল-যোগসূত্র, স্কিমা (SDL), নির্বাচন-সেট।',
  'মিউটেশন, ইনপুট-অবজেক্ট, পেলোড-টাইপ, userErrors।',
  'DataLoader, অবজেক্ট-টাইপ, ইন্টারফেস, ইউনিয়ন।',
  'সাবস্ক্রিপশন, টপিক, ডোমেইন-ইভেন্ট, ওয়্যার-অবস্থা।',
  'ক্যাশ-চাবির নিবন্ধ (Vary), বাসি-থাকার মতবাদ (SWR ও SIE), ঢাল আর ডগপাইল, যুদ্ধের খতিয়ান।',
  'DNS, TCP হ্যান্ডশেক, TLS হ্যান্ডশেক, CDN-এর প্রান্তবিন্দু।',
  'frame-ancestors (ক্লিকজ্যাকিং-এর সাজা), COOP / COEP / CORP (ক্রস-অরিজিন আইসোলেশন), প্রতিফলিত XSS, সংরক্ষিত XSS।',
  'একমুখী হ্যাশ, লবণ (salt), কাজের মাত্রা, মেমরি-কঠোরতা।',
  'ইউজার-একক, viewBox = জানলার-কাঠামো + জুম, প্রস্থ ও উচ্চতা কেবল প্রস্তাব, preserveAspectRatio।',
  'অ্যাট্রিবিউট = তলদেশ, রঙ CSS-এর, জ্যামিতি নয়, সিলেক্টর ভেতরে পৌঁছায়, ইনহেরিটেন্সই থিমিং।',
  'প্রশ্নের-আকার আগে ঠিক করা, ইনডেক্সই চাঁদা, বাম-প্রিফিক্সের নিয়ম, B-tree বনাম LSM।',
  'কনট্রাস্টের অনুপাত, 1.4.1 রঙের ব্যবহার, 1.4.10 রিফ্লো, 1.4.12 টেক্সট-স্পেসিং।',
  'ফন্টের মোটাপন আর পড়া-যাওয়া, যুক্ত লেবেল, aria-describedby, aria-invalid আর ত্রুটির চুক্তি।',
  'হেরে-যাওয়ার গাছ, পদত্যাগের অনুষ্ঠান (+∞ প্রহরী), বাইরের মার্জের হিসাব, পূর্ণ বাইনারি গাছ (আকৃতির নিয়ম)।',
  'RPC-উপভাষা, পুরো-সত্যের শপথ, Merge Patch, JSON Patch।',
];

const rows = readFileSync(join(ROOT, 'tools/audit/tmp/twins/top.tsv'), 'utf8').split('\n').filter(Boolean).map((l) => l.split('\t')[0]);
if (rows.length < TWINS.length) { console.log(`only ${rows.length} rows queued — shrink TWINS or re-run twin-queue with a bigger --top`); process.exit(2); }
const out = TWINS.map((bn, i) => `${rows[i]}\t${bn}`);
// a spot check the reader can see: the pairing must line up with the English it claims to translate
for (const i of [0, 5, 13, TWINS.length - 1]) console.log(`  [${i}] ${rows[i].slice(0, 64)}\n      -> ${TWINS[i].slice(0, 64)}`);
writeFileSync(join(ROOT, 'tools/audit/tmp/twins/top-filled.tsv'), out.join('\n') + '\n');
console.log(`wrote ${out.length} authored twins -> tools/audit/tmp/twins/top-filled.tsv`);
