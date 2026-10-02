/**
 * Content gate — the project's own strict check for lesson/hub data, written against
 * src/lib/types.ts (the canonical contract). Run it after touching content:
 *
 *   bash tools/audit/run.sh                 # every hub
 *   bash tools/audit/run.sh arrays go       # two hubs
 *   GATE_LIST=1 bash tools/audit/run.sh     # rule totals too
 *   GATE_DETAIL=40 bash tools/audit/run.sh  # show up to 40 offending lesson keys per rule
 *
 * Rules are kind-aware on purpose: `predict`/`fill` items legitimately hold a string answer and no
 * options; a Bengali line whose text is pure code may hold no Bengali glyphs; short technical
 * options (`go build .`) are the same string in both languages. What must never happen is a long
 * English sentence travelling alone, an empty answer, a filler sentence pasted in to make a
 * template look full, or a lesson that shows nothing running.
 */
import { HUBS } from '../../src/content/index.ts';
import { needsBn } from '../codeish.mjs';
import { lessonReadability, hubReadability } from './readable.mjs';

const ARGV = process.argv.slice(2);
const BN = /[\u0980-\u09ff]/;
const CJK = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af\u3130-\u318f]/;
const FILLER = [
  /Key terms of this (page|hub)/i, /Filed under this page/i, /every term is filed/i,
  /owns one duty in the section/i, /None of these[^.]{0,40}(example|rules it out)/i,
  /এই পাতায় যাচাই/, /এই পাতার মুখ্য-?শব্দ/, /হাবের মুখ্য-?শব্দ/, /উদাহরণটি তা বাদ দেয়/,
];
const TERSE = /^\s*(add|change|fix|write|complete|fill|predict|choose|run|use|create|remove|rename|swap|debug|convert|make|explain|list|sort|trace|print|return|comment|clean|open|close|update|compare|show|hide|draw|label|what|why|how|which|who|where|when|does|is|are|can|should|does|do)\b/i;

const letters = (s) => String(s ?? '').replace(/[^A-Za-z\u0980-\u09ff]/g, '').length;
const flat = (s) => String(s ?? '');
const hits = (s) => FILLER.some((r) => r.test(flat(s)));
const isLText = (v) => v && typeof v === 'object' && typeof v.en === 'string';
/** Only natural-language English owes the learner a Bengali twin. `var b int64 = int64(a)`,
 * `Array.isArray(x)` or 'TypeError: Reduce of empty array' stay exactly as written — translating a
 * compiler message or a line of code would only make the page harder to read. */

/** every string in a nested value, with a path label for the message */
function strings(obj, out = []) {
  if (obj == null) return out;
  if (typeof obj === 'string') return out.push(obj) && out;
  if (Array.isArray(obj)) { for (const x of obj) strings(x, out); return out; }
  if (typeof obj === 'object') for (const v of Object.values(obj)) strings(v, out);
  return out;
}
/** a long English string with no Bengali sibling anywhere near it */
const loneEn = (pair) => isLText(pair) && needsBn(pair.en) && !BN.test(pair.bn || '');

const RULES = new Map();
const WARNS = [];
const warn = (msg) => WARNS.push(msg);
const norm = (r) => r.replace(/keyterm '[^']*'/g, 'keyterm').replace(/block id '[^']*'/g, 'block id').replace(/nextLesson '[^']*'/g, 'nextLesson').replace(/skips '[^']*'/g, 'skips').replace(/tech '[^']*' != hub/, 'tech does not match hub').replace(/blocks\[\d+\]/g, 'block').replace(/explanation \d+/g, 'explanation').replace(/\[[\d,\[\]]+\]/g, '');
const flag = (rule, key) => {
  rule = norm(rule);
  if (!RULES.has(rule)) RULES.set(rule, new Set());
  RULES.get(rule).add(key);
};

let lessonCount = 0, lessonIssues = 0, hubIssues = 0;
const hubRows = [];

