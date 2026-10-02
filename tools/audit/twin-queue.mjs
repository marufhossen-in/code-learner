/**
 * Find every place where a Bengali twin is just the English text pasted again â the most common
 * reason the gate says âprose option has no Bengaliâ (the string exists, but it is not Bengali).
 * Lists them per hub so the work can be taken hub by hub, and writes tools/audit/tmp/twins/<hub>.tsv
 * with the exact `en` string to translate.
 *
 *   node tools/audit/twin-queue.mjs            # census: count per hub
 *   node tools/audit/twin-queue.mjs --emit svg # write the work list for these hubs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../../', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const OUT = join(ROOT, 'tools/audit/tmp/twins');
const EMIT = process.argv.includes('--emit');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--') && !/^\d+$/.test(a));

/** English-looking = fewer than 3 chars of Bengali letters, i.e. not a real twin */
const words = (s) => (s.match(/[A-Za-z][A-Za-z'’-]+/g) || []).length;
const bengaliCount = (s) => (s.match(/[\u0985-\u098F\u0993-\u09B9\u09BD-\u09CE\u09DF]/g) || []).length;
const isFakeTwin = (en, bn) => bn && en && bn.trim() === en.trim() || (!!bn && bengaliCount(bn) < 3 && /[a-z] [a-z]/.test(bn) && bn.length > 12);

const hubs = readdirSync(CONTENT)
  .filter((h) => { try { return statSync(join(CONTENT, h, 'lessons')).isDirectory(); } catch { return false; } })
  .filter((h) => !only.length || only.includes(h));

const rows = [];
const padding = []; // synonym-list options: the chant style leaking into quizzes, to be deleted not translated
for (const hub of hubs) {
  const dir = join(CONTENT, hub, 'lessons');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
    const src = readFileSync(join(dir, f), 'utf8');
    const lines = src.split('\n');
    for (let i = 0; i < lines.length - 1; i++) {
      const en = /^\s*(?:en|e):\s*'((?:[^'\\]|\\.)*)',?\s*$/.exec(lines[i]);
      const bn = /^\s*(?:bn|b|tb|nb):\s*'((?:[^'\\]|\\.)*)',?\s*$/.exec(lines[i + 1]);
      if (!en || !bn) continue;
      // keyword lists are literal identifiers (`aggregate-pile, pile-merge`) â English there is correct,
      // so only prose keys count as a missing twin
      const ctx = lines.slice(Math.max(0, i - 4), i + 1).join(' ');
      if (/keywords:\s*\[/.test(ctx)) continue;
      const a = en[1].replace(/\\'/g, "'"), b = bn[1].replace(/\\'/g, "'");
      if (!isFakeTwin(a, b)) continue;
      if (words(a) < 4) continue; // a two-word label is not prose
      // a list of four bare synonyms ("back, pool, drain, spare") is filler, not prose: translating
      // it would polish the thing we are trying to remove, so it is reported under its own heading
      const synonymList = /^([A-Za-z0-9_@+.\-]\w*\s*,\s*){1,}[A-Za-z0-9_@+.\-]\w*$/.test(a) && !/\s\w+\s\w+/.test(a);
      if (synonymList) { padding.push({ hub, en: a }); continue; }
      rows.push({ hub, file: `${hub}/lessons/${f}`, line: i + 2, en: a, bn: b });
    }
  }
}

const perHub = {};
for (const r of rows) perHub[r.hub] = (perHub[r.hub] || 0) + 1;
console.log(`fake Bengali twins site-wide: ${rows.length} prose lines in ${Object.keys(perHub).length} hubs`);
console.log(`plus ${padding.length} synonym-list options (filler — translate nothing here, rewrite the quiz)`);
for (const [h, n] of Object.entries(perHub).sort((a, b) => b[1] - a[1]).slice(0, 14)) console.log(`  ${String(n).padStart(4)}  ${h}`);

if (process.argv.includes('--top')) {
  const n = Number(process.argv[process.argv.indexOf('--top') + 1] || 100);
  const rank = new Map();
  for (const r of rows) rank.set(r.en, (rank.get(r.en) || 0) + 1);
  const top = [...rank.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  writeFileSync(join(OUT, 'top.tsv'), top.map(([en]) => `${en}\t`).join('\n') + '\n');
  console.log(`top ${n} strings (of ${rank.size} unique) -> tools/audit/tmp/twins/top.tsv : they cover ${top.reduce((s, [, c]) => s + c, 0)} of ${rows.length} lines`);
}

if (EMIT) {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  const targets = only.length ? only : Object.keys(perHub);
  for (const h of targets) {
    const mine = rows.filter((r) => r.hub === h);
    if (!mine.length) continue;
    const uniq = [...new Map(mine.map((r) => [r.en, r])).values()];
    writeFileSync(join(OUT, `${h}.tsv`), uniq.map((r) => `${r.file}\t${r.line}\t${r.en.replace(/\t/g, ' ')}`).join('\n') + '\n');
    console.log(`emitted ${uniq.length} unique strings for ${h} -> tools/audit/tmp/twins/${h}.tsv`);
  }
}
