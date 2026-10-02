/**
 * Readability gate — the beginner half of the contract.
 *
 * `gate.mjs` proves a lesson is *complete*: every string bilingual, a worked example, a visual, an
 * honest answer key. A page can satisfy all of that and still be unreadable, because the old hub
 * generator wrote definitions as riddles — "A ledger is a ledger of generations", "drift as a type
 * error", "the parish gossips". Every word is translated, every slot is filled, and a beginner
 * learns nothing, because the sentence explains a word with the same word or replaces the mechanism
 * with a metaphor. These rules look for exactly that, in both languages.
 *
 * Pure module: `gate.mjs` imports it so the numbers land in the same census, and
 * `tools/audit/read-report.sh` prints the quotes behind each finding.
 */
import { needsBn, isCodeish, KEYWORDS } from '../codeish.mjs';

const BN = /[\u0980-\u09ff]/;
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
const en = (v) => (typeof v === 'string' ? v : (v && v.en) || '');
const bn = (v) => (typeof v === 'string' ? '' : (v && v.bn) || '');

/** Words that carry no meaning alone; repetition of these is not a defect. */
const STOP = new Set(`the a an of to in on by as is are was were be been being it its this that these those and or not no but if then than so such each every some any other others with without from into onto over under about after before while because unless at per via for our your their there here which who whom whose what when where how why do does did done can could will would shall should may might must have has had having he she they we you i me him her them us my his her its our same very much many most few more less all both none one two three four five six seven eight nine ten first second third new old now today write writes written value values`
  .split(/\s+/));

/** Words the old generator used *instead of* an explanation. When one of these does the work and
 * nothing concrete is on the page, the sentence is decoration. */
const METAPHOR = `ledger court parish grammar economy perimeter dispatch soil floor ceiling rent ticket veto bureaucracy choir sheriff verdict census toll turnstile dossier scripture loom anvil kiln attic cellar harbor dock lighthouse quarantine sacrament tithe fiefdom guild mill pasture granary tether paddle ratchet`.split(/\s+/);

/** Jargon a beginner is assumed to know already; anything else must be glossed on first use. */
const KNOWN = new Set(`api url uri sql html css json xml yaml http https udp tcp ip dns tls ssl cpu ram gpu ssd id ui ux sdk cli gui os db utf ascii rgb hex localhost npm npx code file line text page app web site data type value name function method class object string number array bool boolean null true false error bug test list map set key pair term word form table row cell chart graph node tree view model query server client script user login email password date time year hour minute second byte bit port path name size depth width height left right top next prev index count sum avg min max`
  .split(/\s+/));

/** A token a beginner will not know: acronym, snake_case, camelCase, dotted name. */
const JARGON = /\b([A-Z]{3,}[A-Za-z0-9]*|[a-z]+(?:_[a-z0-9]+)+|[a-z]+[A-Z][A-Za-z]*|[a-z]+\.[a-z]+(?:\.[a-z]+)?)\b/g;

const words = (s) => String(s || '').toLowerCase().match(/[a-z][a-z''-]{2,}/g) || [];
// sentence length must be measured in the reader's own script: Bengali words are shorter than
// English ones, so counting only Latin letters let every run-on Bengali sentence pass unseen
const tokens = (s) => String(s || '').split(/\s+/).filter(Boolean);
// the whole Bengali block, marks included, is 0980..09FF — one range is enough for word runs
const bnWordsAll = (s) => String(s || '').match(/[\u0980-\u09ff]{4,}/g) || [];
const sentences = (s) => String(s || '').split(/(?<=[.!?\u0964])\s+/).filter((x) => x.trim().length > 0);
const stem = (w) => String(w).toLowerCase().replace(/[^a-z]/g, '').slice(0, 5);
const count = (arr, item) => arr.reduce((n, x) => n + (x === item ? 1 : 0), 0);
const IMPERATIVE = /^(Create|Run|Write|Open|Type|Try|Add|Use|Change|Compare|Call|Read|Sort|Build|Start|Install|Copy|Paste|Repeat|Make|Give|Name|Fix|Print|Return|Check|Count|Show|List|Note|Remember|Walk|Fetch|Store|Send|Receive|Measure|Time|Break|Keep|Drop|Rename|Split|Join|Wrap|Unwrap|Print|Log|Define|Declare|Initialise|Initialize|Explain|Trace)\b/i;
const OPENERS = /^(Here|In this|This page|Start|Run|Open|Type|Write|Try|Note|A |An |The |Every|Each|Two|Three|Four|Five|Suppose|Imagine|Adding|Removing|Changing|Creating|Filtering|Sorting|Reading)/i;

