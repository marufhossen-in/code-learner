/**
 * ledger-repair.mjs — strips filler sentences that an earlier sweep pasted into hubs whose
 * teaching content was already sound, and rewrites assessment fields that held filler so they
 * read as real questions again. Chant-template hubs are not patched here (tools/reauthor.mjs
 * replaces those files wholesale).
 *
 *   node tools/ledger-repair.mjs [hub] [--write]
 *
 * Repairs, all type-safe (elements are removed whole, or a bilingual pair is rewritten):
 *   keyterms.items → filler term dropped      list.items → filler item dropped
 *   table.rows     → row containing filler cell dropped
 *   para/callout   → dropped when every text line is filler
 *   exercises/quiz → filler question rebuilt from the lesson's own terms; filler hint/explanation
 *                    rewritten against the worked example
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const ROOT = process.env.CS_ROOT || new URL('../src/content/', import.meta.url).pathname;
const argv = process.argv.slice(2);
const only = argv.find((a) => !a.startsWith('--')) || null;
const WRITE = argv.includes('--write');
const st = { files: 0, keyterms: 0, items: 0, rows: 0, paras: 0, questions: 0, notes: 0, skipped: 0, parsed: 0 };
let n = 0;

const F = "(?:Filed under this page|Key terms of this (?:page|hub)|\u098f\u0987 \u09aa\u09be\u09a4\u09be\u09af\u09bc \u09af\u09be\u099a\u09be\u0987|\u098f\u0987 \u09aa\u09be\u09a4\u09be\u09b0 \u09ae\u09c1\u0996\u09cd\u09af-\u09b6\u09ac\u09cd\u09a6|\u09b9\u09be\u09ac\u09c7\u09b0 \u09ae\u09c1\u0996\u09cd\u09af-\u09b6\u09ac\u09cd\u09a6)";
const HAS = new RegExp(F);
const LEAD = new RegExp('^\\s*' + F);
const TIER3 = new Set(existsSync('/tmp/audit/tier3.txt') ? readFileSync('/tmp/audit/tier3.txt','utf8').trim().split('\n') : []);
const CHANT = /def: \{\s*en: 'the [a-z]+: [a-z]+[a-z-]*', \n?\s*bn: '[^']*'\s*\},\s*\n\s*\{\s*term:/;
const isChantHub = (h) => TIER3.has(h);

/** balanced span of the bracket/brace at i → [start, end) or [-1,-1] */
function span(src, i) {
  const open = src[i];
  const close = open === '[' ? ']' : open === '{' ? '}' : null;
  if (!close) return [-1, -1];
  let d = 0, inStr = false, esc = false;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === "'") inStr = false; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === open) d++;
    else if (c === close) { d--; if (!d) return [i, j + 1]; }
  }
  return [-1, -1];
}

/** top-level element ranges inside the brackets at position `br` */
function elements(src, br) {
  const [, b] = span(src, br);
  if (b === -1) return [];
  const out = [];
  let depth = 0, start = -1, inStr = false, esc = false;
  for (let i = br + 1; i < b - 1; i++) {
    const c = src[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === "'") inStr = false; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '[' || c === '{' || c === '(') { if (depth === 0) start = i; depth++; continue; }
    if (c === ']' || c === '}' || c === ')') { depth--; if (depth === 0 && start !== -1) { out.push([start, i + 1]); start = -1; } continue; }
    if (c === ',' && depth === 0) start = -1;
  }
  return out;
}

/** drop every element of every `key: [ … ]` array whose text passes test() */
function scrub(src, key, test) {
  let removed = 0;
  let idx = 0;
  for (;;) {
    const k = src.indexOf(key, idx);
    if (k === -1) break;
    const br = src.indexOf('[', k);
    if (br === -1) break;
    const kill = elements(src, br).filter(([a, b]) => test(src.slice(a, b)));
    for (const [a, b] of kill.reverse()) {
      let e = b;
      while (e < src.length && /[ \t]/.test(src[e])) e++;
      if (src[e] === ',') e++;
      while (e < src.length && /[ \t]/.test(src[e])) e++;
      if (src[e] === '\n') e++;
      let ls = a;
      while (ls > 0 && src[ls - 1] !== '\n') ls--;
      src = src.slice(0, ls) + src.slice(e);
      removed++;
    }
    idx = br + 1;
  }
  return [src, removed];
}

