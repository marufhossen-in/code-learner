/**
 * reauthor.mjs — regenerates a hub's content files from a hand-authored spec.
 *
 *   node tools/reauthor.mjs <hub> [--check]
 *
 * Spec: src/content/_specs/<hub>.mjs  exporting  `meta` and `lessons`.
 * Emits: src/content/<hub>/index.ts + src/content/<hub>/lessons/<slug>.ts
 *
 * The engine enforces the house anatomy so every lesson reads the same way:
 *   WHAT → facts para → keyterms → HOW (steps) → code walk → TRY (tryit/code)
 *   → MISSTEP (callout + list) → visual/diagram, then exercises + quiz.
 * A lesson gets an interactive `visual` when the hub has a lab (SIM), otherwise a
 * generated stage `diagram` built from its own steps — never a decorative filler.
 */
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content');
const hub = process.argv[2];
const check = process.argv.includes('--check');
if (!hub) { console.error('usage: node tools/reauthor.mjs <hub> [--check]'); process.exit(2); }

/* ---------- authored Bengali for assessment strings ----------
 * A bare-string MCQ option is allowed only if src/content/_specs/<hub>.pairs.json gives its Bengali
 * twin, keyed by lesson slug then 'ex<N>'/'qz<N>' (N = item index). This table is hand-written per
 * hub and per item — it is not a glossary, so the same English phrase appearing in two questions can
 * be phrased differently in Bengali. Anything missing fails the run (see unpaired() below). */
let PAIRS = {};
try { PAIRS = JSON.parse(readFileSync(join(ROOT, '_specs', hub + '.pairs.json'), 'utf8')); } catch {}
const pairsOf = (slug, item) => (PAIRS[slug] && PAIRS[slug][item]) || undefined;
/** option list -> LText[], taking Bengali from an inline optionsBn or the hub pair table */
function opts(list, slug, item) {
  const bn = pairTable(slug, item);
  return list.map((o, k) => (typeof o === 'string' ? { en: o, bn: o, ...(bn && bn[k] ? { bn: bn[k] } : {}) } : { en: o.en, bn: o.bn || o.en }));
}
function pairTable(slug, item) {
  const rows = pairsOf(slug, item);
  if (!rows) return undefined;
  if (typeof rows === 'string') return rows;
  return rows;
}

/* ---------- interactive-lab ids that already exist in the app ---------- */
const SIM = {
  arrays: 'dsa', recursion: 'dsa', 'dynamic-programming': 'dsa', greedy: 'dsa', sorting: 'dsa',
  searching: 'srch', trees: 'tree', heaps: 'heap', graphs: 'graph', 'graph-algorithms': 'galg',
  linkedlists: 'll', hashtables: 'ht', hashing: 'ht', stacks: 'stk', queues: 'queue',
  javascript: 'execution', 'lang-javascript': 'execution', typescript: 'ts-narrow', 'lang-typescript': 'ts-narrow',
  python: 'py', 'lang-python': 'py', node: 'node', nodejs: 'node', express: 'node', nestjs: 'node',
  html: 'dom-tree', css: 'box-model', tailwind: 'box-model', 'responsive-design': 'flexbox',
  flexbox: 'flexbox', grid: 'grid', 'web-apis': 'dom-tree', dom: 'dom-tree', 'web-components': 'dom-tree',
  svg: 'dom-tree', canvas: 'dom-tree', react: 'react-render', nextjs: 'react-render', vue: 'react-render',
  angular: 'react-render', svelte: 'react-render', git: 'git', github: 'git', cicd: 'pipeline',
  docker: 'docker', containers: 'docker', kubernetes: 'docker', serverless: 'docker',
  sql: 'database', mysql: 'database', postgresql: 'database', mongodb: 'database', sqlite: 'database',
  redis: 'cch', caching: 'cch', 'db-fundamentals': 'database', 'db-design': 'database',
  normalization: 'database', transactions: 'database', indexes: 'database', 'query-optimization': 'database',
  http: 'http', rest: 'rest', graphql: 'gql', networking: 'network', dns: 'network', tcpip: 'network',
  'network-security': 'network', 'system-design': 'sysd', 'distributed-systems': 'dsy', 'load-balancing': 'sysd',
  'reverse-proxy': 'sysd', monitoring: 'pipeline', logging: 'pipeline', iac: 'pipeline', nginx: 'pipeline',
  linux: 'pipeline', 'linux-sys': 'pipeline', 'computer-architecture': 'execution', 'operating-systems': 'execution',
  memory: 'execution', cpu: 'execution', processes: 'execution', threads: 'execution',
  'security-fundamentals': 'security', 'web-security': 'security', 'computer-security': 'security',
  authentication: 'security', authorization: 'security', encryption: 'security', owasp: 'security',
  'secure-coding': 'security', aws: 'pipeline', azure: 'pipeline', gcp: 'pipeline',
  'cloud-fundamentals': 'pipeline', 'cloud-networking': 'network', 'object-storage': 'database', compute: 'pipeline',
  forms: 'form-valid', 'form-validation': 'form-valid',
};