/** ---------- one English string: repetition, echo, run-on, metaphor ---------- */
function checkProse(text) {
  const out = [];
  if (!isStr(text)) return out;
  const t = text.trim();
  const ws = words(t);
  if (ws.length < 8) return out;

  const seen = new Map();
  for (const w of ws) if (!STOP.has(w) && w.length >= 5) seen.set(w, (seen.get(w) || 0) + 1);
  for (const [w, n] of seen) {
    if (n >= 5 && n * 12 >= ws.length) { out.push(['readability: one word carries the whole paragraph', `“${w}” x${n} :: ${t.slice(0, 110)}`]); break; }
  }

  const bigrams = new Map();
  for (let i = 0; i + 1 < ws.length; i++) {
    const b = ws[i] + ' ' + ws[i + 1];
    if (STOP.has(ws[i]) && STOP.has(ws[i + 1])) continue;
    bigrams.set(b, (bigrams.get(b) || 0) + 1);
  }
  for (const [b, n] of bigrams) {
    if (n >= 6 && b.length > 8) { out.push(['readability: one phrase repeated instead of explained', `“${b}” x${n} :: ${t.slice(0, 110)}`]); break; }
  }
  const ngrams = new Map();
  for (let i = 0; i + 5 < ws.length; i++) {
    const g = ws.slice(i, i + 6).join(' ');
    if (/^(the|a|of|to|and|is|in) /.test(g)) continue;
    ngrams.set(g, (ngrams.get(g) || 0) + 1);
  }
  for (const [g, n] of ngrams) {
    if (n >= 2) { out.push(['readability: the same clause pasted twice', `“${g}” x${n} :: ${t.slice(0, 110)}`]); break; }
  }

  const ss = sentences(t);
  for (let i = 0; i + 1 < ss.length; i++) {
    const a = new Set(words(ss[i])), b = new Set(words(ss[i + 1]));
    if (a.size < 6 || b.size < 6) continue;
    let shared = 0;
    for (const w of a) if (b.has(w) && !STOP.has(w)) shared++;
    if (shared >= 5) { out.push(['readability: the second sentence repeats the first', `${ss[i].slice(0, 70)} || ${ss[i + 1].slice(0, 70)}`]); break; }
  }
  for (const s of ss) if (tokens(s).length > 38) { out.push(['readability: sentence too long to follow', `${s.slice(0, 130)}…`]); break; }

  const metaphors = METAPHOR.filter((m) => new RegExp(`\\b${m}\\b`, 'i').test(t));
  const showsCode = /[=`()\[\]{}.\d]/.test(t);
  if (metaphors.length >= 2 && !showsCode) out.push(['readability: metaphor where the mechanism belongs', `${metaphors.slice(0, 3).join(', ')} :: ${t.slice(0, 110)}`]);
  else if (metaphors.length >= 1 && !showsCode && /[a-z]+ as a[n ]|[a-z]+ is the [a-z]+ of /.test(t)) out.push(['readability: metaphor where the mechanism belongs', `${metaphors[0]} :: ${t.slice(0, 110)}`]);
  return out;
}

/** ---------- the first paragraph is the on-ramp ---------- */
function checkOpener(first, glossary) {
  const t = en(first);
  if (!isStr(t)) return [['readability: page never opens in plain words', 'no opening paragraph']];
  const out = [];
  const ss = sentences(t);
  const w = words(t);
  const avg = w.length / Math.max(1, ss.length);
  const speaks = /\b(you|your|we|let's|this page|you'll)\b/i.test(t);
  const shows = /[=`()\[\]{}]|[\d]/.test(t);
  if (!speaks && !shows && !OPENERS.test(t.trim()) && !IMPERATIVE.test(t.trim())) out.push(['readability: opener speaks to nobody', t.slice(0, 110)]);
  if (avg > 24 || (ss.length > 6 && avg > 14)) out.push(['readability: opener is too dense to start from', `${ss.length} sentences, ${Math.round(avg)} words each`]);

  for (const m of t.matchAll(new RegExp(JARGON.source, 'g'))) {
    const tok = m[1];
    const low = tok.toLowerCase();
    if (KNOWN.has(low)) continue;
    if (KEYWORDS.has(low)) continue;
    if (glossary && glossary.has(low)) continue;
    const before = t.slice(Math.max(0, t.indexOf(tok) - 26), t.indexOf(tok));
    const shownAsCode = ['`', '\'', '"', '[', '('].some((c) => t.includes(c + tok))
      || [')', ']', '`', '(', '.', '=', ';', ':', '/', ','].some((c) => t.includes(tok + c))
      || /\b(init|run|type|enter|call)\s+[^ ]*$/.test(before);
    if (shownAsCode) continue;
    const glossed = new RegExp(`${tok}\\s*[—–(-]|\\bcall\\w*\\s+${tok}|${tok}\\s+(is|are|means|refers to)\\b`, 'i').test(t);
    if (!glossed) { out.push(['readability: jargon in the opener with no gloss', tok]); break; }
  }
  return out;
}