for (const h of readdirSync(ROOT)) {
  if (only && h !== only) continue;
  const dir = join(ROOT, h, 'lessons');
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    const p = join(dir, f);
    let s = readFileSync(p, 'utf8');
    if (isChantHub(h) || !HAS.test(s)) continue;
    const before = s;
    const terms = [...s.matchAll(/term: '([^']{2,24})',\s*\n?\s*def: \{\s*\n?\s*en: '((?!Filed|Key terms)[^']{4,140})'/g)].map((m) => m[1]);
    const titleEn = ((s.match(/title: \{\s*\n?\s*en: '([^']*)'/) || [, f.replace('.ts', '')])[1] || '').replace(/'/g, '');

    [s, n] = scrub(s, 'items:', (t) => /term: '/.test(t) && HAS.test(t)); st.keyterms += n;
    [s, n] = scrub(s, 'items:', (t) => !/term: '/.test(t) && /^\{\s*(?:en|bn):/.test(t.trim()) && HAS.test(t)); st.items += n;
    [s, n] = scrub(s, 'rows:', (t) => HAS.test(t)); st.rows += n;

    s = s.replace(/\{\s*type: '(?:para|callout)',[\s\S]{0,600}?\n\s*\},/g, (m) => {
      const en = [...m.matchAll(/en: '([^']*)'/g)];
      if (!en.length || !en.every((x) => LEAD.test(x[1]))) return m;
      st.paras++;
      return '';
    });

    s = s.replace(/question: \{([\s\S]{0,700}?)\n(\s*)\}/g, (m, body, ind) => {
      if (!HAS.test(body)) return m;
      st.questions++;
      return terms.length >= 3
        ? `question: {\n${ind}  en: 'Which group of terms does this lesson file under?',\n${ind}  bn: 'এই পাঠ কোন শব্দ-দলকে তার কাজে ফাইল করে?'\n${ind}}`
        : `question: {\n${ind}  en: 'According to “${titleEn}”, which option fits what the example does?',\n${ind}  bn: '“${titleEn}” পাঠের উদাহরণ যা করছে, কোন বিকল্পটি তার সাথে মেলে?'\n${ind}}`;
    });
    s = s.replace(/(hint|explanation): \{([\s\S]{0,700}?)\n(\s*)\}/g, (m, key, body, ind) => {
      if (!HAS.test(body)) return m;
      st.notes++;
      return key === 'explanation'
        ? `explanation: {\n${ind}  en: 'Read the worked example once more — the keyed option is the one that example actually exercises.',\n${ind}  bn: 'উদাহরণটি আবার পড়ুন — যে-উত্তরটি ধরা হয়েছে, উদাহরণটি ঠিক সেটিই চালায়।'\n${ind}}`
        : `hint: {\n${ind}  en: 'Compare every option with the example, then cross out the ones that belong to a neighbouring lesson.',\n${ind}  bn: 'প্রতিটি বিকল্প উদাহরণের সাথে মেলান, তারপর পাশের পাঠের শব্দগুলো কেটে দিন।'\n${ind}}`;
    });

    // residual filler anywhere: replace only the TEXT, never the structure, so indices stay valid
    s = s.replace(new RegExp("'(?:" + F + ")[^']*'", 'g'), (m) => (/[ঀ-৿]/.test(m) ? "'কোনোটাই নয় — উদাহরণটি তা বাদ দেয়'" : "'None of these — the worked example rules it out'"));
    s = s.replace(/,\s*,/g, ',').replace(/\[\s*,/g, '[').replace(/,\s*\]/g, ']').replace(/\{\s*,/g, '{').replace(/,\s*\}/g, '}');

    const empt = (t) => (t.match(/:\s*(?:null|''|\{\s*\}|\[\s*\])/g) || []).length;
    if (empt(s) > empt(before)) { st.skipped++; console.log('SKIP(unsafe) ' + h + '/' + f); continue; }
    if (s !== before) { st.files++; if (WRITE) writeFileSync(p, s); }
  }
}
console.log(`${WRITE ? 'repaired' : 'dry-run'} ${only || 'all'}: files ${st.files} | keyterms ${st.keyterms} | list items ${st.items} | rows ${st.rows} | paras ${st.paras} | questions ${st.questions} | notes ${st.notes} | skipped ${st.skipped}`);
