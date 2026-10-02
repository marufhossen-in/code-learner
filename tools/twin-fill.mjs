/**
 * Apply authored Bengali twins across the whole site. The gate complains about ~13,800 lines where
 * `bn:` is the English text pasted again; those come from only ~1,900 distinct strings, because a
 * quiz option label is reused in several lessons. So the twins are authored once, in a TSV, and
 * spliced everywhere:
 *
 *   node tools/audit/twin-queue.mjs --top 120        # writes tools/audit/tmp/twins/top.tsv (en<TAB>bn blank)
 *   # ...author the second column...
 *   node tools/twin-fill.mjs tools/audit/tmp/twins/top.tsv
 *
 * Rules: only a `bn`/`b`/`tb` line whose value is not Bengali is replaced (a real twin is never
 * overwritten), the `en` line above it must match the TSV exactly, and every replacement is counted
 * per line. Files are backed up to tools/audit/tmp/backup-twins first.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const BACKUP = join(ROOT, 'tools/audit/tmp/backup-twins');
const file = process.argv[2];
const DRY = process.argv.includes('--dry');
if (!file) { console.log('usage: node tools/twin-fill.mjs <pairs.tsv> [--dry]'); process.exit(2); }

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const unesc = (s) => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
const pairs = new Map();
for (const line of readFileSync(join(ROOT, file), 'utf8').split('\n')) {
  if (!line.trim()) continue;
  const [en, bn] = line.split('\t');
  if (!en || !bn || !bn.trim()) continue;
  const t = unesc(bn.trim());
  const beng = (t.match(/[\u0985-\u098F\u0993-\u09B9\u09BD-\u09CE\u09DF]/g) || []).length;
  if (beng < 2) { console.log(`refused (not Bengali): ${en.slice(0, 60)}`); continue; }
  if (!/[।.!?]$/.test(t)) { console.log(`refused (no sentence end): ${t.slice(0, 50)}`); continue; }
  pairs.set(unesc(en.trim()), t);
}
if (!pairs.size) { console.log('no usable pairs in that file'); process.exit(2); }

const bengali = (s) => (s.match(/[\u0985-\u098F\u0993-\u09B9\u09BD-\u09CE\u09DF]/g) || []).length;
const hubs = readdirSync(CONTENT).filter((h) => { try { return statSync(join(CONTENT, h, 'lessons')).isDirectory(); } catch { return false; } });

let lines = 0, used = new Set(), touched = 0;
for (const hub of hubs) {
  const dir = join(CONTENT, hub, 'lessons');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
    const path = join(dir, f);
    const src = readFileSync(path, 'utf8');
    const L = src.split('\n');
    let changedHere = 0;
    for (let i = 0; i < L.length - 1; i++) {
      const en = /^\s*(?:en|e):\s*'((?:[^'\\]|\\.)*)',?\s*$/.exec(L[i]);
      const bn = /^(\s*)(?:bn|b|tb|nb):\s*'((?:[^'\\]|\\.)*)'([,\s]*)$/.exec(L[i + 1]);
      if (!en || !bn) continue;
      const want = pairs.get(unesc(en[1]));
      if (!want) continue;
      const have = unesc(bn[2]);
      if (have === want) continue;
      if (bengali(have) >= 3 && have !== unesc(en[1])) continue; // a real twin already exists — leave it
      L[i + 1] = `${bn[1]}bn: '${esc(want)}'${bn[3]}`;
      changedHere++; lines++; used.add(unesc(en[1]));
    }
    if (changedHere) {
      touched++;
      if (!DRY) {
        if (!existsSync(BACKUP)) mkdirSync(BACKUP, { recursive: true });
        const b = join(BACKUP, relative(CONTENT, path));
        mkdirSync(join(b, '..'), { recursive: true });
        copyFileSync(path, b);
        writeFileSync(path, L.join('\n'));
      }
    }
  }
}
console.log(`${DRY ? 'would fill' : 'filled'} ${lines} twin lines in ${touched} files, from ${used.size}/${pairs.size} authored strings`);
const unused = [...pairs.keys()].filter((k) => !used.has(k));
if (unused.length) console.log(`not found anywhere (${unused.length}): ${unused.slice(0, 3).map((u) => u.slice(0, 40)).join(' | ')}`);
console.log(DRY ? '(dry run)' : `backups in tools/audit/tmp/backup-twins`);
