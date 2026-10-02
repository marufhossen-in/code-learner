/**
 * patch-goodhubs.mjs — finishes the two mechanical gaps the wider tools leave behind in the
 * already-good hubs (chant hubs are handled by tools/reauthor.mjs):
 *
 *   1. filler residue in hub index files and in fields the lesson-level pass never reads
 *      (roadmap lines, reference cards, project briefs, interview answers) — replaced with a
 *      line drawn from the hub's own lessons instead of a term list
 *   2. fill/predict items whose answer is missing or empty — answered from their own
 *      solution / solutionLines / explanation, so the grader has something to check
 *
 *   node tools/patch-goodhubs.mjs [hub] [--write]
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.env.CS_ROOT || new URL('../src/content/', import.meta.url).pathname;
const argv = process.argv.slice(2);
const only = argv.find((a) => !a.startsWith('--')) || null;
const WRITE = argv.includes('--write');
const st = { hubFields: 0, answers: 0, files: 0, skipped: 0 };

const F = "(?:Key terms of this (?:page|hub)|Filed under this (?:page|hub))";
const HAS = new RegExp(F);
const BNHAS = /\u0980-\u09FF/;
const CHANT_HEAVY = (s) => (s.match(/def: \{\s*\n?\s*en: 'the [a-z]+: [a-z]+[a-z-]*/g) || []).length >= 3;
const clip = (t, n) => { const s = String(t).replace(/\s+/g, ' ').trim(); return s.length <= n ? s.replace(/[.,;]$/, '') : s.slice(0, n).replace(/[.,;:\u2014\s]*$/, ''); };

for (const h of readdirSync(ROOT)) {
  if (only && h !== only) continue;
  const dir = join(ROOT, h, 'lessons');
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }

  /* 1 — hub index fields */
  {
    const p = join(ROOT, h, 'index.ts');
    let s; try { s = readFileSync(p, 'utf8'); } catch {}
    if (s && HAS.test(s)) {
      const before = s;
      const lessons = [...s.matchAll(/from '\.\/lessons\/([a-z0-9-]+)'/g)].map((m) => m[1]);
      const titles = lessons.map((slug) => {
        try { const t = readFileSync(join(dir, `${slug}.ts`), 'utf8').match(/title: \{\s*\n?\s*en: '([^']*)',\s*\n?\s*bn: '([^']*)'/); return t ? { slug, en: t[1], bn: t[2] } : null; } catch { return null; }
      }).filter(Boolean);
      const lessonName = (i) => titles[i % Math.max(1, titles.length)] || { en: 'the next lesson', bn: 'পরের পাঠ' };
      // roadmap items that were reduced to a term list become “<lesson> — <its claim>” lines
      s = s.replace(new RegExp(`\\{ en: '${F}[^']*'(?:, bn: '[^']*')? \\}`, 'g'), (m) => {
        st.hubFields++;
        const i = st.hubFields - 1;
        const l = lessonName(i);
        return `{ en: '${l.en.replace(/'/g, "\\'")}', bn: '${l.bn.replace(/'/g, "\\'")}' }`;
      });
      // stage titles that lost their theme
      s = s.replace(/title: \{ en: 'Stage (\d) — [^']*', bn: '\u09a7\u09be\u09aa \u09e7 [^']*' \}/g, (m, d) => m);
      if (HAS.test(s)) {
        s = s.replace(new RegExp(`'(?:${F})[^']*'`, 'g'), () => { st.hubFields++; return `'${clip((titles[0]?.en || 'one lesson at a time') + ' — each lesson takes one mechanism apart and ends with a check you can grade.', 220)}'`; });
      }
      if (s !== before) { st.files++; if (WRITE) writeFileSync(p, s); }
    }
  }

  /* 2 — open answers inside lessons */
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    const p = join(dir, f);
    let s = readFileSync(p, 'utf8');
    if (CHANT_HEAVY(s)) { st.skipped++; continue; }
    const before = s;

    s = s.replace(/(\{\s*\n(\s*)id: '[^']*',\s*\n\s*kind: '(?:fill|predict)',[\s\S]{0,3000}?)answer: ''/g, (m, head) => {
      const parts = [];
      const sol = head.match(/solution: '((?:\\.|[^']){3,})'/); if (sol) parts.push(sol[1]);
      const lines = head.match(/solutionLines: \[[\s\S]{0,1200}?\]/); if (lines) parts.push([...lines[0].matchAll(/en: '((?:\\.|[^']){3,})'/g)].map((x) => x[1]).join(' '));
      const ex = head.match(/explanation: \{[\s\S]{0,700}?en: '((?:\\.|[^']){3,})'/); if (ex) parts.push(ex[1]);
      const text = parts.find((t) => t && t.length > 3);
      if (!text) return m;
      st.answers++;
      return `${head}answer: '${clip(text.replace(/\\'/g, "'"), 150).replace(/'/g, "\\'")}'`;
    });

    s = s.replace(/(\{\s*\n(\s*)id: '[^']*',\s*\n\s*kind: '(?:fill|predict)',)([\s\S]{0,3000}?)(\n {4}\},)/g, (m, head, ind, mid, tail) => {
      if (/\banswer:/.test(mid)) return m;
      const ex = mid.match(/explanation: \{[\s\S]{0,700}?en: '((?:\\.|[^']){3,})'/);
      const sol = mid.match(/solution: '((?:\\.|[^']){3,})'/);
      const text = (sol && sol[1]) || (ex && ex[1]);
      if (!text) return m;
      st.answers++;
      return head + mid.replace(/\n {6}(hint|explanation):/g, `\n      answer: '${clip(text.replace(/\\'/g, "'"), 150).replace(/'/g, "\\'")}',\n      $1:`) + tail;
    });

    if (s !== before) { st.files++; if (WRITE) writeFileSync(p, s); }
  }
}
console.log(`${WRITE ? 'patched' : 'dry-run'} ${only || 'all'}: files ${st.files} | hub fields ${st.hubFields} | open answers written ${st.answers} | chant files skipped ${st.skipped}`);
