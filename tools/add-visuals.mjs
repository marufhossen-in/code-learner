/* Adds a visual to every lesson that has none:
 *  - hub mapped to an existing interactive lab -> { type:'visual', id }
 *  - otherwise -> generated bilingual SVG diagram built from the lesson's own sections/keyterms
 * Re-serializes lesson files (same safe serializer as dejingle). */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import { transformSync } from 'esbuild';
const ROOT = process.env.CS_ROOT || '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/vis'; mkdirSync(TMP, { recursive: true });

const SIM = {
  arrays: 'dsa', linkedlists: 'll', stacks: 'stk', queues: 'queue', trees: 'tree', heaps: 'heap',
  hashing: 'ht', hashtables: 'ht', searching: 'srch', sorting: 'dsa', 'dynamic-programming': 'dsa', greedy: 'dsa',
  'db-design': 'database', 'db-fundamentals': 'database', normalization: 'database', transactions: 'database',
  indexes: 'database', 'query-optimization': 'database', postgresql: 'database', mysql: 'database',
  mongodb: 'database', sqlite: 'database', redis: 'cch', caching: 'cch', 'object-storage': 'database',
  aws: 'pipeline', azure: 'pipeline', gcp: 'pipeline', 'cloud-fundamentals': 'pipeline', 'cloud-networking': 'network',
  compute: 'execution', containers: 'docker', serverless: 'pipeline', iac: 'pipeline', cicd: 'pipeline',
  github: 'git', linux: 'execution', monitoring: 'pipeline', logging: 'pipeline', nginx: 'http',
  'reverse-proxy': 'http', 'load-balancing': 'network', dns: 'network', 'computer-architecture': 'execution',
  'operating-systems': 'execution', memory: 'cch', cpu: 'execution', processes: 'execution', threads: 'execution',
  'security-fundamentals': 'security', authentication: 'security', authorization: 'security', encryption: 'security',
  owasp: 'security', 'network-security': 'network', 'secure-coding': 'security', 'web-security': 'security',
  'lang-c': 'execution', 'lang-rust': 'execution', 'lang-go': 'execution', 'lang-java': 'execution',
  kotlin: 'execution', swift: 'execution', dart: 'execution', scala: 'execution', 'lang-php': 'execution',
  php: 'execution', laravel: 'execution', django: 'execution', flask: 'execution', fastapi: 'execution',
  spring: 'execution', dotnet: 'execution', csharp: 'execution', 'lang-csharp': 'execution',
  'lang-ruby': 'execution', ruby: 'execution', 'lang-python': 'py', 'lang-javascript': 'event-loop',
  'lang-typescript': 'ts-narrow', typescript: 'ts-narrow', javascript: 'event-loop', r: 'srch',
  'web-apis': 'dom-tree', dom: 'dom-tree', 'web-components': 'dom-tree', 'responsive-design': 'grid',
  bootstrap: 'flexbox', tailwind: 'flexbox', sass: 'box-model', svg: 'dom-tree', canvas: 'dom-tree',
  angular: 'dom-tree', vue: 'dom-tree', nextjs: 'react-render', react: 'react-render', 'tanstack-query': 'database',
  nodejs: 'node', express: 'node', nestjs: 'node', jquery: 'dom-tree', accessibility: 'form-valid',
  http: 'http', networking: 'network', 'system-design': 'sysd', 'api-design': 'rest', graphql: 'gql',
};
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "'";
const ser = (v, ind) => {
  const pad = '  '.repeat(ind);
  if (v === null || v === undefined) return 'undefined';
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return JSON.stringify(v);
  if (Array.isArray(v)) { if (!v.length) return '[]'; return '[\n' + v.map((x) => pad + '  ' + ser(x, ind + 1)).join(',\n') + '\n' + pad + ']'; }
  const ks = Object.keys(v);
  if (!ks.length) return '{}';
  return '{\n' + ks.map((k) => pad + '  ' + (/^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k)) + ': ' + ser(v[k], ind + 1)).join(',\n') + '\n' + pad + '}';
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clip = (s, n) => { s = String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
function hue(str) { let h = 0; for (const c of str) h = (h * 31 + c.codePointAt(0)) % 360; return h; }
function diagramFor(lesson, hub) {
  const heads = (lesson.blocks || []).filter((b) => b.type === 'heading');
  const stages = heads.slice(0, 5).map((b, i) => ({
    i,
    en: clip(b.text?.en ? (typeof b.text.en === 'string' ? b.text.en : b.text.en).replace(/^[A-Z]+ — /, '') : (b.id || ''), 26),
    bn: clip(b.text?.bn || '', 30),
  }));
  const kts = (lesson.blocks.find((b) => b.type === 'keyterms')?.items || []).slice(0, 5).map((k) => k.term);
  const H = 168, y0 = 44, bw = 108, bh = 56, gap = 12;
  const n = Math.max(3, stages.length || 3);
  const W = 640;
  const total = n * bw + (n - 1) * gap;
  const x0 = (W - total) / 2;
  const h = hue(hub + lesson.slug);
  let svg = `<svg viewBox="0 0 ${W} ${H}" font-family="system-ui, sans-serif" role="img" aria-label="Lesson flow: ${esc(stages.map((s) => s.en).join(' to '))}">\n`;
  svg += `<g font-size="12" font-weight="700" fill="currentColor">\n`;
  stages.forEach((s, i) => {
    const x = x0 + i * (bw + gap);
    svg += `<rect x="${x}" y="${y0}" width="${bw}" height="${bh}" rx="10" fill="hsl(${(h + i * 24) % 360} 65% 46% / .12)" stroke="hsl(${(h + i * 24) % 360} 60% 45%)" stroke-width="1.2"/>\n`;
    svg += `<text x="${x + 10}" y="${y0 + 15}" font-size="10" fill="hsl(${(h + i * 24) % 360} 55% 38%)" font-weight="800">${i + 1} · ${esc(s.en)}</text>\n`;
    svg += `<text x="${x + 10}" y="${y0 + 34}" font-size="10.5" fill="currentColor" opacity=".85">${esc(s.bn)}</text>\n`;
    if (i < n - 1) svg += `<path d="M ${x + bw + 1} ${y0 + bh / 2} h ${gap - 3}" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar${h})"/>\n`;
  });
  svg += `<defs><marker id="ar${h}" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor" opacity=".55"/></marker></defs>\n`;
  svg += `</g>\n`;
  svg += `<text x="${x0}" y="${y0 + bh + 26}" font-size="10.5" fill="currentColor" opacity=".7" font-weight="700">${esc(kts.length ? 'terms on this path' : 'path of this lesson')}</text>\n`;
  let cx = x0;
  kts.forEach((t, i) => {
    const w = 16 + t.length * 6.4;
    svg += `<rect x="${cx}" y="${y0 + bh + 34}" width="${w}" height="18" rx="9" fill="hsl(${(h + 180) % 360} 60% 50% / .16)" stroke="hsl(${(h + 180) % 360} 55% 45%)" stroke-opacity=".5"/>\n`;
    svg += `<text x="${cx + w / 2}" y="${y0 + bh + 46.5}" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">${esc(clip(t, 16))}</text>\n`;
    cx += w + 8;
    if (cx > W - 60) cx = x0;
  });
  svg += `</svg>`;
  return {
    type: 'diagram',
    title: { en: 'The path this lesson walks', bn: 'এই পাঠ যে-পথ হাঁটে' },
    svg,
    caption: {
      en: 'Numbered stages are the sections in order; the pills are the terms each stage must keep true. Read left to right, then open the section.',
      bn: 'নম্বর-দেওয়া ধাপগুলো ক্রম অনুযায়ী সেকশন; গোলক-চিপে সেই শব্দগুলো যা প্রতিটি ধাপে সত্যি থাকতে হবে। বাঁ থেকে ডানে পড়ুন, তারপর সেকশন খুলুন।',
    },
  };
}
let touched = 0, visAdded = 0, diaAdded = 0;
const onlyHub = process.argv[2];
for (const hub of readdirSync(ROOT).sort()) {
  if (onlyHub && hub !== onlyHub) continue;
  const dir = join(ROOT, hub, 'lessons');
  try { if (!statSync(dir).isDirectory()) continue; } catch { continue; }
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    const p = join(dir, f);
    const src0 = readFileSync(p, 'utf8');
    if (/type: 'visual'|type: 'diagram'/.test(src0)) continue;
    let mod;
    try {
      const stripped = src0.replace(/^import\s+type[^\n]*\n/gm, '');
      const js = transformSync(stripped, { loader: 'ts', format: 'esm' }).code;
      const tmpf = join(TMP, `v${touched}_${Date.now()}.mjs`);
      writeFileSync(tmpf, js);
      mod = await import(tmpf);
    } catch (e) { console.log('SKIP', hub, f, String(e.message).slice(0, 60)); continue; }
    for (const [name, lesson] of Object.entries(mod)) {
      if (!lesson?.blocks || !lesson.slug) continue;
      const simId = SIM[hub];
      const heads = lesson.blocks.filter((b) => b.type === 'heading');
      const anchorId = heads.find((h) => h.id === 'visual') ? 'visual' : (heads.find((h) => h.id === 'how') ? 'how' : (heads.find((h) => h.id === 'internal' || h.id === 'deep' || h.id === 'lab') ? h.id : (heads.length ? heads[Math.min(heads.length - 1, 3)].id : null)));
      const blockIdx = simId
        ? { type: 'visual', id: simId }
        : diagramFor(lesson, hub);
      let idx = -1;
      if (anchorId) {
        for (let i = 0; i < lesson.blocks.length; i++) if (lesson.blocks[i].type === 'heading' && lesson.blocks[i].id === anchorId) { idx = i + 1; break; }
      }
      if (idx < 0) idx = Math.min(3, lesson.blocks.length);
      lesson.blocks.splice(idx, 0, blockIdx);
      simId ? visAdded++ : diaAdded++;
      const out = `import type { Lesson } from '../../../lib/types';\n\nexport const ${name}: Lesson = ${ser(lesson, 0)};\n`;
      writeFileSync(p, out);
      touched++;
      break;
    }
  }
}
console.log('files touched:', touched, '| interactive visuals:', visAdded, '| generated diagrams:', diaAdded);
