/* PASS-3: whole-field non-Bengali ratio + code-field Bengali scan + coverage map */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, relative, basename } from 'node:path';
import { transformSync } from 'esbuild';
const ROOT = '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/esm3';
mkdirSync(TMP, { recursive: true });
const BNR = /[\u0980-\u09FF]/g;
function walk(d, acc = []) { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, acc); else if (e.endsWith('.ts') && p.includes('/lessons/')) acc.push(p); } return acc; }
const byHub = new Map();
for (const f of walk(ROOT)) { const h = relative(ROOT, f).split('/')[0]; if (!byHub.has(h)) byHub.set(h, []); byHub.get(h).push(f); }
let uid = 0;
const out = [];
const codeFieldOf = (l) => (l.code && typeof l.code === 'string' ? l.code : undefined) ?? (l.blocks?.find?.((b) => b.type === 'code')?.code);
for (const [hub, hfiles] of [...byHub.entries()].sort()) {
  const flags = [];
  const slugs = [];
  for (const f of hfiles) {
    let mod;
    try {
      const src = readFileSync(f, 'utf8').replace(/^import\s+type[^\n]*\n/gm, '');
      writeFileSync(join(TMP, `k${uid}.mjs`), transformSync(src, { loader: 'ts', format: 'esm' }).code);
      mod = await import(join(TMP, `k${uid++}.mjs`));
    } catch { flags.push('LOADFAIL ' + basename(f)); continue; }
    for (const [n, lesson] of Object.entries(mod)) {
      if (!lesson?.blocks) continue;
      slugs.push(lesson.slug);
      const bnLow = [];
      const scan = (v, path) => {
        if (typeof v === 'string') {
          if (path.endsWith('.bn')) {
            const bn = (v.match(BNR) || []).length;
            const total = v.length || 1;
            const ratio = bn / total;
            if (v.length > 60 && ratio < 0.25) bnLow.push([path, ratio.toFixed(2), v.slice(0, 100)]);
          }
          return;
        }
        if (Array.isArray(v)) { v.forEach((x, i) => scan(x, `${path}[${i}]`)); return; }
        if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) scan(x, `${path}.${k}`);
      };
      (lesson.blocks || []).forEach((b, i) => scan(b, `b${i}(${b.type})`));
      scan(lesson.summary, 'summary'); scan(lesson.title, 'title');
      for (const [path, r, s] of bnLow) flags.push(`LOWBN ${lesson.slug}@${path} r=${r} :: ${s}`);
      const code = codeFieldOf(lesson);
      if (code && BNR.test(code)) { flags.push('BN-IN-CODE ' + lesson.slug); BNR.lastIndex = 0; }
    }
  }
  out.push({ hub, n: hfiles.length, slugs, flags });
}
writeFileSync('/tmp/audit/pass3.json', JSON.stringify(out, null, 1));
const badHubs = out.filter((h) => h.flags.length);
console.log('HUBS WITH FLAGS:', badHubs.length);
for (const h of badHubs.slice(0, 40)) { console.log('##', h.hub, '(' + h.n + ')'); for (const f of h.flags.slice(0, 6)) console.log('   ', f.slice(0, 160)); }
console.log('\n=== COVERAGE: lesson counts per hub ===');
const by = {};
for (const h of out) (by[h.n] ??= []).push(h.hub);
for (const k of Object.keys(by).sort((a, b) => a - b)) console.log(k + ' lessons:', by[k].length, by[k].length <= 30 ? '[' + by[k].join(', ') + ']' : '');
