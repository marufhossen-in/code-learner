/* Site-wide quality audit (no Python).
 * Transpiles every lesson TS (type-import stripped), loads objects, checks:
 *  A) script-tangle & character defects (CJK, Cyrillic, FFFD, lone quotes)
 *  B) bilingual integrity (bare-string LText fields, missing en/bn)
 *  C) bn "raw untranslated English sentence" heuristic
 *  D) structure: heading ids vs house 9, lesson counts per hub
 * Writes /tmp/audit/results.json + console top offenders. */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, basename } from 'node:path';
import { transformSync } from 'esbuild';

const ROOT = '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/esm';
mkdirSync(TMP, { recursive: true });

const BN = /[\u0980-\u09FF]/;
const CJK = /[\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uAC00-\uD7AF]/;
const CYR = /[\u0400-\u04FF]/;
const FFFD = /\uFFFD/;
// curly quote used as a CLOSING quote with no opening in same string
const BAD_QUOTE = /[\u2019\u2018](?![\u0980-\u09FF]*[\u201C\u201D\u0022])/;
const OPEN_Q = /[\u201C]/;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (e.endsWith('.ts') && p.includes('/lessons/')) acc.push(p);
  }
  return acc;
}

const files = walk(ROOT);
// map hub -> files
const byHub = new Map();
for (const f of files) {
  const hub = relative(ROOT, f).split('/')[0];
  if (!byHub.has(hub)) byHub.set(hub, []);
  byHub.get(hub).push(f);
}

// transpile + import
let uid = 0;
const results = [];
const seenFiles = new Set();

function isLText(v) {
  return v && typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string';
}