/** ---------- a keyterm defined with the word it defines ---------- */
function checkDef(term, defText) {
  const out = [];
  if (!isStr(term) || !isStr(defText)) return out;
  const t = term.trim().toLowerCase().replace(/\s+/g, '');
  const d = defText.trim().toLowerCase();
  const st = stem(t);
  if (st.length < 4) return out;
  const defStems = words(d).map(stem);
  const reused = count(defStems, st);
  const re = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s+(?:is|are|means|refers to)\\s+(?:a|an|the)?\\s*([a-z][a-z-]{2,})', 'i');
  const self = re.exec(d);
  if ((self && stem(self[1]) === st) || reused >= 4) out.push([`readability: keyterm '${t}' defined with its own word`, defText.slice(0, 120)]);
  else if (words(d).length < 4) out.push([`readability: keyterm '${t}' definition too thin to learn from`, defText.slice(0, 120)]);
  return out;
}

/** ---------- the Bengali twin has to be Bengali, and readable by itself ---------- */
function checkBn(pair) {
  const out = [];
  const e = en(pair), b = bn(pair);
  if (!isStr(e) || !needsBn(e) || words(e).length < 8) return out;
  if (!isStr(b)) return out;
  const bl = (b.match(/[\u0980-\u09ff]/g) || []).length;
  const toks = String(b).split(/\s+/).filter(Boolean);
  let codeLatin = 0, proseLatin = 0;
  const latinRuns = (x) => String(x).match(/[A-Za-z][A-Za-z0-9_.-]*/g) || [];
  const stemsOf = (x) => new Set(latinRuns(x).flatMap((w) => w.toLowerCase().split(/[^a-z0-9]+/)).filter((w) => w.length > 2).map((w) => w.slice(0, 5)));
  const sourceWords = stemsOf(e);
  for (const tk of toks) {
    const lettersOnly = tk.replace(/[^A-Za-z]/g, '');
    if (!lettersOnly) continue;
    const low = lettersOnly.toLowerCase();
    const isStem = stemsOf(tk).size > 0 && [...stemsOf(tk)].every((s) => sourceWords.has(s) || KEYWORDS.has(s) || s.length < 3);
    const identifier = /[A-Z]{2,}|[a-z]+_[a-z0-9]+|[a-z]+\.[a-z]+|[A-Z][a-z]+[A-Z]/.test(tk) || KEYWORDS.has(low) || isStem;
    if (identifier) codeLatin += lettersOnly.length; else proseLatin += lettersOnly.length;
  }
  if (bl + codeLatin + proseLatin > 40 && proseLatin > 0.75 * bl) out.push(['readability: Bengali twin written mostly in English', b.slice(0, 110)]);
  const bw = bnWordsAll(b);
  const seen = new Map();
  for (const w of bw) seen.set(w, (seen.get(w) || 0) + 1);
  for (const [w, n] of seen) if (n >= 6) { out.push(['readability: same Bengali word repeated', `${w} x${n}`]); break; }
  for (const m of b.matchAll(/[\u0980-\u09ff]-([a-z]{4,})(?=[\s.,ঀ-৿)]|$)/g)) {
    if (!new RegExp('\\b' + m[1] + '\\b', 'i').test(e)) { // the pattern is বাংলা followed by a hyphen and a Latin word. It is not romanised Bengali
// (that would be Bengali spelled in Latin letters, which no lesson does): it is a gloss the Bengali
// twin invented for itself, because the English field never used that word. Renamed 2026-09-26 after
// reading 483 of these rows: the flagged fragments are seal, gate, crate, lane, spool - metaphors the
// lesson made up, not API names, so the finding stands and only the label was wrong.
out.push(['readability: latin gloss attached to a Bengali word, unanchored to the English', m[1]]); break; }
  }
  return out;
}

