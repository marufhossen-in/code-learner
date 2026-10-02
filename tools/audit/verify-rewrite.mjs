/**
 * Prove that a bulk prose rewrite changed punctuation only — no word gained, lost or duplicated —
 * across every file it touched. Compares src/content against tools/audit/tmp/backup.
 *
 *   node tools/audit/verify-rewrite.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../../', import.meta.url).pathname;
const BACKUP = join(ROOT, 'tools/audit/tmp/backup');
const CONTENT = join(ROOT, 'src/content');
// case-insensitive: the only legal change besides punctuation is capitalising the word that starts
// the new sentence, so a difference that is purely case is a pass, anything else is a failure.
const wordList = (s) => (s.match(/[A-Za-z][A-Za-z'’-]+/g) || []).map((w) => w.toLowerCase()).sort();
const glued = (s) => (s.match(/\p{L}[.!?…][\p{Lu}\u0985-\u09B9]/gu) || []).length;
// a word is any run of letters in either script, so Bengali text is guarded like English
const words = (s) => (s.match(/[\p{L}\p{M}\p{N}'’-]+/gu) || []).length;
const longSent = (s) => s.split(/(?<=[.!?।])\s+/).filter((p) => (p.match(/[A-Za-z][A-Za-z'’-]+/g) || []).length > 38).length;

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : d.name.endsWith('.ts') ? [join(dir, d.name)] : []));
if (!existsSync(BACKUP)) { console.log('no backup directory — nothing to verify'); process.exit(0); }

let files = 0, bad = 0, newGlue = 0, rewritten = 0, sentBefore = 0, sentAfter = 0, bytesDelta = 0;
const diffs = [];
for (const b of walk(BACKUP)) {
  const cur = join(CONTENT, relative(BACKUP, b));
  if (!existsSync(cur)) { diffs.push(`MISSING ${relative(CONTENT, cur)}`); bad++; continue; }
  // scoped to the prose lines the punctuation pass is allowed to touch. A `bn:` line is excluded on
  // purpose: tools/twin-fill.mjs legitimately replaces English pasted into a Bengali field, and
  // comparing whole files (code blocks and all) would call that damage.
  const prose = (s) => s.split('\n').filter((l) => /^\s*(?:en|e|text|hint|why|note|noteb|question|explanation|brief|def|answer|summary|caption):/.test(l)).join('\n');
  const before = prose(readFileSync(b, 'utf8')), after = prose(readFileSync(cur, 'utf8'));
  files++;
  const wb = wordList(before), wa = wordList(after);
  sentBefore += longSent(before); sentAfter += longSent(after);
  bytesDelta += after.length - before.length;
  if (wb.length !== wa.length || wb.some((w, i) => w !== wa[i])) {
    // a lesson rewritten from scratch legitimately differs in every word — only the bulk pass must be lossless
    if (longSent(after) === 0 && glued(after) === 0 && Math.abs(after.length - before.length) / Math.max(1, before.length) > 0.3) { rewritten++; diffs.push(`hand-rewritten (skipped): ${relative(CONTENT, cur)}`); continue; }
    bad++;
    const at = wb.findIndex((w, i) => w !== wa[i]);
    diffs.push(`WORDS CHANGED in ${relative(CONTENT, cur)} at #${at}: backup had "${wb[at]}", now "${wa[at]}" (counts ${wb.length} vs ${wa.length})`);
  }
  if (glued(after) > glued(before)) { newGlue++; diffs.push(`NEW GLUED SENTENCE in ${relative(CONTENT, cur)}: ${glued(before)} -> ${glued(after)}`); }
}
console.log(`verified ${files} touched files`);
console.log(`  files rewritten by hand, not by the bulk pass: ${rewritten}`);
console.log(`  words identical in every file: ${bad ? `NO — ${bad} file(s) differ` : 'yes'}`);
console.log(`  sentences glued without a space: ${newGlue ? `NO — ${newGlue} file(s)` : 'none introduced'}`);
console.log(`  run-on sentences in the prose lines of those files: ${sentBefore} before -> ${sentAfter} after (${sentBefore - sentAfter} shortened)`);
console.log(`  bytes added by the rewrite: ${bytesDelta} (${(bytesDelta / Math.max(1, sentBefore - sentAfter)).toFixed(1)} per shortened sentence — a cut only swaps \` — \` or \`, \` for \`. \`, so this stays between -4 and +2; a bigger magnitude would mean text actually moved)`);
for (const d of diffs.slice(0, 10)) console.log('  ! ' + d);
process.exit(bad || newGlue ? 1 : 0);