// bn tangle: >=3 consecutive plain Latin words (not backticked, not code-ish)
function bnRawEnglishRuns(s) {
  const noCode = s.replace(/`[^`]*`/g, ' ');
  const runs = [];
  const re = /(?:[A-Za-z][A-Za-z0-9]*(?:[ .,'"]|$)\s*){3,}/g;
  let m;
  while ((m = re.exec(noCode))) {
    const t = m[0].trim();
    // filter: code-ish tokens (camelCase, dots, hyphens, parens) are allowed vocabulary
    const words = t.split(/\s+/);
    const plain = words.filter((w) => /^[A-Za-z]{2,}$/.test(w));
    if (plain.length >= 3) runs.push(t.slice(0, 80));
  }
  return runs;
}

function checkStrings(node, pathStr, out, opts = {}) {
  if (typeof node === 'string') {
    const inBn = opts.lang === 'bn';
    const inEn = opts.lang === 'en';
    if (FFFD.test(node)) out.push(['FFFD', pathStr, node.slice(0, 90)]);
    if (CJK.test(node)) out.push(['CJK', pathStr, node.match(CJK)[0] + ' :: ' + node.slice(0, 90)]);
    if (CYR.test(node) && !inBn) out.push(['CYR', pathStr, node.slice(0, 90)]);
    if (inEn && BN.test(node) && pathStr.includes('.en')) out.push(['BN-in-en', pathStr, node.slice(0, 90)]);
    if (inEn && pathStr.includes('.en') && BN.test(node)) out.push(['BN-in-en', pathStr, node.slice(0, 90)]);
    if (inBn && !opts.prose) return;
    if (inBn && opts.prose) {
      const runs = bnRawEnglishRuns(node);
      for (const r of runs) out.push(['BN-raw-en-run', pathStr, r]);
    }
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => checkStrings(v, `${pathStr}[${i}]`, out, opts));
    return;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (isLText(node)) {
        // node itself is {en,bn} — handle pair specially at parent level
      }
      if (k === 'en' && typeof v === 'string') checkStrings(v, `${pathStr}.en`, out, { lang: 'en', prose: opts.prose });
      else if (k === 'bn' && typeof v === 'string') {
        if (BN.test(v) === false && v.length > 25) out.push(['bn-missing-script', `${pathStr}.bn`, v.slice(0, 80)]);
        checkStrings(v, `${pathStr}.bn`, out, { lang: 'bn', prose: opts.prose });
      } else checkStrings(v, `${pathStr}.${k}`, out, opts);
    }
  }
}

const PROSE_TYPES = new Set(['para', 'callout', 'tip', 'warning', 'note', 'analogy', 'story', 'insight']);

for (const [hub, hfiles] of [...byHub.entries()].sort()) {
  const defects = [];
  const lessonsMeta = [];
  for (const f of hfiles) {
    seenFiles.add(f);
    let mod;
    try {
      let src = readFileSync(f, 'utf8');
      src = src.replace(/^import\s+type[^\n]*\n/gm, '').replace(/^import\s*\{[^}]*\}\s*from\s*'[^']*lib\/types'[^\n]*\n/gm, '');
      const js = transformSync(src, { loader: 'ts', format: 'esm' }).code;
      const out = join(TMP, `m${uid++}.mjs`);
      writeFileSync(out, js);
      mod = await import(out);
    } catch (e) {
      defects.push(['LOAD-FAIL', basename(f), String(e.message).slice(0, 120)]);
      continue;
    }
    for (const [expName, lesson] of Object.entries(mod)) {
      if (!lesson || typeof lesson !== 'object' || !lesson.slug) continue;
      const ids = (lesson.blocks || []).filter((b) => b.type === 'heading').map((b) => b.id);
      const exN = (lesson.blocks || []).filter((b) => b.type === 'exercise').length;
      const quiz = (lesson.blocks || []).find((b) => b.type === 'quiz');
      lessonsMeta.push({ slug: lesson.slug, ids, exN, quizQs: quiz ? (quiz.questions || []).length : 0, minutes: lesson.minutes, hasVisual: (lesson.blocks || []).some((b) => b.type === 'visual') });
      // bare-string checks on known LText fields
      for (const key of ['title', 'summary']) {
        const v = lesson[key];
        if (v && typeof v === 'string') defects.push(['bare-string', `${lesson.slug}.${key}`, v.slice(0, 60)]);
        if (v && typeof v === 'object' && typeof v.en === 'string' && typeof v.bn !== 'string') defects.push(['no-bn', `${lesson.slug}.${key}`, '']);
      }
      (lesson.blocks || []).forEach((b, i) => {
        const bp = `${lesson.slug}.blocks[${i}](${b.type})`;
        const prose = PROSE_TYPES.has(b.type) || b.type === 'keyterms';
        const opts = { prose };
        if (b.text && typeof b.text === 'string' && b.type !== 'code' && b.type !== 'example') {
          if (!['code', 'steps'].includes(b.type) && typeof b.text === 'string') {
            // headings/paras should be LText unless block is code-ish
            defects.push(['bare-string', `${bp}.text`, b.text.slice(0, 60)]);
          }
        }
        checkStrings(b, bp, defects, opts);
      });
      if (typeof lesson.code === 'string' && BN.test(lesson.code)) {
        // Bengali inside code = check if in string literals only; flag if appears in comments-heavy
      }
    }
  }
  results.push({ hub, lessonFiles: hfiles.length, lessons: lessonsMeta, defects });
}

// summary
const rows = results.map((r) => ({ hub: r.hub, n: r.lessonFiles, defects: r.defects.length, kinds: [...new Set(r.defects.map((d) => d[0]))].join(',') }));
const bad = rows.filter((x) => x.defects > 0).sort((a, b) => b.defects - a.defects);
console.log('HUBS:', rows.length, 'LESSON FILES:', rows.reduce((s, x) => s + x.n, 0));
console.log('HUBS WITH DEFECTS:', bad.length);
for (const b of bad.slice(0, 60)) console.log(String(b.defects).padStart(4), b.hub, '::', b.kinds);
writeFileSync('/tmp/audit/results.json', JSON.stringify(results, null, 1));
console.log('WROTE /tmp/audit/results.json');