/** Bengali has its own digits, and a swapped number is a real mistranslation rather than a style
 * problem — 'The seed is 10, not 1' must not become 'বীজ ১, নয় ১০।'. Only *bare* numbers are compared:
 * digits that sit inside code (`fruits[3]`, `s[2:5]`, `UTF-8`) are deliberately not translated, so
 * including them would drown the check in noise. */
const BN_DIGITS = '০১২৩৪৫৬৭৮৯';
const NUM_WORDS = Object.assign(Object.create(null), { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, \u098f\u0995: 1, \u09a6\u09c1\u0987: 2, \u09a4\u09bf\u09a8: 3, \u099a\u09be\u09b0: 4, \u09aa\u09be\u0981\u099a: 5, \u099b\u09af: 6, \u09b8\u09be\u09a4: 7, \u0986\u099f: 8, \u09a6\u09b6: 10 });
const CODE_AROUND = /[A-Za-z0-9_.)\]'"\/-]/;
/** every number a sentence states in prose: digit runs that are not part of a code token, plus small
 * number words in either language */
const numbersOf = (s) => {
  const t = String(s ?? '').replace(/[\u09e6-\u09ef]/g, (d) => String(BN_DIGITS.indexOf(d)));
  const out = new Set();
  for (const m of t.matchAll(/\d+/g)) {
    if (CODE_AROUND.test(t[m.index - 1] ?? ' ') || CODE_AROUND.test(t[m.index + m[0].length] ?? ' ')) continue;
    out.add(m[0]);
  }
  for (const w of t.matchAll(/[A-Za-z\u0980-\u09ff]+/g)) { const k = NUM_WORDS[w[0].toLowerCase()]; if (k) out.add(String(k)); }
  return out;
};
/** one direction only: a fact stated in English must survive into the Bengali. The Bengali may add
 * numbers (a compound like “3-element” becomes “৩ উপাদানের”), so extras are not a defect. */
const digitsAgree = (en, bn) => { const a = numbersOf(en), b = numbersOf(bn); if (!a.size || !b.size) return true; for (const n of a) if (!b.has(n)) return false; return true; };
const digitsDiff = (en, bn) => { const a = numbersOf(en), b = numbersOf(bn); if (!a.size || !b.size) return ''; const m = [...a].filter(n => !b.has(n)); return m.length ? `(missing: ${m.join(',')})` : ''; };

function checkItem(e, where, key, note) {
  if (!digitsAgree(e.question?.en, e.question?.bn)) warn(`${key} ${where}: check the numbers in the Bengali question ${digitsDiff(e.question?.en, e.question?.bn)}`);
  if (!digitsAgree(e.explanation?.en, e.explanation?.bn)) warn(`${key} ${where}: check the numbers in the Bengali explanation ${digitsDiff(e.explanation?.en, e.explanation?.bn)}`);
  if (!digitsAgree(e.hint?.en, e.hint?.bn)) warn(`${key} ${where}: check the numbers in the Bengali hint ${digitsDiff(e.hint?.en, e.hint?.bn)}`);
  if (!e.id) note(`${where}: missing id`);
  if (!e.kind) note(`${where}: missing kind`);
  const hasCode = !!flat(e.code).trim();
  if (!isLText(e.question)) { note(`${where}: question is not bilingual LText`); }
  else {
    if (letters(e.question.en) < (hasCode ? 8 : 14)) note(`${where}: question too short`);
    if (!flat(e.question.bn)) note(`${where}: question has no Bengali`);
    else if (!BN.test(e.question.bn)) note(`${where}: question bn is not Bengali`);
  }
  if (Array.isArray(e.options)) {
    if (e.options.length < 2) note(`${where}: options < 2`);
    if (e.options.length > 6) note(`${where}: options > 6`);
    if (typeof e.answer !== 'number' || e.answer < 0 || e.answer >= e.options.length) note(`${where}: answer index out of range`);
    for (const o of e.options) {
      if (typeof o === 'string') { if (needsBn(o)) note(`${where}: prose option is English-only`); }
      else if (loneEn(o)) note(`${where}: prose option has no Bengali`);
      if (hits(typeof o === 'string' ? o : o?.en) || hits(o?.bn)) note(`${where}: option is filler`);
    }
  } else if (e.answer === undefined || e.answer === '' || e.answer === null) {
    if (!e.solution && !e.solutionLines) note(`${where}: no answer and no solution`);
  }
  if (!isLText(e.hint) || !flat(e.hint.en)) note(`${where}: hint missing`);
  if (typeof e.answer === 'string' && e.answer.length > 240) note(`${where}: answer is a ${e.answer.length}-char blob`);
  if (typeof e.answer === 'string' && e.kind === 'fill' && letters(e.answer) < 3) note(`${where}: fill answer is empty`);
  if (!isLText(e.explanation) || letters(e.explanation.en) < 15) note(`${where}: explanation missing or too thin`);
  else if (!flat(e.explanation.bn)) note(`${where}: explanation has no Bengali`);
  for (const s of strings(e)) { if (hits(s)) note(`${where}: filler text`); if (CJK.test(s)) note(`${where}: stray CJK glyph`); }
}

