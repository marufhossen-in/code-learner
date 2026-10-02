/**
 * polish-titles.mjs — makes every lesson title read as one clean concept line, bilingual.
 *
 *   en: rebuilt when it is a flattened leftover ("Join — SQL") or has double separators / "(3)" noise
 *       → "<Concept from the slug> — <the lesson's own opening claim>"
 *   bn: rebuilt only when it is a template leftover ("পাঠ — x হাব", "পাঠ: …")
 *       → "<lesson's own opening clause in Bengali> — <Hub name>"
 * Chant-template hubs are skipped: tools/reauthor.mjs replaces those files wholesale.
 *
 *   node tools/polish-titles.mjs [hub] [--write]
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.env.CS_ROOT || new URL('../src/content/', import.meta.url).pathname;
const argv = process.argv.slice(2);
const only = argv.find((a) => !a.startsWith('--')) || null;
const WRITE = argv.includes('--write');

const ACRONYM = { Sql: 'SQL', Jwt: 'JWT', Rbac: 'RBAC', Abac: 'ABAC', Csrf: 'CSRF', Xss: 'XSS', Cors: 'CORS', Api: 'API', Http: 'HTTP', Https: 'HTTPS', Ssl: 'SSL', Tls: 'TLS', Oauth: 'OAuth', Oidc: 'OIDC', Saml: 'SAML', Dns: 'DNS', Tcp: 'TCP', Udp: 'UDP', Ip: 'IP', Rest: 'REST', Gql: 'GraphQL', Html: 'HTML', Css: 'CSS', Dom: 'DOM', Svg: 'SVG', Json: 'JSON', Xml: 'XML', Aws: 'AWS', Gcp: 'GCP', Cpu: 'CPU', Ram: 'RAM', Ci: 'CI', Cd: 'CD', Iac: 'IaC', Crud: 'CRUD', Orm: 'ORM', Dfs: 'DFS', Bfs: 'BFS', Avl: 'AVL', Rb: 'RB', Sqlite: 'SQLite', Nginx: 'Nginx', Redis: 'Redis', Docker: 'Docker', Kubernetes: 'Kubernetes', React: 'React', Node: 'Node', Linux: 'Linux', Git: 'Git', Index: 'Indexes', Sort: 'Sorting', Search: 'Searching' };
const tc = (w) => w.charAt(0).toUpperCase() + w.slice(1);
const name = (w) => ACRONYM[tc(w)] || tc(w);
const STOP = /\s+(the|a|an|of|to|in|and|that|for|with|its|into|on|by|at|as|is|are|it|this|these|from|than|then|so|not|but|or|if|when|while|which|against|over|under|near|past|onto|upon|toward|towards|per|via|via|minus|plus)$/i;
const clip = (t, n) => {
  const s = String(t).replace(/\s+/g, ' ').trim();
  if (s.length <= n) return s;
  const cut = s.slice(0, n).replace(/[.,;:—–-]+\s*$/, '');
  const sp = cut.lastIndexOf(' ');
  let out = sp > n * 0.55 ? cut.slice(0, sp) : cut;
  out = out.replace(STOP, '').replace(/[.,;:—–-\s]+$/, '');
  return out;
};
const sentences = (t) => String(t).replace(/^[“‘"]/,'').split(/(?:\.\s|\s—\s|;\s|।\s|!\s|\?\s)/).map((x) => x.trim()).filter(Boolean);
const META = /^(?:Lesson|Chapter|Every (?:lesson|court|chapter|bench|resource lesson)|The (?:hub|previous|first|second)|Nine chapters|Your API|Recap|Earlier|So far|পাতি|আগে)/i;
const opening = (t) => {
  const ss = sentences(t);
  const pick = ss.find((x) => !META.test(x) && x.length > 24) || ss[0] || '';
  return pick.replace(/^(?:And|But|So)\s+/i, (m) => m.charAt(0) === m.charAt(0).toUpperCase() ? '' : m).replace(/[.,;:]$/, '').replace(/^\s+/,'').replace(/^./,(c)=>c.toUpperCase());
};
const CHANT = /def: \{\s*\n?\s*en: 'the [a-z]+: [a-z]+/;

let en = 0, bn = 0, files = 0, skipped = 0;
for (const h of readdirSync(ROOT)) {
  if (only && h !== only) continue;
  const dir = join(ROOT, h, 'lessons');
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  const hub = readFileSync(join(ROOT, h, 'index.ts'), 'utf8').match(/\n  name: '([^']+)'/);
  const hubName = hub ? hub[1] : null;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    const p = join(dir, f);
    let s = readFileSync(p, 'utf8');
    if (CHANT.test(s)) { skipped++; continue; }
    const before = s;
    const m = s.match(/title: \{\s*\n?\s*en: '((?:\\.|[^'])*)',\s*\n?\s*bn: '((?:\\.|[^'])*)'\s*\n?\s*\}/);
    if (!m) continue;
    const sm = s.match(/summary: \{\s*\n?\s*en: '((?:\\.|[^']){40,})'[\s\S]{0,120}?bn: '((?:\\.|[^']){40,})'/);
    if (!sm) continue;
    const sumEn = sm[1].replace(/\\'/g, "'"), sumBn = sm[2].replace(/\\'/g, "'");
    let tEn = m[1], tBn = m[2];
    let c = false;

    const flatEn = /^[A-Z][A-Za-z0-9+#]* — [A-Za-z0-9+# .-]+$/.test(tEn) || /:\s/.test(tEn) || /\(\d+\)/.test(tEn) || tEn.length > 82;
    if (flatEn) {
      const words = f.replace(/\.ts$/, '').replace(/^the-/, '').split(/-(?:and-)?the-|-and-|-/).filter(Boolean).slice(0, 3).map(name);
      const concept = words.length ? words.join(' ') : hubName || 'Lesson';
      const claim = opening(sumEn);
      tEn = clip(claim.length > 12 ? `${concept} — ${claim.replace(/:\s*/g, ', ').replace(/\s—\s/g, ', ')}` : concept, 76);
      en++; c = true;
    }
    const flatBn = /^পাঠ\s*[—:-]?\s|^.*\sহাব$|^[a-z-]+ — [a-z-]+$/.test(tBn) || tBn.length < 10;
    if (flatBn && hubName) {
      const claim = opening(sumBn);
      tBn = clip(`${claim.length > 10 ? claim + ' — ' + hubName : hubName}`, 70);
      bn++; c = true;
    }
    if (c) {
      const esc = (t) => t.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      s = s.replace(m[0], `title: {\n    en: '${esc(tEn)}',\n    bn: '${esc(tBn)}'\n  }`);
      files++;
      if (WRITE) writeFileSync(p, s);
    }
  }
}
console.log(`${WRITE ? 'polished' : 'dry-run'} ${only || 'all'}: files ${files} | en ${en} | bn ${bn} | chant files skipped ${skipped}`);
