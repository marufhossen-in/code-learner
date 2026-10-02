/**
 * Which hubs are too damaged to repair?  Counts, per hub, the lessons whose `keyterms.def`
 * strings are chant filler and the lessons whose prose carries no code tokens at all.
 * A hub with a high chant ratio and no code-bearing prose has nothing to polish — it must be
 * re-authored from a spec (tools/reauthor.mjs).  Usage: node tools/audit/junkrate.mjs [--all]
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const ROOT = process.env.CS_ROOT ?? '.';
const CHANT = /(Key terms of this (page|hub)|মুখ্য-?শব্দ|Filed under this page|এই পাতায় যাচাই|every term is filed|owns one duty)/;
const CODE_TOKEN = /(function|const |let |class |def |SELECT |import |#[a-z]+<|->|::|\{\}|\(\)|=>|;)/;
const hubDirs = readdirSync(join(ROOT, 'src/content')).filter((d) => existsSync(join(ROOT, 'src/content', d, 'lessons')));
const rows = [];
for (const hub of hubDirs) {
  const files = readdirSync(join(ROOT, 'src/content', hub, 'lessons')).filter((f) => f.endsWith('.ts'));
  let junk = 0, noCode = 0, allJunk = 0;
  for (const f of files) {
    const s = readFileSync(join(ROOT, 'src/content', hub, 'lessons', f), 'utf8');
    const defs = [...s.matchAll(/def:\s*\{[^}]*\}/g)].map((m) => m[0]);
    const j = defs.filter((d) => CHANT.test(d)).length;
    if (defs.length && j / defs.length >= 0.75) junk++;
    if (defs.length === 0 || j === defs.length) allJunk++;
    const paras = [...s.matchAll(/text:\s*\{[^}]*\}/g)].map((m) => m[0]).join(' ');
    if (paras && !CODE_TOKEN.test(paras)) noCode++;
  }
  const ratio = files.length ? junk / files.length : 0;
  rows.push({ hub, files: files.length, junkRatio: +ratio.toFixed(2), proseNoCode: noCode, unrepairable: ratio >= 0.5 && noCode === 0 ? 1 : 0 });
}
rows.sort((a, b) => b.junkRatio - a.junkRatio);
const queue = rows.filter((r) => r.unrepairable);
console.log(JSON.stringify(rows, null, 0).slice(0, 200) + '\n...');
console.log('unreadable hubs:', queue.length, '|', queue.map((r) => r.hub).join(' '));
console.log('partial:', rows.filter((r) => r.junkRatio >= 0.2 && !r.unrepairable).map((r) => `${r.hub}:${r.junkRatio}`).join(' '));
console.log('ok:', rows.filter((r) => r.junkRatio < 0.2).map((r) => r.hub).join(' '));
