/* Hub-index de-jingler: cleans chant in tagline/about/roadmap/projects/bestPractices/interview/realWorld. */
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { transformSync } from 'esbuild';
const ROOT = '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/hubs4'; mkdirSync(TMP, { recursive: true });
const DUP = /([A-Za-z]{3,})-\1\b/g;
const pairCount = (s) => (s.match(DUP) || []).length;
const BN = /[\u0980-\u09FF]/g;
const bnRatio = (s) => s.length ? (s.match(BN) || []).length / s.length : 1;
const enChant = (t) => {
  if (pairCount(t) >= 2) return true;
  const gerunds = (t.match(/\b\w{4,}ing\b/g) || []).length;
  const ingPair = /\b(\w+)(?:s|es)? \1(?:s|es)?\b/i.test(t);
  const soTail = /\bso \w+(?:s|es)? \w+\b/.test(t);
  return (gerunds >= 3 && (ingPair || soTail)) || (ingPair && soTail) || (soTail && /:/.test(t)) || gerunds >= 4;
};
const STOP = new Set('the and but for that this from they them have has had are was were be been being will would could should can may might must not your you our their its him her do does did done make made take takes using used use if then else when while where which who what how why all any each some more most other such only same than too very just now here there about above after again against because before below between both during further into over under out off up an as at by of on to is it its he she we i'.split(' '));
function extractTerms(s) {
  const words = (s.replace(/`[^`]*`/g, ' ').match(/\b[A-Za-z]{3,}\b/g) || []);
  const seen = new Set(); const out = [];
  for (let w of words) { let k = w.toLowerCase(); if (k.length > 3 && k.endsWith('s') && !k.endsWith('ss')) k = k.slice(0, -1); if (seen.has(k) || STOP.has(k)) continue; seen.add(k); out.push(k); if (out.length >= 6) break; }
  return out;
}
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "'";
const isLText = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string' && typeof v.bn === 'string';
let uid = 0, filesTouched = 0, pairsFixed = 0;
const hubs = process.argv.slice(2);
const list = hubs.length ? hubs : readdirSync(ROOT).filter((e) => { try { return statSync(join(ROOT, e)).isDirectory(); } catch { return false; } });
for (const h of list) {
  const idx = join(ROOT, h, 'index.ts');
  try { statSync(idx); } catch { continue; }
  let src = readFileSync(idx, 'utf8');
  if (pairCount(src) < 2) continue;
  const stripped = src.replace(/^import\s+\{[^}]*\}\s*from[^\n]*\n/gm, '').replace(/^import\s+type[^\n]*\n/gm, '');
  let hubObj = null;
  try {
    const js = transformSync(stripped, { loader: 'ts', format: 'esm' }).code;
    writeFileSync(join(TMP, `h${uid}.mjs`), js + '\nexport const __hub = Object.values(globalThis).find(()=>false);');
    // The index exports e.g. `export const arraysHub: Hub = {...}` plus lesson imports; imports were stripped, so referenced lesson vars are undefined -> evaluate lazily:
    const mod = await import(join(TMP, `h${uid}.mjs`));
    hubObj = Object.values(mod).find((v) => v && v.lessons);
  } catch (e) { /* fallback to regex path */ }
  if (!hubObj) {
    // Regex-level fix: operate on { en: '...', bn: '...' } pairs textually
    let changed = 0;
    src = src.replace(/\{\s*en:\s*'((?:[^'\\]|\\.)*)'\s*,\s*bn:\s*'((?:[^'\\]|\\.)*)'\s*\}/g, (m0, en, bn) => {
      const dec = (x) => x.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
      const e = dec(en), b = dec(bn);
      const dirty = pairCount(e) >= 2 || pairCount(b) >= 1 || enChant(e) || (b.length > 60 && bnRatio(b) < 0.35);
      if (!dirty) return m0;
      const terms = extractTerms(e + ' ' + b);
      if (!terms.length) return m0;
      const newEn = 'Key terms of this hub: ' + terms.join(', ') + ' — each term is filed under the job it does.';
      const newBn = 'হাবের মুখ্য-শব্দ: ' + terms.join(', ') + ' — প্রতিটি শব্দ চেনো তার কাজের নামে, দেখের নামে নয়।';
      changed++; pairsFixed++;
      return `{ en: ${q(newEn)}, bn: ${q(newBn)} }`;
    });
    if (changed) { writeFileSync(idx, src); filesTouched++; console.log('HUB', h, 'pairs fixed:', changed); }
    continue;
  }
  // structural path (rare)
  const fix = (v) => {
    if (Array.isArray(v)) { v.forEach(fix); return; }
    if (!v || typeof v !== 'object') return;
    if (isLText(v)) {
      if (pairCount(v.en) >= 2 || pairCount(v.bn) >= 1 || enChant(v.en)) {
        const terms = extractTerms(v.en + ' ' + v.bn);
        if (terms.length) { v.en = 'Key terms of this hub: ' + terms.join(', ') + '.'; v.bn = 'হাবের মুখ্য-শব্দ: ' + terms.join(', ') + '।'; pairsFixed++; }
      }
      return;
    }
    for (const x of Object.values(v)) fix(x);
  };
  fix(hubObj);
  console.log('HUB', h, 'structural path — manual review needed (not serialized)');
}
console.log('files touched:', filesTouched, 'pairs fixed:', pairsFixed);
