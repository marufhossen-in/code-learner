/**
 * patch-gaps.mjs — safe mechanical repairs, one pass, good hubs (chant hubs are replaced by
 * tools/reauthor.mjs instead):
 *
 *   1. nextLesson chain     — every lesson points at the hub’s next lesson (last one has none)
 *   2. empty open answers   — a fill/predict item with no answer gets one derived from its own
 *                             solution / solutionLines / explanation, so the grader has something
 *                             to compare against instead of failing everyone
 *   3. filler residue       — runs the ledger-repair rules on files the chant filter used to skip
 *                             because of a single stray line (now needs ≥3 chant lines)
 *
 *   node tools/patch-gaps.mjs [hub] [--write]
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.env.CS_ROOT || new URL('../src/content/', import.meta.url).pathname;
const argv = process.argv.slice(2);
const only = argv.find((a) => !a.startsWith('--')) || null;
const WRITE = argv.includes('--write');
const st = { chain: 0, answers: 0, files: 0, skipped: 0 };

const CHANT_HEAVY = (s) => (s.match(/def: \{\s*\n?\s*en: 'the [a-z]+: [a-z]+[a-z-]*/g) || []).length >= 3;
const F = "(?:Filed under this page|Key terms of this (?:page|hub))";
const clip = (t, n) => { const s = String(t).replace(/\s+/g, ' ').trim(); return s.length <= n ? s : s.slice(0, n).replace(/[.,;:—\s]*$/, '') + '…'; };

for (const h of readdirSync(ROOT)) {
  if (only && h !== only) continue;
  const dir = join(ROOT, h, 'lessons');
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  const idx = readFileSync(join(ROOT, h, 'index.ts'), 'utf8');
  const order = [...idx.matchAll(/from '\.\/lessons\/([a-z0-9-]+)'/g)].map((m) => m[1]);
  const titles = {};
  for (const slug of order) {
    try { const s = readFileSync(join(dir, `${slug}.ts`), 'utf8'); const m = s.match(/title: \{\s*\n?\s*en: '([^']*)',\s*\n?\s*bn: '([^']*)'/); if (m) titles[slug] = { en: m[1], bn: m[2] }; } catch {}
  }

  order.forEach((slug, i) => {
    const p = join(dir, `${slug}.ts`);
    let s; try { s = readFileSync(p, 'utf8'); } catch { return; }
    if (CHANT_HEAVY(s)) { st.skipped++; return; }
    const before = s;

    // 1. chain
    const nxt = order[i + 1];
    if (nxt && titles[nxt] && !new RegExp(`nextLesson: \\{[^}]*slug: '${nxt}'`).test(s)) {
      const insert = `\n  nextLesson: {\n    slug: '${nxt}',\n    tech: '${h}',\n    title: { en: ${JSON.stringify(titles[nxt].en).replace(/"/g, "'")}, bn: '${titles[nxt].bn.replace(/'/g, "\\'")}' }\n  },`;
      // place nextLesson right before exercises (house order) or at the tail of the object
      const exAt = s.search(/\n  exercises: \[/);
      if (exAt > 0) s = s.slice(0, exAt) + insert.replace(/^\n/, '\n') + s.slice(exAt);
      else s = s.replace(/\n\};\s*$/, ',' + insert.replace(/\n {2}/g, '\n    ') + '\n};');
      st.chain++;
    }
    if (nxt === undefined && /\bnextLesson: \{/.test(s)) s = s.replace(/\n {2}nextLesson: \{[\s\S]*?\n {2}\},/, '');

    // 2. open answers
    s = s.replace(/(\{\s*\n\s*id: '[^']*',\s*\n\s*kind: '(?:fill|predict)',[\s\S]{0,2200}?)answer: ''/g, (m, head) => {
      const sol = head.match(/solutionLines: \[([\s\S]{0,900}?)\]/);
      let text = '';
      if (sol) text = [...sol[1].matchAll(/text: \{[^{}]*en: '([^']*)'/g)].map((x) => x[1]).join(' ');
      if (!text) { const sl = head.match(/solution: '((?:\\.|[^'])*)'/); if (sl) text = sl[1]; }
      if (!text) { const ex = head.match(/explanation: \{[\s\S]{0,600}?en: '((?:\\.|[^'])*)'/); if (ex) text = ex[1]; }
      if (!text) return m;
      const ans = clip(text, 160).replace(/[…]$/, '.');
      st.answers++;
      return `${head}answer: ${JSON.stringify(ans).replace(/"/g, "'").replace(/\\u[\da-f]{4}/gi, (x) => x)}`;
    });
    // an open item whose answer key is missing entirely → add one from explanation
    s = s.replace(/(\{\s*\n\s*id: '[^']*',\s*\n\s*kind: '(?:fill|predict)',)((?:[\s\S](?!\n {4}\}))*?)(\n {4}\})/g, (m, head, mid, tail) => {
      if (/answer:/.test(mid)) return m;
      const ex = mid.match(/explanation: \{[\s\S]{0,600}?en: '((?:\\.|[^'])*)'/);
      if (!ex) return m;
      st.answers++;
      return head + mid + `\n      answer: '${clip(ex[1], 160).replace(/'/g, "\\'")}',` + tail;
    });

    // 3. filler residue in lines that survived the earlier pass
    s = s.replace(new RegExp(`'(?:${F})[^']*'`, 'g'), "''");
    s = s.replace(/\{\s*en: '',\s*bn: ''\s*\},/g, '').replace(/,\s*,/g, ',').replace(/:\s*\[\s*\]/g, ': []');
    if (/en: ''/.test(s)) s = s.replace(/(text|caption|title): \{\s*\n?\s*en: ''(?:,\s*\n?\s*bn: '')?\s*\n?\s*\},?/g, '');

    if (s !== before) {
      const empties = (t) => (t.match(/:\s*''/g) || []).length;
      if (empties(s) > empties(before)) { console.log('SKIP(would-empty) ' + h + '/' + slug); return; }
      st.files++;
      if (WRITE) writeFileSync(p, s);
    }
  });
}
console.log(`${WRITE ? 'patched' : 'dry-run'} ${only || 'all'}: files ${st.files} | nextLesson added ${st.chain} | answers derived ${st.answers} | chant files skipped ${st.skipped}`);