for (const hub of HUBS) {
  const id = hub.slug ?? hub.id;
  if (ARGV.length && !ARGV.includes(id)) continue;
  const hubKeys = new Set();
  const lessonRules = new Set();
  const nHub = (rule) => { if (!hubKeys.has(rule)) { hubKeys.add(rule); hubIssues++; flag(rule, id); } };

  if (!hub.name) nHub('name missing');
  if (!hub.icon) nHub('icon missing');
  if (!isLText(hub.tagline)) nHub('tagline not bilingual');
  const intro = hub.intro || hub.about;
  if (!intro) nHub('no intro/about');
  else if (loneEn(intro)) nHub('intro English-only');
  if (!Array.isArray(hub.lessons) || !hub.lessons.length) nHub('no lessons');
  if (!Array.isArray(hub.projects) || !hub.projects.length) nHub('no projects');
  if (!Array.isArray(hub.bestPractices) || hub.bestPractices.length < 3) nHub('bestPractices < 3');
  if (!Array.isArray(hub.interview) || hub.interview.length < 4) nHub('interview < 4 Q&A');
  if (!Array.isArray(hub.realWorld) || !hub.realWorld.length) nHub('no realWorld');
  if (!Array.isArray(hub.roadmap) || !hub.roadmap.length) nHub('no roadmap');
  for (const p of hub.projects || []) if (loneEn(p.brief || p.desc)) nHub('project brief English-only');
  for (const st of hub.roadmap || []) {
    if (loneEn(st.title)) nHub('roadmap stage English-only');
    for (const it of st.items || []) if (loneEn(it)) nHub('roadmap item English-only');
    if (loneEn(st.detail)) nHub('roadmap detail English-only');
  }
  for (const qa of hub.interview || []) {
    if (loneEn(qa.q) || loneEn(qa.a)) nHub('interview answer English-only');
    if (!flat(qa.a?.en) || letters(qa.a?.en) < 40) nHub('interview answer too thin');
  }
  for (const s of hub.realWorld || []) if (letters(flat(s?.en ?? s)) >= 40 && !BN.test(flat(s?.bn ?? ''))) nHub('realWorld English-only');
  for (const g of hub.references || []) for (const it of g.items || []) if (loneEn(it.def)) nHub('reference def English-only');
  for (const s of strings(hub)) { if (hits(s)) nHub('filler text in hub data'); if (CJK.test(s)) nHub('stray CJK glyph in hub data'); }

  for (const [rule] of hubReadability(hub)) nHub(rule);
  const order = (hub.lessons || []).map((l) => l.slug);
  const slugSeen = new Set();
  for (const lesson of hub.lessons || []) {
    lessonCount++;
    const key = `${id}/${lesson.slug}`;
    const mine = new Set();
    const note = (rule) => { if (!mine.has(rule)) { mine.add(rule); flag(rule, key); lessonIssues++; } lessonRules.add(`${key}|${rule}`); };
    for (const [rule] of lessonReadability(lesson)) note(rule);
    if (slugSeen.has(lesson.slug)) note('duplicate lesson slug in hub');
    slugSeen.add(lesson.slug);

    if (lesson.tech !== id) note(`tech '${lesson.tech}' != hub`);
    if (!isLText(lesson.title) || letters(lesson.title.en) < 3) note('title missing');
    else if (!flat(lesson.title.bn)) note('title has no Bengali');
    else if (!BN.test(lesson.title.bn)) note('title bn is not Bengali');
    if (!isLText(lesson.summary)) note('summary not bilingual');
    else if (letters(lesson.summary.en) < 40) note('summary too thin');
    else if (!BN.test(lesson.summary.bn || '')) note('summary bn is not Bengali');
    if (typeof lesson.minutes !== 'number' || lesson.minutes < 4 || lesson.minutes > 45) note('minutes out of 4..45');

    const blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
    if (!blocks.length) note('no blocks');
    const ids = new Set();
    let hasWorked = false, hasVisual = false;
    const numCheck = (pair, label) => { if (pair && !digitsAgree(pair.en, pair.bn)) warn(`${key} ${label}: check the numbers in the Bengali ${digitsDiff(pair.en, pair.bn)}`); };
    for (const b of blocks) {
      if (!b || !b.type) { note('block without type'); continue; }
      if (b.id) { if (ids.has(b.id)) note(`duplicate block id '${b.id}'`); ids.add(b.id); }
      if (['code', 'tryit', 'table', 'steps', 'compare'].includes(b.type)) hasWorked = true;
      if (['visual', 'diagram'].includes(b.type)) hasVisual = true;
      if (b.type === 'code' || b.type === 'tryit') {
        const body = b.code ?? [b.html, b.js, b.css].filter(Boolean).join('\n');
        if (!flat(body).trim()) note('code block is empty');
        else if (/\[object Object\]|>NaN</.test(flat(body).split('\n').map((l) => l.replace(/\/\/.*$/, '')).join('\n')) || /^(undefined|null|NaN)$/.test(flat(body).trim())) note('code block holds generator junk'); // a // comment that quotes real output is teaching, not junk
      }
      if (b.type === 'diagram') {
        if (!flat(b.svg).startsWith('<svg')) note('diagram has no svg');
        if (flat(b.svg).includes('NaN')) note('diagram svg has NaN');
        if (/[一-鿿]/.test(flat(b.svg))) note('diagram svg has stray CJK');
      }
      if (b.type === 'visual' && !b.id) note('visual block missing id');
      for (const f of ['caption', 'title', 'text']) if (b[f] && loneEn(b[f])) note(`${b.type}: ${f} English-only`);
      if (b.type === 'para' || b.type === 'callout' || b.type === 'note') {
        if (!isLText(b.text)) note(`${b.type}: text not bilingual`);
        else if (letters(b.text.en) < 40) note(`${b.type}: text too thin`);
      }
      if (b.type === 'list') for (const it of b.items || []) if (!isLText(it) || (needsBn(it.en) && !BN.test(it.bn || ''))) note('list item has no Bengali');
      if (b.type === 'keyterms') {
        const items = b.items || [];
        if (items.length < 3) note('keyterms < 3');
        for (const t of items) {
          if (!t.term) note('keyterm without term');
          if (!isLText(t.def) || letters(t.def.en) < 20) note(`keyterm '${t.term}' def too thin`);
          else if (!BN.test(t.def.bn || '')) note(`keyterm '${t.term}' def has no Bengali`);
        }
      }
      if (b.type === 'steps') for (const st of b.items || []) {
        if (loneEn(st.title)) note('step title English-only');
        if (!isLText(st.text)) note('step text not bilingual');
        else if (needsBn(st.text.en) && !BN.test(st.text.bn || '')) note('step text has no Bengali');
      }
      if (b.type === 'table') {
        if (!Array.isArray(b.head) || b.head.length < 2) note('table head < 2 cols');
        if (!Array.isArray(b.rows) || b.rows.length < 2) note('table rows < 2');
        for (const row of b.rows || []) {
          if (row.length !== (b.head || []).length) note('table row length != head');
          for (const cell of row) {
            const s = typeof cell === 'string' ? cell : cell?.s ?? cell?.en;
            if (hits(s)) note('table cell is filler');
            if (cell && typeof cell === 'object' && !cell.bn && letters(cell.en ?? cell.s ?? '') >= 40) note('table cell prose English-only');
          }
        }
      }
      if (b.type === 'compare') {
        for (const side of [b.left, b.right]) for (const p of side?.points || []) if (!isLText(p) || (needsBn(p.en) && !BN.test(p.bn || ''))) note('compare point has no Bengali');
      }
      numCheck(b.text, `${b.type} text`); numCheck(b.caption, `${b.type} caption`); numCheck(b.title, `${b.type} title`);
      for (const it of b.items || []) { numCheck(it.def, `keyterm '${it.term}' def`); numCheck(it.text, 'step text'); if (it.en !== undefined) numCheck(it, 'list item'); }
      for (const row of b.rows || []) for (const c of row) if (c && typeof c === 'object') numCheck(c, 'table cell');
      for (const s of strings(b)) { if (hits(s)) note(`${b.type}: filler text`); if (CJK.test(s)) note(`${b.type}: stray CJK glyph`); }
    }
    if (!hasWorked) note('no worked example');
    if (!hasVisual) note('no visual/diagram');

    const ex = Array.isArray(lesson.exercises) ? lesson.exercises : [];
    if (ex.length < 3) note(`exercises ${ex.length} < 3`);
    ex.forEach((e, k) => checkItem(e, `exercise ${k + 1}`, key, note));
    const qz = lesson.quiz && Array.isArray(lesson.quiz.questions) ? lesson.quiz.questions : [];
    if (!lesson.quiz || !Array.isArray(lesson.quiz.questions)) note('quiz is not a Quiz object');
    if (qz.length < 4) note(`quiz ${qz.length} < 4`);
    qz.forEach((e, k) => checkItem(e, `quiz ${k + 1}`, key, note));
  
    const i = order.indexOf(lesson.slug);
    if (i >= 0 && i < order.length - 1) {
      const nxt = lesson.nextLesson?.slug || (typeof lesson.next === 'string' ? lesson.next : lesson.next?.slug);
      if (!nxt) note('nextLesson missing');
      else if (!order.includes(nxt)) note(`nextLesson '${nxt}' not in this hub`);
      else if (nxt !== order[i + 1]) note(`nextLesson '${nxt}' skips '${order[i + 1]}'`);
    }
    if (i === order.length - 1 && lesson.nextLesson) note('last lesson still has nextLesson');
  }
  hubRows.push([id, (hub.lessons || []).length, lessonRules.size + hubKeys.size]);
}

for (const [id, n, m] of hubRows.sort((a, b) => b[2] - a[2])) console.log(`GATE ${id} lessons: ${n} issues: ${m}`);
if (WARNS.length) { console.log(`\n-- ${WARNS.length} to eyeball (numbers):`); for (const w of WARNS.slice(0, 25)) console.log('   ' + w); }
console.log(`\n== hubs ${hubRows.length}, lessons ${lessonCount}, lesson issues ${lessonIssues}, hub issues ${hubIssues}`);
const all = [...RULES].sort((a, b) => b[1].size - a[1].size);
for (const [r, s] of all) {
  console.log(`RULE ${r} :: ${s.size}`);
  if (process.env.GATE_DETAIL) console.log('   ' + [...s].slice(0, +process.env.GATE_DETAIL).join(' '));
}
process.exit(0);