/** ---------- every string the learner sees, in order ---------- */
function proseStrings(lesson) {
  const list = [];
  const push = (where, pair) => { if (pair) list.push({ where, en: en(pair), bn: bn(pair) }); };
  push('summary', lesson.summary);
  (lesson.why || []).forEach((p, i) => list.push({ where: `fact ${i + 1}`, en: p.e || en(p), bn: p.b || bn(p) }));
  (lesson.blocks || []).forEach((b, i) => {
    if (!b) return;
    const at = `block ${i + 1}`;
    if (b.type === 'para' || b.type === 'callout' || b.type === 'note' || b.type === 'tip') push(at, b.text);
    push(at + ' caption', b.caption);
    push(at + ' title', b.title);
    (b.items || []).forEach((it, k) => {
      if (it && it.def) list.push({ where: `keyterm`, en: en(it.def), bn: bn(it.def), def: true, term: it.term });
      if (it && it.en !== undefined) push(at + ` item ${k + 1}`, it);
      if (it && it.text) push(at + ` step ${k + 1}`, it.text);
    });
    for (const side of ['left', 'right']) if (b[side]) {
      push(at + ' ' + side + ' title', b[side].title);
      (b[side].points || []).forEach((p, k) => push(at + ' ' + side + ' point ' + (k + 1), p));
    }
    (b.rows || []).forEach((r, ri) => (r || []).forEach((c, ci) => push(`cell ${ri + 1}/${ci + 1}`, c)));
    (b.head || []).forEach((h, hi) => push('head ' + (hi + 1), h));
    (b.steps || []).forEach((s, k) => { push(at + ' step title ' + (k + 1), s.title); push(at + ' step ' + (k + 1), s.text); });
  });
  (lesson.steps || []).forEach((s, i) => {
    list.push({ where: `step ${i + 1} title`, en: s.t || en(s.title), bn: s.tb || bn(s.title) });
    list.push({ where: `step ${i + 1}`, en: s.e || en(s.text), bn: s.b || bn(s.text) });
  });
  if (lesson.pitfall) {
    list.push({ where: 'pitfall title', en: lesson.pitfall.t, bn: lesson.pitfall.tb });
    list.push({ where: 'pitfall', en: lesson.pitfall.e, bn: lesson.pitfall.b });
  }
  list.push({ where: 'note', en: lesson.note, bn: lesson.noteb });
  const quizItems = Array.isArray(lesson.quiz) ? lesson.quiz : ((lesson.quiz && lesson.quiz.questions) || []);
  for (const [kind, arr] of [['exercise', lesson.exercises || []], ['quiz', quizItems]]) {
    arr.forEach((it, i) => {
      const at = `${kind} ${i + 1}`;
      list.push({ where: at + ' question', en: it.q || en(it.question), bn: it.qb || bn(it.question) });
      (it.options || []).forEach((o, k) => push(`${at} option ${k + 1}`, o));
      list.push({ where: at + ' hint', en: it.hint, bn: it.hintb });
      list.push({ where: at + ' why', en: it.why, bn: it.whyb });
      if (it.explanation) push(at + ' explanation', it.explanation);
    });
  }
  return list;
}