import { needsBn as sharedNeedsBn } from './codeish.mjs';

/* ---------- serialization ---------- */
const q = (s) => `'${String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n')}'`;
const raw = (s) => (/[`$\\]/.test(s) ? q(s) : '`' + s.replace(/\r/g, '') + '`');
const L = (o, ind) => (typeof o === 'string' ? q(o) : `{ en: ${q(o.en)}, bn: ${q(o.bn)} }`);
function ser(v, ind = '') {
  const n = ind + '  ';
  if (v === null || v === undefined) return 'undefined';
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (typeof v === 'string') return q(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    if (v.every((x) => typeof x === 'string')) return `[\n${v.map((x) => `${n}${q(x)}`).join(',\n')},\n${ind}]`;
    return `[\n${v.map((x) => `${n}${ser(x, n)}`).join(',\n')},\n${ind}]`;
  }
  const ks = Object.keys(v).filter((k) => v[k] !== undefined);
  if (!ks.length) return '{}';
  const parts = ks.map((k) => {
    const val = v[k];
    if (k === 'en' || k === 'bn') return `${k}: ${q(val)}`;
    if (val && typeof val === 'object' && !Array.isArray(val) && val.en !== undefined && val.bn !== undefined && Object.keys(val).length === 2) return `${k}: { en: ${q(val.en)}, bn: ${q(val.bn)} }`;
    if (k === 'code' || k === 'svg') return `${k}: ${raw(val)}`;
    return `${k}: ${ser(val, n)}`;
  });
  if (parts.every((p) => p.length < 60) && parts.join(', ').length < 108) return `{ ${parts.join(', ')} }`;
  return `{\n${parts.map((p) => `${n}${p}`).join(',\n')},\n${ind}}`;
}

/* ---------- block builders (house anatomy) ---------- */
const head = (id, en, bn) => ({ type: 'heading', id, text: { en, bn } });

/** Stage diagram built from the lesson's own steps — each stage is a labelled box. */
function stageSvg(title, stages, note) {
  const w = 660, boxH = 46, gap = 26, top = 44;
  const h = top + stages.length * (boxH + gap) + 30;
  let y = top, body = '';
  stages.forEach((s, i) => {
    const fill = `hsl(${(i * 47 + 205) % 360} 72% 52%)`;
    const lines = wrap(s.e, 46, 2);
    body +=
      `<rect x="24" y="${y}" width="300" height="${boxH}" rx="9" fill="${fill}" opacity="0.16" stroke="${fill}" stroke-width="1.6"/>\n` +
      `<text x="42" y="${y + 28}" font-size="13" font-weight="700" fill="currentColor">${i + 1}. ${esc(cl(String(s.t).replace(/^\s*\d+[.)]?\s*/, ''), 34))}</text>\n` +
      `<rect x="336" y="${y}" width="300" height="${boxH}" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>\n` +
      lines.map((ln, k) => `<text x="352" y="${y + 20 + k * 15}" font-size="11" fill="currentColor">${esc(ln)}</text>`).join('\n') +
      (i < stages.length - 1 ? `\n<path d="M174,${y + boxH} L174,${y + boxH + gap}" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>` : '') +
      '\n';
    if (i < stages.length - 1) y = y + boxH + gap; else y = y + boxH;
  });
  const mid = `<text x="336" y="${top - 12}" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>\n<text x="42" y="${top - 12}" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>`;
  return `<svg viewBox="0 0 ${w} ${y + 40}" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="${esc(title)}">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
${mid}
${body}<text x="${w / 2}" y="${y + 26}" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">${esc(cl(note, 96))}</text>
</svg>`;
}
const cl = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
/** word-safe line breaking for SVG text: never cuts inside a word or inside an identifier */
function wrap(text, width, maxLines) {
  const words = String(text).replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (!cur.length) { cur = w; continue; }
    if ((cur + ' ' + w).length <= width) cur += ' ' + w;
    else { lines.push(cur); cur = w; if (lines.length >= maxLines - 1 && (cur + ' ' + w).length > width) { cur = cur; break; } }
  }
  if (lines.length < maxLines && cur) lines.push(cur);
  const tail = text.replace(/\s+/g, ' ').trim();
  const used = lines.join(' ').length;
  if (used < tail.length) lines[lines.length - 1] = cl(lines[lines.length - 1] + ' ' + tail.slice(used + 1), width);
  return lines.map((l) => cl(l, width));
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function lessonFile(hubSlug, rawSpec, i, total) {
  let spec = rawSpec;
  // the takeaway note and the mistake heading are read while blocks are built, so their authored
  // Bengali twins come from the pair table before anything else
  {
    const early = PAIRS[spec.slug] || {};
    if (early.note && !spec.noteb) spec = { ...spec, noteb: early.note };
    if (early['pitfall.t'] && spec.pitfall && !spec.pitfall.tb) spec = { ...spec, pitfall: { ...spec.pitfall, tb: early['pitfall.t'] } };
  }
  const t = spec.title;
  const blocks = [];
  const has = (id) => spec.blocks.some((b) => b.type === 'heading' && b.id === id);
  if (!has('what')) blocks.push(head('what', `WHAT — ${t.en}`, `WHAT — ${t.bn}`));
  // every page must open in plain words before any code or table appears on it: the spec's own
  // `lead` paragraph is that on-ramp, and an author who has nothing plain to say has not finished
  // the lesson — the generator refuses rather than inventing a sentence to fill the slot.
  {
    const opensWithProse = spec.blocks[0] && spec.blocks[0].type === 'para';
    if (!opensWithProse && !spec.lead) { LEAD_MISSING.push(`${hubSlug}/${spec.slug}`); spec = { ...spec, lead: { en: '', bn: '' } }; }
    if (spec.lead && !opensWithProse) {
      const l = typeof spec.lead === 'string' ? { en: spec.lead, bn: spec.leadbn || '' } : spec.lead;
      blocks.push({ type: 'para', text: { en: l.en, bn: l.bn } });
    }
  }
  for (const b of spec.blocks) blocks.push(norm(b));
  if (!spec.noMechanics) {
    const stages = (spec.steps || []).slice(0, 5);
    if (stages.length) {
      blocks.push(head('mechanics', 'HOW it runs — stage by stage', 'কীভাবে চলে — ধাপে ধাপে'));
      blocks.push({ type: 'steps', items: stages.map((s, k) => ({ title: { en: `${k + 1}. ${s.t}`, bn: `${bnNum(k + 1)}. ${s.tb || s.t}` }, text: { en: s.e, bn: s.b } })) });
    }
  }
  const visId = spec.visual === null ? null : spec.visual || SIM[hubSlug] || null;
  if (visId) blocks.push({ type: 'visual', id: visId, ...(spec.scenario ? { scenario: spec.scenario } : {}) });
  else {
    const stages = (spec.steps && spec.steps.length ? spec.steps : (spec.blocks.map((b) => b).filter(Boolean).slice(0, 0)) || []).slice(0, 5);
    const st = stages.length >= 2 ? stages : fallbackStages(spec);
    blocks.push({
      type: 'diagram',
      title: { en: `${t.en}: the moving parts`, bn: `${t.bn}: কাজের অংশগুলো` },
      svg: stageSvg(t.en, st, spec.note || spec.summary.en),
      caption: { en: spec.note || spec.summary.en, bn: spec.noteb || spec.summary.bn },
    });
  }
  if (spec.note) blocks.push({ type: 'callout', kind: 'tip', title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' }, text: { en: spec.note, bn: spec.noteb } });
  if (spec.tryit) blocks.push(head('try', 'TRY IT — edit and watch', 'চেষ্টা করুন — বদলে দেখুন'), { type: 'tryit', title: { en: spec.tryit.title || `Live ${t.en}`, bn: spec.tryit.titleBn || `লাইভ ${t.bn}` }, html: spec.tryit.html || '', css: spec.tryit.css, js: spec.tryit.js });
  if (spec.pitfall) blocks.push(head('misstep', 'COMMON MISTAKE', 'সাধারণ ভুল'), { type: 'callout', kind: 'mistake', title: { en: spec.pitfall.t, bn: spec.pitfall.tb }, text: { en: spec.pitfall.e, bn: spec.pitfall.b } });
  if (spec.why) blocks.splice(2, 0, head('why', 'WHY it matters', 'কেন দরকার'), { type: 'list', items: spec.why.map((w) => ({ en: w.e, bn: w.b })) });

  const ex = (spec.exercises || []).map((e, k) => ({
    id: `${spec.slug}-ex${k + 1}`, kind: e.kind || (e.options ? 'mcq' : 'predict'), topic: `${hubSlug}: ${t.en}`,
    question: { en: e.q, bn: e.qb }, ...(e.code ? { code: e.code } : {}),
    ...(e.options ? { options: opts(e.optionsBn ? e.options.map((o, k) => (typeof o === 'string' ? { en: o, bn: e.optionsBn[k] || o } : o)) : [], spec.slug, '').length ? opts(e.options, spec.slug, 'ex' + k).map((o, k2) => ({ ...o, bn: (e.optionsBn && e.optionsBn[k2]) || o.bn })) : opts(e.options, spec.slug, 'ex' + k), answer: e.answer } : { answer: e.answer, ...(e.accept ? { accept: [...new Set(e.accept)] } : {}) }),
    hint: { en: e.hint, bn: e.hintb }, explanation: { en: e.why, bn: e.whyb }, ...(e.solution ? { solution: e.solution } : {}),
  }));
  const qz = (spec.quiz || []).map((e, k) => ({
    id: `${spec.slug}-q${k + 1}`, kind: 'mcq', topic: `${hubSlug}: ${t.en}`,
    question: { en: e.q, bn: e.qb }, options: e.options.map((o, k) => (typeof o === 'string' ? { en: o, bn: (e.optionsBn && e.optionsBn[k]) || o } : o)), answer: e.answer,
    hint: { en: e.hint || 'Look at the example again.', bn: e.hintb || 'উদাহরণটা আবার দেখুন।' },
    explanation: { en: e.why, bn: e.whyb },
  }));
  const lesson = {
    slug: spec.slug, tech: hubSlug, title: { en: t.en, bn: t.bn }, summary: { en: spec.summary.en, bn: spec.summary.bn },
    minutes: spec.minutes || 10, blocks, exercises: ex,
    quiz: { id: `${spec.slug}-quiz`, title: { en: `Quiz — ${t.en}`, bn: `কুইজ — ${t.bn}` }, questions: qz },
    nextLesson: spec.next ? { slug: spec.next, tech: hubSlug, title: spec.nextTitle } : undefined,
  };
  // authored Bengali twins from _specs/<hub>.pairs.json, keyed by the very path this check prints
  const pairs = PAIRS[spec.slug] || {};
  for (const [path, text] of Object.entries(pairs)) {
    if (path === 'note' || path === 'pitfall.t' || !/\.bn$/.test(path)) continue;
    if (!fillBn(lesson, path, text)) {
      const msg = `BAD PAIR ${hub}/${spec.slug}: '${path}' does not exist in the lesson`;
      if (process.env.PAIRS_SOFT) { console.warn(msg); continue; }
      console.error(msg + '  (re-author the key, or run with PAIRS_SOFT=1 to list every stale path at once)');
      process.exit(2);
    }
  }
  const bad = unpaired(lesson.blocks, 'blocks')
    .concat(unpaired(lesson.exercises, 'exercises'))
    .concat(unpaired(lesson.quiz, 'quiz'))
    .concat(unpaired({ title: lesson.title, summary: lesson.summary }, 'head'));
  for (const b of [...new Set(bad)]) UNPAIRED.push(`${spec.slug}  ${b}`);
  if (spec.note && !spec.noteb) UNPAIRED.push(`${spec.slug}  note  <<  ` + String(spec.note).replace(/\s+/g, ' ').slice(0, 120));
  if (spec.pitfall && !spec.pitfall.tb) UNPAIRED.push(`${spec.slug}  pitfall.t  <<  ` + String(spec.pitfall.t).replace(/\s+/g, ' ').slice(0, 120));
  const name = spec.slug.split(/[^A-Za-z0-9]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Lesson';
  return { name, text: `import type { Lesson } from '../../../lib/types';\n\nexport const ${name}: Lesson = ${ser(lesson)};\n` };
}
function fallbackStages(spec) {
  const kt = (spec.blocks.find((b) => b.type === 'keyterms') || {}).items || [];
  const src = kt.length ? kt.slice(0, 4) : [{ term: spec.title.en, def: spec.summary }];
  return src.map((k) => ({ i: 0, t: k.term, tb: k.term, e: k.def.en, b: k.def.bn }));
}
function norm(b) { return b; }
const bnDigits = '০১২৩৪৫৬৭৮৯';
const bnNum = (n) => String(n).replace(/\d/g, (d) => bnDigits[+d]);

/* ---------- bilingual discipline ----------
 * No automatic translation here, on purpose: every English string a learner sees must arrive in
 * the spec with its Bengali twin written next to it, in context. A glossary table applied at render
 * time is what produced the tangled bilingual pages this tool exists to replace. The check below
 * fails the run and prints the exact field, so a spec cannot ship half-translated. */
const BN = /[\u0980-\u09ff]/;
const CJK = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/;
const letters = (s) => String(s ?? '').replace(/[^A-Za-z\u0980-\u09ff]/g, '').length;
/** Does this string owe the learner a Bengali twin? Code and code-shaped fragments (an assignment,
 * a call, a declaration) stay as they are — translating 'var b int64 = int64(a)' would only make it
 * harder to read. Anything that is natural English prose must come in both languages. */
const needsBn = sharedNeedsBn;
function unpaired(v, path = '', out = []) {
  if (v == null) return out;
  if (typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string') {
    if (!String(v.bn ?? '').trim() && !needsBn(v.en)) v.bn = String(v.en);  // a pure-code label reads the same in both languages
    if (needsBn(v.en) && !BN.test(v.bn || '')) out.push(`${path}.bn  <<  ${String(v.en).replace(/\s+/g, ' ').slice(0, 110)}`);
    if (CJK.test(v.en) || CJK.test(v.bn || '')) out.push(`${path} (stray CJK glyph)`);
    return out;
  }
  if (Array.isArray(v)) { v.forEach((x, i) => unpaired(x, `${path}[${i}]`, out)); return out; }
  if (typeof v === 'object') { for (const [k, x] of Object.entries(v)) unpaired(x, path ? `${path}.${k}` : k, out); return out; }
  if (typeof v === 'string' && CJK.test(v)) out.push(`${path} (stray CJK glyph)`);
  return out;
}

/** Walk a printed path like `quiz.questions[2].options[1].bn` and set it if it is still missing. */
function fillBn(root, path, text) {
  const parts = path.match(/\.?[A-Za-z_]+|\[\d+\]/g).map((t) => (t.startsWith('.') ? t.slice(1) : t));
  if (!parts || !text) return false;
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i].startsWith('[') ? +parts[i].slice(1, -1) : parts[i];
    if (k === 'lesson' && i === 0) continue;
    cur = cur == null ? cur : cur[k];
    if (cur == null) return false;
  }
  const last = parts[parts.length - 1];
  const key = last.startsWith('[') ? +last.slice(1, -1) : last;
  if (cur == null || !(key in cur)) return false;
  cur[key] = String(text);
  return true;
}

const UNPAIRED = [];
/* ---------- run ---------- */
const spec = await import(join(ROOT, '_specs', `${hub}.mjs`)).catch((e) => { console.error('spec load failed:', e.message); process.exit(2); });
const { meta, lessons } = spec;
for (const l of lessons) {
  const errs = [];
  if ((l.exercises || []).length < 3) errs.push('needs 3 exercises, has ' + (l.exercises || []).length);
  if ((l.quiz || []).length < 4) errs.push('needs 4 quiz questions, has ' + (l.quiz || []).length);
  if (!l.summary || !l.summary.en || !l.summary.bn) errs.push('summary must be bilingual');
  if (!l.blocks || !l.blocks.length) errs.push('no blocks');
  if (!l.blocks.some((b) => b.type === 'code' || b.type === 'tryit' || b.type === 'steps' || b.type === 'table')) errs.push('needs at least one worked example (code/tryit/steps/table)');
  if (errs.length) { console.error('SPEC ' + hub + '/' + l.slug + ':\n  - ' + errs.join('\n  - ')); process.exit(2); }
}
const metaBad = unpaired(meta, 'meta');
if (metaBad.length) { console.error('UNPAIRED meta ' + hub + ':\n  - ' + [...new Set(metaBad)].join('\n  - ')); process.exit(2); }
const hubDir = join(ROOT, hub); const lesDir = join(hubDir, 'lessons');
mkdirSync(lesDir, { recursive: true });

const files = [];
const bySlug = new Map(lessons.map((l) => [l.slug, l]));
const LEAD_MISSING = [];
lessons.forEach((l, i) => {
  const withNext = i + 1 < lessons.length ? { ...l, next: lessons[i + 1].slug, nextTitle: { en: lessons[i + 1].title.en, bn: lessons[i + 1].title.bn } } : l;
  const f = lessonFile(hub, withNext, i, lessons.length);
  files.push({ slug: l.slug, name: f.name, text: f.text });
});
// no page may open with a code block: a beginner needs two or three plain sentences first, and the
// author has to write them — the generator will not invent an on-ramp out of the summary.
if (LEAD_MISSING.length) {
  console.error(`LEAD MISSING ${hub}: ${LEAD_MISSING.length} lessons open with code, a table or a term list ` +
    'instead of plain words. Author lead: { en, bn } — two or three sentences that put a concrete ' +
    'situation in front of the reader (the table already has 30 rows in it, the folder already has ' +
    'these files) before any syntax appears.');
  for (const m of new Set(LEAD_MISSING)) console.error('  - ' + m);
  process.exit(2);
}
// authored-Bengali gate: refuse to write anything half-translated
if (UNPAIRED.length) { console.error(`UNPAIRED ${hub}: ${UNPAIRED.length} strings need their Bengali twin authored in the spec or in ${hub}.pairs.json (no automatic translation):`); for (const u of UNPAIRED) console.error('  - ' + u); process.exit(2); }

// A hub being rewritten from a spec is usually still carrying its old lessons. Rendering a
// half-written spec would delete them, so refuse until the spec covers at least what is on disk.
const onDisk = readdirSync(lesDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts').length;
if (!check && lessons.length < onDisk && !process.argv.includes('--force')) {
  console.error(`SHRINK GUARD ${hub}: the spec has ${lessons.length} lessons but the hub has ${onDisk} on disk.`);
  console.error(`  Rendering would delete ${onDisk - lessons.length} pages. Finish the spec, or pass --force when the`);
  console.error(`  smaller hub is what you actually want (old slugs are removed on purpose).`);
  process.exit(2);
}

for (const f of files) { if (check) { new Function('return 0'); } writeFileSync(join(lesDir, `${f.slug}.ts`), f.text); }

const keep = new Set(files.map((f) => `${f.slug}.ts`));
if (!check) for (const old of readdirSync(lesDir)) if (old.endsWith('.ts') && !keep.has(old)) rmSync(join(lesDir, old));

const stages = meta.stages || [
  { title: { en: 'Stage 1 — First principles', bn: 'ধাপ ১ — ভিত্তি' }, at: 0, to: Math.ceil(lessons.length / 3) },
  { title: { en: 'Stage 2 — Working set', bn: 'ধাপ ২ — কাজের অংশ' }, at: Math.ceil(lessons.length / 3), to: Math.ceil((lessons.length * 2) / 3) },
  { title: { en: 'Stage 3 — Professional edge', bn: 'ধাপ ৩ — পেশাদার স্তর' }, at: Math.ceil((lessons.length * 2) / 3), to: lessons.length },
];
const firstSentence = (t) => { const cut = Math.max(t.lastIndexOf('. ', 140), t.lastIndexOf('। ', 140), t.lastIndexOf('.', 140)); return (t.length > 60 && cut > 40) ? t.slice(0, cut + 1).trim() + (/[.।]$/.test(t.slice(0, cut + 1).trim()) ? '' : '.') : t.trim(); };
const roadmap = stages.map((s) => ({ title: s.title, items: lessons.slice(s.at, s.to).map((l) => ({ en: `${l.title.en} — ${firstSentence(l.summary.en)}`, bn: `${l.title.bn} — ${firstSentence(l.summary.bn)}` })) }));
const hubObj = {
  slug: hub, name: meta.name, icon: meta.icon || '📘', tagline: L(meta.tagline), intro: L(meta.intro),
  roadmap,
  projects: (meta.projects || defaultProjects(meta)).map((p) => ({ title: p.title, difficulty: p.difficulty || 'beginner', brief: p.brief })),
  bestPractices: meta.bestPractices || [],
  interview: (meta.interview || []).map((x) => ({ q: x.q, a: x.a })),
  realWorld: meta.realWorld || [],
  references: (meta.references || []).map((g) => ({ group: g.group, items: g.items.map((it) => ({ term: it.term, def: it.def })) })),
};
const idx =
  files.map((f) => `import { ${f.name} } from './lessons/${f.slug}';`).join('\n') +
  `\n\nexport const ${meta.exportName}: Hub = {\n` +
  [`  slug: ${q(hub)}`, `  name: ${q(meta.name)}`, `  icon: ${q(meta.icon || '📘')}`, `  tagline: ${L(meta.tagline, '  ')}`, `  intro: ${L(meta.intro, '  ')}`,
   `  roadmap: ${ser(roadmap, '  ')}`,
   `  lessons: [${files.map((f) => f.name).join(', ')}]`,
   `  projects: ${ser(hubObj.projects, '  ')}`, `  bestPractices: ${ser(hubObj.bestPractices, '  ')}`,
   `  interview: ${ser(hubObj.interview, '  ')}`, `  realWorld: ${ser(hubObj.realWorld, '  ')}`,
   hubObj.references.length ? `  references: ${ser(hubObj.references, '  ')}` : '', ''].filter(Boolean).join(',\n') + '\n};\n';
const idxText = `import type { Hub } from '../../lib/types';\n${idx}`;
if (!check) writeFileSync(join(hubDir, 'index.ts'), idxText);
console.log(`${hub}: ${files.length} lessons, ${files.reduce((n, f) => n + (f.text.match(/type: 'visual'/g) || []).length, 0)} visuals, ${files.reduce((n, f) => n + (f.text.match(/type: 'diagram'/g) || []).length, 0)} diagrams${check ? ' (check only)' : ''}`);
function defaultProjects(m) {
  return [
    { title: { en: `${m.name} drill`, bn: `${m.nameBn || m.name} অনুশীলন` }, brief: { en: 'Rebuild the worked examples from memory, then change one input and predict the new output before running it.', bn: 'উদাহরণগুলো মুখস্থ না দেখে লিখুন, তারপর একটি ইনপুট বদালিয়ে আউটপুট আগেই ভাবুন, পরে চালাুন।' } },
    { title: { en: `${m.name} in a real page`, bn: `সত্যিকারের পেজে ${m.nameBn || m.name}` }, brief: { en: 'Wire the concept into a small page you already own, and write one paragraph on what broke first.', bn: 'নিজের একটি ছোট পেজে ধারণাটি বসান, আর প্রথমে কী ভেঙেছিল সেটা নিয়ে একটি অনুচ্ছেদ লিখুন।' } },
  ];
}
