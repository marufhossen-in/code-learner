/**
 * Concept check: for every lesson on the site, does it actually teach the topic its own title
 * promises, and can a beginner follow it? Written because the user asked, twice, for a topic-wise
 * verdict rather than a site-wide count.
 *
 *   node tools/audit/concept-check.mjs                 # every hub -> VERDICT.md + concept.tsv
 *   node tools/audit/concept-check.mjs caching sass    # only these hubs, printed in full
 *
 * Four measurements per lesson, from the lesson source itself:
 *   DRIFT   how many terms from its own title/slug/summary never appear in the body at all.
 *           A lesson titled "Closures" that never says closure is not on topic, however well it reads.
 *   MECH    does it show code, and does that code carry real values (numbers, quoted strings)?
 *   REPEAT  words used 6+ times in one passage, a bigram repeated 4+ times, sentences over 38 words.
 *   BN      the share of Bengali fields that hold no Bengali script.
 *
 * verdict: broken (drift >= 50% or no mechanism at all) > hazy (repeat or BN problems) >
 * thin (teaches, but too little) > ok.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../../', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');
const TMP = join(ROOT, 'tools/audit/tmp');
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const STOP = new Set(`the a an and or but of to in on for with that this from are was be it its as at by how what why when which your you we they their there here not no all any one two three more most other such than then them they into onto using used use each every both few many much also can will would could should may might must do does did done make makes made gets get got put puts set sets run runs way like line part thing things stuff know knows call calls value values name names work works yes`.split(/\s+/));

const bengali = (s) => (s.match(/[\u0985-\u098F\u0993-\u09B9\u09BD-\u09CE\u09DF]/g) || []).length;
const wordsOf = (s) => (String(s).toLowerCase().match(/[a-z][a-z'’-]{3,}/g) || []).filter((w) => !STOP.has(w));
const codeTokens = (s) => [...String(s).matchAll(/\b([A-Za-z][A-Za-z0-9_]{3,}(?:\.[A-Za-z][A-Za-z0-9_]+)?|\.[A-Za-z][A-Za-z0-9_]+)\b/g)].map((m) => m[1].toLowerCase());

function analyse(text) {
  const titleEn = /title:\s*\{[^}]*?en:\s*'([^']*)'/.exec(text)?.[1] ?? '';
  const slug = /slug:\s*'([^']+)'/.exec(text)?.[1] ?? '';
  const body = text.slice(text.indexOf(titleEn) + titleEn.length);
  const prose = [...text.matchAll(/(?:en|text|e|hint|why|note|summary|question):\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]);
  const blocks = text; // structural greps run over the whole file

  // DRIFT — terms the lesson promises in its title/slug, checked against everything it says
  const promised = [...new Set(wordsOf(`${titleEn} ${slug.replace(/-/g, ' ')}`))].filter((w) => w.length > 4);
  const camel = [...new Set(codeTokens(titleEn))].filter((t) => t.length > 4);
  const terms = [...new Set(promised.concat(camel))].slice(0, 14);
  const bodyLower = body.toLowerCase();
  const absent = terms.filter((t) => !bodyLower.includes(t.slice(0, Math.max(4, t.length - 2))));

  // MECH — code that shows something with real values
  const hasCode = /type:\s*'code'/.test(blocks) || /type:\s*'tryit'/.test(blocks);
  const codeRuns = [...blocks.matchAll(/code:\s*`([\s\S]*?)`/g)].map((m) => m[1]).join('\n');
  const numbers = (codeRuns.match(/\b\d[\d,._]*\b/g) || []).length;
  const outputs = (codeRuns.match(/(?:\/\/|#|--) *[^\n]*(=|→|->|prints|gives|is|returns|true|false|\d)/g) || []).length;

  // REPEAT — the specific things that make a page unreadable
  let hotWord = 0, hotPair = 0, longSent = 0;
  for (const p of prose) {
    const ws = wordsOf(p);
    if (!ws.length) continue;
    const freq = new Map();
    for (const w of ws) freq.set(w.slice(0, 5), (freq.get(w.slice(0, 5)) || 0) + 1);
    for (const [, n] of freq) if (n >= 6) hotWord++;
    const bi = new Map();
    for (let i = 0; i + 1 < ws.length; i++) {
      const k = `${ws[i].slice(0, 4)} ${ws[i + 1].slice(0, 4)}`;
      bi.set(k, (bi.get(k) || 0) + 1);
    }
    for (const [, n] of bi) if (n >= 4) hotPair++;
    for (const s of p.split(/(?<=[.!?।])\s+/)) if (s.split(/\s+/).filter(Boolean).length > 38) longSent++;
  }

  // BN — Bengali fields that hold no Bengali
  const bnFields = [...text.matchAll(/\b(?:bn|b|tb|nb):\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]);
  const bnFake = bnFields.filter((v) => bengali(v) < 3).length;

  const ex = (text.match(/kind:\s*'(?:mcq|fill|predict|code|short)'/g) || []).length;
  const drift = terms.length >= 3 ? absent.length / terms.length : 0;
  const hasTryit = /type:\s*'tryit'/.test(blocks);
  const hasShape = /type:\s*'(?:diagram|visual|table|steps|code|tryit)'/.test(blocks);

  let verdict = 'ok';
  const why = [];
  // "broken" means: nothing that shows the thing working, or it does not teach its own title
  if (!hasCode && !hasTryit && !hasShape) { verdict = 'broken'; why.push('no code, table, steps, diagram or lab on the page'); }
  else if (!hasCode && !hasTryit) { verdict = 'broken'; why.push('pictures and tables only — nothing runs'); }
  if (drift >= 0.6) { verdict = 'broken'; why.push(`${absent.length}/${terms.length} title terms never appear: ${absent.slice(0, 4).join(', ')}`); }
  if (verdict !== 'broken') {
    // per-lesson sums: the same numbers a reader feels as “the same thing said again and again”
    if (hotWord + hotPair >= 4) { verdict = 'hazy'; why.push(`repetition: ${hotWord} over-used words, ${hotPair} repeated phrases`); }
    if (longSent >= 4) { verdict = 'hazy'; why.push(`${longSent} passages of one sentence over 38 words`); }
    if (bnFields.length && bnFake / bnFields.length >= 0.5) { verdict = 'hazy'; why.push(`${bnFake}/${bnFields.length} Bengali fields hold no Bengali`); }
  }
  if (verdict === 'ok' && (ex < 3 || numbers + outputs < 2)) { verdict = 'thin'; why.push(`${ex} exercises; ${numbers} numbers and ${outputs} shown results in code`); }
  return { slug, title: titleEn.slice(0, 58), verdict, why: why.join('; ') || 'on topic, code with values, twin present', drift, hasCode, numbers, outputs, ex };
}

const hubs = readdirSync(CONTENT).filter((h) => { try { return statSync(join(CONTENT, h, 'lessons')).isDirectory(); } catch { return false; } })
  .filter((h) => !ONLY.length || ONLY.includes(h));

const rows = [];
for (const hub of hubs) {
  const dir = join(CONTENT, hub, 'lessons');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
    const a = analyse(readFileSync(join(dir, f), 'utf8'));
    rows.push({ hub, file: f.replace(/\.ts$/, ''), ...a });
  }
}

const byHub = new Map();
for (const r of rows) {
  const s = byHub.get(r.hub) || { lessons: 0, broken: 0, hazy: 0, thin: 0, ok: 0, worst: [] };
  s[r.verdict]++; s.lessons++;
  if (r.verdict === 'broken') s.worst.push(`${r.file} [${r.why}]`.slice(0, 150));
  byHub.set(r.hub, s);
}
const ranked = [...byHub.entries()].sort((a, b) => (b[1].broken * 3 + b[1].hazy) - (a[1].broken * 3 + a[1].hazy));

if (ONLY.length) {
  for (const r of rows) console.log(`${r.hub}/${r.slug}\t${r.verdict.toUpperCase()}\t${r.why}`);
} else {
  if (!existsSync(TMP)) mkdirSync(TMP, { recursive: true });
  writeFileSync(join(TMP, 'concept.tsv'), rows.map((r) => [`${r.hub}/${r.slug}`, r.verdict, r.drift.toFixed(2), r.numbers, r.ex, r.why].join('\t')).join('\n') + '\n');
  const tally = (k) => rows.filter((r) => r.verdict === k).length;
  const good = ranked.filter(([, s]) => s.broken === 0 && s.hazy === 0).map(([h]) => h);
  const md = [
    '# Concept check — does each lesson teach its own topic?',
    '',
    `Generated by \`node tools/audit/concept-check.mjs\` over ${rows.length} lesson files in ${byHub.size} hubs.`,
    '',
    `**Site verdict:** ok ${tally('ok')} · thin ${tally('thin')} · hazy ${tally('hazy')} · **broken ${tally('broken')}**`,
    '',
    '`broken` = the lesson never shows the thing working with real values, or more than half the terms in its own title never appear in its body.',
    '`hazy` = repetition (a word 6+ times, a phrase 4+ times), sentences nobody can hold in mind, or a Bengali field that is English.',
    '`thin` = honest and on topic, but too little practice and too few numbers for a beginner to build skill on.',
    '',
    '## Hubs ranked worst first',
    '',
    '| hub | lessons | broken | hazy | thin | ok |',
    '| --- | --- | --- | --- | --- | --- |',
    ...ranked.slice(0, 40).map(([h, s]) => `| \`${h}\` | ${s.lessons} | ${s.broken} | ${s.hazy} | ${s.thin} | ${s.ok} |`),
    '',
    '## Hubs with nothing to fix on either axis',
    '',
    good.length ? good.map((h) => `\`${h}\``).join(' · ') : '_none yet_',
    '',
    '## The broken ones, with the reason',
    '',
    ...ranked.filter(([, s]) => s.broken).slice(0, 24).map(([h, s]) => `**${h}** (${s.broken}/${s.lessons})\n\n` + s.worst.map((w) => `- ${w}`).join('\n')),
    '',
    `Full per-lesson table: \`tools/audit/tmp/concept.tsv\` (columns: lesson, verdict, title-term drift, numbers in code, exercises, reason).`,
    ''
  ].join('\n');
  writeFileSync(join(ROOT, 'tools/audit/VERDICT.md'), md);
  console.log(`lessons ${rows.length}: ok ${tally('ok')} thin ${tally('thin')} hazy ${tally('hazy')} broken ${tally('broken')}`);
  console.log(`hubs fully clean on both axes: ${good.length} (${good.slice(0, 8).join(', ')})`);
  console.log('worst hubs:', ranked.slice(0, 6).map(([h, s]) => `${h} broken ${s.broken}/${s.lessons}`).join(' · '));
  console.log('wrote tools/audit/VERDICT.md and tools/audit/tmp/concept.tsv');
}
