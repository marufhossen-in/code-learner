// digits.mjs — every prose string where a figure stated in English does not survive into the
// Bengali twin, judged with the same normalisation the gate applies (tools/audit/gate.mjs: numbersOf).
//
//   node tools/audit/digits.mjs html            list one hub
//   node tools/audit/digits.mjs --all --fix     ungroup figures in English ("1 200" -> "1200")
//                                               where that provably makes the two sides agree
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BN_DIGITS = '০১২৩৪৫৬৭৮৯';
const CODE_AROUND = /[A-Za-z0-9_.)\'"\/-]/;
const numbersOf = (s) => {
  const t = String(s ?? '').replace(/[\u09e6-\u09ef]/g, (d) => String(BN_DIGITS.indexOf(d)));
  const out = new Set();
  for (const m of t.matchAll(/\d+/g)) {
    if (CODE_AROUND.test(t[m.index - 1] ?? ' ') || CODE_AROUND.test(t[m.index + m[0].length] ?? ' ')) continue;
    out.add(m[0]);
  }
  return out;
};

const argv = process.argv.slice(2);
const FIX = argv.includes('--fix');
const ALL = argv.includes('--all');
const CONTENT = 'src/content';
const hubs = ALL
  ? readdirSync(CONTENT).filter((h) => { try { return statSync(join(CONTENT, h, 'lessons')).isDirectory(); } catch { return false; } })
  : [argv[0] || 'html'];

let hits = 0, fixed = 0;
for (const hub of hubs) {
  const dir = join(CONTENT, hub, 'lessons');
  let files;
  try { files = readdirSync(dir).filter((f) => f.endsWith('.ts')).sort(); } catch { continue; }
  for (const f of files) {
    const path = join(dir, f);
    const L = readFileSync(path, 'utf8').split('\n');
    let wrote = false;
    for (let i = 0; i + 1 < L.length; i++) {
      // the corpus writes a bilingual field as `en: '…'` on one line and `bn: '…'` on the next,
      // but options and short table cells put both twins on the SAME line: in that case reading the
      // next line compares this option against the option below it, which is a different string and
      // a reported mismatch nobody can fix. Take the pair from the same line when it is there.
      const a = L[i].match(/(?:en|title|text|question|answer|hint|explanation|caption):\s*'((?:[^'\\]|\\.)*)'/);
      if (!a) continue;
      const same = L[i].slice((a.index ?? 0) + a[0].length).match(/(?:bn|b):\s*'((?:[^'\\]|\\.)*)'/);
      const b = same ? { 1: same[1] } : L[i + 1].match(/(?:bn|b):\s*'((?:[^'\\]|\\.)*)'/);
      if (!b) continue;
      const need = numbersOf(a[1]);
      if (!need.size) continue;
      const have = numbersOf(b[1]);
      const missing = [...need].filter((n) => !have.has(n));
      if (!missing.length) continue;
      hits++;
      // the usual cause is grouping: English "1 200" against Bengali "১২০০". Unify on the plain
      // figure, and only when that provably closes the gap — nothing else is ever rewritten here.
      let fixedEn = a[1];
      for (const n of have) {
        const grouped = n.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        if (grouped !== n && fixedEn.includes(grouped)) fixedEn = fixedEn.split(grouped).join(n);
      }
      const still = [...numbersOf(fixedEn)].filter((n) => !have.has(n));
      const verdict = fixedEn === a[1] ? 'needs a hand edit' : still.length ? `ungrouped, still off: ${still.join(',')}` : 'ungrouped -> agrees';
      if (!ALL || verdict !== 'ungrouped -> agrees') console.log(`${hub}/${f}:${i + 1}  en ${[...need].join(',')}  bn ${[...have].join(',') || '(none)'}  -> ${verdict}`);
      if (FIX && verdict === 'ungrouped -> agrees') { L[i] = L[i].replace(a[1], fixedEn); fixed++; wrote = true; }
    }
    if (wrote) writeFileSync(path, L.join('\n'));
  }
}
console.log(`${ALL ? 'site' : (argv[0] || 'html')}: ${hits} disagreeing number pairs, ${fixed} fixed by ungrouping`);