function hasConcreteExample(lesson) {
  const code = (lesson.blocks || []).filter((b) => b && (b.type === 'code' || b.type === 'tryit'))
    .map((b) => String(b.code != null ? b.code : [b.html, b.js, b.css].filter(Boolean).join('\n'))).join('\n');
  if (code.length > 20 && /[\d"'`]/.test(code)) return true;
  const table = (lesson.blocks || []).some((b) => b && b.type === 'table' && (b.rows || []).length >= 2);
  const steps = (lesson.blocks || []).some((b) => b && b.type === 'steps' && ((b.items || b.steps || []).length >= 2));
  return table || steps;
}

const INTRO = /\b(intro|first|start|basic|what is|setup|install|beginner|your first|overview|tour|thinking)\b/i;
const DEEP = /\b(internals|deep|tuning|tune|scale|performance|advanced|optimi[sz]|under the hood|production|security|concurrency|memory model|fault|capacity|trade-?offs?|hardened|garbage|collector|allocation|benchmark|isolation|consensus|replication|serialization|locking|profiling)\b/i;

export function lessonReadability(lesson) {
  const hits = [];
  const blocks = lesson.blocks || [];
  const firstPara = (blocks.find((b) => b && b.type === 'para') || {}).text || null;
  const glossary = new Set((blocks.find((b) => b && b.type === 'keyterms') || {}).items
    ? (blocks.find((b) => b && b.type === 'keyterms').items || []).map((t) => String((t && t.term) || '').toLowerCase()) : []);
  hits.push(...checkOpener(firstPara, glossary));
  for (const p of proseStrings(lesson)) {
    if (p.def) hits.push(...checkDef(p.term, p.en));
    hits.push(...checkProse(p.en));
    hits.push(...checkProse(p.bn));
    hits.push(...checkBn(p));
  }
  if (!hasConcreteExample(lesson)) hits.push(['readability: no example with a real value on the page', lesson.slug]);
  return hits;
}

export function hubReadability(hub) {
  const out = [];
  const lessons = hub.lessons || [];
  if (!lessons.length) return out;
  const heads = lessons.map((l) => `${en(l.title)} ${en(l.summary)}`);
  if (!heads.some((h) => INTRO.test(h))) out.push(['readability: hub has no beginner entry lesson', `first: ${(heads[0] || '').slice(0, 60)}`]);
  if (!heads.some((h) => DEEP.test(h))) out.push(['readability: hub never gets past the basics', 'no internals or production-level lesson']);
  if (lessons.length < 8) out.push(['readability: too few lessons to carry beginner to expert', `${lessons.length} lessons`]);
  return out;
}

export { checkProse, checkOpener, checkDef, checkBn, proseStrings, JARGON, KNOWN, METAPHOR };
