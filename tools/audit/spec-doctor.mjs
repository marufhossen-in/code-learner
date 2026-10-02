/**
 * Spec doctor — lists, per authoring spec in src/content/_specs, what the content gate will
 * complain about, so a hub can be fixed in one pass at the source instead of file by file.
 * It reads `<hub>.pairs.json` as well: a string whose twin lives in the pairs file is not a gap.
 *
 *   node tools/audit/spec-doctor.mjs arrays go mysql
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { needsBn } from '../codeish.mjs';

const ROOT = new URL('../../src/content/', import.meta.url).pathname;
const BN = /[\u0980-\u09ff]/;
const CJK = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/;
const letters = (s) => String(s ?? '').replace(/[^A-Za-z\u0980-\u09ff]/g, '').length;
const hubs = process.argv.slice(2).filter((h) => !h.startsWith('-'));

const enOf = (v) => (typeof v === 'string' ? v : v?.en);
const bnOf = (v) => (typeof v === 'string' ? '' : v?.bn);

for (const hub of hubs) {
  const spec = await import(join(ROOT, '_specs', `${hub}.mjs`));
  const pairsPath = join(ROOT, '_specs', `${hub}.pairs.json`);
  const pairs = existsSync(pairsPath) ? JSON.parse(readFileSync(pairsPath, 'utf8')) : {};
  /** the pairs file keys twins by the printed path, e.g. "blocks[2].rows[1][0].bn" */
  const paired = (slug, path) => {
    const v = pairs[slug]?.[path];
    return typeof v === 'string' && BN.test(v);
  };

  const out = [];
  const say = (l, m) => out.push(`${hub}/${l}\t${m}`);

  for (const l of spec.lessons) {
    if (CJK.test(JSON.stringify(l))) say(l.slug, 'stray CJK glyph in spec');

    /** judge one {en,bn} pair (or a bare string) living at `path` inside the lesson */
    const pair = (path, val, slug = l.slug) => {
      const en = enOf(val);
      if (en === undefined || !needsBn(en)) return;
      if (BN.test(bnOf(val) || '')) return;
      if (paired(slug, `${path}.bn`) || paired(slug, path)) return;
      say(slug, `${path} without bn`);
    };

    (l.blocks || []).forEach((b, bi) => {
      for (const f of ['text', 'caption', 'title']) if (b[f]) pair(`blocks[${bi}].${f}`, b[f]);
      (b.items || []).forEach((it, k) => {
        if (it?.en !== undefined) pair(`blocks[${bi}].items[${k}]`, it);
        if (it?.def) {
          pair(`blocks[${bi}].items[${k}].def`, it.def);
          if (needsBn(enOf(it.def)) && !BN.test(bnOf(it.def) || '') && !paired(l.slug, `blocks[${bi}].items[${k}].def.bn`))
            say(l.slug, `keyterm '${it.term}' def without bn`);
        }
      });
      [...(b.left?.points || []), ...(b.right?.points || [])].forEach((p, k) => pair(`blocks[${bi}].points[${k}]`, p));
      (b.rows || []).forEach((row, r) => {
        row.forEach((c, k) => { if (c && typeof c === 'object') pair(`blocks[${bi}].rows[${r}][${k}]`, c); });
        if (row.length !== (b.head || []).length) say(l.slug, `blocks[${bi}] table row ${r} width != head width`);
      });
      (b.steps || []).forEach((st, k) => { if (st?.text) pair(`blocks[${bi}].steps[${k}].text`, st.text); });
    });

    (l.exercises || []).forEach((e, ei) => {
      if (!e.hint) say(l.slug, `${e.q?.slice(0, 28)}:: missing hint`);
      if (letters(e.q) < 20 && !e.code && !/^[\s(]*[A-Z(]/.test(e.q || '')) say(l.slug, `question too short: ${e.q}`);
      (e.options || []).forEach((o, k) => {
        if (typeof o === 'string') { if (needsBn(o) && !paired(l.slug, `exercises[${ei}].options[${k}].bn`)) say(l.slug, `exercises[${ei}].options[${k}] is a bare prose string; needs {en,bn} or the pairs file`); return; }
        pair(`exercises[${ei}].options[${k}]`, o);
      });
      if (typeof e.answer === 'string' && e.answer.length > 240) say(l.slug, 'answer blob > 240 chars');
    });

    (l.quiz || []).forEach((q, qi) => {
      (q.options || []).forEach((o, k) => {
        if (typeof o === 'string') { if (needsBn(o) && !paired(l.slug, `quiz.questions[${qi}].options[${k}].bn`)) say(l.slug, `quiz.questions[${qi}].options[${k}] is a bare prose string`); return; }
        pair(`quiz.questions[${qi}].options[${k}]`, o);
      });
      if (letters(q.q) < 12 && !q.code) say(l.slug, `quiz question too short: ${q.q}`);
      const exp = q.explanation ?? q.why;
      const expBn = q.explanationb ?? q.whyb;
      if (needsBn(exp || '') && !BN.test(expBn || '') && !paired(l.slug, `quiz.questions[${qi}].explanation.bn`))
        say(l.slug, `quiz ${qi + 1} explanation without twin: ${String(q.q).slice(0, 24)}`);
    });

    (l.steps || []).forEach((st) => {
      if (!st.tb) say(l.slug, `step '${st.t}' has no Bengali title`);
      if (st.b && needsBn(st.e) && !BN.test(st.b)) say(l.slug, `step '${st.t}' text has no Bengali`);
    });
    if (l.pitfall && !BN.test(l.pitfall.tb || '') && !paired(l.slug, 'pitfall.t')) say(l.slug, 'pitfall title has no Bengali');
    if (l.note && needsBn(l.note) && !BN.test(l.noteb || '') && !paired(l.slug, 'note')) say(l.slug, 'note has no Bengali twin (noteb)');

    const blob = JSON.stringify(l);
    const englishWords = new Set();
    (function collect(o) {
      if (!o || typeof o !== 'object') return;
      for (const [k, v] of Object.entries(o)) {
        if (['en', 'e', 'q', 't', 'code', 'answer'].includes(k) && typeof v === 'string')
          v.toLowerCase().split(/[^a-z0-9_.'-]+/).forEach((w) => w && englishWords.add(w));
        else collect(v);
      }
    })(l);
    for (const m of blob.matchAll(/[\u0980-\u09ff]-([a-z]{3,})(?=[\s.,\u0980-\u09ff])/g))
      if (!englishWords.has(m[1]) && m[1].length > 3) say(l.slug, `romanized-Bengali? '-${m[1]}'`);
    if (CJK.test(blob)) say(l.slug, 'stray CJK glyph');
  }
  console.log(out.length ? out.join('\n') : `${hub}: spec clean`);
}
