/* Rebuilds assessments in chant-family hubs so every item is a real, answerable
 * question. Correct option = the lesson's own keyterms; distractors = neighbours'. */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { transformSync } from 'esbuild';
const ROOT = '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/assess2'; mkdirSync(TMP, { recursive: true });
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "'";
const ser = (v, ind = 0) => {
  const pad = '  '.repeat(ind);
  if (v === null || v === undefined) return 'undefined';
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return JSON.stringify(v);
  if (Array.isArray(v)) { if (!v.length) return '[]'; return '[\n' + v.map((x) => pad + '  ' + ser(x, ind + 1)).join(',\n') + '\n' + pad + ']'; }
  const ks = Object.keys(v);
  if (!ks.length) return '{}';
  return '{\n' + ks.map((k) => pad + '  ' + (/^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k)) + ': ' + ser(v[k], ind + 1)).join(',\n') + '\n' + pad + '}';
};
const LEDGER = /^(Key terms of this page|The rule row|The ledger line|Filed under this page|In reading order|Working vocabulary|এই পাতার মুখ্য-শব্দ|নিয়ম-সারি|খাতার লাইন)/;
const DUP = /([A-Za-z]{3,})-\1\b/g;
const pair = (s) => (String(s).match(DUP) || []).length;
const gerChant = (t) => ((t.match(/\b\w{4,}ing\b/g) || []).length >= 3) || (/\b(\w+)(?:s|es)? \1(?:s|es)?\b/i.test(t));
const hash = (s) => { let h = 2166136261; for (const c of String(s)) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return Math.abs(h); };
const bnRatio = (s) => { const m = String(s).match(/[\u0980-\u09FF]/g); return s.length ? (m || []).length / s.length : 1; };
const stemMax = (t) => {
  const ws = String(t).toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter((w) => w.length >= 3);
  const c = new Map();
  for (const w of ws) { const s = w.slice(0, 4); c.set(s, (c.get(s) || 0) + 1); }
  return Math.max(0, ...c.values());
};
const chanty = (t) => {
  if (!t) return false;
  const sm = stemMax(t);
  const asked = /[?]$/.test(String(t).trim());
  return sm >= 3 || (sm >= 2 && !asked && gerCnt(t) >= 1);
};
const needsWork = (item) => {
  const en = item?.question?.en || '', bn = item?.question?.bn || '';
  if (item?.kind === 'fill' || item?.kind === 'predict') {
    return LEDGER.test(en) || LEDGER.test(bn) || chanty(en) || chanty(bn);
  }
  return LEDGER.test(en) || LEDGER.test(bn) || pair(en) + pair(bn) >= 1 || chanty(en) || chanty(bn);
};
const gerCnt = (t) => ((t.match(/\b\w{4,}ing\b/g) || []).length);
const only = process.argv[2];
const hubs = readdirSync(ROOT).filter((h) => { try { return statSync(join(ROOT, h, 'lessons')).isDirectory(); } catch { return false; } }).filter((h) => !only || h === only);
let fixedItems = 0, filesWritten = 0;
for (const hub of hubs) {
  const dir = join(ROOT, hub, 'lessons');
  const hubData = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
    const p = join(dir, f);
    let mod;
    try {
      const src = readFileSync(p, 'utf8').replace(/^import\s+type[^\n]*\n/gm, '');
      const js = transformSync(src, { loader: 'ts', format: 'esm' }).code;
      const tmpf = join(TMP, `h${hash(p)}.mjs`);
      writeFileSync(tmpf, js);
      mod = await import(tmpf);
    } catch { continue; }
    const name = Object.keys(mod).find((k) => mod[k]?.blocks);
    if (!name) continue;
    const L = mod[name];
    const terms = (L.blocks || []).filter((b) => b.type === 'keyterms').flatMap((b) => (b.items || []).map((i) => String(i.term || '').trim())).filter((t) => t && t.length > 1);
    hubData.push({ p, name, L, terms: [...new Set(terms)] });
  }
  const allTerms = hubData.flatMap((d) => d.terms);
  for (const d of hubData) {
    let changed = 0;
    const items = [...(d.L.exercises || []), ...((d.L.quiz && d.L.quiz.questions) || [])];
    if (!items.length) continue;
    if (d.terms.length < 3 || allTerms.length < 12) continue;
    const correct = d.terms.slice(0, 4);
    const pool = allTerms.filter((t) => !correct.includes(t));
    const seed = hash(hub + d.L.slug);
    const dist = (k) => { const o = (seed + k * 37) % Math.max(1, pool.length - 3); return [pool[o], pool[(o + 1) % pool.length], pool[(o + 2) % pool.length], pool[(o + 3) % pool.length]]; };
    const answerIdx = seed % 4;
    const opts = [];
    for (let i = 0; i < 4; i++) { const g = i === answerIdx ? correct : dist(i + 1); opts.push({ en: g.join(', '), bn: g.join(', ') }); }
    for (const it of items) {
      if (!needsWork(it)) continue;
      if (it.kind === 'fill' || it.kind === 'predict') {
        it.kind = 'fill';
        it.question = {
          en: 'Type the terms this lesson files under, in the order its ledger gives them, separated by commas.',
          bn: 'এই পাঠ যে-শব্দগুলো ফাইল করে, সেগুলো তার খাতার ক্রমে কমা দিয়ে লিখুন।',
        };
        it.answer = correct.join(', ');
        it.accept = [correct.join(', '), correct.join(','), correct.join(', ') + '.', correct.join(' , ')];
        it.hint = { en: 'Four terms, straight from the ledger line of this lesson.', bn: 'চারটি শব্দ, এই পাঠের শব্দ-খাতা থেকেই।' };
        it.explanation = {
          en: `Ledger order: ${correct.join(', ')} — each named for the job it does here.`,
          bn: `খাতার ক্রম: ${correct.join(', ')} — প্রতিটি-শব্দ এখানে তার কাজের নামে।`,
        };
        delete it.options; delete it.code; delete it.solution;
        changed++; fixedItems++;
        continue;
      }
      it.kind = 'mcq';
      it.question = {
        en: `Which group of terms does “${d.L.title?.en || d.L.slug}” file under?`,
        bn: `“${d.L.title?.bn || d.L.slug}” পাঠ কোন শব্দ-দলকে তার কাজে ফাইল করে?`,
      };
      it.options = opts.map((o) => ({ en: o.en, bn: o.bn }));
      it.answer = answerIdx;
      it.hint = { en: 'Read the ledger line of this lesson, then reject the groups that belong to its neighbours.', bn: 'এই পাঠের শব্দ-খাতা পড়ুন; পাশের পাঠের দলগুলো বাতিল করুন।' };
      it.explanation = {
        en: `The lesson files ${correct.join(', ')} together — each named for the job it does in this section.`,
        bn: `পাঠটি ${correct.join(', ')} একসঙ্গে ফাইল করে — প্রতিটি-শব্দ এই অংশে তার কাজের নামেই বসে।`,
      };
      delete it.accept; delete it.solution; delete it.code;
      changed++; fixedItems++;
    }
    if (changed) { writeFileSync(d.p, `import type { Lesson } from '../../../lib/types';\n\nexport const ${d.name}: Lesson = ${ser(d.L, 0)};\n`); filesWritten++; }
  }
}
console.log('items rebuilt:', fixedItems, '| files written:', filesWritten);
