/**
 * Split run-on sentences in lesson prose. Nothing is added, dropped or reworded: the only change is
 * turning a `;` / ` — ` / `, and` inside an over-long English sentence into a full stop, because a
 * beginner loses the subject halfway through a 45-word sentence. Long sentences are the biggest
 * single readability failure on the site (386 lessons flagged for it).
 *
 * Every candidate rewrite is checked before it is accepted:
 *   - the words before and after must be the same multiset (so no content can be lost or duplicated);
 *   - no sentence may end up glued to the next one (`case.Low`) — a period must own a space;
 *   - code-looking strings, unbalanced quotes/parens, and cuts that leave a stub are skipped.
 *
 *   node tools/fix-sentences.mjs                 # dry run with samples
 *   node tools/fix-sentences.mjs --check         # unit-check the transformer itself
 *   node tools/fix-sentences.mjs --write bootstrap caching
 *
 * Word counting matches tools/audit/readable.mjs (`> 38`) so this only touches what the gate flags.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const BACKUP = join(ROOT, 'tools/audit/tmp/backup');
const MAX_WORDS = 38;
// the Bengali twin keys are in here too: leaving 'bn' out is how every run-on বাংলা
// sentence on the site survived four sweeps unnoticed
const KEYS = ['en', 'bn', 'b', 'tb', 'text', 'e', 'hint', 'why', 'note', 'noteb', 'question', 'explanation', 'brief', 'def', 'answer', 'summary', 'caption', 'title'];

// letters of any script, marks attached: Bengali prose was previously invisible to this tool,
// because the old pattern matched Latin only and so every Bengali string looked short
export const words = (s) => (s.match(/[\p{L}\p{M}'’-]+/gu) || []).length;
const tokens = (s) => (s.toLowerCase().match(/[\p{L}\p{M}\p{N}'’-]+/gu) || []).sort().join(' ');
// real code inside a prose string: braces, arrows, newlines, keywords. Naming a tag is not code —
// HTML prose says `<header>` constantly — so markup no longer blocks the cut, it only gets protected below.
const codeish = (s) => /[{}]|=>|\\n|\bfunction\b|\bconst\b|\breturn\b|\bSELECT\b|\bawait\b/.test(s);
/** ranges a cut may never land inside: a tag, a quoted example, a parenthetical */
const unsafeSpans = (sentence) => {
  const spans = [];
  for (const re of [/"[^"]*"/g, /“[^”]*”/g, /\([^)]*\)/g]) {
    for (const m of sentence.matchAll(re)) spans.push([m.index, m.index + m[0].length]);
  }
  // an unclosed `<` means the markup runs to the end of the string: no cut in it
  const open = sentence.lastIndexOf('<');
  if (open >= 0 && sentence.indexOf('>', open) < 0) spans.push([open, sentence.length]);
  for (const m of sentence.matchAll(/<[^>]*>/g)) spans.push([m.index, m.index + m[0].length]);
  return spans;
};
// an odd number of quotes means a run-on whose tails would land inside a quotation;
// unmatched parentheses are no longer a reason to refuse, because cuts never land inside a (...) span
const unbalanced = (s) => (s.match(/"/g) || []).length % 2 !== 0;

// a Bengali clause that ends in a finite verb can stand as its own sentence: the verb is what
// closes a বাংলা sentence, so a comma after one is a real boundary even with no conjunction there
const BN_END = /(করে|করেন|করতে|হয়|হোন|হলে|দেয়|দেন|থাকে|থাকেন|লাগে|লাগেন|পারে|পারেন|নেয়|নেন|বলে|আছে|ছিল|দেখায়|বোঝায়|রাখে|রাখে|পায়|যায়|এসে|পড়ে|টানে|বাঁধে|বেছে|গুণে|মানে|নয়|দেখেন|পড়েন|লিখে|লিখেন|পান)$/;

/** the last cut in a sentence that leaves two halves able to stand alone */
export function lastCut(sentence, allowCode = false) {
  const best = [];
  const spans = unsafeSpans(sentence);
  const inside = (i) => spans.some(([a, b]) => i > a && i < b);
  // a full stop after `;` or ` — ` splits a clause; after `, and|but|so` it splits a list.
  // the conjunction itself is kept so that no word is ever dropped: only ; — and , become a full stop
  // Bengali clauses chain on আর / অথচ / কিন্তু exactly where English uses and / but,
// so those are the same cut point in the reader's own language
for (const m of sentence.matchAll(/[;—–]|,\s+(?=(?:and|but|so|এবং|কিন্তু|অথচ|তাই|তবে|যদিও)\b)/g)) {
    const isConjunction = m[0] === ',';
    if (!isConjunction && allowCode && inside(m.index)) continue; // real code in the string: only cut outside tags and quotes
    if (isConjunction && inside(m.index)) continue;
    const right = sentence.slice(m.index).replace(/^[;—–,]\s*/, '').replace(/^["'(]+/, '').trim();
    const left = sentence.slice(0, m.index).replace(/[,;:\s—–]+$/, '').trim();
    if (words(left) < 8 || words(right) < 6) continue;
    if (!left || !right || /[.!?]$/.test(left)) continue;
    best.push({ left, right, bangla: BN_END.test(left) });
  }
  for (const m of sentence.matchAll(/,\s+/g)) {
    if (inside(m.index)) continue;
    const left = sentence.slice(0, m.index).replace(/[,;:\s—–]+$/, '').trim();
    const right = sentence.slice(m.index + 1).trim();
    if (!BN_END.test(left) || !/[\u0980-\u09FF]/.test(right)) continue;
    if (words(left) < 8 || words(right) < 6) continue;
    best.push({ left, right, bangla: true });
  }
  // the greedy cut leaves the offender at the end of the sentence, so try the FIRST cut too
  return best.length ? [best[best.length - 1], best[0]].find((c) => words(c.right) <= MAX_WORDS) || best[best.length - 1] : null;
}

/** one pass: split into sentences, cut the offenders */
function pass(text, allowCode = false) {
  const parts = text.split(/(?<=[.!?।])\s+/);
  let out = '', hit = false;
  for (const p of parts) {
    const cut = words(p) > MAX_WORDS ? lastCut(p, allowCode) : null;
    if (!cut) { out += (out ? ' ' : '') + p; continue; }
    const bangla = cut.bangla && /[\u0980-\u09FF]/.test(cut.left);
    const right = bangla ? cut.right : cut.right.charAt(0).toUpperCase() + cut.right.slice(1);
    out += (out ? ' ' : '') + `${cut.left}${bangla ? '।' : '.'} ${right}`;
    hit = true;
  }
  return { text: out, hit };
}

/** returns the shortened text, or null if the rewrite is not provably content-preserving */
export function fixText(str) {
  // a string carrying real code (braces, arrows, line breaks inside a snippet) is never touched;
  // prose that merely names a tag or a flag is fair game, but only at “, and / , but / , so”.
  const hardCode = /\\n|[{}]|=>/.test(str || '');
  if (!str || str.length < 150 || hardCode || unbalanced(str)) return null;
  const allowCode = codeish(str);
  if (words(str) <= MAX_WORDS) return null;   // now counts Bengali words as well
  let cur = str, changed = 0;
  // a paragraph can carry a dozen run-ons, so keep cutting until none is left
  for (let i = 0; i < 30; i++) {
    const r = pass(cur, allowCode);
    if (!r.hit) break;
    cur = r.text;
    changed++;
  }
  if (!changed) return null;
  if (tokens(cur) !== tokens(str)) return null; // content must survive exactly
  const glued = (s) => (s.match(/\p{L}[.!?…][\p{Lu}]/gu) || []).length;
  if (glued(cur) > glued(str)) return null; // no `case.Low`
  if (words(cur) !== words(str)) return null; // word count identical (punctuation is free)
  const longest = (s) => Math.max(0, ...s.split(/(?<=[.!?।])\s+/).map((p) => words(p)));
  if (longest(cur) >= longest(str)) return null; // the rewrite must actually shorten the longest sentence
  return { text: cur, changed };
}

function hubsToScan(only) {
  return readdirSync(CONTENT)
    .filter((h) => { try { return statSync(join(CONTENT, h, 'lessons')).isDirectory(); } catch { return false; } })
    .filter((h) => !['arrays', 'go', 'mysql'].includes(h) || only.includes(h)) // hand-built, already clean
    .filter((h) => !only.length || only.includes(h));
}

function selfTest() {
  const cases = [
    'Low vision is a spectrum with millions of rungs: cataracts wash contrast away entirely, macular conditions need size and space, glaucoma eats the periphery where status dots live, and the largest group — age-related decline with no clinical diagnosis — simply turns up the brightness and buys a matte screen film. The contrast floors are their ordinary Tuesday, not their edge case.',
    'Color vision deficiency is common and unfixable by hue: about 8% of men see red-green differently enough that the error state, the link, and the two chart series merge — and no palette retuning helps them, because the receptors themselves do not carry the signal at all.',
    'The compiler turns your source into machine code, and the linker stitches the pieces together, and the loader maps them into memory, and the CPU starts executing the first instruction of the program, so the machine never sees the words you typed at all.',
  ];
  const short = 'A link is a target with a label. Short sentences are left alone by this tool.';
  let bad = 0;
  for (const c of cases.concat([short])) {
    const r = fixText(c);
    const same = !r || tokens(r.text) === tokens(c);
    const glued = r ? /\p{L}[.!?…][\p{Lu}]/u.test(r.text) : false;
    if (!same || glued) { bad++; console.log(`FAIL same=${same} glued=${glued}\n  ${r ? r.text : c}`); }
    else console.log(`ok${r ? ` (${r.changed} cut${r.changed > 1 ? 's' : ''})` : ' (left alone)'}: ${r ? r.text.slice(0, 150) : c.slice(0, 60)}`);
  }
  console.log(bad ? `SELFTEST FAILED (${bad})` : 'selftest: all cases preserve content');
  process.exit(bad ? 1 : 0);
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--check')) return selfTest();
  const WRITE = argv.includes('--write');
  const only = argv.filter((a) => !a.startsWith('--'));
  let files = 0, splits = 0, rejected = 0;
  const samples = [];
  for (const hub of hubsToScan(only)) {
    const dir = join(CONTENT, hub, 'lessons');
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
      const file = join(dir, f), src = readFileSync(file, 'utf8');
      let out = src, changedHere = 0;
      for (const m of src.matchAll(new RegExp(`(?:${KEYS.join('|')})\\s*:\\s*'(?:[^'\\\\]|\\\\.)*'`, 'g'))) {
        const literal = m[0];
        const quoted = /^.*?'((?:[^'\\]|\\.)*)'$/s.exec(literal)?.[1];
        if (!quoted || quoted.length < 150) continue;
        const raw = quoted.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
        const fixed = fixText(raw);
        if (!fixed) { if (words(raw) > MAX_WORDS && !codeish(raw) && !unbalanced(raw)) rejected++; continue; }
        const back = fixed.text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        const next = `${literal.slice(0, literal.length - quoted.length - 1)}${back}'`;
        if (next === literal) continue;
        out = out.split(literal).join(next);
        changedHere += fixed.changed;
        if (!WRITE && samples.length < 4) samples.push(`${hub}/${f}\n   BEFORE: ${raw.slice(0, 170)}\n   AFTER : ${fixed.text.slice(0, 170)}`);
      }
      if (!changedHere) continue;
      files++; splits += changedHere;
      if (WRITE) {
        if (!existsSync(BACKUP)) mkdirSync(BACKUP, { recursive: true });
        const b = join(BACKUP, relative(CONTENT, file));
        mkdirSync(join(b, '..'), { recursive: true });
        copyFileSync(file, b);
        writeFileSync(file, out);
      }
    }
  }
  console.log(`${WRITE ? 'rewrote' : 'would rewrite'} ${files} files, ${splits} sentences cut; ${rejected} candidates refused (guard)`);
  for (const s of samples) console.log(' - ' + s);
  if (!WRITE) console.log('(dry run — --write to apply, each touched file backed up to tools/audit/tmp/backup first)');
}

if (process.argv[1] && process.argv[1].endsWith('fix-sentences.mjs')) main();
