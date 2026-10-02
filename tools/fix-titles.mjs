/**
 * fix-titles.mjs — repairs two mistakes an earlier sweep made on hubs that were already good:
 *   1. an en lesson title flattened to "Concept — Hub" while its bn title stayed rich;
 *   2. a "Key terms of this page: …" ledger sentence pasted into summary/para fields.
 * Only touches files whose content is demonstrably rich (long bilingual summary + a titled bn),
 * so tier-3 chant hubs (which get replaced wholesale by tools/reauthor.mjs) are left alone.
 *
 *   node tools/fix-titles.mjs [--write]
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../src/content/', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');
const LEDGER = /(?:Key terms of this (?:page|hub)|এই পাতার মুখ্য-শব্দ|হাবের মুখ্য-শব্দ|Filed under this page|এই পাতায় যাচাই)[^\n]*/g;
const HAS_LEDGER = new RegExp(LEDGER.source);
const JUNK = new Set(readdirSync('/tmp/audit').flatMap((f) => (f.startsWith('tier') ? readFileSync('/tmp/audit/' + f, 'utf8').trim().split('\n') : [])));
const tier3 = new Set(readFileSync('/tmp/audit/tier3.txt', 'utf8').trim().split('\n'));

const hubs = readdirSync(ROOT).filter((h) => { try { return statSync(join(ROOT, h, 'lessons')).isDirectory(); } catch { return false; } });
const tc = (s) => s.replace(/\b[a-z]/g, (c) => c.toUpperCase());
const firstClause = (t) => {
  const clean = t.replace(/["“”']/g, '').trim();
  const cut = clean.match(/^.{10,110}?(?:[.,;]|\s—|\s-)/);
  let c = (cut ? cut[0] : clean.slice(0, 96)).replace(/[.,;—-]+$/, '').trim();
  if (c.length > 96) c = c.slice(0, 93).trim() + '…';
  return c.charAt(0).toUpperCase() + c.slice(1);
};

let titles = 0, ledgers = 0, scanned = 0;
const touched = new Set();
for (const h of hubs) {
  for (const f of readdirSync(join(ROOT, h, 'lessons'))) {
    if (!f.endsWith('.ts')) continue;
    const p = join(ROOT, h, 'lessons', f);
    let s = readFileSync(p, 'utf8');
    scanned++;
    const o = s;
    if (/def: \{ en: 'the [a-z]+: /.test(s) || /def: \{\n\s*en: 'the [a-z]+: /.test(s)) continue; // chant body: reauthor replaces it
    // 1. rebuild flattened en titles from the slug + the lesson's own first summary sentence
    const tm = s.match(/title: \{\s*en: '([^']*)',\s*bn: '([^']*)'\s*\}/m) || s.match(/title: \{\s*en: '([^']*)',\s*\n\s*bn: '([^']*)'\s*,?\s*\n\s*\}/m);
    const sm = s.match(/summary: \{\s*\n?\s*en: '(?:\\.|[^'])*'/m);
    const summaryEn = (sm ? sm[0].replace(/^summary: \{\s*\n?\s*en: '/, '').replace(/'$/, '') : '').replace(/\\'/g, "'");
    if (tm && summaryEn.length > 160 && !HAS_LEDGER.test(summaryEn.slice(0, 60))) {
      const bnRich = tm[2].length > 22 && tm[2].includes(':');
      const flat = /^[A-Z][A-Za-z0-9+#]* — .+$/.test(tm[1]) && tm[1].length < 30;
      if (bnRich && flat) {
        const base = f.replace(/\.ts$/, '').replace(/^the-/, '').split(/-and-|-/).filter(Boolean);
        const concept = tc(base.slice(0, 3).join(' '));
        const newEn = `${concept}: ${firstClause(summaryEn)}`;
        if (newEn !== tm[1]) { s = s.replace(tm[0], `title: { en: ${JSON.stringify(newEn).slice(1, -1).replace(/"/g, "'")}, bn: '${tm[2]}' }`); titles++; touched.add(h); }
      }
    }
    // 2. drop ledger sentences pasted into narrative fields (keep the file's own prose)
    if (HAS_LEDGER.test(s)) {
      s = s.replace(/,? ?(?:Key terms of this (?:page|hub)|এই পাতার মুখ্য-শব্দ|হাবের মুখ্য-শব্দ|Filed under this page|এই পাতায় যাচাই)[^']*/, (m) => (m.startsWith(',') ? ',' : ''));
      s = s.replace(/: '\s*— /g, ": '");
      ledgers++; touched.add(h);
    }
    if (/en: ''/.test(s) || /: \{ en: ''/.test(s)) { console.log('SKIP(empty) ' + h + '/' + f); continue; }
    if (WRITE && s !== o) writeFileSync(p, s);
  }
}
console.log(`${WRITE ? 'wrote' : 'dry-run'}: scanned ${scanned} files | en titles rebuilt ${titles} | ledger sentences removed ${ledgers} | hubs touched ${touched.size}`);
console.log([...touched].join(' '));
