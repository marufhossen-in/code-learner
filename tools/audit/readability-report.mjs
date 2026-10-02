/** Quote-level readability report. Bundled by run.sh-style esbuild, so it reads the same data the
 * site renders:  node tools/audit/read-report.sh [hub…]   (see tools/audit/read-report.sh) */
import { HUBS } from '../../src/content/index.ts';
import { lessonReadability, hubReadability } from './readable.mjs';
const ARGV = process.argv.slice(2);
let n = 0;
for (const hub of HUBS) {
  const id = hub.slug ?? hub.id;
  if (ARGV.length && !ARGV.includes(id)) continue;
  for (const r of hubReadability(hub)) { console.log(`HUB ${id}\t${r[0]}\t${r[1]}`); n++; }
  for (const l of hub.lessons || []) for (const [rule, quote] of lessonReadability(l)) { console.log(`${id}/${l.slug}\t${rule}\t${String(quote).replace(/\s+/g, ' ').slice(0, 150)}`); n++; }
}
console.log(`\n== readability findings: ${n}`);
